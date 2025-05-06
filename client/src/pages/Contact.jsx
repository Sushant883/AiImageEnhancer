import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-10 text-center text-black">Contact Us</h1>
      <form className="space-y-6 bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-xl">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full border px-4 py-2 rounded-md dark:bg-[#121212] dark:border-gray-700 dark:text-white"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border px-4 py-2 rounded-md dark:bg-[#121212] dark:border-gray-700 dark:text-white"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            rows="4"
            className="w-full border px-4 py-2 rounded-md dark:bg-[#121212] dark:border-gray-700 dark:text-white"
            placeholder="How can we help you?"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
