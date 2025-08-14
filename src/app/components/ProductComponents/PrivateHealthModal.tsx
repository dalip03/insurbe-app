// PrivateHealthModal.tsx

import React from "react";

export default function PrivateHealthModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative">
        <button
          className="absolute right-6 top-6 text-gray-400 hover:text-gray-700 text-2xl"
          aria-label="Close"
          onClick={onClose}
        >
          &times;
        </button>
        <div>
          <div className="mb-4 text-center space-y-4">
  <span className="inline-block bg-[#531D6F1A]/90 text-primary px-3 py-1 rounded-full font-semibold text-xs mt-4">
            Health Prioritized
          </span>            <h2 className="text-2xl font-bold mb-3">Private Health</h2>
            <p className="text-black text-sm mb-4">
              Find what&apos;s best for you based on your profile
            </p>
          </div>
          <form className="flex flex-col gap-5">
            <div>
              <label className="block mb-1 font-medium text-black text-left">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-black text-left">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-primary/90 transition-all"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
