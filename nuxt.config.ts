// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-12-10',
  devtools: { enabled: true },

  modules: [
    '@hypernym/nuxt-gsap',
    '@tresjs/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/icon'
  ],

  css: ['~/assets/css/main.css'],

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true
    },
    extraEases: {
      expoScaleEase: true
    }
  },


  app: {
    head: {
      title: 'PokeDex TCG - Track Your Pokemon Card Collection',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'The ultimate Pokemon TCG collection tracker. Manage your cards, track prices, and build your dream deck.' },
        { name: 'theme-color', content: '#0F172A' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap' }
      ]
    }
  },

  typescript: {
    strict: true,
    typeCheck: false
  },

  vite: {
    optimizeDeps: {
      include: ['three', 'gsap']
    }
  }
})
