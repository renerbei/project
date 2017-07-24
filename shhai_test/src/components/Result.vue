<template>
  <div class="index">
    <main>
        <h1>想查看您的成绩吗？</h1>
      <button @click="cha">点我</button>
      <p v-if="bool">{{$store.state.gg}}</p>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'Result',
    data(){
        return {
            bool:false
        }
    },
    methods:{
       cha(){
          this.$store.commit("fen")
         this.bool=true
       }
    }
  }
</script>

<style scoped>
  .index{
    width: 100%;
    height: 100%;
    background: url(../img/背景图.jpg) no-repeat center center;
  }
  main{
    width:100%;
    height:100%;
    box-sizing: border-box;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1{
    width:100%;
    height:40px;
    text-align: center;
    line-height: 40px;
    font-size: 24px;
    font-weight: 500;
  }
  button{
    width:30%;
    height:30px;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    color: #2791ff;
  }
  p{
    width:100%;
    height:50px;
    font-size: 36px;
    text-align: center;
    line-height: 50px;
  }
  </style>
