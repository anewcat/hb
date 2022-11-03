import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import routes from '../router/routes'
let router = new VueRouter({
    // 配置路由
    routes,
    // 滚动行为
    scrollBehavior() {
      // return 期望滚动到哪个的位置
      // 返回这个y=0，代表的是滚动条在最上方
      return { y: 0 }
    }
  })

router.beforeEach(async (to,from,next)=>{
  document.querySelector('body').setAttribute('style', 'margin:0;padding:0')
  next()
})
export default router;