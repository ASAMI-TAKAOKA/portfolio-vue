<template>
  <v-app>
    <home-app-bar />
    <v-sheet>
      <v-container
        fluid
        :style="{ maxWidth: '1280px' }"
      >
        <v-row
          v-for="(menu, i) in menus"
          :key="`menu-${i}`"
        >
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
import AppFooter from '../components/App/AppFooter.vue'

export default {
  components: {
    HomeAbout,
    HomePosts,
    HomeContact,
    AppFooter
  },
  data () {
    return {
      menus: [
        { title: 'about', subtitle: 'このサイトは節約アプリケーションです' },
        { title: 'posts', subtitle: '投稿一覧' },
        { title: 'contact', subtitle: 'お気軽にご連絡を' },
      ]
    }
  }
}
</script>