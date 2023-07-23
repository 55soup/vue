import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue"
import Home from "./components/Home.vue"
import Detail from "./components/Detail.vue"
import Comment from "./components/Comment.vue"
import Author from "./components/Author.vue"

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
    component: Detail,
    children: [
      // nested routes: 특정 페이지 안에 route를 나누고 싶을때
      {
        // /detail/0/author
        path: "author",
        component: Author
      },
      {
        // /detail/0/comment
        path: "comment",
        component: Comment
      }
    ]
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