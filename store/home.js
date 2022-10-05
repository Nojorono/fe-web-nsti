import axios from '~/plugins/axios'

export default {
  state: {
    mediaList: [],
    detailMedia: {},
    allProducts: [
      {
        id: 1,
        img: require('assets/images/product-dummy.png'),
        popUp: require('assets/images/dummy-detail-products.png'),
      },
      {
        id: 2,
        img: require('assets/images/produk2.png'),
        popUp: require('assets/images/produk2-pop.png'),
      },
      {
        id: 3,
        img: require('assets/images/produk3.png'),
        popUp: require('assets/images/produk3-pop.png'),
      },
      {
        id: 4,
        img: require('assets/images/produk4.png'),
        popUp: require('assets/images/produk4-pop.png'),
      },
      {
        id: 5,
        img: require('assets/images/produk5.png'),
        popUp: require('assets/images/produk5-pop.png'),
      },
      {
        id: 6,
        img: require('assets/images/produk6.png'),
        popUp: require('assets/images/produk6-pop.png'),
      },
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
