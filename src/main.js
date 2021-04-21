import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.prototype.$bus=new Vue(); /* Vue 实例可以充当事件总线（用来在不是父子关系的两个组件中传递事件） */
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
