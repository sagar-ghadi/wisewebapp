import Vue from 'vue'
import './assets/css/comman.css'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-select/dist/vue-select.css';
import Vuelidate from 'vuelidate';
import vSelect from 'vue-select';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuelidate)
Vue.component('v-select', vSelect)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
