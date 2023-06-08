<template>
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
import postDetailModal from '@/components/postDetailModal'

export default {
  components: {
    postDetailModal
  },
  data () {
    return {
      postLists: [],
      categories: [],
      parentCategoryArray: [],
      currentPage: 1,
      postsPerPage: 6,
      openDialog: false,
      selectedPost: {},
    }
  },
  async fetch() {
    const [postsResponse, categoriesResponse] = await Promise.all([
      this.$axios.get('/api/v1/posts'),
      this.$axios.get('/api/v1/categories')
    ])

    const posts = postsResponse.data.post.map(post => ({
      id: post.id,
      productName: post.product_name,
      price: post.price,
      storeInformation: post.store_information,
      createdAt: post.created_at,
      imageUrl: post.image_url,
      categoryName: post.category_name.join(", ") // 配列に対してjoinメソッドを使い、配列の要素を文字列に結合
    }))

    const categories = categoriesResponse.data.category.map(category => ({
      id: category.id,
      name: category.name
    }))

    const parentCategoryArray = postsResponse.data.parent_category_array.map(parent_category_array => ({
      id: parent_category_array.id,
      name: parent_category_array.name
    }))
    this.postLists = posts
    this.categories = categories
    this.parentCategoryArray = parentCategoryArray
  },
  computed: {
    paginatedPosts() {
      const startIndex = (this.currentPage - 1) * this.postsPerPage
      const endIndex = startIndex + this.postsPerPage
      return this.postLists.slice(startIndex, endIndex)
    },
    totalPages() {
      return Math.ceil(this.postLists.length / this.postsPerPage)
    },
    isDisabled() {
      return this.totalPages === 1
    }
  },
  methods: {
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
