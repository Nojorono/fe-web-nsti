import axios from '~/plugins/axios'
const token = localStorage.getItem('token')
export default {
  state: {
    detailCareer: {},
    allTestimoni: [],
    detailTestimoni: {}
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
    }
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
    }
  },
  actions: {
    async postCreateProduct({ commit }, payload) {
      try {
        const { data } = await axios.post(
          `product/create`,
          {
            /*

sampleFile1 : File type (imageProduk)
title: Strings
description: strings
sampleFile2 : File Type (imageIklan)
             */
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
          ...payload,
        },
        headers: {
          access_token: token,
        },
      })
      console.log(data)
    },
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
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    },
    async patchDetailMedia({ commit }, payload) {
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
        url: `product/edit`,
        method: 'PATCH',
        data: {
          ...payload,
        },
        headers: {
          'Content-Type': 'multipart/form-data',
          access_token: token,
        },
      })
    },
    // testimoni
    async fetchAllTestimoni({ commit }, payload) {
      try {
        const { data } = await axios.get(`testimoni/readAll?size=15&page=0`)
        commit('setAllTestimoni', data)
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    },
    async postTestimoni({ commit }, payload) {
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
      }
    },
    async fetchDetailTestimoni({ commit }, id) {
      // http://back-api.nikkisuper.my.id/testimoni/detail/b081d2d6-28a4-4b44-bfd0-ba3c8709a2e3
      const { data } = await axios.get(`testimoni/detail/${id}`)
      console.log(data, '======')
      commit('setDetailTestimoni', data[0])
    },
    async patchDetailTestimoni({ commit }, payload) {
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
      })
    },
    async destroyTestimoni({ commit }, id) {
      await axios({
        url: `testimoni/delete`,
        method: 'DElETE',
        data: {
          id,
        },
        headers: {
          access_token: token,
        },
      })
    },
  },
}
