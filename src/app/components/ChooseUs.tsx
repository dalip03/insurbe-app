'use client';

import Image from 'next/image';

export default function ChooseUs() {
  const reasons = [
    {
      title: 'Peace Of Mind',
      desc: 'Generic text to outline the benefits of Insurbe and the particular feature.',
      icon: '/icons/student.svg',
    },
    {
      title: 'Tailored Coverage',
      desc: 'Generic text to outline the benefits of Insurbe and the particular feature.',
      icon: '/icons/support.svg',
    },
    {
      title: 'Affordable Options',
      desc: 'Generic text to outline the benefits of Insurbe and the particular feature.',
      icon: '/icons/job.svg',
    },
    {
      title: 'Expert Support',
      desc: 'Generic text to outline the benefits of Insurbe and the particular feature.',
      icon: '/icons/family.svg',
    },
  ];

  return (
    <section className="py-16 px-12 bg-gradient-to-br from-white to-[#fdf3ff]">
      <h2 className="text-3xl font-bold text-start mb-10 px-2 sm:px-6 md:px-10">
        Why Choose Us?
      </h2>
      <div className="grid gap-6 max-w-6xl mx-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100/60 p-6 rounded-xl text-center border-2 border-transparent hover:border-[#A970D7] transition-all hover:shadow-md"
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-white rounded-md">
              <Image
                src={item.icon}
                alt={item.title}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
