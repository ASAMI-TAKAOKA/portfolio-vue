class MyInject {
  constructor(ctx) {
    this.app = ctx.app
  }

  // i18nページタイトル変換
  pageTitle(routeName) {
    const jsonPath = `pages.${routeName.replace(/-/g, '.')}`
    const title = this.app.i18n.t(jsonPath)
    return title
  }

  // 日時フォーマット変換
  dateformat(datestr) {
    const dateTimeFormat = new Intl.DateTimeFormat(
      'ja', { dateStyle: 'medium', timeStyle: 'short' }
    )
    return dateTimeFormat.format(new Date(datestr))
  }

  // 投稿記事のリンク用の関数
  postLinkTo(id, name = 'post-id-dashboard') {
    console.log(id)
    return { name, params: { id } }
  }
}

// inject => オリジナルクラスを追加できる
export default ({ app }, inject) => {
  inject('my', new MyInject({ app }))
}