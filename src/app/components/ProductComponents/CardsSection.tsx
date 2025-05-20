// CardsSection.tsx
import React from "react";

const CardsSection = () => {
  return (
    <div className="-mt-20 relative z-20 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl p-6 shadow-md text-black text-left">
          <p className="text-sm font-medium text-gray-500">Earnings</p>
          <h3 className="text-2xl font-bold">$6750 USD</h3>
          <p className="text-sm text-green-500 mt-1">+2.9%</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md text-black text-left">
          <p className="text-sm font-medium text-gray-500">Upcoming Events</p>
          <ul className="mt-2 space-y-2 text-sm">
            <li>📅 Bitcoin Halving – $44,000</li>
            <li>🚀 Solana Partnership – $13,200</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md text-black text-left">
          <p className="text-sm font-medium text-gray-500">Monthly Spend</p>
          <h3 className="text-2xl font-bold">$2520 USD</h3>
          <div className="flex items-end gap-2 mt-4">
            {[60, 80, 100, 50].map((height, idx) => (
              <div
                key={idx}
                className="bg-purple-500 w-4 rounded-t-md"
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
