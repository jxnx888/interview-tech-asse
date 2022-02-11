import {createStore} from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      voteId: 0,
      voteInfo: [
        [
          {
            id: 0,
            value: false
          }
        ]

      ],
    }
  },
  mutations: {
    addVoteGroup (state, id) {
      state.voteId++
      state.voteInfo.push(
        [
          {
            id: state.voteId,
            value: false
          }
        ]
      )
    },
    addVoteItem (state, groupIndex) {
      state.voteId++
      state.voteInfo[groupIndex].push({
        id: state.voteId,
        value: false
      })
    },
    addSameVoteItem (state, groupIndex) {
      state.voteId++
      state.voteInfo[groupIndex].push({
        id: state.voteId,
        value: state.voteInfo[groupIndex][0].value
      })
    },
    changeVoteVal (state, obj) {
      state.voteInfo[obj['groupIndex']][obj['voteIndex']].value = !state.voteInfo[obj['groupIndex']][obj['voteIndex']].value
    },
    changeSameGroupVoteVal (state, obj) {
      state.voteInfo[obj['groupIndex']].map((item, index)=>{
        item.value = !item.value
      })
    }
  },
  actions: {}
});

export default store;
