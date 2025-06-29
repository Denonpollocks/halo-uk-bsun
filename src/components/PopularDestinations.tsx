import Image from 'next/image';

interface Destination {
  title: string;
  description: string;
  image: string;
  price: string;
}

interface PopularDestinationsProps {
  destinations: Destination[];
}

export default function PopularDestinations({ destinations }: PopularDestinationsProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Popular Flight Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
                <p className="text-gray-600 mb-4">
                  {destination.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-600 font-semibold">From {destination.price}</span>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                    View Flights →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 