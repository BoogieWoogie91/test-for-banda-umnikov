import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    person: {},
    beer: {},
  },
  getters: {
  },
  mutations: {
    setPerson(state, person) {
      state.person = person
    },

    setBeer(state, beer) {
      state.beer = beer
    },
  },
  actions: {
    getPerson() {
      axios.get(`https://random-data-api.com/api/users/random_user`).then((response) => {
        this.commit('setPerson', response.data)
      })
    },

    async getBeer() {
      await axios.get(`https://random-data-api.com/api/beer/random_beer `).then((response) => {
        this.commit('setBeer', response.data)
      })
    },
  },
  modules: {
  }
})
