// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import 'babel-polyfill'
import 'eventsource-polyfill'
import VueLazyload from 'vue-lazyload'
import iView from 'iview';
import '@/assets/my-iview/index.less';
import '@/assets/css/base.css';
import axios from 'axios'
Vue.use(VueRouter)
Vue.use(VueLazyload)
Vue.use(iView)

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
