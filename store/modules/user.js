export default {
  namespaced: true,
  state: {
    hasLogin: false, // 用户是否登录
    id: 0,
    name: ''
  },
  mutations: {
    updateId (state, id) {
      state.id = id
    },
    updateName (state, name) {
      state.name = name
    }
  }
}
