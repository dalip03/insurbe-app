'use client';

import Link from 'next/link';

export default function ProductsPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold mb-6">Choose a Product Type</h1>
      <div className="space-x-4">
        <Link
          href="/products/privateProducts"
          className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition"
        >
          Private Products →
        </Link>
        <Link
          href="/products/pensionProducts"
          className="bg-gray-200 text-black px-6 py-3 rounded-md hover:bg-gray-300 transition"
        >
          Public Products →
        </Link>
      </div>
    </section>
  );
}
