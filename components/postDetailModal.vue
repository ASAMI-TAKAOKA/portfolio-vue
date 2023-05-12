<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <div style="text-align: center"><img :src="selectedPost.imageUrl" alt="post image"></div>
          <p><strong>商品名: </strong>{{ selectedPost.productName }}</p>
          <p><strong>カテゴリー: </strong>{{ isCategoryName }}</p>
          <p><strong>価格: </strong>{{ selectedPost.price + '円' }}</p>
          <p><strong>お店情報: </strong>{{ selectedPost.storeInformation }}</p>
          <p><strong>コメント: </strong>{{ selectedPost.body }}</p>
          <p><strong>投稿日時: </strong>{{ selectedPost.createdAt }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog">閉じる</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
export default {
  props: {
    selectedPost: {
      type: Object,
      default: null
    },
    showPostDetailModal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formTitle: '投稿詳細',
      dialog: this.showPostDetailModal
    }
  },
  watch: {
    showPostDetailModal: function(newVal) {
      this.dialog = newVal;
    }
  },
  methods: {
    closeDialog() {
      this.$emit('update:showPostDetailModal', false)
    },
  },
  computed: {
    isCategoryName() {
      if (this.selectedPost && this.selectedPost.categoryName) {
      return this.selectedPost.categoryName.join(", ")
    } else {
      return ""
    }
    }
  }
}
</script>