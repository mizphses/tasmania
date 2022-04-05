export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cuisine.chuo.club',
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
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Righteous&display=swap',
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
      callback: '/callback',
      home: '/authed',
    },
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/',
        domains: 'cuisine.chuo.club',
      },
    },
    strategies: {
      // github: {
      //   clientId: 'c44620151025a4aa2ad5',
      //   clientSecret: '4007c6d3096960d00d115678861f7ce7a2455a78'
      // },
      discord: {
        clientId: '960890522950565928',
        clientSecret: 'LfnFEV2zEut8RoOhPfOtr5pnxrbNRB0S',
        responseType: 'token',
      },
      // google: {
      //   clientId: '163881984639-q1b7v483un475l2v48khcba7i34vk5f7.apps.googleusercontent.com',
      //   codeChallengeMethod: '',
      //   responseType: 'code',
      // },
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: '/',
    proxy: true,
  },
  proxy: {
    '/api': {
      target:
        'https://script.google.com/macros/s/AKfycbwS4SGRs0SzApsjzzAv76HRurAhovuv_PCHE4xL-pwPA-QFA6beIIDsQv91zCYXama_Xg/exec',
      pathRewrite: { '^/api': '' },
      followRedirects: true,
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