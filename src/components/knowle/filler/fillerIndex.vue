<template>
  <div id="mid">
    <div id="left">
      <img src="@/assets/imgs/knowle/气柱包.png">
      <div class="ch">缓 冲 气 柱 袋</div>
      <div class="en">air column bag</div>
    </div>
    <div id="right">
      <div class="title">
        <img src="@/assets/imgs/knowle/9.png" alt="">
        <span>基 本 信 息</span>
      </div>
      <div class="content">
        <p>缓冲气柱袋又称充气袋、柱状充气袋，是21世纪使用自然空气填充的新式包装材料。全面性包覆的气柱式缓冲保护，将产品运输损失率降至最低。缓冲气柱袋是利用LLDPE及NYLON贴合或共挤方式，具有抗拉伸及均衡特性，透过连续性压合，形成不透气的充气柱。通过运用物理原则，一次充气，全排充满，自动锁气。遇到破损，只有破损的单根气柱部分失效，其余气柱，完全不受影响，仍然维持保护效果。提供长时间储运不漏气的抗震保护，气柱式全面性包覆的缓冲保护，将损坏率降至低度。
        </p>
        <p>缓冲气柱袋是使用空气缓冲的新式包装系统，对产品贴身包覆，能确实保护所包装的产品。和传统的填充物比较，不会因包装内箱空隙大，而在运送过程中物品经常移位造成损坏，即使遭遇外力挤压，缓冲气柱袋的贴身设计也能利用气垫来分散压力，以避免损害。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="less">

#mid{
  display: flex;
  flex-direction: row;
}
*{
  //border: 1px solid red;
  margin: 0;
  padding: 0;
  //color: #dddddd;
}
#nav{
  display: inline-block;
}
#left{
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 16vh;
  margin-left: 10vw;
  color: #f1f1f1;
  font-family: 'Inter';
  img{
    width: 20vw;
    height: 20vw;
  }
  .ch{
    font-style: normal;
    font-weight: 600;
    font-size: 2vw;
  }
  .en{
    font-style: normal;
    font-weight: 600;
    font-size: 2vw;
    margin-top: 10px;
  }
}
#right{
  margin-left: 2vw;
  margin-top: 3vw;
  color: #f1f1f1;
  .title{
    width: 5vw;
    height: 5vw;
    img{
      width: 15vw;
      height: 5vw;
    }
    span{
      position: absolute;
      top: 15%;
      left: 35%;
    }
    font-family: 'Inter';
    font-weight: 600;
    font-size: 30px;
    line-height: 80px;
    text-align: center;
  }
  .content{
    margin-top: 20px;
    background-color: rgba(34, 85, 119, 0.5);
    width:47vw;
    height: 45vh;
    padding: 30px 60px 30px 80px;
    font-family: '宋体';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6vw;
    line-height: 2.8vw;

    overflow-y: scroll;
    text-indent: 2em;
  }
}
/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 10px;
  background-color: rgba(191, 192, 196, 0.75);
}

/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track {
  border-radius: 10px;
}

/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(230, 238, 237, 0.75);
}

::-webkit-scrollbar-thumb:hover {
  background-color: white;
}
</style>
