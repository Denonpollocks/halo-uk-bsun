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
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Let's{' '}
                <span className="inline-flex items-center">
                  ✈️
                </span>{' '}
                Travel{' '}
                <span className="text-[#dc0069]">The World</span>{' '}
                Today!
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Discover a world of possibilities with our premier travel agency. 
                Whether you crave relaxation on sun-kissed beaches or crave 
                adventure in remote corners of the globe.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="bg-[#dc0069] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-600 transition-colors shadow-lg">
                Get Started
              </button>
              <button className="border-2 border-[#dc0069] text-[#dc0069] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#dc0069] hover:text-white transition-colors">
                Explore
              </button>
            </div>

            {/* Compact Flight Search */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <FlightSearch onSearch={handleSearchResults} compact={true} />
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="relative">
            {/* Watch Now Badge */}
            <div className="absolute -top-4 -right-4 z-10">
              <div className="bg-white rounded-full p-4 shadow-lg border-4 border-[#dc0069]">
                <div className="text-center">
                  <div className="text-[#dc0069] font-bold text-sm">Watch Now</div>
                  <div className="w-8 h-8 bg-[#dc0069] rounded-full flex items-center justify-center mt-2 mx-auto">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              {/* Large Image - Buddha Statue */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg"
                  alt="Buddha statue in mountains"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Column - Two Images */}
              <div className="space-y-4">
                {/* Ocean/Boat Image */}
                <div className="relative h-[290px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg"
                    alt="Boat in crystal clear water"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Hiking/Adventure Image */}
                <div className="relative h-[290px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg"
                    alt="Person hiking by the ocean"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Best Packages Link */}
            <div className="absolute -bottom-4 -right-4">
              <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
                <div className="flex items-center gap-2 text-[#dc0069] font-semibold">
                  <span>Best Packages</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}