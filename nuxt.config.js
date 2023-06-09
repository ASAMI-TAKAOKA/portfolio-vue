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
    '~/assets/sass/main.scss'
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
    'nuxt-i18n'
  ],
  publicRuntimeConfig: {
    appName: process.env.APP_NAME
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    // カスタムCSSファイルパス
    customVariables: ['~/assets/sass/variables.scss'],
    // カスタムCSSを有効にするフラグ
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '4080BE',
          info: '4FC1E9',
          success: '44D69E',
          warning: 'FEB65E',
          error: 'FB8678',
          background: 'f6f6f4',
          appblue: '1867C0'
        }
      }
    }
  },
  i18n: {
    // 対応言語の指定
    locales: ['ja', 'en'],
    // デフォルトで使用する言語を指定
    defaultLocale: 'ja',
    // Doc: https://kazupon.github.io/vue-i18n/api/#properties
    strategy: 'no_prefix',
    vueI18n: {
      fallbackLocale: 'ja',
      // silentTranslationWarn: true,
      silentFallbackWarn: true,
      messages: {
        ja: require('./locales/ja.json'),
        en: require('./locales/en.json')
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // auth: {
  //   strategies: {
  //     //localという認証方法を使う場合
  //     local: {
  //       //axiosでアクセスする際の設定
  //       endpoints: {
  //         login: { url: '/api/v1/auth/sign_in', method: 'post', propertyName: 'token' },
  //         logout: { url: '/api/v1/auth/sign_out', method: 'delete' },
  //         user: false,
  //       },
  //     }
  //   },
  //   redirect: {
  //     // 未ログイン時にリダイレクトされる先のURL
  //     login: '/users/login',
  //     // ログアウトした後にリダイレクトされる先のURL
  //     logout: '/',
  //     // コールバック用のURL。Oauth認証（SNS認証）等に使われる。
  //     callback: false,
  //     // ログイン後にリダイレクトされる先のURL
  //     home: '/',
  //   },
  // },
  axios: {
    baseURL: 'http://localhost:3000/',
  },
  router: {
    // middleware: ['auth'],
    // Nuxtにより「.nuxt/router.js」に自動生成されたルートを拡張
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     name: 'dashboard',
    //     path: '/',
    //     component: resolve(__dirname, 'pages/dashboard.vue')
    //   })
    // }
  }
}
