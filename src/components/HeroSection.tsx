"use client";

import Image from 'next/image';
import FlightSearch from '../components/FlightSearch';
import { useRouter } from 'next/navigation';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function HeroSection({ title, subtitle, backgroundImage }: HeroSectionProps) {
  const router = useRouter();

  const handleSearchResults = (results: any, searchData?: any) => {
    localStorage.setItem('flightSearchResults', JSON.stringify(results));
    
    // Store search data for pricing API
    if (searchData) {
      localStorage.setItem('flightSearchData', JSON.stringify(searchData));
    }
    
    router.push('/results');
  };

  return (
    <section className="relative bg-indigo-900 py-20">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Airplane wing in clouds"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <FlightSearch onSearch={handleSearchResults} />
      </div>
    </section>
  );
} 