export default function ({ $auth, redirect }) {
  // 未ログインの場合
  if (!$auth.loggedIn) {
    // 会員登録していない場合
    if (!$auth.user) {
      return redirect('/users/signup')
    }
  }
}