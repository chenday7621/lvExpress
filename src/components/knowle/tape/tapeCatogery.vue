<template>
  <div id="mid">
    <div id="left">
      <img src="@/assets/imgs/knowle/胶带2.png">
    </div>
    <div id="right">
      <div class="title">
        <img src="@/assets/imgs/knowle/9.png" alt="">
        <span>分 &nbsp&nbsp类</span>
      </div>
      <div class="content">
        <p>根据基材的差别，一般可以分为以下几个类型：</p>
        <p>（1）有机薄膜类基材
          有机薄膜： 以有机高分子聚合物为材料制成的薄膜，刚性较高的如环氧，酚醛，BT树脂等热固性材料不宜用作基材外，普通的热塑性材料基本都能作为胶带的基材。常见的如：PP薄膜、PVC薄膜、PET薄膜等。
        </p>
        <p>
          （2）有机聚合物弹性体基材
          与有机薄膜相比，弹性体基材提供了更强的压缩性能和拉伸性能，例如现在有PU体系或者橡胶体系的易拉胶带，纯丙体系的拉伸性能也很强​。

        </p>
        <p>
          （3）无纺布/绒布类基材
          无纺布/绒布类基材可以看做是有机薄膜的二次加工。其中，无纺布主要以PP,PET为原材。材料的本质没有变化，但在形式上有变化，起到一些薄膜类基材没有的作用：透气性、保温性很强，具有伸缩性和弹性，轻盈柔软等特点。

        </p>
        <p>
          （4）泡棉类基材
          泡棉类基材可以看做是有机薄膜/弹性体材料的二次加工。常见的泡棉材料有：PU泡棉、Acrylic 泡棉、PE 泡棉等。材料的本质没有变化，但是在形式上有变化，起到一些原本没有的作用：抗震缓冲、弹性持久、保温性很强等。
        </p>
        <p>
          （5）纸质基材
          纸质基材一般称为绵纸，是由树皮或麻所提供的韧性纤维所制的纸，主要特点是韧性好，易撕断，手工操作性好。主要分为三类：超薄绵纸胶用、涂料遮蔽胶用、装饰标签胶用。
        </p>
        <p>
          （6）金属类基材
          金属类基材一般由各类金属锭材经过不同工序压延或者电解得到的卷材，一般采用压延工艺。采用金属类基材的最大优点在于金属的导电性能，因此主要用于生产导电胶带。例如：Al 基材、Cu 基材和其他类复合基材。
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
}
#nav{
  display: inline-block;
}
#left{
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-left: 5%;
  margin-top: 15%;
  img{
    width: 29vw;
  }
}
#right{
  margin-left: 2vw;
  margin-top: 4vw;
  .title{
    width: 5vw;
    height: 5vw;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 2vw;
    color: #f1f1f1;
    img{
      width: 15vw;
      height: 5vw;
    }
    span{
      position: absolute;
      top: 17%;
      left: 41%;
    }
    line-height: 80px;
    text-align: center;
  }
  .content{
    background-color: rgba(34, 85, 119, 0.5);
    height: 48vh;
    padding: 30px 30px 30px 50px;
    margin-top: 1.5vw;
    width: 50vw;
    font-family: '宋体';
    color: #f1f1f1;
    font-style: normal;
    font-weight: 400;
    font-size: 1.7vw;
    line-height: 2.8vw;

    text-indent: 2em;
    overflow-y: scroll;
  }
}


/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
  width:10px;
  /*background-color:#F5F5F5;*/
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
