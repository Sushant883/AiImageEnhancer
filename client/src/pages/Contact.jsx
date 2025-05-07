// import React from 'react';

// const Contact = () => {
//   return (
//     <div className="min-w-2xl mx-auto px-4 py-16 text-gray-900 dark:text-white">
//       <h1 className="text-4xl font-bold mb-10 text-center text-black">Contact Us</h1>
//       <form className="space-y-6 bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-xl">
//         <div>
//           <label className="block text-sm font-medium mb-1">Name</label>
//           <input
//             type="text"
//             className="w-full border px-4 py-2 rounded-md dark:bg-[#121212] dark:border-gray-700 dark:text-white"
//             placeholder="Your name"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             className="w-full border px-4 py-2 rounded-md dark:bg-[#121212] dark:border-gray-700 dark:text-white"
//             placeholder="you@example.com"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Message</label>
//           <textarea
//             rows="4"
//             className="w-full border px-4 py-2 rounded-md dark:bg-[#121212] dark:border-gray-700 dark:text-white"
//             placeholder="How can we help you?"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;

//

// import React, { useState } from 'react';
// import axios from 'axios';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [showPopup, setShowPopup] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/contact', formData); // backend url
//       setShowPopup(true);
//       setFormData({ name: '', email: '', message: '' });
//       setTimeout(() => {
//         setShowPopup(false);
//       }, 3000); // popup hide after 3 sec
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-white p-6 rounded shadow"
//       >
//         <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Your Name"
//           className="w-full border p-2 mb-3 rounded"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Your Email"
//           className="w-full border p-2 mb-3 rounded"
//           required
//         />
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Your Message"
//           className="w-full border p-2 mb-3 rounded"
//           rows="4"
//           required
//         ></textarea>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Send
//         </button>
//       </form>

//       {showPopup && (
//         <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50 transition-all">
//           ✅ Message sent successfully!
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contact;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     setTimeout(async () => {
//       try {
//         await axios.post('http://localhost:5000/contact', formData);
//         setIsLoading(false);
//         setShowPopup(true);
//         setFormData({ name: '', email: '', message: '' });

//         setTimeout(() => {
//           setShowPopup(false);
//         }, 3000);
//       } catch (error) {
//         setIsLoading(false);
//         console.error('Error:', error);
//       }
//     }, 2000); // 2 second loading
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-white p-6 rounded shadow"
//       >
//         <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Your Name"
//           className="w-full border p-2 mb-3 rounded"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Your Email"
//           className="w-full border p-2 mb-3 rounded"
//           required
//         />
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Your Message"
//           className="w-full border p-2 mb-3 rounded"
//           rows="4"
//           required
//         ></textarea>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//           disabled={isLoading}
//         >
//           {isLoading ? 'Sending...' : 'Send'}
//         </button>
//       </form>

//       {/* Loading spinner */}
//       {isLoading && (
//         <div className="fixed bottom-20 text-center text-blue-600 font-semibold animate-pulse">
//           Sending your message...
//         </div>
//       )}

//       {/* Popup */}
//       {showPopup && (
//         <div className="fixed bottom-16 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50 transition-all">
//           ✅ Message sent successfully!
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import axios from "axios";
import { CheckCircle } from "lucide-react"; // Icon from lucide-react

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(async () => {
      try {
        await axios.post("http://localhost:5000/contact", formData);
        setIsLoading(false);
        setShowPopup(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      } catch (error) {
        setIsLoading(false);
        console.error("Error:", error);
      }
    }, 2000); // 2 second loading
  };

  return (
    <div className="relative flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full border bg-white p-6 rounded shadow"
      >
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full border p-2 mb-3 rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full border p-2 mb-3 rounded"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full border p-2 mb-3 rounded"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form>

      {/* Loading text */}
      {/* {isLoading && (
        <div className="fixed bottom-20 text-center text-blue-600 font-semibold animate-pulse">
          Sending your message...
        </div>
      )} */}

      {/* {isLoading && (
        <div className="fixed bottom-20 flex items-center gap-3 text-blue-600 font-semibold z-50">
          {/* Spinner circle */}
      {/* <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span>Sending your message...</span>
        </div> */}
      {/* )} */}

      {isLoading && (
        <div className="fixed dark:text-blue-400 ... bottom-20 flex items-center gap-3 text-blue-600 font-semibold z-50">
          {/* Advanced Spinner */}
          <div className="relative w-6 h-6">
            <div className="absolute inset-0 rounded-full border-2 border-blue-500 border-t-transparent animate-spin"></div>
            <div className="absolute inset-1 rounded-full bg-blue-200 opacity-30 animate-ping"></div>
          </div>
          <span>Sending your message...</span>
        </div>
      )}

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed bottom-16 flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-fade-in-up transition-all duration-500">
          <CheckCircle className="w-6 h-6 text-white animate-bounce" />
          <span className="font-medium">Message sent successfully!</span>
        </div>
      )}
    </div>
  );
};

export default Contact;
