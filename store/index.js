// アプリ全体で共有したいことはstore/index.jsに書くことでVuexで保有する

const homePath = 'posts'


// stateは共通の変数。vueファイルで言うところのdata
export const state = () => ({
  loggedIn: false,
  styles: {
    homeAppBarHeight: 56
  },
  loggedIn: {
    homePath: {
      name: homePath
    }
  },
  post: {
    current: null,
    list: [
      { id: 1, name: 'MyPost01', updatedAt: '2020-04-01T12:00:00+09:00' },
      { id: 2, name: 'MyPost02', updatedAt: '2020-04-05T12:00:00+09:00' },
      { id: 3, name: 'MyPost03', updatedAt: '2020-04-03T12:00:00+09:00' },
      { id: 4, name: 'MyPost04', updatedAt: '2020-04-04T12:00:00+09:00' },
      { id: 5, name: 'MyPost05', updatedAt: '2020-04-01T12:00:00+09:00' }
    ]
  },
  user: {
    current: null
  },
  auth: {
    token: null,
    expires: 0,
    payload: {}
  }
})

// 算出プロパティ。vueファイルで言うところのcomputed
export const getters = {
}

// stateの値を変更できる唯一の場所
// payloadの部分はcurrentPostでも良いが、公式ドキュメントに合わせてpayloadとしておく
export const mutations = {
  setCurrentPost(state, payload) {
    state.post.current = payload
  },
  setCurrentUser (state, payload) {
    state.user.current = payload
  },
  setAuthToken (state, payload) {
    state.auth.token = payload
  },
  setAuthExpires (state, payload) {
    state.auth.expires = payload
  },
  setAuthPayload (state, payload) {
    state.auth.payload = payload
  }
}

// アプリ全体のメソッドを置く場所。vueファイルで言うところのmethods
export const actions = {
  // { state, getters, commit, dispatch, rootState, rootGetters }
  // rootState => ルート（store/index.js）のstateを取得
  getCurrentPost({ state, commit }, params) {
    const id = Number(params.id)
    const currentPost =
      state.post.list.find(post => post.id === id) || null
    commit('setCurrentPost', currentPost)
  },
  getCurrentUser ({ commit }, user) {
    commit('setCurrentUser', user)
  },
  getAuthToken ({ commit }, token) {
    commit('setAuthToken', token)
  },
  getAuthExpires ({ commit }, expires) {
    expires = expires || 0
    commit('setAuthExpires', expires)
  },
  getAuthPayload ({ commit }, jwtPayload) {
    jwtPayload = jwtPayload || {}
    commit('setAuthPayload', jwtPayload)
  }
}
