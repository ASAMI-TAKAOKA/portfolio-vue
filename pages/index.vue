<template>
  <v-app>
    <home-app-bar
      :menus="menus"
      :img-height="imgHeight"
    />
    <v-img
      id="scroll-top"
      dark
      src="/image/fruits.jpg"
      gradient="to top right, rgba(19,84,122,.6), rgba(128,208,199,.9)"
      :height="imgHeight"
    >
      <v-row
        align="center"
        justify="center"
        :style="{ height: `${imgHeight}px` }"
      >
        <v-col
          cols="12"
          class="text-center"
        >
          <h1 class="display-1 mb-4">
            買い物を少しでもお得に
          </h1>
          <h4
            class="subheading"
            :style="{ letterSpacing: '5px' }"
          >
            スーパーの商品価格を比較できる、節約ツール
          </h4>
        </v-col>
      </v-row>
    </v-img>
    <v-sheet>
      <v-container
        fluid
        :style="{ maxWidth: '1280px' }"
      >
        <v-row
          v-for="(menu, i) in menus"
          :key="`menu-${i}`"
        >
          <v-col
            :id="menu.title"
            cols="12"
          >
            <v-card flat>
              <v-card-title class="justify-center display-1">
                {{ $t(`menus.${menu.title}`) }}
              </v-card-title>
              <v-card-text class="text-center">
                {{ menu.subtitle }}
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <div :is="`home-${menu.title}`"></div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import HomeAbout from '~/components/Home/HomeAbout'
import HomePosts from '~/components/Home/HomePosts'
import HomeContact from '~/components/Home/HomeContact'
import HomeAppBar from '../components/Home/HomeAppBar'
import AppFooter from '../components/App/AppFooter'

export default {
  components: {
    HomeAbout,
    HomePosts,
    HomeContact,
    HomeAppBar,
    AppFooter
  },
  data () {
    return {
      menus: [
        { title: 'about', subtitle: 'このサイトは節約アプリケーションです。' },
        { title: 'posts', subtitle: 'みんなの投稿です。' },
        { title: 'contact', subtitle: 'お気軽にご連絡ください。' },
      ],
      imgHeight: 500,
    }
  }
}
</script>