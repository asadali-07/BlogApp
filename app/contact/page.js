
import React from 'react';

const ContactPage = () => {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-lg border border-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-purple-500 animate-fadeIn">Contact Us</h2>
        <form className="space-y-6 animate-slideUp">
          <div className="animate-fadeIn">
            <label className="block text-purple-500 font-semibold">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:scale-105"
              placeholder="Your Name"
            />
          </div>
          <div className="animate-fadeIn">
            <label className="block text-purple-500 font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:scale-105"
              placeholder="Your Email"
            />
          </div>
          <div className="animate-fadeIn">
            <label className="block text-purple-500 font-semibold">Message</label>
            <textarea
              className="w-full px-4 py-2 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:scale-105"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:bg-gradient-to-l hover:from-purple-600 hover:to-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactPage;