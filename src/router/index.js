import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PrivacyPolicyFree from '@/views/PrivacyPolicyFree'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/SkullKingPrivacyPolicy",
    name: "Skull King Privacy Policy",
    component: PrivacyPolicyFree
  }
];

const router = new VueRouter({
  routes
});

export default router;
