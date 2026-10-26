import { createApp } from 'vue';
import { createMemoryHistory, createWebHashHistory, createWebHistory, createRouter } from 'vue-router';

import ToDo from './pages/todo.vue';
import Modals from './pages/modals.vue';
import './style.scss';

const routes = [
  { path: '/', component: ToDo, name: 'ToDo'},
  { path: '/modals', component: Modals, name: 'Modals'},
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

import App from './app.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');