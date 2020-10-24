import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Customer from '../views/customer'
import Category from '../views/category.vue'
import Order   from  '../views/order.vue'
import Product   from  '../views/product.vue'
import Details from '../views/Details.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/customer',
    name:'Customer',
    component:Customer
  },
  {
    path:'/category',
    name:'Category',
    component:Category
  },  {
    path:'/order',
    name:'Order',
    component:Order
  },
  {
    path:'/product',
    name:'Product',
    component:Product
  },
  {
    path:'/details',
    name:'Details',
    component:Details
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
