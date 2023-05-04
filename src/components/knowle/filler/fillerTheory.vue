<template>
  <div id="mid">
    <div id="right">
      <div class="title">
        <img src="@/assets/imgs/knowle/9.png" alt="">
        <span>使 用 原 理</span>
      </div>
      <img src="@/assets/imgs/knowle/气柱袋原理.png" alt="" id="theory">
      <div className="content">
        <p>缓冲气柱袋基于其反向空气截止阀膜，可实现不必密封，气体即可只能在充气过程中进出。</p>

        <p>制造气柱袋时，它将两层反向气阀膜作为内膜。两层气阀膜的功能是在充气过程中为每个气柱提供进气通道，同时，在空气压力过后，反向空气截止阀膜将紧紧附着在外膜上。再利用先前预制的热封点提供的粘合功能，气体回路被气压紧密关闭。
        </p>
        <p>气柱袋具有很强的耐压性，这是因为气柱袋的原料是尼龙共挤膜。共挤出膜属于新材料技术，通过多模头共挤出技术，可以将不同的材料共挤出到同一薄膜中。尼龙(PA)位于内层，以提供超强的韧性和耐性，聚乙烯(PE)具有可压缩性，可提供热封性能。
        </p>
        <p>通常，用于气柱袋的七层尼龙共挤膜的结构是PE-PE-TIE-PA-TIE-PE-PE。不同的膜层提供不同的功能，并且不同的膜层会聚为同一膜。气柱袋可以容纳长时间的气体，这也是由气柱袋的尼龙共挤膜提供的。尼龙是一种阻隔材料，具有很强的保气性，因此，气柱袋最多可容纳六个月的气体。
        </p>

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
  margin: 3vw 12vw;
  color: #f1f1f1;
  .title {
    width: 5vw;
    height: 5vw;
    img{
      width: 15vw;
      height: 5vw;
    }
    span{
      position: absolute;
      top: 16%;
      left: 15%;
    }
    font-family: 'Inter';
    font-weight: 600;
    font-size: 2vw;
    line-height: 70px;
    text-align: center;
  }

  .content {
    margin-top: 15px;
    background-color: rgba(34, 85, 119, 0.5);
    height: 50vh;
    padding: 30px 60px 30px 80px;
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

#theory{
  position: fixed;
  top: 7%;
  left: 35%;
  width: 350px;
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
