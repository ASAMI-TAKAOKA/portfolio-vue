<template>
  <!-- TODO: エラーになってしまう -->
  <!-- <v-breadcrumbs
    :items="items"
    class="d-block text-truncate"
  >
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item>
          <div
          class="text-truncate"
          :style="{ maxWidth: '120px' }"
          >
            {{ item.text }}
          </div>
        
      </v-breadcrumbs-item>
    </template>
    <template v-slot:divider>
      <v-icon>
        mdi-chevron-right
      </v-icon>
    </template>
  </v-breadcrumbs> -->
</template>

<script>
// export default {
//   computed: {
//     items() {
//       const currentRouteName = this.$route.name
//       const items = [
//         { text: this.$my.pageTitle(currentRouteName) }
//       ]
//       // $vuetify.breakpoint.xs => window幅が600px未満の場合にtrueを返す
//       // ルートにpostを含むかつwindow幅が600px未満ではない場合
//       if(currentRouteName.match(/post/) && !this.$vuetify.breakpoint.xs) {
//         // 投稿記事名をunshiftする
//         const currentPost = this.$store.state.post.current
//         items.unshift({ text: currentPost.name })
//       }
//       return items
//     }
//   }
// }
</script>