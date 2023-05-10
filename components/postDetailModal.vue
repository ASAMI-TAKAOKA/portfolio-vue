<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <p><strong>タイトル: </strong>{{ post.title }}</p>
          <p><strong>本文: </strong>{{ post.body }}</p>
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
    post: {
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
      this.showPostDetailModal = false
    },
  }
}
</script>