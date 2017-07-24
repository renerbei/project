import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store=new Vuex.Store({
  state:{
    data:[],
    brr:[],
    gg:0
  },
  mutations:{
    add(state,datas){
      state.data=datas
    },
    answer(state,obj){
      state.brr[obj.num]=obj.content

    },
    fen(state){
      var n=0
      state.data.forEach((v,i)=>{
        if(state.data[i].xia.right_answers==state.brr[i]){
          n++
        }
      })
      state.gg=n*20+"分"
    }
  },
  actions:{
    add1(con,datas){
      con.commit("add",datas)
    },
    answer1(con,obj){
      con.commit("answer",obj)
    }
  }
})


export default store


