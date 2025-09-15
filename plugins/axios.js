import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3001/' 
  : 'https://back-api.nikkisuper.my.id/';

const axiosInstance = axios.create({
  baseURL,
});

export default ({ app, store }, inject) => {
  // Inject $axios
  inject('axios', axiosInstance);
  
  // For backwards compatibility, also inject as global axios
  app.$axios = axiosInstance;
  
  // Set in context for asyncData, fetch, plugins, middleware, nuxtServerInit
  if (process.client) {
    window.$axios = axiosInstance;
  }
}
