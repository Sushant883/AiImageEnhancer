const API_KEY = "wxcqlhypu3mp9bljf";
const BASE_URL = "https://techhk.aoscdn.com/";

export const enhancedImageAPI = async (file) => {
  try {
    const task_id = await uploadImage(file);
    console.log("Image Uploaded Successfully , Task ID:", task_id);

    const enhanceImageData = await fetchEnhancedImage(task_id);
    console.log("Enhancd Image Data:", enhanceImageData);

    console.log(enhancedImageData);
    return enhancedImageData;
  } catch (error) {
    console.log("Error enhancing image:", error.message);
  }
};

const uploadImage = async (file) => {
  // code to upload image
  // /api/tasks/visual/scale
};

const fetchEnhancedImage = async (task_id) => {
  // code to enhance image
  // /api/tasks/visual/scale/{task_id}
};
