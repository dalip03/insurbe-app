"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

interface ChatWidgetProps {
  onClose: () => void;
}

export default function ChatWidget({ onClose }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Welcome to InsurBe! 👋 I'm here to help you with your insurance questions.",
      sender: "bot",
      timestamp: new Date(),
    },
    {
      id: "2",
      text: "To get started, could you please share your name?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [currentStep, setCurrentStep] = useState<"name" | "email" | "contact" | "message" | "done">("name");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // ✅ Disable body scroll when chat is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // ✅ Auto-focus input when chat opens
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Re-focus input when step changes
  useEffect(() => {
    if (currentStep !== "done") {
      inputRef.current?.focus();
    }
  }, [currentStep]);

  const addMessage = (text: string, sender: "bot" | "user") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSend = () => {
    if (!currentInput.trim()) return;

    addMessage(currentInput, "user");
    const input = currentInput;
    setCurrentInput("");

    setTimeout(() => {
      if (currentStep === "name") {
        setUserData((prev) => ({ ...prev, name: input }));
        addMessage(`Nice to meet you, ${input}! 😊`, "bot");
        setTimeout(() => {
          addMessage("What's your email address?", "bot");
          setCurrentStep("email");
        }, 1000);
      } else if (currentStep === "email") {
        setUserData((prev) => ({ ...prev, email: input }));
        addMessage("Great! What's the best contact number to reach you?", "bot");
        setCurrentStep("contact");
      } else if (currentStep === "contact") {
        setUserData((prev) => ({ ...prev, contact: input }));
        addMessage("Perfect! How can we help you today?", "bot");
        setCurrentStep("message");
      } else if (currentStep === "message") {
        setUserData((prev) => ({ ...prev, message: input }));
        addMessage(
          "Thank you! We've received your message. Our team will get back to you within 24 hours. 🎉",
          "bot"
        );
        setCurrentStep("done");
      }
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <AnimatePresence>
      {/* Backdrop with blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
        onClick={onClose}
      >
        {/* ✅ Chat positioned responsive: fullscreen on mobile, bottom-right on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 100, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, y: 20 }}
          transition={{ type: "spring", damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="absolute inset-4 md:inset-auto md:bottom-4 md:right-4 bg-white rounded-2xl shadow-2xl w-auto md:w-full md:max-w-md h-auto md:h-[600px] flex flex-col"
        >
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-2xl flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base">Insurbe Support</h3>
                <p className="text-xs text-white/80">Online</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-2 transition cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-gray-50">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] md:max-w-[80%] rounded-2xl px-3 md:px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-primary text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none shadow-sm"
                  }`}
                >
                  <p className="text-sm md:text-base">{message.text}</p>
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          {currentStep !== "done" && (
            <div className="p-3 md:p-4 border-t bg-white rounded-b-2xl flex-shrink-0">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 border-2 border-gray-200 rounded-full px-3 md:px-4 py-2 text-sm md:text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-text transition"
                />
                <button
                  onClick={handleSend}
                  disabled={!currentInput.trim()}
                  className="bg-primary text-white rounded-full p-2 md:p-3 hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition cursor-pointer flex-shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Done state with close button */}
          {currentStep === "done" && (
            <div className="p-3 md:p-4 border-t bg-white rounded-b-2xl flex-shrink-0">
              <button
                onClick={onClose}
                className="w-full bg-primary text-white rounded-full py-3 hover:bg-primary/90 transition font-semibold cursor-pointer text-sm md:text-base"
              >
                Close Chat
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
