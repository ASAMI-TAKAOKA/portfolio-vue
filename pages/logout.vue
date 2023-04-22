<template>
  <a v-on:click="login()">ログアウト</a>
</template>

<script>
export default {
  async asyncData({ app }) {
    // console.log(app)
    const response = await app.$axios.get('http://localhost:3000/api/contents')
    return {
      contents: response.data
    }
  }
}
</script>