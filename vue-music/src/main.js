import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import lazyLoad from 'vue-lazyload'
import 'common/stylus/index.styl'

fastclick.attach(document.body)

Vue.use(lazyLoad, {
  loading: require('@/common/image/default.png')
})
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
