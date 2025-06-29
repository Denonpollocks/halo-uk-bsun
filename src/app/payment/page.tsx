"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PaymentPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFlight, setSelectedFlight] = useState<any>(null);

  useEffect(() => {
    // Get selected flight from localStorage
    const flightData = localStorage.getItem('selectedFlight');
    
    if (!flightData) {
      router.push('/');
      return;
    }

    try {
      const flight = JSON.parse(flightData);
      setSelectedFlight(flight);
    } catch (err) {
      console.error('Error parsing flight data:', err);
      setError('Invalid flight data');
    }
  }, [router]);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Navigate to confirmation page
      router.push('/booking-success');
    } catch (err) {
      setError('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    router.push('/passenger-details');
  };

  if (!selectedFlight) {
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
            <h1 className="text-3xl font-bold text-gray-800">Payment</h1>
            <p className="text-gray-600 mt-2">Complete your booking with secure payment</p>
          </div>
          <button
            onClick={handleBack}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
          >
            <span>←</span> Back to Passenger Details
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Payment Information</h2>
            
            <form onSubmit={handlePayment} className="space-y-6">
              {/* Card Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Number *</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Cardholder Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name *</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Expiry Date and CVV */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date *</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CVV *</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Billing Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Billing Address *</label>
                <textarea
                  placeholder="Enter your billing address"
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? "Processing Payment..." : `Pay £${selectedFlight.totalPrice.toFixed(2)}`}
              </button>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Booking Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Flight Price:</span>
                <span>£{selectedFlight.basePrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Taxes & Fees:</span>
                <span>£{selectedFlight.tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total:</span>
                  <span className="text-blue-600">£{selectedFlight.totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Secure Payment</h3>
              <p className="text-sm text-blue-700">
                Your payment information is encrypted and secure. We use industry-standard SSL encryption to protect your data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 