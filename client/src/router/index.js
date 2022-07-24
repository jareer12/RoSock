import ToDo from "../views/ToDo.vue";
import HomeView from "../views/Home.vue";
import Dash from "../views/Dashboard.vue";
import Accounts from "../views/Accounts.vue";
import Customize from "../views/Customize.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/dashboard",
      component: Dash,
    },
    {
      path: "/todo",
      component: ToDo,
    },
    {
      path: "/settings/customize",
      component: Customize,
    },
    {
      path: "/settings/accounts",
      component: Accounts,
    },
  ],
});

export default router;
