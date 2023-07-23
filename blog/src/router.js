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
    // (\\d+): 정규식 숫자만 입력가능
    // *: url 반복
    path: "/detail/:id(\\d+)",
    component: Detail
  },
  {
    // 404페이지
    path: "/:anything(.*)",
    component: <div>404</div>
  }
];

const router = createRouter({ //router 생성
  history: createWebHistory(),
  routes,
});

export default router; 