export default function AccessibilityPage() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Accessibility at InsurBe
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Let's make the world more inclusive – We are committed to making our
          digital services accessible to everyone.
        </p>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          We aim to meet the standards of the European Accessibility Act (EAA)
          and WCAG 2.1 Level AA, ensuring our website and services are easy to
          use and inclusive for all users.
        </p>

        {/* Section Heading */}
        <h2 className="text-2xl font-semibold mb-6">
          Found an accessibility issue?
        </h2>

        {/* Content */}
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          If you experience any difficulties accessing our website or services,
          or if you have suggestions for improvement, we want to hear from you.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Send us the issue at{" "}
          <a
            href="mailto:info@insurbe.com"
            className="text-primary underline hover:text-purple-600 transition"
          >
            info@insurbe.com
          </a>
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Your feedback helps us improve and ensures we create a better
          experience for everyone.
        </p>

      </div>
    </section>
  );
}