import React from "react";
import Image from "next/image";

const positions = [
  {
    category: "Sales",
    jobs: [
      { title: "Country Sales Head", location: "Amsterdam" },
      { title: "Sales Rep", location: "Remote – Berlin" },
      { title: "Field Sales Agent", location: "Paris" },
    ],
  },
  {
    category: "Others",
    jobs: [{ title: "Customer Support Representative", location: "Remote" }],
  },
];

const images = [
  "/contact/contact1.png",
  "/contact/contact2.png",
  "/contact/contact3.png",
  "/contact/contact4.png",
  "/contact/contact1.png",
  "/contact/contact5.png",
  "/contact/contact3.png",
  "/contact/contact2.png",
];

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-br from-white via-[#f7e9ff] to-white py-16 px-4 md:px-10 lg:px-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Want to Work with Us?
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Do meaningful work. Take ownership. Push your ideas. Never stop
          learning.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="space-y-6 mb-16">
        {/* Row 1 - Left to Right */}
        <div className="flex  space-x-4 scrollbar-hide">
          {images.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-64">
              <Image
                src={src}
                alt={`Team ${index}`}
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex  space-x-4 flex-row-reverse scrollbar-hide">
          {images.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-64">
              <Image
                src={src}
                alt={`Team ${index + images.length}`}
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Open positions at Insurbe
        </h3>

        {positions.map((group, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-gray-500 text-sm uppercase mb-2">
              {group.category}
            </h4>
            {group.jobs.map((job, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center bg-white rounded-xl px-4 py-4 shadow-sm hover:shadow-md transition mb-2 cursor-pointer"
              >
                <div>
                  <p className="font-medium text-gray-900">{job.title}</p>
                  <p className="text-sm text-gray-400">{job.location}</p>
                </div>
                <span className="text-[#8224E3] text-xl">&rarr;</span>
              </div>
            ))}
          </div>
        ))}

        {/* Open Application */}
        <div className="mt-10 p-6 bg-white rounded-xl shadow">
          <h4 className="font-semibold mb-2">Open application</h4>
          <p className="text-gray-600 text-sm">
            Believe you’re a great fit but can’t find a position listed for your
            skillset? Reach out to us at{" "}
            <a
              href="mailto:careers@insurbe.com"
              className="text-[#8224E3] underline"
            >
              careers@insurbe.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
