
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Design Caravan' ,//process.env.npm_package_name || '',
    titleTemplate: '%s | Design Caravan',
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      
      //google search console
      { name: 'google-site-verification', content: 'QhDdqknMlmhBAF4XeHmoTkkHOgJ6fJlHi4d28yuZH4Y'},

      //SEO対策部分
      { hid: 'og:site_name', property: 'og:site_name', content: 'Design Caravan' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://example.https://designcaravan-60b57.web.app/' },
      { hid: 'og:title', property: 'og:title', content: 'Design Caravan' },
      { hid: 'og:description', property: 'og:description', content: '私達は、公立はこだて未来大学の情報デザインコース5人で結成したグループです。様々な地域を訪問し、実際にその地域の人々や自然に触れることを大切にしています。' },
      //{ hid: 'og:image', property: 'og:image', content: 'https://example.com/img/ogp/common.jpg' },
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
