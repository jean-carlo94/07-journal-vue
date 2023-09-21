import axios from "axios";

const cloudinaryApi = axios.create({
    baseURL: `https://api.cloudinary.com/v1_1/${ import.meta.env.VITE_CLOUD_NAME }`
});

export default cloudinaryApi;