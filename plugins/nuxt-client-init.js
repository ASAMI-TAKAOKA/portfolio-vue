export default async ({ $auth, $axios }) => {
  console.log('Refreshing auth token...') // ログを追加
  // axiosのpostメソッドは第2引数はパラメーター、第3引数にオプションがくる
  await $axios.post(
    '/api/v1/auth_token/refresh',
    {},
    { validateStatus: status => $auth.resolveUnauthorized(status) }
  ).then(response => {
    $auth.login(response)
    console.log('Auth token refreshed successfully.') // 成功時のログ
  }).catch(error => {
    console.error('Error refreshing auth token:', error) // エラーログ
  })
}