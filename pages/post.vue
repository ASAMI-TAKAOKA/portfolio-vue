<template>
  <v-container>
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  layout: 'post',
  validate ({ route }) {
    return route.name !== 'post'
  }
}
</script>