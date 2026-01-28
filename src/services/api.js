import axios from "axios";

// Pega a URL da variável de ambiente do Vercel, ou usa o Render como fallback
const API_URL = import.meta.env.VITE_API_URL || "https://app-kqz3.onrender.com/api";

export const api = axios.create({
  baseURL: API_URL,
});