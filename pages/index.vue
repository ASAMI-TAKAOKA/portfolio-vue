<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          ようこそ！
        </v-card-title>
        <v-card-text>
          <p>あいうえお</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            ボタン
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
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
