module.exports = {
  mode: 'spa',
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: 'IODD 2018 アーカイブ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '2018/3/3 IODD 2018 に開催したシビックパワーバトル 千葉市６区対抗戦の記録' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://iodd2018.code4chiba.org/'},
      { property: 'og:title', content: 'IODD 2018 アーカイブ'},
      { hid: 'og-description', property: 'og:description', content: '2018/3/3 IODD 2018 に開催したシビックパワーバトル 千葉市６区対抗戦の記録'},
      { property: 'og:image', content: 'https://iodd2018.code4chiba.org/chiba6.jpg'},
      { name: 'twitter:card', content: 'player'},
      { name: 'twitter:site', content: '@code4chiba'},
      { name: 'twitter:player', content: 'https://www.youtube.com/embed/s8uiBCwUts0' },
      { name: 'twitter:player:width', content: '560' },
      { name: 'twitter:player:height', content: '315' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/earlyaccess/sawarabigothic.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    'video.js/dist/video-js.css'
  ],
  buildModules: [
    '@nuxtjs/font-awesome',
    '@nuxtjs/eslint-module',
    ['@nuxtjs/google-gtag', {
      id: process.env.GA_TRACKING_ID,
      debug: true
    }]
  ],
  plugins: [
    '~/plugins/mq'
  ]
}
