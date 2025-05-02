// this is going in the Home.jsx page as a component

import React from 'react'

const ImagePreview = () => {
  return (
    // this is main div 
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>
      {/* this div is store the original image or local uplaoded image? */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">Original Image</h2>
        <img src="" alt="" className="w-full h-full object-cover" />
      </div>



      {/* this div is show the enhanced image of the original image  */}
      <div
      className="bg-white shadow-lg rounded-xl overflow-hidden"
      >
      <h2
      className="text-xl font-semibold text-center bg-gray-800 text-white py-2"
      >Enhanced Image</h2></div>
    </div>
  )
}

export default ImagePreview
