import axiosInstance from '~/utils/axios'

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
