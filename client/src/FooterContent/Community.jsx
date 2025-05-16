import React from "react";

function Community() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "24px", color: "#2c3e50", marginBottom: "10px" }}>
        🌐 Join the AIImageEnhancer Community
      </h1>

      <p style={{ fontSize: "16px", marginBottom: "20px" }}>
        Connect with other users, share your ideas, and stay updated with the latest features and announcements.
      </p>

      <h2 style={{ fontSize: "20px", color: "#2980b9" }}>💬 Discussion Forum</h2>
      <p>
        Have questions or ideas? Join our online forum and be part of the conversation.
        <br />
        👉 <a href="https://community.aiimageenhancer.com" target="_blank" rel="noopener noreferrer">Visit Forum</a>
      </p>

      <h2 style={{ fontSize: "20px", color: "#2980b9", marginTop: "20px" }}>📢 Feedback & Suggestions</h2>
      <p>
        Help us improve! Share your thoughts and feature requests.
        <br />
        👉 <a href="https://forms.gle/your-feedback-form" target="_blank" rel="noopener noreferrer">Give Feedback</a>
      </p>

      <h2 style={{ fontSize: "20px", color: "#2980b9", marginTop: "20px" }}>📱 Follow Us</h2>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        <li>🔗 <a href="https://twitter.com/aiimageenhancer" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li>🔗 <a href="https://facebook.com/aiimageenhancer" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li>🔗 <a href="https://instagram.com/aiimageenhancer" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li>🔗 <a href="https://linkedin.com/company/aiimageenhancer" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </div>
  );
}

export default Community;
