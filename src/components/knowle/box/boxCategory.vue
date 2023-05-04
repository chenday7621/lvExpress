<template>
  <div id="mid">
    <div id="right">
      <div class="title">
        <img src="@/assets/imgs/knowle/9.png" alt="">
        <span>分 &nbsp&nbsp类</span>
      </div>
      <div className="content">
        <p></p>
        <span>·茶板纸</span>
        <p>茶板纸是纸箱瓦楞中间的那层纸，颜色偏灰白且质地粗糙。因掺加了旧料的茶板纸，纤维成分较少，故硬度质量一般、材质偏软，价格低廉。</p>
        <br>

        <span>·箱板纸</span>
        <p>箱板纸主要分为四类，分别是：</p>
        <p>（1）牛皮卡纸(又称“美卡”、“俄卡”)</p>
        <p>特点：长纤维、重施胶，物理强度高、纸板粗糙；纯木浆或少量OCC。</p>
        <p>（2）仿牛皮卡纸。</p>
        <p>特点：表面挂15-25%木浆、其余为OCC；纤维较短、强度较牛卡纸差。纸面平整，不同程度施胶（吸水性30—55g/m2不等）、表面染色处理。</p>
        <p>（3）白卡纸。</p>
        <p>白面牛卡底，表面漂白木浆，其余为本色或染色木浆。（俄白、瑞典白卡、芬兰白卡)；白板纸（表面漂白木浆、其余为脱墨或不脱墨废纸）；涂布白板纸（白底白、灰底白等等）。</p>
        <p>（4）再生纸。</p>
        <p>全部为OCC组成，但与瓦楞纸不同。表面为11#以上AOCC挂面并经过染色处理。市场一般称为C级箱板纸,部分称为T纸。</p>

        <br>
       <span> ·瓦楞原纸</span>
        <p>瓦楞纸是一个多层的黏合体，最少由一层波浪形芯纸夹层及一层纸板构成。它具有很高的机械强度，能抵受搬运过程中的碰撞和摔跌。瓦楞纸的瓦楞波纹好像一个个连接的拱形门，相互并列成一排，相互支撑，形成三角结构体，具有较好的机械强度，从平面上也能承受一定的压力，并富有弹性，缓冲作用好；它可根据需要制成各种形状大小的衬垫或容器，比塑料缓冲材料要简便、快捷；受温度影响小，遮光性好，受光照不变质，一般受湿度影响也较小，但不宜在湿度较大的环境中长期使用，会影响其强度。
          由于瓦楞纸箱包装具有内装物保护功能强，易于识别、搬运、开箱，印刷精美等特点，成为近年来需求增速最快的产品包装形式之一。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">

#mid {
  display: flex;
  flex-direction: row;
}

* {
  //border: 1px solid red;
  margin: 0;
  padding: 0;
}

#nav {
  display: inline-block;
}

#right {
  margin: 30px 180px;
  color: #f1f1f1;
  .title {
    width: 5vw;
    height: 5vw;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 2vw;

    img{
      width: 15vw;
      height: 5vw;
    }
    span{
      position: absolute;
      top: 14%;
      left: 16.5%;
    }
    font-size: 30px;
    line-height: 70px;
    text-align: center;
  }

  .content {
    margin-top: 15px;
    background-color: rgba(34, 85, 119, 0.5);
    height: 50vh;
    padding: 30px 80px;
    //width: 1030px;
    font-family: '宋体';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6vw;
    line-height: 2.8vw;

    text-indent: 2em;
    overflow-y: scroll;

    span {
      font-weight: bold;
    }
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
