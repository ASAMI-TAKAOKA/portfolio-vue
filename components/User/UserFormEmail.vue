<template>
  <v-text-field
    :value="email"
    @input="$emit('update:email', $event)"
    label="メールアドレスを入力"
    placeholder="your@email.com"
    outlined
  />
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      default: ''
    }
  }
}
</script>