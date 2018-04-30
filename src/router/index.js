import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import RequestPO from '@/components/Factory/RequestPO'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '/factory/requestpo',
        name: 'RequestPO',
        component: RequestPO,
      }]
    }
  ]
})
