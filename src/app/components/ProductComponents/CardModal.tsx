// PublicHealthModal.tsx

import React from "react";

export default function PublicHealthModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-60 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg relative">
        <button
          className="absolute right-6 top-6 text-gray-400 hover:text-gray-700 text-2xl"
          aria-label="Close"
          onClick={onClose}
        >
          &times;
        </button>
        <div>
          <div className="mb-4">
            <span className="block text-[#a585db] font-semibold text-xs mb-2">Health Prioritized</span>
            <h2 className="text-2xl font-bold mb-1">Public Health</h2>
            <p className="text-gray-500 text-base mb-4">
              Find what&apos;s best for you based on your profile
            </p>
          </div>
          {/* The form */}
          <div className="rounded-xl bg-[#f9f7fd] border border-gray-200 p-6 flex flex-col gap-4">
            <div className="mb-1 font-semibold">Personal details</div>
            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium">
                Is the applicant or the insured person already insured with ottonova Krankenversicherung AG?
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-1">
                  <input type="radio" name="isInsured" className="accent-purple-500" /> <span>yes</span>
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="isInsured" className="accent-purple-500" /> <span>no</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Last name, First name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Date of Birth</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Please Select your Gender</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" className="accent-purple-500" /> <span>Male</span>
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" className="accent-purple-500" /> <span>Female</span>
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" className="accent-purple-500" /> <span>Diverse</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Country</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                placeholder="Enter your country"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
