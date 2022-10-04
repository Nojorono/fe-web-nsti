import axios from '~/plugins/axios'
const token = localStorage.getItem('token')
export default {
  state: {
    detailCareer: {},
  },
  getters: {
    getDetailCareer(state) {
      return state.detailCareer
    },
  },
  mutations: {
    setDetailCarerr(state, payload) {
      state.detailCareer = payload
    },
  },
  actions: {
    async postCreateMedia({ commit }, payload) {
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
              "Content-Type": "multipart/form-data",
            },
          }
        )
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    },
    async postCreateProduct({ commit }, payload) {
      try {
        const { data } = await axios.post(
          `product/create`,
          {
            ...payload,
          },
          {
            headers: {
              access_token: token,
            },
          }
        )
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    },
    async postCreateCareer({ commit }, payload) {
      const { data } = await axios.post(
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
      console.log(data)
    },
    async deleteCareer({ commit }, payload) {
      const { data } = await axios({
        method: 'DELETE',
        url: `career/delete`,
        data: {
          id: payload,
        },
        headers: {
          access_token: token,
        },
      })
      console.log(data)
    },
    async deleteProducts({ commit }, id) {
      // console.log(token, '========')
      const { data } = await axios({
        url: `product/delete`,
        method: 'DElETE',
        data: {
          id,
        },
        headers: {
          access_token: token,
        },
      })
      console.log(data)
    },
    async fetchDetailCareer({ commit }, id) {
      const { data } = await axios.get(`career/detail/${id}`)
      commit('setDetailCarerr', data[0])
    },
    async patchDetailCareer({ commit }, payload) {
      const { data } = await axios({
        url: `career/edit`,
        method: 'PATCH',
        data: {
          id: payload.id,
          title: payload.title,
          description: null,
          level: payload.level,
          location: payload.location,
          link: payload.link,
        },
        headers: {
          access_token: token,
        },
      })
      console.log(data)
    },
    async patchDetailMedia({ commit }, payload) {
      const { data } = await axios({
        url: `media/edit`,
        data: {
          id: payload.id,
          sampleFile: payload.sampleFile,
          title: payload.title,
          description: payload.description,
        },
        headers: {
          access_token: token,
        },
      })
      console.log(data)
    },
    async destroyMedia({ commit }, id) {
      await axios({
        url: `media/delete`,
        method: 'DElETE',
        data: {
          id,
        },
        headers: {
          access_token: token,
        },
      })
    },
    async patchDetailProducts({ commit }, payload) {
      await axios({
        ur: `product/edit`,
        data: {
          id: payload.id,
          sampleFile: payload.sampleFile,
          title: payload.title,
          description: payload.description,
        },
        headers: {
          access_token: token,
        },
      })
    },
  },
}
