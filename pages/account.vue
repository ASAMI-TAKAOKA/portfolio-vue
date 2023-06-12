<template>
  <v-container>
    <v-btn
      v-if="!!currentPost"
      small
      plain
      color="primary"
      :to="$my.postLinkTo(currentPost.id, dashboardPath)"
    >
      <v-icon
        left
      >
        mdi-chevron-double-left
      </v-icon>
      {{ $my.pageTitle(dashboardPath) }}に戻る
    </v-btn>
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  layout: 'logged-in',
  validate ({ route }) {
    return route.name !== 'account'
  },
  data() {
    return {
      dashboardPath: 'post-id-dashboard'
    }
  },
  computed: {
    currentPost() {
      return this.$store.state.post.current
    }
  }
}
</script>