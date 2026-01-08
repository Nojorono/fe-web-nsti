import axiosInstance from '~/utils/axios'

export default ({ app, store }, inject) => {
  // Inject $axios to app, context, and Vue prototype
  inject('axios', axiosInstance);
  
  // For backwards compatibility, also inject as global axios
  app.$axios = axiosInstance;
  
  // Inject to Vue prototype so this.$axios works everywhere
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.prototype.$axios = axiosInstance;
  }
  
  // Set in context for asyncData, fetch, plugins, middleware, nuxtServerInit
  if (process.client) {
    window.$axios = axiosInstance;
  }
}
