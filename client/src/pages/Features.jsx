import React from 'react';

const features = [
  { title: "AI-Powered Enhancement", desc: "Automatically improve image quality using deep learning." },
  { title: "Noise Reduction", desc: "Eliminate grain and blur while retaining natural detail." },
  { title: "Color Correction", desc: "Fix brightness, contrast, and saturation in one click." },
  { title: "Batch Processing", desc: "Enhance multiple images simultaneously with blazing speed." },
];

const Features = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-12 text-center">Features</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {features.map((f, index) => (
          <div key={index} className="p-6 border rounded-xl bg-white dark:bg-[#1a1a1a] shadow-md transition hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{f.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
