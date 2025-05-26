"use client";

export default function WhyPrivateInsurance() {
  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-white to-[#fdf3ff] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-7xl mx-auto">
        {/* Left Side Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Why Private or Expat Health Insurance?
          </h2>
          <p className="text-lg text-gray-800 mb-8 leading-7">
            Lower monthly costs than GKV for healthy, high-earning individuals.
            English-speaking customer support. Faster access to doctor
            appointments and private clinics. Fully digital onboarding process.
            More personalized coverage with optional add-ons for dental, vision,
            and travel.
          </p>
          <button className="px-6 py-3 bg-[#8224E3] hover:bg-[#6d1dbf] text-white text-sm font-medium rounded-md shadow">
            Check My Eligibility
          </button>
        </div>

        {/* Right Side Image Card */}
        <div className="flex justify-center">
          <div className="relative bg-[#0f172a] rounded-xl p-6 shadow-lg w-full h-96 max-w-sm">
            {/* Top Profile Bar */}
              <img
                src="/img/label2.png"
                alt="Card 1"
                width={340}
                height={220}
                className="absolute -top-12 md:right-0 left-[20px] object-contain "
              />
            {/* Card Content */}
            <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-inner h-54 w-64">
              <h4 className="text-sm font-medium text-gray-700 mb-4">
                Portfolio Tokens
              </h4>

              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm text-gray-500">2500 USDT</p>
                  <p className="text-xs text-gray-400">$99,204.55</p>
                </div>
                <button className="text-xs bg-[#8224E3] text-white px-3 py-1 rounded-full">
                  Withdraw
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">2500 LINK</p>
                  <p className="text-xs text-gray-400">$97,560.15</p>
                </div>
                <button className="text-xs bg-[#8224E3] text-white px-3 py-1 rounded-full">
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
