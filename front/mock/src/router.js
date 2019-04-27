import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Resister from './components/pages/testResister'
import Battle from './components/pages/testBattle'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Resister
    },
    {
      path: '/battle',
      name: 'battle',
      component: Battle
    }
    /*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( webpackChunkName: "about"  './views/About.vue')
    }
    */
  ]
})
