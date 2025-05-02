import React, { useState } from "react";
import ImageUpload from "./ImageUpload.jsx";
import ImagePreview from "./ImagePreview.jsx";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setloading] = useState(false);
  return (
    <>
      <ImageUpload />
      <ImagePreview 
      loading={loading}
      uploaded= {uploadImage}
      enhanced={enhancedImage}
      />
    </>
  );
};

export default Home;
