import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// @ts-ignore
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
// @ts-ignore
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
