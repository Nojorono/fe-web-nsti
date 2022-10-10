import axios from '~/plugins/axios'
const token = localStorage.getItem('token')
export default {
  state: {
    detailCareer: {},
    allTestimoni: [],
    detailTestimoni: {},
    globalNotify: false,
  },
  getters: {
    getDetailCareer(state) {
      return state.detailCareer
    },
    getAllTestimoni(state) {
      return state.allTestimoni
    },
    getDetailTetimoni(state) {
      return state.detailTestimoni
    },
    getGlobalNotify(state) {
      return state.globalNotify
    },
  },
  mutations: {
    setDetailCarerr(state, payload) {
      state.detailCareer = payload
    },
    setAllTestimoni(state, payload) {
      state.allTestimoni = payload
    },
    setDetailTestimoni(state, payload) {
      state.detailTestimoni = payload
    },
    setGlobalNotify(state, payload) {
      state.globalNotify = payload
    },
  },
  actions: {
    async postCreateProduct({ commit }, payload) {
      commit('setGlobalNotify', true)

      try {
        await axios.post(
          `product/create`,
          {
            ...payload,
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              access_token: token,
            },
          }
        )
      } finally {
        commit('setGlobalNotify', false)
      }
    },
    async postCreateCareer({ commit }, payload) {
      commit('setGlobalNotify', true)
      await axios
        .post(
          `career/create`,
          {
            ...payload,
          },
          {
            headers: {
              access_token: token,
            },
          }
        )
        .finally((_) => {
          commit('setGlobalNotify', false)
        })
    },
    async deleteCareer({ commit }, payload) {
      commit('setGlobalNotify', true)
      await axios({
        method: 'DELETE',
        url: `career/delete`,
        data: {
          id: payload,
        },
        headers: {
          access_token: token,
        },
      }).finally((_) => {
        commit('setGlobalNotify', false)
      })
    },
    async deleteProducts({ commit }, id) {
      commit('setGlobalNotify', true)
      await axios({
        url: `product/delete`,
        method: 'DElETE',
        data: {
          id,
        },
        headers: {
          access_token: token,
        },
      }).finally((_) => {
        commit('setGlobalNotify', false)
      })
    },
    async fetchDetailCareer({ commit }, id) {
      const { data } = await axios.get(`career/detail/${id}`)
      commit('setDetailCarerr', data[0])
    },
    async patchDetailCareer({ commit }, payload) {
      commit('setGlobalNotify', true)
      await axios({
        url: `career/edit`,
        method: 'PATCH',
        data: {
          ...payload,
        },
        headers: {
          access_token: token,
        },
      }).finally((_) => {
        commit('setGlobalNotify', false)
      })
    },
    async postCreateMedia({ commit }, payload) {
      commit('setGlobalNotify', true)
      try {
        await axios.post(
          `media/create`,
          {
            ...payload,
          },
          {
            headers: {
              Authorization: 'Bearer' + token,
              access_token: token,
              'Content-Type': 'multipart/form-data',
            },
          }
        )
      } finally {
        commit('setGlobalNotify', false)
      }
    },
    async patchDetailMedia({ commit }, payload) {
      commit('setGlobalNotify', true)
      await axios({
        method: 'PATCH',
        url: `media/edit`,
        data: {
          ...payload,
        },
        headers: {
          'Content-Type': 'multipart/form-data',
          access_token: token,
        },
      })
      commit('setGlobalNotify', false)
    },
    async destroyMedia({ commit }, id) {
      commit('setGlobalNotify', true)
      await axios({
        url: `media/delete`,
        method: 'DElETE',
        data: {
          id,
        },
        headers: {
          access_token: token,
        },
      }).finally((_) => {
        commit('setGlobalNotify', false)
      })
    },
    async patchDetailProducts({ commit }, payload) {
      commit('setGlobalNotify', true)
      await axios({
        url: `product/edit`,
        method: 'PATCH',
        data: {
          ...payload,
        },
        headers: {
          'Content-Type': 'multipart/form-data',
          access_token: token,
        },
      }).finally((_) => {
        commit('setGlobalNotify', false)
      })
    },
    // testimoni
    async fetchAllTestimoni({ commit }, payload) {
      // eslint-disable-next-line no-useless-catch
      try {
        const { data } = await axios.get(`testimoni/readAll?size=100&page=0`)
        commit('setAllTestimoni', data)
      } catch (e) {
        throw e
      }
    },
    async postTestimoni({ commit }, payload) {
      commit('setGlobalNotify', true)
      try {
        await axios.post(
          `testimoni/create`,
          {
            ...payload,
          },
          {
            headers: {
              access_token: token,
              'Content-Type': 'multipart/form-data',
            },
          }
        )
      } finally {
        commit('setGlobalNotify', false)
      }
    },
    async fetchDetailTestimoni({ commit }, id) {
      const { data } = await axios.get(`testimoni/detail/${id}`)
      commit('setDetailTestimoni', data[0])
    },
    async patchDetailTestimoni({ commit }, payload) {
      commit('setGlobalNotify', true)
      await axios({
        url: `testimoni/edit`,
        method: 'PATCH',
        data: {
          ...payload,
        },
        headers: {
          'Content-Type': 'multipart/form-data',
          access_token: token,
        },
      }).finally((_) => {
        commit('setGlobalNotify', false)
      })
    },
    async destroyTestimoni({ commit }, id) {
      commit('setGlobalNotify', true)
      await axios({
        url: `testimoni/delete`,
        method: 'DElETE',
        data: {
          id,
        },
        headers: {
          access_token: token,
        },
      }).finally((_) => {
        commit('setGlobalNotify', false)
      })
    },
  },
}
