export default async ({ store, $axios }) => {
  // 投稿一覧が存在しない場合に取得
  // このようにしないと、ページ遷移のたびにこのaxiosが呼ばれて
  // 毎回このAPI通信が走ってしまうため。
  if (!store.state.post.list.length) {
    await $axios.get('/api/v1/posts')
      .then(posts => {
        // APIから取得したデータをコンソールに出力
        console.log(posts)

        // データをストアにディスパッチ
        store.dispatch('getPostList', posts)
      })
      .catch(error => {
        // エラーハンドリングが必要であればここでエラーを処理することもできます
        console.error('APIリクエストエラー:', error)
      })
  }
}




