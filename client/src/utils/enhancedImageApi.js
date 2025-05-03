const API_KEY = "wxcqlhypu3mp9bljf";
const BASE_URL = "https://techhk.aoscdn.com/";
import axios from "axios";

export const enhancedImageAPI = async (file) => {
  try {
    // const task_id = await uploadImage(file);
    // console.log("Image Uploaded Successfully , Task ID:", task_id);

    const enhanceImageData = await fetchEnhancedImage(
      "eea69369-5389-4b9c-9289-5f4860e737ac"
    );
    console.log("Enhanced Image Data:", enhanceImageData);

    console.log(enhancedImageData);
    return enhancedImageData;
  } catch (error) {
    console.log("Error enhancing image:", error.message);
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image! Task_ID not found.");
  }

  return data.data.task_id;

  // console.log(data);
  //   return taskId;
  // code to upload image
  // /api/tasks/visual/scale
};

const fetchEnhancedImage = async (task_id) => {
  // code to enhance image
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${task_id}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );
  console.log(data);
  // /api/tasks/visual/scale/{task_id}
};

//Image Uploaded Successfully , Task ID: eea69369-5389-4b9c-9289-5f4860e737ac
