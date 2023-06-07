<template>
  <!-- app このバインドキーをつけることで上部に固定されるツールバーになる。-->
  <v-app-bar
    app
    light
  >
    <app-logo></app-logo>
    <v-toolbar-title>
      {{ appName }}
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="ml-2">
      <v-btn
        v-for="(menu, i) in menus"
        :key="`menu-btn-${i}`"
        text
      >
        {{ $t(`menus.${menu.title}`) }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import AppLogo from '../App/AppLogo'

export default {
  props: {
    menus: {
      type: Array,
      default: () => []
    }
  },
  data ({ $config: { appName } }) {
    return {
      appName
    }
  }
}
</script>