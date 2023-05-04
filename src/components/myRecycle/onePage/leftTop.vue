<template>
  <div class="main">
    <img src="@/assets/imgs/zuo.png" alt="" class="left">
    <h1>生活垃圾处理费用函数</h1>
    <img src="@/assets/imgs/you.png" alt="" class="right">
    <table>
      <tr>
        <th>项目</th>
        <th>填埋</th>
        <th>焚烧</th>
      </tr>
      <tr>
        <td>清运费用</td>
        <td>90.56+4.5*10<sup>-3</sup>*P</td>
        <td>90.56+4.5*10<sup>-3</sup>*P</td>
      </tr>
      <tr>
        <td>运营与基建费用</td>
        <td>201.74</td>
        <td>177.26</td>
      </tr>
      <tr>
        <td>土地占用成本</td>
        <td>0.066*P</td>
        <td>5.7*10<sup>-3</sup>*P</td>
      </tr>
      <tr>
        <td>环境污染成本</td>
        <td>4.9789*L</td>
        <td>S</td>
      </tr>
      <tr>
        <td>效益</td>
        <td>0</td>
        <td>180</td>
      </tr>
      <tr>
        <td>净成本</td>
        <td>292.3+0.066*P+4.9789*L</td>
        <td>272.82+10.2*10<sup>-3</sup>*P</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "leftMid"
};
</script>

<style scoped lang="less">
.left{
  display: inline-block;
  position: relative;
}
.right{
  position: relative;
  display: inline-block;
}
h1{
  font-weight: 550;
  font-size: 2.4vh;
  display: inline-block;
}
table{
  text-align: center;
  tr{
    background: linear-gradient(to right, rgba(28, 103, 161, 1), rgba(28, 103, 161, 0.1));
    &:nth-child(2n){
      background: linear-gradient(to right, rgba(4, 36, 94, 1), rgba(4, 36, 94, 0.1));
    }
    td{
      font-size: 0.8em;
      height: 4.5vh;
    }
  }
  width: 100%;
  margin-top: 1vh;
}
//*{
//  border: 1px solid red;
//}
.main{
  padding-top: 2vh;
  width:32vw;
  height:37vh;
  overflow-y: scroll;
  text-align: center;
  margin-left: 2vw;

  //background: linear-gradient(
  //  92deg,
  //  #0072ff 0%,
  //  #00eaff 48.8525390625%,
  //  #01aaff 100%
  //)left top no-repeat;
  background: linear-gradient(to left, #00e0e9, #00e0e9) left top no-repeat,
  linear-gradient(to left, #00e0e9, #00e0e9) left top no-repeat,
  linear-gradient(to left, #00e0e9, #00e0e9) right top no-repeat,
  linear-gradient(to left, #00e0e9, #00e0e9) right top no-repeat,
  linear-gradient(to left, #00e0e9, #00e0e9) left bottom no-repeat,
  linear-gradient(to left, #00e0e9, #00e0e9) left bottom no-repeat,
  linear-gradient(to left, #00e0e9, #00e0e9) right bottom no-repeat,
  linear-gradient(to left, #00e0e9, #00e0e9) right bottom no-repeat;
  background-size: 2px 20px, 20px 2px;
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
  background-color:rgba(191, 192, 196,0.25);
}
::-webkit-scrollbar-thumb:hover
{
  background-color: rgba(212, 213, 218, 0.4);
}
</style>
