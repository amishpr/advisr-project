import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Business from "../components/Business.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/business/:id",
    name: "business",
    component: Business,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
