<template>
    <div id="mid">
      <div id="left">
        <img src="@/assets/imgs/knowle/胶带.png">
        <div class="ch">胶&ensp;&ensp;&ensp;带</div>
        <div class="en">adhesive tape</div>
      </div>
      <div id="right">
        <div class="title">
          <img src="@/assets/imgs/knowle/9.png" alt="">
          <span>基 本 信 息</span>
        </div>
        <div class="content">
          胶带是由基材和粘结剂两部分组成,起到使两个或多个不相连的物体粘结在一起作用的多层组合物。胶带表面上通常涂有一层粘着剂，一般来说是压敏胶。通过这个行业定义我们可以认为，能够以卷料形式出现的各种材料都能作为胶带的基材（很厚不能收卷的带胶材料，不合适定义为胶带，算是胶带与超厚片材的复合物）。
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
  margin-top: 14vh;
  margin-left: 10vw;
  color: #f1f1f1;
  img{
    width: 20vw;
    height: 20vw;
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
  margin-top: 4vw;

  .title{
    width: 5vw;
    height: 5vw;
    img{
      width: 15vw;
      height: 5vw;
    }
    span{
      position: absolute;
      top: 17%;
      left: 35%;
    }
    font-family: 'Inter';
    font-weight: 600;
    font-size: 2vw;
    color: #f1f1f1;
    line-height: 80px;
    text-align: center;
  }
  .content{
    margin-top: 1.5vw;
    color: #f1f1f1;
    background-color: rgba(34, 85, 119, 0.5);
    //background-image: url("@/assets/imgs/conbg.png");
    //background-size:100% 100%;
    //background-attachment:fixed;
    //background-size: cover;
    width:45vw;
    height: 45vh;
    padding: 20px 80px;
    display: flex;
    align-items: center;
    font-family: '宋体';
    font-style: normal;
    font-weight: 400;
    font-size: 1.7vw;
    line-height: 2.8vw;

    text-indent: 2em;
  }
}
</style>
