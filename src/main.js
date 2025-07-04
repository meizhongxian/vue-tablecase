import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//封装全局指令
Vue.directive('focus',{
  //指令所在dom元素被插入到页面中时触发
  inserted(el){
    el.focus()
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
