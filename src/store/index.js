import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    title: ''
  },
  mutations: {
    setTitle(state,title){
    	state.title=title
    }
  } 
})
//state 存放所有全局状态值（全局的状态值） 这里的数据只能通过mutation里的方法修改 ，可以在任何一个组件中调用（this.$store.state.name）
//mutations 里面有一堆方法  方法的作用是修改  state 里的值
export default store