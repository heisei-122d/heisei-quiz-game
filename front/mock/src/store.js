import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    Controller: [
      {
        id: 0,
        name: 'ps4',
        button: [
            "start_ps4",
            "A",
            "B"
        ]
      },
      {
        id: 1,
        name: 'ファミコン',
        button: [
            "start_fc",
            "A",
            "B"
        ]
      },
      {
        id: 2,
        name: 'switch',
        button: [
            "start_swt",
            "A",
            "B"
        ]
      }
    ],
    OnControllerId: [],
    Players:[],
    PlayersResult:[]
  },
  getters: {
    getController(state) {
      return state.Controller
    },
    getOnControllerId(state){
      return state.OnControllerId
    },
    getPlayers(state) {
      return state.Players
    },
    getPlayersNumber(state){
      return state.Players.length
    },
    getPlayersResult(state){
      return state.PlayersResult
    }
  },
  mutations: {
    setOnControllerId(state, payload) {
      state.OnControllerId.push(payload.OnControllerId)
    },
    setPlayers(state, payload){
      state.Players.push(payload.Players)
    },
    incrementPlayersResult(state, payload) {
      state.PlayersResult += payload.point
    },
    decrementPlayersResult(state, payload) {
      state.PlayerResult -= payload.point
    }
  },
  actions: {
    //実装が終わったら、{commit}をlogで確認してみる
    UpdateControllerId({ commit }, id){
      commit('setOnControllerId', { id })
    },
    UpdatePlayers({ commit }, playerName){
      commit('setPlayers', { playerName })
    },
    UpdateIncrementPlayersResult({ commit }){
      commit('incrementPlayersResult', {
        point: 10
      })
    },
    UpdateDecrrementPlayersResult({ commit }){
      commit('decrementPlayersResult',{
        point: 10
      })
    }
  }
})
