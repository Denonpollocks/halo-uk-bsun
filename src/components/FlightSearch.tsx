"use client";

import { useState, useRef } from "react";
import { FlightSearchRequest } from "../types";
import { api } from "../lib/api";
import Calendar from "./Calendar";
import { format } from "date-fns";

export default function FlightSearch({ onSearch }: { onSearch: (results: any, searchData: FlightSearchRequest) => void }) {
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
    if (adults) parts.push(`${adults} Adult${adults > 1 ? 's' : ''} (12+)`);
    if (children) parts.push(`${children} Child${children > 1 ? 'ren' : ''} (2-11)`);
    if (youth) parts.push(`${youth} Youth${youth > 1 ? 's' : ''} (12-15)`);
    if (infants) parts.push(`${infants} Infant${infants > 1 ? 's' : ''} (0-1)`);
    return parts.length ? parts.join(', ') : 'Select Passengers';
  };

  return (
    <div className="bg-white p-6 w-full rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Flight Search</h2>
      
      {/* Trip Type Selection */}
      <div className="flex gap-6 mb-8">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            checked={searchData.TripType === "RT"}
            onChange={() => setSearchData(prev => ({ ...prev, TripType: "RT" }))}
            className="form-radio text-blue-600"
          />
          <span className="text-gray-700">Return</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            checked={searchData.TripType === "OW"}
            onChange={() => setSearchData(prev => ({ ...prev, TripType: "OW" }))}
            className="form-radio text-blue-600"
          />
          <span className="text-gray-700">One-way</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            checked={searchData.TripType === "MT"}
            onChange={() => setSearchData(prev => ({ ...prev, TripType: "MT" }))}
            className="form-radio text-blue-600"
          />
          <span className="text-gray-700">Multi City</span>
        </label>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-12 gap-4 items-start">
        {/* Origin and Destination */}
        <div className="col-span-5 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">From where?</label>
          <input
            ref={originInputRef}
            type="text"
            placeholder="City or Airport"
            value={searchData.origin}
            onChange={handleOriginChange}
            onFocus={() => setShowOriginSuggestions(originSuggestions.length > 0)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
            autoComplete="off"
          />
          {showOriginSuggestions && originSuggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg max-h-60 overflow-auto">
              {originSuggestions.map((suggestion, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                  onClick={() => handleOriginSelect(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Swap Button */}
        <div className="col-span-2 flex items-center justify-center mt-6">
          <button
            onClick={handleSwapLocations}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-orange-500 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>
        </div>

        <div className="col-span-5 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">To where?</label>
          <input
            ref={destinationInputRef}
            type="text"
            placeholder="City or Airport"
            value={searchData.destination}
            onChange={handleDestinationChange}
            onFocus={() => setShowDestinationSuggestions(destinationSuggestions.length > 0)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
            autoComplete="off"
          />
          {showDestinationSuggestions && destinationSuggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg max-h-60 overflow-auto">
              {destinationSuggestions.map((suggestion, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                  onClick={() => handleDestinationSelect(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Dates */}
        <div className="col-span-3 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Leaving on</label>
          <input
            type="text"
            value={departDate ? format(departDate, "MMMM d, yyyy") : ""}
            onClick={() => setShowDepartCalendar(true)}
            readOnly
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 cursor-pointer text-lg"
          />
          {showDepartCalendar && (
            <div className="absolute z-20 mt-1">
              <Calendar
                startDate={departDate}
                endDate={null}
                onDateSelect={handleDepartDateSelect}
                isRange={false}
              />
            </div>
          )}
        </div>

        {searchData.TripType === "RT" && (
          <div className="col-span-3 relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Returning on</label>
            <input
              type="text"
              value={returnDate ? format(returnDate, "MMMM d, yyyy") : ""}
              onClick={() => setShowReturnCalendar(true)}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 cursor-pointer text-lg"
            />
            {showReturnCalendar && (
              <div className="absolute z-20 mt-1">
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

        {/* Passengers Dropdown */}
        <div className="col-span-3 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
          <button
            onClick={() => setShowPassengersDropdown(!showPassengersDropdown)}
            className="w-full p-3 border border-gray-300 rounded-lg text-left text-lg flex justify-between items-center"
            type="button"
          >
            <span>{getPassengerBreakdown()}</span>
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showPassengersDropdown && (
            <div className="absolute z-20 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg p-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Adults <span className="text-xs text-gray-500">(12+)</span></span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSearchData(prev => ({
                        ...prev,
                        passengers: { ...prev.passengers, adults: Math.max(1, prev.passengers.adults - 1) }
                      }))}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{searchData.passengers.adults}</span>
                    <button
                      type="button"
                      onClick={() => setSearchData(prev => ({
                        ...prev,
                        passengers: { ...prev.passengers, adults: prev.passengers.adults + 1 }
                      }))}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Children <span className="text-xs text-gray-500">(2-11)</span></span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSearchData(prev => ({
                        ...prev,
                        passengers: { ...prev.passengers, children: Math.max(0, prev.passengers.children - 1) }
                      }))}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{searchData.passengers.children}</span>
                    <button
                      type="button"
                      onClick={() => setSearchData(prev => ({
                        ...prev,
                        passengers: { ...prev.passengers, children: prev.passengers.children + 1 }
                      }))}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Youth <span className="text-xs text-gray-500">(12-15)</span></span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSearchData(prev => ({
                        ...prev,
                        passengers: { ...prev.passengers, youth: Math.max(0, prev.passengers.youth - 1) }
                      }))}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{searchData.passengers.youth}</span>
                    <button
                      type="button"
                      onClick={() => setSearchData(prev => ({
                        ...prev,
                        passengers: { ...prev.passengers, youth: prev.passengers.youth + 1 }
                      }))}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Infants <span className="text-xs text-gray-500">(0-1)</span></span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSearchData(prev => ({
                        ...prev,
                        passengers: { ...prev.passengers, infants: Math.max(0, prev.passengers.infants - 1) }
                      }))}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{searchData.passengers.infants}</span>
                    <button
                      type="button"
                      onClick={() => setSearchData(prev => ({
                        ...prev,
                        passengers: { ...prev.passengers, infants: prev.passengers.infants + 1 }
                      }))}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    onClick={() => setShowPassengersDropdown(false)}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Class Selection */}
        <div className="col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
          <div className="relative">
            <select
              value={searchData.class}
              onChange={(e) => setSearchData({ ...searchData, class: e.target.value as any })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg appearance-none"
            >
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="First">First Class</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Flight Options */}
      <div className="mt-6 bg-gray-50 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Flight Options
            </h3>
            
            {/* Direct Flights Only */}
            <label className={`flex items-start cursor-pointer p-3 rounded-lg border transition-colors ${
              searchData.isDirectFlight 
                ? 'bg-blue-50 border-blue-200' 
                : 'bg-white border-gray-200 hover:border-gray-300'
            }`}>
              <input
                type="checkbox"
                checked={searchData.isDirectFlight}
                onChange={(e) => setSearchData({ ...searchData, isDirectFlight: e.target.checked })}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 h-5 w-5 mt-0.5"
              />
              <span className="ml-3">
                <span className="font-medium text-gray-800">Direct flights only</span>
                <p className="text-sm text-gray-600 mt-1">Show only non-stop flights</p>
              </span>
            </label>

            {/* Flexible Dates */}
            <label className={`flex items-start cursor-pointer p-3 rounded-lg border transition-colors ${
              searchData.isFlexibleDate 
                ? 'bg-green-50 border-green-200' 
                : 'bg-white border-gray-200 hover:border-gray-300'
            }`}>
              <input
                type="checkbox"
                checked={searchData.isFlexibleDate}
                onChange={(e) => setSearchData({ ...searchData, isFlexibleDate: e.target.checked })}
                className="rounded border-gray-300 text-green-600 focus:ring-green-500 h-5 w-5 mt-0.5"
              />
              <span className="ml-3">
                <span className="font-medium text-gray-800">Flexible dates</span>
                <p className="text-sm text-gray-600 mt-1">Search ±3 days around selected dates</p>
              </span>
            </label>
          </div>

          {/* Additional Options */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
              Additional Options
            </h3>
            
            {/* Airline Preference */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Airline (Optional)</label>
              <input
                type="text"
                placeholder="e.g., BA, EK, LH"
                value={searchData.airlineCode}
                onChange={(e) => setSearchData({ ...searchData, airlineCode: e.target.value.toUpperCase() })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-lg"
              />
              <p className="text-xs text-gray-500 mt-1">Leave empty to search all airlines</p>
            </div>

            {/* Active Options Summary */}
            <div className="mt-4 p-3 bg-white border border-gray-200 rounded-lg">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Active Options:</h4>
              <div className="space-y-1 text-xs text-gray-600">
                {searchData.isDirectFlight && (
                  <div className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Direct flights only
                  </div>
                )}
                {searchData.isFlexibleDate && (
                  <div className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Flexible dates (±3 days)
                  </div>
                )}
                {searchData.airlineCode && (
                  <div className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Airline: {searchData.airlineCode}
                  </div>
                )}
                {!searchData.isDirectFlight && !searchData.isFlexibleDate && !searchData.airlineCode && (
                  <div className="text-gray-400 italic">No special options selected</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-indigo-900 text-white px-8 py-3 rounded-lg hover:bg-indigo-800 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium text-lg"
        >
          {loading ? "Searching..." : "Modify Search"}
        </button>
      </div>
    </div>
  );
}