import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // 👈 your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
