import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Last-Minute Flight Deals from the UK – Book Cheap Flights Today',
  description: 'Find cheap last-minute flights and getaway deals from top UK cities. Explore British Airways last minute breaks, standby tickets, and same-week travel options.',
  keywords: 'last minute flights, cheap flights, british airways last minute breaks, standby flights, same-day flights, UK flights, cheap air fares',
};

export default function LastMinuteDeals() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Last-Minute Flight Deals from the UK – Escape Now, Pay Less
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Need a quick break or a spontaneous escape? Whether it's a weekend getaway or a 
              sudden change in plans, our last-minute flight deals let you fly fast without 
              draining your wallet. Browse flexible fares, standby tickets, and last-minute 
              packages from trusted airlines and agencies — all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Fly Out This Week Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Fly Out This Week – Top Last-Minute Deals
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Skip the long planning cycle. These flights are ready to take off in the next 7 days.
            </p>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-red-500 mr-3">🔥</span>
                Sample last-minute departures:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">✈️</div>
                    <div className="text-sm text-gray-500">Fri departure</div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">London ✈ Rome</h4>
                  <p className="text-3xl font-bold text-orange-600">From £69</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">✈️</div>
                    <div className="text-sm text-gray-500">Sat evening</div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Manchester ✈ Istanbul</h4>
                  <p className="text-3xl font-bold text-orange-600">From £119</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">✈️</div>
                    <div className="text-sm text-gray-500">next-day departure</div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Edinburgh ✈ Paris</h4>
                  <p className="text-3xl font-bold text-orange-600">From £49</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/search?lastMinute=true" 
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Search All Last-Minute Flights →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* British Airways Last-Minute Breaks Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              British Airways Last-Minute Breaks
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              British Airways offers exclusive city break packages when you're booking within a 
              short window — perfect for couples, solo travellers, or quick business trips.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                <div className="text-blue-600 text-3xl mb-4">🧳</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Barcelona City Break</h3>
                <p className="text-gray-600 mb-4">2 nights in Barcelona + flights</p>
                <p className="text-2xl font-bold text-blue-600">From £199</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                <div className="text-blue-600 text-3xl mb-4">⛷️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Geneva Ski Package</h3>
                <p className="text-gray-600 mb-4">London to Geneva ski package</p>
                <p className="text-2xl font-bold text-blue-600">From £239</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                <div className="text-blue-600 text-3xl mb-4">🏛️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Rome Weekend</h3>
                <p className="text-gray-600 mb-4">Rome weekend + hotel</p>
                <p className="text-2xl font-bold text-blue-600">From £299</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/british-airways-last-minute" 
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Explore More BA Last-Minute Packages →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Standby Flights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Standby Flights & Same-Day Options
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Got total flexibility? Then standby tickets are for you. These ultra-low-cost seats 
              are offered on flights that haven't sold out — great for adventurers or frequent fliers.
            </p>
            
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-orange-600 mr-3">✔</span>
                What to know:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 text-xl">⏰</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Booking Window</h4>
                  <p className="text-gray-600 text-sm">Bookings open 24–72 hours before departure</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 text-xl">💰</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Heavily Discounted</h4>
                  <p className="text-gray-600 text-sm">Fares as low as £29</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 text-xl">✈️</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Route Types</h4>
                  <p className="text-gray-600 text-sm">Most common for domestic or short-haul routes</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/standby-flights" 
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
              >
                View Available Standby Flights →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Last-Minute Travel by Destination Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Last-Minute Travel by Destination
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Our system detects flights from your closest UK airport, helping you book the 
              fastest route out — without wasting time.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-blue-600 text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Flights from London</h3>
                <p className="text-gray-600 mb-4">200+ options this week</p>
                <div className="text-sm text-blue-600 font-semibold">All major airports covered</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-green-600 text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Flights from Manchester</h3>
                <p className="text-gray-600 mb-4">Save up to 40%</p>
                <div className="text-sm text-green-600 font-semibold">Great for northern travelers</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-purple-600 text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Other UK Cities</h3>
                <p className="text-gray-600 mb-4">Birmingham, Glasgow & more</p>
                <div className="text-sm text-purple-600 font-semibold">Regional airport options</div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/flights-near-me" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Find Cheap Flights Near You →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book Last-Minute With Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Book Last-Minute With Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Booking last-minute can be stressful — but not here. We're built to make fast 
              travel simple, safe, and affordable.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-xl">✅</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Pricing</h3>
                <p className="text-gray-600">
                  Compare real-time pricing from over 30 airlines
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-xl">✅</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrated Support</h3>
                <p className="text-gray-600">
                  Integrated support from top-rated UK travel agencies
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-xl">✅</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Price Protection</h3>
                <p className="text-gray-600">
                  Price protection & instant confirmation
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/why-choose-us" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                See Why We're the Best Travel Agency for Flights →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              FAQs – Last-Minute Flight Booking
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Are last-minute flights cheaper or more expensive?
                </h3>
                <p className="text-gray-600">
                  It depends. Some are discounted to fill empty seats, while others can rise in 
                  price. We help you catch the discounted ones in real-time.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Can I book last-minute flights internationally?
                </h3>
                <p className="text-gray-600">
                  Yes, but availability is tighter. Look 3–5 days in advance for international routes.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do airlines still offer standby flights in the UK?
                </h3>
                <p className="text-gray-600">
                  Yes — especially low-cost and regional carriers. Most offer limited standby 
                  seats closer to departure time.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How do I get British Airways last minute breaks?
                </h3>
                <p className="text-gray-600">
                  We aggregate all BA last-minute offers on this page, and link to official or 
                  agency-based options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Book Your Last-Minute Flight Before It's Gone
            </h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Seats are limited. Prices change fast. Whether it's a quick city break or urgent 
              travel, find your perfect flight in minutes — no overthinking required.
            </p>
            <Link 
              href="/search-flights?lastMinute=true" 
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Search Last-Minute Flights →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 