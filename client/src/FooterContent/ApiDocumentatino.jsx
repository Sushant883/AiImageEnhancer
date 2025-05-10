import React, { useState, useEffect } from "react";

function ApiDocs() {
  // State to track screen width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect to update the windowWidth on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive style logic based on screen width
  const containerStyle = {
    backgroundColor: "#f7fafc",
    padding: windowWidth <= 768 ? "16px" : "24px", // Adjust padding on smaller screens
  };

  const headingStyle = {
    fontSize: windowWidth <= 768 ? "20px" : "24px", // Adjust font size for small screens
    fontWeight: "bold",
    color: "#3182ce",
    textAlign: "center",
    marginBottom: "24px",
  };

  const rowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    justifyContent: "space-between",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    padding: windowWidth <= 768 ? "12px" : "16px", // Adjust padding inside cards
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    width: windowWidth <= 768 ? "100%" : "30%", // Adjust width to 100% for small screens, 30% for larger screens
    fontSize: windowWidth <= 768 ? "14px" : "16px", // Adjust font size inside cards
  };

  const preStyle = {
    backgroundColor: "#2d3748",
    color: "#68d391",
    padding: "12px",
    borderRadius: "8px",
    fontSize: windowWidth <= 768 ? "12px" : "14px", // Adjust font size inside pre tags
    overflowX: "auto",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>📘 API Documentation</h1>

      {/* Row with 3 Boxes */}
      <div style={rowStyle}>
        {/* Box 1 */}
        <div style={cardStyle}>
          <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#3182ce", marginBottom: "8px" }}>
            GET /api/users
          </h2>
          <p style={{ marginBottom: "16px", color: "#2d3748" }}>Fetch all registered users.</p>
          <h3 style={{ fontSize: "14px", fontWeight: "500", color: "#4a5568", marginBottom: "8px" }}>Request:</h3>
          <pre style={preStyle}>curl -X GET https://yourdomain.com/api/users</pre>
        </div>

        {/* Box 2 */}
        <div style={cardStyle}>
          <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#3182ce", marginBottom: "8px" }}>
            POST /api/login
          </h2>
          <p style={{ marginBottom: "16px", color: "#2d3748" }}>Login user and get JWT token.</p>
          <h3 style={{ fontSize: "14px", fontWeight: "500", color: "#4a5568", marginBottom: "8px" }}>Request:</h3>
          <pre style={preStyle}>
            curl -X POST https://yourdomain.com/api/login -H "Content-Type: application/json" -d {'{ "email": "sushant@example.com", "password": "123456" }'}
          </pre>
        </div>

        {/* Box 3 */}
        <div style={cardStyle}>
          <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#3182ce", marginBottom: "8px" }}>
            GET /api/products
          </h2>
          <p style={{ marginBottom: "16px", color: "#2d3748" }}>Fetch all available products.</p>
          <h3 style={{ fontSize: "14px", fontWeight: "500", color: "#4a5568", marginBottom: "8px" }}>Request:</h3>
          <pre style={preStyle}>curl -X GET https://yourdomain.com/api/products</pre>
        </div>
      </div>

      {/* You can repeat the above blocks for more endpoints if needed */}
    </div>
  );
}

export default ApiDocs;
