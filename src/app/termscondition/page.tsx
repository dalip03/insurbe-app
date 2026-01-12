"use client";

import { motion } from "framer-motion";

export default function Terms() {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto  p-6 sm:p-10"
      >
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-8">
          These terms and conditions govern your use of our website. By accessing
          or using this website, you accept these terms and conditions in full.
        </p>

        {/* Sections */}
        <div className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              1. Use of Website
            </h2>
            <p>
              You must not use our website in any way that causes, or may cause,
              damage to the website or impairment of the availability or
              accessibility of the website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              2. Account Registration
            </h2>
            <p>
              You must ensure that all details provided during registration or at
              any time are accurate, current, and complete. You are responsible
              for maintaining the confidentiality of your account information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              3. Service Provision
            </h2>
            <p>
              We provide an online platform that allows users to compare and
              purchase insurance products from various third-party providers.
              We do not underwrite insurance policies ourselves unless explicitly
              stated.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              4. Intellectual Property
            </h2>
            <p>
              Unless otherwise stated, we or our licensors own the intellectual
              property rights in the website and all material on the website.
              You may not reproduce, distribute, or modify any content without
              prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              5. Liability Limitations
            </h2>
            <p>
              We will not be liable for any loss or damage of any nature arising
              from the use of this website. We are not responsible for indirect
              or consequential losses which occur as a side effect of the main
              loss or damage.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              6. Governing Law
            </h2>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of Germany. Any disputes relating to
              these terms shall be subject to the exclusive jurisdiction of the
              German courts.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <p>
            If you have any questions regarding these Terms & Conditions, please
            contact our support team.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
