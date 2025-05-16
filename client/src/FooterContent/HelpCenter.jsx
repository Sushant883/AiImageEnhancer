import React from "react";

function HelpCenter() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "24px", color: "#2c3e50", marginBottom: "10px" }}>
        🆘 Help Center - AIImageEnhancer
      </h1>

      <p style={{ fontSize: "16px", marginBottom: "20px" }}>
        Welcome! Here you’ll find answers to common questions about using our AI-based image enhancement tool.
      </p>

      <h2 style={{ fontSize: "20px", color: "#2980b9" }}>📋 Frequently Asked Questions</h2>

      <div style={{ marginTop: "10px" }}>
        <p><strong>Q:</strong> How do I upload an image?</p>
        <p><strong>A:</strong> Click on the “Upload” button on the home page and select an image from your computer.</p>

        <p><strong>Q:</strong> How long does enhancement take?</p>
        <p><strong>A:</strong> It usually takes 5–10 seconds depending on image size and internet speed.</p>

        <p><strong>Q:</strong> What types of images are supported?</p>
        <p><strong>A:</strong> JPG, PNG, and JPEG formats are supported.</p>

        <p><strong>Q:</strong> My image didn’t enhance correctly. What should I do?</p>
        <p><strong>A:</strong> Try re-uploading the image or contact our support team.</p>
      </div>

      <h2 style={{ fontSize: "20px", color: "#2980b9", marginTop: "30px" }}>📞 Contact Support</h2>
      <p>If you still need help, contact us at: <strong>support@aiimageenhancer.com</strong></p>
    </div>
  );
}

export default HelpCenter;
