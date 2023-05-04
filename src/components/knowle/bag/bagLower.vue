<template>
  <div id="mid">
    <div id="right">
      <div class="title">
        <img src="@/assets/imgs/knowle/9.png" alt="">
        <span>下 游 行 业</span>
      </div>
      <div class="content">
        <div class="set">
          <div class="wordset">
            <p></p>
            <span>（1）软饮料行业</span>
            <p>目前，用于饮料包装的塑料种类主要有几种：</p>
            <p> 聚乙烯(PE)——世界上产量最大的合成树脂、消耗量最大的塑料包装材料;　</p>
            <p> 聚氯乙烯(PVC)——大致可分为硬质品、软制品和糊状制品三类;</p>
            <p>聚丙烯(PP)——透明度高、光洁、加工性好，可复合制作多种饮料包装容器。</p>
          </div>
          <img src="@/assets/imgs/knowle/可回收饮料瓶.png" alt="">
        </div>
        <br>
        <div class="set">
          <div class="wordset">
            <p></p>
            <span>（2）食用油行业</span>
            <p>目前，我国食用油包装材质主要有玻璃、聚酯(PET)、聚乙烯(PE)、食用级聚氯乙烯(PVC)和马口铁等等，包装材质种类繁多。由于食用油对于包装容器的强度、透明性、渗透性等都有着严格的要求，所以聚酯(PET)瓶和聚氯乙烯(PVC)瓶是目前食用油的应用主流。这两种材质气密性能好，价格适中，应用最为广泛。
            </p>
          </div>
          <img src="@/assets/imgs/knowle/调和油.png" alt="">
        </div>
        <br>
        <div class="set">
          <div class="wordset">
            <p></p>
            <span>（3）医药行业</span>
            <p>药品的泡罩包装包括药用铝箔、PVC塑料硬片、热封涂料等材料。多选用PVC、PVDC或复合材料PVC/PVDC，PVC/PVDC/PE等。而散剂、颗粒剂通常采用SP薄膜复合袋包装，它采用多种塑料薄膜复合(如BOPP/PET、OPA/PT)或铝塑复合膜(如PT/AL/PE，PET/AL/PE)。</p>
          </div>
          <img src="@/assets/imgs/knowle/药瓶里的药.png" alt="">
        </div>



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
}
#nav{
  display: inline-block;
}

#right{
  //margin: 30px 180px;
  margin: 3vw 12vw;
  color: #f1f1f1;
  .title{
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
      top: 16%;
      left: 14.5%;
    }
    line-height: 70px;
    text-align: center;
  }
  .content{
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
    span{
      font-weight: bold;
    }

    img{
      //width: 250px;
      //height: 250px;
      width: 16vw;
      height: 16vw;
    }
    .set{
      display: flex;
      flex-flow: row;
      align-items: center;
    }
  }
}

/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
  width:10px;
  background-color:rgba(191, 192, 196,0.75);
}
/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track
{
  border-radius:10px;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
  border-radius:10px;
  background-color: rgba(230, 238, 237, 0.75);
}
::-webkit-scrollbar-thumb:hover
{
  background-color:white;
}

</style>
