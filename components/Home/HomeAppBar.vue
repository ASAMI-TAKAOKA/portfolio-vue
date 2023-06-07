<template>
  <!-- app このバインドキーをつけることで上部に固定されるツールバーになる。-->
  <v-app-bar
    app
    :dark="!isScrollPoint"
    :height="homeAppBarHeight"
    :color="toolbarStyle.color"
    :elevation="toolbarStyle.elevation"
  >
    <!-- @click.native 子コンポーネントへ@clickを追加する場合は、native拡張子が必要 -->
    <app-logo
      @click.native="goTo('scroll-top')"
    />
    <v-toolbar-title>
      {{ appName }}
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="ml-2">
      <v-btn
        v-for="(menu, i) in menus"
        :key="`menu-btn-${i}`"
        text
        @click="goTo(menu.title)"
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
    },
    imgHeight: {
      type: Number,
      default: 0
    }
  },
  // $storeはstore/index.jsの中身を使用するためのcontext
  data ({ $config: { appName }, $store }) {
    return {
      appName,
      scrollY: 0,
      homeAppBarHeight: $store.state.styles.homeAppBarHeight
    }
  },
  computed: {
    // 500 - 56 = 444px超の場合、trueを返す
    isScrollPoint() {
      return this.scrollY > (this.imgHeight - this.homeAppBarHeight)
    },
    toolbarStyle() {
      const color = this.isScrollPoint ? 'white' : 'transparent'
      const elevation = this.isScrollPoint ? 4 : 0
      return { color, elevation }
    }
  },
  // マウントされた後で実行（Vueの実行準備が整った後で実行）
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  // Vueインスタンスが破壊される直前に実行
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.scrollY = window.scrollY
    },
    goTo(id) {
      this.$vuetify.goTo(`#${id}`)
    }
  }
}
</script>