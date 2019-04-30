import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Top from './components/molcules/StartButton'
import Resister from './components/pages/RegisterTestl'
import Question from './components/pages/battle'
import Result from './components/pages/result.vue'
import Answer from './components/pages/answer'
import Newage from "./components/pages/NewAge"
import End from "./components/molcules/EndRole.vue"
import Start from "./components/molcules/StartRole"




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Resister
    },
    {
      path: '/question',
      name: 'question',
      component: Question
    },
    {
      path: '/answer',
      name: 'answer',
      component: Answer
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
    {
      path: '/newage',
      name: 'newage',
      component: Newage
    },
    {
      path: '/end',
      name: 'end',
      component: End
    },
    {
      path: '/',
      name: 'start',
      component: Start
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
