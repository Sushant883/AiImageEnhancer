import React from "react";

const features = [
  {
    title: "AI-Powered Enhancement",
    desc: "Automatically improve image quality using deep learning.",
  },
  {
    title: "Noise Reduction",
    desc: "Eliminate grain and blur while retaining natural detail.",
  },
  {
    title: "Color Correction",
    desc: "Fix brightness, contrast, and saturation in one click.",
  },
  {
    title: "Batch Processing",
    desc: "Enhance multiple images simultaneously with blazing speed.",
  },
];

const Features = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-gray-900 dark:text-white border border-red-300 min-h-screen flex flex-col justify-between">
      <h1 className="text-4xl font-bold mb-12 text-center text-black">
        Features
      </h1>
      <div className="grid gap-8 md:grid-cols-2
      border border-red-400
      ">
        {features.map((f, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl bg-white dark:bg-[#1a1a1a] shadow-md transition hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-2">{f.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg font-medium mb-4">
            "Empower your images with the power of AI. Enhance, restore, and
            transform like never before."
          </p>
          <p className="text-sm text-gray-400">
            AIImageEnhancer – Your image, reimagined with artificial
            intelligence.
          </p>
        </div>
      </div>



    </div>
  );
};

export default Features;
