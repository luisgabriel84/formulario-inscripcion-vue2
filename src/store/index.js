import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showMessageSuccess: false
  },
  mutations: {
    successMessage(state, payload){
      state.showMessageSuccess = payload
      setTimeout(() => {
        state.showMessageSuccess = false
      }, 3000);

    }
  },
  actions: {
    saveData({commit}, userData){
        db.collection('inscritos').add(userData)
        .then(()=>{
          commit("successMessage", true)
        })
        console.log(userData)
    }

  },
  modules: {
  }
})
