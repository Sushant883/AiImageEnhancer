import React from "react";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Home from "./components/Home.jsx";
// import "./App.css";

const App = ()=> {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center
    min-h-screen bg-gray-100 py-8 px-4">

      Header 

      <Home />

      footer
    </div>
  );
}

export default App;
