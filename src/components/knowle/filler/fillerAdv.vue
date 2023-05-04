<template>
  <div id="mid">
    <div id="right">
      <div class="title">
        <img src="@/assets/imgs/knowle/9.png" alt="">
        <span>使 用 优 点</span>
      </div>
      <div className="content">
        <p></p>
        <span>1、坚固耐用，气密性高</span>
        <p>优质的“PE+PA”薄膜使保护性能更有保障。经SGS检测，气柱袋的基本材料不含任何重金属，燃烧无毒性，符合不透气、防潮特性，能够代替保丽龙、EPE、纸浆等选择。
        </p>
        <br>
        <span> 2、生产效率高，价格低廉</span>
        <p>气柱袋的工艺生产均采用机械化生产，效率高、成本非常低。无需开模、试模、换模，因此能节省很多研发生产成本和研发时间。
        </p>
        <br>
        <span>3、节省存储空间</span>
        <p>与传统缓冲包装相比，气柱袋未充气前所占用的空间很小，省空间、更省事。重要的是，消费者在收货之后不用再为大量、厚重的缓冲包装烦恼了。
        </p>
        <br>
        <span>4、高抗震效果，采用自动锁气技术</span>
        <p>能够提供长时间储运不漏气的抗震保护，充气后可以自动锁气。即使一根气柱发生破损，也不会影响整个气柱袋对产品的缓冲保护作用。
        </p>
        <br>
        <span>5、提高企业形象</span>
        <p>气柱袋作为现代化比较先进的包装材料，能减少很多资源浪费，因此使用气柱袋对提升企业形象获得用户好评有很大的帮助。
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
