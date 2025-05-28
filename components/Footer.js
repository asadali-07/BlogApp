"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  const [status, setStatus] = useState("idle"); // idle | loading | success
  const [email, setEmail] = useState("");

  const currentYear = new Date().getFullYear();
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

  return (
    <footer className="bg-background/50 backdrop-blur border-t border-purple-100 dark:border-purple-900/30 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Logo and info column */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/blogging.png"
                alt="logo"
                width={32}
                height={32}
                className="transition-transform duration-500 hover:rotate-12"
              />
              <span className="text-xl font-bold">
                <span className="font-normal italic">Blog</span>
                <span className="text-xs align-top ml-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-1.5 py-0.5 rounded-full">
                  AI
                </span>
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-xs">
              Exploring the fascinating world of artificial intelligence,
              programming, and cutting-edge technology.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <h2 className="text-lg font-semibold mb-5 text-purple-500 relative inline-block">
              Navigation
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-purple-500/50"></span>
            </h2>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                    <span className="ml-2">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h2 className="text-lg font-semibold mb-5 text-purple-500 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-purple-500/50"></span>
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 text-purple-500 w-5"></i>
                <span className="ml-2 text-gray-600 dark:text-gray-300">
                  Rogan Gran, Shamli, UttarPradesh, 247777
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-purple-500 w-5"></i>
                <a
                  href="mailto:mo.asadali007@gmail.com"
                  className="ml-2 text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                >
                  mo.asadali007@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt text-purple-500 w-5"></i>
                <span className="ml-2 text-gray-600 dark:text-gray-300">
                  +91-9027171598
                </span>
              </li>

              {/* Social links */}
              <li className="pt-3">
                <div className="flex space-x-4 mt-1">
                  <a
                    href="mailto:mo.asadali007@gmail.com"
                    className="bg-purple-100 dark:bg-purple-900/30 text-purple-500 dark:text-purple-400 p-2 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors transform hover:-translate-y-1 duration-200"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/heyy.asad__/"
                    className="bg-purple-100 dark:bg-purple-900/30 text-purple-500 dark:text-purple-400 p-2 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors transform hover:-translate-y-1 duration-200"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohd-asad-ali-1a7693257/"
                    className="bg-purple-100 dark:bg-purple-900/30 text-purple-500 dark:text-purple-400 p-2 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors transform hover:-translate-y-1 duration-200"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter signup - Added feature */}
        <div className="mt-12 py-6 px-6 bg-purple-50 dark:bg-purple-900/10 rounded-xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                Subscribe to our newsletter
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Get the latest AI insights delivered to your inbox
              </p>
            </div>
            <div className="w-full md:w-auto flex-1 max-w-md">
              <div className="flex justify-center items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-2 mx-2 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800"
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
              </div>
              {status === "success" && (
                <p className="text-green-500 dark:text-green-400 text-sm mt-2 text-center">
                  Thank you for subscribing!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200 dark:border-gray-800"></div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-500 dark:text-gray-400 text-sm">
          <p>&copy; {currentYear} AI Blog. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <Link
              href="/privacy"
              className="hover:text-purple-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-purple-500 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-purple-500 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
