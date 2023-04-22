<template>
  <div class="login">
    ログイン画面
    <div>
      <div>{{ this.message }}</div>
      <input type="text" v-model="email" placeholder="NAME" /><br />
      <input type="password" v-model="password" placeholder="PASSWORD" /><br />
      <button v-on:click="login()">LOGIN</button>
    </div>
  </div>
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