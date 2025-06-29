// components/AirlineCard.tsx
import Link from 'next/link';
import Image from 'next/image';

type AirlineCardProps = {
  name: string;
  slug: string;
  logo: string;// relative path from /public or absolute URL
};

export default function AirlineCard({ name, slug, logo }: AirlineCardProps) {
  return (
    <Link
      href={`/compare-airlines/${slug}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 text-center border border-gray-200"
    >
      <div className="flex justify-center mb-3">
        <Image src={logo} alt={`${name} Logo`} width={80} height={40} className="object-contain" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <span className="text-indigo-600 text-sm font-medium hover:underline">Read more →</span>
    </Link>
  );
}
