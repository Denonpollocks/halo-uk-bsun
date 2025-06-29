export interface FlightSearchRequest {
  TripType: "OW" | "RT" | "MT";
  origin: string;
  destination: string;
  departDate: string;
  arrivalDate?: string;
  airlineCode?: string;
  class: string;
  isFlexibleDate: boolean;
  isDirectFlight: boolean;
  passengers: {
    adults: number;
    children: number;
    infants: number;
    youth: number;
  };
}

export interface Passenger {
  title: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  paxType: "ADT" | "CHD" | "INF" | "YTH";
  gender: "M" | "F";
  paxDOB: string;
  isLeadName: boolean;
  email?: string;
  contactNo?: string;
  passportNo?: string;
  nationality?: string;
  passportExpiryDate?: string;
  placeOfIssue?: string;
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
  
}

export interface FlightResult {
  key: string;
  token: string;
  supp: string;
  journeys: any[];
  pricing: any;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
  errorCode?: string;
}

export interface PricingRequest {
  Key: string;
  OutBoundKey: string;
  InboundKey: string;
  OptionKeyList: string[];
  TripType: "OW" | "RT" | "MT";
  AccountCode: string;
  CompanyCode: string;
  WebsiteName: string;
  ApplicationAccessMode: "TEST" | "LIVE";
  token: string;
  supp: string;
  IsFlexibleDate: boolean;
  NoOfAdultPax: string;
  NoOfChildPax: string;
  NoOfYouthPax: string;
  NoOfInfantPax: string;
}