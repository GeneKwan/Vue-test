// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入全局配置样式 
import './styles/reset.less'

import router from './router'  // 引入路由

// 引入axios  
import  Axios from 'axios'
Vue.prototype.$axios = Axios // axios 挂载到vue的实例上 这样他的拓展实例  组件也有$axios

import MintUI from 'mint-ui'  // 引入Mint-UI
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

import store from './store/index.js'  // 引入 vuex

import './styles/index.styl'  // 引入stylus语法的公共样式

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', 
  router,
  store,
  components: { App },
  template: '<App/>'
})
