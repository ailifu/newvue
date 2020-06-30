import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
 

Vue.use(VueRouter)

 
//路由导航守卫beforeEach
 const router = new VueRouter({
  routes:[
    {path:'/',redirect:'/login'},
    {path:'/login',component: Login},
    {path:'/home',component: Home}
  ]
})
router.beforeEach(( to , from , next ) => {
//to将要访问的路径
//from 代表从哪个路径跳转过来
//next是一个函数表是放行，next()放行，next('/login')强制跳转
if(to.path ==="/login"){ return next(); }//如果用户访问的是登陆页直接放行
var tokenstr=window.sessionStorage.getItem('token');//从session中获取token
 
if(!tokenstr){
  return next('/login');
}
next();//如果没有设置token跳转到登陆页
})
export default router