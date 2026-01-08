import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  // mode: 'spa', // This is deprecated, removed
  server: {
    port: 8002,
    host: 'localhost',
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  
  // Set target to 'server' for nuxt start (not 'static')
  // This will generate build output in .nuxt/dist/client/ instead of dist/
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nikki Super',
    titleTemplate: '%s - Nikki Super',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-site-verification', content: '5FJ-cpS4JMzzLOCWzEhoUjCmSpEbGqXUctaZkoMy11U' },
      { name: 'google-site-verification', content: '3NHoFsUozh2-PFLbC9OHzfTDYRm_0xqRNIpXX50CbUo' },
        {
        hid: 'description',
        name: 'description',
        content: 'nikkisuper'
      }
    //   { 'http-equiv': 'Content-Security-Policy', content: "img-src 'self' data: blob:; default-src * 'self' 'unsafe-inline' 'unsafe-eval' data: gap: content: " },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
//   render: {
//     csp: {
//       policy: {
//         'default-src': "'self' data: 'unsafe-eval' 'unsafe-inline'",
//         'img-src': "'self' blob:"
//       }
//     }
//   }
  },
  

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-fragment.js' },
    { src: '~/plugins/vuetify.js' },
    { src: '~/plugins/carousel3d.js' },
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/imageUrl.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // ESLint module only in development (not needed in production)
    ...(process.env.NODE_ENV === 'development' ? ['@nuxtjs/eslint-module'] : []),
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-i18n',
      {
        locales: [
          {
            name: 'Indonesia',
            code: 'id',
            iso: 'id-ID',
            file: 'id-ID.js',
          },
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js',
          },
        ],
        langDir: 'lang/',
        defaultLocale: 'en',
      },
    ],
  ],

  router: {
    // Run the middleware/initMiddleware.js on every page
    // middleware: 'authentication',
    router: {
      // extendRoutes(routes, resolve) {
      //   return [
      //     {
      //       name: 'about-us-mobile',
      //       path: '/about-us', // <--- change this
      //       component: resolve(__dirname, 'pages/about-us/mobile.vue'),
      //       chunkName: 'pages/about/index'
      //     },
      //   ]
      // }
    },
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          defaultGray: '#23295D',
          secondaryGray: '#303030',
          lightGray: '#DADADA',
          darkGray: '#1D1D1D',
          newsGray: '#AFAFAF',
          defaultGolden: '#C1A843',
          secondaryGolden: '#EBB848',
          fontLight: '#ffffff',
          fontDark: '#202b3f',
          fontLightBlue: '#22C1DC',
          grayInput: '#F4F2F2',
          cardColor: '#D9D9D9',
          //
        },
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          defaultGray: '#23295D',
          secondaryGray: '#303030',
          lightGray: '#DADADA',
          darkGray: '#1D1D1D',
          newsGray: '#AFAFAF',
          defaultGolden: '#C1A843',
          secondaryGolden: '#EBB848',
          fontLight: '#ffffff',
          fontDark: '#202b3f',
          fontLightBlue: '#22C1DC',
          grayInput: '#F4F2F2',
          cardColor: '#D9D9D9',
          //
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Configure webpack for better HMR handling
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        // Improve HMR connection stability
        config.optimization = config.optimization || {}
        config.optimization.removeAvailableModules = false
        config.optimization.removeEmptyChunks = false
        config.optimization.splitChunks = config.optimization.splitChunks || {}
      }
    },
    // Suppress HMR warnings in development
    quiet: false,
    // Improve build performance
    hardSource: false,
    // Public path for static assets (default is /_nuxt/)
    publicPath: process.env.NUXT_PUBLIC_PATH || '/_nuxt/',
  },
  
  // Configure development server
  dev: process.env.NODE_ENV !== 'production',
  
  // Improve HMR connection
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
}
