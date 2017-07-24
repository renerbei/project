// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vx/store.js'

Vue.prototype.$http=axios
//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    datas:[]
  },
  router,
  store,
  template: '<App/>',
  components: { App },
  created(){
    this.$http.get("static/json/json.json").then((data)=>{

      setTimeout(()=>{
        this.datas=data.data
        this.$store.dispatch("add1",this.datas)
      },0)
    })
  },
  mounted(){

  }
})
