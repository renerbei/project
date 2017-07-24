<template>
  <div class="index">
    <header>
      <p><</p>
      <span>上海话</span>
    </header>
    <main>
      <h1>上海话</h1>
      <h3>you understand "伐木累"</h3>
      <p>旁友，侬还记得上一趟刚上海话是撒辰光？随着普通话、英语等语言普及,今、上海话you understand '伐木累'</p>
      <div><router-link to="/Shou/1">测一测我的上海话水平</router-link></div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Hello',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{
    width: 100%;
    height: 100%;
    background: url(../img/背景图.jpg) no-repeat center center;
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
      font-size: 16px;
    }
  header>p{
      width: 10%;
      height: 100%;
      font-size: 26px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  main>h1{
       width: 80%;
       color: #ffab3e;
       font-size:60px;
      text-align: center;
       height: 150px;
       line-height: 150px;
    letter-spacing: 15px;
     }
  main>h3{
        width: 80%;
        height: 60px;
        color: #ffab3e;
        text-align: center;
         word-spacing: 5px;
        font-size: 18px;
      }
  main>p{
         width: 80%;
         height: 120px;
         color: #000;
         font-size: 18px;
    font-weight: bold;
         border: 2px solid #000;
          display: flex;
          justify-content: center;
          align-items: center;
         border-bottom-right-radius: 50px;
         border-top-right-radius: 50px;
         border-bottom-left-radius:15px;
         border-top-left-radius:25px;
       }
  main{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;




  }
  main>div{
     width: 80%;
     height: 55px;
    margin-top: 60px;
    opacity: 1;
     display: flex;
     justify-content: center;

  }
  main>div a{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
     width:80%;
     height: 100%;
     background: #ffb226;
     box-sizing: border-box;
     border:1px solid #000;
   }
</style>
