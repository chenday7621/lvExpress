<template>
  <div class="main">
    <img src="@/assets/imgs/zuo.png" alt="" class="left">
    <h1>快递包装废弃物流量分析</h1>
    <img src="@/assets/imgs/you.png" alt="" class="right">
    <div id="sangchart1"  style="width:28vw; height:35vh" v-show="num===0"></div>
    <div id="sangchart2"  style="width:28vw; height:35vh" v-show="num===1"></div>
    <div class="myoptions">
<!--      <div @click="change(0)" :class="{active:num===0,'antiactive':num!=0}"></div>-->
<!--      <div @click="change(1)" :class="{active:num===1,'antiactive':num!=1}"></div>-->
      <img @click="change(0)" :src="require(`@/assets/imgs/knowle/${options[0]}.png`)" alt=""/>
      <img @click="change(1)" :src="require(`@/assets/imgs/knowle/${options[1]}.png`)" alt=""/>
    </div>
  </div>
</template>

<script>

import * as echarts from "echarts";
import { onMounted, reactive, ref } from "vue";
export default {
  name: "rightMid",
  setup(){
    let num=ref(0)
    const options=reactive(['selected','unselected'])
    function change(n){
      num.value=n
      for (let i=0;i<2;i++){
        options[i]='unselected'
      }
      options[num.value]='selected'
    }
    function initChart(){
      let chart1 = echarts.init(document.getElementById("sangchart1"));
      chart1.setOption({
        series: [
          {
            type: 'sankey',
            layout: 'none',
            center:'50%',
            emphasis: {
              focus: 'adjacency'
            },
            right:105,
            bottom:30,
            data: [
              {
                name: '纸类:837.33'
              },
              {
                name: '瓦楞纸:825.40'
              },
              {
                name: '再利用纸箱:34.08'
              },
              {
                name: '填埋:91.91'
              },
              {
                name: '焚烧:47.55'
              },
              {
                name: '文件袋:11.93'
              },
              {
                name: '再生利用:688.89'
              },
              {
                name: '其他:8.98'
              },
            ],
            links: [
              {
                source: '纸类:837.33',
                target: '瓦楞纸:825.40',
                value: 825.40
              },
              {
                source: '瓦楞纸:825.40',
                target: '填埋:91.91',
                value: 90.91
              },
              {
                source: '瓦楞纸:825.40',
                target:'再利用纸箱:34.08',
                value: 8.08
              },
              {
                source: '瓦楞纸:825.40',
                target:'再生利用:688.89',
                value: 679.96
              },
              {
                source: '瓦楞纸:825.40',
                target:'其他:8.98',
                value: 8.98
              },
              {
                source: '瓦楞纸:825.40',
                target: '焚烧:47.55',
                value: 46.55
              },
              {
                source: '纸类:837.33',
                target:'文件袋:11.93',
                value: 11.93
              },
              {
                source: '文件袋:11.93',
                target: '焚烧:47.55',
                value: 1
              },
              {
                source: '文件袋:11.93',
                target:'其他:8.98',
                value: 1
              },
              {
                source: '文件袋:11.93',
                target: '填埋:91.91',
                value: 1
              },
              {
                source: '文件袋:11.93',
                target:'再生利用:688.89',
                value: 8.93
              },
            ],
            lineStyle: {
              //线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比
              color:new echarts.graphic.LinearGradient(0, 0, 1, 0, [{  //设置边为水平方向渐变
                offset: 0,
                color: 'rgba(171, 183, 186)'
              },{
                offset: 1,
                color: 'rgba(171, 183, 186)'
              }]),
              curveness: 0.5,  //设置边的曲度
              opacity:0.5  //设置边的透明度
            },
            label:{
              color:"#fff"
            },
          }
        ]
      })

      let chart2 = echarts.init(document.getElementById("sangchart2"));
      chart2.setOption({
        series: [
          {
            type: 'sankey',
            layout: 'none',
            emphasis: {
              focus: 'adjacency'
            },
            right:105,
            bottom:30,
            data: [
              {
                name: '塑料类:85.180'
              },
              {
                name: '塑料袋:69.430'
              },
              {
                name: '胶带:8.070'
              },
              {
                name: '编织袋:5.470'
              },
              {
                name: '珠光袋:1.100'
              },
              {
                name: '泡沫箱:1.110'
              },
              {
                name: '填埋:50.036'
              },
              {
                name: '其他:1.679'
              },
              {
                name: '焚烧:31.695'
              },
              {
                name: '再生利用:1.770'
              },
              {
                name: '再生利用袋:0.160'
              },
            ],
            links: [
              {
                source:  '塑料类:85.180',
                target: '塑料袋:69.430',
                value: 69.430
              },
              {
                source:  '塑料类:85.180',
                target:'胶带:8.070',
                value: 8.070
              },
              {
                source:  '塑料类:85.180',
                target:'编织袋:5.470',
                value: 5.470
              },
              {
                source: '塑料类:85.180',
                target:'珠光袋:1.100',
                value: 1.100
              },
              {
                source:  '塑料类:85.180',
                target: '泡沫箱:1.110',
                value: 1.110
              },

              {
                source:  '塑料袋:69.430',
                target: '填埋:50.036',
                value: 40.036
              },
              {
                source:  '塑料袋:69.430',
                target:  '焚烧:31.695',
                value: 25.695
              },
              {
                source:  '塑料袋:69.430',
                target: '其他:1.679',
                value: 1.679
              },
              {
                source:  '塑料袋:69.430',
                target: '填埋:50.036',
                value: 50.036
              },
              {
                source:  '塑料袋:69.430',
                target: '再生利用袋:0.160',
                value: 0.160
              },



              {
                source:  '胶带:8.070',
                target: '填埋:50.036',
                value: 5
              },
              {
                source:  '胶带:8.070',
                target: '焚烧:31.695',
                value: 1
              },
              {
                source: '胶带:8.070',
                target: '其他:1.679',
                value: 1
              },

              {
                source:  '编织袋:5.470',
                target: '填埋:50.036',
                value: 1
              },
              {
                source:   '编织袋:5.470',
                target: '焚烧:31.695',
                value: 1
              },
              {
                source:  '编织袋:5.470',
                target: '其他:1.679',
                value: 1
              },
              {
                source:  '编织袋:5.470',
                target: '再生利用:1.770',
                value: 1
              },


              {
                source:  '珠光袋:1.100',
                target: '填埋:50.036',
                value: 1
              },
              {
                source:   '珠光袋:1.100',
                target: '焚烧:31.695',
                value: 1
              },
              {
                source:  '珠光袋:1.100',
                target: '其他:1.679',
                value: 1
              },

              {
                source: '泡沫箱:1.110',
                target: '填埋:50.036',
                value: 0.1
              },
              {
                source:   '泡沫箱:1.110',
                target: '焚烧:31.695',
                value: 0.4
              },
              {
                source:   '泡沫箱:1.110',
                target: '再生利用:1.770',
                value: 0.3
              },
              {
                source:  '泡沫箱:1.110',
                target: '其他:1.679',
                value: 0.2
              },
            ],
            lineStyle: {
              //线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比
              color:new echarts.graphic.LinearGradient(0, 0, 1, 0, [{  //设置边为水平方向渐变
                offset: 0,
                color: 'rgba(171, 183, 186)'
              },{
                offset: 1,
                color: 'rgba(171, 183, 186)'
              }]),
              curveness: 0.5,  //设置边的曲度
              opacity:0.5  //设置边的透明度
            },
            label:{
              color:"#fff"
            },
            // itemStyle:{
            //
            // }
          }
        ]
      })
      window.addEventListener("resize", function() {
        chart1.resize();
      });
      window.addEventListener("resize", function() {
        chart2.resize();
      });
    }
    // window.addEventListener("resize", function() {
    //   let charts = echarts.init(document.querySelector(`#sangchart`));
    //   charts.resize();
    // });
    onMounted(()=>{
      initChart()
    })
    return{
      num,change,options
    }
  }
}
</script>

<style scoped lang="less">
.main{
  width:32vw;
  height:37vh;
  padding-top: 2vh;
  margin-right: 2vw;
  text-align: center;

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
.myoptions {
  display: inline-block;
  position: absolute;
  right: 30vw;
  top: 11vw;

img {
  width: 2.5vh;
  height: 2.5vh;
  border-radius: 50%;
  margin-top: 3vh;
  display: block;
&:hover {
   cursor: pointer;
 }
}
}
#sangchart1,#sangchart2{
  display: inline-block;
  margin-left: 7vh;
}

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
//*{
//  border: 1px solid red;
//}
</style>
