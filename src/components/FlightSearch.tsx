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
    if (adults) parts.push(`${adults} Adult${adults > 1 ? 's' : ''}`);
    if (children) parts.push(`${children} Child${children > 1 ? 'ren' : ''}`);
    if (youth) parts.push(`${youth} Youth${youth > 1 ? 's' : ''}`);
    if (infants) parts.push(`${infants} Infant${infants > 1 ? 's' : ''}`);
    return parts.length ? parts.join(', ') : 'Select Passengers';
  };

  return (
    <div className="w-full flex flex-col items-center md:items-start justify-center mt-12 px-2">
      {/* Trip Type Selector (completely separate row above) */}
      <div className="flex justify-center mb-4 flex-wrap text-xs sm:text-sm">
        <div className="flex space-x-2">
          <label className={`px-4 py-1 rounded-full cursor-pointer border font-medium transition ${searchData.TripType === "RT" ? "bg-indigo-50 border-indigo-500 text-indigo-700" : "bg-white border-gray-300 text-gray-500"}`}>
            <input
              type="radio"
              checked={searchData.TripType === "RT"}
              onChange={() => setSearchData(prev => ({ ...prev, TripType: "RT" }))}
              className="hidden"
            />
            Return
          </label>
          <label className={`px-4 py-1 rounded-full cursor-pointer border font-medium transition ${searchData.TripType === "OW" ? "bg-indigo-50 border-indigo-500 text-indigo-700" : "bg-white border-gray-300 text-gray-500"}`}>
            <input
              type="radio"
              checked={searchData.TripType === "OW"}
              onChange={() => setSearchData(prev => ({ ...prev, TripType: "OW" }))}
              className="hidden"
            />
            One-way
          </label>
          <label className={`px-4 py-1 rounded-full cursor-pointer border font-medium transition ${searchData.TripType === "MT" ? "bg-indigo-50 border-indigo-500 text-indigo-700" : "bg-white border-gray-300 text-gray-500"}`}>
            <input
              type="radio"
              checked={searchData.TripType === "MT"}
              onChange={() => setSearchData(prev => ({ ...prev, TripType: "MT" }))}
              className="hidden"
            />
            Multi City
          </label>
        </div>
      </div>
      {/* Main search bar (all fields, always stacked vertically) */}
      <div className=" w-full max-w-lg flex flex-col items-stretch bg-white rounded-2xl shadow px-4 py-6">
        {/* Origin */}
        <div className="flex flex-col mb-4 min-w-[140px]">
          <span className="font-bold text-gray-700 mb-1">From</span>
          <div className="flex items-center text-gray-400 w-full">
            <svg className="w-5 h-5 mr-2 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <input
              ref={originInputRef}
              type="text"
              placeholder="City or Airport"
              value={searchData.origin}
              onChange={handleOriginChange}
              onFocus={() => setShowOriginSuggestions(originSuggestions.length > 0)}
              className="bg-transparent outline-none text-gray-700 placeholder-gray-400 w-full"
              autoComplete="off"
            />
          </div>
          {showOriginSuggestions && originSuggestions.length > 0 && (
            <ul className="absolute z-10 w-64 bg-white border border-gray-300 rounded-lg mt-1 shadow-lg max-h-60 overflow-auto">
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
        <div className="border-t my-2" />
        {/* Destination */}
        <div className="flex flex-col mb-4 min-w-[140px]">
          <span className="font-bold text-gray-700 mb-1">To</span>
          <div className="flex items-center text-gray-400 w-full">
            <svg className="w-5 h-5 mr-2 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <input
              ref={destinationInputRef}
              type="text"
              placeholder="City or Airport"
              value={searchData.destination}
              onChange={handleDestinationChange}
              onFocus={() => setShowDestinationSuggestions(destinationSuggestions.length > 0)}
              className="bg-transparent outline-none text-gray-700 placeholder-gray-400 w-full"
              autoComplete="off"
            />
          </div>
          {showDestinationSuggestions && destinationSuggestions.length > 0 && (
            <ul className="absolute z-10 w-64 bg-white border border-gray-300 rounded-lg mt-1 shadow-lg max-h-60 overflow-auto">
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
        <div className="border-t my-2" />
        {/* Departure */}
        <div className="flex flex-col mb-4 min-w-[140px]">
          <span className="font-bold text-gray-700 mb-1">Departure</span>
          <div className="flex items-center text-gray-700">
            <svg className="w-5 h-5 mr-2 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <input
              type="text"
              value={departDate ? format(departDate, "dd/MM/yyyy") : ""}
              onClick={() => setShowDepartCalendar(true)}
              readOnly
              className="bg-transparent outline-none text-gray-700 cursor-pointer w-28"
            />
          </div>
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
        {(searchData.TripType === "RT" || searchData.TripType === "MT") && <div className="border-t my-2" />}
        {/* Return (only for RT or MT) */}
        {(searchData.TripType === "RT" || searchData.TripType === "MT") && (
          <div className="flex flex-col mb-4 min-w-[140px]">
            <span className="font-bold text-gray-700 mb-1">Return</span>
            <div className="flex items-center text-gray-700">
              <svg className="w-5 h-5 mr-2 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <input
                type="text"
                value={returnDate ? format(returnDate, "dd/MM/yyyy") : ""}
                onClick={() => setShowReturnCalendar(true)}
                readOnly
                className="bg-transparent outline-none text-gray-700 cursor-pointer w-28"
              />
            </div>
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
        <div className="border-t my-2" />
        {/* Class */}
        <div className="flex flex-col mb-4 min-w-[140px]">
          <span className="font-bold text-gray-700 mb-1">Class</span>
          <select
            value={searchData.class}
            onChange={(e) => setSearchData({ ...searchData, class: e.target.value as any })}
            className="bg-transparent outline-none text-gray-700 cursor-pointer w-full"
          >
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First">First Class</option>
          </select>
        </div>
        <div className="border-t my-2" />
        {/* Passengers */}
        <div className="flex flex-col mb-4 min-w-[140px]">
          <span className="font-bold text-gray-700 mb-1">Passengers</span>
          <button
            onClick={() => setShowPassengersDropdown(!showPassengersDropdown)}
            className="flex items-center bg-transparent outline-none text-gray-700 cursor-pointer"
            type="button"
          >
            <svg className="w-5 h-5 mr-2 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <span>{getPassengerBreakdown()}</span>
          </button>
          {showPassengersDropdown && (
            <div className="absolute z-20 mt-1 w-72 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Adults <span className="text-xs text-gray-500">(12+)</span></span>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => setSearchData(prev => ({ ...prev, passengers: { ...prev.passengers, adults: Math.max(1, prev.passengers.adults - 1) } }))} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">-</button>
                    <span className="w-8 text-center">{searchData.passengers.adults}</span>
                    <button type="button" onClick={() => setSearchData(prev => ({ ...prev, passengers: { ...prev.passengers, adults: prev.passengers.adults + 1 } }))} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">+</button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Children <span className="text-xs text-gray-500">(2-11)</span></span>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => setSearchData(prev => ({ ...prev, passengers: { ...prev.passengers, children: Math.max(0, prev.passengers.children - 1) } }))} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">-</button>
                    <span className="w-8 text-center">{searchData.passengers.children}</span>
                    <button type="button" onClick={() => setSearchData(prev => ({ ...prev, passengers: { ...prev.passengers, children: prev.passengers.children + 1 } }))} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">+</button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Youth <span className="text-xs text-gray-500">(12-15)</span></span>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => setSearchData(prev => ({ ...prev, passengers: { ...prev.passengers, youth: Math.max(0, prev.passengers.youth - 1) } }))} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">-</button>
                    <span className="w-8 text-center">{searchData.passengers.youth}</span>
                    <button type="button" onClick={() => setSearchData(prev => ({ ...prev, passengers: { ...prev.passengers, youth: prev.passengers.youth + 1 } }))} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">+</button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Infants <span className="text-xs text-gray-500">(0-1)</span></span>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => setSearchData(prev => ({ ...prev, passengers: { ...prev.passengers, infants: Math.max(0, prev.passengers.infants - 1) } }))} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">-</button>
                    <span className="w-8 text-center">{searchData.passengers.infants}</span>
                    <button type="button" onClick={() => setSearchData(prev => ({ ...prev, passengers: { ...prev.passengers, infants: prev.passengers.infants + 1 } }))} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">+</button>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" onClick={() => setShowPassengersDropdown(false)}>
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="border-t my-2" />
        {/* Direct/Flexible/Airline */}
     
        {/* Buttons */}
        <div className="flex items-center space-x-2 mt-2">
          <button type="button" className="px-5 py-2 rounded-full border border-pink-500 text-pink-600 font-semibold bg-white hover:bg-pink-50 transition" onClick={() => { setSearchData({ ...searchData, origin: '', destination: '', airlineCode: '', passengers: { adults: 1, children: 0, infants: 0, youth: 0 } }); }}>
            Clear
          </button>
          <button onClick={handleSearch} disabled={loading} className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}