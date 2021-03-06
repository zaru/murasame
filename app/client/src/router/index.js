import Vue from 'vue'
import Router from 'vue-router'
import Console from '../components/Console.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Console',
      component: Console
    },
    {
      path: '/services/:service_id',
      name: 'Console',
      component: Console
    }
  ]
})