"use client";

import { motion } from "framer-motion";
import { Shield, FileText, Scale, Database, Mail, Lock } from "lucide-react";

const termsSections = [
  {
    number: "0",
    title: "Preamble",
    content: `InsurBe provides access to insurance coverage (hereinafter referred to as "InsurBe Insurance Products" or "InsurBe Insurance Coverage") offered by various insurance companies (hereinafter referred to as "Risk Carriers").

InsurBe enables you to learn about available insurance products through the InsurBe website and InsurBe platform. You can manage your insurance policies digitally through InsurBe.

You will not incur any additional costs for using InsurBe's services. All offers and services provided by InsurBe, including access to the platform, are subject to the following Terms and Conditions.`
  },
  {
    number: "1",
    title: "Scope of Validity",
    content: `These Terms and Conditions apply between you and InsurBe (hereinafter referred to as "InsurBe", "we", "us", or "our") and govern the use of InsurBe's services, website, and platform.`
  },
  {
    number: "2.1",
    title: "Establishment of the Insurance Contract",
    content: `InsurBe acts as an insurance intermediary and facilitates access to insurance products offered by partnered Risk Carriers through its digital platform.

The insurance coverage requested by you shall only become effective once an insurance contract is successfully concluded between you and the respective Risk Carrier. The insurance products displayed on the InsurBe platform do not constitute legally binding offers.

To apply for insurance coverage, you must provide complete and accurate information as requested. You are responsible for promptly updating InsurBe regarding any changes to your personal details (including address, contact number, or email address).

You may not apply for insurance coverage on behalf of a third party unless you are duly authorized and disclose such authority.

By clicking on options such as "Buy Now", "Proceed to Payment", or similar confirmation actions, you submit a legally binding application for the selected insurance product. You will receive confirmation and policy documents electronically once the Risk Carrier accepts your application.`
  },
  {
    number: "2.2",
    title: "Processing of the Contract",
    content: `InsurBe acts as your primary point of contact for policy-related services, including policy management, renewals, modifications, claims support, billing queries, and complaints. Where required, InsurBe will coordinate with the respective Risk Carriers or service providers.

InsurBe insurance products are managed digitally. By using InsurBe's services, you consent to electronic communication, including emails, platform notifications, and calls, for all policy-related matters, including legally relevant communications.

InsurBe reserves the right to modify or discontinue any part of its platform. In such cases, policy documents and records will be made available through alternative electronic means.

For claim settlements, you must provide valid bank account details. Any additional charges arising from non-standard payment methods may be deducted from the claim amount after prior notification.`
  },
  {
    number: "2.3",
    title: "Liability",
    content: `InsurBe's liability for losses caused by slight negligence shall be limited to the extent permitted by applicable law.

InsurBe shall not be liable for indirect or consequential losses arising from minor breaches of non-essential obligations.

These limitations shall not apply to damages arising from gross negligence, willful misconduct, or harm to life, body, or health.

Any limitation of liability shall also apply to InsurBe's employees, representatives, and service partners.`
  },
  {
    number: "4",
    title: "Data Protection",
    content: `InsurBe processes personal data in accordance with applicable data protection laws. Details regarding data collection, processing, storage, and your rights are outlined in InsurBe's Privacy Policy.`
  },
  {
    number: "5",
    title: "Electronic Communication and Security",
    content: `InsurBe primarily communicates electronically using industry-standard security measures, including encrypted transmission protocols. By using InsurBe's services, you consent to electronic communication for contractual and service-related purposes.

You may withdraw this consent at any time; however, this may affect InsurBe's ability to provide services to you.`
  },
  {
    number: "6",
    title: "Amendment of the Terms and Conditions",
    content: `InsurBe may amend these Terms and Conditions for valid reasons, including legal, regulatory, or operational changes. You will be notified of any updates through appropriate communication channels.

Continued use of InsurBe's services after notification shall constitute acceptance of the updated Terms and Conditions, unless you object within the specified notice period.`
  },
  {
    number: "7",
    title: "Final Provisions and Governing Law",
    content: `If any provision of these Terms and Conditions is held invalid, the remaining provisions shall remain unaffected.

These Terms and Conditions shall be governed by and construed in accordance with the applicable laws governing InsurBe's operations.

The place of jurisdiction shall be as determined in accordance with applicable law, unless otherwise required by mandatory legal provisions.`
  }
];

