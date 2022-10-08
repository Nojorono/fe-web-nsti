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
        const { data } = await axios.post(
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
        console.log(data)
      } catch (e) {
        console.log(e)
      } finally {
        commit('setGlobalNotify', false)
      }
    },
    async postCreateCareer({ commit }, payload) {
      commit('setGlobalNotify', true)
      const { data } = await axios
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
      console.log(data)
    },
    async deleteCareer({ commit }, payload) {
      commit('setGlobalNotify', true)

      const { data } = await axios({
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
      console.log(data)
    },
    async deleteProducts({ commit }, id) {
      // console.log(token, '========')
      commit('setGlobalNotify', true)

      const { data } = await axios({
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
      console.log(data)
    },
    async fetchDetailCareer({ commit }, id) {
      const { data } = await axios.get(`career/detail/${id}`)
      commit('setDetailCarerr', data[0])
    },
    async patchDetailCareer({ commit }, payload) {
      commit('setGlobalNotify', true)

      const { data } = await axios({
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
      console.log(data)
    },
    async postCreateMedia({ commit }, payload) {
      commit('setGlobalNotify', true)

      try {
        const { data } = await axios.post(
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
        console.log(data)
      } catch (e) {
        console.log(e)
      } finally {
        commit('setGlobalNotify', false)
      }
    },
    async patchDetailMedia({ commit }, payload) {
      commit('setGlobalNotify', true)
      const { data } = await axios({
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
      console.log(data)
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
      try {
        const { data } = await axios.get(`testimoni/readAll?size=100&page=0`)
        commit('setAllTestimoni', data)
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    },
    async postTestimoni({ commit }, payload) {
      commit('setGlobalNotify', true)

      try {
        const { data } = await axios.post(
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
        console.log(data)
      } catch (e) {
        console.log(e)
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
