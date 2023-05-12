<template>
  <v-app>
    <v-container>
      <h1>ダッシュボード</h1>
      <h5>ログイン状態:{{ $auth.loggedIn }}</h5>
      <!-- <p>{{ $auth.user }}</p> -->

      <!-- 各種ボタンを表示（横並び） -->
      <v-btn
        v-if="$auth.loggedIn"
        color="light-green darken-1"
        class="white--text"
        @click="logout"
      >
      Logoutする
      </v-btn>
      <v-btn color="primary" @click="openPostCreateModal">新規投稿</v-btn>
      <v-btn color="secondary" @click="openAddCategoryModal">カテゴリー追加</v-btn>

      <!-- 各種モーダル -->
      <post-create-modal ref="postCreateModal" :categories="categories"></post-create-modal>
      <add-category-modal ref="addCategoryModal"></add-category-modal>

      <!-- コンテンツ一覧を表示 -->
      <contents-card
        :posts="postLists"
      />
    </v-container>
  </v-app>
</template>

<script>
import PostCreateModal from '@/components/postCreateModal.vue'
import addCategoryModal from '../components/addCategoryModal.vue'
import ContentsCard from '../components/contentsCard.vue'

export default {
  components: {
    ContentsCard
  },
  data() {
    return {
      postLists: [],
      categories: []
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

  this.postLists = posts
  this.categories = categories
},
  methods: {
    logout() {
      this.$auth.logout()
    },
    openPostCreateModal() {
      this.$refs.postCreateModal.openDialog()
    },
    openAddCategoryModal() {
      this.$refs.addCategoryModal.openDialog()
    }
  }
}
</script>