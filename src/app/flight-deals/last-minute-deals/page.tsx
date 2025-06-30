import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Last-Minute Flight Deals from the UK – Book Cheap Flights Today',
  description: 'Find cheap last-minute flights and getaway deals from top UK cities. Explore British Airways last minute breaks, standby tickets, and same-week travel options.',
  keywords: 'last minute flights, cheap flights, british airways last minute breaks, standby flights, same-day flights, UK flights, cheap air fares, last minute deals, spontaneous travel',
};

export default function LastMinuteDeals() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#dc0069] via-pink-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-300">Last-Minute Flight Deals</span> from the UK – Escape Now, Pay Less
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 leading-relaxed">
              Need a quick break or a spontaneous escape? Whether it's a weekend getaway or a 
              sudden change in plans, our <span className="text-yellow-300 font-semibold">last-minute flight deals</span> let you fly fast without 
              draining your wallet. Browse flexible fares, <span className="text-yellow-300 font-semibold">standby tickets</span>, and last-minute 
              packages from trusted airlines and agencies — all in one place.
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
              <span className="text-gray-600 text-sm font-medium">Same-Day Availability</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#dc0069] rounded-full"></div>
              <span className="text-gray-600 text-sm font-medium">Instant Confirmation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#dc0069] rounded-full"></div>
              <span className="text-gray-600 text-sm font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#dc0069] rounded-full"></div>
              <span className="text-gray-600 text-sm font-medium">Best Price Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fly Out This Week Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Fly Out <span className="text-[#dc0069]">This Week</span> – Top Last-Minute Deals
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Skip the long planning cycle. These <strong>cheap flights</strong> are ready to take off in the next 7 days. 
                Perfect for spontaneous travelers looking for <strong>last minute deals</strong> without the premium price tag.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-12 border border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center justify-center">
                <span className="text-red-500 mr-3 text-3xl">🔥</span>
                Sample last-minute departures:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">✈️</div>
                    <div className="text-sm text-gray-500 bg-orange-100 px-3 py-1 rounded-full">Fri departure</div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">London ✈ Rome</h4>
                  <p className="text-3xl font-bold text-[#dc0069] mb-2">From £69</p>
                  <p className="text-sm text-gray-600">Direct flight • 2h 45m</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">✈️</div>
                    <div className="text-sm text-gray-500 bg-orange-100 px-3 py-1 rounded-full">Sat evening</div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Manchester ✈ Istanbul</h4>
                  <p className="text-3xl font-bold text-[#dc0069] mb-2">From £119</p>
                  <p className="text-sm text-gray-600">1 stop • 6h 30m</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">✈️</div>
                    <div className="text-sm text-gray-500 bg-orange-100 px-3 py-1 rounded-full">Next-day departure</div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Edinburgh ✈ Paris</h4>
                  <p className="text-3xl font-bold text-[#dc0069] mb-2">From £49</p>
                  <p className="text-sm text-gray-600">Direct flight • 2h 15m</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/search?lastMinute=true" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#dc0069] to-pink-500 text-white font-bold text-lg rounded-xl hover:from-pink-600 hover:to-pink-600 transition-all duration-200 shadow-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search All Last-Minute Flights
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* British Airways Last-Minute Breaks Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-[#dc0069]">British Airways Last-Minute Breaks</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                <strong>British Airways</strong> offers exclusive city break packages when you're booking within a 
                short window — perfect for couples, solo travellers, or quick business trips. These <strong>British Airways last minute breaks</strong> combine flights with hotels for unbeatable value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300">
                <div className="text-blue-600 text-4xl mb-6">🧳</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Barcelona City Break</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">2 nights in Barcelona + flights from London</p>
                <p className="text-3xl font-bold text-blue-600 mb-4">From £199</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Hotel included
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Flexible cancellation
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Same-week departure
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500 hover:shadow-2xl transition-all duration-300">
                <div className="text-purple-600 text-4xl mb-6">⛷️</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Geneva Ski Package</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">London to Geneva ski package with transfers</p>
                <p className="text-3xl font-bold text-purple-600 mb-4">From £239</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Ski resort transfers
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Equipment rental deals
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Weekend availability
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300">
                <div className="text-green-600 text-4xl mb-6">🏛️</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Rome Weekend</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">Rome weekend + hotel in city center</p>
                <p className="text-3xl font-bold text-green-600 mb-4">From £299</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Central hotel location
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Breakfast included
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    City tour options
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/british-airways-last-minute" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
              >
                Explore More BA Last-Minute Packages →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Standby Flights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-[#dc0069]">Standby Flights</span> & Same-Day Options
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Got total flexibility? Then <strong>standby tickets</strong> are for you. These ultra-low-cost seats 
                are offered on flights that haven't sold out — great for adventurers, frequent fliers, or anyone seeking the ultimate <strong>cheap flights</strong> experience.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 mb-12 border border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center justify-center">
                <span className="text-orange-600 mr-3 text-3xl">✔</span>
                What to know about standby flights:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                    <span className="text-orange-600 text-2xl">⏰</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Booking Window</h4>
                  <p className="text-gray-600 text-sm">Bookings open 24–72 hours before departure</p>
                </div>
                <div className="text-center group">
                  <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                    <span className="text-orange-600 text-2xl">💰</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Heavily Discounted</h4>
                  <p className="text-gray-600 text-sm">Fares as low as £29 for European routes</p>
                </div>
                <div className="text-center group">
                  <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                    <span className="text-orange-600 text-2xl">✈️</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Route Types</h4>
                  <p className="text-gray-600 text-sm">Most common for domestic or short-haul routes</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How Standby Flights Work:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="w-6 h-6 bg-[#dc0069] text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                    Check Availability
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">Airlines release standby seats 24-72 hours before departure based on remaining capacity.</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="w-6 h-6 bg-[#dc0069] text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                    Book Quickly
                  </h4>
                  <p className="text-gray-600 text-sm">Standby tickets are first-come, first-served and can sell out within hours.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="w-6 h-6 bg-[#dc0069] text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
                    Arrive Early
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">Get to the airport early as standby passengers board after confirmed passengers.</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="w-6 h-6 bg-[#dc0069] text-white rounded-full flex items-center justify-center text-sm mr-3">4</span>
                    Have Backup Plans
                  </h4>
                  <p className="text-gray-600 text-sm">While rare, standby passengers may not get seats if the flight is full.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/standby-flights" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-200 shadow-lg"
              >
                View Available Standby Flights →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Last-Minute Travel by Destination Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-[#dc0069]">Last-Minute Travel</span> by Destination
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our system detects flights from your closest UK airport, helping you book the 
                fastest route out — without wasting time. Find <strong>cheap flights</strong> for spontaneous travel from any UK city.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="text-blue-600 text-4xl mb-6">🚀</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Flights from London</h3>
                <p className="text-gray-600 mb-4">200+ options this week</p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex justify-between">
                    <span>Paris</span>
                    <span className="font-semibold text-[#dc0069]">From £39</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Amsterdam</span>
                    <span className="font-semibold text-[#dc0069]">From £45</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dublin</span>
                    <span className="font-semibold text-[#dc0069]">From £29</span>
                  </div>
                </div>
                <div className="text-sm text-blue-600 font-semibold">All major airports covered</div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="text-green-600 text-4xl mb-6">🚀</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Flights from Manchester</h3>
                <p className="text-gray-600 mb-4">Save up to 40%</p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex justify-between">
                    <span>Barcelona</span>
                    <span className="font-semibold text-[#dc0069]">From £49</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Berlin</span>
                    <span className="font-semibold text-[#dc0069]">From £55</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Prague</span>
                    <span className="font-semibold text-[#dc0069]">From £59</span>
                  </div>
                </div>
                <div className="text-sm text-green-600 font-semibold">Great for northern travelers</div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="text-purple-600 text-4xl mb-6">🚀</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Other UK Cities</h3>
                <p className="text-gray-600 mb-4">Birmingham, Glasgow & more</p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex justify-between">
                    <span>Edinburgh → Copenhagen</span>
                    <span className="font-semibold text-[#dc0069]">From £65</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bristol → Milan</span>
                    <span className="font-semibold text-[#dc0069]">From £69</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Glasgow → Reykjavik</span>
                    <span className="font-semibold text-[#dc0069]">From £79</span>
                  </div>
                </div>
                <div className="text-sm text-purple-600 font-semibold">Regional airport options</div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/flights-near-me" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
              >
                Find Cheap Flights Near You →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book Last-Minute With Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Book <span className="text-[#dc0069]">Last-Minute</span> With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Booking <strong>last minute flights</strong> can be stressful — but not here. We're built to make fast 
                travel simple, safe, and affordable with the best tools for finding <strong>cheap flights</strong> at short notice.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <span className="text-blue-600 text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Real-Time Pricing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Compare real-time pricing from over 30 airlines with instant availability updates for <strong>last minute deals</strong>
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <span className="text-green-600 text-2xl">🤝</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Integrated Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Integrated support from top-rated UK travel agencies with 24/7 assistance for urgent bookings
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <span className="text-purple-600 text-2xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Price Protection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Price protection & instant confirmation with flexible rebooking options for peace of mind
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                <span className="text-[#dc0069]">Exclusive Benefits</span> for Last-Minute Bookers:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#dc0069] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Same-Day Booking</h4>
                    <p className="text-gray-600 text-sm">Book flights departing the same day with instant confirmation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#dc0069] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Mobile Check-in</h4>
                    <p className="text-gray-600 text-sm">Skip the queues with mobile boarding passes sent instantly</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#dc0069] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Emergency Support</h4>
                    <p className="text-gray-600 text-sm">24/7 emergency support for urgent travel changes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#dc0069] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Flexible Payments</h4>
                    <p className="text-gray-600 text-sm">Pay now or later options for urgent bookings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Last-Minute Routes Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Popular <span className="text-[#dc0069]">Last-Minute Routes</span> from the UK
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The most booked spontaneous trips with availability this week
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { from: "London", to: "Paris", price: "£39", time: "2h 15m", type: "City Break" },
                { from: "Manchester", to: "Amsterdam", price: "£49", time: "1h 45m", type: "Weekend Trip" },
                { from: "Birmingham", to: "Dublin", price: "£35", time: "1h 30m", type: "Quick Escape" },
                { from: "Edinburgh", to: "Barcelona", price: "£59", time: "2h 30m", type: "Beach Break" },
                { from: "London", to: "Rome", price: "£69", time: "2h 45m", type: "Culture Trip" },
                { from: "Glasgow", to: "Reykjavik", price: "£79", time: "2h 15m", type: "Adventure" }
              ].map((route, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#dc0069] group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-left">
                      <p className="text-lg font-bold text-gray-900">{route.from}</p>
                      <p className="text-sm text-gray-500">{route.type}</p>
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
                      <p className="text-sm text-gray-500">{route.time}</p>
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
                Everything you need to know about <strong>last-minute flight booking</strong>
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Are last-minute flights cheaper or more expensive?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  It depends. Some are discounted to fill empty seats, while others can rise in 
                  price. We help you catch the discounted <strong>last minute deals</strong> in real-time with our advanced search technology.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Can I book last-minute flights internationally?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, but availability is tighter. Look 3–5 days in advance for international routes. <strong>Standby flights</strong> are more common on domestic and European routes.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Do airlines still offer standby flights in the UK?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes — especially low-cost and regional carriers. Most offer limited <strong>standby tickets</strong> 
                  closer to departure time for significant savings on <strong>cheap flights</strong>.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  How do I get British Airways last minute breaks?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We aggregate all <strong>British Airways last minute breaks</strong> on this page, and link to official or 
                  agency-based options with instant booking and confirmation.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What should I pack for a last-minute trip?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Pack light with essentials only. Check airline baggage policies for <strong>last minute flights</strong> as some carriers offer reduced baggage allowances on discounted fares.
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
              Book Your <span className="text-yellow-300">Last-Minute Flight</span> Before It's Gone
            </h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed">
              Seats are limited. Prices change fast. Whether it's a quick city break or urgent 
              travel, find your perfect <strong>last minute flight</strong> in minutes — no overthinking required. 
              Start your spontaneous adventure with the best <strong>cheap flights</strong> available today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/search-flights?lastMinute=true" 
                className="inline-flex items-center px-8 py-4 bg-white text-[#dc0069] font-bold text-lg rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search Last-Minute Flights
              </Link>
              <Link 
                href="/standby-flights" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-[#dc0069] transition-colors"
              >
                View Standby Options
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}