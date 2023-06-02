<template>
  <v-app>
    <v-container>
      <h1>ダッシュボード</h1>
      <h5>ログイン状態:{{ $auth.loggedIn }}</h5>
      <!-- <p>{{ $auth.user }}</p> -->

      <!-- ログイン済みの場合 -->
      <!-- 各種ボタンを表示（横並び） -->
      <v-btn
        v-if="$auth.loggedIn"
        color="light-green darken-1"
        class="white--text"
        @click="logout"
      >
      Logoutする
      </v-btn>
      <v-btn
        v-if="$auth.loggedIn"
        color="primary"
        @click="openPostCreateModal"
      >
      新規投稿
    </v-btn>
      <!-- <v-btn color="secondary" @click="openAddCategoryModal">カテゴリー追加</v-btn> -->

      <!-- 未ログインの場合 -->
      <!-- 各種ボタンを表示（横並び） -->
      <v-btn
        v-if="!$auth.loggedIn"
        color="light-green darken-1"
        class="white--text"
        @click="openLogin"
      >
      Loginする
      </v-btn>
      <v-btn
        v-if="!$auth.loggedIn"
        color="primary"
        @click="openSignup"
      >
      新規会員登録
      </v-btn>

      <!-- 各種モーダル -->
      <post-create-modal ref="postCreateModal" :categories="categories" :parent-category-array="parentCategoryArray"></post-create-modal>
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
      categories: [],
      parentCategoryArray: []
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
  methods: {
    logout() {
      this.$auth.logout()
    },
    openPostCreateModal() {
      this.$refs.postCreateModal.openDialog()
    },
    openAddCategoryModal() {
      this.$refs.addCategoryModal.openDialog()
    },
    openLogin() {
      this.$router.push('/users/login')
    },
    openSignup() {
      this.$router.push('/users/signup')
    }
  }
}
</script>