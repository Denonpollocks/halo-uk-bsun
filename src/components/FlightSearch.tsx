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