import axios from "axios";

const journalApi = axios.create({
    baseURL: `${ import.meta.env.VITE_FIREBASE_URL }`
});

export default journalApi;