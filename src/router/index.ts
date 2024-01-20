import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyListView from '../views/MyListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/my-list',
      name: 'my-list',
      component: MyListView
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/:pathMatch(.*)*', 
      // This will redirect any unmatched route to home.  This might cause some confusion in the future...
      // TODO: add a NOT FOUND view
      redirect: '/',
    }
  ]
})

export default router
