import axios from '~/plugins/axios'

export default {
  /*
  http://back-api.nikkisuper.my.id/searchbar/search
METHOD POST
PAYLOAD
text: string
limit: string
RESPONSE
[
    {
        "id": "1023d4bf-ddda-4108-bfb1-7b0fccfd98ee",
        "title": "TEST MEDIA 2",
        "category": "media"
    },
    {
        "id": "4639bc9d-e777-4bff-9e1a-ae896f4aab64",
        "title": "TEST MEDIA 6",
        "category": "media"
    },
    {
        "id": "529a3781-f026-4818-ad0e-7345ed5dcafc",
        "title": "TEST MEDIA 3",
        "category": "media"
    },
    {
        "id": "6c7d40e5-9a04-43b2-8422-c1e30a16852b",
        "title": "TEST MEDIA 1",
        "category": "media"
    },
    {
        "id": "856e15a4-b32f-41b7-a613-0fef5e3216c9",
        "title": "TEST MEDIA 4",
        "category": "media"
    }
]
   */
  state: {
    mediaList: [],
    detailMedia: {},
    allProducts: [],
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
          `media/readAll?page=${payload.page * 6}&size=${payload.size}`
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
        `career/readAll?page=${payload.page * 6}&size=${payload.size}`
      )
      commit('setAllCareer', data)
    },
  },
}
