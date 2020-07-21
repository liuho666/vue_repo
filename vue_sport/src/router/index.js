import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import success from '../components/Success.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import User from '../components/admin/User.vue'
import AA from '../components/a/AA.vue'
import AB from '../components/a/AB.vue'
import AC from '../components/a/AC.vue'
import AD from '../components/a/AD.vue'
import AE from '../components/a/AE.vue'
import AF from '../components/a/AF.vue'
import AG from '../components/a/AG.vue'
import JA from '../components/j/JA.vue'
import JB from '../components/j/JB.vue'
import JC from '../components/j/JC.vue'
import JD from '../components/j/JD.vue'
import JE from '../components/j/JE.vue'


Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/success',
    component: success
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path:'/welcome', component: Welcome},
        { path:'/user', component: User},
        {path:'/aa',component:AA},
        {path:'/ab',component:AB},
        {path:'/ac',component:AC},
        {path:'/ad',component:AD},
        {path:'/ae',component:AE},
        {path:'/af',component:AF},
        {path:'/ag',component:AG},
        {path:'/ja',component:JA},
        {path:'/jb',component:JB},
        {path:'/jc',component:JC},
        {path:'/jd',component:JD},
        {path:'/je',component:JE},





        
    ],
  },
]

const router = new VueRouter({
  routes
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to:将要访问的路径
  // from:从哪里访问的路径
  // next:之后要做的任务，是一个函数
  //    next（）放行， next（'/URL'）强制跳转的路径。
  if (to.path == '/login') return next();// 访问路径为登录
  // 获取flag
  const flagStr = window.sessionStorage.getItem("flag");// session取值
  if (!flagStr) return next('/login');// 没登录去登录
  next();
})

export default router// 暴露出去
