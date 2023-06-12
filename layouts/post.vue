<template>
  <v-app>
    <!-- tool bar -->
    <logged-in-app-bar
      #navigation-toggle-button
      clipped-left
    >
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
      />
    </logged-in-app-bar>
    <!-- navigation drawer -->
    <post-navigation-drawer
      :drawer.sync="drawer"
    />

    <!-- main contents -->
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import LoggedInAppBarVue from '../components/LoggedIn/LoggedInAppBar';

export default {
  components: { 
    LoggedInAppBarVue
  },
  data() {
    return {
      drawer: null
    }
  }
}
</script>