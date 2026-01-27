"use client";

const termsSections = [
  {
    number: "0",
    title: "Preamble",
    content: `InsurBe provides access to insurance coverage ("InsurBe Insurance Products") offered by various insurance companies ("Risk Carriers").

InsurBe enables users to learn about and manage insurance products digitally through the InsurBe platform. Use of InsurBe services is free of charge.

All services provided by InsurBe are subject to the following Terms and Conditions.`,
  },
  {
    number: "1",
    title: "Scope of Validity",
    content: `These Terms and Conditions apply between you and InsurBe and govern the use of InsurBe’s website, platform, and services.`,
  },
  {
    number: "2.1",
    title: "Establishment of the Insurance Contract",
    content: `InsurBe acts as an insurance intermediary. Insurance coverage becomes effective only once a contract is concluded between you and the respective Risk Carrier.

Insurance products displayed on the platform do not constitute legally binding offers. By submitting an application or proceeding to payment, you submit a binding request for coverage.

You must provide complete and accurate information and promptly notify InsurBe of any changes to your personal details.`,
  },
  {
    number: "2.2",
    title: "Processing of the Contract",
    content: `InsurBe serves as your primary contact for policy-related services including renewals, modifications, claims support, billing inquiries, and complaints.

Policies are managed digitally. By using InsurBe’s services, you consent to electronic communication for all policy-related matters.`,
  },
  {
    number: "2.3",
    title: "Liability",
    content: `InsurBe’s liability for damages caused by slight negligence is limited to the extent permitted by law.

InsurBe shall not be liable for indirect or consequential damages, except in cases of gross negligence, willful misconduct, or harm to life, body, or health.`,
  },
  {
    number: "4",
    title: "Data Protection",
    content: `Personal data is processed in accordance with applicable data protection laws. Further details are outlined in InsurBe’s Privacy Policy.`,
  },
  {
    number: "5",
    title: "Electronic Communication and Security",
    content: `InsurBe primarily communicates electronically using secure transmission standards. You may withdraw consent to electronic communication at any time; however, this may affect service availability.`,
  },
  {
    number: "6",
    title: "Amendment of the Terms and Conditions",
    content: `InsurBe may amend these Terms and Conditions due to legal, regulatory, or operational requirements. Continued use of the platform constitutes acceptance of the updated terms.`,
  },
  {
    number: "7",
    title: "Final Provisions and Governing Law",
    content: `If any provision is deemed invalid, the remaining provisions shall remain effective.

These Terms and Conditions are governed by applicable laws. Jurisdiction shall be determined in accordance with mandatory legal provisions.`,
  },
];

export default function Terms() {
  return (
    <section className="min-h-screen bg-white px-4 sm:px-6 lg:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            Last updated: January 20, 2026
          </p>
        </header>

        {/* Content */}
        <div className="space-y-10">
          {termsSections.map((section) => (
            <div key={section.number} className="max-w-3xl">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                {section.number}. {section.title}
              </h2>
              <p className="text-[16px] text-gray-700 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-600">
          <p>
            Last updated:{" "}
            <span className="font-medium text-gray-800">
              January 20, 2026
            </span>
          </p>
          <p className="mt-2">
            Questions? Contact{" "}
            <a
              href="mailto:support@insurbe.com"
              className="font-medium text-gray-800 hover:underline"
            >
              support@insurbe.com
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
}
