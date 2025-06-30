import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Flight Deals from the UK – Compare Airline Offers & Save More',
  description: 'Explore cheap flight fares, Black Friday airline deals, standby tickets, and last-minute breaks from top airlines. Book with trusted UK travel platforms today.',
  keywords: 'flight deals, airline deals, cheap flights, black friday flights, last minute breaks, standby flights, UK flights, airfare deals',
};

export default function FlightDeals() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#dc0069] via-pink-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover the Best <span className="text-yellow-300">Flight Deals</span> from the UK
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 leading-relaxed">
              Looking for <span className="text-yellow-300 font-semibold">cheap flight fares</span> without spending hours comparing <span className="text-yellow-300 font-semibold">airline ticket prices</span>? 
              You've landed in the right place. Our curated flight deals page brings you the most 
              up-to-date offers across major airlines, exclusive last-minute discounts, and seasonal 
              sales — all tailored for UK travellers.
            </p>
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
              <span className="text-gray-600 text-sm font-medium">Real-Time Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#dc0069] rounded-full"></div>
              <span className="text-gray-600 text-sm font-medium">Best Price Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#dc0069] rounded-full"></div>
              <span className="text-gray-600 text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Airline Deals Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Latest <span className="text-[#dc0069]">Airline Deals</span> You Don't Want to Miss
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                <strong>Airfare</strong> doesn't have to break the bank. We track real-time <strong>airline deals</strong> so you can 
                get the lowest <strong>ticket prices</strong> on direct and connecting flights from top UK airports.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="text-blue-600 text-3xl mb-4">✈️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Exclusive Offers</h3>
                <p className="text-gray-600 text-sm">
                  Exclusive <strong>flight ticket offers</strong> from EasyJet, Qatar Airways, and Virgin Atlantic
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="text-green-600 text-3xl mb-4">🔁</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Round-Trip Savings</h3>
                <p className="text-gray-600 text-sm">
                  Discounted round-trip <strong>airfare</strong> on popular UK–Europe routes
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300">
                <div className="text-purple-600 text-3xl mb-4">💺</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Options</h3>
                <p className="text-gray-600 text-sm">
                  <strong>Cheap air fares</strong> with flexible booking options and add-ons
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="text-orange-600 text-3xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Daily Updates</h3>
                <p className="text-gray-600 text-sm">
                  See today's top <strong>airline deals</strong> updated regularly
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/search" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#dc0069] to-pink-500 text-white font-bold text-lg rounded-xl hover:from-pink-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                See Today's Top Airline Deals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Black Friday Deals Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-[#dc0069]">Black Friday</span> Airline Deals – Up to 60% Off
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Each November, we showcase the most aggressive flight discounts with our <strong>Black Friday 
                Flights</strong> collection. Save up to 60% on both economy and premium tickets from major airlines.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center justify-center">
                <span className="text-red-500 mr-3 text-3xl">🔥</span>
                Expect deals on:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                    <span className="text-red-600 text-2xl">✈️</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">British Airways, EasyJet & Finnair</h4>
                  <p className="text-gray-600 text-sm">Premium and budget <strong>airline deals</strong></p>
                </div>
                <div className="text-center group">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600 text-2xl">🌍</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Multi-city routes using Skyscanner</h4>
                  <p className="text-gray-600 text-sm">Complex itineraries with <strong>low fare flights</strong></p>
                </div>
                <div className="text-center group">
                  <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <span className="text-purple-600 text-2xl">⚡</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Flash sales from top travel agencies</h4>
                  <p className="text-gray-600 text-sm">Exclusive <strong>travel agency</strong> partnerships</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/flight-deals/black-friday-flight-deals" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg"
              >
                Explore Black Friday Flight Offers →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Last-Minute Breaks Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-[#dc0069]">Last-Minute Breaks</span> for the Spontaneous Traveler
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Craving a spontaneous getaway? Whether it's a sunny beach or a quick weekend escape, 
                our <strong>last-minute flight deals</strong> section helps you get away fast — without overspending on <strong>airfare</strong>.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="text-orange-600 text-4xl mb-6">⚡</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">British Airways Last-Minute</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>British Airways last-minute breaks</strong> with hotel bundles and flexible <strong>flight ticket offers</strong>
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="text-blue-600 text-4xl mb-6">✈️</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Standby Flights</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Standby flights</strong> available at discounted rates with same-day availability
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="text-green-600 text-4xl mb-6">🤝</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Partnered Offers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Partnered offers from trusted UK <strong>travel agencies</strong> with instant confirmation
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/flight-deals/last-minute-deals" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-200 shadow-lg"
              >
                Browse Last-Minute Flight Deals →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cheap Flights by City Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-[#dc0069]">Cheap Flights</span> from the UK – By City & Season
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Whether you're flying from London, Manchester, or Glasgow, we find <strong>low-cost flights 
                near you</strong>. Our system automatically displays <strong>cheap flights from the UK</strong> by departure 
                city, season, and booking trend.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center justify-center">
                <span className="text-yellow-500 mr-3 text-3xl">⭐</span>
                What makes this page unique:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                    <span className="text-yellow-600 text-2xl">📍</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Localized Filtering</h4>
                  <p className="text-gray-600 text-sm"><strong>"Flights near me"</strong> filtering technology</p>
                </div>
                <div className="text-center group">
                  <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                    <span className="text-yellow-600 text-2xl">💰</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Price Breakdown</h4>
                  <p className="text-gray-600 text-sm">By <strong>airfare</strong> class and route popularity</p>
                </div>
                <div className="text-center group">
                  <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                    <span className="text-yellow-600 text-2xl">🏢</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Top Agency Offers</h4>
                  <p className="text-gray-600 text-sm">Top UK <strong>travel agency</strong> offers included</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/flight-deals/cheap-flights-from-uk" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold text-lg rounded-xl hover:from-yellow-700 hover:to-orange-700 transition-all duration-200 shadow-lg"
              >
                Compare Cheap Flights from Your City →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-City Deals Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-[#dc0069]">Multi-City</span> & Flexible Travel Deals
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                For those who love hopping cities or need complex itineraries, we've partnered with 
                leading tools like <strong>Skyscanner's multi-city planner</strong> to build flexible routes. Save 
                money by bundling flights and maximize value with our <strong>best online travel agency</strong> partnerships.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 mb-12 border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center justify-center">
                <span className="text-purple-600 mr-3 text-3xl">👨‍💼</span>
                Ideal for:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <span className="text-purple-600 text-2xl">💻</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Digital Nomads</h4>
                  <p className="text-gray-600 text-sm">and long-term travellers seeking <strong>low fare flights</strong></p>
                </div>
                <div className="text-center group">
                  <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <span className="text-purple-600 text-2xl">🏢</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Corporate Travel</h4>
                  <p className="text-gray-600 text-sm">booking companies with <strong>travel agency</strong> support</p>
                </div>
                <div className="text-center group">
                  <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <span className="text-purple-600 text-2xl">👨‍👩‍👧‍👦</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Group Bookings</h4>
                  <p className="text-gray-600 text-sm">and family bookings with flexible <strong>airfare</strong></p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/multi-city" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg"
              >
                Start Planning Your Multi-City Trip →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Routes Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Featured <span className="text-[#dc0069]">Flight Routes</span> & Prices
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Popular routes with the best <strong>airline deals</strong> and <strong>cheap flight fares</strong> from UK airports
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { from: "London", to: "Dubai", price: "£239", duration: "7h 30m", airline: "Emirates" },
                { from: "Manchester", to: "New York", price: "£299", duration: "8h 15m", airline: "Virgin Atlantic" },
                { from: "Birmingham", to: "Barcelona", price: "£49", duration: "2h 15m", airline: "Ryanair" },
                { from: "Edinburgh", to: "Amsterdam", price: "£39", duration: "1h 45m", airline: "KLM" },
                { from: "London", to: "Bangkok", price: "£399", duration: "11h 30m", airline: "Thai Airways" },
                { from: "Glasgow", to: "Paris", price: "£59", duration: "2h 30m", airline: "EasyJet" }
              ].map((route, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#dc0069] group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-left">
                      <p className="text-lg font-bold text-gray-900">{route.from}</p>
                      <p className="text-sm text-gray-500">{route.airline}</p>
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
                      <p className="text-sm text-gray-500">{route.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#dc0069]">{route.price}</span>
                    <span className="text-sm text-gray-500">from</span>
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
                Everything you need to know about <strong>flight deals</strong> and booking
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What's the cheapest time to buy flights?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most airlines release their lowest prices around 6–8 weeks in advance. For more 
                  detail, see our{' '}
                  <Link href="/best-time-to-book" className="text-[#dc0069] hover:text-pink-600 underline font-medium">
                    Best Time to Book Flights
                  </Link>{' '}
                  guide for <strong>cheap flight fares</strong>.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Can I trust standby flight deals?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Absolutely. We only show <strong>standby flights</strong> from verified airline partners and agencies with 
                  clear cancellation policies and transparent <strong>airfare</strong> pricing.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Do you offer corporate travel deals?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes! Check out our{' '}
                  <Link href="/corporate-travel" className="text-[#dc0069] hover:text-pink-600 underline font-medium">
                    corporate travel booking options
                  </Link>{' '}
                  with dedicated <strong>travel agency</strong> support.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  How do I find flights near me?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our platform automatically detects your location and shows <strong>flights near you</strong> from 
                  the closest UK airports, making it easy to find <strong>low fare flights</strong> without the hassle.
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
              Ready to Book Your Next <span className="text-yellow-300">Flight Deal</span>?
            </h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed">
              From <strong>cheap air fares</strong> and Black Friday offers to last-minute escapes, we've got the 
              perfect deal for you. Search, compare, and fly smarter with the UK's trusted <strong>travel 
              deal finder</strong> and <strong>best online travel agency</strong> platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/search" 
                className="inline-flex items-center px-8 py-4 bg-white text-[#dc0069] font-bold text-lg rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Compare Deals Now
              </Link>
              <Link 
                href="/flight-deals/last-minute-deals" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-[#dc0069] transition-colors"
              >
                Last-Minute Deals
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}