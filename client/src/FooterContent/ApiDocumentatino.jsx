import React from "react";

function ApiDocs() {
  return (
    <div style={{ backgroundColor: "#f7fafc", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{
        fontSize: "24px", 
        fontWeight: "bold", 
        color: "#3182ce", 
        textAlign: "center", 
        marginBottom: "24px"
      }}>
        📘 API Documentation
      </h1>

      {/* Container for API Endpoints */}
      <div style={{ marginBottom: "24px" }}>

        {/* Endpoint 1 */}
        <div style={{
          backgroundColor: "#ffffff", 
          padding: "16px", 
          borderRadius: "8px", 
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)", 
          marginBottom: "24px"
        }}>
          <h2 style={{
            fontSize: "20px", 
            fontWeight: "600", 
            color: "#3182ce", 
            marginBottom: "8px"
          }}>
            GET /api/users
          </h2>
          <p style={{ marginBottom: "16px", color: "#2d3748", fontSize: "14px" }}>
            Fetch all registered users.
          </p>

          <div style={{ marginBottom: "16px" }}>
            <h3 style={{
              fontSize: "14px", 
              fontWeight: "500", 
              color: "#4a5568", 
              marginBottom: "8px"
            }}>
              Request:
            </h3>
            <pre style={{
              backgroundColor: "#2d3748", 
              color: "#68d391", 
              padding: "12px", 
              borderRadius: "8px", 
              fontSize: "12px", 
              overflowX: "auto"
            }}>
              curl -X GET https://yourdomain.com/api/users
            </pre>
          </div>

          <div>
            <h3 style={{
              fontSize: "14px", 
              fontWeight: "500", 
              color: "#4a5568", 
              marginTop: "16px", 
              marginBottom: "8px"
            }}>
              Response:
            </h3>
            <pre style={{
              backgroundColor: "#2b6cb0", 
              color: "#bee3f8", 
              padding: "12px", 
              borderRadius: "8px", 
              fontSize: "12px", 
              overflowX: "auto"
            }}>
              [{` { "id": 1, "name": "Sushant", "email": "sushant@example.com" } `}]
            </pre>
          </div>
        </div>

        {/* Endpoint 2 */}
        <div style={{
          backgroundColor: "#ffffff", 
          padding: "16px", 
          borderRadius: "8px", 
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
          <h2 style={{
            fontSize: "20px", 
            fontWeight: "600", 
            color: "#3182ce", 
            marginBottom: "8px"
          }}>
            POST /api/login
          </h2>
          <p style={{ marginBottom: "16px", color: "#2d3748", fontSize: "14px" }}>
            Login user and get JWT token.
          </p>

          <div style={{ marginBottom: "16px" }}>
            <h3 style={{
              fontSize: "14px", 
              fontWeight: "500", 
              color: "#4a5568", 
              marginBottom: "8px"
            }}>
              Request:
            </h3>
            <pre style={{
              backgroundColor: "#2d3748", 
              color: "#68d391", 
              padding: "12px", 
              borderRadius: "8px", 
              fontSize: "12px", 
              overflowX: "auto"
            }}>
              curl -X POST https://yourdomain.com/api/login -H "Content-Type: application/json" -d {'{ "email": "sushant@example.com", "password": "123456" }'}
            </pre>
          </div>

          <div>
            <h3 style={{
              fontSize: "14px", 
              fontWeight: "500", 
              color: "#4a5568", 
              marginTop: "16px", 
              marginBottom: "8px"
            }}>
              Response:
            </h3>
            <pre style={{
              backgroundColor: "#2b6cb0", 
              color: "#bee3f8", 
              padding: "12px", 
              borderRadius: "8px", 
              fontSize: "12px", 
              overflowX: "auto"
            }}>
              {'{ "token": "eyJhbGciOiJIUzI1NiIsInR..." }'}
            </pre>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ApiDocs;
