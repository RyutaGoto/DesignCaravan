
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Design Caravan' ,//process.env.npm_package_name || '',
    titleTemplate: '%s | Design Caravan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/dc.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap'}
    ],
    script: [
      { src: "//code.typesquare.com/static/ZDbTe4IzCko%253D/ts106f.js" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '~/plugins/vue-mq' }

  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    //analyze: true,
    extend (config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));
      svgRule.test = /\.(png|jpe?g|gif|webp)$/i

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
      })
    }
  }
}
