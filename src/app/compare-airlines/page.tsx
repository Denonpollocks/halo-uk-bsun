import { Metadata } from 'next';
import Link from 'next/link';
import { airlines } from '@/data/airlines';

export const metadata: Metadata = {
  title: 'Compare Airlines – British Airways, EasyJet, Qatar & More | Halo Flights',
  description: 'Compare flights from top airlines like British Airways, EasyJet, Qatar Airways, Virgin Atlantic and more. Find the best fares, services, and routes from the UK.',
  keywords: 'compare airlines, british airways flights, easyjet flights, qatar airways flights, virgin atlantic, cheap air fares, airline ticket offers, best airlines to fly, travel travel agency, best online travel agency',
};

export default function CompareAirlinesPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Compare Airlines – Fares, Features & Routes from the UK
        </h1>

        {/* Introduction */}
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-gray-700">
            Compare airline ticket prices, cabin features, luggage policies, and last-minute offers from top airlines flying from the UK. Whether you're looking for cheap air fares, premium comfort, or flexible booking, we've got you covered.
          </p>
        </section>

        {/* Airline Comparison Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Airline Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 border">Airline</th>
                  <th className="p-4 border">Popular Route</th>
                  <th className="p-4 border">Economy Fare From</th>
                  <th className="p-4 border">Baggage Included</th>
                  <th className="p-4 border">Flexibility</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border font-medium">British Airways</td>
                  <td className="p-4 border">London ✈ NYC</td>
                  <td className="p-4 border">£399</td>
                  <td className="p-4 border">Yes</td>
                  <td className="p-4 border">Moderate</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">EasyJet</td>
                  <td className="p-4 border">UK ✈ EU Cities</td>
                  <td className="p-4 border">£29</td>
                  <td className="p-4 border">Carry-on only</td>
                  <td className="p-4 border">Low</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Qatar Airways</td>
                  <td className="p-4 border">London ✈ Bangkok</td>
                  <td className="p-4 border">£499</td>
                  <td className="p-4 border">Yes</td>
                  <td className="p-4 border">High</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Virgin Atlantic</td>
                  <td className="p-4 border">London ✈ Dubai</td>
                  <td className="p-4 border">£449</td>
                  <td className="p-4 border">Yes</td>
                  <td className="p-4 border">Moderate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Airline Overview Sections */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Airline Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {airlines.map((airline, index) => (
              <div key={index} className="p-6 bg-white shadow rounded">
                <h3 className="text-xl font-semibold mb-2">{airline.name}</h3>
                <p className="text-gray-700 mb-4">{airline.description}</p>
                <Link href={`/compare-airlines/${airline.slug}`} className="text-indigo-600 font-medium hover:underline">
                  Learn more about {airline.name} →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Tips */}
        <section className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Tips for Booking with Top Airlines</h2>
          <p className="text-gray-700 mb-6">
            Always compare airline ticket offers, look out for low fare flights during seasonal sales, and use tools like Skyscanner multi-city search. Bundle with a trusted travel travel agency for best value.
          </p>
          <Link href="/best-time-to-book-flights" className="text-indigo-600 font-medium hover:underline">
            When to Book for the Best Price →
          </Link>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Compare and Book?</h2>
          <p className="text-gray-700 mb-4">Use our search tool to compare real-time prices from all top UK airlines.</p>
          <Link href="/search-flights" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 font-medium">
            Search Flights Now
          </Link>
        </section>
      </div>
    </main>
  );
}
