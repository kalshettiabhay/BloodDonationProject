import axios from 'axios';

const url=import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: url,
  withCredentials: true, 
});


// Interceptors (optional)
api.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
