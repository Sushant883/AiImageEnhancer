import React, { useState } from "react";
import ImageUpload from "./ImageUpload.jsx";
import ImagePreview from "./ImagePreview.jsx";
import { enhancedImageAPI } from "../utils/enhancedImageApi.js";
import { Link, NavLink } from 'react-router-dom'; 

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setloading] = useState(false);


  // child component function in imageupload.jsx for share the image
  const UploadImageHandler =  async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setloading(true);
    // call the api for enhance the image
    // console.log(URL.createObjectURL(file));

    try{
      const enhancedURL = await enhancedImageAPI(file);
      // setEnhancedImage(enhancedURL.image);
      setEnhancedImage(enhancedURL);
      setloading(false);
      // code which may produce error
    } catch(error){
      console.log(error);
      alert("Error in enhancing the image")
      // code to handle the error and shwo message
    }
  };
  // console.log(enhancedImage); 

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/Features' },
    { name: 'Pricing', path: '/Pricing' },
    { name: 'Contact', path: '/Contact' },
  ];
  return (
    <>


      <ImageUpload UploadImageHandler={UploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage?.image}
      />
    </>
  );
};

export default Home;
