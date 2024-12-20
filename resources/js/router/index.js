import { createRouter, createWebHistory } from 'vue-router';
import TaskComponent from '../components/TaskComponent.vue';
import LoginComponent from '../components/LoginComponent.vue';

const routes = [
    {
      path: '/',
      component: LoginComponent,
      name: 'login' 
    },
    {
      path: '/tasks',
      component: TaskComponent,
      name: 'tasks'
    }
  ];

const router = createRouter({
  history: createWebHistory(), 
  routes
});

export default router;
