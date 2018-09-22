import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.config.productionTip = false

// if you don't want install the component globally
Vue.use(VueYouTubeEmbed)

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
