export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  // target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TASMANIA事務サービス',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css2?family=BIZ+UDGothic:wght@400;700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Righteous&family=Kosugi&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // Auth Module
    '@nuxtjs/auth',
    '@nuxtjs/auth-next',
  ],
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/auth/token',
      home: '/authed',
    },
    strategies: {
      discord: {
        clientId: process.env.DISCORD_API_ID,
        clientSecret: process.env.DISCORD_API_SECRET,
        configuration: {
          responseType: 'token',
        },
      },
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },
  proxy: {
    '/api_server': {
      target: process.env.API_URL,
      pathRewrite: { '^/api_server': '' },
    },
    '/role': {
      // この /role は、/api_server/role につながるのだが，なぜかフロントページで上を使うとバグが出るのでゴリ押してる。
      target: process.env.API_URL,
    },
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
