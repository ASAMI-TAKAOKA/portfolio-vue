<template>
  <v-app>
    <v-container>
      <h1>ダッシュボード</h1>
      <h2>ログイン状態:{{ $auth.loggedIn }}</h2>
      <!-- <p>{{ $auth.user }}</p> -->
      <v-btn
        v-if="$auth.loggedIn"
        color="light-green darken-1"
        class="white--text"
        @click="logout"
      >
      Logoutする
      </v-btn>
    </v-container>
  </v-app>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
    }
  }
}
</script>