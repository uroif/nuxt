import Vuex from 'vuex'
const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      tags: []
    }),
    mutations: {
      getTags(state, payload){
          state.tags = payload
      }
    },
    actions:{
        async getTags(state, payload){
            state.commit('getTags', payload)
        }
    }
  })
}
export default createStore