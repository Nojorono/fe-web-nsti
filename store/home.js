import axios from '~/plugins/axios'

export default {
  state: {
    mediaList: [],
    detailMedia: {},
    allProducts: [
    ],
    allCareer: [],
    detailProducts: [],
  },

  getters: {
    getMediaList(state) {
      return state.mediaList
    },
    getDetailMedia(state) {
      return state.detailMedia
    },
    getAllProducts(state) {
      return state.allProducts
    },
    getAllCareer(state) {
      return state.allCareer
    },
    getDetailProducts(state) {
      return state.detailProducts
    },
  },
  mutations: {
    setMediaList(state, payload) {
      state.mediaList = payload
    },
    setDetailMedia(state, payload) {
      state.detailMedia = payload
    },
    setAllProducts(state, payload) {
      state.allProducts = payload
    },
    setAllCareer(state, payload) {
      state.allCareer = payload
    },
    setDetailProdcuts(state, payload) {
      state.detailProducts = payload
    },
  },
  actions: {
    async getAllMedia({ commit }, payload) {
      try {
        const { data } = await axios.get(
          `media/readAll?page=${payload.page}&size=${payload.size}`
        )
        commit('setMediaList', data)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchMediaDetail({ commit }, id) {
      commit('setDetailMedia', {})
      try {
        const { data } = await axios.get(`media/detail/${id}`)
        commit('setDetailMedia', data[0])
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchAllProducts({ commit }, payload) {
      // console.log('masuk')
      try {
        const { data } = await axios.get(`product/readAll`)
        commit('setAllProducts', data)
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchDetailProducts({ commit }, id) {
      const { data } = await axios.get(`product/detail/${id}`)
      commit('setDetailProdcuts', data)
    },
    async fetchAllCareer({ commit }, payload) {
      const { data } = await axios.get(
        `career/readAll?page=${payload.page}&size=${payload.size}`
      )
      commit('setAllCareer', data)
    },
  },
}
