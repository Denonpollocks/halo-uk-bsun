import { Metadata } from 'next';
import { homeData } from '../data/homeData';
import PopularDestinations from '../components/PopularDestinations';
import NewsletterSection from '../components/NewsletterSection';
import FlightSearch from '../components/FlightSearch';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Book & Search Flights Online – Best Travel Deals 2025',
  description: 'Find and compare flights instantly. Book cheap flight fares, discover last-minute airline deals, and explore multi-city routes. Trusted by travelers across the UK.',
  keywords: 'google flight tickets, google search flights, search flights, flights near me, cheap flight fares, airline deals, flight ticket offers, airfare, best online travel agency, low fare flights, skyscanner multi city, standby flights, travel travel agency',
};

export default function Home() {
  const handleSearchResults = (results: any, searchData?: any) => {
    localStorage.setItem('flightSearchResults', JSON.stringify(results));
    
    // Store search data for pricing API
    if (searchData) {
      localStorage.setItem('flightSearchData', JSON.stringify(searchData));
    }
    
    window.location.href = '/results';
  };

  return (
    <main className="bg-white">
      {/* Hero Section with Image Grid */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Let's{' '}
                  <span className="inline-flex items-center">
                    ✈️
                  </span>{' '}
                  Travel{' '}
                  <span className="text-[#dc0069]">The World</span>{' '}
                  Today!
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Discover a world of possibilities with our premier travel agency. 
                  Whether you crave relaxation on sun-kissed beaches or crave 
                  adventure in remote corners of the globe.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="bg-[#dc0069] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-600 transition-colors shadow-lg">
                  Get Started
                </button>
                <button className="border-2 border-[#dc0069] text-[#dc0069] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#dc0069] hover:text-white transition-colors">
                  Explore
                </button>
              </div>

              {/* Compact Flight Search */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <div className="grid grid-cols-4 gap-4 items-end">
                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <div className="relative">
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc0069] appearance-none bg-white">
                        <option>New York</option>
                        <option>London</option>
                        <option>Paris</option>
                        <option>Tokyo</option>
                      </select>
                      <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        value="8 Fri, Aug" 
                        readOnly
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc0069] cursor-pointer"
                      />
                      <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  {/* Price */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        value="$10,000 - $20,000" 
                        readOnly
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc0069] cursor-pointer"
                      />
                      <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Search Button */}
                  <div>
                    <button className="w-full bg-[#dc0069] text-white p-3 rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="relative">
              {/* Watch Now Badge */}
              <div className="absolute -top-4 -right-4 z-10">
                <div className="bg-white rounded-full p-4 shadow-lg border-4 border-[#dc0069]">
                  <div className="text-center">
                    <div className="text-[#dc0069] font-bold text-sm">Watch Now</div>
                    <div className="w-8 h-8 bg-[#dc0069] rounded-full flex items-center justify-center mt-2 mx-auto">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4 h-[600px]">
                {/* Large Image - Buddha Statue */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg"
                    alt="Buddha statue in mountains"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right Column - Two Images */}
                <div className="space-y-4">
                  {/* Ocean/Boat Image */}
                  <div className="relative h-[290px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg"
                      alt="Boat in crystal clear water"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Hiking/Adventure Image */}
                  <div className="relative h-[290px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg"
                      alt="Person hiking by the ocean"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Best Packages Link */}
              <div className="absolute -bottom-4 -right-4">
                <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-2 text-[#dc0069] font-semibold">
                    <span>Best Packages</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Flight Search Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Search <span className="text-[#dc0069]">Flights</span> Instantly
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Compare prices across hundreds of airlines and find the best deals for your next trip
              </p>
            </div>
            <FlightSearch onSearch={handleSearchResults} />
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#dc0069] rounded-full"></div>
              <span className="text-gray-600 text-sm font-medium">500+ Airlines</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#dc0069] rounded-full"></div>
              <span className="text-gray-600 text-sm font-medium">1M+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#dc0069] rounded-full"></div>
              <span className="text-gray-600 text-sm font-medium">200+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#dc0069] rounded-full"></div>
              <span className="text-gray-600 text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Smarter than Google Search Flights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Smarter than <span className="text-[#dc0069]">Google Search Flights</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our platform goes beyond what you get with <strong>Google Flight Tickets</strong>. Compare fares across hundreds of airlines, track <strong>flight ticket offers</strong>, and discover hidden deals from travel agencies worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-[#dc0069] to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Search</h3>
                <p className="text-gray-600 leading-relaxed">
                  More filters and options than standard <strong>google search flights</strong> with real-time pricing updates.
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-[#dc0069] to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Best Price Guarantee</h3>
                <p className="text-gray-600 leading-relaxed">
                  Find the lowest <strong>airfare</strong> with our best price guarantee policy. We'll match any lower price you find.
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-[#dc0069] to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Confirmation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get instant booking confirmation and e-tickets delivered to your email within minutes of booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Online Travel Agency Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Your Trusted <span className="text-[#dc0069]">Online Travel Partner</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We're more than just a search engine — we're your travel ally. Whether you're booking a holiday or a business trip, our platform is designed to help you book smarter. Get transparent pricing, trusted airline partners, and personalised support every step of the way.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-[#dc0069] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Multi-city flight search</h3>
                      <p className="text-gray-600">Powered by <strong>Skyscanner multi city</strong> technology for complex itineraries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-[#dc0069] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Real-time airline ticket prices</h3>
                      <p className="text-gray-600">Live pricing updates from all major airlines and <strong>travel travel agency</strong> partners</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-[#dc0069] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Standby flights and flexible options</h3>
                      <p className="text-gray-600">Access to <strong>standby flights</strong> and last-minute availability</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/about" 
                  className="inline-flex items-center px-6 py-3 bg-[#dc0069] text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors"
                >
                  Learn More About Us
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#dc0069] to-pink-500 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600 text-sm">Round-the-clock customer service</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#dc0069] to-pink-500 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Flights Near Me</h3>
                    <p className="text-gray-600 text-sm">Find flights from your nearest airport</p>
                  </div>
                </div>
                
                <div className="space-y-6 mt-12">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#dc0069] to-pink-500 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Best Travel Agency</h3>
                    <p className="text-gray-600 text-sm">Trusted by millions of travelers</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#dc0069] to-pink-500 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Tips</h3>
                    <p className="text-gray-600 text-sm">Insider travel booking advice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Airline Deals Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest <span className="text-[#dc0069]">Airline Deals</span> & Cheap Airfares
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We update our deals every week with the lowest fares on top routes. Whether you're looking for <strong>low fare flights</strong>, <strong>standby tickets</strong>, or exclusive holiday packages, you'll find it here.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-[#dc0069] to-pink-500 p-6 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold">London → Dubai</h3>
                    <p className="text-pink-100">Direct flights available</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold">£239</p>
                    <p className="text-pink-100 text-sm">from</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>✈️ Multiple airlines</span>
                  <span>🕒 8h 30m</span>
                </div>
                <Link href="/flight-deals" className="w-full bg-[#dc0069] text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors block text-center">
                  View Deals
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-[#dc0069] to-pink-500 p-6 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold">Manchester → NYC</h3>
                    <p className="text-pink-100">Round trip included</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold">£299</p>
                    <p className="text-pink-100 text-sm">from</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>✈️ Premium airlines</span>
                  <span>🕒 7h 45m</span>
                </div>
                <Link href="/flight-deals" className="w-full bg-[#dc0069] text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors block text-center">
                  View Deals
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-[#dc0069] to-pink-500 p-6 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold">Birmingham → Barcelona</h3>
                    <p className="text-pink-100">Weekend breaks</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold">£49</p>
                    <p className="text-pink-100 text-sm">from</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>✈️ Budget friendly</span>
                  <span>🕒 2h 15m</span>
                </div>
                <Link href="/flight-deals" className="w-full bg-[#dc0069] text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors block text-center">
                  View Deals
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/flight-deals" 
              className="inline-flex items-center px-8 py-4 bg-[#dc0069] text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors shadow-lg"
            >
              Browse All Deals
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Flights Near You Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-[#dc0069]">Flights Near You</span> – Made Simple
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Searching for <strong>flights near me</strong>? Our platform automatically detects your location and offers relevant route suggestions. Fly from your nearest UK airport and access flights from major hubs like London Heathrow, Manchester, or Birmingham in seconds.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { from: "London", to: "Paris", price: "£89", duration: "1h 25m", airport: "LHR" },
                { from: "Manchester", to: "Amsterdam", price: "£95", duration: "1h 35m", airport: "MAN" },
                { from: "Edinburgh", to: "Dublin", price: "£79", duration: "1h 20m", airport: "EDI" },
                { from: "Bristol", to: "Rome", price: "£129", duration: "2h 45m", airport: "BRS" },
                { from: "London", to: "Madrid", price: "£119", duration: "2h 15m", airport: "LGW" },
                { from: "Birmingham", to: "Berlin", price: "£109", duration: "2h 05m", airport: "BHX" },
                { from: "Glasgow", to: "Copenhagen", price: "£139", duration: "2h 30m", airport: "GLA" },
                { from: "Newcastle", to: "Prague", price: "£99", duration: "2h 20m", airport: "NCL" }
              ].map((route, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#dc0069] group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-left">
                      <p className="text-lg font-bold text-gray-900">{route.from}</p>
                      <p className="text-sm text-gray-500">{route.airport}</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-8 h-px bg-gray-300 group-hover:bg-[#dc0069] transition-colors"></div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-[#dc0069] transition-colors mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      <div className="w-8 h-px bg-gray-300 group-hover:bg-[#dc0069] transition-colors"></div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">{route.to}</p>
                      <p className="text-sm text-gray-500">To</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#dc0069]">{route.price}</span>
                    <span className="text-sm text-gray-500">{route.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about booking flights with us
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Is this better than Google Flights?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes – our platform includes additional filters, real-time prices, and booking access directly with <strong>travel agencies</strong>. We offer more comprehensive search options than standard <strong>google search flights</strong>.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Do you offer multi-city flight booking?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Absolutely. Use our <strong>Skyscanner multi city</strong> feature to plan your perfect trip with multiple destinations and flexible routing options.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Can I find standby flights or low fare options?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes. We feature <strong>low fare flights</strong> and real-time <strong>standby</strong> availability on select routes, giving you access to the best deals available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#dc0069] to-pink-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Find the Best Flight?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
              <strong>Search now</strong> and compare flight prices across EasyJet, Qatar Airways, British Airways, Virgin Atlantic and more — all in one place. Experience the <strong>best online travel agency</strong> service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/" 
                className="inline-flex items-center px-8 py-4 bg-white text-[#dc0069] font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Search Flights Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/flight-deals" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#dc0069] transition-colors"
              >
                View All Deals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection {...homeData.newsletter} />
    </main>
  );
}