<template>
  <div id="mid">
    <div id="right">
      <div class="title">
        <img src="@/assets/imgs/knowle/9.png" alt="">
        <span>回收痛点分析</span>
      </div>
      <div class="content">
        <p>
          胶带所产生的回收附着物，是目前机器难以分离的，必须要人工提前去除。由于快递行业和外卖行业的发展，胶带的使用量大大增加，给回收再生企业带来了回收痛点。
        </p>

        <br>
        <span>痛苦一：塑料泡沫上的胶带</span>
        <p>塑料泡沫的主要成分是聚苯乙烯（PS），这种塑料通过发泡剂的作用在内部形成很多微小气孔，从而变得很轻很软，可以抗震和保温。以前塑料泡沫最常用在电器的垫衬包装中，现在快递冷鲜食物时也常用它做保温包装。塑料泡沫的再生过程，是加温热熔去除泡沫中的气泡，待重新冷却后再制成PS原料颗粒。重新冷却后再制成PS原料颗粒。这个过程混入PVC和PE材料的透明胶带，会直接降低PS再生颗粒的品质，让成品价格大打折扣。为避免这种情况，回收塑料泡沫的工厂，会粗略地尝试撕下胶带，或者直接丢掉很难去除胶带的泡沫。而在这个过程中，许多塑料泡沫被破碎成了细小颗粒，很容易的就进入到了环境中，成为白色污染。
        </p>

        <br>
        <span>痛苦二：塑料袋膜上的胶带</span>
        <p>在快递外包装上粘胶带封口，也是常规操作。但塑料袋膜的材质一般是PE，与胶带的PP或PVC材质是不兼容的。我们参观过回收再生塑料袋膜的工厂，在那里大量的塑料袋包装会投进一个热熔机内，熔解后再冷却拉伸，最后切割成PE颗粒，用于制造管道、电线皮等比较皮实的产品。塑料袋回收厂的工人说，回收中最头疼的就是PVC（胶带）杂质。因为PVC的熔点与PE不同，所以在处理过程中这些杂质可能不会熔解，反而会脆化成为颗粒甚至结块，最终直接影响产生出来的PE颗粒质量。所以他们会尽量剪掉塑料包装袋上的胶带，但这个过程很消耗人力，于是不少人手少的工厂实在剪不掉，干脆整个材料都丢弃处理。同理，各类塑料制品，比如外卖包装、塑料瓶、硬质塑料盒等，只要有胶带，都会影响回收再生。
        </p>

        <br>
        <span>痛苦三：纸箱包装上的胶带</span>
        <p>相比起塑料制品上的胶带，纸箱的胶带头疼系数稍微小一点，但也不可小视。在造纸厂，回收来的废纸会进入一个巨大的搅拌罐里，加水搅拌成浆。这个过程中，难以溶于水的胶带基材，会逐渐被洗掉沉淀到底部，最后过滤出来成为垃圾。胶带对于造纸最大的损害，主要来自胶水。在造纸过程中，胶带等杂质上的胶粘物，会吸附纸浆中的细小纤维等物体，形成一团团的粘性沉淀。这些沉淀积累多了，会影响整个后续造纸过程：
        </p>
        <p>1、堵塞在纸浆出口滤网，造成过滤困难</p>
       <p> 2、附着在出纸压辊上，影响纸张脱水，减少设备寿命</p>
        <p>3、烘干流程中粘住烘缸，造成断纸，或者纸张出现污斑、纸洞</p>

        <br>
        <p>所以在造纸厂，缠着胶带的快递纸箱，都被归类到档次较低的B或C类纸中，要控制在造浆过程中的使用比例。所以，胶带在各类可回收物的再生中，都是不受欢迎的。为了让再生产品质量更高，并避免下游工厂去除胶带所产生的浪费和污染，在（奥北的）可回收物投递中，请去掉胶带。塑料泡沫上的胶带没有去除，会认定为不当投递。
          现阶段投递可回收物，把胶带撕下，作其他垃圾投递，然后运到焚烧厂处理是最好的胶带处理方式。
        </p></div>
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
  margin: 30px 180px;
  .title{
    width: 5vw;
    height: 5vw;
    img{
      width: 15vw;
      height: 5vw;
    }
    span{
      position: absolute;
      top: 13%;
      left: 13%;
    }
    font-family: 'Inter';
    font-weight: 600;
    font-size: 2vw;
    color: #f1f1f1;
    line-height: 70px;
    text-align: center;
  }
  .content{
    margin-top: 15px;
    //background: rgba(255, 255, 255, 0.35);
    height: 50vh;
    background-color: rgba(34, 85, 119, 0.5);
    //background-size:100% 100%;
    //background-attachment:fixed;
    //padding: 30px 80px;
    padding: 30px 60px 30px 80px;
    //width: 1030px;
    font-family: '宋体';
    color: #f1f1f1;
    font-style: normal;
    font-weight: 400;
    font-size: 1.7vw;
    line-height: 2.8vw;

    text-indent: 2em;
    overflow-y: scroll;
    span{
      font-weight: bold;
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
