import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
// 将打印机效果注册为全局组件
import Typer from '@/components/Typer'
//第一个参数是全局组件的名字，第二个参数是表示哪一个组件
Vue.component(Typer.name, Typer)
new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus=this
},
}).$mount('#app')
