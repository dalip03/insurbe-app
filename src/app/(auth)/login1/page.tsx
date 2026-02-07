"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Shield,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    console.log({
      mode,
      email,
      password,
    });

    alert(
      mode === "login" ? "Login submitted (demo)" : "Signup submitted (demo)",
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 px-4 py-8 sm:py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 relative z-10 border border-white/50"
      >
        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradiprimaryfrompurple-600 to-purple-600 rounded-full blur-2xl opacity-40"></div>
        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-40"></div>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6 sm:mb-8"
        >
          {/* Logo/Icon */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-primary to-purple-600 mb-4 shadow-lg"
          >
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </motion.div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            {mode === "login" ? (
              <>
                Welcome{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                  back
                </span>
              </>
            ) : (
              <>
                Create your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                  account
                </span>
              </>
            )}
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            {mode === "login"
              ? "Access your policies and documents"
              : "Get started with your insurance journey"}
          </p>
        </motion.div>

        {/* SWITCH */}
        <div className="relative bg-gray-100 rounded-full p-1 flex mb-6 sm:mb-8">
          <motion.div
            layout
            className="absolute top-1 bottom-1 w-1/2 rounded-full bg-gradient-to-r from-primary to-purple-600 shadow-lg"
            initial={false}
            animate={{ x: mode === "login" ? 0 : "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          <button
            onClick={() => setMode("login")}
            className={`relative w-1/2 py-2 sm:py-3 text-sm sm:text-base font-bold z-10 transition-colors ${
              mode === "login" ? "text-white" : "text-gray-500"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setMode("signup")}
            className={`relative w-1/2 py-2 sm:py-3 text-sm sm:text-base font-bold z-10 transition-colors ${
              mode === "signup" ? "text-white" : "text-gray-500"
            }`}
          >
            Sign up
          </button>
        </div>

        {/* FORM */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 sm:space-y-5"
          >
            {/* EMAIL */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 focus:outline-none transition-all text-sm sm:text-base"
                />
              </div>
            </motion.div>

            {/* PASSWORD */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 focus:outline-none transition-all text-sm sm:text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </motion.div>

            {/* FORGOT PASSWORD (Login only) */}
            {mode === "login" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-right"
              >
                <button className="text-sm text-purple-600 hover:text-purple-700 font-semibold hover:underline transition">
                  Forgot password?
                </button>
              </motion.div>
            )}

            {/* EXTRA FOR SIGNUP */}
            {mode === "signup" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3"
              >
                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-gray-700">
                    By creating an account, you agree to our{" "}
                    <span className="font-semibold text-purple-600">
                      Terms & Privacy Policy
                    </span>
                    .
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-2">
                  {[
                    "Digital policy management",
                    "24/7 customer support",
                    "Instant claims processing",
                  ].map((benefit, idx) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="flex items-center gap-2 text-xs sm:text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-purple-600"></div>
                      {benefit}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* SUBMIT */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              className="
                relative w-full py-3 sm:py-4 rounded-full 
                bg-gradient-to-r from-primary to-purple-700 
                text-white font-bold text-sm sm:text-base
                shadow-lg hover:shadow-xl hover:shadow-purple-500/50
                transition-all duration-300
                overflow-hidden group
              "
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <span className="relative z-10 flex items-center justify-center gap-2">
                {mode === "login" ? "Log in" : "Create account"}
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* DIVIDER */}
        <div className="relative my-6 sm:my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-xs sm:text-sm">
            <span className="px-4 bg-white/80 text-gray-500 font-medium">
              or continue with
            </span>
          </div>
        </div>

        {/* SOCIAL LOGIN */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all text-sm sm:text-base font-semibold"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="hidden sm:inline">Google</span>
          </motion.button>

          {/* <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all text-sm sm:text-base font-semibold"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </motion.button> */}
        </div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              <span>Secure</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
            <span>GDPR compliant</span>
            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
            <span>Cancel anytime</span>
          </div>

          <p className="text-xs text-gray-400">
            © 2024 InsurBe. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
