import React, { useState } from "react";

const ICON_PLUS = "/icons/Down.svg";
const ICON_MINUS = "/icons/up.svg";

// --- Insurance Cover Form Step 1 (user flows, matches images) ---
function InsuranceCoverFlow({ onNext }: { onNext: () => void }) {
  const [country, setCountry] = useState("Germany");
  const [insuranceName, setInsuranceName] = useState("");
  const [insuranceType, setInsuranceType] = useState("statutory");
  const [ownCover, setOwnCover] = useState("yes");
  const [compulsoryCover, setCompulsoryCover] = useState("yes");

  // For "other country" select
  const [otherCountry, setOtherCountry] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <label className="block mb-1 font-medium text-gray-900">
          In which country did you last have health insurance cover or in which country did you live?
        </label>
        <div className="flex gap-3 items-center mt-2">
          <label className="flex gap-1 items-center">
            <input
              type="radio"
              checked={country === "Germany"}
              onChange={() => setCountry("Germany")}
              name="country"
              className="accent-purple-500"
            />
            Germany
          </label>
          <label className="flex gap-1 items-center">
            <input
              type="radio"
              checked={country === "other"}
              onChange={() => setCountry("other")}
              name="country"
              className="accent-purple-500"
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
              {/* Add more options as needed */}
            </select>
          </div>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Name of your current health insurance</label>
        <input
          type="text"
          placeholder="Enter your insurance name"
          value={insuranceName}
          onChange={(e) => setInsuranceName(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">What is your current insurance cover?</label>
        <div className="flex gap-3 mt-2">
          <label className="flex gap-1 items-center">
            <input
              type="radio"
              checked={insuranceType === "statutory"}
              onChange={() => setInsuranceType("statutory")}
              name="insuranceType"
              className="accent-purple-500"
            />
            Statutory
          </label>
          <label className="flex gap-1 items-center">
            <input
              type="radio"
              checked={insuranceType === "private"}
              onChange={() => setInsuranceType("private")}
              name="insuranceType"
              className="accent-purple-500"
            />
            Private
          </label>
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">Do you currently have your own insurance cover?</label>
        <div className="flex gap-3 mt-2">
          <label className="flex gap-1 items-center">
            <input
              type="radio"
              checked={ownCover === "yes"}
              onChange={() => setOwnCover("yes")}
              name="ownCover"
              className="accent-purple-500"
            />
            Yes
          </label>
          <label className="flex gap-1 items-center">
            <input
              type="radio"
              checked={ownCover === "no"}
              onChange={() => setOwnCover("no")}
              name="ownCover"
              className="accent-purple-500"
            />
            No, I am covered by non-contributory dependants’ insurance
          </label>
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">Do you currently have compulsory insurance cover?</label>
        <div className="flex gap-3 mt-2">
          <label className="flex gap-1 items-center">
            <input
              type="radio"
              checked={compulsoryCover === "yes"}
              onChange={() => setCompulsoryCover("yes")}
              name="compulsoryCover"
              className="accent-purple-500"
            />
            Yes
          </label>
          <label className="flex gap-1 items-center">
            <input
              type="radio"
              checked={compulsoryCover === "no"}
              onChange={() => setCompulsoryCover("no")}
              name="compulsoryCover"
              className="accent-purple-500"
            />
            No, I have voluntary insurance cover
          </label>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="bg-primary text-white font-semibold px-6 py-2 rounded-md hover:bg-[#6937e4] transition"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

// --- Main Modal Component ---
export default function PublicHealthTabbedModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [openTab, setOpenTab] = useState<number>(0);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  // New: personal tab inner flow state
  const [personalStep, setPersonalStep] = useState(1);

  if (!open) return null;

  // Sections as before, but replace personal tab with multi-step inner flow!
  const sections = [
    {
      key: "edit",
      title: "Information about your current insurance cover",
      content: (
        <div>
          <p className="mb-3 text-sm text-gray-700">
            You can update any answer below. Once done, click &quot;Save changes.&quot;
          </p>
          <div>
            <label className="block mb-1 text-sm font-medium">Update your application info:</label>
            <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Edit your info here" />
          </div>
        </div>
      ),
    },
    {
      key: "personal",
      title: "Personal details",
      content: (
        // MULTI-STEP: Insurance flow then personal details fields
        personalStep === 1 ? (
          <InsuranceCoverFlow onNext={() => setPersonalStep(2)} />
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Is the applicant or the insured person already insured with ottonova Krankenversicherung AG?
              </label>
              <div className="flex gap-4 flex-wrap">
                <label className="flex items-center gap-1">
                  <input type="radio" name="isInsured" className="accent-purple-500" />{" "}
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="isInsured" className="accent-purple-500" />{" "}
                  <span>No</span>
                </label>
              </div>
            </div>
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
              <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Enter your country" />
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="button"
                className="bg-primary text-white font-semibold px-6 py-2 rounded-md hover:bg-[#6937e4] transition"
                onClick={() => setOpenTab(openTab + 1)}
              >
                Next
              </button>
            </div>
          </div>
        )
      ),
    },
    // ...all other tabs exactly as before
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
              <input type="radio" name="longtermcare" className="accent-purple-500" /> <span>Yes</span>
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="longtermcare" className="accent-purple-500" /> <span>No</span>
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
          <textarea className="w-full border border-gray-300 rounded-md px-3 py-2 min-h-[60px]" placeholder="Your health details"></textarea>
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
          <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Signature" />
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
          <textarea className="w-full border border-gray-300 rounded-md px-3 py-2 min-h-[60px]" placeholder="More long-term care info"></textarea>
        </div>
      ),
    },
  ];

  // Main render
  const visibleSections = isEdit ? [sections[0]] : sections;

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center p-2">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[95vw] sm:max-w-lg md:max-w-xl relative flex flex-col max-h-[95vh]">
        {/* Close Button */}
        <button
          className="absolute right-5 top-4 text-gray-400 hover:text-gray-700 text-2xl"
          aria-label="Close"
          onClick={() => {
            setOpenTab(0);
            setPersonalStep(1);
            setIsEdit(false);
            onClose();
          }}
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
        <div className={`flex-1 overflow-y-auto px-4 pb-4 space-y-3 scrollbar-hide`}>
          {visibleSections.map((section, idx) => {
            const isOpen = isEdit ? true : openTab === idx;
            return (
              <div key={section.key} className="rounded-xl border border-gray-200 overflow-hidden">
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-primary bg-[#EEE8F1] focus:outline-none"
                  onClick={() => setOpenTab(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  disabled={isEdit}
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
                  <div className={`p-4 space-y-3 overflow-y-auto max-h-[40vh] scrollbar-hide`}>
                    {section.content}
                    <div className="flex justify-end mt-4 gap-2">
                      {!isEdit && idx < sections.length - 1 && (
                        <button
                          type="button"
                          className="bg-primary text-white font-semibold px-4 py-2 rounded-md hover:bg-[#6937e4] transition"
                          onClick={() => {
                            setOpenTab(idx + 1);
                            setPersonalStep(1);
                          }}
                        >
                          Next
                        </button>
                      )}
                      {!isEdit && idx === sections.length - 1 && (
                        <button
                          type="submit"
                          className="bg-primary text-white font-semibold px-4 py-2 rounded-md hover:bg-[#6937e4] transition"
                          onClick={() => {
                            setIsEdit(true);
                            setOpenTab(0); // always show edit tab
                          }}
                        >
                          Submit
                        </button>
                      )}
                      {isEdit && (
                        <button
                          type="button"
                          className="bg-primary text-white font-semibold px-4 py-2 rounded-md hover:bg-[#6937e4] transition"
                          onClick={() => {
                            setIsEdit(false);
                            setOpenTab(1);
                            setPersonalStep(1);
                            onClose();
                          }}
                        >
                          Save changes
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
