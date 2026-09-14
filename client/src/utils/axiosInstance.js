import axios from 'axios'

const api = axios.create({
  baseURL:
    import.meta.env.MODE === 'development'
      ? import.meta.env.VITE_API_URL
      : import.meta.env.VITE_API_URL_PRO,
}); 
export default api