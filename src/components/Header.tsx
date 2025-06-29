"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-black">Halo Flights</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm ${isActive('/') ? 'text-black font-semibold' : 'text-black hover:text-black'}`}
            >
              Search Flights
            </Link>
            <Link 
              href="/flight-deals" 
              className={`text-sm ${isActive('/flight-deals') ? 'text-black font-semibold' : 'text-black hover:text-black'}`}
            >
              Flight Deals
            </Link>
            <Link 
              href="/compare-airlines" 
              className={`text-sm ${isActive('/compare-airlines') ? 'text-black font-semibold' : 'text-black hover:text-black'}`}
            >
              Compare Airlines
            </Link>
            <Link 
              href="/" 
              className={`text-sm ${isActive('/') ? 'text-black font-semibold' : 'text-black hover:text-black'}`}
            >
              Best Time to Book
            </Link>
            <Link 
              href="/" 
              className={`text-sm ${isActive('/') ? 'text-black font-semibold' : 'text-black hover:text-black'}`}
            >
              Travel Agencies
            </Link>
            <Link 
              href="/" 
              className={`text-sm ${isActive('/') ? 'text-black font-semibold' : 'text-black hover:text-black'}`}
            >
              Blog
            </Link>
            
            <Link 
              href="/about" 
              className={`text-sm ${isActive('/about') ? 'text-black font-semibold' : 'text-black hover:text-black'}`}
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm ${isActive('/contact') ? 'text-black font-semibold' : 'text-black hover:text-black'}`}
            >
              Contact
            </Link>
            <button
              className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50"
            >
              My Bookings
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-black focus:outline-none"
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
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`text-sm ${isActive('/') ? 'text-black font-semibold' : 'text-blue-100 hover:text-black'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Search Flights
              </Link>
              <Link 
                href="/about" 
                className={`text-sm ${isActive('/about') ? 'text-black font-semibold' : 'text-blue-100 hover:text-black'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className={`text-sm ${isActive('/contact') ? 'text-black font-semibold' : 'text-blue-100 hover:text-black'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button
                  className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 w-full text-left"
              >
                My Bookings
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 