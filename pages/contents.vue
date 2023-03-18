<template>
  <div>
    <v-row
      column
      justify-center
      align-center
      class="text-center"
    >
      <v-col
        xs12
        sm8
        md6
      >
        <p>contents一覧ページ</p>
      </v-col>
    </v-row>
    <v-container fluid>
      <v-row row wrap>
        <v-col v-for="item in contents" :key="item.id" xs12 sm6 md4>
          <ContentCard
            :title="item.title"
            :detail="item.detail"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ContentCard from '../components/ContentCard.vue'
export default {
  components: {
    ContentCard
  },
  async asyncData({ app }) {
    // console.log(app)
    const response = await app.$axios.get('http://localhost:3000/api/contents')
    return {
      contents: response.data
    }
  }
}
</script>