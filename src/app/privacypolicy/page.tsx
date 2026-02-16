"use client";

import { INSURANCE_PLANS } from "../constants/insurance";

const sections = [
  {
    title: "Introduction",
    content: `Welcome to InsurBe. We are committed to safeguarding the privacy of our website visitors and service users. This policy applies where we are acting as a data controller with respect to the personal data of our website visitors and service users; in other words, where we determine the purposes and means of the processing of that personal data.`,
  },
  {
    title: "Information We Collect",
    content: `When you use our services, we collect information you provide directly. For example, we gather information when you fill out a form on our website. The types of information we might collect include your name, email address, telephone number, company details, and specific feedback information. We do not require users to create an account or sign up to access our website or services.`,
  },
  {
    title: "How We Use the Information",
    content: `We use the information collected from our services to improve them, develop new ones, and to cater our services to our user's needs more effectively. We use this data to provide a personalized experience and provide more relevant content and services.`,
  },
  {
    title: "Information We Share",
    content: `At InsurBe, we respect your privacy and the confidentiality of your information is critical to us. We do not share your personal information with any third parties, unless necessary for legal reasons. This may occur only when required to comply with applicable law or legal process.`,
  },
  {
    title: "Security",
    content: `We prioritize the security of your information. We have implemented appropriate technical and organizational measures to protect the information we collect from unauthorized access, alteration, disclosure, or destruction.`,
  },
  {
    title: "Changes to this Policy",
    content: `We may revise our Privacy Policy from time to time. We will post any changes to the Privacy Policy on this page. We will not reduce your rights under this Privacy Policy without your explicit consent.`,
  },
  {
    title: "Promotional Cashback Offers",
    content: `As part of a promotional offer, InsurBe may grant a cashback of up to €${INSURANCE_PLANS.INSURBE_STUDENT_BONUS} following a successful insurance signup. The cashback is paid to a German bank account in the policyholder’s name, subject to eligibility criteria and verification.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Privacy Policy
          </h1>
        </header>

        {/* Content */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <div key={index} className="max-w-3xl">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                {section.title}
              </h2>
              <p className="text-[16px] text-gray-700 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}

          {/* GDPR Section */}
          <div className="max-w-3xl">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              GDPR Compliance
            </h2>
            <p className="text-[16px] text-gray-700 mb-3">
              Your GDPR Rights include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[16px] text-gray-700">
              <li>
                <span className="font-medium">Right to Access:</span> Request
                copies of your personal data.
              </li>
              <li>
                <span className="font-medium">Right to Rectification:</span>{" "}
                Request correction of inaccurate or incomplete data.
              </li>
              <li>
                <span className="font-medium">Right to Erasure:</span> Request
                deletion of your personal data under certain conditions.
              </li>
              <li>
                <span className="font-medium">Data Portability:</span> Request
                transfer of your data to another organization or directly to
                you.
              </li>
              <li>
                <span className="font-medium">Consent Management:</span>{" "}
                Withdraw consent at any time.
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-600">
          <p>
            Last updated:{" "}
            <span className="font-medium text-gray-800">January 20, 2026</span>
          </p>
          <p className="mt-2">
            Questions? Contact{" "}
            <a
              href="mailto:privacy@insurbe.com"
              className="font-medium text-gray-800 hover:underline"
            >
              privacy@insurbe.com
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
}
