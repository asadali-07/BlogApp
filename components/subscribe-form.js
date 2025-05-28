"use client";
import React, { useState } from "react";

const SubscribeForm = ({ isMobile = false }) => {
  const [status, setStatus] = useState("idle"); // idle | loading | success
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    if (!email) return;

    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail(""); // Clear input
      setTimeout(() => setStatus("idle"), 2000); // Reset after 2s
    }, 500);
  };

  const InputAndButton = (
    <>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800"
        required
        disabled={status === "loading" || status === "success"}
      />
      <button
        onClick={handleSubmit}
        className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 my-4 px-4 rounded-lg transition-colors whitespace-nowrap disabled:opacity-60"
        disabled={status === "loading" || status === "success"}
      >
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>
    </>
  );

  const Message =
    status === "success" && (
      <p className="text-green-600 dark:text-green-400 text-sm mt-2">
        You&apos;ve successfully subscribed!
      </p>
    );

  const containerClass =
    "bg-purple-100/50 dark:bg-purple-900/20 backdrop-blur-sm rounded-2xl shadow-xl p-6";

  if (isMobile) {
    return (
      <div className={`mt-8 ${containerClass}`}>
        <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">
          Subscribe
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
          Get notified about new articles
        </p>
          {InputAndButton}
        {Message}
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4">
        Subscribe to Newsletter
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Stay updated with our latest articles and news.
      </p>
        {InputAndButton}
      {Message}
    </div>
  );
};

export default SubscribeForm;

