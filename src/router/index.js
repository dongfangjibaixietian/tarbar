import Vue from 'vue'
import VueRouter from 'vue-router'


//三个地方要大写，一个import VueRouter 一个use(),一个 new
Vue.use(VueRouter)
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Me = () => import('../views/me/Me')


const routes = [
    {
        path: '',
        redirect:'/home' 
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path:'/cart',
        component: Cart
    },
    {
        path: '/me',
        component: Me
    }
]

const router = new VueRouter({
    routes
})

export default router