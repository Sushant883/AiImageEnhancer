// // routes/enhance.js
// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// require("dotenv").config(); // for .env file

// const API_KEY = DEEP_AI_API_KEY;

// router.post("/upload", async (req, res) => {
//   const { imageUrl } = req.body;

//   try {
//     const response = await axios.post(
//       "https://deep-image.ai/rest_api/process_result",
//       {
//         enhancements: ["denoise", "deblur", "light"],
//         url: imageUrl,
//         width: 2000,
//       },
//       {
//         headers: {
//           "content-type": "application/json",
//           "x-api-key": API_KEY,
//         },
//       }
//     );

//     res.json(response.data);
//   } catch (err) {
//     console.error("Upload failed:", err.message);
//     res.status(500).json({ error: "Image upload failed", details: err.message });
//   }
// });

// router.get("/result/:jobId", async (req, res) => {
//   try {
//     const { jobId } = req.params;
//     const response = await axios.get(
//       `https://deep-image.ai/rest_api/result/${jobId}`,
//       {
//         headers: {
//           "content-type": "application/json",
//           "x-api-key": API_KEY,
//         },
//       }
//     );

//     res.json(response.data);
//   } catch (err) {
//     console.error("Result fetch failed:", err.message);
//     res.status(500).json({ error: "Image fetch failed", details: err.message });
//   }
// });

// module.exports = router;
