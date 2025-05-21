// this is going in the Home.jsx page as a component

import React from "react";

const ImageUpload = (props) => {
  const ShowImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      props.UploadImageHandler(file);
    }
  };

  return (
    <div className="bg-white shodow-lg rounded-2xl p-6 max-2xl">
      <label
        htmlFor="fileInput"
        className="block cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 hover:border-gray-400 transition duration-200 transition-all"
      >
        <input
          type="file"
          className="hidden"
          id="fileInput"
          onChange={ShowImageHandler}
        />
        <span className="text-lg font-medium text-gray-700">
          Click and drag to upload your image
        </span>
      </label>
    </div>
  );
};

export default ImageUpload;
