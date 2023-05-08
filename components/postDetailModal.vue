<template>
  <div>
    <v-dialog v-model="openDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <p><strong>タイトル: </strong>{{ post.title }}</p>
          <p><strong>本文: </strong>{{ post.body }}</p>
        </v-card-text>
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
    openDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formTitle: '投稿詳細',
    }
  }
}
</script>