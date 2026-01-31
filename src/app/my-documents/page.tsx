"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, Clock, ShieldCheck, Eye, Calendar, User, Mail } from "lucide-react";
import Image from "next/image";

export default function MyDocumentsPage() {
  const [activeTab, setActiveTab] = useState("active");

  // Mock policy data
  const documents = [
    {
      id: "1",
      type: "Versicherungsschein",
      title: "Health Insurance Certificate (POL-2026-001)",
      status: "active",
      expiry: "31.12.2027",
      issued: "15.01.2026",
      fileUrl: "/documents/versicherungsschein-pol-2026-001.pdf",
      icon: FileText,
    },
    {
      id: "2",
      type: "Rechnungsübersicht",
      title: "Premium Invoice January 2026",
      status: "paid",
      expiry: "-",
      issued: "01.01.2026",
      fileUrl: "/documents/invoice-jan-2026.pdf",
      icon: Download,
    },
    {
      id: "3",
      type: "Rückerstattung",
      title: "Doctor Visit Reimbursement #REF-2026-045",
      status: "processing",
      expiry: "-",
      issued: "20.01.2026",
      fileUrl: "/documents/reimbursement-045.pdf",
      icon: Clock,
    },
    {
      id: "4",
      type: "Policenbedingungen",
      title: "General Terms & Conditions v3.2",
      status: "active",
      expiry: "-",
      issued: "01.01.2026",
      fileUrl: "/documents/policy-terms-v3.2.pdf",
      icon: ShieldCheck,
    },
  ];

  const tabs = [
    { id: "active", label: "Aktive Dokumente", count: 2 },
    { id: "expired", label: "Abgelaufene", count: 0 },
    { id: "claims", label: "Rechnungen", count: 2 },
  ];

  const handleDownload = (fileUrl: string, filename: string) => {
    // Mock download - replace with actual download logic
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = filename;
    link.click();
  };

  const handlePreview = (fileUrl: string) => {
    // Mock preview - replace with modal or PDF viewer
    window.open(fileUrl, "_blank");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-6">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Sichere Dokumente</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Your Documents
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access your Versicherungsschein, invoices, claims, and policy documents anytime.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-xl"
          >
            <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">4</div>
              <div className="text-sm text-gray-600">Total Documents</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-xl"
          >
            <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">1</div>
              <div className="text-sm text-gray-600">Processing</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-xl"
          >
            <Download className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-600">Downloads Available</div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl overflow-hidden mb-8">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 px-6 text-center font-semibold transition-all ${
                  activeTab === tab.id
                    ? "border-b-2 border-blue-600 text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {tab.label} <span className="text-sm font-normal">({tab.count})</span>
              </button>
            ))}
          </div>

          {/* Documents List */}
          <div className="p-8">
            <div className="space-y-4">
              {documents.map((doc) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="group bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl group-hover:scale-105 transition">
                        <doc.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">{doc.title}</div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>Status: <span className={`font-medium ${
                            doc.status === "active" ? "text-green-600" : 
                            doc.status === "paid" ? "text-green-600" : "text-orange-600"
                          }`}>{doc.status}</span></span>
                          <span>Erstellt: {doc.issued}</span>
                          {doc.expiry !== "-" && <span>Läuft ab: {doc.expiry}</span>}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handlePreview(doc.fileUrl)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        title="Vorschau"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDownload(doc.fileUrl, doc.title + ".pdf")}
                        className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                        title="Download"
                      >
                        <Download className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {documents.length === 0 && (
              <div className="text-center py-16">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Keine Dokumente gefunden</h3>
                <p className="text-gray-600 mb-6">Ihre Dokumente werden hier angezeigt.</p>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                  Policy anfragen
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all cursor-pointer group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-xl">
                <User className="w-6 h-6 text-green-600" />
              </div>
              <Calendar className="w-6 h-6 text-gray-400 group-hover:text-green-600 transition" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Neue Rechnung einreichen</h3>
            <p className="text-gray-600 mb-4">Hochladen und Rückerstattung beantragen</p>
            <button className="w-full py-3 rounded-xl bg-green-600 text-white font-semibold hover:shadow-lg transition-all group-hover:bg-green-700">
              Jetzt einreichen
            </button>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all cursor-pointer group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <Calendar className="w-6 h-6 text-gray-400 group-hover:text-primary transition" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Versicherungsschein anfordern</h3>
            <p className="text-gray-600 mb-4">Sofort als PDF per E-Mail</p>
            <button className="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:shadow-lg transition-all group-hover:bg-blue-700">
              Jetzt senden
            </button>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all cursor-pointer group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <ShieldCheck className="w-6 h-6 text-purple-600" />
              </div>
              <Calendar className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Alle Dokumente drucken</h3>
            <p className="text-gray-600 mb-4">Komplettpaket als ZIP-Datei</p>
            <button className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold hover:shadow-lg transition-all group-hover:bg-purple-700">
              ZIP Download
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
