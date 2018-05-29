import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cart from '@/components/Cart'
import OrderForm from '@/components/OrderForm'
import Shop from '@/components/Shop'
import ContactUs from '@/components/ContactUs'
import Delivery from '@/components/Delivery'

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
    }
  ],
  mode: 'history'
})
