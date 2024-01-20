import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyWordsView from '../views/MyWordsView.vue';
import MyPhrasesView from '../views/MyPhrasesView.vue';
import MyGrammarView from '../views/MyGrammarView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/my-words',
      name: 'my-words',
      component: MyWordsView
    },
    {
      path: '/my-phrases',
      name: 'my-phrases',
      component: MyPhrasesView
    },
    {
      path: '/my-structures',
      name: 'my-structures',
      component: MyGrammarView
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
