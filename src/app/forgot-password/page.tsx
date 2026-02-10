"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-4 p-6 border rounded">
        <h1 className="text-xl font-semibold">Forgot Password</h1>

        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="w-full bg-black text-white py-2 rounded">
          Send reset link
        </button>

        {message && <p className="text-sm text-center">{message}</p>}
      </form>
    </div>
  );
}
