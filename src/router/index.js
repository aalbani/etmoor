import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Customers/Home'
import Cart from '@/components/Customers/Cart'
import OrderForm from '@/components/Customers/OrderForm'
import Shop from '@/components/Customers/Shop'
import ContactUs from '@/components/Customers/ContactUs'
import Delivery from '@/components/Customers/Delivery'
import Signup from '@/components/Customers/Signup'
import Login from '@/components/Customers/Login'
import NotLoggedIn from '@/components/Customers/NotLoggedin'
import Account from '@/components/Customers/Account'

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
      path: '/account',
      name: 'account',
      component: Account
    },

    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/login-or-signup',
      name: 'notLoggedIn',
      component: NotLoggedIn
    }
  ],
  mode: 'history'
})
