import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    Controller: [
      {
        id: 0,
        name: 'ps4',
        button: [
            "start_ps4",
            "A",
            "B",
            'C',
            'D'
        ]
      },
      {
        id: 1,
        name: 'ファミコン',
        button: [
            "start_fc",
            "A",
            "B",
            'C',
            'D'
        ]
      },
      {
        id: 2,
        name: 'switch',
        button: [
            "start_swt",
            "A",
            "B",
            "C",
            "D"
        ]
      }
    ],
    Players:[],
    PlayersDetails: [
      {
        name: "player1",
        ControllerId: null,
        online: true,
        result: 0
      },
      {
        name: "player2",
        ControllerId: null,
        online: false,
        result: 0
      },
      {
        name: "player3",
        ControllerId: null,
        online: false
      },
      {
        name:"player4",
        ControllerId: null,
        online: false
      },
    ]
  },
  getters: {
    // コントローラーの名前、ID、ボタンの情報が書かれたオブジェクトを返す
    getController(state) {
      return state.Controller
    },
    getPlayers(state) {
      return state.Players
    },
    getPlayersNumber(state) {
      return state.Players.length
    },
    // プレーヤーの情報が入っているオブジェクトを返す。
    getPlayersDetails(state) {
      return state.PlayersDetails
    }
  },
  mutations: {
    setOnlinePlayer(state, payload) {
      state.PlayersDetails[payload.id].online = true
    },
    setPlayers(state, payload){
      state.Players.push(payload.Players)
    },
    incrementPlayersResult(state, payload) {
      state.PlayersDetails[payload.id].result += payload.point
    },
    decrementPlayersResult(state, payload) {
      state.PlayersDetails[payload.id].result -= payload.point
    },
    setControllerId(state, payload) {
      state.PlayersDetails[payload.id].ControllerId = payload.ControllerId
    }
  },
  actions: {
    //実装が終わったら、{commit}をlogで確認してみる
    UpdateOnlinePlayer({ commit}, {id}) {
      commit('setOnlinePlayer', {
        id: id
      })
    },
    //idにmachineNameを結びつける
    UpdateMachineName({ commit }, {machineName}){
      commit('setPlayers', { machineName })
    },
    // id
    UpdateIncrementPlayersResult({ commit },{ id }){
      commit('incrementPlayersResult', {
        point: 10,
        id: id
      })
    },
    UpdateDecrementPlayersResult({ commit },{ id }){
      commit('decrementPlayersResult',{
        point: 10,
        id:id
      })
    },
    updateControllerId({ commit }, { id , ControllerId}){
      commit('setControllerId',{
        id: id,
        ControllerId: ControllerId
      })
    }
  }
})
