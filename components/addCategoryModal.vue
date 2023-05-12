<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submitCategory">
            <v-text-field v-model="categoryName" label="カテゴリー名" required></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog">キャンセル</v-btn>
          <v-btn color="blue darken-1" text @click="submitCategory">登録する</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      formTitle: 'カテゴリー追加',
      categoryName: ''
    }
  },
  methods: {
    openDialog() {
      this.dialog = true
    },
    closeDialog() {
      this.dialog = false
    },
    submitCategory() {
      const formData = new FormData()
      formData.append('name', this.categoryName)

      this.$axios.post('/api/v1/categories', formData)
        .then(response => {
          this.dialog = false
          this.$router.go({path: this.$router.currentRoute.path, force: true})
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
