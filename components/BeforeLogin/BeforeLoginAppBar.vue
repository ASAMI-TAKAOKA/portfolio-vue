<template>
  <v-app-bar
    app
    :height="homeAppBarHeight"
    color="white"
  >
    <nuxt-link
      to="/"
      class="text-decoration-none"
    >
      <app-logo />
    </nuxt-link>

    <app-title
      class="hidden-mobile-and-down"
    />

    <v-spacer />

    <before-login-app-bar-signup-button />
    <before-login-app-bar-login-button />
  </v-app-bar>
</template>

<script>
import BeforeLoginAppBarLoginButton from '../BeforeLogin/BeforeLoginAppBarLoginButton'
import BeforeLoginAppBarSignupButton from '../BeforeLogin/BeforeLoginAppBarSignupButton'

export default {
  components: { 
    BeforeLoginAppBarLoginButton,
    BeforeLoginAppBarSignupButton
  },
  data ({ $store }) {
    return {
      homeAppBarHeight: $store.state.styles.homeAppBarHeight
    }
  }
}
</script>