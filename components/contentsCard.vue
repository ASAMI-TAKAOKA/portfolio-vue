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
          <v-card min-width="300px" height="90%">
            <v-card-title class="font-weight-bold">{{ post.title }}</v-card-title>
            <v-card-text height="300px" class="pre-wrap">{{ post.body }}</v-card-text>
            <v-divider></v-divider>
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
export default {
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
      postsPerPage: 6
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