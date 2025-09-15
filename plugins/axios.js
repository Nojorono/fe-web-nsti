import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3001/' 
  : 'https://back-api.nikkisuper.my.id/';

const axiosInstance = axios.create({
  baseURL,
});

export default ({ app, store }, inject) => {
  // Set token from localStorage if available (client-side only)
  if (process.client) {
    const token = localStorage.getItem('access_token')
    if (token) {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`
    }
  }
  
  // Inject $axios
  inject('axios', axiosInstance);
  
  // For backwards compatibility, also inject as global axios
  app.$axios = axiosInstance;
  
  // Set in context for asyncData, fetch, plugins, middleware, nuxtServerInit
  if (process.client) {
    window.$axios = axiosInstance;
  }
}
