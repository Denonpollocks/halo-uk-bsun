"use client";

import { useState } from "react";
import { api } from "../lib/api";

export default function ApiTester() {
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const testEndpoints = async () => {
    setLoading(true);
    setError("");
    const testResults: any = {};

    try {
      // Test Countries
      console.log("Testing Countries API...");
      const countriesResponse = await api.getCountries();
      testResults.countries = countriesResponse;

      // Test Cities
      console.log("Testing Cities API...");
      const citiesResponse = await api.getCities("LHR");
      testResults.cities = citiesResponse;

      // Test Flight Search
      console.log("Testing Flight Search API...");
      const searchResponse = await api.searchFlights({
        TripType: "OW",
        origin: "LHR",
        destination: "DXB",
        departDate: "2025-12-05",
        arrivalDate: "",
        class: "Economy",
        isFlexibleDate: false,
        isDirectFlight: false,
        passengers: {
          adults: 1,
          children: 0,
          infants: 0,
          youth: 0,
        },
      });
      testResults.search = searchResponse;

      setResults(testResults);
    } catch (err) {
      setError("Error testing APIs: " + (err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">API Testing Panel</h2>
      
      <button
        onClick={testEndpoints}
        disabled={loading}
        className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed mb-4"
      >
        {loading ? "Testing..." : "Test All APIs"}
      </button>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {results && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Test Results:</h3>
          
          {Object.entries(results).map(([key, value]) => (
            <div key={key} className="border border-gray-200 rounded p-4">
              <h4 className="font-semibold text-gray-700 mb-2">{key.toUpperCase()}:</h4>
              <pre className="text-sm bg-gray-50 p-2 rounded overflow-auto max-h-40">
                {JSON.stringify(value, null, 2)}
              </pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}