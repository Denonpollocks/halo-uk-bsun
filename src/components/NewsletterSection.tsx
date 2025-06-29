"use client";

import { useState } from 'react';

interface NewsletterSectionProps {
  title: string;
  description: string;
}

export default function NewsletterSection({ title, description }: NewsletterSectionProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // TODO: Implement newsletter subscription API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="bg-indigo-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-300 mb-8">
            {description}
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {status === 'success' && (
            <p className="mt-4 text-green-400">Thank you for subscribing!</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-400">Something went wrong. Please try again.</p>
          )}
        </div>
      </div>
    </section>
  );
} 