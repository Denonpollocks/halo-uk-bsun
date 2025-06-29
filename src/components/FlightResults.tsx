"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../lib/api";
import { Clock9, Plane } from "lucide-react";
import Image from "next/image";

// Renders a single flight segment with full details
const SegmentView = ({ segment, showLayover, layoverInfo }: { segment: any; showLayover: boolean; layoverInfo?: any }) => (
  <div className="pt-4">
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <img src={segment.airlineLogoUrl} alt={segment.airlineName} className="h-8 w-auto mr-3" />
        <div>
          <h4 className="font-semibold">{segment.airlineName}</h4>
          <p className="text-sm text-gray-500">Flight {segment.flightNumber}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <span className="flex items-center"><Image className='w-7 h-7' src='/images/4.png' alt='cabin class' width={16} height={16} /> {segment.cabinClass}</span>
        <span className="flex items-center"><Image className='w-7 h-7' src='/images/3.png' alt='baggage' width={16} height={16} /> {segment.baggageInfo.allowance}</span>
        <span className="flex items-center text-red-500 font-semibold">{segment.seatsLeft} seats left!</span>
      </div>
    </div>
    <div className="grid grid-cols-7 gap-4 items-center">
      <div className="col-span-3">
        <p className="text-sm text-gray-500">Dep: {segment.departDate}</p>
        <p className="text-lg font-semibold">{segment.departTime}</p>
        <p className="text-sm text-gray-600">{segment.originAirportCity}</p>
        <p className="text-xs text-gray-500">{segment.originAirportName}</p>
      </div>
      <div className="col-span-1 flex flex-col items-center">
        <p className="text-sm text-gray-500">{segment.travelDuration}</p>
        <div className="w-full h-px bg-gray-300 my-2"></div>
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
      <div className="col-span-3 text-right">
        <p className="text-sm text-gray-500">Arr: {segment.arrivalDate}</p>
        <p className="text-lg font-semibold">{segment.arrivalTime}</p>
        <p className="text-sm text-gray-600">{segment.destinationAirportCity}</p>
        <p className="text-xs text-gray-500">{segment.destinationAirportName}</p>
      </div>
    </div>
    {showLayover && layoverInfo && (
      <div className="mt-4 px-4 py-2 bg-gray-100 items-center flex justify-center border-l-4 border-pink-500 text-gray-700">
        <p className="flex items-center text-sm font-medium">
          <Clock9 className="w-4 h-4 mr-2" />  Layover in {segment.destinationAirportCity}: {layoverInfo.connectionTime}
        </p>
      </div>
    )}
  </div>
);

// Helper component for rendering one leg of the journey
const JourneyDetails = ({ journey, type }: { journey: any; type: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const option = journey.optionInfos[0];
  const segments = option.airSegmentInfos;
  const isMultiSegment = segments.length > 1;

  const firstSegment = segments[0];
  const lastSegment = segments[segments.length - 1];

  return (
    <div>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{type}</h3>
          <p className="text-sm text-gray-500">
            {option.stop === 0 ? 'Direct Flight' : `${option.stop} Stop(s)`} &middot; Total Duration: {option.totalFlightDuration}
          </p>
        </div>
      </div>

      {isMultiSegment && !isExpanded ? (
        // Collapsed summary view for multi-stop flights
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <div className="flex items-center text-left space-x-3">
                    <img src={firstSegment.airlineLogoUrl} alt={firstSegment.airlineName} className="h-8 w-auto"/>
                    <div>
                      <p className="text-sm text-gray-600">{firstSegment.departDate}</p>
                        <p className="text-lg font-bold">{firstSegment.departTime}</p>
                        <p className="text-sm text-gray-600">{firstSegment.originAirportCity}</p>
                    </div>
                </div>

                <div className="text-center flex-grow mx-4">
                     <div className="bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-800 inline-flex items-center space-x-2">
                        <span>{option.totalFlightDuration}</span>
                        <Plane className="w-3 h-3"/>
                        <span>{option.stop} stop</span>
                    </div>
                </div>
                
                <div className="text-right">
                  <p className="text-sm text-gray-600">{lastSegment.arrivalDate}</p>
                    <p className="text-lg font-bold">{lastSegment.arrivalTime}<sup className="text-red-500 font-semibold">{lastSegment.arrivalDayNext ? `+${lastSegment.arrivalDayNext}`: ''}</sup></p>
                    <p className="text-sm text-gray-600">{lastSegment.destinationAirportCity}</p>
                </div>
            </div>
        </div>
      ) : (
        // Expanded view or direct flight
        segments.map((segment: any, index: number) => (
          <SegmentView
            key={index}
            segment={segment}
            showLayover={index < segments.length - 1}
            layoverInfo={index < segments.length - 1 ? segments[index + 1] : null}
          />
        ))
      )}

      {isMultiSegment && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 hover:text-blue-800 font-semibold mt-4 py-2 flex items-center gap-2"
        >
          <span>{isExpanded ? 'Hide full details' : 'See full details'}</span>
        </button>
      )}
    </div>
  );
};

export default function FlightResults({ 
  searchResults, 
  onBack 
}: { 
  searchResults: any;
  onBack: () => void;
}) {
  const [pricingData, setPricingData] = useState<any>(null);
  const router = useRouter();

  const getFlightData = (results: any) => {
    if (!results) return null;
    if (results.result?.airSolutions) return results.result;
    if (results.data?.result?.airSolutions) return results.data.result;
    return null;
  };

  const flightData = getFlightData(searchResults);
  
  if (!flightData) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="text-center text-gray-500">No flight results available.</div>
      </div>
    );
  }

  const flights = flightData.airSolutions;

  const handleSelectFlight = (flight: any) => {
    localStorage.setItem('selectedFlight', JSON.stringify(flight));
    const searchData = localStorage.getItem('flightSearchData');
    if (searchData) {
      localStorage.setItem('flightSearchData', searchData);
    }
    router.push('/booking-confirmation');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Flight Results</h2>
          <p className="text-sm text-gray-500 mt-1">
            {flights.length} {flights.length === 1 ? 'flight' : 'flights'} found
          </p>
        </div>
        <button
          onClick={onBack}
          className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
        >
          <span>←</span> Back to Search
        </button>
      </div>

      <div className="space-y-6">
        {flights.map((flight: any) => {
          const outboundJourney = flight.journey[0];
          const returnJourney = flight.journey.length > 1 ? flight.journey[1] : null;

          return (
            <div key={flight.key} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row justify-between md:items-start">
                {/* Journeys Details */}
                <div className="flex-grow">
                  <JourneyDetails journey={outboundJourney} type="Departure" />
                  
                  {returnJourney && (
                    <>
                      <hr className="my-6" />
                      <JourneyDetails journey={returnJourney} type="Return" />
                    </>
                  )}
                </div>

                {/* Price and Select Button */}
                <div className="md:ml-6 mt-6 md:mt-0 flex-shrink-0 w-full md:w-auto">
                  <div className="bg-gray-50 p-4 rounded-lg text-right md:text-left">
                    <p className="text-3xl font-bold text-blue-600">£{flight.totalPrice.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">
                      Base: £{flight.basePrice} + Tax: £{flight.tax}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Total price for all passengers
                    </p>
                    <button
                      onClick={() => handleSelectFlight(flight)}
                      className="w-full mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {pricingData && (
        <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Pricing Details</h3>
          <pre className="text-sm text-green-700 overflow-auto">
            {JSON.stringify(pricingData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}