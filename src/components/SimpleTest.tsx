"use client";

import { useState } from "react";
import { api } from "../lib/api";
import { FlightSearchRequest } from "../types";

export default function SimpleTest() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleTest = async () => {
    setLoading(true);
    
    const testData: FlightSearchRequest = {
      TripType: "OW" as const,
      origin: "LHR",
      destination: "DXB",
      departDate: "2025-12-05",
      arrivalDate: "2025-12-10",
      class: "Economy",
      isFlexibleDate: false,
      isDirectFlight: false,
      passengers: {
        adults: 1,
        children: 0,
        infants: 0,
        youth: 0,
      },
    };

    console.log("Simple test sending:", JSON.stringify(testData, null, 2));

    try {
      const response = await api.searchFlights(testData);
      setResult(response);
    } catch (error) {
      setResult({ error: error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Simple API Test</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">Test Data:</h3>
        <div className="text-sm text-yellow-700">
          <p><strong>DepartDate:</strong> "05 DEC 2025"</p>
          <p><strong>Origin:</strong> LHR</p>
          <p><strong>Destination:</strong> DXB</p>
        </div>
      </div>

      <button
        onClick={handleTest}
        disabled={loading}
        className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium mb-4"
      >
        {loading ? "Testing..." : "Test API with Static Dates"}
      </button>

      {result && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Result:</h3>
          <pre className="bg-gray-50 p-4 rounded text-sm overflow-auto max-h-60">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}