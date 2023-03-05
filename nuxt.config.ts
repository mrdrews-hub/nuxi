// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'netlify-edge'
  },
  css: ['~/assets/css/main.css'],
  imports:{
    dirs: ['pages/**', '*.vue']
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'My App',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ],
    }
  },
  modules: ['nuxt-swiper' ,'nuxt-vuefire', 'nuxt-icon'],
  vuefire: {
    config: {
      apiKey: "AIzaSyCxmHYKHx07zYcVq9uWC7QOlLQKeiLdJ0w",
      authDomain: "fir-test-125e4.firebaseapp.com",
      projectId: "fir-test-125e4",
      storageBucket: "fir-test-125e4.appspot.com",
      messagingSenderId: "1069511782508",
      appId: "1:1069511782508:web:bd8a626e30568e2f866849",
      measurementId: "G-JXFQD8F4V2"
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
