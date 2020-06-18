import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../components/pages/Home.vue'
import List from '../components/pages/List.vue'
import Details from '../components/pages/Details.vue'
import Cart from '../components/pages/Cart.vue'
import Admin from '../components/pages/Admin.vue'
import Count from '../components/pages/Count.vue'
import Login from '../components/pages/User/Login.vue'
import Reg from '../components/pages/User/Reg.vue'
import Back from '../components/commons/Back.vue'
import Test1 from '../components/pages/Test/Test1.vue'

Vue.use(Router)

const routes = [
  { path: '/', redirect: '/home'},
  { path: '/home', component: Home, name: 'home' },
  { path: '/list', component: List, name: 'list' },
  { path: '/details', component: Details, name: 'details' },
  { path: '/cart', component: Cart, name: 'cart' },
  { path: '/admin', component: Admin, name: 'admin' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/reg', component: Reg, name: 'reg' },
  { path: '/count', component: Count, name: 'count' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/back', component: Back, name: 'back' },
  { path: '/test1', component: Test1, name: 'test1' }

]

const router = new Router({
  mode: 'history',     // 去掉地址栏的#
  routes
})

export default router
