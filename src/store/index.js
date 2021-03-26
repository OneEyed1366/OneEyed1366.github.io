import Vue from "vue";
import Vuex from "vuex";
import { get } from 'axios';
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios)

export default new Vuex.Store({
  namespaced: true,
  state: {
    bids: [],
    asks: [],
    whatCanSearch: [
      'BTCUSDT',
      'BNBBTC',
      'ETHBTC'
    ],
    whatToSearch: 'BTCUSDT',
    howManyToSearch: 500
  },
  mutations: {
    set(state, data) {
      if (typeof(state[data.to]) === 'string' || typeof(state[data.to]) === 'number') {
        state[data.to] = data.content
      } else if (state[data.to].length >= state.howManyToSearch) {
        state[data.to].splice(0, 1)
        state[data.to].push(data.content)
      } else {
        state[data.to].push(data.content)
      }
    }
  },
  actions: {
    get ({ commit }) {
      const url = `https://api.binance.com/api/v3/depth?symbol=${this.state.whatToSearch}&limit=${this.state.howManyToSearch}`

      get(url)
        .then((res) => {
          for (const arr of res.data.bids) {
            commit('set', {
              to: 'bids', 
              content: [arr[0], arr[1], arr[0] * arr[1]]
            })
          }
          for (const arr of res.data.asks) {
            commit('set', {
              to: 'asks', 
              content: [arr[0], arr[1], arr[0] * arr[1]]
            })
          }
        })
    }
  },
  modules: {},
});
