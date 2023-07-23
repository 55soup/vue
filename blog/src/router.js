import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue"
import Home from "./components/Home.vue"
import Detail from "./components/Detail.vue"

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/list",
    component: List
  },
  {
    path: "/detail",
    component: Detail
  }
];

const router = createRouter({ //router 생성
  history: createWebHistory(),
  routes,
});

export default router; 