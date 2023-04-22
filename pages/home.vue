<template>
  <div class="home">
    <span>email：{{ email }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "example.com",
    }
  },
  async asyncData({ app }) {
    // console.log(app)
    const response = await app.$axios.get('http://localhost:3000/api/contents')
    return {
      contents: response.data
    }
  }
}
</script>