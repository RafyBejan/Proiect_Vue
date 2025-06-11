import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "@fortawesome/fontawesome-free/css/all.css";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';
import router from './router';
import  './ws';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);



app.use(pinia);
app.use(router);
app.mount('#app');