import { Metadata } from 'next';
import { homeData } from '../data/homeData';
import HeroSection from '../components/HeroSection';
import PopularDestinations from '../components/PopularDestinations';
import NewsletterSection from '../components/NewsletterSection';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Halo Flights - Book Cheap Flights & Airline Tickets',
  description: 'Find and book cheap flights, airline tickets, and last-minute flights worldwide. Compare flight deals from leading airlines and travel agents.',
  keywords: 'cheap flights, airline tickets, flight booking, international flights, flight deals, cheap airline tickets, last minute flights, standby flights, black friday flights, flights near me, google flight tickets, travel travel agency, best online travel agency, cheapest days to fly',
};

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection {...homeData.hero} />
      
      {/* Trust Indicators */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#dc0069] rounded-full"></div>
              <span className="text-gray-600 text-sm">500+ Airlines</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#dc0069] rounded-full"></div>
              <span className="text-gray-600 text-sm">1M+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#dc0069] rounded-full"></div>
              <span className="text-gray-600 text-sm">200+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#dc0069] rounded-full"></div>
              <span className="text-gray-600 text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-[#dc0069]">Halo Flights</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our premium flight booking service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#dc0069] to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Best Price Guarantee</h3>
              <p className="text-gray-600 leading-relaxed">
                Find the lowest prices on flights with our best price guarantee policy. We'll match any lower price you find.
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

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#dc0069] to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Customer Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated support team is available round the clock to assist you with any travel needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Flight Deals */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              This Week's <span className="text-[#dc0069]">Featured Deals</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover limited-time flight ticket offers, cheap air fares, and low fare flights from top airlines
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
                <button className="w-full bg-[#dc0069] text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors">
                  View Deals
                </button>
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
                <button className="w-full bg-[#dc0069] text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors">
                  View Deals
                </button>
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
                <button className="w-full bg-[#dc0069] text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors">
                  View Deals
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/flight-deals" 
              className="inline-flex items-center px-8 py-4 bg-[#dc0069] text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors shadow-lg"
            >
              Explore All Flight Deals
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular <span className="text-[#dc0069]">Flight Routes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most searched flight routes from the UK
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { from: "London", to: "Paris", price: "£89", duration: "1h 25m" },
              { from: "Manchester", to: "Amsterdam", price: "£95", duration: "1h 35m" },
              { from: "Edinburgh", to: "Dublin", price: "£79", duration: "1h 20m" },
              { from: "Bristol", to: "Rome", price: "£129", duration: "2h 45m" },
              { from: "London", to: "Madrid", price: "£119", duration: "2h 15m" },
              { from: "Birmingham", to: "Berlin", price: "£109", duration: "2h 05m" },
              { from: "Glasgow", to: "Copenhagen", price: "£139", duration: "2h 30m" },
              { from: "Newcastle", to: "Prague", price: "£99", duration: "2h 20m" }
            ].map((route, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#dc0069] group">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-left">
                    <p className="text-lg font-bold text-gray-900">{route.from}</p>
                    <p className="text-sm text-gray-500">From</p>
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
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                More Than Just <span className="text-[#dc0069]">Flight Booking</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We provide comprehensive travel solutions to make your journey seamless and memorable.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#dc0069] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Last-Minute Deals</h3>
                    <p className="text-gray-600">Find amazing last-minute flight deals and spontaneous getaway options.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#dc0069] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Black Friday Specials</h3>
                    <p className="text-gray-600">Exclusive Black Friday airline deals with savings up to 60% off regular prices.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#dc0069] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Airline Comparison</h3>
                    <p className="text-gray-600">Compare flights from British Airways, EasyJet, Qatar Airways, and more.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#dc0069] to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Best Time to Book</h3>
                  <p className="text-gray-600 text-sm">Learn when to book for maximum savings</p>
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Travel Agencies</h3>
                  <p className="text-gray-600 text-sm">Partner with trusted UK travel agencies</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#dc0069] to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Tips</h3>
                  <p className="text-gray-600 text-sm">Get insider travel booking advice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#dc0069] to-pink-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join millions of travelers who trust Halo Flights for their flight booking needs. 
              Start searching for your perfect flight today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/search" 
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