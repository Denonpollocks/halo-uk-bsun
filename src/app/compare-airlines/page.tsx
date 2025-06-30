import { Metadata } from 'next';
import Link from 'next/link';
import { airlines } from '@/data/airlines';

export const metadata: Metadata = {
  title: 'Compare Airlines – British Airways, EasyJet, Qatar & More | Halo Flights',
  description: 'Compare flights from top airlines like British Airways, EasyJet, Qatar Airways, Virgin Atlantic and more. Find the best fares, services, and routes from the UK.',
  keywords: 'compare airlines, british airways flights, easyjet flights, qatar airways flights, virgin atlantic, cheap air fares, airline ticket offers, best airlines to fly, travel agency, best online travel agency',
};

export default function CompareAirlinesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#dc0069] via-pink-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-300">Compare Airlines</span> – Find Your Perfect Flight
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 leading-relaxed">
              Compare <span className="text-yellow-300 font-semibold">airline ticket prices</span>, cabin features, luggage policies, and last-minute offers from top airlines flying from the UK. Whether you're looking for <span className="text-yellow-300 font-semibold">cheap air fares</span>, premium comfort, or flexible booking, we've got you covered with the <span className="text-yellow-300 font-semibold">best online travel agency</span> experience.
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
              <span className="text-gray-600 text-sm font-medium">50+ Airlines</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#dc0069] rounded-full"></div>
              <span className="text-gray-600 text-sm font-medium">Real-Time Comparison</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#dc0069] rounded-full"></div>
              <span className="text-gray-600 text-sm font-medium">Best Price Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#dc0069] rounded-full"></div>
              <span className="text-gray-600 text-sm font-medium">Expert Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why <span className="text-[#dc0069]">Compare Airlines</span> Before You Book?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Not all airlines are created equal. From <strong>British Airways flights</strong> with premium service to <strong>EasyJet flights</strong> with budget-friendly fares, each carrier offers unique benefits. Our comprehensive comparison helps you find the <strong>best airlines to fly</strong> based on your priorities – whether that's price, comfort, or convenience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="text-blue-600 text-4xl mb-6">💰</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Price Comparison</h3>
                <p className="text-gray-600 leading-relaxed">
                  Compare <strong>airline ticket offers</strong> and find the lowest <strong>cheap air fares</strong> across all major carriers
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="text-green-600 text-4xl mb-6">✈️</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Service Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Detailed reviews of cabin comfort, meal service, and overall passenger experience
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300">
                <div className="text-purple-600 text-4xl mb-6">🎯</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Route Networks</h3>
                <p className="text-gray-600 leading-relaxed">
                  Explore destination coverage and connection options from UK airports
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Airline Comparison Table */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Top <span className="text-[#dc0069]">Airline Comparison</span> – UK Routes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Side-by-side comparison of popular airlines serving UK airports with pricing, baggage, and flexibility
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-[#dc0069] to-pink-500 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Airline</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Popular Route</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Economy Fare From</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Baggage Included</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Flexibility</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Rating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-blue-600 text-sm font-bold">BA</span>
                          </div>
                          <span className="font-medium text-gray-900">British Airways</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">London ✈ NYC</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">£399</td>
                      <td className="px-6 py-4 text-gray-600">23kg + Cabin</td>
                      <td className="px-6 py-4">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">Moderate</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="text-yellow-400">★★★★☆</span>
                          <span className="ml-2 text-sm text-gray-600">4.2</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-orange-600 text-sm font-bold">EJ</span>
                          </div>
                          <span className="font-medium text-gray-900">EasyJet</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">UK ✈ EU Cities</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">£29</td>
                      <td className="px-6 py-4 text-gray-600">Cabin only</td>
                      <td className="px-6 py-4">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">Low</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="text-yellow-400">★★★☆☆</span>
                          <span className="ml-2 text-sm text-gray-600">3.8</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-purple-600 text-sm font-bold">QR</span>
                          </div>
                          <span className="font-medium text-gray-900">Qatar Airways</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">London ✈ Bangkok</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">£499</td>
                      <td className="px-6 py-4 text-gray-600">30kg + Cabin</td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">High</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="text-yellow-400">★★★★★</span>
                          <span className="ml-2 text-sm text-gray-600">4.7</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-red-600 text-sm font-bold">VA</span>
                          </div>
                          <span className="font-medium text-gray-900">Virgin Atlantic</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">London ✈ Dubai</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">£449</td>
                      <td className="px-6 py-4 text-gray-600">23kg + Cabin</td>
                      <td className="px-6 py-4">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">Moderate</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="text-yellow-400">★★★★☆</span>
                          <span className="ml-2 text-sm text-gray-600">4.1</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Airlines Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Featured <span className="text-[#dc0069]">Airlines</span> & Their Specialties
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what makes each airline unique and find the perfect match for your travel style
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {airlines.slice(0, 6).map((airline, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-[#dc0069] group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#dc0069] transition-colors">{airline.name}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{airline.description}</p>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#dc0069] to-pink-500 rounded-full flex items-center justify-center ml-4">
                      <span className="text-white font-bold text-lg">
                        {airline.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {airline.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-[#dc0069] rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Popular Routes:</h4>
                    <div className="space-y-2">
                      {airline.routes.map((route, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">{route.from} → {route.to}</span>
                          <span className="font-semibold text-[#dc0069]">{route.fare}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href={`/compare-airlines/${airline.slug}`} 
                    className="inline-flex items-center text-[#dc0069] hover:text-pink-600 font-semibold transition-colors group-hover:underline"
                  >
                    Learn more about {airline.name} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Airline Categories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Choose by <span className="text-[#dc0069]">Travel Style</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Different airlines excel in different areas. Find the perfect match for your travel priorities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-green-600 text-4xl mb-6">💰</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Budget Airlines</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Perfect for <strong>cheap air fares</strong> and short European trips. Great for travelers who prioritize price over frills.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">EasyJet</span>
                    <span className="text-green-600 font-semibold">From £29</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Ryanair</span>
                    <span className="text-green-600 font-semibold">From £19</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Wizz Air</span>
                    <span className="text-green-600 font-semibold">From £35</span>
                  </div>
                </div>
                <Link href="/compare-airlines/easyjet" className="text-[#dc0069] hover:text-pink-600 font-semibold">
                  Compare Budget Airlines →
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-blue-600 text-4xl mb-6">✈️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Full-Service Airlines</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Balanced service and pricing with included meals, baggage, and entertainment. The <strong>best airlines to fly</strong> for most travelers.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">British Airways</span>
                    <span className="text-blue-600 font-semibold">From £399</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Virgin Atlantic</span>
                    <span className="text-blue-600 font-semibold">From £449</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">KLM</span>
                    <span className="text-blue-600 font-semibold">From £299</span>
                  </div>
                </div>
                <Link href="/compare-airlines/british-airways" className="text-[#dc0069] hover:text-pink-600 font-semibold">
                  Compare Full-Service Airlines →
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-purple-600 text-4xl mb-6">👑</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Airlines</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Luxury service, premium lounges, and award-winning hospitality. Worth the extra cost for special occasions.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Qatar Airways</span>
                    <span className="text-purple-600 font-semibold">From £499</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Emirates</span>
                    <span className="text-purple-600 font-semibold">From £599</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Singapore Airlines</span>
                    <span className="text-purple-600 font-semibold">From £699</span>
                  </div>
                </div>
                <Link href="/compare-airlines/qatar-airways" className="text-[#dc0069] hover:text-pink-600 font-semibold">
                  Compare Premium Airlines →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Tips Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Expert Tips for <span className="text-[#dc0069]">Airline Booking</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get the most value from your airline choice with insider knowledge from our <strong>travel agency</strong> experts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                <div className="text-green-600 text-3xl mb-4">✅</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Use Trusted Comparison Sites</h3>
                <p className="text-gray-600 leading-relaxed">
                  Use a trusted comparison site (like ours) that includes Google Flights, 
                  Skyscanner multi city, and direct airline integrations for the best <strong>airline ticket offers</strong>
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
                <div className="text-blue-600 text-3xl mb-4">🔔</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Set Price Alerts</h3>
                <p className="text-gray-600 leading-relaxed">
                  Set price alerts for your preferred routes to catch drops automatically and secure <strong>cheap air fares</strong>
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-200">
                <div className="text-purple-600 text-3xl mb-4">⚖️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Compare Direct vs Agency</h3>
                <p className="text-gray-600 leading-relaxed">
                  Always compare direct airline fares vs <strong>travel agency</strong> bundles to ensure you're getting the best deal
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200">
                <div className="text-orange-600 text-3xl mb-4">📅</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Use Flexible Dates</h3>
                <p className="text-gray-600 leading-relaxed">
                  Consider flexible date filters for up to 30% extra savings when comparing airlines
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about comparing airlines and booking flights
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Which airlines offer the best value for money?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  It depends on your route and priorities. <strong>EasyJet flights</strong> offer great value for European routes, while <strong>British Airways flights</strong> provide better service for long-haul. <strong>Qatar Airways flights</strong> excel in premium service at competitive prices.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  How do I find the cheapest airline tickets?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Compare prices across multiple airlines, book 6-8 weeks in advance, and be flexible with dates. Our platform shows real-time <strong>airline ticket offers</strong> from all major carriers to help you find the lowest <strong>cheap air fares</strong>.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Should I book directly with airlines or through a travel agency?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Both have advantages. Direct booking often provides better customer service, while a <strong>travel agency</strong> can offer package deals and 24/7 support. As the <strong>best online travel agency</strong>, we provide both options with price comparison.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What's the difference between budget and full-service airlines?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Budget airlines offer lower base fares but charge extra for services like baggage, meals, and seat selection. Full-service airlines include these in the ticket price. Choose based on your needs and total cost after add-ons.
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
              Ready to <span className="text-yellow-300">Compare & Book</span>?
            </h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed">
              Use our search tool to compare real-time prices from all top UK airlines. Whether you're looking for <strong>British Airways flights</strong>, <strong>EasyJet flights</strong>, or <strong>Qatar Airways flights</strong> – find the perfect match for your travel needs with our <strong>best online travel agency</strong> platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/search" 
                className="inline-flex items-center px-8 py-4 bg-white text-[#dc0069] font-bold text-lg rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search Flights Now
              </Link>
              <Link 
                href="/flight-deals" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-[#dc0069] transition-colors"
              >
                View All Deals
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}