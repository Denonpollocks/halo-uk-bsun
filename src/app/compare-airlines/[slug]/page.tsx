import { airlines } from '@/data/airlines';
import { notFound } from 'next/navigation';
import AirlineCard from '@/components/AirlineCard';
import Link from 'next/link';

export async function generateStaticParams() {
  return airlines.map((airline) => ({ slug: airline.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const airline = airlines.find((a) => a.slug === params.slug);
  if (!airline) return { title: 'Airline Not Found' };

  return {
    title: `${airline.name} Flights – Compare Routes & Fares | Halo Flights`,
    description: `Discover ${airline.name} flights, popular routes, booking tips, and airfare comparisons. Get the best deals from the UK.`,
    keywords: `${airline.name.toLowerCase()} flights, airline ticket offers, cheap air fares, compare airlines, book flights from UK`
  };
}

export default function AirlinePage({ params }: { params: { slug: string } }) {
  const airline = airlines.find((a) => a.slug === params.slug);

  if (!airline) return notFound();

  return (
    <main className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{airline.name} Flights</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Fly smarter with {airline.name}. Compare routes, prices, and booking features directly from the UK's most trusted flight platform.
          </p>
        </header>

        {/* Popular Routes */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Popular Routes with {airline.name}</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border border-gray-200 text-sm bg-white shadow-sm rounded-lg">
              <thead className="bg-gray-100 text-gray-800">
                <tr>
                  <th className="p-4 border">From</th>
                  <th className="p-4 border">To</th>
                  <th className="p-4 border">Fare</th>
                </tr>
              </thead>
              <tbody>
                {airline.routes.map((route, idx) => (
                  <tr key={idx}>
                    <td className="p-4 border">{route.from}</td>
                    <td className="p-4 border">{route.to}</td>
                    <td className="p-4 border">{route.fare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Why Choose {airline.name}?</h2>
          <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2">
            {airline.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </section>

        {/* Booking Tips */}
        <section className="mb-16">
          <article className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Tips for Booking {airline.name} Flights</h2>
            <p className="text-gray-700 mb-4">
              To get the best fares on {airline.name}, book your tickets at least 6–8 weeks in advance. Use mid-week departure dates and avoid peak holiday periods for optimal pricing.
              For long-haul destinations like Asia or North America, flexible dates can save up to 25%.
            </p>
            <p className="text-gray-700 mb-4">
              You can also bundle your flights with hotels using our partner travel travel agency services, giving you the best of both worlds — convenience and savings.
              For travelers who love flexibility, {airline.name} also provides fare classes that allow free changes or cancellations.
            </p>
            <p className="text-gray-700">
              Looking for even better timing?
              <Link href="/best-time-to-book-flights" className="text-indigo-600 font-medium hover:underline ml-1">
                Read our flight timing guide →
              </Link>
            </p>
          </article>
        </section>

        {/* Internal Link Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Explore More Airlines</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {airlines
              .filter((a) => a.slug !== params.slug)
              .map((a) => (
                <AirlineCard key={a.slug} name={a.name} slug={a.slug} logo={a.logo ?? ''} />
              ))}
          </div>
        </section>
        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">FAQs about {airline.name}</h2>
          <dl className="space-y-6 text-gray-700">
            <div>
              <dt className="font-semibold">Is {airline.name} a budget or premium airline?</dt>
              <dd className="ml-4">
                {airline.name} is known for {airline.features[0].toLowerCase()}, offering a mix of economy and premium travel options.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Can I book last-minute flights with {airline.name}?</dt>
              <dd className="ml-4">
                Yes, many of our partners offer last-minute {airline.name} flights. Visit{' '}
                <Link href="/flight-deals/last-minute" className="text-indigo-600 hover:underline">
                  Last-Minute Deals
                </Link>{' '}
                for the latest availability.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Does {airline.name} include baggage in ticket prices?</dt>
              <dd className="ml-4">
                Most routes include carry-on baggage. For checked baggage, review your fare class during booking or compare with other airlines on our{' '}
                <Link href="/compare-airlines" className="text-indigo-600 hover:underline">
                  airline comparison page
                </Link>.
              </dd>
            </div>
          </dl>
        </section>

        {/* CTA Final */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Book Your {airline.name} Flight?</h2>
          <p className="text-gray-700 mb-4">Compare prices, routes, and fare types instantly. Booking smarter starts here.</p>
          <Link
            href="/search-flights"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 font-medium"
          >
            Search {airline.name} Flights
          </Link>
        </section>
      </div>
    </main>
  );
}
