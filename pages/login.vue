<template>
  <!-- このように書けばUserFormName.vueら3つのファイルをUserFormCard.vueに差し込むことができる -->
  <user-form-card
    v-slot:user-form-card-content
  >
    <!-- referenceプロパティ = フォームを操作するためのプロパティ -->
    <!-- このプロパティを使用することで3つの関数が使用できる -->
    <!-- this.$refs.form.validate() -->
    <!-- this.$refs.form.reset() -->
    <!-- this.$refs.form.resetValidation() -->
    <!-- preventとすることで、@submitの際にページがリロードされないようにできる -->
    <v-form
      ref="form"
      v-model="isValid"
      @submit.prevent="login"
    >
      <user-form-email
        :email.sync="params.user.email"
      />
      <user-form-password
        :password.sync="params.user.password"
      />
      <v-card-actions>
        <nuxt-link
          to="#"
          class="body-2 text-decoration-none"
        >
          パスワードを忘れた？
        </nuxt-link>
      </v-card-actions>
      <v-card-text
        class="px-0"
      >
        <v-btn
        type="submit"
        :disabled="!isValid || loading"
        :loading="loading"
        block
        color="appblue"
        class="white--text"
        >
        ログインする
        </v-btn>
      </v-card-text>
    </v-form>
  </user-form-card>
</template>

<script>
import UserFormCard from '../components/User/UserFormCard';

export default {
  components: {
    UserFormCard
  },
  layout: 'before-login',
  data({ $store }) {
    return {
      isValid: false,
      loading: false,
      params: { user: { email: '', password: '' } },
      redirectPath: $store.state.loggedIn.homePath
    }
  },
  methods: {
    login() {
      this.loading = true
      this.$router.push(this.redirectPath)
    }
  }
}
</script>