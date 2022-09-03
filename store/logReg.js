import axios from '~/plugins/axios'

export default {
  state: {
    authenticated: false,
  },
  getters: {},
  mutations: {
    setAuthenticated(state, payload) {
      state.authenticated = payload
      console.log(state.authenticated)
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
          console.log(data.data)
          localStorage.setItem('token', data.data.access_token)
          // throw
        })
        .catch((e) => {
          commit('setAuthenticated', false)
          console.log(e)
          throw e
        })
    },
    checkToken({ commit }, payload) {
      const token = localStorage.getItem('token')
      // console.log(this.state.authenticated, 'state')
      if (!token) {
        commit('setAuthenticated', false)
      } else if (token) {
        commit('setAuthenticated', true)
      }
    },
    async register({ commit }, payload) {
      try {
        const { data } = await axios.post(`user/register`, {
          ...payload,
        })
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    },
  },
}
