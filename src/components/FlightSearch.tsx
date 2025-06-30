"use client";

import { useState, useRef } from "react";
import { FlightSearchRequest } from "../types";
import { api } from "../lib/api";
import Calendar from "./Calendar";
import { format } from "date-fns";

interface FlightSearchProps {
  onSearch: (results: any, searchData: FlightSearchRequest) => void;
  compact?: boolean;
}

export default function FlightSearch({ onSearch, compact = false }: FlightSearchProps) {
  const [searchData, setSearchData] = useState<FlightSearchRequest>({
    TripType: "RT",
    origin: "",
    destination: "",
    departDate: format(new Date(), "yyyy-MM-dd"),
    arrivalDate: format(new Date(), "yyyy-MM-dd"),
    class: "Economy",
    isFlexibleDate: false,
    isDirectFlight: false,
    airlineCode: "",
    passengers: {
      adults: 2,
      children: 2,
      infants: 0,
      youth: 0,
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showDepartCalendar, setShowDepartCalendar] = useState(false);
  const [showReturnCalendar, setShowReturnCalendar] = useState(false);
  const [showPassengersDropdown, setShowPassengersDropdown] = useState(false);
  const [departDate, setDepartDate] = useState<Date | null>(new Date());
  const [returnDate, setReturnDate] = useState<Date | null>(new Date());
  const [airlines, setAirlines] = useState<Array<{airlineCode: string, airlineName: string}>>([]);

  const [originSuggestions, setOriginSuggestions] = useState<string[]>([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState<string[]>([]);
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false);
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(false);
  const originInputRef = useRef<HTMLInputElement>(null);
  const destinationInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError("");

    try {
      const requestData = {
        ...searchData,
        departDate: format(departDate!, "dd MMM yyyy").toUpperCase(),
        arrivalDate: searchData.TripType === "RT" ? format(returnDate!, "dd MMM yyyy").toUpperCase() : "",
        isDirectFlight: searchData.isDirectFlight,
        isFlexibleDate: searchData.isFlexibleDate,
        airlineCode: searchData.airlineCode || ""
      };

      console.log("Sending search request:", JSON.stringify(requestData, null, 2));

      const response = await api.searchFlights(requestData);
      if (response.success) {
        onSearch(response, requestData);
      } else {
        setError(response.error || "Search failed");
      }
    } catch (err) {
      setError("An error occurred during search");
    } finally {
      setLoading(false);
    }
  };

  const handleDepartDateSelect = (date: Date) => {
    setDepartDate(date);
    setShowDepartCalendar(false);
    setSearchData(prev => ({ ...prev, departDate: format(date, "yyyy-MM-dd") }));

    // If return date is before new depart date, reset it
    if (returnDate && returnDate < date) {
      setReturnDate(date);
      setSearchData(prev => ({ ...prev, arrivalDate: format(date, "yyyy-MM-dd") }));
    }
  };

  const handleReturnDateSelect = (date: Date) => {
    setReturnDate(date);
    setShowReturnCalendar(false);
    setSearchData(prev => ({ ...prev, arrivalDate: format(date, "yyyy-MM-dd") }));
  };

  const handleSwapLocations = () => {
    setSearchData(prev => ({
      ...prev,
      origin: prev.destination,
      destination: prev.origin
    }));
  };

  const getTotalPassengers = () => {
    const { adults, children, infants, youth } = searchData.passengers;
    return adults + children + infants + youth;
  };

  const handleOriginChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setSearchData({ ...searchData, origin: value });
    if (value.length >= 2) {
      const res = await api.getCities(value);
      setOriginSuggestions(res.data?.map((item: any) => item.AIRPORT) || []);
      setShowOriginSuggestions(true);
    } else {
      setOriginSuggestions([]);
      setShowOriginSuggestions(false);
    }
  };

  const handleDestinationChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setSearchData({ ...searchData, destination: value });
    if (value.length >= 2) {
      const res = await api.getCities(value);
      setDestinationSuggestions(res.data?.map((item: any) => item.AIRPORT) || []);
      setShowDestinationSuggestions(true);
    } else {
      setDestinationSuggestions([]);
      setShowDestinationSuggestions(false);
    }
  };

  const handleOriginSelect = (airport: string) => {
    const codeMatch = airport.match(/\[(\w{3})\]/);
    setSearchData({ ...searchData, origin: codeMatch ? codeMatch[1] : airport });
    setShowOriginSuggestions(false);
    setOriginSuggestions([]);
    if (originInputRef.current) originInputRef.current.blur();
  };

  const handleDestinationSelect = (airport: string) => {
    const codeMatch = airport.match(/\[(\w{3})\]/);
    setSearchData({ ...searchData, destination: codeMatch ? codeMatch[1] : airport });
    setShowDestinationSuggestions(false);
    setDestinationSuggestions([]);
    if (destinationInputRef.current) destinationInputRef.current.blur();
  };

  // Helper to get passenger breakdown string
  const getPassengerBreakdown = () => {
    const { adults, children, infants, youth } = searchData.passengers;
    const parts = [];
    if (adults) parts.push(`${adults} Adult${adults > 1 ? 's' : ''}`);
    if (children) parts.push(`${children} Child${children > 1 ? 'ren' : ''}`);
    if (youth) parts.push(`${youth} Youth${youth > 1 ? 's' : ''}`);
    if (infants) parts.push(`${infants} Infant${infants > 1 ? 's' : ''}`);
    return parts.length ? parts.join(', ') : 'Select Passengers';
  };

  // Render compact version for hero section
  if (compact) {
    return (
      <div className="space-y-4">
        {/* Compact Search Form */}
        <div className="grid grid-cols-4 gap-3">
          {/* Location */}
          <div className="relative">
            <label className="block text-xs font-medium text-gray-600 mb-1">Location</label>
            <div className="relative">
              <input
                ref={originInputRef}
                type="text"
                placeholder="New York"
                value={searchData.origin}
                onChange={handleOriginChange}
                onFocus={() => setShowOriginSuggestions(originSuggestions.length > 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#dc0069] focus:border-[#dc0069]"
                autoComplete="off"
              />
              <svg className="absolute right-2 top-2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {showOriginSuggestions && originSuggestions.length > 0 && (
              <ul className="absolute z-20 w-full bg-white border border-gray-200 rounded-lg mt-1 shadow-lg max-h-40 overflow-auto">
                {originSuggestions.map((suggestion, idx) => (
                  <li
                    key={idx}
                    className="px-3 py-2 hover:bg-gray-50 cursor-pointer text-sm"
                    onClick={() => handleOriginSelect(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Date */}
          <div className="relative">
            <label className="block text-xs font-medium text-gray-600 mb-1">Date</label>
            <div className="relative">
              <input
                type="text"
                value={departDate ? format(departDate, "d MMM, yyyy") : ""}
                onClick={() => setShowDepartCalendar(true)}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm cursor-pointer focus:ring-1 focus:ring-[#dc0069] focus:border-[#dc0069]"
                placeholder="8 Fri, Aug"
              />
              <svg className="absolute right-2 top-2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {showDepartCalendar && (
              <div className="absolute z-30 mt-1">
                <Calendar
                  startDate={departDate}
                  endDate={null}
                  onDateSelect={handleDepartDateSelect}
                  isRange={false}
                />
              </div>
            )}
          </div>

          {/* Price Range */}
          <div className="relative">
            <label className="block text-xs font-medium text-gray-600 mb-1">Price</label>
            <div className="relative">
              <input
                type="text"
                placeholder="$10,000 - $20,000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#dc0069] focus:border-[#dc0069]"
                readOnly
              />
              <svg className="absolute right-2 top-2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              onClick={handleSearch}
              disabled={loading}
              className="w-full bg-[#dc0069] text-white py-2 px-4 rounded-lg hover:bg-pink-600 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium text-sm flex items-center justify-center"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}
      </div>
    );
  }

  // Render full version for standalone use
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#dc0069] to-pink-500 px-8 py-6">
        <h2 className="text-2xl font-bold text-white mb-2">Search Flights</h2>
        <p className="text-pink-100">Find the best deals on flights worldwide</p>
      </div>

      <div className="p-8">
        {/* Trip Type Selection */}
        <div className="flex gap-1 mb-8 bg-gray-100 p-1 rounded-xl w-fit">
          {[
            { value: "RT", label: "Round Trip", icon: "⇄" },
            { value: "OW", label: "One Way", icon: "→" },
            { value: "MT", label: "Multi City", icon: "⚡" }
          ].map((trip) => (
            <label key={trip.value} className="relative cursor-pointer">
              <input
                type="radio"
                checked={searchData.TripType === trip.value}
                onChange={() => setSearchData(prev => ({ ...prev, TripType: trip.value as any }))}
                className="sr-only"
              />
              <div className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2 ${
                searchData.TripType === trip.value 
                  ? 'bg-white text-[#dc0069] shadow-md' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}>
                <span>{trip.icon}</span>
                {trip.label}
              </div>
            </label>
          ))}
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Main Search Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
          {/* Origin */}
          <div className="lg:col-span-3 relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">From</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <input
                ref={originInputRef}
                type="text"
                placeholder="City or Airport"
                value={searchData.origin}
                onChange={handleOriginChange}
                onFocus={() => setShowOriginSuggestions(originSuggestions.length > 0)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#dc0069] focus:border-[#dc0069] text-lg font-medium transition-all duration-200"
                autoComplete="off"
              />
            </div>
            {showOriginSuggestions && originSuggestions.length > 0 && (
              <ul className="absolute z-20 w-full bg-white border border-gray-200 rounded-xl mt-2 shadow-xl max-h-60 overflow-auto">
                {originSuggestions.map((suggestion, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
                    onClick={() => handleOriginSelect(suggestion)}
                  >
                    <div className="flex items-center">
                      <svg className="h-4 w-4 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      {suggestion}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Swap Button */}
          <div className="lg:col-span-1 flex items-end justify-center pb-4">
            <button
              onClick={handleSwapLocations}
              className="p-3 rounded-full bg-gray-100 hover:bg-[#dc0069] hover:text-white transition-all duration-200 group"
            >
              <svg className="w-5 h-5 transform group-hover:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </button>
          </div>

          {/* Destination */}
          <div className="lg:col-span-3 relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">To</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <input
                ref={destinationInputRef}
                type="text"
                placeholder="City or Airport"
                value={searchData.destination}
                onChange={handleDestinationChange}
                onFocus={() => setShowDestinationSuggestions(destinationSuggestions.length > 0)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#dc0069] focus:border-[#dc0069] text-lg font-medium transition-all duration-200"
                autoComplete="off"
              />
            </div>
            {showDestinationSuggestions && destinationSuggestions.length > 0 && (
              <ul className="absolute z-20 w-full bg-white border border-gray-200 rounded-xl mt-2 shadow-xl max-h-60 overflow-auto">
                {destinationSuggestions.map((suggestion, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
                    onClick={() => handleDestinationSelect(suggestion)}
                  >
                    <div className="flex items-center">
                      <svg className="h-4 w-4 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      {suggestion}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Departure Date */}
          <div className="lg:col-span-2 relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Departure</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="text"
                value={departDate ? format(departDate, "MMM d, yyyy") : ""}
                onClick={() => setShowDepartCalendar(true)}
                readOnly
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#dc0069] focus:border-[#dc0069] cursor-pointer text-lg font-medium transition-all duration-200"
                placeholder="Select date"
              />
            </div>
            {showDepartCalendar && (
              <div className="absolute z-30 mt-2">
                <Calendar
                  startDate={departDate}
                  endDate={null}
                  onDateSelect={handleDepartDateSelect}
                  isRange={false}
                />
              </div>
            )}
          </div>

          {/* Return Date */}
          {searchData.TripType === "RT" && (
            <div className="lg:col-span-2 relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Return</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={returnDate ? format(returnDate, "MMM d, yyyy") : ""}
                  onClick={() => setShowReturnCalendar(true)}
                  readOnly
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#dc0069] focus:border-[#dc0069] cursor-pointer text-lg font-medium transition-all duration-200"
                  placeholder="Select date"
                />
              </div>
              {showReturnCalendar && (
                <div className="absolute z-30 mt-2">
                  <Calendar
                    startDate={returnDate}
                    endDate={null}
                    onDateSelect={handleReturnDateSelect}
                    isRange={false}
                    minDate={departDate || new Date()}
                  />
                </div>
              )}
            </div>
          )}

          {/* Passengers & Class */}
          <div className="lg:col-span-1 relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Travelers</label>
            <button
              onClick={() => setShowPassengersDropdown(!showPassengersDropdown)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl text-left text-lg font-medium flex justify-between items-center hover:border-[#dc0069] transition-all duration-200"
              type="button"
            >
              <div>
                <div className="text-sm text-gray-600">{getTotalPassengers()} Travelers</div>
                <div className="text-xs text-gray-500">{searchData.class}</div>
              </div>
              <svg className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${showPassengersDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showPassengersDropdown && (
              <div className="absolute z-30 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-xl p-6">
                <div className="space-y-6">
                  {/* Passengers */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800">Passengers</h4>
                    {[
                      { key: 'adults', label: 'Adults', desc: '12+', min: 1 },
                      { key: 'children', label: 'Children', desc: '2-11', min: 0 },
                      { key: 'youth', label: 'Youth', desc: '12-15', min: 0 },
                      { key: 'infants', label: 'Infants', desc: '0-1', min: 0 }
                    ].map((passenger) => (
                      <div key={passenger.key} className="flex justify-between items-center">
                        <div>
                          <span className="text-gray-700 font-medium">{passenger.label}</span>
                          <span className="text-xs text-gray-500 ml-2">({passenger.desc})</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setSearchData(prev => ({
                              ...prev,
                              passengers: { 
                                ...prev.passengers, 
                                [passenger.key]: Math.max(passenger.min, prev.passengers[passenger.key as keyof typeof prev.passengers] - 1) 
                              }
                            }))}
                            className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#dc0069] hover:text-[#dc0069] transition-colors"
                          >
                            −
                          </button>
                          <span className="w-8 text-center font-medium">{searchData.passengers[passenger.key as keyof typeof searchData.passengers]}</span>
                          <button
                            type="button"
                            onClick={() => setSearchData(prev => ({
                              ...prev,
                              passengers: { 
                                ...prev.passengers, 
                                [passenger.key]: prev.passengers[passenger.key as keyof typeof prev.passengers] + 1 
                              }
                            }))}
                            className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#dc0069] hover:text-[#dc0069] transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Class Selection */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">Class</h4>
                    <div className="space-y-2">
                      {['Economy', 'Business', 'First'].map((classType) => (
                        <label key={classType} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            checked={searchData.class === classType}
                            onChange={() => setSearchData(prev => ({ ...prev, class: classType as any }))}
                            className="w-4 h-4 text-[#dc0069] border-gray-300 focus:ring-[#dc0069]"
                          />
                          <span className="ml-3 text-gray-700">{classType}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4 border-t">
                    <button
                      type="button"
                      className="bg-[#dc0069] text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors font-medium"
                      onClick={() => setShowPassengersDropdown(false)}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Advanced Options */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-[#dc0069]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
            </svg>
            Advanced Options
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Direct Flights */}
            <label className={`flex items-start cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 ${
              searchData.isDirectFlight 
                ? 'bg-[#dc0069] bg-opacity-10 border-[#dc0069]' 
                : 'bg-white border-gray-200 hover:border-gray-300'
            }`}>
              <input
                type="checkbox"
                checked={searchData.isDirectFlight}
                onChange={(e) => setSearchData({ ...searchData, isDirectFlight: e.target.checked })}
                className="rounded border-gray-300 text-[#dc0069] focus:ring-[#dc0069] h-5 w-5 mt-0.5"
              />
              <div className="ml-3">
                <span className="font-medium text-gray-800">Direct flights only</span>
                <p className="text-sm text-gray-600 mt-1">Non-stop flights</p>
              </div>
            </label>

            {/* Flexible Dates */}
            <label className={`flex items-start cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 ${
              searchData.isFlexibleDate 
                ? 'bg-[#dc0069] bg-opacity-10 border-[#dc0069]' 
                : 'bg-white border-gray-200 hover:border-gray-300'
            }`}>
              <input
                type="checkbox"
                checked={searchData.isFlexibleDate}
                onChange={(e) => setSearchData({ ...searchData, isFlexibleDate: e.target.checked })}
                className="rounded border-gray-300 text-[#dc0069] focus:ring-[#dc0069] h-5 w-5 mt-0.5"
              />
              <div className="ml-3">
                <span className="font-medium text-gray-800">Flexible dates</span>
                <p className="text-sm text-gray-600 mt-1">±3 days around selected dates</p>
              </div>
            </label>

            {/* Preferred Airline */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Airline</label>
              <input
                type="text"
                placeholder="e.g., BA, EK, LH"
                value={searchData.airlineCode}
                onChange={(e) => setSearchData({ ...searchData, airlineCode: e.target.value.toUpperCase() })}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#dc0069] focus:border-[#dc0069] transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSearch}
            disabled={loading}
            className="bg-gradient-to-r from-[#dc0069] to-pink-500 text-white px-12 py-4 rounded-xl hover:from-pink-600 hover:to-pink-600 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-3"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                Searching Flights...
              </>
            ) : (
              <>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search Flights
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}