"use client";

import { useState } from "react";
import { AddressInfo, BookingRequest, Passenger } from "../types";
import { api } from "../lib/api";
import PassengerForm from "./PassengerForm";

export default function BookingForm({
  selectedFlight,
  onBookingComplete,
  onBack,
}: {
  selectedFlight: any;
  onBookingComplete: (booking: any) => void;
  onBack: () => void;
}) {
  const [step, setStep] = useState<"passengers" | "address" | "complete">("passengers");
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [addressInfo, setAddressInfo] = useState<AddressInfo>({
    city: { cityName: "" },
    country: { countryCode: "", countryName: "" },
    street: { postalCode: "", address1: "" },
  });
  const [contactInfo, setContactInfo] = useState({
    email: "",
    contactNo: "",
    countryDialingCode: "+44",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePassengersComplete = (completedPassengers: Passenger[]) => {
    setPassengers(completedPassengers);
    setStep("address");
  };

  const handleAddressSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const bookingRequest: BookingRequest = {
        flightKey: selectedFlight.searchKey,
        TripType: selectedFlight.TripType || "OW",
        passengers,
        addressInfo,
        paymentInfo: {
          cardNumber: "",
          expiryDate: "",
          cvv: "",
        },
        email: contactInfo.email,
        contactNo: contactInfo.contactNo,
        countryDialingCode: contactInfo.countryDialingCode,
        token: selectedFlight.token,
        supp: selectedFlight.supp,
      };

      const response = await api.createBooking(bookingRequest);
      if (response.success) {
        onBookingComplete(response.data);
        setStep("complete");
      } else {
        setError(response.error || "Booking failed");
      }
    } catch (err) {
      setError("An error occurred during booking");
    } finally {
      setLoading(false);
    }
  };

  if (step === "passengers") {
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Passenger Details</h2>
          <button
            onClick={onBack}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Results
          </button>
        </div>
        <PassengerForm
          passengerCount={selectedFlight.passengerCount || { adults: 1, children: 0, infants: 0, youth: 0 }}
          onPassengersComplete={handlePassengersComplete}
        />
      </div>
    );
  }

  if (step === "address") {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact & Address Information</h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={contactInfo.email}
              onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              value={contactInfo.contactNo}
              onChange={(e) => setContactInfo({ ...contactInfo, contactNo: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country Dialing Code
            </label>
            <input
              type="text"
              value={contactInfo.countryDialingCode}
              onChange={(e) => setContactInfo({ ...contactInfo, countryDialingCode: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City
            </label>
            <input
              type="text"
              value={addressInfo.city.cityName}
              onChange={(e) => setAddressInfo({
                ...addressInfo,
                city: { ...addressInfo.city, cityName: e.target.value }
              })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country Code
            </label>
            <input
              type="text"
              placeholder="e.g., GB"
              value={addressInfo.country.countryCode}
              onChange={(e) => setAddressInfo({
                ...addressInfo,
                country: { ...addressInfo.country, countryCode: e.target.value.toUpperCase() }
              })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country Name
            </label>
            <input
              type="text"
              value={addressInfo.country.countryName}
              onChange={(e) => setAddressInfo({
                ...addressInfo,
                country: { ...addressInfo.country, countryName: e.target.value }
              })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Postal Code
            </label>
            <input
              type="text"
              value={addressInfo.street.postalCode}
              onChange={(e) => setAddressInfo({
                ...addressInfo,
                street: { ...addressInfo.street, postalCode: e.target.value }
              })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address Line 1
            </label>
            <input
              type="text"
              value={addressInfo.street.address1}
              onChange={(e) => setAddressInfo({
                ...addressInfo,
                street: { ...addressInfo.street, address1: e.target.value }
              })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setStep("passengers")}
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          >
            Back to Passengers
          </button>

          <button
            onClick={handleAddressSubmit}
            disabled={loading}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Booking..." : "Create Booking"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Booking Complete!</h2>
      <div className="text-center">
        <div className="text-green-600 text-6xl mb-4">✓</div>
        <p className="text-lg text-gray-700 mb-4">Your booking has been successfully created!</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Book Another Flight
        </button>
      </div>
    </div>
  );
}