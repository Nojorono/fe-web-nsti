import Vuex from 'vuex'
import home from './home.js'
import logReg from './logReg.js'
import cms from './cms.js'
import mobile from './mobile.js'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      home,
      logReg,
      cms,
      mobile,
    },
    actions: {
      async nuxtServerInit(
        { state, commit, dispatch },
        { req, redirect, query, route, isMobile }
      ) {
         if(isMobile) {
           await commit('mobile/setDevice', 'mwebsite')
           console.log(isMobile, '=================')
         }
      },
    },
  })
}

export default createStore