export default function Terms() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-8 lg:px-20 ">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold mb-6 shadow-xl">
            <FileText className="w-5 h-5" />
            Legal Documents
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Last updated: January 20, 2026
          </p>
        </motion.div>

        {/* Glassmorphism Content Container */}
        <div className="  border border-white/40 rounded-3xl  p-8 lg:p-12 space-y-8">
          
          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200/50 mb-12"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>📋</span> Table of Contents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              {termsSections.map((section, index) => (
                <a
                  key={section.number}
                  href={`#section-${section.number}`}
                  className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/50 transition-all hover:shadow-md"
                >
                  <span className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {section.number}
                  </span>
                  <span className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors">
                    {section.title}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Terms Sections */}
          {termsSections.map((section, index) => (
            <motion.section
              key={section.number}
              id={`section-${section.number}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Section Header */}
              <div className="flex items-start gap-4 mb-6 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-purple-50/30 border border-gray-200/50 group-hover:shadow-lg transition-all">
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-xl font-bold text-white">
                      {section.number}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                      {section.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Section Content */}
              <div className="prose prose-lg max-w-none lg:prose-xl">
                <div className="p-8 rounded-3xl bg-white/60 border border-gray-200/50 backdrop-blur-sm shadow-inner">
                  <p className="text-gray-800 leading-relaxed text-lg mb-6 whitespace-pre-line">
                    {section.content}
                  </p>
                  
                  {/* Section Icons */}
                  <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-200/50">
                    {section.number === "0" && (
                      <div className="flex items-center gap-2 px-4 py-2 bg-blue-100/50 rounded-xl border border-blue-200/50">
                        <Shield className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-800">Insurance Intermediary</span>
                      </div>
                    )}
                    {section.number === "2.1" && (
                      <>
                        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100/50 rounded-xl border border-emerald-200/50">
                          <FileText className="w-4 h-4 text-emerald-600" />
                          <span className="text-sm font-medium text-emerald-800">Digital Policy Management</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-purple-100/50 rounded-xl border border-purple-200/50">
                          <Lock className="w-4 h-4 text-purple-600" />
                          <span className="text-sm font-medium text-purple-800">Electronic Confirmation</span>
                        </div>
                      </>
                    )}
                    {section.number === "2.3" && (
                      <div className="flex items-center gap-2 px-4 py-2 bg-orange-100/50 rounded-xl border border-orange-200/50">
                        <Scale className="w-4 h-4 text-orange-600" />
                        <span className="text-sm font-medium text-orange-800">Limited Liability</span>
                      </div>
                    )}
                    {section.number === "4" && (
                      <div className="flex items-center gap-2 px-4 py-2 bg-indigo-100/50 rounded-xl border border-indigo-200/50">
                        <Database className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm font-medium text-indigo-800">GDPR Compliant</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Print / Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-12 border-t-2 border-purple-100/50 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all cursor-pointer mb-6" 
               onClick={() => window.print()}>
            <FileText className="w-5 h-5" />
            Print or Download PDF
          </div>
          
          <div className="max-w-2xl mx-auto space-y-4 text-sm text-gray-600">
            <p>
              Last updated: <span className="font-semibold text-gray-900">January 20, 2026</span>
            </p>
            <p>
              Questions? Contact us at{" "}
              <a href="mailto:support@insurbe.com" className="font-semibold text-purple-600 hover:underline">
                support@insurbe.com
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
