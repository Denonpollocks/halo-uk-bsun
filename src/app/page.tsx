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
    <main>
      <HeroSection {...homeData.hero} />
      <PopularDestinations destinations={homeData.popularDestinations} />

      {/* Featured Flight Deals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">This Week's Featured Flight Deals</h2>
          <p className="text-gray-600 mb-8">Discover limited-time flight ticket offers, cheap air fares, and low fare flights from top airlines.</p>
          <Link href="/flight-deals" className="text-indigo-600 font-medium hover:underline">
            Explore All Flight Deals →
          </Link>
        </div>
      </section>

      {/* Cheap Flights from UK */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Cheap Flights from the UK</h2>
          <p className="text-gray-600 mb-8">Compare cheap flight fares and book flights near you from airports like London, Manchester, and Birmingham.</p>
          <Link href="/flight-deals/cheap-flights-from-uk" className="text-indigo-600 font-medium hover:underline">
            Find Cheap Flights Near You →
          </Link>
        </div>
      </section>

      {/* Last Minute Flights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Last-Minute & Standby Flights</h2>
          <p className="text-gray-600 mb-8">Browse standby flights and last-minute deals including British Airways last minute breaks and flexible getaway options.</p>
          <Link href="/flight-deals/last-minute" className="text-indigo-600 font-medium hover:underline">
            View Last-Minute Deals →
          </Link>
        </div>
      </section>

      {/* Black Friday Specials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Black Friday Airline Deals</h2>
          <p className="text-gray-600 mb-8">Unlock exclusive discounts on black friday flights and airline ticket prices for your favourite routes.</p>
          <Link href="/flight-deals/black-friday" className="text-indigo-600 font-medium hover:underline">
            See Black Friday Flight Deals →
          </Link>
        </div>
      </section>

      {/* Best Time to Book */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">When is the Best Time to Book Flights?</h2>
          <p className="text-gray-600 mb-8">Learn when to book flights to get the best prices. Discover the cheapest days to fly and the cheapest month to book flights from the UK.</p>
          <Link href="/best-time-to-book-flights" className="text-indigo-600 font-medium hover:underline">
            Read the Full Booking Guide →
          </Link>
        </div>
      </section>

      {/* Airline Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Compare Airlines and Save</h2>
          <p className="text-gray-600 mb-8">Compare Google flight tickets and fares from British Airways, EasyJet, Virgin Atlantic, and Qatar Airways all in one place.</p>
          <Link href="/compare-airlines" className="text-indigo-600 font-medium hover:underline">
            Start Comparing Airlines →
          </Link>
        </div>
      </section>

      {/* Travel Tips and Insights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Expert Travel Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeData.expertTips.tips.map((tip, index) => (
              <article key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{tip.title}</h3>
                <p className="text-gray-600 mb-4">{tip.content}</p>
                <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Read More →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter & Trust Section */}
      <NewsletterSection {...homeData.newsletter} />
    </main>
  );
} 
