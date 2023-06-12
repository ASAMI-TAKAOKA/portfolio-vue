<template>
  <v-app>
    <logged-in-app-bar></logged-in-app-bar>
    <v-main>
      post.vue
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import LoggedInAppBarVue from '../components/LoggedIn/LoggedInAppBar';

export default {
  components: { 
    LoggedInAppBarVue
  }
}
</script>