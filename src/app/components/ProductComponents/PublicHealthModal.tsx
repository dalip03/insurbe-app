import React, { useState } from "react";

const ICON_PLUS = "/icons/Down.svg";
const ICON_MINUS = "/icons/up.svg";

// Custom scrollbar hide style
const scrollbarHide = "scrollbar-hide"; // Tailwind plugin or custom CSS below

const sections = [
  {
    key: "personal",
    title: "Personal details",
    content: (
      <div className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium">
            Is the applicant or the insured person already insured with ottonova
            Krankenversicherung AG?
          </label>
          <div className="flex gap-4 flex-wrap">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="isInsured"
                className="accent-purple-500"
              />{" "}
              <span>Yes</span>
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="isInsured"
                className="accent-purple-500"
              />{" "}
              <span>No</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Last name, First name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Date of Birth
          </label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Please Select your Gender
          </label>
          <div className="flex gap-4 flex-wrap">
            <label className="flex items-center gap-1">
              <input type="radio" name="gender" className="accent-purple-500" />{" "}
              <span>Male</span>
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="gender" className="accent-purple-500" />{" "}
              <span>Female</span>
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="gender" className="accent-purple-500" />{" "}
              <span>Diverse</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Country</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Enter your country"
          />
        </div>
      </div>
    ),
  },
  {
    key: "declaration",
    title: "Declaration of application for health/nursing care insurance",
    content: (
      <div>
        <label className="block mb-1 text-sm font-medium">
          Declaration statement or YES/NO Checkbox
        </label>
        <input type="checkbox" className="mr-2" /> I confirm and declare...
      </div>
    ),
  },
  {
    key: "compulsory-care",
    title: "Information on compulsory long-term care insurance",
    content: (
      <div>
        <label className="block mb-1 text-sm font-medium">
          Are you already covered by any long-term care insurance?
        </label>
        <div className="flex gap-4 flex-wrap">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="longtermcare"
              className="accent-purple-500"
            />{" "}
            <span>Yes</span>
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="longtermcare"
              className="accent-purple-500"
            />{" "}
            <span>No</span>
          </label>
        </div>
      </div>
    ),
  },
  {
    key: "health-info",
    title: "Health information",
    content: (
      <div>
        <label className="block mb-1 text-sm font-medium">
          Add your health information here.
        </label>
        <textarea
          className="w-full border border-gray-300 rounded-md px-3 py-2 min-h-[60px]"
          placeholder="Your health details"
        ></textarea>
      </div>
    ),
  },
  {
    key: "signatures",
    title: "Signatures",
    content: (
      <div>
        <label className="block mb-1 text-sm font-medium">
          Add your signature (placeholder field).
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          placeholder="Signature"
        />
      </div>
    ),
  },
  {
    key: "more-care",
    title: "Information on compulsory long-term care insurance",
    content: (
      <div>
        <label className="block mb-1 text-sm font-medium">
          Further details about long-term care insurance...
        </label>
        <textarea
          className="w-full border border-gray-300 rounded-md px-3 py-2 min-h-[60px]"
          placeholder="More long-term care info"
        ></textarea>
      </div>
    ),
  },
];

export default function PublicHealthTabbedModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [openTab, setOpenTab] = useState<number>(0);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center p-2">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[95vw] sm:max-w-lg md:max-w-xl relative flex flex-col max-h-[95vh]">
        {/* Close Button */}
        <button
          className="absolute right-5 top-4 text-gray-400 hover:text-gray-700 text-2xl"
          aria-label="Close"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Header */}
        <div className="p-4 text-center space-y-4">
          <span className="inline-block bg-[#531D6F1A]/90 text-primary px-3 py-1 rounded-full font-semibold text-xs mt-4">
            Health Prioritized
          </span>
          <h2 className="text-xl md:text-2xl font-bold mb-4 ">Public Health</h2>
          <p className="text-gray-950 text-sm  mb-2">
            Find what&apos;s best for you based on your profile
          </p>
        </div>

        {/* Scrollable Tabs */}
        <div
          className={`flex-1 overflow-y-auto px-4 pb-4 space-y-3 ${scrollbarHide}`}
        >
          {sections.map((section, idx) => {
            const isOpen = openTab === idx;
            return (
              <div
                key={section.key}
                className="rounded-xl border border-gray-200  overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-primary bg-[#EEE8F1] focus:outline-none"
                  onClick={() => setOpenTab(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base text-black/90">
                    {section.title}
                  </span>
                  <span className="ml-2 flex items-center">
                    <img
                      src={isOpen ? ICON_MINUS : ICON_PLUS}
                      alt={isOpen ? "Close Tab" : "Open Tab"}
                      width={20}
                      height={20}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div
                    className={`p-4 space-y-3 overflow-y-auto max-h-[40vh] ${scrollbarHide}`}
                  >
                    {section.content}
                    <div className="flex justify-end mt-4 gap-2">
                      {idx < sections.length - 1 && (
                        <button
                          type="button"
                          className="bg-primary text-white font-semibold px-4 py-2 rounded-md hover:bg-[#6937e4] transition"
                          onClick={() => setOpenTab(idx + 1)}
                        >
                          Next
                        </button>
                      )}
                      {idx === sections.length - 1 && (
                        <button
                          type="submit"
                          className="bg-primary text-white font-semibold px-4 py-2 rounded-md hover:bg-[#6937e4] transition"
                          onClick={onClose}
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
