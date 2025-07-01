"use client";

import { useState, useEffect } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: '📋' },
    { id: 'definitions', title: 'Definitions', icon: '📖' },
    { id: 'booking-terms', title: 'Booking Terms', icon: '✈️' },
    { id: 'payment-terms', title: 'Payment Terms', icon: '💳' },
    { id: 'cancellation-policy', title: 'Cancellation Policy', icon: '❌' },
    { id: 'refund-policy', title: 'Refund Policy', icon: '💰' },
    { id: 'travel-documents', title: 'Travel Documents', icon: '📄' },
    { id: 'liability', title: 'Liability', icon: '⚖️' },
    { id: 'force-majeure', title: 'Force Majeure', icon: '🌪️' },
    { id: 'data-protection', title: 'Data Protection', icon: '🔒' },
    { id: 'complaints', title: 'Complaints Procedure', icon: '📞' },
    { id: 'governing-law', title: 'Governing Law', icon: '🏛️' },
    { id: 'contact', title: 'Contact Information', icon: '📧' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#dc0069] via-pink-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms and <span className="text-yellow-300">Conditions</span>
            </h1>
            <p className="text-xl text-pink-100 leading-relaxed">
              Please read these terms and conditions carefully before using our services. 
              By booking with Halo Flights, you agree to be bound by these terms.
            </p>
            <div className="mt-6 text-sm text-pink-200">
              Last updated: January 2025
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#dc0069]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center text-sm ${
                      activeSection === section.id
                        ? 'bg-[#dc0069] text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-[#dc0069]'
                    }`}
                  >
                    <span className="mr-3 text-base">{section.icon}</span>
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-12">
              
              {/* Introduction */}
              <section id="introduction" className="scroll-mt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3 text-2xl">📋</span>
                  Introduction
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    Welcome to Halo Flights UK ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our website, services, and any flight bookings made through Halo Flights UK. We are a registered travel agency operating under UK law, committed to providing exceptional travel services while ensuring transparency and fairness in all our dealings.
                  </p>
                  <p>
                    By accessing our website, making a booking, or using any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
                  </p>
                  <p>
                    Halo Flights UK is registered in England and Wales under company registration number 11322551. Our registered office is located at 15A Cobalt Business Park, 1 Quick Silver Way, Newcastle upon Tyne, London NE27 0QQ, United Kingdom.
                  </p>
                </div>
              </section>

              {/* Definitions */}
              <section id="definitions" className="scroll-mt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3 text-2xl">📖</span>
                  Definitions
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>For the purposes of these Terms, the following definitions apply:</p>
                  <ul className="space-y-2">
                    <li><strong>"Company"</strong> refers to Halo Flights UK, a travel agency registered in England and Wales.</li>
                    <li><strong>"Customer" or "You"</strong> refers to any individual or entity using our services or making bookings through our platform.</li>
                    <li><strong>"Booking"</strong> means any reservation for travel services made through our website or customer service.</li>
                    <li><strong>"Supplier"</strong> refers to airlines, hotels, car rental companies, and other travel service providers.</li>
                    <li><strong>"Services"</strong> include flight bookings, travel arrangements, customer support, and related travel services.</li>
                    <li><strong>"Website"</strong> refers to haloflights.co.uk and all associated subdomains and mobile applications.</li>
                    <li><strong>"Travel Documents"</strong> include passports, visas, tickets, boarding passes, and any other documentation required for travel.</li>
                  </ul>
                </div>
              </section>

              {/* Booking Terms */}
              <section id="booking-terms" className="scroll-mt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3 text-2xl">✈️</span>
                  Booking Terms
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    When you make a booking with Halo Flights UK, you enter into a contract with us as your travel agent. We act as an intermediary between you and the travel suppliers (airlines, hotels, etc.). All bookings are subject to availability and confirmation from the respective suppliers.
                  </p>
                  <p>
                    <strong>Booking Process:</strong> All bookings must be made by individuals who are 18 years or older. You are responsible for ensuring that all passenger information provided is accurate and matches the travel documents. Any errors in passenger details may result in additional charges or inability to travel.
                  </p>
                  <p>
                    <strong>Confirmation:</strong> Your booking is not confirmed until you receive a written confirmation from us via email. This confirmation will include your booking reference, travel details, and payment information. Please review all details carefully and contact us immediately if any information is incorrect.
                  </p>
                  <p>
                    <strong>Price Accuracy:</strong> While we strive to ensure all prices displayed are accurate, errors may occasionally occur. If we discover a pricing error after you have made a booking, we will contact you immediately to discuss options, which may include paying the correct price or cancelling the booking with a full refund.
                  </p>
                </div>
              </section>

              {/* Payment Terms */}
              <section id="payment-terms" className="scroll-mt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3 text-2xl">💳</span>
                  Payment Terms
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    Payment for all bookings must be made in full at the time of booking unless otherwise agreed in writing. We accept major credit cards, debit cards, and bank transfers. All payments are processed securely through our encrypted payment systems.
                  </p>
                  <p>
                    <strong>Currency:</strong> All prices are quoted in British Pounds (GBP) unless otherwise stated. If you pay in a different currency, your bank or card issuer may apply currency conversion charges.
                  </p>
                  <p>
                    <strong>Payment Security:</strong> We use industry-standard SSL encryption to protect your payment information. We do not store your complete credit card details on our servers. All payment processing is handled by certified payment processors.
                  </p>
                  <p>
                    <strong>Failed Payments:</strong> If your payment fails or is declined, your booking may be cancelled automatically. We will attempt to contact you to resolve payment issues, but we cannot guarantee that prices or availability will remain the same.
                  </p>
                  <p>
                    <strong>Additional Charges:</strong> You may be responsible for additional charges imposed by suppliers, such as baggage fees, seat selection fees, or change fees. These charges are clearly disclosed during the booking process where applicable.
                  </p>
                </div>
              </section>

              {/* Cancellation Policy */}
              <section id="cancellation-policy" className="scroll-mt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3 text-2xl">❌</span>
                  Cancellation Policy
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    Cancellation terms vary depending on the type of booking and the supplier's policies. All cancellations must be requested in writing via email or through our customer service team. Verbal cancellation requests are not accepted.
                  </p>
                  <p>
                    <strong>Flight Cancellations:</strong> Flight cancellation policies are determined by the airline and fare type. Some tickets are non-refundable, while others may allow cancellation with penalties. We will clearly inform you of the cancellation terms before you complete your booking.
                  </p>
                  <p>
                    <strong>24-Hour Cancellation:</strong> In accordance with UK regulations, you may cancel most flight bookings within 24 hours of booking without penalty, provided the booking was made at least 7 days before departure.
                  </p>
                  <p>
                    <strong>Cancellation Fees:</strong> In addition to any supplier cancellation fees, Halo Flights UK may charge an administrative fee for processing cancellations. This fee will be clearly disclosed at the time of cancellation.
                  </p>
                  <p>
                    <strong>No-Show Policy:</strong> If you fail to show up for your flight without prior cancellation, you will not be entitled to any refund, and any remaining portions of your itinerary may be cancelled by the airline.
                  </p>
                </div>
              </section>

              {/* Refund Policy */}
              <section id="refund-policy" className="scroll-mt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3 text-2xl">💰</span>
                  Refund Policy
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    Refunds are processed according to the terms and conditions of the respective suppliers and the fare rules of your booking. We will assist you in claiming refunds where applicable, but we cannot guarantee that refunds will be approved by the suppliers.
                  </p>
                  <p>
                    <strong>Refund Processing Time:</strong> Approved refunds are typically processed within 7-14 business days for credit card payments and 14-21 business days for bank transfers. However, some suppliers may take longer to process refunds.
                  </p>
                  <p>
                    <strong>Partial Refunds:</strong> In cases where only part of your booking is cancelled or changed, you may be entitled to a partial refund based on the unused portion of your travel, minus any applicable fees and penalties.
                  </p>
                  <p>
                    <strong>Travel Insurance:</strong> We strongly recommend purchasing travel insurance to protect against unforeseen circumstances that may require cancellation or changes to your travel plans.
                  </p>
                  <p>
                    <strong>Refund Method:</strong> Refunds will be processed using the same payment method used for the original booking. We cannot process refunds to different payment methods or accounts.
                  </p>
                </div>
              </section>

              {/* Travel Documents */}
              <section id="travel-documents" className="scroll-mt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3 text-2xl">📄</span>
                  Travel Documents
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    You are solely responsible for ensuring that you have all necessary travel documents, including valid passports, visas, and health certificates. We provide general guidance, but it is your responsibility to verify requirements with the relevant authorities.
                  </p>
                  <p>
                    <strong>Passport Requirements:</strong> Your passport must be valid for at least 6 months beyond your intended return date for most international destinations. Some countries may have different requirements.
                  </p>
                  <p>
                    <strong>Visa Requirements:</strong> Visa requirements vary by destination and nationality. We recommend checking with the embassy or consulate of your destination country well in advance of travel.
                  </p>
                  <p>
                    <strong>Health Requirements:</strong> Some destinations may require specific vaccinations or health certificates. Please consult with your healthcare provider or a travel medicine clinic for advice.
                  </p>
                  <p>
                    <strong>Document Accuracy:</strong> All names on bookings must exactly match the names on your travel documents. Any discrepancies may result in denied boarding or additional charges for name changes.
                  </p>
                </div>
              </section>

              {/* Liability */}
              <section id="liability" className="scroll-mt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3 text-2xl">⚖️</span>
                  Liability
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    Halo Flights UK acts as an agent for travel suppliers and our liability is limited accordingly. We are not responsible for the acts, omissions, or defaults of suppliers or for any loss, damage, or injury arising from their services.
                  </p>
                  <p>
                    <strong>Limitation of Liability:</strong> Our total liability to you for any claim arising from or relating to our services shall not exceed the total amount paid by you for the specific booking in question.
                  </p>
                  <p>
                    <strong>Supplier Responsibility:</strong> Airlines, hotels, and other suppliers are responsible for their own services. Any claims relating to their services should be directed to them in the first instance.
                  </p>
                  <p>
                    <strong>Force Majeure:</strong> We are not liable for any failure to perform our obligations due to circumstances beyond our reasonable control, including but not limited to natural disasters, war, terrorism, strikes, or government actions.
                  </p>
                  <p>
                    <strong>Consequential Damages:</strong> We shall not be liable for any indirect, special, incidental, or consequential damages, including but not limited to loss of profits, business interruption, or loss of data.
                  </p>
                </div>
              </section>

              {/* Force Majeure */}
              <section id="force-majeure" className="scroll-mt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3 text-2xl">🌪️</span>
                  Force Majeure
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    Neither party shall be liable for any failure or delay in performance under these Terms which is due to circumstances beyond their reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, civil unrest, strikes, government actions, or pandemic-related restrictions.
                  </p>
                  <p>
                    <strong>Travel Disruptions:</strong> In the event of travel disruptions due to force majeure events, we will assist you in rebooking or obtaining refunds where possible, but we cannot guarantee alternative arrangements or compensation beyond what is provided by the suppliers.
                  </p>
                  <p>
                    <strong>Pandemic Considerations:</strong> Travel restrictions and requirements related to health emergencies may change rapidly. You are responsible for staying informed about current restrictions and requirements for your destination.
                  </p>
                </div>
              </section>

              {/* Data Protection */}
              <section id="data-protection" className="scroll-mt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3 text-2xl">🔒</span>
                  Data Protection
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    We are committed to protecting your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Our Privacy Policy, available on our website, provides detailed information about how we collect, use, and protect your personal data.
                  </p>
                  <p>
                    <strong>Data Collection:</strong> We collect personal data necessary to provide our services, including contact information, travel preferences, and payment details. We only collect data that is relevant and necessary for the purposes stated.
                  </p>
                  <p>
                    <strong>Data Sharing:</strong> We may share your personal data with travel suppliers as necessary to complete your bookings. We do not sell your personal data to third parties for marketing purposes.
                  </p>
                  <p>
                    <strong>Your Rights:</strong> You have the right to access, correct, delete, or restrict the processing of your personal data. You may also object to processing or request data portability in certain circumstances.
                  </p>
                </div>
              </section>

              {/* Complaints Procedure */}
              <section id="complaints" className="scroll-mt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3 text-2xl">📞</span>
                  Complaints Procedure
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    We are committed to providing excellent customer service. If you have a complaint about our services, please contact us as soon as possible so we can resolve the issue promptly.
                  </p>
                  <p>
                    <strong>How to Complain:</strong> Please contact our complaints department at 020 7290 5572 or email complaints@haloflights.co.uk. Provide your booking reference and a detailed description of your complaint.
                  </p>
                  <p>
                    <strong>Response Time:</strong> We will acknowledge your complaint within 2 business days and provide a full response within 14 business days. For complex matters, we may need additional time and will keep you informed of our progress.
                  </p>
                  <p>
                    <strong>Escalation:</strong> If you are not satisfied with our response, you may escalate your complaint to ABTA (Association of British Travel Agents) or other relevant regulatory bodies.
                  </p>
                </div>
              </section>

              {/* Governing Law */}
              <section id="governing-law" className="scroll-mt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3 text-2xl">🏛️</span>
                  Governing Law
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                  </p>
                  <p>
                    <strong>Dispute Resolution:</strong> We encourage resolving disputes through direct communication. If this is not possible, we may suggest alternative dispute resolution methods before resorting to court proceedings.
                  </p>
                  <p>
                    <strong>Severability:</strong> If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                  </p>
                  <p>
                    <strong>Amendments:</strong> We may update these Terms from time to time. Any changes will be posted on our website with the effective date. Continued use of our services after changes constitutes acceptance of the new Terms.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section id="contact" className="scroll-mt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3 text-2xl">📧</span>
                  Contact Information
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    If you have any questions about these Terms and Conditions or need assistance with our services, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6 not-prose">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Halo Flights UK</h4>
                        <address className="text-gray-600 not-italic">
                          15A Cobalt Business Park, 1<br />
                          Quick Silver Way, Newcastle upon Tyne<br />
                          London NE27 0QQ, United Kingdom
                        </address>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Contact Details</h4>
                        <div className="space-y-1 text-gray-600">
                          <p>Phone: <Link href="tel:02072905570" className="text-[#dc0069] hover:text-pink-600">020 7290 5570</Link></p>
                          <p>Email: <Link href="mailto:contact@haloflights.co.uk" className="text-[#dc0069] hover:text-pink-600">contact@haloflights.co.uk</Link></p>
                          <p>Registration No: 11322551</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6">
                    <strong>Effective Date:</strong> These Terms and Conditions are effective as of January 1, 2025, and supersede all previous versions.
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[#dc0069] text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition-colors z-50"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </main>
  );
}