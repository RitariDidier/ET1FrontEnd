import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'

import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/_globals'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import vuetify from './plugins/vuetify'
import './plugins'
import './plugins/vee-validate'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSweetalert2)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
