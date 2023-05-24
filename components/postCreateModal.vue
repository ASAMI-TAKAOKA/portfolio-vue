<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submitPost">
            <v-text-field v-model="post.productName" label="商品名" required></v-text-field>
            <v-select
              v-model="selectedParentCategoryId"
              :items="parentCategoryArray"
              item-value="id"
              item-text="name"
              label="親カテゴリー"
              required
            ></v-select>
            <v-select
              v-if="selectedParentCategoryId"
              v-model="selectedChildCategoryId"
              :items="filteredChildCategoryArray"
              item-value="id"
              item-text="name"
              label="子カテゴリー"
              required
            ></v-select>
            <v-select
              v-if="selectedChildCategoryId"
              v-model="selectedGrandchildCategoryId"
              :items="filteredGrandchildCategoryArray"
              item-value="id"
              item-text="name"
              label="孫カテゴリー"
              required
            ></v-select>
            <span>価格
              <v-numeric v-model="post.price" label="価格" required></v-numeric>
            </span>
            <br>
            <v-file-input
              v-model="post.image"
              label="画像"
              :rules="fileSizeRule"
              outlined
            >
              <template v-slot:prepend-inner>
                <v-icon>mdi-camera</v-icon>
              </template>
            </v-file-input>
            <v-text-field v-model="post.storeInformation" label="お店情報" required></v-text-field>
            <v-textarea v-model="post.body" label="コメント" required></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog">キャンセル</v-btn>
          <v-btn color="blue darken-1" text @click="submitPost">投稿する</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import VueNumericInput from 'vue-numeric-input';

export default {
  components: {
    'v-numeric': VueNumericInput,
  },
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    parentCategoryArray: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      dialog: false,
      formTitle: '新規投稿',
      post: {
        productName: '',
        price: '',
        storeInformation: '',
        body: '',
        image: null
      },
      selectedParentCategoryId: null,
      selectedChildCategoryId: null,
      selectedGrandchildCategoryId: null
    }
  },
  methods: {
    openDialog() {
      this.dialog = true
    },
    closeDialog() {
      this.dialog = false
    },
    submitPost() {
      const formData = new FormData()
      formData.append('productName', this.post.productName)
      formData.append('price', this.post.price)
      formData.append('storeInformation', this.post.storeInformation)
      formData.append('body', this.post.body)
      if (this.post.image) {
        formData.append('image', this.post.image)
      }
      if (this.selectedParentCategoryId) {
      formData.append('parentId', this.selectedParentCategoryId)
      }
      if (this.selectedChildCategoryId) {
      formData.append('childrenId', this.selectedChildCategoryId)
      }
      if (this.selectedGrandchildCategoryId) {
      formData.append('grandchildrenId', this.selectedGrandchildCategoryId)
      }
      //ContentTypeを変える
      const config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      }
      this.$axios.post('/api/v1/posts', formData)
        .then(response => {
          this.dialog = false
          this.$router.go({path: this.$router.currentRoute.path, force: true})
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
  computed: {
    fileSizeRule() {
        v => !v || (v.size <= 2 * 1024 * 1024) || 'ファイルサイズは2MB以内である必要があります'
    },
    filteredChildCategoryArray() {
      // 親カテゴリーで野菜を選択した場合は、子カテゴリのー選択肢に野菜しか表示させない。
      if (this.selectedParentCategoryId === 1) {
        return this.childCategoryArray.filter(category => [2, 13, 20, 33, 41].includes(category.id))
      // 親カテゴリーで果物を選択した場合は、子カテゴリのー選択肢に果物しか表示させない。
      } else if (this.selectedParentCategoryId === 57) {
        return this.childCategoryArray.filter(category => [58, 68, 71].includes(category.id))
      } else {
        return []
      }
    },
    filteredGrandchildCategoryArray() {
      // 子カテゴリーでサラダ野菜を選択した場合は、選択肢にサラダ野菜の子カテゴリーしか表示させない。
      if (this.selectedChildCategoryId === 2) {
        return this.grandchildCategoryArray.filter(category => [3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(category.id))
      // 子カテゴリーで葉物野菜を選択した場合は、選択肢に葉物野菜の子カテゴリーしか表示させない。
      } else if (this.selectedChildCategoryId === 13) {
        return this.grandchildCategoryArray.filter(category => [14, 15, 16, 17, 18, 19].includes(category.id))
      // 子カテゴリーで果物を選択した場合は、選択肢に果物の子カテゴリーしか表示させない。
      } else if (this.selectedChildCategoryId === 58) {
        return this.grandchildCategoryArray.filter(category => [59, 60, 61, 62, 63, 64, 65, 66, 67].includes(category.id))
      } else {
        return []
      }
    }
  }
}
</script>

<style scoped>
span {
  font-size: 16px;
}
</style>