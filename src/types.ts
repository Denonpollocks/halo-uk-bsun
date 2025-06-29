export interface FlightSearchRequest {
  TripType: "OW" | "RT" | "MT";
  origin: string;
  destination: string;
  departDate: string;
  arrivalDate: string;
  class: "Economy" | "Business" | "First";
  isFlexibleDate: boolean;
  isDirectFlight: boolean;
  airlineCode?: string;
  passengers: {
    adults: number;
    children: number;
    infants: number;
    youth: number;
  };
}

export interface BookingRequest {
  flightKey: string;
  TripType: "OW" | "RT" | "MT";
  passengers: Passenger[];
  addressInfo: AddressInfo;
  email: string;
  contactNo: string;
  countryDialingCode: string;
  token: string;
  supp: string;
  pricingInfo?: {
    totalPrice?: number;
    basePrice?: number;
    tax?: number;
    currency?: string;
  };

  paymentInfo: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  };
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface FlightResult {
  airSolutions: any[];
  status: string;
  token: string;
  key: string;
}

export interface Passenger {
  title: string;
  firstName: string;
  lastName: string;
  paxType: "ADT" | "CHD" | "INF" | "YTH";
  gender: "M" | "F";
  paxDOB: string;
  isLeadName: boolean;
  email?: string;
  contactNo?: string;
} 

export interface AddressInfo {
  city: {
    cityCode?: string;
    cityName: string;
  };
  country: {
    countryCode: string;
    countryName: string;
  };
  street: {
    houseNo?: string;
    postalCode: string;
    address1: string;
    address2?: string;
    address3?: string;
  };
}


