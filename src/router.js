import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

// import myUser from './components/users/'


import myHome from './components/HelloWorld.vue'
import myContact from './components/contact'
import myAbout from './components/about'


const routes = [
    { path: '/', component: myHome },
    { path: '/contact', component: myContact },
    { path: '/about', component: myAbout },
]


export default new VueRouter({routes})
