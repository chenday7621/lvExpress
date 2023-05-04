<template>
  <div id="mid">
    <div id="left">
      <img src="@/assets/imgs/knowle/纸箱子.png">
      <div class="ch">纸&ensp;&ensp;箱</div>
      <div class="en">paper box</div>
    </div>
    <div id="right">
      <div class="title">
        <img src="@/assets/imgs/knowle/9.png" alt="">
        <span>基 本 信 息</span>
      </div>
      <div class="content">
        <p>随着全球包装业和物流业的发展，对包装纸箱品质的要求越来越高，尤其是对包装箱经长途运输，因纸板翘曲不平引起的印刷效果差、吸潮变软及开胶引起产品破损或报废，引发的退货，索赔等案件时有发生。可见包装纸箱的质量对于包装物流行业而言至关重要。
        </p>
        <p>纸箱常用的有三层、五层，七层使用较少，各层分为里纸、瓦楞纸、芯纸、面纸，里、面纸有茶板纸、牛皮纸，芯纸用瓦楞纸，各种纸的颜色和手感都不一样，不同厂家生产的纸（颜色、手感）也不一样。
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
  margin-top: 90px;
  margin-left: 140px;
  color: #f1f1f1;
  img{
    width: 21vw;
    height: 21vw;
  }
  .ch{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 2vw;
  }
  .en{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 2vw;
    margin-top: 2vh;
  }
}
#right{
  margin-left: 2vw;
  margin-top: 3vw;
  color: #f1f1f1;
  .title{
    width: 230px;
    height: 80px;
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
    margin-top: 5vh;
    background-color: rgba(34, 85, 119, 0.5);
    width:47vw;
    height: 48vh;
    padding: 5vh 10vh;
    font-family: '宋体';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6vw;
    line-height: 2.8vw;


    text-indent: 2em;
  }
}
</style>
