"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Contact Us Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Customer Care</p>
                <Link href="tel:02072905570" className="text-[#dc0069] hover:text-pink-600 font-medium">
                  020 7290 5570
                </Link>
              </div>
              <div>
                <Link href="tel:02072905578" className="text-[#dc0069] hover:text-pink-600 font-medium">
                  020 7290 5578
                </Link>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Complaints</p>
                <Link href="tel:02072905572" className="text-[#dc0069] hover:text-pink-600 font-medium">
                  020 7290 5572
                </Link>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Need live support?</p>
                <Link href="mailto:contact@haloflights.co.uk" className="text-[#dc0069] hover:text-pink-600 font-medium break-all">
                  contact@haloflights.co.uk
                </Link>
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#dc0069] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-[#dc0069] transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-600 hover:text-[#dc0069] transition-colors">
                  Destinations
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#dc0069] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-[#dc0069] transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-600 hover:text-[#dc0069] transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className="text-gray-600 hover:text-[#dc0069] transition-colors">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-600 hover:text-[#dc0069] transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Flight Deals Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Flight Deals</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/flight-deals" className="text-gray-600 hover:text-[#dc0069] transition-colors">
                  All Flight Deals
                </Link>
              </li>
              <li>
                <Link href="/flight-deals/cheap-flights-from-uk" className="text-gray-600 hover:text-[#dc0069] transition-colors">
                  Cheap Flights from UK
                </Link>
              </li>
              <li>
                <Link href="/compare-airlines" className="text-gray-600 hover:text-[#dc0069] transition-colors">
                  Compare Airlines
                </Link>
              </li>
              <li>
                <Link href="/best-time-to-book" className="text-gray-600 hover:text-[#dc0069] transition-colors">
                  Best Time to Book
                </Link>
              </li>
              <li>
                <Link href="/flight-deals/last-minute-deals" className="text-gray-600 hover:text-[#dc0069] transition-colors">
                  Last Minute Deals
                </Link>
              </li>
              <li>
                <Link href="/flight-deals/black-friday-flight-deals" className="text-gray-600 hover:text-[#dc0069] transition-colors">
                  Black Friday Deals
                </Link>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Address</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[#dc0069] font-semibold mb-2">Halo Flights UK</p>
                <address className="text-gray-600 text-sm not-italic leading-relaxed">
                  15A Cobalt Business Park, 1<br />
                  Quick Silver Way, Newcastle<br />
                  upon Tyne, London NE27<br />
                  0QQ, United Kingdom
                </address>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Registration No.</p>
                <p className="text-gray-900 font-medium">11322551</p>
              </div>
            </div>
          </div>

          {/* Book with Confidence Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Book with Confidence</h3>
            <div className="space-y-4">
              {/* Trust Badge */}
              <div className="flex items-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Payment</p>
                  <p className="text-sm font-medium text-gray-900">Protection</p>
                </div>
              </div>

              {/* Security Features */}
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  SSL Encrypted
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  ATOL Protected
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 Support
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-[#dc0069] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <p className="text-sm text-gray-600">
                © 2025 by Halo Travels and Tours UK All rights reserved.
              </p>
            </div>

            {/* Social Media & Country */}
            <div className="flex items-center space-x-6">
              {/* Social Media Icons */}
              <div className="flex items-center space-x-4">
                <Link href="https://wa.me/442072905570" className="text-gray-400 hover:text-green-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
                  </svg>
                </Link>
                <Link href="https://youtube.com/@haloflights" className="text-gray-400 hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>
                <Link href="https://tiktok.com/@haloflights" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </Link>
                <Link href="https://facebook.com/haloflights" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link href="https://instagram.com/haloflights" className="text-gray-400 hover:text-pink-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
              </div>

              {/* Country Selector */}
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-6 h-4 bg-blue-600 relative overflow-hidden rounded-sm">
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
    </footer>
  );
}