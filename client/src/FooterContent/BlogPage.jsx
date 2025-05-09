// src/components/BlogPage.jsx
import React from "react";

const BlogPage = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Latest Blog Posts</h1>

        {/* Blog Card 1 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-10 hover:shadow-xl transition-shadow">
          <img
            src="https://source.unsplash.com/1200x600/?technology,ai"
            alt="AI Blog"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              How AI is Changing the Future of Technology
            </h2>
            <p className="text-sm text-gray-500 mb-3">Published on May 9, 2025</p>
            <p className="text-gray-700">
              Artificial Intelligence (AI) is no longer science fiction. From image enhancement to chatbots, AI is reshaping the digital landscape with incredible speed and accuracy. In this post, we dive into how AI tools are transforming industries in 2025.
            </p>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-10 hover:shadow-xl transition-shadow">
          <img
            src="https://images.unsplash.com/photo-1581093588401-14045c4b6d1a?auto=format&fit=crop&w=1200&q=80"
            alt="React Blog"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Why React is Still the King of Frontend in 2025
            </h2>
            <p className="text-sm text-gray-500 mb-3">Published on April 28, 2025</p>
            <p className="text-gray-700">
              React continues to dominate the frontend world due to its performance, reusable components, and strong community. In this article, we’ll explore what’s new in React 19 and how it makes web development faster and easier than ever before.
            </p>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col md:flex-row">
          <img
            src="src/Images/pexels-tara-winstead-8849295.jpg"
            alt="JS Blog"
            className="h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              5 JavaScript Tools Every Developer Should Know
            </h2>
            <p className="text-sm text-gray-500 mb-3">Published on April 18, 2025</p>
            <p className="text-gray-700">
              Modern JavaScript development relies on powerful tools. Whether it's ESLint for code linting or Vite for blazing fast builds, these tools can save hours of development time and improve code quality significantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
