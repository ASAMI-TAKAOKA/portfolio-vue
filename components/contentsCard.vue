<template>
      <!-- 削除予定 -->
  <div class="contents-card pre-wrap">
    <v-container>
      <v-row>
        <v-col
          v-for="(post, index) in paginatedPosts"
          :key="post.id"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="py-2 px-2" min-width="300px" height="100%">
            <div style="display: flex; justify-content: center;">
              <v-img :src="post.imageUrl" alt="post image" height="200" max-width="100%" contain></v-img>
            </div>
            <v-card-text class="pre-wrap">{{ post.categoryName }}</v-card-text>
            <v-card-title class="font-weight-bold">{{ post.productName }}</v-card-title>
            <v-card-text class="pre-wrap">{{ post.price + '円'}}</v-card-text>
            <v-card-text class="pre-wrap">{{ post.storeInformation}}</v-card-text>
            <v-card-text class="pre-wrap">{{ post.createdAt}}</v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn height="60px" class="mb-5" color="primary" text @click="openPostDetailModal(post)">詳細</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <post-detail-modal
        :show-post-detail-modal.sync="showPostDetailModal"
        :selected-post="selectedPost"
        :selected-user="selectedUser"
      />

      <v-row justify="center">
        <v-pagination
          v-model="currentPage"
          :length="totalPages"
          :disabled="isDisabled"
          :prev-icon="$vuetify.icons.prevPage"
          :next-icon="$vuetify.icons.nextPage"
          color="primary"
        ></v-pagination>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import postDetailModal from '@/components/postDetailModal.vue'

export default {
  components: {
    postDetailModal
  },
  name: 'ContentsCard',
  props: {
    posts: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentPage: 1,
      postsPerPage: 6,
      openDialog: false,
      selectedPost: {},
      selectedUser: {},
      showPostDetailModal: false
    }
  },
  computed: {
    paginatedPosts() {
      const startIndex = (this.currentPage - 1) * this.postsPerPage
      const endIndex = startIndex + this.postsPerPage
      return this.posts.slice(startIndex, endIndex)
    },
    totalPages() {
      return Math.ceil(this.posts.length / this.postsPerPage)
    },
    isDisabled() {
      return this.totalPages === 1
    }
  },
  methods: {
    onPageChanged(pageNumber) {
      this.currentPage = pageNumber
    },
    openPostDetailModal(post) {
      // TODO:railsのActiveModelSerializersで予めキャメルケースに変換してから取得できるようにする
      this.$axios.get('api/v1/posts/' + post.id)
        .then(response => {
          const post = response.data.post
          const user = response.data.user
          const transformedPost = {}
          const transformedUser = {}

          for (const key in post) {
            if (post.hasOwnProperty(key)) {
              const transformedKey = key.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase())
              transformedPost[transformedKey] = post[key]
            }
          }
          this.selectedPost = transformedPost
          for (const key in user) {
            if (user.hasOwnProperty(key)) {
              const transformedKey = key.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase())
              transformedUser[transformedKey] = user[key]
            }
          }
          this.selectedUser = transformedUser

          this.openDialog = true
          this.showPostDetailModal = true
        })
    }
  }
}
</script>

<style scoped>
.contents-card {
  margin: 10px;
  height: 90%;
}
.pre-wrap {
  white-space: pre-wrap;
}
.gradient {
  background: linear-gradient( white 0%, white 90%, rgb(89, 198, 248) 100%);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>