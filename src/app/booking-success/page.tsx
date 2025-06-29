"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function BookingSuccessPage() {
  const router = useRouter();
  const [selectedFlight, setSelectedFlight] = useState<any>(null);
  const [pnrResponse, setPnrResponse] = useState<any>(null);

  useEffect(() => {
    // Get selected flight and PNR response from localStorage
    const flightData = localStorage.getItem('selectedFlight');
    const pnrResponseData = localStorage.getItem('pnrResponse');
    
    if (!flightData || !pnrResponseData) {
      router.push('/');
      return;
    }

    try {
      const flight = JSON.parse(flightData);
      const pnr = JSON.parse(pnrResponseData);
      setSelectedFlight(flight);
      setPnrResponse(pnr);
    } catch (err) {
      console.error('Error parsing data:', err);
      router.push('/');
    }
  }, [router]);

  const handleNewSearch = () => {
    // Clear localStorage and go to home
    localStorage.removeItem('selectedFlight');
    localStorage.removeItem('flightSearchResults');
    localStorage.removeItem('flightSearchData');
    localStorage.removeItem('passengerData');
    localStorage.removeItem('pricingData');
    localStorage.removeItem('pnrResponse');
    router.push('/');
  };

  if (!selectedFlight || !pnrResponse) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Extract PNR data
  const pnrData = pnrResponse.data?.pnrResponse?.result;
  const bookingData = pnrResponse.data?.booking;
  const airSolutions = pnrData?.airSolutions?.[0];
  const pnrInfo = pnrData?.pnrInfo?.[0];
  const journey = airSolutions?.journey?.[0];
  const airSegments = journey?.airSegments || [];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Booking Confirmed!</h1>
            <p className="text-gray-600 mb-6">
              Your flight has been successfully booked. You will receive a confirmation email shortly.
            </p>
            
            {/* PNR Information */}
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">PNR Reference</p>
                  <p className="text-xl font-bold text-blue-600">{pnrInfo?.recLoc || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Brightsun Reference</p>
                  <p className="text-lg font-semibold text-gray-800">{pnrInfo?.brightsunReference || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Airline Reference</p>
                  <p className="text-lg font-semibold text-gray-800">{pnrInfo?.airlineRef || 'N/A'}</p>
                </div>
              </div>
            </div>

            {/* Total Price */}
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Total Amount</p>
              <p className="text-2xl font-bold text-green-600">£{airSolutions?.totalPrice?.toFixed(2) || 'N/A'}</p>
              <p className="text-xs text-gray-500 mt-1">
                Base: £{airSolutions?.basePrice?.toFixed(2) || 'N/A'} | Tax: £{airSolutions?.tax?.toFixed(2) || 'N/A'}
              </p>
            </div>
          </div>

          {/* Flight Itinerary */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
              </svg>
              Flight Itinerary
            </h2>
            
            <div className="space-y-6">
              {airSegments.map((segment: any, index: number) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg font-bold text-gray-800">{segment.origin}</span>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <span className="text-lg font-bold text-gray-800">{segment.destination}</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {segment.carrier} {segment.flightNumber} • {segment.class}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Status</div>
                      <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">
                        {segment.status}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Departure</p>
                      <p className="font-semibold text-gray-800">{segment.departDate}</p>
                      <p className="text-lg font-bold text-blue-600">{segment.departTime}</p>
                      <p className="text-sm text-gray-600">
                        {segment.airport?.[0]?.airportName} 
                        {segment.airport?.[0]?.originTerminal && ` (Terminal ${segment.airport[0].originTerminal})`}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Arrival</p>
                      <p className="font-semibold text-gray-800">{segment.arrivalDate}</p>
                      <p className="text-lg font-bold text-blue-600">{segment.arrivalTime}</p>
                      <p className="text-sm text-gray-600">
                        {segment.airport?.[1]?.airportName || `${segment.destination} Airport`}
                        {segment.airport?.[1]?.destinationTerminal && ` (Terminal ${segment.airport[1].destinationTerminal})`}
                      </p>
                    </div>
                  </div>
                  
                  {index < airSegments.length - 1 && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500">
                        {segment.changeOfPlane === "true" ? "Change of plane" : "Same plane continues"}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Passenger Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Passenger Information
            </h2>
            
            <div className="space-y-4">
              {bookingData?.passengers?.map((passenger: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800">
                      {passenger.title} {passenger.firstName} {passenger.lastName}
                    </p>
                    <p className="text-sm text-gray-600">
                      {passenger.paxType} • {passenger.gender === 'M' ? 'Male' : 'Female'}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      passenger.isLeadName 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {passenger.isLeadName ? 'Lead Passenger' : 'Passenger'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Important Information
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Latest Ticketing Time</h3>
                  <p className="text-sm text-gray-600">
                    {airSolutions?.latestTicketingTime ? 
                      new Date(airSolutions.latestTicketingTime).toLocaleString('en-GB') : 
                      'Please check with airline'
                    }
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Online Check-in</h3>
                  <p className="text-sm text-gray-600">Check in online 24 hours before your flight departure.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Arrive Early</h3>
                  <p className="text-sm text-gray-600">Please arrive at the airport at least 2 hours before departure for international flights.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleNewSearch}
              className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book Another Flight
            </button>
            
            <Link
              href="/"
              className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-center"
            >
              Back to Home
            </Link>
          </div>

          {/* Contact Information */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-2">Need help? Contact our customer service</p>
            <p className="text-sm text-gray-600">
              Email: support@haloflights.co.uk | Phone: +44 20 1234 5678
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 