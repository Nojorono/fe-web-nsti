import axios from '~/plugins/axios'

export default {
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
      await axios
        .post('/user/login', {
          email: payload.email,
          password: payload.password,
        })
        .then((data) => {
          commit('setAuthenticated', true)
          localStorage.setItem('token', data.data.access_token)
          // throw
        })
        .catch((e) => {
          commit('setAuthenticated', false)
          throw e
        })
    },
    checkToken({ commit }, payload) {
      const token = localStorage.getItem('token')
      if (!token) {
        commit('setAuthenticated', false)
      } else if (token) {
        commit('setAuthenticated', true)
      }
    },
    async register({ commit }, payload) {
      // eslint-disable-next-line no-useless-catch
      try {
        await axios.post(`user/register`, {
          ...payload,
        })
      } catch (e) {
        throw e
      }
    },
  },
}
