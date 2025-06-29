"use client";

import { useState } from 'react';

interface FilterProps {
  onFilterChange: (filters: any) => void;
  airlinesList?: { airlineCode: string; airlineName: string; airlineLogo: string }[];
}

export default function FlightFilters({ onFilterChange, airlinesList }: FilterProps) {
  const [stops, setStops] = useState<string[]>([]);
  const [airlines, setAirlines] = useState<string[]>([]);
  const [departureTime, setDepartureTime] = useState<[number, number]>([0, 24]);
  const [arrivalTime, setArrivalTime] = useState<[number, number]>([0, 24]);

  const handleStopsChange = (value: string) => {
    const newStops = stops.includes(value)
      ? stops.filter(stop => stop !== value)
      : [...stops, value];
    setStops(newStops);
    updateFilters({ stops: newStops });
  };

  const handleAirlineChange = (airline: string) => {
    const newAirlines = airlines.includes(airline)
      ? airlines.filter(a => a !== airline)
      : [...airlines, airline];
    setAirlines(newAirlines);
    updateFilters({ airlines: newAirlines });
  };

  const updateFilters = (newFilters: any) => {
    onFilterChange({
      stops,
      airlines,
      departureTime,
      arrivalTime,
      ...newFilters
    });
  };

  const formatTime = (hours: number) => {
    return `${hours.toString().padStart(2, '0')}:00`;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Filters</h2>
        <button
          onClick={() => {
            setStops([]);
            setAirlines([]);
            setDepartureTime([0, 24]);
            setArrivalTime([0, 24]);
            onFilterChange({});
          }}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Clear all
        </button>
      </div>

      {/* Stops Filter */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-gray-700">STOPS</h3>
          <button
            onClick={() => {
              setStops([]);
              updateFilters({ stops: [] });
            }}
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            Clear
          </button>
        </div>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={stops.includes('direct')}
              onChange={() => handleStopsChange('direct')}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">No stops</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={stops.includes('1stop')}
              onChange={() => handleStopsChange('1stop')}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">1 stop</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={stops.includes('2stops')}
              onChange={() => handleStopsChange('2stops')}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">Up to 2 stops</span>
          </label>
        </div>
      </div>

      {/* Airlines Filter */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-gray-700">AIRLINES</h3>
          <button
            onClick={() => {
              setAirlines([]);
              updateFilters({ airlines: [] });
            }}
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            Clear
          </button>
        </div>
        <div className="space-y-2">
          {airlinesList?.map((airline) => (
            <label key={airline.airlineName} className="flex items-center justify-between group">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={airlines.includes(airline.airlineName)}
                  onChange={() => handleAirlineChange(airline.airlineName)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                {airline.airlineLogo && (
                  <img 
                    src={airline.airlineLogo} 
                    alt={airline.airlineName} 
                    className="h-5 w-5 ml-2 mr-2" 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
                <span className="text-sm text-gray-700">{airline.airlineName}</span>
              </div>
            </label>
          ))}
          {(!airlinesList || airlinesList.length === 0) && (
            <p className="text-sm text-gray-500 italic">No airlines available</p>
          )}
        </div>
      </div>

      {/* Times Filter */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-gray-700">TIMES</h3>
          <button
            onClick={() => {
              setDepartureTime([0, 24]);
              setArrivalTime([0, 24]);
              updateFilters({ departureTime: [0, 24], arrivalTime: [0, 24] });
            }}
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            Clear
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-700 mb-2">
              Departure Time {formatTime(departureTime[0])} - {formatTime(departureTime[1])}
            </p>
            <div className="px-2 py-4">
              <div className="flex gap-4">
                <input
                  type="range"
                  min={0}
                  max={24}
                  value={departureTime[0]}
                  onChange={(e) => {
                    const newTime: [number, number] = [parseInt(e.target.value), departureTime[1]];
                    if (newTime[0] <= newTime[1]) {
                      setDepartureTime(newTime);
                      updateFilters({ departureTime: newTime });
                    }
                  }}
                  className="w-full accent-blue-600"
                />
                <input
                  type="range"
                  min={0}
                  max={24}
                  value={departureTime[1]}
                  onChange={(e) => {
                    const newTime: [number, number] = [departureTime[0], parseInt(e.target.value)];
                    if (newTime[1] >= newTime[0]) {
                      setDepartureTime(newTime);
                      updateFilters({ departureTime: newTime });
                    }
                  }}
                  className="w-full accent-blue-600"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-700 mb-2">
              Arrival Time {formatTime(arrivalTime[0])} - {formatTime(arrivalTime[1])}
            </p>
            <div className="px-2 py-4">
              <div className="flex gap-4">
                <input
                  type="range"
                  min={0}
                  max={24}
                  value={arrivalTime[0]}
                  onChange={(e) => {
                    const newTime: [number, number] = [parseInt(e.target.value), arrivalTime[1]];
                    if (newTime[0] <= newTime[1]) {
                      setArrivalTime(newTime);
                      updateFilters({ arrivalTime: newTime });
                    }
                  }}
                  className="w-full accent-blue-600"
                />
                <input
                  type="range"
                  min={0}
                  max={24}
                  value={arrivalTime[1]}
                  onChange={(e) => {
                    const newTime: [number, number] = [arrivalTime[0], parseInt(e.target.value)];
                    if (newTime[1] >= newTime[0]) {
                      setArrivalTime(newTime);
                      updateFilters({ arrivalTime: newTime });
                    }
                  }}
                  className="w-full accent-blue-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 