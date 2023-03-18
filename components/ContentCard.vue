<template>
  <div class="productcard pre-wrap">

    <v-card min-width="300px" height="90%">
      <v-card-title class="font-weight-bold">{{ title }}</v-card-title>
      <v-card-text height="300px" class="pre-wrap">{{ detail }}</v-card-text>
      <v-divider></v-divider>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    title: String,
    detail: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productcard {
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