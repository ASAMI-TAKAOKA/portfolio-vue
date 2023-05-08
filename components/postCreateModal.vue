<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submitPost">
            <v-text-field v-model="post.title" label="タイトル" required></v-text-field>
            <v-textarea v-model="post.body" label="本文" required></v-textarea>
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
export default {
  data() {
    return {
      dialog: false,
      formTitle: '新規投稿',
      post: {
        title: '',
        body: ''
      }
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
      this.$axios.post('/api/v1/posts', {
        title: this.post.title,
        body: this.post.body
      })
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