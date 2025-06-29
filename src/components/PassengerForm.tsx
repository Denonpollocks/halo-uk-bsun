"use client";

import { useState } from "react";
import { Passenger } from "../types";

export default function PassengerForm({
  passengerCount,
  onPassengersComplete,
}: {
  passengerCount: { adults: number; children: number; infants: number; youth: number };
  onPassengersComplete: (passengers: Passenger[]) => void;
}) {
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPassengers = passengerCount.adults + passengerCount.children + passengerCount.infants + passengerCount.youth;

  const getPassengerType = (index: number): "ADT" | "CHD" | "INF" | "YTH" => {
    let count = 0;
    if (index < passengerCount.adults) return "ADT";
    count += passengerCount.adults;
    if (index < count + passengerCount.children) return "CHD";
    count += passengerCount.children;
    if (index < count + passengerCount.infants) return "INF";
    return "YTH";
  };

  const getPassengerTitle = (index: number): string => {
    const type = getPassengerType(index);
    if (type === "ADT") return "Adult";
    if (type === "CHD") return "Child";
    if (type === "INF") return "Infant";
    return "Youth";
  };

  const handleNext = () => {
    if (currentIndex < totalPassengers - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onPassengersComplete(passengers);
    }
  };

  const handlePassengerChange = (field: keyof Passenger, value: string) => {
    const updatedPassengers = [...passengers];
    if (!updatedPassengers[currentIndex]) {
      updatedPassengers[currentIndex] = {
        title: "Mr",
        firstName: "",
        lastName: "",
        paxType: getPassengerType(currentIndex),
        gender: "M",
        paxDOB: "",
        isLeadName: currentIndex === 0,
      };
    }
    updatedPassengers[currentIndex] = {
      ...updatedPassengers[currentIndex],
      [field]: value,
    };
    setPassengers(updatedPassengers);
  };

  if (totalPassengers === 0) {
    return <div>No passengers to add</div>;
  }

  const currentPassenger = passengers[currentIndex] || {
    title: "Mr",
    firstName: "",
    lastName: "",
    paxType: getPassengerType(currentIndex),
    gender: "M",
    paxDOB: "",
    isLeadName: currentIndex === 0,
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Passenger {currentIndex + 1} of {totalPassengers} - {getPassengerTitle(currentIndex)}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <select
            value={currentPassenger.title}
            onChange={(e) => handlePassengerChange("title", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <select
            value={currentPassenger.gender}
            onChange={(e) => handlePassengerChange("gender", e.target.value as "M" | "F")}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            value={currentPassenger.firstName}
            onChange={(e) => handlePassengerChange("firstName", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            value={currentPassenger.lastName}
            onChange={(e) => handlePassengerChange("lastName", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            value={currentPassenger.paxDOB}
            onChange={(e) => handlePassengerChange("paxDOB", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {currentIndex === 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={currentPassenger.email || ""}
              onChange={(e) => handlePassengerChange("email", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {currentIndex === 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              value={currentPassenger.contactNo || ""}
              onChange={(e) => handlePassengerChange("contactNo", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
          disabled={currentIndex === 0}
          className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          {currentIndex === totalPassengers - 1 ? "Complete" : "Next"}
        </button>
      </div>
    </div>
  );
}