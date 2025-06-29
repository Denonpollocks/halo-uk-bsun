import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Time to Book Flights from the UK – Save on Airfare in 2025',
  description: 'Find the cheapest days and months to book your flights. Discover when UK travellers get the lowest airfare with our data-backed flight booking guide.',
  keywords: 'best time to book flights, cheapest days to book airfare, cheapest month to book flights, flight booking guide, UK flights, airfare tips',
};

export default function BestTimeToBook() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Best Time to Book Flights from the UK – 2025 Guide
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Timing matters more than you think. Booking too early or too late can cost you 
              hundreds. This page reveals the cheapest months, best days, and ideal timeframes 
              to book your next flight from the UK — all based on real search and pricing data.
            </p>
          </div>
        </div>
      </section>

      {/* Best Days of the Week Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Best Days of the Week to Book Flights
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              💡 Based on airline fare trends, Tuesdays and Wednesdays consistently offer the best prices.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <div className="text-green-600 text-3xl mb-4">📅</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tuesdays</h3>
                <p className="text-gray-600 mb-4">
                  (especially mornings) see fresh fare releases
                </p>
                <div className="text-sm text-green-600 font-semibold">Best for new deals</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="text-blue-600 text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Wednesdays</h3>
                <p className="text-gray-600 mb-4">
                  often reflect dropped prices from competitor matches
                </p>
                <div className="text-sm text-blue-600 font-semibold">Price matching day</div>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <div className="text-red-600 text-3xl mb-4">⚠️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Avoid</h3>
                <p className="text-gray-600 mb-4">
                  booking on Fridays and Sundays — peak search demand drives prices up
                </p>
                <div className="text-sm text-red-600 font-semibold">Peak demand days</div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-yellow-600 mr-3">💡</span>
                Bonus Tip:
              </h3>
              <p className="text-gray-800">
                Fly mid-week (Tue–Thu) instead of weekends to get the lowest fare and avoid airport crowds.
              </p>
            </div>
            
            <div className="text-center">
              <Link 
                href="/search?dateFilter=true" 
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Search Flights by Date →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cheapest Months Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Cheapest Months to Book Flights
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Here's a seasonal breakdown of the cheapest months to book:
            </p>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Month</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best For</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Avg. Savings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-blue-600 text-sm font-bold">JAN</span>
                          </div>
                          <span className="font-medium text-gray-900">January</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">European city breaks</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">Up to 35% off</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-purple-600 text-sm font-bold">FEB</span>
                          </div>
                          <span className="font-medium text-gray-900">February</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">Long-haul escapes (Asia, USA)</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">Up to 40% off</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-orange-600 text-sm font-bold">NOV</span>
                          </div>
                          <span className="font-medium text-gray-900">November</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">Pre-holiday low traffic</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">Up to 30% off</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-red-600 mr-3">📉</span>
                Avoid:
              </h3>
              <p className="text-gray-800">
                July–August and mid-December unless you're flexible or using points.
              </p>
            </div>
            
            <div className="text-center">
              <Link 
                href="/cheap-flights-from-uk" 
                className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors"
              >
                Explore Cheap Flights from UK Airports →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Early Should You Book Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How Early Should You Book?
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              The sweet spot depends on your destination:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="text-blue-600 text-3xl mb-4">✈️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Domestic (UK/Europe)</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">6–8 weeks</p>
                <p className="text-gray-600 text-sm">Short-haul sweet spot</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <div className="text-purple-600 text-3xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-Haul (USA, Asia)</h3>
                <p className="text-2xl font-bold text-purple-600 mb-2">8–12 weeks</p>
                <p className="text-gray-600 text-sm">International planning</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <div className="text-orange-600 text-3xl mb-4">🎄</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Peak Seasons</h3>
                <p className="text-2xl font-bold text-orange-600 mb-2">12–20 weeks</p>
                <p className="text-gray-600 text-sm">Christmas, Summer</p>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <p className="text-gray-800">
                If you're travelling during holidays, set alerts early. If you're flexible, 
                watch last-minute drops.
              </p>
            </div>
            
            <div className="text-center">
              <Link 
                href="/last-minute-deals" 
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
              >
                Check Last-Minute Flight Deals →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Pricing Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Dynamic Pricing & Airline Behaviour Explained
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Airlines change their prices daily based on seat availability, demand, and even 
              time of day. Here's how it works:
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-xl">✈️</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Price Drops</h4>
                  <p className="text-gray-600 text-sm">usually happen at midnight – 3 AM GMT</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-600 text-xl">📈</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Price Spikes</h4>
                  <p className="text-gray-600 text-sm">when searches increase (weekends & evenings)</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 text-xl">📉</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Best Searches</h4>
                  <p className="text-gray-600 text-sm">Midweek + morning searches = better fares</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pro Tips:</h3>
                <p className="text-gray-800">
                  Set flight alerts, clear cookies (or use incognito), and book early on Tuesdays 
                  or Wednesdays for the best results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Expert Tips to Always Book Smarter
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <div className="text-green-600 text-2xl mb-3">✅</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Use Trusted Comparison Sites</h3>
                <p className="text-gray-600">
                  Use a trusted comparison site (like ours) that includes Google Flights, 
                  Skyscanner multi city, and direct airline integrations
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="text-blue-600 text-2xl mb-3">✅</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Set Price Alerts</h3>
                <p className="text-gray-600">
                  Set price alerts for your preferred routes to catch drops automatically
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <div className="text-purple-600 text-2xl mb-3">✅</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Compare Direct vs Agency</h3>
                <p className="text-gray-600">
                  Always compare direct airline fares vs travel agency bundles
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <div className="text-orange-600 text-2xl mb-3">✅</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Use Flexible Dates</h3>
                <p className="text-gray-600">
                  Consider flexible date filters for up to 30% extra savings
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/search" 
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Try Our Search Tool →
              </Link>
              <Link 
                href="/travel-agencies" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore Top UK Travel Agencies →
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
              FAQ Section
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Is it true Tuesday is the best day to book a flight?
                </h3>
                <p className="text-gray-600">
                  Yes. Statistically, prices are lowest midweek due to reduced demand and airline fare resets.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Can I get cheap flights closer to departure?
                </h3>
                <p className="text-gray-600">
                  Yes — especially on last-minute or standby deals. But for long-haul, it's safer to book early.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Which is cheaper: booking directly or through agencies?
                </h3>
                <p className="text-gray-600">
                  Sometimes agencies bundle deals with perks. Use both to compare prices before you book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Book at the Right Time. Save Every Time.
            </h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Now that you know when to book, let's find the flight that fits your schedule 
              and budget. Explore routes, compare prices, and travel smarter with our trusted tools.
            </p>
            <Link 
              href="/search-flights" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Searching Flights →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 