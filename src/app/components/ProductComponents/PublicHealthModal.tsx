"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const ICON_PLUS = "/icons/Down.svg";
const ICON_MINUS = "/icons/up.svg";

// --- Insurance Cover Form Step 1 ---
function InsuranceCoverFlow({ onNext }: { onNext: () => void }) {
  const [country, setCountry] = useState("Germany");
  const [insuranceName, setInsuranceName] = useState("");
  const [insuranceType, setInsuranceType] = useState("statutory");
  const [ownCover, setOwnCover] = useState("yes");
  const [compulsoryCover, setCompulsoryCover] = useState("yes");
  const [otherCountry, setOtherCountry] = useState("");

  // Ref for first input focus
  const firstInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  return (
    <div className="space-y-6">
      {/* COUNTRY */}
      <div>
        <label className="block mb-1 font-medium text-gray-900 text-left">
          In which country did you last have health insurance cover or in which country did you live?
        </label>
        <div className="flex flex-col sm:flex-row sm:gap-3 gap-2 items-start mt-2">
          <label className="flex items-center gap-1">
            <input
              ref={firstInputRef}
              type="radio"
              checked={country === "Germany"}
              onChange={() => setCountry("Germany")}
              name="country"
              className="accent-primary"
            />
            Germany
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              checked={country === "other"}
              onChange={() => setCountry("other")}
              name="country"
              className="accent-primary"
            />
            Other country
          </label>
        </div>
        {country === "other" && (
          <div className="mt-3">
            <label className="block mb-1 text-sm">Please select the country</label>
            <select
              className="border rounded px-3 py-2 w-full"
              value={otherCountry}
              onChange={(e) => setOtherCountry(e.target.value)}
            >
              <option value="">Select country</option>
              <option value="Aland Islands">Aland Islands</option>
              <option value="India">India</option>
              <option value="USA">United States</option>
            </select>
          </div>
        )}
      </div>

      {/* INSURANCE NAME */}
      <div>
        <label className="block mb-1 font-medium text-left">
          Name of your current health insurance
        </label>
        <select
          className="border rounded px-3 py-2 w-full"
          value={insuranceName}
          onChange={(e) => setInsuranceName(e.target.value)}
        >
          <option value="">Select an insurance provider</option>
          <option value="TK">Techniker Krankenkasse (TK)</option>
          <option value="AOK">AOK</option>
          <option value="Barmer">Barmer</option>
          <option value="DAK">DAK-Gesundheit</option>
          <option value="Private Allianz">Private - Allianz</option>
          <option value="Private Debeka">Private - Debeka</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* INSURANCE TYPE */}
      <div>
        <label className="block mb-1 font-medium text-left">What is your current insurance cover?</label>
        <div className="flex flex-col sm:flex-row sm:gap-3 gap-2 mt-2">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              checked={insuranceType === "statutory"}
              onChange={() => setInsuranceType("statutory")}
              name="insuranceType"
              className="accent-primary"
            />
            Statutory
          </label>
          <label className="flex items-center gap-1 ">
            <input
              type="radio"
              checked={insuranceType === "private"}
              onChange={() => setInsuranceType("private")}
              name="insuranceType"
              className="accent-primary"
            />
            Private
          </label>
        </div>
      </div>

      {/* OWN COVER */}
      <div>
        <label className="block mb-1 font-medium text-left">Do you currently have your own insurance cover?</label>
        <div className="flex flex-col sm:flex-row sm:gap-3 gap-2 mt-2">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              checked={ownCover === "yes"}
              onChange={() => setOwnCover("yes")}
              name="ownCover"
              className="accent-primary"
            />
            Yes
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              checked={ownCover === "no"}
              onChange={() => setOwnCover("no")}
              name="ownCover"
              className="accent-primary"
            />
            No, I am covered by non-contributory dependants’ insurance
          </label>
        </div>
      </div>

      {/* COMPULSORY COVER */}
      <div>
        <label className="block mb-1 font-medium text-left">Do you currently have compulsory insurance cover?</label>
        <div className="flex flex-col sm:flex-row sm:gap-3 gap-2 mt-2">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              checked={compulsoryCover === "yes"}
              onChange={() => setCompulsoryCover("yes")}
              name="compulsoryCover"
              className="accent-primary"
            />
            Yes
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              checked={compulsoryCover === "no"}
              onChange={() => setCompulsoryCover("no")}
              name="compulsoryCover"
              className="accent-primary"
            />
            No, I have voluntary insurance cover
          </label>
        </div>
      </div>

      {/* NEXT BUTTON */}
      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="bg-primary text-white font-semibold px-6 py-2 w-full sm:w-auto rounded-md hover:bg-primary/90 transition"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

// --- Step 2 of first tab: Personal details ---
function PersonalDetailsStep({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-1 text-sm font-medium">Last name, First name</label>
        <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Enter your name" />
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium">Date of Birth</label>
        <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2" />
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium">Please Select your Gender</label>
        <div className="flex gap-4 flex-wrap">
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
        <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Enter your country" />
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="bg-primary text-white font-semibold px-6 py-2 w-full sm:w-auto rounded-md hover:bg-primary/90 transition"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export default function PublicHealthTabbedModal({ open, onClose }: ModalProps) {
  const [openTab, setOpenTab] = useState(0);
  const [personalStep, setPersonalStep] = useState(1);

  useEffect(() => {
    if (open) {
      setOpenTab(0);
      setPersonalStep(1);
    }
  }, [open]);

  if (!open) return null;

  const sections = [
    {
      key: "personal",
      title: "Personal details",
      content: personalStep === 1 ? (
        <InsuranceCoverFlow onNext={() => setPersonalStep(2)} />
      ) : (
        <PersonalDetailsStep onNext={() => setOpenTab(openTab + 1)} />
      ),
    },
    {
      key: "declaration",
      title: "Declaration of application for health/nursing care insurance",
      content: (
        <div className="text-left">
          <label className="block mb-1 text-sm font-medium text-left">Declaration statement or YES/NO Checkbox</label>
          <input type="checkbox" className="mr-2 text-left" /> I confirm and declare...
          <div className="flex justify-end mt-4">
            <button type="button" className="bg-primary text-white font-semibold px-5 py-2 rounded-md hover:bg-primary/90 transition" onClick={() => setOpenTab(openTab + 1)}>Next</button>
          </div>
        </div>
      ),
    },
    {
      key: "compulsory-care",
      title: "Information on compulsory long-term care insurance",
      content: (
        <div>
          <label className="block mb-1 text-sm font-medium text-left">Are you already covered by any long-term care insurance?</label>
          <div className="flex gap-4 flex-wrap">
            <label className="flex items-center gap-1">
              <input type="radio" name="longtermcare" className="accent-primary" /> <span>Yes</span>
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="longtermcare" className="accent-primary" /> <span>No</span>
            </label>
          </div>
          <div className="flex justify-end mt-4">
            <button type="button" className="bg-primary text-white font-semibold px-5 py-2 rounded-md hover:bg-[#6937e4] transition" onClick={() => setOpenTab(openTab + 1)}>Next</button>
          </div>
        </div>
      ),
    },
    {
      key: "health-info",
      title: "Health information",
      content: (
        <div>
          <label className="block mb-1 text-sm font-medium text-left">Add your health information here.</label>
          <textarea className="w-full border border-gray-300 rounded-md px-3 py-2 min-h-[60px]" placeholder="Your health details" />
          <div className="flex justify-end mt-4">
            <button type="button" className="bg-primary text-white font-semibold px-5 py-2 rounded-md hover:bg-[#6937e4] transition" onClick={() => setOpenTab(openTab + 1)}>Next</button>
          </div>
        </div>
      ),
    },
    {
      key: "signatures",
      title: "Signatures",
      content: (
        <div>
          <label className="block mb-1 text-sm font-medium text-left">Add your signature (placeholder field).</label>
          <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Signature" />
          <div className="flex justify-end mt-4">
            <button type="button" className="bg-primary text-white font-semibold px-5 py-2 rounded-md hover:bg-[#6937e4] transition" onClick={() => setOpenTab(openTab + 1)}>Next</button>
          </div>
        </div>
      ),
    },
    {
      key: "more-care",
      title: "Information on compulsory long-term care insurance",
      content: (
        <div>
          <label className="block mb-1 text-sm font-medium text-left">Further details about long-term care insurance...</label>
          <textarea className="w-full border border-gray-300 rounded-md px-3 py-2 min-h-[60px]" placeholder="More long-term care info" />
          <div className="flex justify-end mt-4">
            <button type="button" className="bg-primary text-white font-semibold px-5 py-2 rounded-md hover:bg-[#6937e4] transition" onClick={onClose}>Submit</button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center p-2">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[95vw] sm:max-w-lg md:max-w-xl relative flex flex-col max-h-[90vh]">
        <button className="absolute right-5 top-4 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => {setOpenTab(0);setPersonalStep(1);onClose();}}>&times;</button>
        <div className="p-4 text-center space-y-2">
          <span className="inline-block bg-[#531D6F1A]/90 text-primary px-3 py-1 rounded-full font-semibold text-xs mt-2">Health Prioritized</span>
          <h2 className="text-xl md:text-2xl font-bold">Public Health</h2>
        </div>
        <div className="flex-1 overflow-y-auto px-3 pb-4 space-y-3 scrollbar-hide">
          {sections.map((section, idx) => {
            const isOpen = openTab === idx;
            return (
              <div key={section.key} className="rounded-xl border border-gray-200 overflow-hidden">
                <button className="w-full flex justify-between items-center px-3 py-3 text-left font-semibold text-primary bg-[#EEE8F1]" onClick={() => setOpenTab(isOpen ? -1 : idx)} aria-expanded={isOpen}>
                  <span>{section.title}</span>
                  <Image src={isOpen ? ICON_MINUS : ICON_PLUS} alt="" width={20} height={20} />
                </button>
                {isOpen && <div className="p-3 space-y-3">{section.content}</div>}
              </div>
            );
          })}
        </div>
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
    </div>
  );
}
