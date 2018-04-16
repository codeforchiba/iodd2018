<template>
  <div>
    <section id="fixed-background">
      <movie></movie>
    </section>

    <section id="glass">
      <div></div>
    </section>

    <section id="body">
      <outline></outline>
      <chuo></chuo>
      <hanamigawa></hanamigawa>
      <inage></inage>
      <wakaba></wakaba>
      <midori></midori>
      <mihama></mihama>
      <media></media>
      <ex_footer></ex_footer>
    </section>
  </div>
</template>

<script>
import Video from '~/components/video.vue'

import Outline from '~/components/index/outline.vue'
import Chuo from '~/components/index/chuo.vue'
import Hanamigawa from '~/components/index/hanamigawa.vue'
import Inage from '~/components/index/inage.vue'
import Wakaba from '~/components/index/wakaba.vue'
import Midori from '~/components/index/midori.vue'
import Mihama from '~/components/index/mihama.vue'
import Media from '~/components/index/media.vue'
import Footer from '~/components/index/credit.vue'

export default {
  components: {
    movie: Video,

    outline: Outline,
    chuo: Chuo,
    hanamigawa: Hanamigawa,
    inage: Inage,
    wakaba: Wakaba,
    midori: Midori,
    mihama: Mihama,
    media: Media,
    ex_footer: Footer
  }
}
</script>

<style scoped>
#fixed-background {
  position: fixed;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 1;
}

#glass {
  position: fixed;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 2;
}

#body {
  position: relative;

  z-index: 10;
}
</style>
