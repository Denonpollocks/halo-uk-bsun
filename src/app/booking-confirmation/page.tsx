"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import type { PricingRequest } from '@/types/index';

interface FlightDetails {
  key: string;
  totalPrice: number;
  basePrice: number;
  tax: number;
  journey: any[];
}

interface PricingDetails {
  success: boolean;
  data?: any;
}

export default function BookingConfirmationPage() {
  const router = useRouter();
  const [selectedFlight, setSelectedFlight] = useState<FlightDetails | null>(null);
  const [pricingData, setPricingData] = useState<PricingDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchData, setSearchData] = useState<any>(null);

  useEffect(() => {
    // Get selected flight from localStorage
    const flightData = localStorage.getItem('selectedFlight');
    const searchDataFromStorage = localStorage.getItem('flightSearchData');
    
    if (!flightData) {
      router.push('/');
      return;
    }

    try {
      const flight = JSON.parse(flightData);
      const search = searchDataFromStorage ? JSON.parse(searchDataFromStorage) : null;
      
      setSelectedFlight(flight);
      setSearchData(search);
      
      // Call pricing API
      callPricingAPI(flight, search);
    } catch (err) {
      console.error('Error parsing flight data:', err);
      setError('Invalid flight data');
      setLoading(false);
    }
  }, [router]);

  const callPricingAPI = async (flight: FlightDetails, search: any) => {
    try {
      setLoading(true);
      
      // Get the parent search result for the token
      const searchResults = localStorage.getItem('flightSearchResults');
      if (!searchResults) {
        throw new Error('Flight search results could not be found in your session.');
      }
      
      const outerParsed = JSON.parse(searchResults);
      
      // Extract the parent result with the key, token, and supp
      let parentResult;
      
      // Handle different response structures
      if (outerParsed.success && outerParsed.data) {
        // Standard API response structure
        if (outerParsed.data.result) {
          parentResult = outerParsed.data.result;
        } else if (typeof outerParsed.data === 'string') {
          // Sometimes data is stringified
          parentResult = JSON.parse(outerParsed.data).result;
        } else {
          parentResult = outerParsed.data;
        }
      } else if (outerParsed.result) {
        // Direct result structure
        parentResult = outerParsed.result;
      } else {
        // Fallback - assume the whole thing is the result
        parentResult = outerParsed;
      }
      
      if (!parentResult) {
        throw new Error('Could not extract parent result from search results.');
      }
      
      console.log('Parent Result Structure:', {
        hasKey: !!parentResult.key,
        key: parentResult.key,
        hasToken: !!parentResult.token,
        token: parentResult.token,
        hasAirSolutions: !!parentResult.airSolutions,
        airSolutionsCount: parentResult.airSolutions?.length,
        firstAirSolutionKey: parentResult.airSolutions?.[0]?.key
      });
      
      // The Key should be from the parent search result, not the selected flight
      // If parentResult.key doesn't exist, try to get it from the first air solution
      let parentKey = parentResult.key;
      if (!parentKey && parentResult.airSolutions && parentResult.airSolutions.length > 0) {
        parentKey = parentResult.airSolutions[0].key;
        console.log('Using key from first air solution:', parentKey);
      }
      
      if (!parentKey) {
        throw new Error('Parent search key not found in the results.');
      }
      
      if (!parentResult.token) {
        throw new Error('Search token not found in the results.');
      }

      // Get the outbound and inbound keys from the selected flight
      const outBoundKey = flight.journey[0]?.outBoundKey || "";
      let inBoundKey = "";
      if (search?.TripType === "RT" && flight.journey.length > 1) {
        inBoundKey = flight.journey[1]?.inboundKey || "";
      }

      // Get the option keys from the selected flight's journeys
      let optionKeyList = [];
      if (search?.TripType === "RT" && flight.journey.length > 1) {
        // For round trip, get option keys from both journeys
        const outboundOptionKey = flight.journey[0]?.optionInfos?.[0]?.optionKey;
        const inboundOptionKey = flight.journey[1]?.optionInfos?.[0]?.optionKey;
        if (outboundOptionKey) optionKeyList.push(outboundOptionKey);
        if (inboundOptionKey) optionKeyList.push(inboundOptionKey);
      } else {
        // For one way, get option key from the first journey
        const outboundOptionKey = flight.journey[0]?.optionInfos?.[0]?.optionKey;
        if (outboundOptionKey) optionKeyList.push(outboundOptionKey);
      }

      // Determine the correct trip type
      const tripType = flight.journey.length > 1 ? "RT" : "OW";

      // Prepare pricing request
      const pricingRequest: PricingRequest = {
        Key: parentKey,  // Use the parent search key
        OutBoundKey: outBoundKey,
        InboundKey: inBoundKey,
        OptionKeyList: optionKeyList,
        TripType: tripType,  // Use the correct trip type
        AccountCode: process.env.NEXT_PUBLIC_BRIGHTSUN_ACCOUNT_CODE || 'BS5839',
        CompanyCode: process.env.NEXT_PUBLIC_BRIGHTSUN_COMPANY_CODE || 'BS5839',
        WebsiteName: process.env.NEXT_PUBLIC_BRIGHTSUN_WEBSITE_NAME || 'haloflights.co.uk',
        ApplicationAccessMode: 'TEST',
        token: parentResult.token,
        supp: parentResult.supp || 'GAL',
        IsFlexibleDate: false,
        NoOfAdultPax: String(search?.passengers?.adults ?? 1),
        NoOfChildPax: String(search?.passengers?.children ?? 0),
        NoOfYouthPax: String(search?.passengers?.youth ?? 0),
        NoOfInfantPax: String(search?.passengers?.infants ?? 0)
      };

      console.log('Pricing Request:', JSON.stringify(pricingRequest, null, 2));

      const pricingResponse = await api.getPricing(pricingRequest);
      
      if (pricingResponse.success) {
        setPricingData(pricingResponse);
        localStorage.setItem('pricingData', JSON.stringify(pricingResponse));
      } else {
        throw new Error(pricingResponse.message || 'Failed to get pricing');
      }
    } catch (err) {
      console.error('Pricing API error:', err);
      setError(err instanceof Error ? err.message : 'Failed to get pricing information');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmBooking = () => {
    // Navigate to passenger details page
    router.push('/passenger-details');
  };

  const handleBack = () => {
    router.push('/results');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Getting pricing information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
          <button
            onClick={handleBack}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Back to Results
          </button>
        </div>
      </div>
    );
  }

  if (!selectedFlight) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">No flight selected</p>
          <button
            onClick={handleBack}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Back to Search
          </button>
        </div>
      </div>
    );
  }

  const renderFlightSegment = (segment: any, index: number, segments: any[]) => (
    <div key={index} className="mb-6 last:mb-0">
      <div className="flex items-center mb-4">
        <img 
          src={segment.airlineLogoUrl} 
          alt={segment.airlineName} 
          className="h-8 w-auto mr-3"
        />
        <div>
          <h4 className="font-semibold">{segment.airlineName}</h4>
          <p className="text-sm text-gray-500">Flight {segment.flightNumber}</p>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4 items-center">
        <div className="col-span-3">
          <p className="text-lg font-semibold">{segment.departTime}</p>
          <p className="text-sm text-gray-600">{segment.originAirportCity}</p>
          <p className="text-xs text-gray-500">{segment.originAirportName}</p>
          <p className="text-xs text-gray-500">Terminal {segment.originTerminal || 'TBA'}</p>
        </div>
        
        <div className="col-span-1 flex flex-col items-center">
          <p className="text-sm text-gray-500">{segment.travelDuration}</p>
          <div className="w-full h-px bg-gray-300 my-2"></div>
          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

        <div className="col-span-3 text-right">
          <p className="text-lg font-semibold">{segment.arrivalTime}</p>
          <p className="text-sm text-gray-600">{segment.destinationAirportCity}</p>
          <p className="text-xs text-gray-500">{segment.destinationAirportName}</p>
          <p className="text-xs text-gray-500">Terminal {segment.destinationTerminal || 'TBA'}</p>
        </div>
      </div>

      {/* Flight Details Grid */}
      <div className="mt-4 bg-gray-50 rounded-lg p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-700">Equipment:</span>
            <p className="text-gray-600">{segment.equipment || 'N/A'}</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">Fare Class:</span>
            <p className="text-gray-600">{segment.class} ({segment.subClass})</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">Fare Basis:</span>
            <p className="text-gray-600">{segment.fareBasis || 'N/A'}</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">Distance:</span>
            <p className="text-gray-600">{segment.distance ? `${segment.distance} km` : 'N/A'}</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">Operating Carrier:</span>
            <p className="text-gray-600">{segment.operatingCarrier || segment.carrier}</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">Ticket Carrier:</span>
            <p className="text-gray-600">{segment.ticketCarrier || segment.carrier}</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">Flight Time:</span>
            <p className="text-gray-600">{segment.flightTime ? `${Math.floor(segment.flightTime / 60)}h ${segment.flightTime % 60}m` : 'N/A'}</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">Status:</span>
            <p className="text-gray-600">{segment.status || 'Confirmed'}</p>
          </div>
        </div>

        {/* Baggage Information */}
        {segment.baggageInfo && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <span className="font-medium text-gray-700">Baggage Allowance:</span>
            <p className="text-gray-600">{segment.baggageInfo.allowance}</p>
          </div>
        )}
      </div>

      {index < segments.length - 1 && (
        <div className="my-4 px-4 py-2 bg-orange-50 border-l-4 border-orange-400 text-orange-700">
          <p className="text-sm">
            Layover in {segment.destinationAirportCity}: {segments[index + 1].connectionTime}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Booking Confirmation</h1>
            <p className="text-gray-600 mt-2">Review your flight details and pricing</p>
          </div>
          <button
            onClick={handleBack}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
          >
            <span>←</span> Back to Results
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Flight Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trip Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Trip Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Route</h3>
                  <p className="text-lg font-semibold text-blue-600">
                    {pricingData?.data?.result?.airSolutions?.[0]?.journey?.[0]?.airSegments?.[0]?.originAirportCity || selectedFlight.journey[0].optionInfos[0].airSegmentInfos[0].originAirportCity} ↔ 
                    {pricingData?.data?.result?.airSolutions?.[0]?.journey?.[0]?.airSegments?.[pricingData?.data?.result?.airSolutions?.[0]?.journey?.[0]?.airSegments?.length - 1]?.destinationAirportCity || selectedFlight.journey[0].optionInfos[0].airSegmentInfos[selectedFlight.journey[0].optionInfos[0].airSegmentInfos.length - 1].destinationAirportCity}
                  </p>
                  <p className="text-sm text-gray-500">
                    {searchData?.TripType === 'RT' ? 'Round Trip' : 'One Way'}
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Travel Dates</h3>
                  <p className="text-sm">
                    <span className="font-medium">Depart:</span> {pricingData?.data?.result?.airSolutions?.[0]?.journey?.[0]?.airSegments?.[0]?.departDate || selectedFlight.journey[0].optionInfos[0].airSegmentInfos[0].departDate}
                  </p>
                  {pricingData?.data?.result?.airSolutions?.[0]?.journey?.length > 1 && (
                    <p className="text-sm">
                      <span className="font-medium">Return:</span> {pricingData?.data?.result?.airSolutions?.[0]?.journey?.[1]?.airSegments?.[0]?.departDate || selectedFlight.journey[1]?.optionInfos[0].airSegmentInfos[0].departDate}
                    </p>
                  )}
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Passengers</h3>
                  <p className="text-sm">
                    {searchData?.passengers?.adults || 1} Adult(s)
                    {searchData?.passengers?.children ? `, ${searchData.passengers.children} Child(ren)` : ''}
                    {searchData?.passengers?.infants ? `, ${searchData.passengers.infants} Infant(s)` : ''}
                  </p>
                  <p className="text-sm text-gray-500">
                    {pricingData?.data?.result?.airSolutions?.[0]?.journey?.[0]?.airSegments?.[0]?.class || selectedFlight.journey[0].optionInfos[0].airSegmentInfos[0].class} Class
                  </p>
                </div>
              </div>
            </div>

            {/* Outbound Flight */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Outbound Flight</h2>
              
              {/* Journey Summary */}
              <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-blue-800">Total Duration:</span>
                    <p className="text-blue-700">{pricingData?.data?.result?.airSolutions?.[0]?.journey?.[0]?.totalFlightDuration || selectedFlight.journey[0].totalFlightDuration}</p>
                  </div>
                  <div>
                    <span className="font-medium text-blue-800">Stops:</span>
                    <p className="text-blue-700">{pricingData?.data?.result?.airSolutions?.[0]?.journey?.[0]?.stop || selectedFlight.journey[0].stop} {(pricingData?.data?.result?.airSolutions?.[0]?.journey?.[0]?.stop || selectedFlight.journey[0].stop) === 1 ? 'stop' : 'stops'}</p>
                  </div>
                  <div>
                    <span className="font-medium text-blue-800">Route:</span>
                    <p className="text-blue-700">
                      {pricingData?.data?.result?.airSolutions?.[0]?.journey?.[0]?.airSegments?.[0]?.originAirportCity || selectedFlight.journey[0].optionInfos[0].airSegmentInfos[0].originAirportCity} → 
                      {pricingData?.data?.result?.airSolutions?.[0]?.journey?.[0]?.airSegments?.[pricingData?.data?.result?.airSolutions?.[0]?.journey?.[0]?.airSegments?.length - 1]?.destinationAirportCity || selectedFlight.journey[0].optionInfos[0].airSegmentInfos[selectedFlight.journey[0].optionInfos[0].airSegmentInfos.length - 1].destinationAirportCity}
                    </p>
                  </div>
                  <div>
                    <span className="font-medium text-blue-800">Date:</span>
                    <p className="text-blue-700">{pricingData?.data?.result?.airSolutions?.[0]?.journey?.[0]?.airSegments?.[0]?.departDate || selectedFlight.journey[0].optionInfos[0].airSegmentInfos[0].departDate}</p>
                  </div>
                </div>
              </div>
              
              {(pricingData?.data?.result?.airSolutions?.[0]?.journey?.[0]?.airSegments || selectedFlight.journey[0].optionInfos[0].airSegmentInfos).map((segment: any, index: number, segments: any[]) => 
                renderFlightSegment(segment, index, segments)
              )}
            </div>

            {/* Return Flight */}
            {(pricingData?.data?.result?.airSolutions?.[0]?.journey?.length > 1 || selectedFlight.journey.length > 1) && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Return Flight</h2>
                
                {/* Journey Summary */}
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-green-800">Total Duration:</span>
                      <p className="text-green-700">{pricingData?.data?.result?.airSolutions?.[0]?.journey?.[1]?.totalFlightDuration || selectedFlight.journey[1].totalFlightDuration}</p>
                    </div>
                    <div>
                      <span className="font-medium text-green-800">Stops:</span>
                      <p className="text-green-700">{pricingData?.data?.result?.airSolutions?.[0]?.journey?.[1]?.stop || selectedFlight.journey[1].stop} {(pricingData?.data?.result?.airSolutions?.[0]?.journey?.[1]?.stop || selectedFlight.journey[1].stop) === 1 ? 'stop' : 'stops'}</p>
                    </div>
                    <div>
                      <span className="font-medium text-green-800">Route:</span>
                      <p className="text-green-700">
                        {pricingData?.data?.result?.airSolutions?.[0]?.journey?.[1]?.airSegments?.[0]?.originAirportCity || selectedFlight.journey[1].optionInfos[0].airSegmentInfos[0].originAirportCity} → 
                        {pricingData?.data?.result?.airSolutions?.[0]?.journey?.[1]?.airSegments?.[pricingData?.data?.result?.airSolutions?.[0]?.journey?.[1]?.airSegments?.length - 1]?.destinationAirportCity || selectedFlight.journey[1].optionInfos[0].airSegmentInfos[selectedFlight.journey[1].optionInfos[0].airSegmentInfos.length - 1].destinationAirportCity}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-green-800">Date:</span>
                      <p className="text-green-700">{pricingData?.data?.result?.airSolutions?.[0]?.journey?.[1]?.airSegments?.[0]?.departDate || selectedFlight.journey[1].optionInfos[0].airSegmentInfos[0].departDate}</p>
                    </div>
                  </div>
                </div>
                
                {(pricingData?.data?.result?.airSolutions?.[0]?.journey?.[1]?.airSegments || selectedFlight.journey[1].optionInfos[0].airSegmentInfos).map((segment: any, index: number, segments: any[]) => 
                  renderFlightSegment(segment, index, segments)
                )}
              </div>
            )}

            {/* Pricing Details */}
            {pricingData && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Pricing Details</h2>
                <div className="space-y-4">
                  {/* Fare Breakdown */}
                  {pricingData.data?.result?.airSolutions?.[0]?.pricingInfos && (
                    <div className="border-b pb-4">
                      <h3 className="font-semibold text-gray-700 mb-3">Fare Breakdown</h3>
                      <div className="space-y-2">
                        {pricingData.data.result.airSolutions[0].pricingInfos.map((pricing: any, index: number) => (
                          <div key={index} className="flex justify-between items-center py-2 bg-gray-50 px-3 rounded">
                            <div>
                              <span className="font-medium">{pricing.paxTypeName} ({pricing.noOfPax}x)</span>
                              <p className="text-sm text-gray-500">{pricing.paxType}</p>
                            </div>
                            <div className="text-right">
                              <span className="font-semibold">£{pricing.totalPrice.toFixed(2)}</span>
                              <p className="text-sm text-gray-500">
                                Base: £{pricing.basePrice} + Tax: £{pricing.tax}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Total Summary */}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total Price</span>
                      <span className="text-2xl font-bold text-blue-600">
                        £{pricingData.data?.result?.airSolutions?.[0]?.totalPrice?.toFixed(2) || selectedFlight.totalPrice.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {pricingData.data?.result?.airSolutions?.[0]?.currency || 'GBP'} • All taxes and fees included
                    </p>
                  </div>

                  {/* Fare Rules */}
                  {pricingData.data?.result?.airSolutions?.[0]?.fareRulePaxWise && (
                    <div className="border-t pt-4">
                      <h3 className="font-semibold text-gray-700 mb-3">Fare Rules</h3>
                      <div className="space-y-3">
                        {pricingData.data.result.airSolutions[0].fareRulePaxWise.map((rule: any, index: number) => (
                          <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                            <h4 className="font-medium text-yellow-800 mb-2">
                              {rule.passengerTypeCode === 'ADT' ? 'Adult' : 
                               rule.passengerTypeCode === 'CHD' ? 'Child' : 
                               rule.passengerTypeCode === 'INF' ? 'Infant' : 'Youth'}
                            </h4>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-medium text-gray-700">Change Fee:</span>
                                <p className="text-gray-600">{rule.changePenalty?.amountText || 'N/A'}</p>
                              </div>
                              <div>
                                <span className="font-medium text-gray-700">Cancellation Fee:</span>
                                <p className="text-gray-600">{rule.cancelPenalty?.amountText || 'N/A'}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Baggage Information */}
                  {pricingData.data?.result?.airSolutions?.[0]?.baggagePaxWise && (
                    <div className="border-t pt-4">
                      <h3 className="font-semibold text-gray-700 mb-3">Baggage Allowance</h3>
                      <div className="space-y-3">
                        {pricingData.data.result.airSolutions[0].baggagePaxWise.map((baggage: any, index: number) => (
                          <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <h4 className="font-medium text-blue-800 mb-2">
                              {baggage.passengerTypeCode === 'ADT' ? 'Adult' : 
                               baggage.passengerTypeCode === 'CHD' ? 'Child' : 
                               baggage.passengerTypeCode === 'INF' ? 'Infant' : 'Youth'}
                            </h4>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-medium text-gray-700">Checked:</span>
                                <p className="text-gray-600">{baggage.checkinBaggage}</p>
                              </div>
                              <div>
                                <span className="font-medium text-gray-700">Cabin:</span>
                                <p className="text-gray-600">{baggage.cabinBaggage}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Brand Information */}
                  {pricingData.data?.result?.airSolutions?.[0]?.brand && (
                    <div className="border-t pt-4">
                      <h3 className="font-semibold text-gray-700 mb-3">Fare Brand</h3>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          {pricingData.data.result.airSolutions[0].brand.brandImangeUrl && (
                            <img 
                              src={pricingData.data.result.airSolutions[0].brand.brandImangeUrl} 
                              alt={pricingData.data.result.airSolutions[0].brand.brandName}
                              className="h-12 w-auto mr-3"
                            />
                          )}
                          <h4 className="font-semibold text-green-800 text-lg">
                            {pricingData.data.result.airSolutions[0].brand.brandName}
                          </h4>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">
                          {pricingData.data.result.airSolutions[0].brand.brandDetails}
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">Change Penalty:</span>
                            <p className="text-gray-600">{pricingData.data.result.airSolutions[0].brand.changePenalty}</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Cancel Penalty:</span>
                            <p className="text-gray-600">{pricingData.data.result.airSolutions[0].brand.cancelPenalty}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Optional Services */}
                  {pricingData.data?.result?.airSolutions?.[0]?.optionalServices && pricingData.data.result.airSolutions[0].optionalServices.length > 0 && (
                    <div className="border-t pt-4">
                      <h3 className="font-semibold text-gray-700 mb-3">Included Services & Amenities</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {pricingData.data.result.airSolutions[0].optionalServices
                          .filter((service: any) => service.chargeable !== 'Not offered')
                          .map((service: any, index: number) => (
                          <div key={index} className={`rounded-lg p-3 border ${
                            service.chargeable === 'Included in the brand' 
                              ? 'bg-green-50 border-green-200' 
                              : service.chargeable === 'Available for a charge'
                              ? 'bg-blue-50 border-blue-200'
                              : 'bg-gray-50 border-gray-200'
                          }`}>
                            <div className="flex items-start">
                              {service.url && (
                                <img 
                                  src={service.url} 
                                  alt={service.description}
                                  className="w-8 h-8 mr-3 flex-shrink-0"
                                />
                              )}
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-800">
                                  {service.description}
                                </p>
                                <p className={`text-xs ${
                                  service.chargeable === 'Included in the brand' 
                                    ? 'text-green-600' 
                                    : service.chargeable === 'Available for a charge'
                                    ? 'text-blue-600'
                                    : 'text-gray-500'
                                }`}>
                                  {service.chargeable}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Fare Rules & Policies */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Fare Rules & Policies</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Cancellation Policy</h3>
                  <p className="text-sm text-gray-600">
                    Cancellations made more than 24 hours before departure may be subject to airline fees. 
                    Cancellations within 24 hours are typically non-refundable.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Change Policy</h3>
                  <p className="text-sm text-gray-600">
                    Flight changes may be permitted subject to availability and airline fees. 
                    Please contact customer service for assistance.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Baggage Allowance</h3>
                  <p className="text-sm text-gray-600">
                    Standard baggage allowance applies. Additional fees may apply for excess baggage.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Check-in Requirements</h3>
                  <p className="text-sm text-gray-600">
                    Online check-in opens 24 hours before departure. Please arrive at the airport at least 2 hours before departure for international flights.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Booking Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600">Route</p>
                  <p className="font-semibold">
                    {pricingData?.data?.result?.airSolutions?.[0]?.journey?.[0]?.airSegments?.[0]?.originAirportCity || selectedFlight.journey[0].optionInfos[0].airSegmentInfos[0].originAirportCity} → 
                    {pricingData?.data?.result?.airSolutions?.[0]?.journey?.[0]?.airSegments?.[pricingData?.data?.result?.airSolutions?.[0]?.journey?.[0]?.airSegments?.length - 1]?.destinationAirportCity || selectedFlight.journey[0].optionInfos[0].airSegmentInfos[selectedFlight.journey[0].optionInfos[0].airSegmentInfos.length - 1].destinationAirportCity}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600">Passengers</p>
                  <p className="font-semibold">
                    {searchData?.passengers?.adults || 1} Adult(s)
                    {searchData?.passengers?.children ? `, ${searchData.passengers.children} Child(ren)` : ''}
                    {searchData?.passengers?.infants ? `, ${searchData.passengers.infants} Infant(s)` : ''}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Class</p>
                  <p className="font-semibold">
                    {pricingData?.data?.result?.airSolutions?.[0]?.journey?.[0]?.airSegments?.[0]?.class || selectedFlight.journey[0].optionInfos[0].airSegmentInfos[0].class}
                  </p>
                </div>

                {/* Fare Brand */}
                {pricingData?.data?.result?.airSolutions?.[0]?.brand && (
                  <div>
                    <p className="text-sm text-gray-600">Fare Brand</p>
                    <p className="font-semibold text-green-600">
                      {pricingData.data.result.airSolutions[0].brand.brandName}
                    </p>
                  </div>
                )}
              </div>

              {/* Detailed Fare Breakdown */}
              {pricingData?.data?.result?.airSolutions?.[0]?.pricingInfos && (
                <div className="border-t pt-4 mb-4">
                  <h3 className="font-semibold text-gray-700 mb-3">Fare Breakdown</h3>
                  <div className="space-y-2">
                    {pricingData.data.result.airSolutions[0].pricingInfos.map((pricing: any, index: number) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <div>
                          <span className="font-medium">
                            {pricing.paxTypeName} ({pricing.noOfPax}x)
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="font-semibold">£{pricing.totalPrice.toFixed(2)}</span>
                          <div className="text-xs text-gray-500">
                            Base: £{pricing.basePrice} + Tax: £{pricing.tax}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Total Price */}
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total Price</span>
                  <span className="text-2xl font-bold text-blue-600">
                    £{pricingData?.data?.result?.airSolutions?.[0]?.totalPrice?.toFixed(2) || selectedFlight.totalPrice.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {pricingData?.data?.result?.airSolutions?.[0]?.currency || 'GBP'} • All taxes and fees included
                </p>
              </div>

              {/* Quick Info Cards */}
              {pricingData?.data?.result?.airSolutions?.[0] && (
                <div className="space-y-3 mb-6">
                  {/* Baggage Info */}
                  {pricingData.data.result.airSolutions[0].baggagePaxWise && pricingData.data.result.airSolutions[0].baggagePaxWise.length > 0 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="flex items-center mb-2">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <span className="font-medium text-blue-800 text-sm">Baggage</span>
                      </div>
                      <div className="text-xs text-blue-700">
                        <div>Checked: {pricingData.data.result.airSolutions[0].baggagePaxWise[0].checkinBaggage}</div>
                        <div>Cabin: {pricingData.data.result.airSolutions[0].baggagePaxWise[0].cabinBaggage}</div>
                      </div>
                    </div>
                  )}

                  {/* Fare Rules */}
                  {pricingData.data.result.airSolutions[0].fareRulePaxWise && pricingData.data.result.airSolutions[0].fareRulePaxWise.length > 0 && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <div className="flex items-center mb-2">
                        <svg className="w-4 h-4 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <span className="font-medium text-yellow-800 text-sm">Fare Rules</span>
                      </div>
                      <div className="text-xs text-yellow-700">
                        <div>Change: {pricingData.data.result.airSolutions[0].fareRulePaxWise[0].changePenalty?.amountText || 'N/A'}</div>
                        <div>Cancel: {pricingData.data.result.airSolutions[0].fareRulePaxWise[0].cancelPenalty?.amountText || 'N/A'}</div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <button
                onClick={handleConfirmBooking}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Continue to Passenger Details
              </button>

              <p className="text-xs text-gray-500 mt-3 text-center">
                By continuing, you agree to our terms and conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 