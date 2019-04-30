import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    Controller: [
      {
        id: 0,
        name: 'ファミコン',
        shortName: 'fc',
        Button: [
            "1","2","3","4","s"
        ]
      },
      {
        id: 1,
        name: 'スーファミ',
        shortName: 'sf',
        Button: [
            "1","2","3","4","s"
        ]
      },
      {
        id: 2,
        name: 'ドリキャス',
        shortName: 'dc',
        Button: [
            "1","2","3","4","s"
        ]
      },
      {
        id: 3,
        name: 'プレステ',
        shortName: 'ps',
        Button: [
            "1","2","3","4","s"
        ]
      }
      ],
      PlayersNumber: 0,
    PlayersDetails: [
      {
        name: "player1",
        id:1,
        ControllerId: null,
        online: false,
        result: 0,
        lastPushed: null,
      },
      {
        name: "player2",
        id:2,
        ControllerId: null,
        online: false,
        result: 0,
        lastPushed: null
      },
      {
        name: "player3",
        id:3,
        ControllerId: null,
        online: false,
        lastPushed: null
      },
      {
        name:"player4",
        id:4,
        ControllerId: null,
        online: false,
        lastPushed: null
      },
    ],
    sentMessage:[],
    problemNumber: 1,
    ranking:[
      {
        id:1,
        result:10
      },
      {
        id:2,
        result:20
      },
      {
        id:3,
        result:30
      },
      {
        id:4,
        result:40
      }
    ]
  },
  getters: {
    // コントローラーの名前、ID、ボタンの情報が書かれたオブジェクトを返す
    getController(state) {
      return state.Controller
    },
    getPlayersNumber(state) {
      return state.PlayersNumber
    },
    // プレーヤーの情報が入っているオブジェクトを返す。
    getPlayersDetails(state) {
      return state.PlayersDetails
    },
    getSentMessage(state) {
      return state.sentMessage
    },
    getProblemNumber(state) {
      return state.problemNumber
    },
    getRanking(state) {
      return state.ranking
    }
  },
  mutations: {
    setOnlinePlayer(state, payload) {
      state.PlayersDetails[payload.id].online = true
      state.PlayersDetails[payload.id].ControllerId = payload.ControllerId
    },
    setPlayersNumber(state){
      state.PlayersNumber += 1;
    },
    incrementPlayersResult(state, payload) {
      state.PlayersDetails[payload.id].result += 10
    },
    decrementPlayersResult(state, payload) {
      state.PlayersDetails[payload.id].result -= payload.point
    },
    setSentMessage(state, payload) {
      state.sentMessage[0] = payload.sentMessageController
      state.sentMessage[1] = payload.sentMessageButton
    },
    addProblemNumber(state) {
      state.problemNumber += 1
    },
    decideRanking(state){
      const Data = getter.getPlayersDetails
      console.log(Data)

      Data.sort(function (x,y) {
        if (x.result < y.result) return -1;
        if (x.result > y.result) return 1;
      })
      console.log(data)
      state.ranking = Data
    }
  },
  actions: {
    //実装が終わったら、{commit}をlogで確認してみる
    UpdateOnlinePlayer({ commit }, { id,ControllerId}) {
      commit('setOnlinePlayer', {
        id: id,
        ControllerId: ControllerId
      })
    },
    UpdatePlayersNumber({ commit }){
      commit('setPlayersNumber')
    },
    //idにmachineNameを結びつける
    UpdateMachineName({ commit }, {machineName}){
      commit('setPlayers', { machineName })
    },
    // id
    UpdateIncrementPlayersResult({ commit },{ id }){
      commit('incrementPlayersResult', {
        id: id
      })
    },
    UpdateDecrementPlayersResult({ commit },{ id }){
      commit('decrementPlayersResult',{
        point: 10,
        id:id
      })
    },
    UpdateSentMessage({ commit },{ sentMessageController, sentMessageButton    }){
      commit('setSentMessage',{
        sentMessageController: sentMessageController,
        sentMessageButton: sentMessageButton
      })
    },
    UpdateProblemNumber({ commit}){
      commit('addProblemNumber')
    },
    UpdateRanking({ commit }){
      commit('decideRanking')
    }
  }
})
