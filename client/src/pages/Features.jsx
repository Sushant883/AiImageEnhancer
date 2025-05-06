import { AlignStartHorizontal } from "lucide-react";
import React from "react";

const Feature = () => {
  return (
    <div
      style={{
        width: "100%",
        // padding: "40px",
        // height: "100vh",
        // border: "10px solid red",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-evenly",
        // alignItems: "center",
      }}
    >
      <h2 style={{ fontSize: "28px",
        // border: "1px solid gray",
        marginTop:"10px",
        marginBottom:"100px",
       }}>Key Features</h2>

      <div
        style={{
          display: "flex",
          // border: "3px solid red",
          // flexDirection: "column",
          justifyContent: "center",
          // alignItems: "center",
          // flexWrap: "wrap",
          marginBottom: "100px",
          gap: "20px",
          width:"100%",
          // maxWidth: "600px",
        }}
      >
        <div
          style={{
            border: "1px solid gray",
            cursor: "pointer",
            padding: "15px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <h3>AI Image Enhancement</h3>
          <p>Improve image quality using artificial intelligence.</p>
        </div>

        <div
          style={{
            border: "1px solid gray",
            cursor: "pointer",
            padding: "15px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <h3>One-Click Fix</h3>
          <p>Enhance brightness, contrast, and sharpness instantly.</p>
        </div>

        <div
          style={{
            cursor: "pointer",
            border: "1px solid gray",
            padding: "15px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <h3>Free to Use</h3>
          <p>Upload and enhance images without any cost.</p>
        </div>
        <div
          style={{
            cursor: "pointer",
            padding: "15px",
            border: "1px solid gray",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <h3>Free to Use</h3>
          <p>Upload and enhance images without any cost.</p>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center ">
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

export default Feature;
