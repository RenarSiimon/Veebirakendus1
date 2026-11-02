import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Impordi peamine App komponent ja stiilid
import App from './App.vue';
import './style.scss';

// Impordi lehed (kontrolli, et failinimed klapiksid kaustas olevatega)
import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';

// Loo marsruudid
const routes = [
  { path: '/', component: ToDo },
  { path: '/modals', component: Modals },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Loo Vue rakendus ja ühenda see HTML-i #app elemendiga
const app = createApp(App);
app.use(router);
app.mount('#app');
