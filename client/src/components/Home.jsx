import React, { useState } from "react";
import ImageUpload from "./ImageUpload.jsx";
import ImagePreview from "./ImagePreview.jsx";
import { enhancedImageAPI } from "../utils/enhancedImageApi.js";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setloading] = useState(false);

  // child component function in imageupload.jsx for share the image
  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setloading(true);
    // call the api for enhance the image
    // console.log(URL.createObjectURL(file));

    try {
      const enhancedURL = await enhancedImageAPI(file);
      // setEnhancedImage(enhancedURL.image);
      setEnhancedImage(enhancedURL);
      setloading(false);
      // code which may produce error
    } catch (error) {
      console.log(error);
      alert("Error in enhancing the image");
      // code to handle the error and shwo message
    }
  };
  // console.log(enhancedImage);

  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">
          AI Image Enhancer{" "}
        </h1>
        <p className="text-lg text-gray-500">
          {" "}
          Upload your Image and let AI enhance to in seconds !
        </p>
      </div>



     
        <ImageUpload UploadImageHandler={UploadImageHandler} />
        <ImagePreview
          loading={loading}
          uploaded={uploadImage}
          enhanced={enhancedImage?.image}
        />

      <div className="text-lg text-gray-500 mt-6">
        This is the platform which is give 4k quality image
      </div>
    </>
  );
};

export default Home;
