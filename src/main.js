import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vueResource from 'vue-resource'
Vue.use(vueResource)
Vue.use(VueLazyLoad, {
  loading: require('./assets/lazy/loading-spokes.svg')
})
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");