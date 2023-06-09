<template>
  <v-app>
    <logged-in-app-bar></logged-in-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import LoggedInAppBarVue from '../components/LoggedIn/LoggedInAppBar';
import AppFooter from '../components/App/AppFooter';

export default {
  components: { 
    LoggedInAppBarVue,
    AppFooter
  }
}
</script>