require('./bootstrap');

import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue';
import router from './router'; 
import TaskComponent from './components/TaskComponent.vue';
import LoginComponent from './components/LoginComponent.vue';

const app = createApp({});


app.component('task-component', TaskComponent);
app.component('login-component', LoginComponent);
app.use(router);

app.mount('#app');
