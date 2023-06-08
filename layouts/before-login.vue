<template>
  <v-app>
    <before-login-app-bar></before-login-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import BeforeLoginAppBar from '../components/BeforeLogin/BeforeLoginAppBar';
import AppFooter from '../components/App/AppFooter';

export default {
  components: { 
    BeforeLoginAppBar,
    AppFooter
  }
}
</script>