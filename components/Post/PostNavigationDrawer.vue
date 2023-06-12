<template>
  <v-navigation-drawer
    v-model="setDrawer"
    app
    clipped
    :mobile-breakpoint="mobileBreakpoint"
  >
    <v-list>
      <!-- close button -->
      <template
        v-if="isMobileBreakPointLessThan"
      >
        <v-list-item
          @click="$emit('update:drawer', false)"
        >
          <v-list-item-content
            class="text-center"
          >
            <v-list-item-action-text
              class="d-flex justify-center align-center"
            >
              <v-icon>
                mdi-chevron-double-left
              </v-icon>
              閉じる
            </v-list-item-action-text>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
      </template>

      <!-- nav menus -->
      <v-list-item
        v-for="(nav, i) in navMenus"
        :key="`nav-${i}`"
        :to="$my.postLinkTo($route.params.id, nav.name)"
      >
        <v-list-item-icon>
          <v-icon v-text="nav.icon" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ $my.pageTitle(nav.name) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      mobileBreakpoint: 960,
      navMenus: [
        { name: 'post-id-dashboard', icon: 'mdi-view-dashboard' },
        { name: 'post-id-layouts', icon: 'mdi-view-compact' },
        { name: 'post-id-pages', icon: 'mdi-image' },
        { name: 'post-id-components', icon: 'mdi-view-comfy' },
        { name: 'post-id-settings', icon: 'mdi-cog' },
        { name: 'post-id-help', icon: 'mdi-help-circle' }
      ]
    }
  },
  props: {
    drawer: {
      type: Boolean,
      default: null
    }
  },
  computed: {
    setDrawer: {
      get() { return this.drawer },
      set(val) { return this.$emit('update:drawer', val) }
    },
    isMobileBreakPointLessThan() {
      const windowWidth = this.$vuetify.breakpoint.width
      return this.mobileBreakpoint > windowWidth
    }
  }
}
</script>