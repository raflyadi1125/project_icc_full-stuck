import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
    Headers: {"Content-Type": "application/json"},
})

api.interceptors.response.use(
    (res) => res,
    (err) => {
        console.log("API error: ", err?.response?.data || err.message);
        return Promise.reject(err);
    }
);