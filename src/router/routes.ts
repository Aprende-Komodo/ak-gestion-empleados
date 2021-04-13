import { RouteConfig } from 'vue-router';
import { beforeEnter as beforeEnterEmployeeList, beforeEnterEmployee } from './employees';

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'employees',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/EmployeeList.vue'),
        name: 'employees'
      }
    ],
    beforeEnter: beforeEnterEmployeeList
  },
  {
    path: '/profile/:id',
    name: 'profile',
    component: () => import('layouts/ManageProfile.vue'),
    children: [
      {
        path: '',
        name: 'profile',
        component: () => import('pages/EditProfile.vue')
      }
    ],
    beforeEnter: beforeEnterEmployee
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
