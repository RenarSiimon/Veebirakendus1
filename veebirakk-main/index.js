
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import './style.scss';

import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import Buttons from './pages/Buttons.vue';
import MessageDemo from './pages/MessageDemo.vue';

const routes = [
  { path: '/', component: ToDo },
  { path: '/modals', component: Modals },
  { path: '/messages', component: MessageDemo },
  { path: '/buttons', component: Buttons },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
