import axios from 'axios';
import ENV from './env'; 

const api = axios.create({
  baseURL: ENV.BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.response.use(
  response => response,
  error => {
    console.error('Erro na API:', error);
    return Promise.reject(error);
  }
);

export default api;
