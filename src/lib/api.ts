const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api";

import { FlightSearchRequest, BookingRequest, ApiResponse, FlightResult } from "../types";

export const api = {
  // Flight Search
  async searchFlights(searchData: FlightSearchRequest): Promise<ApiResponse<FlightResult>> {
    console.log("Frontend sending search data:", JSON.stringify(searchData, null, 2));
    
    const response = await fetch(`${API_BASE_URL}/flights/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchData),
    });
    return response.json();
  },

  // Get Pricing
  async getPricing(pricingData: any): Promise<ApiResponse<any>> {
    const response = await fetch(`${API_BASE_URL}/flights/pricing`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pricingData),
    });
    return response.json();
  },

  // Create Booking
  async createBooking(bookingData: BookingRequest): Promise<ApiResponse<any>> {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    return response.json();
  },

  // Create PNR
  async createPNR(pnrData: any): Promise<ApiResponse<any>> {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pnrData),
    });
    return response.json();
  },

  // Get Countries
  async getCountries(): Promise<ApiResponse<any[]>> {
    const response = await fetch(`${API_BASE_URL}/flights/countries`);
    return response.json();
  },

  // Get Cities
  async getCities(airportCode: string): Promise<ApiResponse<any[]>> {
    const response = await fetch(`${API_BASE_URL}/flights/cities/${airportCode}`);
    return response.json();
  },

  // Get Booking
  async getBooking(id: string): Promise<ApiResponse<any>> {
    const response = await fetch(`${API_BASE_URL}/bookings/${id}`);
    return response.json();
  },

  // Queue Booking
  async queueBooking(queueData: any): Promise<ApiResponse<any>> {
    const response = await fetch(`${API_BASE_URL}/bookings/queue`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(queueData),
    });
    return response.json();
  },
};