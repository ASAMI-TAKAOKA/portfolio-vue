<template>
  <!-- 削除予定 -->
  <v-app>
    <v-container>
      <v-card width="400px" class="mx-auto mt-5">
        <v-card-title>
          <h1 class="display-1">
            会員情報の変更
          </h1>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" lazy-validation>
            <v-text-field
              v-model="user.name"
              prepend-icon="mdi-account"
              label="新しい名前"
            />
            <v-text-field
              v-model="user.nickname"
              prepend-icon="mdi-account"
              label="新しいニックネーム"
            />
            <v-text-field
              v-model="user.email"
              prepend-icon="mdi-email"
              label="新しいメールアドレス"
            />
            <v-text-field
              v-model="user.password"
              prepend-icon="mdi-lock"
              append-icon="mdi-eye-off"
              label="新しいパスワード"
            />
            <v-card-actions>
              <v-btn
                color="light-green darken-1"
                class="white--text"
                @click="updateUserInfo"
              >
                保存する
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {
        name: '',
        nickname: '',
        password: '',
        email: '',
      },
    }
  },
  methods: {
    updateUserInfo() {
      this.$axios
        .put('api/v1/auth', this.user, {
          headers: {
            'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
          },
        })
        .then((response) => {
          localStorage.setItem('access-token', response.headers['access-token'])
          localStorage.setItem('client', response.headers.client)
          localStorage.setItem('uid', response.headers.uid)
          localStorage.setItem('token-type', response.headers['token-type'])
          window.location.href = '/afterEdittedUserInfo'
        })
    },
  },
}
</script>