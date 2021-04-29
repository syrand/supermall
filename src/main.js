import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'components/common/Toast'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

/* 使用Toast插件完成弹窗 */
Vue.use(Toast)

/* 实现图片懒加载  */
Vue.use(VueLazyLoad,{  /* js中图片使用require加载 */
  loading:require('./assets/img/common/placeholder.png'),/* 设置参数，在未加载完成时显示的图片 */
})

Vue.prototype.$bus=new Vue(); /* Vue 实例可以充当事件总线（用来在不是父子关系的两个组件中传递事件） */
Vue.config.productionTip = false

/*使用fastClick移动端延迟300ms  */
fastclick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
