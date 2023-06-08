<template>
  <div>
    <v-card-title class="pb-8 text-subtitle-2 justify-center">
      このアプリケーションは、無料で利用できます。
    </v-card-title>
    <v-card-title class="text-subtitle-2 justify-center">
      Rails6とNuxt.jsを使用した、ユーザーJWT認証付きシングルページアプリケーションです。
    </v-card-title>
    <v-card-title class="text-subtitle-2 justify-center">
      使用している技術
    </v-card-title>
    <v-container
      fluid
      :style="{ maxWidth: '960px' }"
    >
      <v-row justify="space-around">
        <div
          v-for="(tec, i) in technologies"
          :key="`tec-${i}`"
          class="text-center pa-2"
        >
          <v-avatar
            :color="tec.color"
            size="80"
          >
            <span class="white--text">
              {{ tec.name }}
            </span>
          </v-avatar>
          <div class="pt-2 text-body-2 my-grey">
            {{ tec.use }}
          </div>
          <div class="pt-2 text-body-2 my-grey">
            {{ tec.v }}
          </div>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blogUrl: 'https://blog.cloud-acct.com/categories/udemy',
      technologies: [
        { name: 'Rails api', v: 'v6.1.7.3', use: 'サーバーサイド', color: '#CC0000' },
        { name: 'SQLite3', v: 'v3.28.0', use: 'データベース', color: '#336791' },
        { name: 'Nuxt.js spa', v: 'v2.16.3', use: 'フロントエンド', color: '#00C48D' },
        { name: 'Vuetify', v: 'v2.6.14', use: 'CSSフレームワーク', color: '#1867C0' }
      ]
    }
  }
}
</script>