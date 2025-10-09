import axios from 'axios';

const api = axios.create({
  baseURL: "http://192.168.72.225:3000", 
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.response.use(
  response => response,
  error => {
    console.error('Error in API:', error);
    return Promise.reject(error);
  }
);

export default api;
