// アプリ全体で共有したいことはstore/index.jsに書くことでVuexで保有する

const redirectPath = 'posts'


// stateは共通の変数。vueファイルで言うところのdata
export const state = () => ({
  loggedIn: false,
  styles: {
    homeAppBarHeight: 56
  },
  loggedIn: {
    redirectPath: {
      name: redirectPath
    }
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
