// 引入組件
import HomePage from './page/HomePage.vue';
import LoginPage from './page/LoginPage.vue';
import ProfileEdittingPage from './page/ProfileEdittingPage.vue';
import ProfilePage from './page/ProfilePage.vue';
import SearchPage from './page/SearchPage.vue';

// 初始化
import { createRouter, createWebHistory } from "vue-router";



const routes = [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/search_result",
      name: "search_result",
      component: SearchPage,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfilePage,
    },
    {
      path: "/profile/edit",
      name: "profileEdit",
      component: ProfileEdittingPage,
      
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
  ];


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;