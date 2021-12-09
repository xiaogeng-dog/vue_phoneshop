import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'components/common/toast'
import VueLazyload from 'vue-lazyload'

import FastClick from 'fastclick'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

FastClick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('./assets/img/common/loading.gif')
})

Vue.use(Toast)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
