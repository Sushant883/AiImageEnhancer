import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./components/Home.jsx";
import Features from "./pages/Features.jsx";
import Pricing from "./pages/Pricing.jsx";
import Contact from "./pages/Contact.jsx";

import Navbar from "./components/Navbar.jsx";

import Home from "./components/Home.jsx";
// import "./App.css";

const App = () => {
  // const [count, setCount] = useState(0)
  return (
    <div
      className="flex flex-col items-center justify-center
    min-h-screen bg-gray-100 py-8 px-4 "
    >
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Features" element={<Features />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">
          AI Image Enhancer{" "}
        </h1>
        <p className="text-lg text-gray-500">
          {" "}
          Upload your Image and let AI enhance to in seconds !
        </p>
      </div>

      <Home />

      <div className="text-lg text-gray-500 mt-6">
        This is the platform which is give 4k quality image
      </div>

      
    </div>
  );
};

export default App;
