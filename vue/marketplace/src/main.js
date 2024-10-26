import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.less' // import LESS file
import router from './router';
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Home from './components/Home.vue';
import Profile from './components/Profile.vue';
import Login from './components/Login.vue';

console.log("in router.js");
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/profile", component: Profile },
  { path: '/login', name: "Login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app')
