import colors from 'vuetify/es5/util/colors'
import { sortRoutes } from '@nuxt/utils'


export default {
  server: {
    port: 8000,
  },
  mode: 'spa',
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - portfolio-vue',
    title: 'portfolio-vue',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  auth: {
    strategies: {
      //localという認証方法を使う場合
      local: {
        //axiosでアクセスする際の設定
        endpoints: {
          login: { url: '/api/v1/auth/sign_in', method: 'post', propertyName: 'token' },
          logout: { url: '/api/v1/auth/sign_out', method: 'delete' },
          user: false,
        },
      }
    },
    redirect: {
      // 未ログイン時にリダイレクトされる先のURL
      login: '/users/login',
      // ログアウトした後にリダイレクトされる先のURL
      logout: '/users/login',
      // コールバック用のURL。Oauth認証（SNS認証）等に使われる。
      callback: false,
      // ログイン後にリダイレクトされる先のURL
      home: '/',
    },
  },
  axios: {
    baseURL: 'http://localhost:3000/',
  },
  router: {
    middleware: ['auth'],
    // Nuxtにより「.nuxt/router.js」に自動生成されたルートを拡張
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'dashboard',
        path: '/',
        component: resolve(__dirname, 'pages/dashboard.vue')
      })
    }
  }
}
