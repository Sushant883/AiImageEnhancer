import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-12 pb-8 px-6 mt-12  border-t dark:border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 dark:text-white mb-3">AIImageEnhancer</h2>
          <p className="text-sm">
            Enhance your images to HD with AI power. Fast, free & effective.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/Features" className="hover:text-blue-500">Features</Link></li>
            <li><Link to="/Pricing" className="hover:text-blue-500">Pricing</Link></li>
            <li><Link to="/Contact" className="hover:text-blue-500">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500">API Docs</a></li>
            <li><a href="#" className="hover:text-blue-500">Blog</a></li>
            <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-500">Community</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-blue-500"><Facebook size={20} /></a>
            <a href="#" className="hover:text-blue-500"><Twitter size={20} /></a>
            <a href="#" className="hover:text-blue-500"><Instagram size={20} /></a>
            <a href="#" className="hover:text-blue-500"><Github size={20} /></a>
          </div>
          <p className="text-sm">support@aiimageenhancer.com</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} AIImageEnhancer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
