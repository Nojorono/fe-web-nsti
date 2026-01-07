export default {
  namespaced: true,
  state: () => ({
    detailCareer: {},
    allTestimoni: [],
    detailTestimoni: {},
    globalNotify: false,
  }),
  getters: {
    getDetailCareer(state) {
      return state.detailCareer
    },
    getAllTestimoni(state) {
      return state.allTestimoni || []
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
        // Create FormData for file upload
        const formData = new FormData()
        if (payload.sampleFile1) formData.append('sampleFile1', payload.sampleFile1)
        if (payload.sampleFile2) formData.append('sampleFile2', payload.sampleFile2)
        if (payload.description) formData.append('description', payload.description)
        if (payload.title) formData.append('title', payload.title)

        const response = await this.app.$axios.post('product/create', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        return response.data
      } finally {
        commit('setGlobalNotify', false)
      }
    },
    async postCreateCareer({ commit }, payload) {
      commit('setGlobalNotify', true)
      try {
        const response = await this.app.$axios.post('career/create', payload)
        return response.data
      } finally {
        commit('setGlobalNotify', false)
      }
    },
    async deleteCareer({ commit }, payload) {
      commit('setGlobalNotify', true)
      try {
        const response = await this.app.$axios.delete('career/delete', {
          data: {
            id: payload,
          },
        })
        return response.data
      } finally {
        commit('setGlobalNotify', false)
      }
    },
    async deleteProducts({ commit }, id) {
      commit('setGlobalNotify', true)
      try {
        const response = await this.app.$axios.delete('product/delete', {
          data: {
            id,
          },
        })
        return response.data
      } finally {
        commit('setGlobalNotify', false)
      }
    },
    async fetchDetailCareer({ commit }, id) {
      const { data } = await this.app.$axios.get(`career/detail/${id}`)
      commit('setDetailCarerr', data[0])
      return data[0]
    },
    async patchDetailCareer({ commit }, payload) {
      commit('setGlobalNotify', true)
      try {
        const response = await this.app.$axios.patch('career/edit', payload)
        return response.data
      } finally {
        commit('setGlobalNotify', false)
      }
    },
    async postCreateMedia({ commit }, payload) {
      commit('setGlobalNotify', true)
      try {
        // Create FormData for file upload
        const formData = new FormData()
        if (payload.sampleFile) formData.append('sampleFile', payload.sampleFile)
        if (payload.title) formData.append('title', payload.title)
        if (payload.description) formData.append('description', payload.description)
        if (payload.location) formData.append('location', payload.location)

        const response = await this.app.$axios.post('media/create', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        return response.data
      } finally {
        commit('setGlobalNotify', false)
      }
    },
    async patchDetailMedia({ commit }, payload) {
      commit('setGlobalNotify', true)
      try {
        // Create FormData for file upload
        const formData = new FormData()
        if (payload.sampleFile) formData.append('sampleFile', payload.sampleFile)
        if (payload.title) formData.append('title', payload.title)
        if (payload.description) formData.append('description', payload.description)
        if (payload.location) formData.append('location', payload.location)
        if (payload.id) formData.append('id', payload.id)

        const response = await this.app.$axios.patch('media/edit', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        return response.data
      } finally {
        commit('setGlobalNotify', false)
      }
    },
    async destroyMedia({ commit }, id) {
      commit('setGlobalNotify', true)
      try {
        const response = await this.app.$axios.delete('media/delete', {
          data: {
            id,
          },
        })
        return response.data
      } finally {
        commit('setGlobalNotify', false)
      }
    },
    async patchDetailProducts({ commit }, payload) {
      commit('setGlobalNotify', true)
      try {
        // Create FormData for file upload
        const formData = new FormData()
        if (payload.sampleFile1) formData.append('sampleFile1', payload.sampleFile1)
        if (payload.sampleFile2) formData.append('sampleFile2', payload.sampleFile2)
        if (payload.description) formData.append('description', payload.description)
        if (payload.title) formData.append('title', payload.title)
        if (payload.id) formData.append('id', payload.id)

        const response = await this.app.$axios.patch('product/edit', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        return response.data
      } finally {
        commit('setGlobalNotify', false)
      }
    },
    // testimoni
    async fetchAllTestimoni({ commit }, payload) {
      const { data } = await this.app.$axios.get(`testimoni/readAll?size=100&page=0`)
      commit('setAllTestimoni', data)
      return data
    },
    async postTestimoni({ commit }, payload) {
      commit('setGlobalNotify', true)
      try {
        // Create FormData for file upload
        const formData = new FormData()
        if (payload.sampleFile) formData.append('sampleFile', payload.sampleFile)
        if (payload.name) formData.append('name', payload.name)
        if (payload.title) formData.append('title', payload.title)
        if (payload.description) formData.append('description', payload.description)

        const response = await this.app.$axios.post('testimoni/create', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        return response.data
      } finally {
        commit('setGlobalNotify', false)
      }
    },
    async fetchDetailTestimoni({ commit }, id) {
      const { data } = await this.app.$axios.get(`testimoni/detail/${id}`)
      commit('setDetailTestimoni', data[0])
      return data[0]
    },
    async patchDetailTestimoni({ commit }, payload) {
      commit('setGlobalNotify', true)
      try {
        // Create FormData for file upload
        const formData = new FormData()
        if (payload.sampleFile) formData.append('sampleFile', payload.sampleFile)
        if (payload.name) formData.append('name', payload.name)
        if (payload.title) formData.append('title', payload.title)
        if (payload.description) formData.append('description', payload.description)
        if (payload.id) formData.append('id', payload.id)

        const response = await this.app.$axios.patch('testimoni/edit', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        return response.data
      } finally {
        commit('setGlobalNotify', false)
      }
    },
    async destroyTestimoni({ commit }, id) {
      commit('setGlobalNotify', true)
      try {
        const response = await this.app.$axios.delete('testimoni/delete', {
          data: {
            id,
          },
        })
        return response.data
      } finally {
        commit('setGlobalNotify', false)
      }
    },
  },
}
