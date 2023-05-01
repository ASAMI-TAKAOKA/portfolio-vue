<template>
  <v-app>
    <v-container>
      <h1>会員登録が完了しました。</h1>
      <v-btn
        color="light-green darken-1"
        class="white--text"
        @click="goTologinPage"
      >
      Loginページへ移動
      </v-btn>
    </v-container>
  </v-app>
</template>

<script>
export default {
  methods: {
    goTologinPage(){
      window.location.href = '/users/login'
      },
}
}
</script>