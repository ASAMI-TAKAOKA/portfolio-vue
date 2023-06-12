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
  }
})

// 算出プロパティ。vueファイルで言うところのcomputed
export const getters = {

}

// stateの値を変更できる唯一の場所
export const mutations = {

}

// アプリ全体のメソッドを置く場所。vueファイルで言うところのmethods
export const actions = {

}
