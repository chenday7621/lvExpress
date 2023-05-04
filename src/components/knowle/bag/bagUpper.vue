<template>
  <div id="mid">
    <div id="right">
      <div class="title">
        <img src="@/assets/imgs/knowle/9.png" alt="">
        <span>上 游 行 业</span>
      </div>
      <div className="content">
        <p>
          塑料包装的上游行业主要为合成树脂和塑料助剂的提供商。塑料制品行业在我国发展历史长久，行业内企业数量众多，竞争程度激励，为我国塑料包装行业打下了良好的基础。
        </p>
        <br>
        <span>（1）合成树脂行业</span>
        <p>根据中国石油和化学工业联合会数据显示，2019年我国合成树脂产量为9574.1万吨，同比增长9.3%。合成树脂表观消费量约为12286.58万吨，同比增长10.33%。合成树脂的消费变化直接影响其下游塑料加工业的发展与趋势判断。
        </p>
        <br>
        <span>（2）塑料助剂行业</span>
        <p>据中国塑料加工工业协会统计数据显示，2019年前三季度，我国塑料助剂的消费量约600万吨左右，其中，增塑剂消费量近300万吨，增塑剂和热稳定剂的环保类产品的增长较快，非环保类的呈缩量态势，其他品种均持平。</p>
        <br>
        <span>（3）塑料加工专用设备行业</span>
        <p>2015-2019年，我国塑料加工专用设备产量呈波动变化。2019年1-12月，我国塑料加工专用设备产量为38.05万台，其中12月产量为2.82万台，同比增长12.9%。</p>
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
      left: 14.5%;
    }
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
