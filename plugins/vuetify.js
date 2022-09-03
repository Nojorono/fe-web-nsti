// src/plugins/vuetify.js
import Vuetify from 'vuetify/lib'

export default new Vuetify({
  theme: {
    options: {
      themeCache: {
        get: (key) => localStorage.getItem(key),
        set: (key, value) => localStorage.setItem(key, value),
      },
    },
  },
})
