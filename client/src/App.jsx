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
        <Route path="/" element={<Home />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>


      {/* <Home /> */}

     
      
    </div>
  );
};

export default App;
