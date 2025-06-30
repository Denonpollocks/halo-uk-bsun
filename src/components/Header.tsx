"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFlightDealsOpen, setIsFlightDealsOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const isActiveSection = (paths: string[]) => paths.some(path => pathname.startsWith(path));

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 text-[#dc0069]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 11.37a11.045 11.045 0 005.516 5.516l1.983-4.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Customer Care: </span>
                <Link href="tel:02072905570" className="text-[#dc0069] hover:text-pink-600 font-medium ml-1">
                  020 7290 5570
                </Link>
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 text-[#dc0069]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <Link href="mailto:contact@haloflights.co.uk" className="text-[#dc0069] hover:text-pink-600 font-medium">
                  contact@haloflights.co.uk
                </Link>
              </div>
            </div>

            {/* Social Media & Support */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <Link href="https://wa.me/442072905570" className="text-gray-400 hover:text-green-500 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
                  </svg>
                </Link>
                <Link href="https://facebook.com/haloflights" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link href="https://instagram.com/haloflights" className="text-gray-400 hover:text-pink-500 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
              </div>
              
              <div className="flex items-center space-x-2 text-xs text-gray-600">
                <div className="w-5 h-3 bg-blue-600 relative overflow-hidden rounded-sm">
                  <div className="absolute inset-0 bg-blue-600"></div>
                  <div className="absolute top-0 left-0 w-full h-1/3 bg-white"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-red-500"></div>
                  <div className="absolute top-1/3 left-0 w-full h-1/3 bg-white"></div>
                  <div className="absolute top-1/3 left-0 w-full h-1/3 bg-red-500"></div>
                  <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-600"></div>
                  <div className="absolute top-0 left-0 w-1/3 h-full">
                    <div className="w-full h-1/2 bg-blue-600"></div>
                    <div className="w-full h-1/2 bg-white"></div>
                  </div>
                </div>
                <span className="font-medium">UK</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#dc0069] to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">Halo Flights</span>
              <div className="text-xs text-gray-500 -mt-1">Your Trusted Travel Partner</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors relative group ${
                isActive('/') 
                  ? 'text-[#dc0069]' 
                  : 'text-gray-700 hover:text-[#dc0069]'
              }`}
            >
              Search Flights
              {isActive('/') && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#dc0069]"></div>}
            </Link>

            {/* Flight Deals Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsFlightDealsOpen(true)}
              onMouseLeave={() => setIsFlightDealsOpen(false)}
            >
              <button 
                className={`text-sm font-medium transition-colors flex items-center relative group ${
                  isActiveSection(['/flight-deals']) 
                    ? 'text-[#dc0069]' 
                    : 'text-gray-700 hover:text-[#dc0069]'
                }`}
              >
                Flight Deals
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
                {isActiveSection(['/flight-deals']) && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#dc0069]"></div>}
              </button>
              
              {isFlightDealsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <Link href="/flight-deals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#dc0069]">
                    All Flight Deals
                  </Link>
                  <Link href="/flight-deals/cheap-flights-from-uk" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#dc0069]">
                    Cheap Flights from UK
                  </Link>
                  <Link href="/flight-deals/last-minute-deals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#dc0069]">
                    Last-Minute Deals
                  </Link>
                  <Link href="/flight-deals/black-friday-flight-deals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#dc0069]">
                    Black Friday Deals
                  </Link>
                  <div className="border-t border-gray-200 my-2"></div>
                  <Link href="/standby-flights" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#dc0069]">
                    Standby Flights
                  </Link>
                </div>
              )}
            </div>

            {/* Compare Airlines Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsCompareOpen(true)}
              onMouseLeave={() => setIsCompareOpen(false)}
            >
              <button 
                className={`text-sm font-medium transition-colors flex items-center relative group ${
                  isActiveSection(['/compare-airlines']) 
                    ? 'text-[#dc0069]' 
                    : 'text-gray-700 hover:text-[#dc0069]'
                }`}
              >
                Compare Airlines
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
                {isActiveSection(['/compare-airlines']) && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#dc0069]"></div>}
              </button>
              
              {isCompareOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <Link href="/compare-airlines" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#dc0069]">
                    All Airlines
                  </Link>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">Popular Airlines</div>
                  <Link href="/compare-airlines/british-airways" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#dc0069]">
                    British Airways
                  </Link>
                  <Link href="/compare-airlines/easyjet" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#dc0069]">
                    EasyJet
                  </Link>
                  <Link href="/compare-airlines/qatar-airways" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#dc0069]">
                    Qatar Airways
                  </Link>
                  <Link href="/compare-airlines/virgin-atlantic" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#dc0069]">
                    Virgin Atlantic
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/best-time-to-book" 
              className={`text-sm font-medium transition-colors relative group ${
                isActive('/best-time-to-book') 
                  ? 'text-[#dc0069]' 
                  : 'text-gray-700 hover:text-[#dc0069]'
              }`}
            >
              Best Time to Book
              {isActive('/best-time-to-book') && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#dc0069]"></div>}
            </Link>

            <Link 
              href="/travel-agencies" 
              className={`text-sm font-medium transition-colors relative group ${
                isActive('/travel-agencies') 
                  ? 'text-[#dc0069]' 
                  : 'text-gray-700 hover:text-[#dc0069]'
              }`}
            >
              Travel Agencies
              {isActive('/travel-agencies') && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#dc0069]"></div>}
            </Link>

            <Link 
              href="/blog" 
              className={`text-sm font-medium transition-colors relative group ${
                isActive('/blog') 
                  ? 'text-[#dc0069]' 
                  : 'text-gray-700 hover:text-[#dc0069]'
              }`}
            >
              Blog
              {isActive('/blog') && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#dc0069]"></div>}
            </Link>

            <Link 
              href="/about" 
              className={`text-sm font-medium transition-colors relative group ${
                isActive('/about') 
                  ? 'text-[#dc0069]' 
                  : 'text-gray-700 hover:text-[#dc0069]'
              }`}
            >
              About Us
              {isActive('/about') && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#dc0069]"></div>}
            </Link>

            <Link 
              href="/contact" 
              className={`text-sm font-medium transition-colors relative group ${
                isActive('/contact') 
                  ? 'text-[#dc0069]' 
                  : 'text-gray-700 hover:text-[#dc0069]'
              }`}
            >
              Contact
              {isActive('/contact') && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#dc0069]"></div>}
            </Link>

            <button className="bg-gradient-to-r from-[#dc0069] to-pink-500 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:from-pink-600 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg">
              My Bookings
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 focus:outline-none focus:text-[#dc0069] transition-colors"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-[#dc0069]' 
                    : 'text-gray-700 hover:text-[#dc0069]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Search Flights
              </Link>

              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-900">Flight Deals</div>
                <div className="pl-4 space-y-2">
                  <Link href="/flight-deals" className="block text-sm text-gray-600 hover:text-[#dc0069]" onClick={() => setIsMenuOpen(false)}>
                    All Flight Deals
                  </Link>
                  <Link href="/flight-deals/cheap-flights-from-uk" className="block text-sm text-gray-600 hover:text-[#dc0069]" onClick={() => setIsMenuOpen(false)}>
                    Cheap Flights from UK
                  </Link>
                  <Link href="/flight-deals/last-minute-deals" className="block text-sm text-gray-600 hover:text-[#dc0069]" onClick={() => setIsMenuOpen(false)}>
                    Last-Minute Deals
                  </Link>
                  <Link href="/flight-deals/black-friday-flight-deals" className="block text-sm text-gray-600 hover:text-[#dc0069]" onClick={() => setIsMenuOpen(false)}>
                    Black Friday Deals
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-900">Compare Airlines</div>
                <div className="pl-4 space-y-2">
                  <Link href="/compare-airlines" className="block text-sm text-gray-600 hover:text-[#dc0069]" onClick={() => setIsMenuOpen(false)}>
                    All Airlines
                  </Link>
                  <Link href="/compare-airlines/british-airways" className="block text-sm text-gray-600 hover:text-[#dc0069]" onClick={() => setIsMenuOpen(false)}>
                    British Airways
                  </Link>
                  <Link href="/compare-airlines/easyjet" className="block text-sm text-gray-600 hover:text-[#dc0069]" onClick={() => setIsMenuOpen(false)}>
                    EasyJet
                  </Link>
                  <Link href="/compare-airlines/qatar-airways" className="block text-sm text-gray-600 hover:text-[#dc0069]" onClick={() => setIsMenuOpen(false)}>
                    Qatar Airways
                  </Link>
                </div>
              </div>

              <Link 
                href="/best-time-to-book" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/best-time-to-book') 
                    ? 'text-[#dc0069]' 
                    : 'text-gray-700 hover:text-[#dc0069]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Best Time to Book
              </Link>

              <Link 
                href="/travel-agencies" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/travel-agencies') 
                    ? 'text-[#dc0069]' 
                    : 'text-gray-700 hover:text-[#dc0069]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Travel Agencies
              </Link>

              <Link 
                href="/blog" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/blog') 
                    ? 'text-[#dc0069]' 
                    : 'text-gray-700 hover:text-[#dc0069]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>

              <Link 
                href="/about" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-[#dc0069]' 
                    : 'text-gray-700 hover:text-[#dc0069]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              <Link 
                href="/contact" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-[#dc0069]' 
                    : 'text-gray-700 hover:text-[#dc0069]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <button
                className="bg-gradient-to-r from-[#dc0069] to-pink-500 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:from-pink-600 hover:to-pink-600 transition-all duration-200 shadow-md w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                My Bookings
              </button>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-[#dc0069]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 11.37a11.045 11.045 0 005.516 5.516l1.983-4.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <Link href="tel:02072905570" className="text-[#dc0069] hover:text-pink-600 font-medium">
                    020 7290 5570
                  </Link>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-[#dc0069]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <Link href="mailto:contact@haloflights.co.uk" className="text-[#dc0069] hover:text-pink-600 font-medium">
                    contact@haloflights.co.uk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}