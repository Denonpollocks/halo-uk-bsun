export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Halo Flights</h3>
            <p className="text-sm">
              Your trusted partner for flight bookings worldwide. Find the best deals on flights to any destination.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Search Flights</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@haloflights.com</li>
              <li>Phone: +44 (0) 123 456 7890</li>
              <li>Address: London, United Kingdom</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest deals and updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Halo Flights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 