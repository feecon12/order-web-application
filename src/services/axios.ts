// src/services/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001", // Your API base URL
});

export default api;
