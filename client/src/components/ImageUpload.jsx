// this is going in the Home.jsx page as a component

import React from "react";

const ImageUpload = () => {
  return (
    <div className="bg-white shodow-lg rounded-2xl p-6 w-full max-2xl">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6"
      >
        <p>Click and drap to upload your image</p>
      </label>
    </div>
  );
};

export default ImageUpload;
