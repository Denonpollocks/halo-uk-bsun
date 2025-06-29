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
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover the Best Flight Deals from the UK
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Looking for cheap flight fares without spending hours comparing airline ticket prices? 
              You've landed in the right place. Our curated flight deals page brings you the most 
              up-to-date offers across major airlines, exclusive last-minute discounts, and seasonal 
              sales — all tailored for UK travellers.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Airline Deals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Latest Airline Deals You Don't Want to Miss
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Airfare doesn't have to break the bank. We track real-time airline deals so you can 
              get the lowest ticket prices on direct and connecting flights.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="text-blue-600 text-2xl mb-3">✈️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Exclusive Offers</h3>
                <p className="text-gray-600 text-sm">
                  Exclusive flight ticket offers from EasyJet, Qatar Airways, and Virgin Atlantic
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <div className="text-green-600 text-2xl mb-3">🔁</div>
                <h3 className="font-semibold text-gray-900 mb-2">Round-Trip Savings</h3>
                <p className="text-gray-600 text-sm">
                  Discounted round-trip airfare on popular UK–Europe routes
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <div className="text-purple-600 text-2xl mb-3">💺</div>
                <h3 className="font-semibold text-gray-900 mb-2">Flexible Options</h3>
                <p className="text-gray-600 text-sm">
                  Cheap air fares with flexible booking options and add-ons
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <div className="text-orange-600 text-2xl mb-3">🟢</div>
                <h3 className="font-semibold text-gray-900 mb-2">Daily Updates</h3>
                <p className="text-gray-600 text-sm">
                  See today's top airline deals updated regularly
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/search" 
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                See today's top airline deals →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Black Friday Deals Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Black Friday Airline Deals – Up to 60% Off
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Each November, we showcase the most aggressive flight discounts with our Black Friday 
              Flights collection. Save up to 60% on both economy and premium tickets.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-red-500 mr-3">🔥</span>
                Expect deals on:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-600 text-xl">✈️</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">British Airways, EasyJet & Finnair</h4>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 text-xl">🌍</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Multi-city routes using Skyscanner</h4>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 text-xl">⚡</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Flash sales from top travel agencies</h4>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/flight-deals/black-friday-flight-deals" 
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Explore Black Friday flight offers →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Last-Minute Breaks Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Last-Minute Breaks for the Spontaneous Traveler
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Craving a spontaneous getaway? Whether it's a sunny beach or a quick weekend escape, 
              our last-minute flight deals section helps you get away fast — without overspending.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
                <div className="text-orange-600 text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">British Airways Last-Minute</h3>
                <p className="text-gray-600">
                  British Airways last-minute breaks with hotel bundles
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                <div className="text-blue-600 text-3xl mb-4">✈️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Standby Flights</h3>
                <p className="text-gray-600">
                  Standby flights available at discounted rates
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                <div className="text-green-600 text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnered Offers</h3>
                <p className="text-gray-600">
                  Partnered offers from trusted UK travel agencies
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/last-minute-deals" 
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
              >
                Browse Last-Minute Flight Deals →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cheap Flights by City Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Cheap Flights from the UK – By City & Season
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Whether you're flying from London, Manchester, or Glasgow, we find low-cost flights 
              near you. Our system automatically displays cheap flights from the UK by departure 
              city, season, and booking trend.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-yellow-500 mr-3">⭐</span>
                What makes this page unique:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-yellow-600 text-xl">📍</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Localized Filtering</h4>
                  <p className="text-gray-600 text-sm">"Flights near me" filtering</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-yellow-600 text-xl">💰</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Price Breakdown</h4>
                  <p className="text-gray-600 text-sm">By airfare class</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-yellow-600 text-xl">🏢</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Top Agency Offers</h4>
                  <p className="text-gray-600 text-sm">Top UK travel agency offers included</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/city-flights" 
                className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors"
              >
                Compare Cheap Flights from Your City →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-City Deals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Multi-City & Flexible Travel Deals
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              For those who love hopping cities or need complex itineraries, we've partnered with 
              leading tools like Skyscanner's multi-city planner to build flexible routes. Save 
              money by bundling flights and maximize value.
            </p>
            
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-purple-600 mr-3">👨‍💼</span>
                Ideal for:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 text-xl">💻</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Digital Nomads</h4>
                  <p className="text-gray-600 text-sm">and long-term travellers</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 text-xl">🏢</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Corporate Travel</h4>
                  <p className="text-gray-600 text-sm">booking companies</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 text-xl">👨‍👩‍👧‍👦</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Group Bookings</h4>
                  <p className="text-gray-600 text-sm">and family bookings</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/multi-city" 
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Start Planning Your Multi-City Trip →
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
              FAQs – Everything About Flight Deals
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What's the cheapest time to buy flights?
                </h3>
                <p className="text-gray-600">
                  Most airlines release their lowest prices around 6–8 weeks in advance. For more 
                  detail, see our{' '}
                  <Link href="/best-time-to-book" className="text-blue-600 hover:text-blue-800 underline">
                    Best Time to Book Flights
                  </Link>{' '}
                  guide.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Can I trust standby flight deals?
                </h3>
                <p className="text-gray-600">
                  Absolutely. We only show offers from verified airline partners and agencies with 
                  clear cancellation policies.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do you offer corporate travel deals?
                </h3>
                <p className="text-gray-600">
                  Yes! Check out our{' '}
                  <Link href="/corporate-travel" className="text-blue-600 hover:text-blue-800 underline">
                    corporate travel booking options
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Book Your Next Flight Deal?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              From cheap air fares and Black Friday offers to last-minute escapes, we've got the 
              perfect deal for you. Search, compare, and fly smarter with the UK's trusted travel 
              deal finder.
            </p>
            <Link 
              href="/search" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Compare Deals Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 