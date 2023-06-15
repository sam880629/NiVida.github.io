// 引入組件
import HomePage from './page/HomePage.vue';
import ProfileEdittingPage from './page/ProfileEdittingPage.vue';
import ProfilePage from './page/ProfilePage.vue';


// 初始化
import { createRouter, createWebHistory } from "vue-router";



const routes = [
    {
      path: "/",
      name: "home",
      component: HomePage,
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
  
  ];


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;