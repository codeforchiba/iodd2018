<template>
  <video-player
    class="video-player-box"
    ref="videoPlayer"
    :options="playerOptions">
  </video-player>
</template>

<script>
import { videoPlayer } from 'vue-video-player'

const youtube = require('videojs-youtube/dist/Youtube.min.js')

export default {
  components: {
    videoPlayer
  },

  data () {
    return {
      playerOptions: {
        autoplay: true,
        loop: true,
        muted: true,
        fluid: true,
        controls: false,
        techOrder: [ 'youtube' ],
        poster: '/cover.jpg',
        sources: [{
          type: 'video/youtube',
          src: 'https://youtu.be/s8uiBCwUts0'
        }],
        youtube: {
          ytControls: 0,
          disablekb: 1
        }
      }
    }
  }
}
</script>
