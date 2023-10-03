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
    list: []
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
  setPostList(state, payload) {
    // データをセットする前にコンソールに出力
    console.log('Setting post list:', payload)
    state.post.list = payload
    console.log('Setting post list type:', typeof state.post.list)
  },
  setCurrentPost(state, payload) {
    console.log('Setting current post:', payload)
    state.post.current = payload
    console.log('Setting current post type:', typeof state.post.current)
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
  // commitはmutationを呼び出す
  getPostList({ commit }, posts) {
    posts = posts || []
    commit('setPostList', posts)
    // データをコンソールに出力して確認。
    // middlewareでdispatchしたデータを取得できている。
    console.log('Fetched posts:', posts)
    console.log('Fetched posts type:', typeof posts)
  },
  getCurrentPost({ state, commit }, params) {
    let currentPost = null
    if (params && params.id) {
      const id = Number(params.id)
      currentPost = state.post.list.find(post => post.id === id) || null
    }
    commit('setCurrentPost', currentPost)
    // データをコンソールに出力して確認。
    // middlewareでdispatchしたデータを取得できている。
    console.log('Fetched currentPost:', currentPost)
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
