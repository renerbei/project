import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Shou from '@/components/Shou'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Shou/:id',
      name: 'Shou',
      component: Shou
    },
    {
      path: '/Result',
      name: 'Result',
      component: Result
    },
    {
      path:"*",
      redirect:to=>{
        return "/"
      }
    }
  ]
})
