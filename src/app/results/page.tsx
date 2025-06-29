"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FlightFilters from '@/components/FlightFilters';
import FlightResults from '@/components/FlightResults';

export default function ResultsPage() {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState<any>(null);
  const [filteredResults, setFilteredResults] = useState<any>(null);
  const [filters, setFilters] = useState({
    stops: [],
    airlines: [],
    departureTime: [0, 24],
    arrivalTime: [0, 24]
  });

  useEffect(() => {
    // Get results from localStorage
    const results = localStorage.getItem('flightSearchResults');
    console.log("Raw results from localStorage:", results);
    
    if (results) {
      try {
        const parsedResults = JSON.parse(results);
        console.log("Parsed results structure:", {
          success: parsedResults.success,
          hasData: !!parsedResults.data,
          hasResult: !!parsedResults.data?.result,
          hasAirSolutions: !!parsedResults.data?.result?.airSolutions,
          rawParsedResults: parsedResults
        });

        // If we have the result directly
        if (parsedResults.result?.airSolutions) {
          console.log("Setting direct result structure");
          setSearchResults({
            success: true,
            data: {
              result: parsedResults.result
            }
          });
          setFilteredResults({
            success: true,
            data: {
              result: parsedResults.result
            }
          });
        }
        // If we have the full API response structure
        else if (parsedResults.success && parsedResults.data?.result?.airSolutions) {
          console.log("Setting full API response structure");
          setSearchResults(parsedResults);
          setFilteredResults(parsedResults);
        }
        // If we have a different structure, try to adapt it
        else if (parsedResults.airSolutions || parsedResults.data?.airSolutions) {
          console.log("Setting adapted structure");
          const adaptedResults = {
            success: true,
            data: {
              result: {
                airSolutions: parsedResults.airSolutions || parsedResults.data.airSolutions,
                status: "OK",
                token: parsedResults.token || parsedResults.data?.token
              }
            }
          };
          setSearchResults(adaptedResults);
          setFilteredResults(adaptedResults);
        } else {
          console.error("Unrecognized data structure:", parsedResults);
        }
      } catch (err) {
        console.error("Error parsing results:", err);
        router.push('/');
      }
    } else {
      router.push('/');
    }
  }, [router]);

  // Extract distinctAirlines from search results
  const distinctAirlines = searchResults?.data?.result?.distinctAirlines || [];

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    if (!searchResults) return;

    // Apply filters to search results
    let filtered = searchResults;

    // Filter by stops
    if (newFilters.stops.length > 0) {
      filtered = {
        ...filtered,
        data: {
          ...filtered.data,
          result: {
            ...filtered.data.result,
            airSolutions: filtered.data.result.airSolutions.filter((solution: any) => {
              const stopCount = solution.journey[0].optionInfos[0].stop;
              return (
                (newFilters.stops.includes('direct') && stopCount === 0) ||
                (newFilters.stops.includes('1stop') && stopCount === 1) ||
                (newFilters.stops.includes('2stops') && stopCount === 2)
              );
            })
          }
        }
      };
    }

    // Filter by airlines
    if (newFilters.airlines.length > 0) {
      filtered = {
        ...filtered,
        data: {
          ...filtered.data,
          result: {
            ...filtered.data.result,
            airSolutions: filtered.data.result.airSolutions.filter((solution: any) => {
              const airlineName = solution.journey[0].optionInfos[0].airSegmentInfos[0].airlineName;
              return newFilters.airlines.includes(airlineName);
            })
          }
        }
      };
    }

    // Filter by departure time
    filtered = {
      ...filtered,
      data: {
        ...filtered.data,
        result: {
          ...filtered.data.result,
          airSolutions: filtered.data.result.airSolutions.filter((solution: any) => {
            const departureTime = parseInt(solution.journey[0].optionInfos[0].airSegmentInfos[0].departTime.split(':')[0]);
            return departureTime >= newFilters.departureTime[0] && departureTime <= newFilters.departureTime[1];
          })
        }
      }
    };

    // Filter by arrival time
    filtered = {
      ...filtered,
      data: {
        ...filtered.data,
        result: {
          ...filtered.data.result,
          airSolutions: filtered.data.result.airSolutions.filter((solution: any) => {
            const arrivalTime = parseInt(solution.journey[0].optionInfos[0].airSegmentInfos[0].arrivalTime.split(':')[0]);
            return arrivalTime >= newFilters.arrivalTime[0] && arrivalTime <= newFilters.arrivalTime[1];
          })
        }
      }
    };

    setFilteredResults(filtered);
  };

  const handleBack = () => {
    router.push('/');
  };

  const handleSelectFlight = (flight: any) => {
    localStorage.setItem('selectedFlight', JSON.stringify(flight));
    router.push('/booking');
  };

  if (!searchResults) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filters Section */}
          <div className="md:col-span-1">
            <FlightFilters onFilterChange={handleFilterChange} airlinesList={distinctAirlines} />
          </div>

          {/* Results Section */}
          <div className="md:col-span-3">
            <FlightResults
              searchResults={filteredResults || searchResults}
              onBack={handleBack}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
