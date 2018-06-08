import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './AuthGuard'
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
import Dashboard from '@/components/Admins/Dashboard'
import Complaints from '@/components/Admins/Complaints'
import Deliveries from '@/components/Admins/Deliveries'
import Tasks from '@/components/Admins/Tasks'
import HistoryRecord from '@/components/Admins/HistoryRecord'
import Inventory from '@/components/Admins/Inventory'
import AdminsAuthGuard from './AdminsAuthGuard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'Home',
      component: Home
    },
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
      component: OrderForm,
      beforeEnter: AuthGuard
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
      component: Account,
      beforeEnter: AuthGuard
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
    },
    {
      path: '/admins/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: AdminsAuthGuard
    },
    {
      path: '/admins/omplaints',
      name: 'Complaints',
      component: Complaints,
      beforeEnter: AdminsAuthGuard
    },
    {
      path: '/admins/delivery',
      name: 'Deliveries',
      component: Deliveries,
      beforeEnter: AdminsAuthGuard
    },
    {
      path: '/admins/tasks',
      name: 'Tasks',
      component: Tasks,
      beforeEnter: AdminsAuthGuard
    },
    {
      path: '/admins/historyRecord',
      name: 'HistoryRecord',
      component: HistoryRecord,
      beforeEnter: AdminsAuthGuard
    },
    {
      path: '/admins/inventory',
      name: 'Inventory',
      component: Inventory,
      beforeEnter: AdminsAuthGuard
    }
  ],
  mode: 'history'
})
