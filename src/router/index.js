import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    // Dashboard
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../components/pages/Dashboard.vue'),
    },
    {
      path: '/form/general',
      name: 'form-general',
      component: () => import('../components/pages/forms/General.vue'),
    },
    {
      path: '/form/advanced',
      name: 'form-advanced',
      component: () => import('../components/pages/forms/Advanced.vue'),
    },
    {
      path: '/',
      name: 'login-boxed',
      meta: { layout: 'userpages' },
      component: () => import('../components/pages/LoginBoxed.vue')
    }
  ]
});