import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Halo Flights - Complete Flight Booking Solution",
  description: "Book flights with ease using our comprehensive flight booking platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-gray-50">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}