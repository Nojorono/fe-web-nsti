import Vuex from 'vuex'
import home from './home.js'
import logReg from './logReg.js'
import cms from './cms.js'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      home,
      logReg,
      cms,
    },
  })
}

export default createStore
