import React from "react";
import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";

export const Footer = React.memo(() => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 w-full">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-gray-100">About ZenFlow</h3>
          <p className="text-sm text-gray-400">
            ZenFlow is a powerful project management tool that helps you
            streamline your tasks, track progress, and achieve your goals
            effortlessly.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-gray-100">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/features" className="text-gray-400 hover:text-gray-100">
                Features
              </a>
            </li>
            <li>
              <a href="/testimonials" className="text-gray-400 hover:text-gray-100">
                Testimonials
              </a>
            </li>
            <li>
              <a href="/pricing" className="text-gray-400 hover:text-gray-100">
                Pricing
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-gray-100">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-gray-100">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400"
            >
              <FiTwitter size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600"
            >
              <FiFacebook size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500"
            >
              <FiInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        <p>&copy; 2024 ZenFlow. All rights reserved.</p>
      </div>
    </footer>
  );
});