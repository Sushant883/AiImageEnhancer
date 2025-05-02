import React from "react";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from "./components/Home.jsx";
// import "./App.css";

const App = ()=> {
  // const [count, setCount] = useState(0)

  return (
    <div style={
      {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }
    }>

      Header 

      <Home />

      footer
    </div>
  );
}

export default App;
