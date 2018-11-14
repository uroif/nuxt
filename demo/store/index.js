const axios = require('axios');
const base_url = 'http://localhost:3001'

export const actions = {
    async nuxtServerInit ({ commit }) {
        let response = await axios.get(`${base_url}/users`)
      if (response) {
        await commit('usermodule/insertUsers', response.data)
      }
    }
  }