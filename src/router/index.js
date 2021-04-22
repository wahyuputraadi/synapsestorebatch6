import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LandingPage from '../views/LandingPage.vue'
import ListProduct from '../views/ListProduct.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Keranjang from '../views/Keranjang.vue'
import Success from '../views/Success.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage
    },
    {
        path: '/list-product',
        name: 'ListProduct',
        component: ListProduct
    },
    {
        path: '/product-details',
        name: 'ProductDetails',
        component: ProductDetails
    },
    {
        path: '/keranjang',
        name: 'Keranjang',
        component: Keranjang
    },
    {
        path: '/success',
        name: 'Success',
        component: Success
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router