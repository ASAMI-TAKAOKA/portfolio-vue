<template>
  <v-app>
    <v-container>
      <h1>会員情報の変更が完了しました。</h1>
      <v-btn
        color="light-green darken-1"
        class="white--text"
        @click="goToDashboard"
      >
      ダッシュボードへ戻る
      </v-btn>
    </v-container>
  </v-app>
</template>

<script>
export default {
  methods: {
    goToDashboard(){
      window.location.href = '/dashboard'
      },
}
}
</script>