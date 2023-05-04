<template>
    <div id="root">
      <video id="mp4" autoplay muted loop>
        <source src="@/assets/imgs/hombg.mp4" type="video/mp4">
      </video>
<!--      <background-particles/>-->
      <div id="title1">
        <h1>“绿” 箱 计 划</h1>
        <br><br>
        <div id="num2"><h2>——“绿色革命”政策下基于可视化与“逆向物流”模式的快递包装回收服务平台</h2></div>
      </div>
      <img id="icon1" src="@/assets/imgs/homicon.png" alt="">
      <div id="title2">
        <h1>开 启 属 于 你 的 “绿” 箱 计 划 ！</h1>
        <h2>Let’s start your own journey of Express package recycling </h2>
        <div class="options">
            <div @click="go('policy')" class="opti">
              <img id="icon2" src="@/assets/imgs/hom边框.png" alt="">
            <span>政策展示</span>
            </div>
          <div @click="go('info')" class="opti">
            <img id="icon2" src="@/assets/imgs/hom边框.png" alt="">
            <span>数据展示</span>
          </div>
          <div @click="go('process')" class="opti">
            <img id="icon2" src="@/assets/imgs/hom边框.png" alt="">
           <span>知识科普</span>
          </div>
        </div>
        </div>

      <div id="title3">
        <hr/>
        <div class="fir">
          <span>联系我们 | </span>
          <span>邮箱：Lvxiang_xun@163.com | </span>
          <span>地址：北京市海淀区中关村南大街27号</span>
        </div>
        <div class="sec">
          <span>特别声明 | 本平台所使用的地图均来自Echarts官方资源库，地图网址为https://github.com/apache/echarts/tree/master/test/data/map/json</span>
        </div>
      </div>
      </div>


</template>
<script>
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
  name:"Homepage",
  components: {
  },
  setup(){

    function go(target){
      this.$router.push('/'+target)
    }
    return{
      go
    }
  }})
</script>
<style lang="less" scoped>
*{
  font-family: "华文中宋";
}
video{
  position: fixed;
  z-index: -999;
  width: 100%;
  height: 100%;
  //min-height: 800px;
  object-fit: fill;
}
#icon1{
  position: absolute;
  top: 32%;
  width: 25vw;
  height: 50vh;
  transform: rotateY(180deg);
}
#root{
  position: relative;
}
body{
  margin: 0;
  padding: 0;
}
.options{
  width: 70vw;
  height: 20vh;
  margin: 10vw auto 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  img{
    width: 42vh;
    height: 32vh;
    overflow: hidden;
  }
  span{
    position: relative;
    top:-20vh;
    font-size: 2.6vw;
    &:hover{
      cursor: pointer;
    }
  }
  .opti{
    margin-left: 30px;
  }
}
//*{
//  border: 1px solid red;
//}
#title1{
  color: #FFFFFF;
  height: 83vh;
  h1{
    animation: fadeIn;
    animation-duration: 3s;
    //font-size: 80px;
    font-size: 5vw;
    color: #FFFFFF;
    margin-top: 0;
    padding-top:150px;
    text-align: center;
  }
  h2{
    font-size:2.6vw;
    width: 63vw;
    text-align: right;
    margin-left: 18%;
  }
}

#title2{
  color: #FFFFFF;
  height: 23vh;
  text-align: center;
  h1{
    margin-top: 200px;
    font-size: 4vw;
  }
  h2{
    font-size: 2vw;
  }
}

#title3{
  hr{
    border: none;
    height:1px;
    background-color: #a19e9e;
  }
  height: 10vh;
  line-height: 4vh;
  color: #a19e9e;
  width: 100%;
  position: absolute;
  bottom: -50%;
  text-align: center;
}
</style>
