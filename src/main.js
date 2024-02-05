import 'bootstrap/dist/css/bootstrap.css';

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Desktop from './components/Login.vue';
import BuatAkun from './components/Register.vue';
import Home from './components/Home.vue';
import axios from 'axios';
import Swal from 'sweetalert2';

const routes = [
    { path: '/', component: Desktop },
    { path: '/buatakun', component: BuatAkun },
    { path: '/home', component: Home},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

axios.defaults.baseURL = 'http://localhost:8000/api'

const app = createApp(App);
app.use(router);
app.mount('#app');
