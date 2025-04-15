import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:12345", // 👈 your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
