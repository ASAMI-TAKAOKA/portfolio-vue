<template>
  <v-container>
    {{ $store.state.post.current }}
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  layout: 'post',
  // どのような場合にバリデートを通すかを書く
  // validate()は、バリデートに引っかかると404を返す組み込み関数
  // false を返す 場合：ページへのアクセスが拒否され、404エラーページを表示
  // バリデーションに失敗し、ページへのアクセスが許可されない
  // TODO: falseを返してしまう。
  // validate({ store, route }) {
  //   const isValid = !!store.state.post.current && route.name !== 'post'
  //   console.log('Validation result:', isValid)
  //   return isValid
  // }
}
</script>