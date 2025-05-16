import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./components/Home.jsx";
import Features from "./pages/Features.jsx";
import Pricing from "./pages/Pricing.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import ApiDocs from "./FooterContent/ApiDocumentatino.jsx";
import BlogPage from "./FooterContent/BlogPage.jsx";
import HelpCenter from "./FooterContent/HelpCenter.jsx";
import Community from "./FooterContent/Community.jsx";
// import "./App.css";

const App = () => {
  // const [count, setCount] = useState(0)
  return (
    <div
      className="flex flex-col items-center
    min-h-screen bg-gray-100"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ApiDocs" element={<ApiDocs />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/HelpCenter" element={<HelpCenter />} />
        <Route path="/Community" element={<Community />} />
      </Routes>

      {/* <Home /> */}

      <Footer />
    </div>
  );
};

export default App;
