import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Result from '../components/Result.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: ':userName',
        name: 'Result',
        component: Result,
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
