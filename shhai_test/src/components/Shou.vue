<template>
  <div class="index">
    <header>
      <p @click="back"><</p>
      <span>上海话</span>
    </header>
    <main>

      <div class="banner">
        <h1>选择题</h1>
        <!--<img src="../img/不靠谱.jpg" alt="">--></div>
      <div class="ti">
        <h3>{{arr.xia.topic}}</h3>
        <ul>
          <li v-for="i in arr.xia.options" @click="select(i)" :class="{bg:min==i}">{{i}}</li>
        </ul>
      </div>
      <div class="tiao" @click="dian">下一题</div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'Shou',
    data(){
      return {
          num:0,
          arr:{},
          min:""
      }
    },
    computed:{
        dat(){
            return this.$store.state.data
      }
    },
    created(){

      this.num=this.$route.params.id
      console.log(this.num)

      this.dat.forEach((v,i)=>{
        console.log(this.num)
        if(v.id==this.num){
          this.arr=v
        }
      })
    },
    watch:{
        num(){
          this.dat.forEach((v,i)=>{
              if(v.id==this.num){
                  this.arr=v
              }
          })
          if(this.$store.state.brr[this.num-1]){
            this.min=this.$store.state.brr[this.num-1]
          }
        }
    },
    methods:{
        dian(){
            this.num++
          if(this.num>=6){
            this.$router.push("/Result")
          }else{
            this.$router.push("/Shou/"+this.num)
          }
        },
      select(s){
            if(!s){
                s=""
            }
            console.log(this.num)
           this.$store.dispatch("answer1",{content:s,num:this.num-1})
          this.min=s

        window.localStorage.setItem(this.num,this.min)
      },
      back(){
        this.num--
        if(this.num<=0){
          this.$router.push("/Shou")
        }else{
          this.$router.push("/Shou/"+this.num)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{
    width: 100%;
    height: 100%;
    background: url(../img/背景图.jpg) no-repeat 100% 100%;
  }
  header{
    width: 100%;
    height: 55px;
    background: #2f3535;
    display: flex;
    align-items: center;
  }
  header>span{
    color: #fff;
    font-size: 12px;
  }
  header>p{
    width: 10%;
    height: 100%;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  main{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  main>.banner{
    box-sizing: border-box;
    padding-top: 15px;
  }
  main>.banner>img{
    width:100%;
  }
  main>.banner>h1{
    font-weight:800;
    width: 100%;
    font-size: 50px;
    letter-spacing: 16px;
    height:220px;
    line-height: 220px;
  }
  main>.ti{
    width:100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  main h3{
    width:100%;
    height:40px;
    text-align:center;
    line-height: 40px;
    font-size: 16px;
    color:#000;
  }
  main ul{
    width:80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  main ul>li{
    width:40%;
    height:40px;
    border:1px solid #000;
    color:#000;
    font-size: 18px;
    border-radius: 8px;
    margin-top:10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  main ul .bg{
    background: #ffae31;
  }
  main>.tiao{
    width:30%;
    height:40px;
    position: relative;
    margin-top: 15px;
  }
  main>.tiao{
    font-size: 26px;
    font-weight: 600;
    text-decoration: none;
    color:#ffae31;
  }
  main>.tiao:after{
    position: absolute;
    content:"";
    right:-15px;
    top:3px;
    border:15px solid transparent;
    border-left-color:#ffae31;
  }
</style>
