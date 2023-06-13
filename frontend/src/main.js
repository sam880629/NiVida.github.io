import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import { store } from './store/index';

const app = createApp(App);

// vuex設定
app.use(store);
// 路由設定
app.use(router);

app.mount('#app')
