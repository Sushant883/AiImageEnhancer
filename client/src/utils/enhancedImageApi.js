const API_KEY = "wxcqlhypu3mp9bljf";
const BASE_URL = "https://techhk.aoscdn.com/";
const MAXIMUM_RETRIES = 20; // Maximum number of retries for polling
import axios from "axios";

export const enhancedImageAPI = async (file) => {
  try {
    const task_id = await uploadImage(file);
    console.log("Image Uploaded Successfully , Task ID:", task_id);

    // const enhanceImageData = await fetchEnhancedImage(
    //   //   "eea69369-5389-4b9c-9289-5f4860e737ac"
    //   task_id
    // );
    const enhancedImageData = await PollForEnhancedImage(
      //   "eea69369-5389-4b9c-9289-5f4860e737ac"
      task_id
    );
    console.log("Enhanced Image Data:", enhancedImageData);

    // console.log(enhancedImageData);
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
  if (!data?.data) {
    throw new Error("Failed to fetch enhanced image! Image not found.");
  }
  return data.data;
  //   console.log(data.data.image);
  // /api/tasks/visual/scale/{task_id}
};

const PollForEnhancedImage = async (taskId , retries = 0) => {
  const result = await fetchEnhancedImage(taskId);

  if (result.state === 4) {
    console.log(`Processing ... (${retries}/${MAXIMUM_RETRIES})`);

    if (retries >= 20) {
      throw new Error("Max retrires reached. Please try again later");
    }

    // wait for 2 second
    await new Promise((resolve) => setTimeout(resolve, 2000));
 
    return PollForEnhancedImage(taskId, retries + 1);
  }


  console.log("Enhanced Image URL:", result);
  return result;
};

//Image Uploaded Successfully , Task ID: eea69369-5389-4b9c-9289-5f4860e737ac

// //
// image
// :
// "https://wxtechhk.oss-cn-hongkong.aliyuncs.com/tasks/output/scale/eea69369-5389-4b9c-9289-5f4860e737ac.jpg?x-oss-credential=LTAI5tGjJnh66c1txANiRBQN/20250503/cn-hongkong/oss/aliyun_v4_request&x-oss-date=20250503T112227Z&x-oss-expires=3600&x-oss-signature=0ef76e28f7edcd512795e9b744641e83f3262f25a192052223c55ef4d7069da3&x-oss-signature-version=OSS4-HMAC-SHA256"
// image_height
