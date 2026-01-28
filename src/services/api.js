import axios from "axios";

// Atualizado com o seu link real do Render
const API_URL = import.meta.env.VITE_API_URL || "https://hydrosense-api.onrender.com";

export const api = axios.create({
  baseURL: API_URL,
});