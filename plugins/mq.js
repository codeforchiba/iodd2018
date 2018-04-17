import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    phone: 751,
    whatever: Infinity
  }
})
