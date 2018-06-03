import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cart from '@/components/Cart'
import OrderForm from '@/components/OrderForm'
import Shop from '@/components/Shop'
import ContactUs from '@/components/ContactUs'
import Delivery from '@/components/Delivery'
import Deliveries from '@/components/Dashboard/Deliveries'
import ProvidorHome from '@/components/Dashboard/ProvidorHome'
import Login from '@/components/Dashboard/Login'
import Tasks from '@/components/Dashboard/Tasks'
import Dashboard from '@/components/Dashboard/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/Order_Form',
      name: 'Order_Form',
      component: OrderForm
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/Delivery',
      name: 'Delivery',
      component: Delivery
    },
    {
      path: '/Contact_Us',
      name: 'Contact_Us',
      component: ContactUs
    },
    {
      path: '/dashboard/deliveries',
      name: 'Deliveries',
      component: Deliveries
    },
    {
      path: '/dashboard/tasks',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/dashboard/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard/home',
      name: 'ProvidorHome',
      component: ProvidorHome
    }
  ],
  mode: 'history'
})
