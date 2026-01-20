"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Database, 
  User, 
  Lock, 
  Share, 
  AlertCircle, 
  FileText, 
  Scale, 
  Mail
} from "lucide-react";

const privacySections = [
  {
    number: "1",
    title: "Introduction",
    icon: User,
    content: `Welcome to Insurbe. We are committed to safeguarding the privacy of our website visitors and service users. This policy applies where we are acting as a data controller with respect to the personal data of our website visitors and service users; in other words, where we determine the purposes and means of the processing of that personal data.`,
    badges: ["Data Controller", "User Privacy"]
  },
  {
    number: "2",
    title: "Information We Collect",
    icon: Database,
    content: `When you use our services, we collect information you provide directly. For example, we gather information when you fill out a form on our website. The types of information we might collect include your name, email address, telephone number, company details, and specific feedback information. We do not require users to create an account or sign up to access our website or services.`,
    badges: ["Direct Input", "No Account Required"]
  },
  {
    number: "3",
    title: "How We Use the Information",
    icon: Shield,
    content: `We use the information collected from our services to improve them, develop new ones, and to cater our services to our user's needs more effectively. We use this data to provide a personalized experience and provide more relevant content and services.`,
    badges: ["Service Improvement", "Personalization"]
  },
  {
    number: "4",
    title: "Information We Share",
    icon: Share,
    content: `At Insurbe, we respect your privacy and the confidentiality of your information is critical to us. We do not share your personal information with any third parties, unless necessary for legal reasons. We do use tools for analysis and processing, which is monitored by our staff. This occurs only if we have a good-faith belief that the access, use, preservation, or disclosure of the information is reasonably necessary to meet any applicable law, regulation, legal process, or enforceable governmental request.`,
    badges: ["No Third Party Sharing", "Legal Compliance Only"]
  },
  {
    number: "5",
    title: "Security",
    icon: Lock,
    content: `We prioritize the security of your information. We have implemented measures to protect the information we collect from unauthorized access, alteration, disclosure, or destruction.`,
    badges: ["Data Protection", "Security Measures"]
  },
  {
    number: "6",
    title: "Changes to this Policy",
    icon: AlertCircle,
    content: `We may revise our Privacy Policy from time to time. We will post any changes to the Privacy Policy on this page. We will not reduce your rights under this Privacy Policy without your explicit consent.`,
    badges: ["Policy Updates", "User Rights Protected"]
  },
  {
    number: "7",
    title: "GDPR Compliance",
    icon: Scale,
    content: [
      `Your GDPR Rights:`,
      `• Right to Access: You have the right to request copies of your personal data.`,
      `• Right to Rectification: You can request that Insurbe corrects any information you believe is inaccurate and complete information you believe is incomplete.`,
      `• Right to Erasure: Under certain conditions, you can request the removal of your personal data.`,
      `• Data Portability: You have the right to request that Insurbe transfer the data we have collected to another organization, or directly to you, under certain conditions.`,
      `• Consent Management: We ensure that your consent is explicitly sought for processing data and that you can withdraw your consent at any time.`
    ],
    badges: ["GDPR Compliant", "6 Core Rights"]
  }
];

export default function PrivacyPolicy() {
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
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold mb-6 shadow-xl">
            <Lock className="w-5 h-5" />
            Privacy & Data Protection
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Privacy Policy
          </h1>
          <div className="backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/50 inline-block">
            <p className="text-lg text-gray-700">
              © 2026 InsurBe AI LTD – Company Number xxxxxxxx
            </p>
            <p className="text-sm text-indigo-600 font-semibold">
              Last updated: January 20, 2026
            </p>
          </div>
        </motion.div>

        {/* Glassmorphism Content Container */}
        <div className=" border border-white/40 rounded-3xl  p-8 lg:p-12 space-y-8">
          
          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200/50 mb-12"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              📋 Table of Contents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              {privacySections.map((section) => (
                <a
                  key={section.number}
                  href={`#privacy-${section.number}`}
                  className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/50 transition-all hover:shadow-md"
                >
                  <span className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {section.number}
                  </span>
                  <span className="font-medium text-gray-800 group-hover:text-indigo-600 transition-colors flex-1">
                    {section.title}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Privacy Sections */}
          {privacySections.map((section, index) => (
            <motion.section
              key={section.number}
              id={`privacy-${section.number}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Section Header */}
              <div className="flex items-start gap-4 mb-6 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-indigo-50/30 border border-gray-200/50 group-hover:shadow-lg transition-all">
                <div className="p-3 bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                    {section.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {section.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-xs font-semibold text-indigo-800 border border-indigo-200/50"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section Content */}
              <div className="prose prose-lg max-w-none lg:prose-xl">
                <div className="p-8 rounded-3xl bg-white/60 border border-gray-200/50 backdrop-blur-sm shadow-inner">
                  {Array.isArray(section.content) ? (
                    <div className="space-y-4 text-lg leading-relaxed text-gray-800">
                      {section.content.map((paragraph, idx) => (
                        <p key={idx} className="whitespace-pre-line">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-800 leading-relaxed text-lg mb-6 whitespace-pre-line">
                      {section.content}
                    </p>
                  )}
                  
                  {/* GDPR Rights List - Special styling */}
                  {section.number === "7" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-200/50">
                      {[
                        "Right to Access",
                        "Right to Rectification", 
                        "Right to Erasure",
                        "Data Portability",
                        "Consent Management"
                      ].map((right, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/30">
                          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                            <span className="text-white font-bold text-sm">{idx + 1}</span>
                          </div>
                          <span className="text-gray-800 font-medium">{right}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          ))}

        </div>

        {/* Footer Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-12 border-t-2 border-indigo-100/50 text-center"
        >
          <div 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all cursor-pointer mb-6 mx-auto max-w-max"
            onClick={() => window.print()}
          >
            <FileText className="w-5 h-5" />
            Print or Download PDF
          </div>
          
          <div className="max-w-2xl mx-auto space-y-3 text-sm text-gray-600">
            <p>
              Last updated: <span className="font-semibold text-gray-900">January 20, 2026</span>
            </p>
            <p className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-center text-center">
              Questions about your data? Contact our{" "}
              <a href="mailto:privacy@insurbe.com" className="font-semibold text-indigo-600 hover:underline flex items-center gap-1">
                Data Protection Officer
                <Mail className="w-4 h-4 inline" />
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
