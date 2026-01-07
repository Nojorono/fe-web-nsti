export default {
  namespaced: true,
  state: {
    authenticated: false,
  },
  getters: {},
  mutations: {
    setAuthenticated(state, payload) {
      state.authenticated = payload
    },
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const { data } = await this.$axios.post('/user/login', {
          email: payload.email,
          password: payload.password,
        })
        
        commit('setAuthenticated', true)
        localStorage.setItem('access_token', data.access_token)
        // Set axios default header for future requests
        this.$axios.defaults.headers.common.Authorization = `Bearer ${data.access_token}`
        
        return data
      } catch (e) {
        commit('setAuthenticated', false)
        throw e
      }
    },
    checkToken({ commit }) {
      return new Promise((resolve, reject) => {
        try {
          const token = localStorage.getItem('access_token')
          if (!token) {
            commit('setAuthenticated', false)
          } else {
            commit('setAuthenticated', true)
            // Set axios default header from stored token
            this.$axios.defaults.headers.common.Authorization = `Bearer ${token}`
          }
          resolve()
        } catch (error) {
          commit('setAuthenticated', false)
          reject(error)
        }
      })
    },
    async register({ commit }, payload) {
      // eslint-disable-next-line no-useless-catch
      try {
        await this.$axios.post(`user/register`, {
          ...payload,
        })
      } catch (e) {
        throw e
      }
    },
  },
}
