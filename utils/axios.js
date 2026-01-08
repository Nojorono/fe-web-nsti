import axios from 'axios'

// Use environment variable if available, otherwise fallback to defaults
const baseURL = process.env.API_BASE_URL || 
  (process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000/' 
    : 'https://back-api.nikkisuper.my.id/');

const axiosInstance = axios.create({
  baseURL,
});

// Interceptor to update token on each request (client-side only)
if (process.client) {
  axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })
}

export default axiosInstance

