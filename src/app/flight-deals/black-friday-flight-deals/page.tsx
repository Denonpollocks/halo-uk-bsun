import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Black Friday Flight Deals 2025 – Save Up to 60% on Airfare',
  description: 'Grab the best Black Friday airline deals from the UK. Compare limited-time discounts on British Airways, EasyJet, Qatar Airways, and more. Book now before seats run out!',
  keywords: 'black friday flight deals, black friday airline deals, cheap flights, british airways flights, qatar airways, easyjet flights, airfare deals',
};

export default function BlackFridayFlightDeals() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Black Friday Flight Deals 2025 – Your Ticket to Huge Savings
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Black Friday only comes once a year — and if you're looking to book flights at 
              jaw-dropping prices, now's the time. We've partnered with top airlines and travel 
              agencies to bring you exclusive Black Friday airfare deals for 2025. Whether you're 
              planning a city break, long-haul getaway, or multi-city escape, you'll find massive 
              discounts right here.
            </p>
          </div>
        </div>
      </section>

      {/* Why Book Flights on Black Friday Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Book Flights on Black Friday?
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Black Friday is when airlines and OTAs (Online Travel Agencies) drop some of their 
              lowest airfare prices of the year. Think direct flights under £50, long-haul return 
              fares for under £300, and flexible booking perks built in.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <div className="text-red-600 text-3xl mb-4">💰</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Massive Discounts</h3>
                <p className="text-gray-600">
                  Discounts up to 60% off on select routes
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="text-blue-600 text-3xl mb-4">🧳</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Free Upgrades</h3>
                <p className="text-gray-600">
                  Free luggage upgrades on select airlines
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <div className="text-green-600 text-3xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Price Protection</h3>
                <p className="text-gray-600">
                  Price drop protection & flexible rebooking policies
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/subscribe" 
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Subscribe for Early Access to 2025 Deals →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Airlines Offering Black Friday Deals Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Airlines Offering Black Friday Deals
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Here's who's participating in this year's Black Friday flight sales:
            </p>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Airline</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Example Deal</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Departure Cities</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-blue-600 text-sm font-bold">BA</span>
                          </div>
                          <span className="font-medium text-gray-900">British Airways</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">£99 London to Rome</td>
                      <td className="px-6 py-4 text-gray-600">London, Manchester</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-orange-600 text-sm font-bold">EJ</span>
                          </div>
                          <span className="font-medium text-gray-900">EasyJet</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">£29 one-way UK to Europe</td>
                      <td className="px-6 py-4 text-gray-600">Gatwick, Bristol</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-purple-600 text-sm font-bold">QR</span>
                          </div>
                          <span className="font-medium text-gray-900">Qatar Airways</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">£399 return to Bangkok</td>
                      <td className="px-6 py-4 text-gray-600">London Heathrow</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-red-600 text-sm font-bold">VA</span>
                          </div>
                          <span className="font-medium text-gray-900">Virgin Atlantic</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">£349 to NYC (round trip)</td>
                      <td className="px-6 py-4 text-gray-600">Heathrow, Manchester</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/airline-deals" 
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Compare More Airline Deals →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Black Friday Routes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Featured Black Friday Routes
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              We've gathered the most popular routes booked during past Black Friday campaigns:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                <div className="text-blue-600 text-2xl mb-3">✈️</div>
                <h3 className="font-semibold text-gray-900 mb-2">London ✈ Dubai</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">From £239</p>
                <p className="text-gray-600 text-sm">Direct flights available</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                <div className="text-green-600 text-2xl mb-3">✈️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Manchester ✈ New York</h3>
                <p className="text-2xl font-bold text-green-600 mb-2">From £299</p>
                <p className="text-gray-600 text-sm">Round trip included</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
                <div className="text-purple-600 text-2xl mb-3">✈️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Birmingham ✈ Barcelona</h3>
                <p className="text-2xl font-bold text-purple-600 mb-2">From £49</p>
                <p className="text-gray-600 text-sm">One-way deals</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
                <div className="text-orange-600 text-2xl mb-3">✈️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Edinburgh ✈ Amsterdam</h3>
                <p className="text-2xl font-bold text-orange-600 mb-2">From £39</p>
                <p className="text-gray-600 text-sm">Weekend breaks</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/search" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Search Flights from Your City →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Limited-Time Last-Minute Deals Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Limited-Time, Last-Minute Black Friday Escapes
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Got your bags ready? Some of the best deals are only valid for 24–48 hours. 
              This section updates in real time with flash sales and last-minute availability.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                <div className="text-blue-600 text-3xl mb-4">✈️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">British Airways Last-Minute</h3>
                <p className="text-gray-600 mb-4">
                  British Airways last-minute weekend breaks
                </p>
                <div className="text-sm text-blue-600 font-semibold">Valid for 24 hours only</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
                <div className="text-orange-600 text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">EasyJet Standby Flights</h3>
                <p className="text-gray-600 mb-4">
                  EasyJet standby flights for same-week departures
                </p>
                <div className="text-sm text-orange-600 font-semibold">Flash sale - 48 hours</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                <div className="text-green-600 text-3xl mb-4">🏨</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hotel + Flight Bundles</h3>
                <p className="text-gray-600 mb-4">
                  Packages including hotel + flight bundles under £300
                </p>
                <div className="text-sm text-green-600 font-semibold">Limited availability</div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/last-minute-deals" 
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
              >
                Browse Last-Minute Black Friday Deals →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* When Does Black Friday Sale Start Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              When Does the Black Friday Sale Start?
            </h2>
            
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Dates to Know:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 text-xl">🖤</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Black Friday 2025</h4>
                  <p className="text-gray-600">Friday, November 28th</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 text-xl">💻</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cyber Monday 2025</h4>
                  <p className="text-gray-600">Monday, December 1st</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-xl">📅</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Early Deals</h4>
                  <p className="text-gray-600">Starting November 20th</p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
              <p className="text-gray-800 font-semibold">
                ✅ Pro tip: Bookmark this page and sign up for email alerts so you never miss a live deal drop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              FAQ Section
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do all airlines offer Black Friday deals?
                </h3>
                <p className="text-gray-600">
                  No, but most major carriers like British Airways, Qatar Airways, and EasyJet 
                  participate with limited-time offers.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Can I book Black Friday flight deals for 2026?
                </h3>
                <p className="text-gray-600">
                  Yes. Many airlines allow bookings for up to 11 months in advance during the sale period.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Are Black Friday deals refundable?
                </h3>
                <p className="text-gray-600">
                  It depends on the fare class. Always check cancellation and rebooking terms before finalizing.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do travel agencies offer better Black Friday deals?
                </h3>
                <p className="text-gray-600">
                  Sometimes. Check both airline websites and UK travel agencies to compare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Book Your Black Friday Flight?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Deals are live — and they're not waiting. Search your route, compare prices, and 
              lock in your savings before seats run out.
            </p>
            <Link 
              href="/search-flights" 
              className="inline-flex items-center px-8 py-4 bg-white text-red-900 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Search Black Friday Flights Now →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 