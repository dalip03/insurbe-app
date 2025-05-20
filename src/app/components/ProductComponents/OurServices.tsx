const plans = [
  {
    title: "Public (GKV)",
    price: "€800+",
    features: [
      "Covers dependents",
      "No Digital signup",
      "Accepted for visa",
      "Limited Customization",
    ],
    accent: "text-purple-700",
  },
  {
    title: "Full Private (PKV)",
    price: "€400",
    features: [
      "Optional Dependents Coverage",
      "Digital signup",
      "Accepted for visa",
      "Basic Analytics",
    ],
    accent: "text-purple-700",
  },
  {
    title: "Expat Private",
    price: "€200",
    features: [
      "No Dependents Coverage",
      "Digital signup",
      "Accepted for visa",
      "Theme customization",
    ],
    accent: "text-purple-700",
  },
];

export default function OurServices() {
  return (
    <section className="bg-gradient-to-br from-[#f5f0ff] to-[#fefcfc] py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block bg-white border border-gray-200 px-4 py-1 rounded-full text-xs font-medium text-gray-500 mb-4">
          Unbreakable Quality
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
          Affordable Excellence
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-12">
          Comparing with the best Insurance, start experiencing our services
          today
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-xl p-6 transition duration-300 hover:bg-white hover:shadow-lg flex flex-col justify-between"
            >
              <div className="text-left">
                <h4 className={`text-sm font-medium ${plan.accent} mb-2`}>
                  {plan.title}
                </h4>
                <p className="text-3xl font-bold mb-1">
                  {plan.price}
                  <span className="text-sm font-normal text-gray-500">/mo</span>
                </p>

                <p className="font-semibold text-sm mt-6 mb-4">
                  What’s included:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {plan.features.map((item, i) => (
                    <li key={i}>✨ {item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex justify-center">
                <button className="w-full  py-2 px-4 border border-gray-300 text-black rounded-md transition-all duration-300 group-hover:bg-[#8224E3] group-hover:text-white group-hover:border-[#8224E3]">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
