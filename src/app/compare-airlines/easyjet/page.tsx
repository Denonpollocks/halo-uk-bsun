import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'EasyJet Flights – Compare Routes & Fares | Halo Flights',
  description: 'Discover EasyJet flights, popular European routes, booking tips, and low-cost airfare comparisons. Get the best deals on EasyJet flights from the UK.',
  keywords: 'easyjet flights, low cost flights, budget airline, european flights, cheap flights, easyjet booking'
};

export default function EasyJetPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-orange-600 font-bold text-2xl">eJ</span>
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">EasyJet</h1>
                    <p className="text-orange-200 text-lg">Europe's Leading Low-Cost Airline</p>
                  </div>
                </div>
                <p className="text-xl text-orange-100 leading-relaxed mb-8">
                  Discover Europe with EasyJet's affordable flights and extensive network. From quick city breaks to longer European adventures, EasyJet offers unbeatable value with flexible options and reliable service across 35+ countries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/search?airline=EZY" 
                    className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search EasyJet Flights
                  </Link>
                  <Link 
                    href="#routes" 
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-orange-600 transition-colors"
                  >
                    View Popular Routes
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                  <h3 className="text-2xl font-bold mb-6">Why Choose EasyJet?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Lowest fares in Europe</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>1000+ routes across Europe</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Flexible booking options</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Modern fleet & punctuality</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
                <div className="text-gray-600">Routes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">340+</div>
                <div className="text-gray-600">Aircraft</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">100M+</div>
                <div className="text-gray-600">Annual Passengers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">35+</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section id="routes" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Popular <span className="text-orange-600">EasyJet Routes</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore Europe's most popular destinations with EasyJet's unbeatable low fares and frequent flights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                { from: "London", to: "Barcelona", price: "£29", duration: "2h 15m", type: "City Break", popular: true },
                { from: "Manchester", to: "Amsterdam", price: "£35", duration: "1h 45m", type: "Weekend", popular: false },
                { from: "Bristol", to: "Paris", price: "£39", duration: "1h 25m", type: "City Break", popular: true },
                { from: "Edinburgh", to: "Berlin", price: "£45", duration: "2h 30m", type: "Culture", popular: false },
                { from: "London", to: "Rome", price: "£49", duration: "2h 45m", type: "History", popular: true },
                { from: "Liverpool", to: "Prague", price: "£42", duration: "2h 20m", type: "Weekend", popular: false }
              ].map((route, index) => (
                <div key={index} className={`bg-white border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 ${route.popular ? 'border-orange-500 bg-orange-50' : 'border-gray-200'}`}>
                  {route.popular && (
                    <div className="inline-flex items-center px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full mb-4">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Popular
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-left">
                      <p className="text-lg font-bold text-gray-900">{route.from}</p>
                      <p className="text-sm text-gray-500">{route.type}</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-8 h-px bg-gray-300"></div>
                      <svg className="w-5 h-5 text-orange-600 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      <div className="w-8 h-px bg-gray-300"></div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">{route.to}</p>
                      <p className="text-sm text-gray-500">{route.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">{route.price}</span>
                    <Link 
                      href={`/search?origin=${route.from}&destination=${route.to}&airline=EZY`}
                      className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-semibold"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                href="/search?airline=EZY" 
                className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors shadow-lg"
              >
                View All EasyJet Routes
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fare Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                EasyJet <span className="text-orange-600">Fare Options</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the fare that suits your travel needs, from basic low-cost to flexible premium options
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Standard */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-gray-500 to-gray-600 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Standard</h3>
                  <p className="text-gray-200">Essential travel</p>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-gray-900 mb-4">From £29</div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Small cabin bag included
                    </li>
                    <li className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Allocated seating
                    </li>
                    <li className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      No checked baggage
                    </li>
                    <li className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Change fees apply
                    </li>
                  </ul>
                  <Link 
                    href="/search?airline=EZY&fare=Standard"
                    className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold text-center block"
                  >
                    Search Standard
                  </Link>
                </div>
              </div>

              {/* Standard Plus */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-orange-500">
                <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 text-white relative">
                  <div className="absolute top-2 right-2 bg-yellow-400 text-orange-900 px-2 py-1 rounded-full text-xs font-bold">
                    POPULAR
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Standard Plus</h3>
                  <p className="text-orange-200">More flexibility</p>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-orange-600 mb-4">From £59</div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Large cabin bag + small bag
                    </li>
                    <li className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      23kg checked baggage
                    </li>
                    <li className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Seat selection included
                    </li>
                    <li className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Speedy boarding
                    </li>
                  </ul>
                  <Link 
                    href="/search?airline=EZY&fare=StandardPlus"
                    className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-center block"
                  >
                    Search Standard Plus
                  </Link>
                </div>
              </div>

              {/* Flexi */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Flexi</h3>
                  <p className="text-green-200">Maximum flexibility</p>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-4">From £89</div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      All Standard Plus benefits
                    </li>
                    <li className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Free date changes
                    </li>
                    <li className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Dedicated check-in
                    </li>
                    <li className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Up-front or extra legroom seats
                    </li>
                  </ul>
                  <Link 
                    href="/search?airline=EZY&fare=Flexi"
                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-center block"
                  >
                    Search Flexi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-orange-600">EasyJet</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience Europe's leading low-cost airline with unbeatable value and reliable service
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lowest Fares</h3>
                <p className="text-gray-600 leading-relaxed">
                  Unbeatable low prices across Europe. Find flights from just £29 with transparent pricing and no hidden fees.
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Extensive Network</h3>
                <p className="text-gray-600 leading-relaxed">
                  Over 1000 routes connecting 35+ countries. Discover Europe with convenient connections and multiple daily flights.
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Punctuality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Industry-leading on-time performance. EasyJet consistently ranks among Europe's most punctual airlines.
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Modern Fleet</h3>
                <p className="text-gray-600 leading-relaxed">
                  Young, fuel-efficient Airbus fleet with comfortable seating and the latest safety technology.
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile App</h3>
                <p className="text-gray-600 leading-relaxed">
                  Award-winning mobile app for easy booking, check-in, and real-time flight updates. Everything at your fingertips.
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Options</h3>
                <p className="text-gray-600 leading-relaxed">
                  Choose from Standard, Standard Plus, or Flexi fares to match your travel needs and budget perfectly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Tips */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Tips for Booking <span className="text-orange-600">EasyJet Flights</span>
              </h2>
              <p className="text-xl text-gray-600">
                Maximize your savings and travel experience with these expert EasyJet booking tips
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Book Early for Best Prices</h3>
                    <p className="text-gray-600 leading-relaxed">
                      EasyJet releases seats up to 11 months in advance. Book 2-3 months ahead for the lowest fares, 
                      especially for popular summer destinations and school holidays.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Choose the Right Fare Type</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Standard is perfect for light packers, Standard Plus includes checked baggage and seat selection, 
                      while Flexi offers maximum flexibility with free changes and premium seats.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Use the Mobile App</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Download the EasyJet app for exclusive mobile-only deals, faster check-in, and real-time 
                      notifications about your flight status and gate changes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Fly Off-Peak</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Tuesday and Wednesday flights are typically cheapest. Avoid Friday and Sunday departures. 
                      Early morning and late evening flights often have lower fares than midday options.
                    </p>
                  </div>
                </div>
              </div>
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
                Common questions about EasyJet flights and bookings
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What's included in EasyJet Standard fare?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Standard fare includes a small cabin bag (45x36x20cm), allocated seating, and online check-in. 
                  Checked baggage, large cabin bags, and seat selection cost extra.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Can I change my EasyJet booking?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, but change fees apply for Standard and Standard Plus fares. Flexi fares include free date 
                  changes. You can change flights online, via the app, or by calling customer service.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What are EasyJet's baggage allowances?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Small cabin bag (45x36x20cm) is included in all fares. Large cabin bag (56x45x25cm) and 23kg 
                  checked baggage are included in Standard Plus and Flexi, or can be added to Standard fares.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  How early should I arrive at the airport?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Arrive 2 hours before departure for international flights and 1 hour for domestic flights. 
                  If you have Speedy Boarding (included in Standard Plus and Flexi), you can use priority lanes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Explore Europe with <span className="text-yellow-300">EasyJet</span>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Discover Europe's best destinations with unbeatable low fares, flexible options, and reliable service. 
              Book your EasyJet flight today and start your European adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/search?airline=EZY" 
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search EasyJet Flights
              </Link>
              <Link 
                href="/compare-airlines" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-orange-600 transition-colors"
              >
                Compare All Airlines
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}