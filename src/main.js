import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import store from './store'

import 'common/stylus/index.styl'

/* eslint-disable no-nuused-vars */
import vConsole from 'vconsole'

console.log('hey')

fastclick.attach(document.body)

Vue.use(VueLazyLoad, {    //图片懒加载
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
