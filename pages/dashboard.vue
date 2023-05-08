<template>
  <v-app>
    <v-container>
      <h1>ダッシュボード</h1>
      <h5>ログイン状態:{{ $auth.loggedIn }}</h5>
      <!-- <p>{{ $auth.user }}</p> -->
      <v-btn
        v-if="$auth.loggedIn"
        color="light-green darken-1"
        class="white--text"
        @click="logout"
      >
      Logoutする
      </v-btn>
      <v-btn color="primary" @click="openModal">新規投稿</v-btn>
      <post-create-modal ref="postCreateModal"></post-create-modal>
      <contents-card
        :posts="posts"
      />
    </v-container>
  </v-app>
</template>

<script>
import PostCreateModal from '@/components/postCreateModal.vue'
import ContentsCard from '../components/contentsCard.vue'

export default {
  components: {
    ContentsCard
  },
  data() {
    return {
      posts: []
    }
  },
  async fetch() {
    const response = await this.$axios.get('/api/v1/posts')
    this.posts = response.data.data
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
    openModal() {
      this.$refs.postCreateModal.openDialog()
    }
  }
}
</script>