import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'

const Signup = () => import('./views/user/Signup.vue');
const Signin = () => import('./views/user/Signin.vue');
const Profile = () => import('./views/user/Profile.vue');

const Task = () => import('./views/task/Task.vue');
const Tasks = () => import('./views/task/Tasks.vue');

const About = () => import('./views/About.vue');

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/bug-tracker/',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        },
        {
            path: '/signin',
            name: 'signin',
            component: Signin
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: Tasks
        },
        {
            path: '/tasks/:id',
            name: 'task',
            component: Task
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
