"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';

interface PassengerForm {
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  contactNo: string;
  gender: 'M' | 'F';
  paxDOB: string;
  passportNo: string;
  nationality: string;
  passportExpiryDate: string;
  placeOfIssue: string;
  remarks: string;
  specialAssistance: string;
  mealPreference: string;
  seatPreference: string;
  passengerType: 'ADT' | 'CHD' | 'YTH' | 'INF';
}

export default function PassengerDetailsPage() {
  const router = useRouter();
  const [passengers, setPassengers] = useState<PassengerForm[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchData, setSearchData] = useState<any>(null);
  const [selectedFlight, setSelectedFlight] = useState<any>(null);

  useEffect(() => {
    // Get search data from localStorage
    const searchDataFromStorage = localStorage.getItem('flightSearchData');
    const selectedFlightFromStorage = localStorage.getItem('selectedFlight');
    const pricingDataFromStorage = localStorage.getItem('pricingData');
    const searchResultsFromStorage = localStorage.getItem('flightSearchResults');
    
    if (!searchDataFromStorage || !selectedFlightFromStorage) {
      router.push('/');
      return;
    }

    try {
      const search = JSON.parse(searchDataFromStorage);
      const flight = JSON.parse(selectedFlightFromStorage);
      const pricingData = pricingDataFromStorage ? JSON.parse(pricingDataFromStorage) : null;
      const searchResults = searchResultsFromStorage ? JSON.parse(searchResultsFromStorage) : null;
      
      setSearchData(search);
      setSelectedFlight(flight);
      
      // Initialize passengers array based on search data
      const adults = search.passengers?.adults || 0;
      const children = search.passengers?.children || 0;
      const infants = search.passengers?.infants || 0;
      const youth = search.passengers?.youth || 0;
      
      const initialPassengers: PassengerForm[] = [];
      
      // Add adults
      for (let i = 0; i < adults; i++) {
        initialPassengers.push({
          title: 'Mr',
          firstName: '',
          middleName: '',
          lastName: '',
          email: '',
          contactNo: '',
          gender: 'M',
          paxDOB: '',
          passportNo: '',
          nationality: '',
          passportExpiryDate: '',
          placeOfIssue: '',
          remarks: '',
          specialAssistance: '',
          mealPreference: '',
          seatPreference: '',
          passengerType: 'ADT'
        });
      }
      
      // Add children
      for (let i = 0; i < children; i++) {
        initialPassengers.push({
          title: 'Mr',
          firstName: '',
          middleName: '',
          lastName: '',
          email: '',
          contactNo: '',
          gender: 'M',
          paxDOB: '',
          passportNo: '',
          nationality: '',
          passportExpiryDate: '',
          placeOfIssue: '',
          remarks: '',
          specialAssistance: '',
          mealPreference: '',
          seatPreference: '',
          passengerType: 'CHD'
        });
      }
      
      // Add youth
      for (let i = 0; i < youth; i++) {
        initialPassengers.push({
          title: 'Mr',
          firstName: '',
          middleName: '',
          lastName: '',
          email: '',
          contactNo: '',
          gender: 'M',
          paxDOB: '',
          passportNo: '',
          nationality: '',
          passportExpiryDate: '',
          placeOfIssue: '',
          remarks: '',
          specialAssistance: '',
          mealPreference: '',
          seatPreference: '',
          passengerType: 'YTH'
        });
      }
      
      // Add infants
      for (let i = 0; i < infants; i++) {
        initialPassengers.push({
          title: 'Mr',
          firstName: '',
          middleName: '',
          lastName: '',
          email: '',
          contactNo: '',
          gender: 'M',
          paxDOB: '',
          passportNo: '',
          nationality: '',
          passportExpiryDate: '',
          placeOfIssue: '',
          remarks: '',
          specialAssistance: '',
          mealPreference: '',
          seatPreference: '',
          passengerType: 'INF'
        });
      }
      
      setPassengers(initialPassengers);
    } catch (err) {
      console.error('Error parsing data:', err);
      setError('Invalid data');
    }
  }, [router]);

  const handlePassengerChange = (index: number, field: keyof PassengerForm, value: string) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index] = {
      ...updatedPassengers[index],
      [field]: value
    };
    setPassengers(updatedPassengers);
  };

  const getPassengerTypeLabel = (type: string) => {
    switch (type) {
      case 'ADT': return 'Adult';
      case 'CHD': return 'Child';
      case 'YTH': return 'Youth';
      case 'INF': return 'Infant';
      default: return type;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validate all required fields
      const isValid = passengers.every(passenger => 
        passenger.firstName && 
        passenger.lastName && 
        passenger.paxDOB
      );

      // Validate lead passenger has email and contact
      const leadPassenger = passengers[0];
      if (!leadPassenger.email || !leadPassenger.contactNo) {
        throw new Error('Lead passenger must provide email and contact number');
      }

      if (!isValid) {
        throw new Error('Please fill in all required fields for all passengers');
      }

      // Store passenger data in localStorage
      localStorage.setItem('passengerData', JSON.stringify(passengers));
      
      // Get pricing data for PNR creation
      const pricingDataFromStorage = localStorage.getItem('pricingData');
      const searchResultsFromStorage = localStorage.getItem('flightSearchResults');
      if (!pricingDataFromStorage) {
        throw new Error('Pricing data not found. Please go back and select a flight.');
      }
      
      const pricingData = JSON.parse(pricingDataFromStorage);
      const searchResults = searchResultsFromStorage ? JSON.parse(searchResultsFromStorage) : null;
      
      // Debug: Log pricing data structure
      console.log("Pricing data structure:", {
        hasData: !!pricingData.data,
        hasToken: !!pricingData.data?.token,
        hasTokenDirect: !!pricingData.token,
        tokenValue: pricingData.data?.token || pricingData.token,
        fullPricingData: pricingData
      });
      
      // Debug: Log search results structure
      console.log("Search results structure:", {
        hasData: !!searchResults?.data,
        hasToken: !!searchResults?.data?.token,
        hasResult: !!searchResults?.data?.result,
        hasResultToken: !!searchResults?.data?.result?.token,
        fullSearchResults: searchResults
      });
      
      // Prepare passengers data for PNR API (following Brightsun API format)
      const formattedPassengers = passengers.map((passenger, index) => ({
        Title: passenger.title,
        FirstName: passenger.firstName,
        MiddleName: passenger.middleName || '',
        LastName: passenger.lastName,
        PaxType: passenger.passengerType,
        Gender: passenger.gender,
        PaxDOB: passenger.paxDOB, // Format: yyyy-mm-dd
        IsLeadName: index === 0, // First passenger is lead
      }));

      // Prepare address info (using lead passenger's country as default)
      const addressInfo = {
        City: {
          CityCode: null,
          AreaCode: null,
          CityName: "London",
          BillingCityName: null
        },
        Country: {
          CountryCode: "GB",
          CountryName: "United Kingdom",
          BillingCountryName: null
        },
        Street: {
          HouseNo: "Halo Flights",
          PostalCode: "SW1A 1AA",
          Address1: "123 Test Street, London",
          Address2: "",
          Address3: "",
          AddressType: null,
          BillingHouseNo: null,
          BillingAddress1: null,
          BillingAddress2: null,
          BillingZipcode: null
        }
      };

      // Create PNR request following Brightsun API documentation
      const pnrRequest = {
        Key: pricingData.data?.Key || selectedFlight.key, // Key from pricing response
        TripType: searchData.TripType,
        AccountCode: process.env.NEXT_PUBLIC_BRIGHTSUN_ACCOUNT_CODE || "BS5839",
        CompanyCode: process.env.NEXT_PUBLIC_BRIGHTSUN_COMPANY_CODE || "BS5839",
        WebsiteName: process.env.NEXT_PUBLIC_BRIGHTSUN_WEBSITE_NAME || "haloflights.co.uk",
        ApplicationAccessMode: "TEST" as const,
        token: pricingData.data?.token || pricingData.token || searchResults?.data?.token || searchResults?.data?.result?.token,
        supp: pricingData.data?.supp || "GAL",
        IsFlexible: false,
        Pax: formattedPassengers,
        AddressInfo: addressInfo,
        Email: leadPassenger.email,
        ContactNo: leadPassenger.contactNo,
        CountryDialingCode: "+44"
      };

      console.log("Creating PNR with request:", JSON.stringify(pnrRequest, null, 2));

      // Validate that we have a token
      if (!pnrRequest.token) {
        console.error("Token not found in any source!");
        console.log("Available token sources:", {
          pricingDataToken: pricingData.data?.token,
          pricingDataDirectToken: pricingData.token,
          searchResultsToken: searchResults?.data?.token,
          searchResultsResultToken: searchResults?.data?.result?.token
        });
        throw new Error('Token not found. Please go back and select a flight again.');
      }

      console.log("Using token:", pnrRequest.token);

      // Call PNR creation API
      const pnrResponse = await api.createPNR(pnrRequest);
      
      if (pnrResponse.success) {
        console.log("PNR created successfully:", pnrResponse);
        
        // Store PNR response in localStorage
        localStorage.setItem('pnrResponse', JSON.stringify(pnrResponse));
        
        // Navigate to success page
        router.push('/booking-success');
      } else {
        // Check for specific error codes
        const responseWithError = pnrResponse as any;
        if (responseWithError.errorCode === '101' && responseWithError.message?.includes('Token Expired')) {
          throw new Error('Your session has expired. Please go back to the search page and select your flight again.');
        }
        
        // Check for flight availability error (from backend errorType or message content)
        if ((responseWithError.errorType === 'FLIGHT_UNAVAILABLE') || 
            (responseWithError.errorCode === '101' && responseWithError.message?.includes('AVAIL/WL CLOSED'))) {
          console.log('Flight unavailable error detected on frontend:', responseWithError);
          throw new Error('FLIGHT_UNAVAILABLE: This flight is no longer available. It may have been sold out or there is only one seat remaining. Please contact our customer service team for assistance or search for alternative flights.');
        }
        
        throw new Error(pnrResponse.message || 'Failed to create PNR');
      }
      
    } catch (err) {
      console.error('PNR creation error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred during PNR creation');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    router.push('/booking-confirmation');
  };

  if (!searchData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Passenger Information</h1>
            <p className="text-gray-600 mt-2">Please provide accurate passenger details as they appear on travel documents</p>
          </div>
          <button
            onClick={handleBack}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
          >
            <span>←</span> Back to Booking
          </button>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                <strong>Important:</strong> All passenger names must match exactly as they appear on your passport or government-issued ID. 
                Incorrect information may result in denied boarding or additional charges.
              </p>
            </div>
          </div>
        </div>

        {error && (
          <div className={`border px-4 py-3 rounded mb-6 ${
            error.includes('FLIGHT_UNAVAILABLE') 
              ? 'bg-orange-50 border-orange-400 text-orange-800' 
              : 'bg-red-100 border-red-400 text-red-700'
          }`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                {error.includes('FLIGHT_UNAVAILABLE') && (
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                )}
                <div>
                  <strong>Error:</strong> {error}
                  {error.includes('session has expired') && (
                    <p className="text-sm mt-2">
                      This happens when the flight selection session expires. Please go back and select your flight again.
                    </p>
                  )}
                  {error.includes('FLIGHT_UNAVAILABLE') && (
                    <div className="mt-3">
                      <p className="text-sm font-medium mb-2">
                        This flight is no longer available. Here are your options:
                      </p>
                      <div className="space-y-2 text-sm">
                        <p>• <strong>Contact Customer Service:</strong> Call us at <span className="font-mono">+44 20 7123 4567</span> for assistance</p>
                        <p>• <strong>Search Alternative Flights:</strong> Go back to search for other available flights</p>
                        <p>• <strong>Check Later:</strong> Seats may become available if other passengers don't complete their bookings</p>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <button
                          onClick={() => router.push('/')}
                          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                        >
                          Search Alternative Flights
                        </button>
                        <button
                          onClick={() => router.push('/booking-confirmation')}
                          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 text-sm"
                        >
                          Back to Booking
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {error.includes('session has expired') && (
                <button
                  onClick={() => router.push('/')}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm"
                >
                  Go to Search
                </button>
              )}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {passengers.map((passenger, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Passenger Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <h2 className="text-xl font-semibold text-white">
                  Passenger {index + 1} ({getPassengerTypeLabel(passenger.passengerType)})
                  {index === 0 && <span className="text-blue-200 ml-2 text-sm">(Lead Passenger)</span>}
                </h2>
                <p className="text-blue-100 text-sm mt-1">
                  Please ensure all information matches your travel documents exactly
                </p>
              </div>

              <div className="p-6 space-y-8">
                {/* Personal Information Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Title */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                      <select
                        value={passenger.title}
                        onChange={(e) => handlePassengerChange(index, 'title', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none"
                        required
                      >
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Ms">Ms</option>
                        <option value="Miss">Miss</option>
                        <option value="Dr">Dr</option>
                        <option value="Prof">Prof</option>
                        <option value="Sir">Sir</option>
                        <option value="Lady">Lady</option>
                      </select>
                    </div>

                    {/* First Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name * <span className="text-xs text-gray-500">(as on passport)</span>
                      </label>
                      <input
                        type="text"
                        value={passenger.firstName}
                        onChange={(e) => handlePassengerChange(index, 'firstName', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter first name exactly as on passport"
                        required
                      />
                    </div>

                    {/* Middle Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Middle Name <span className="text-xs text-gray-500">(if applicable)</span>
                      </label>
                      <input
                        type="text"
                        value={passenger.middleName}
                        onChange={(e) => handlePassengerChange(index, 'middleName', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter middle name if shown on passport"
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name * <span className="text-xs text-gray-500">(as on passport)</span>
                      </label>
                      <input
                        type="text"
                        value={passenger.lastName}
                        onChange={(e) => handlePassengerChange(index, 'lastName', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter last name exactly as on passport"
                        required
                      />
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                      <select
                        value={passenger.gender}
                        onChange={(e) => handlePassengerChange(index, 'gender', e.target.value as 'M' | 'F')}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none"
                        required
                      >
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                      </select>
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                      <input
                        type="date"
                        value={passenger.paxDOB}
                        onChange={(e) => handlePassengerChange(index, 'paxDOB', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information Section - Only for Lead Passenger */}
                {index === 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contact Information (Lead Passenger)
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          value={passenger.email}
                          onChange={(e) => handlePassengerChange(index, 'email', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="your.email@example.com"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">Booking confirmation and updates will be sent to this email</p>
                      </div>

                      {/* Contact Number */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
                        <input
                          type="tel"
                          value={passenger.contactNo}
                          onChange={(e) => handlePassengerChange(index, 'contactNo', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="+44 20 7123 4567"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">Include country code for international numbers</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Travel Document Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Travel Document Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Passport Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Passport Number</label>
                      <input
                        type="text"
                        value={passenger.passportNo}
                        onChange={(e) => handlePassengerChange(index, 'passportNo', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter passport number"
                      />
                    </div>

                    {/* Nationality */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
                      <input
                        type="text"
                        value={passenger.nationality}
                        onChange={(e) => handlePassengerChange(index, 'nationality', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., British, American"
                      />
                    </div>

                    {/* Passport Expiry Date */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Passport Expiry Date</label>
                      <input
                        type="date"
                        value={passenger.passportExpiryDate}
                        onChange={(e) => handlePassengerChange(index, 'passportExpiryDate', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Must be valid for at least 6 months after travel</p>
                    </div>

                    {/* Place of Issue */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Place of Issue</label>
                      <input
                        type="text"
                        value={passenger.placeOfIssue}
                        onChange={(e) => handlePassengerChange(index, 'placeOfIssue', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., London, UK"
                      />
                    </div>
                  </div>
                </div>

                {/* Travel Preferences Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Travel Preferences (Optional)
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Meal Preference */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Meal Preference</label>
                      <select
                        value={passenger.mealPreference}
                        onChange={(e) => handlePassengerChange(index, 'mealPreference', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none"
                      >
                        <option value="">No preference</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="halal">Halal</option>
                        <option value="kosher">Kosher</option>
                        <option value="gluten-free">Gluten Free</option>
                        <option value="diabetic">Diabetic</option>
                        <option value="low-sodium">Low Sodium</option>
                      </select>
                    </div>

                    {/* Seat Preference */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Seat Preference</label>
                      <select
                        value={passenger.seatPreference}
                        onChange={(e) => handlePassengerChange(index, 'seatPreference', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none"
                      >
                        <option value="">No preference</option>
                        <option value="window">Window</option>
                        <option value="aisle">Aisle</option>
                        <option value="front">Front of aircraft</option>
                        <option value="exit-row">Exit row</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Assistance */}
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Special Assistance Requirements</label>
                    <select
                      value={passenger.specialAssistance}
                      onChange={(e) => handlePassengerChange(index, 'specialAssistance', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none"
                    >
                      <option value="">No special assistance required</option>
                      <option value="wheelchair">Wheelchair assistance</option>
                      <option value="mobility-aid">Mobility aid assistance</option>
                      <option value="visual-impairment">Visual impairment assistance</option>
                      <option value="hearing-impairment">Hearing impairment assistance</option>
                      <option value="service-dog">Service dog accommodation</option>
                      <option value="oxygen">Oxygen equipment</option>
                      <option value="other">Other (please specify in remarks)</option>
                    </select>
                  </div>

                  {/* Remarks */}
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Remarks</label>
                    <textarea
                      value={passenger.remarks}
                      onChange={(e) => handlePassengerChange(index, 'remarks', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      placeholder="Any additional information, special requests, or dietary restrictions..."
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium text-lg flex items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Creating PNR...
                </>
              ) : (
                <>
                  Create PNR
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 