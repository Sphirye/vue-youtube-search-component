import Vue from 'vue'
import App from './App.vue'
// @ts-ignore
import lineClamp from "vue-line-clamp"
import axios from 'axios'
import vueAxios from "vue-axios";
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import vueDebounce from "vue-debounce";
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.use(vueAxios, axios)
Vue.use(vueDebounce, { defaultTime: '700ms' })
Vue.use(lineClamp, {})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
