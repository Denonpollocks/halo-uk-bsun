import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cheap Flights from the UK – Compare Fares from London, Manchester & More',
  description: 'Explore cheap flights from UK airports including London, Manchester, and Birmingham. Real-time airfare deals, last-minute flights, and flexible booking options.',
  keywords: 'cheap flights from UK, London flights, Manchester flights, Birmingham flights, cheap air fares, flights near me, airline ticket prices',
};

export default function CheapFlightsFromUK() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cheap Flights from the UK – Real-Time Deals from Your City
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Whether you're flying out from London, Manchester, Birmingham, or beyond — finding 
              cheap flights just got easier. This page updates daily with the lowest airfare 
              options from UK airports. Compare deals, filter by budget, and book instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Top Departure Cities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Top Departure Cities in the UK
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              We scan fares from all major UK airports so you can book smart from wherever you are:
            </p>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">City</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Example Route</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Fare From</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-blue-600 text-sm font-bold">LHR</span>
                          </div>
                          <span className="font-medium text-gray-900">London Heathrow</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">London ✈ Dubai</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">From £239</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-green-600 text-sm font-bold">MAN</span>
                          </div>
                          <span className="font-medium text-gray-900">Manchester</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">Manchester ✈ Malaga</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">From £89</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-purple-600 text-sm font-bold">BHX</span>
                          </div>
                          <span className="font-medium text-gray-900">Birmingham</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">Birmingham ✈ Amsterdam</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">From £59</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-orange-600 text-sm font-bold">EDI</span>
                          </div>
                          <span className="font-medium text-gray-900">Edinburgh</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">Edinburgh ✈ Dublin</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">From £39</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/flights-near-me" 
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Search Flights Near You →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cheap Flights by Season & Trend Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Cheap Flights by Season & Trend
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Timing is everything. Here's when UK travellers typically get the lowest fares:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-blue-600 text-3xl mb-4">📅</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Months</h3>
                <p className="text-gray-600 mb-4">January, February, November</p>
                <div className="text-sm text-blue-600 font-semibold">Off-peak savings</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-green-600 text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Days</h3>
                <p className="text-gray-600 mb-4">Tuesdays and Wednesdays</p>
                <div className="text-sm text-green-600 font-semibold">Mid-week deals</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-purple-600 text-3xl mb-4">🕒</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Time to Book</h3>
                <p className="text-gray-600 mb-4">6–8 weeks before departure</p>
                <div className="text-sm text-purple-600 font-semibold">Sweet spot timing</div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/best-time-to-book" 
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Read: Best Time to Book Flights →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* City Break Deals Under £100 Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              City Break Deals Under £100
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Perfect for weekend getaways or short solo trips. These popular routes depart from 
              UK airports and cost less than your hotel stay:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                <div className="text-blue-600 text-2xl mb-3">✈️</div>
                <h3 className="font-semibold text-gray-900 mb-2">London ✈ Kraków</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">From £49</p>
                <p className="text-gray-600 text-sm">Perfect weekend break</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                <div className="text-green-600 text-2xl mb-3">✈️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Manchester ✈ Porto</h3>
                <p className="text-2xl font-bold text-green-600 mb-2">From £59</p>
                <p className="text-gray-600 text-sm">Wine country escape</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
                <div className="text-purple-600 text-2xl mb-3">✈️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Bristol ✈ Milan</h3>
                <p className="text-2xl font-bold text-purple-600 mb-2">From £65</p>
                <p className="text-gray-600 text-sm">Fashion capital trip</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
                <div className="text-orange-600 text-2xl mb-3">✈️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Birmingham ✈ Prague</h3>
                <p className="text-2xl font-bold text-orange-600 mb-2">From £72</p>
                <p className="text-gray-600 text-sm">Historic city break</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/city-breaks" 
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
              >
                See City Breaks →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* One-Way Flight Deals Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              One-Way Flight Deals – Just Go
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Sometimes, all you need is a one-way ticket. Whether you're relocating, travelling 
              long-term, or just escaping the rain, we've got it covered.
            </p>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-yellow-600 mr-3">🧳</span>
                One-way options:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-yellow-600 text-2xl mb-3">✈️</div>
                  <h4 className="font-semibold text-gray-900 mb-2">London ✈ Barcelona</h4>
                  <p className="text-2xl font-bold text-yellow-600">From £39</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-yellow-600 text-2xl mb-3">✈️</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Manchester ✈ Berlin</h4>
                  <p className="text-2xl font-bold text-yellow-600">From £44</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-yellow-600 text-2xl mb-3">✈️</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Edinburgh ✈ Copenhagen</h4>
                  <p className="text-2xl font-bold text-yellow-600">From £42</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/one-way-flights" 
                className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors"
              >
                Compare One-Way Fares Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cheap Flights on Top Airlines Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Cheap Flights on Top Airlines
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              We work with all major airlines flying out of the UK to get you the lowest public 
              fares. Here's what's trending:
            </p>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Airline</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Popular Routes</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Avg. Fare</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-orange-600 text-sm font-bold">EJ</span>
                          </div>
                          <span className="font-medium text-gray-900">EasyJet</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">UK ✈ EU cities</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">£29–£89</td>
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
                      <td className="px-6 py-4 text-gray-900">UK ✈ Asia</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">£399–£499</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-blue-600 text-sm font-bold">BA</span>
                          </div>
                          <span className="font-medium text-gray-900">British Airways</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">UK ✈ USA</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">£349–£499</td>
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
                      <td className="px-6 py-4 text-gray-900">UK ✈ Caribbean</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">£449–£599</td>
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
                See All Airline Deals →
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
                  How do I get the cheapest flight from the UK?
                </h3>
                <p className="text-gray-600">
                  Book 6–8 weeks in advance, fly mid-week, and avoid peak holidays. Always 
                  compare airlines and agencies.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Which UK airports are cheapest to fly from?
                </h3>
                <p className="text-gray-600">
                  London (especially Gatwick), Manchester, and Bristol often have the most deals.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Are budget airlines safe to fly with?
                </h3>
                <p className="text-gray-600">
                  Yes. Airlines like EasyJet and Ryanair are fully regulated and offer affordable, 
                  reliable service.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do travel agencies offer better deals than airlines?
                </h3>
                <p className="text-gray-600">
                  Sometimes. That's why we aggregate both — to show you the best offer available, 
                  regardless of source.
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
              Book a Cheap Flight from the UK Today
            </h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Get the lowest airfares on top routes from the UK. Whether you're flying last-minute 
              or months ahead, compare, click, and fly with confidence.
            </p>
            <Link 
              href="/search-flights" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Compare Flights Now →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 