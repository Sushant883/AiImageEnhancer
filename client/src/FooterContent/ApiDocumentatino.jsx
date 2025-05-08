import React from "react";

function ApiDocs() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">📘 API Documentation</h1>

      {/* Endpoint 1 */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">GET /api/users</h2>
        <p className="mb-3">Fetch all registered users.</p>

        <h3 className="font-medium text-sm text-gray-600 mb-1">Request:</h3>
        <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-auto">
curl -X GET https://yourdomain.com/api/users
        </pre>

        <h3 className="font-medium text-sm text-gray-600 mt-3 mb-1">Response:</h3>
        <pre className="bg-black text-blue-300 p-3 rounded text-sm overflow-auto">
[
  &#123; "id": 1, "name": "Sushant", "email": "sushant@example.com" &#125;
]
        </pre>
      </div>

      {/* Endpoint 2 */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">POST /api/login</h2>
        <p className="mb-3">Login user and get JWT token.</p>

        <h3 className="font-medium text-sm text-gray-600 mb-1">Request:</h3>
        <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-auto">
curl -X POST https://yourdomain.com/api/login 
-H "Content-Type: application/json" 
-d &#123;"email": "sushant@example.com", "password": "123456"&#125;
        </pre>

        <h3 className="font-medium text-sm text-gray-600 mt-3 mb-1">Response:</h3>
        <pre className="bg-black text-blue-300 p-3 rounded text-sm overflow-auto">
&#123;
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
&#125;
        </pre>
      </div>
    </div>
  );
}

export default ApiDocs;
