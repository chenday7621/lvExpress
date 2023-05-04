<template>
  <div class="main">
    <img src="@/assets/imgs/zuo.png" alt="" class="left">
    <h1>各类包装所含不同材料质量分布</h1>
    <img src="@/assets/imgs/you.png" alt="" class="right">
    <div id="qualityChart"  style="width:32vw; height:35vh"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {onMounted} from "vue";
export default {
  name: "rightBot",
  setup(){
    function initChart(){
      let chart = echarts.init(document.getElementById("qualityChart"))
      chart.setOption({

        color: ['#80FFA5', 'rgb(70, 178, 217)', '#37A2FF', 'rgb(98,215,227)', '#FFBF00'],
        // title: {
        //   text: '各类包装所含不同材料质量分布',
        //   textStyle: {
        //     color:'#fff'
        //   },
        //   left:'5%',
        //   top:'5%',
        // },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['瓦楞纸箱', '套装纸箱', '塑料袋', '编织袋', '泡沫箱'],
          textStyle: {
            color:'rgb(166, 166, 166)'
          },
          // left:'45%',
          top:'2%',
        },
        grid: {
          left: '3%',
          right: '10%',
          bottom: '3%',
          top:"15%",
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: [ '透明胶带', '快递单纸', '泡沫塑料', '胶带纸芯','编织袋塑料'],
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },

          }
        ],
        series: [
          {
            name: '瓦楞纸箱',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              //   {
              //     offset: 0,
              //     color: 'rgb(239, 201, 35)'
              //   },
              //   {
              //     offset: 1,
              //     color: 'rgba(239, 201, 35,0)'
              //   }
              // ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [ 2.7, 4.5, 16.8, 0.22,0]
          },
          {
            name: '套装纸箱',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              //   {
              //     offset: 0,
              //     color: 'rgb(70, 178, 217)'
              //   },
              //   {
              //     offset: 1,
              //     color: 'rgba(70, 178, 217,0)'
              //   }
              // ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [ 2.7, 4.5, 47, 0.22,0]

          },
          {
            name: '塑料袋',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              //   {
              //     offset: 0,
              //     color: 'rgb(83, 155, 250)'
              //   },
              //   {
              //     offset: 1,
              //     color: 'rgba(83, 155, 250,0)'
              //   }
              // ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [ 2.7, 4.5, 39, 0.22,0]
          },

          {
            name: '编织袋',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              //   {
              //     offset: 0,
              //     color: 'rgb(98,215,227)'
              //   },
              //   {
              //     offset: 1,
              //     color: 'rgba(76, 165, 174,0)'
              //   }
              // ])
            },
            emphasis: {
              focus: 'series'
            },
            data:  [ 2.7, 4.5, 39, 0.22,46]
          },
          {
            name: '泡沫箱',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {
              opacity: 0.8,
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              //   {
              //     offset: 0,
              //     color: 'rgb(57, 123, 234)'
              //   },
              //   {
              //     offset: 1,
              //     color: 'rgba(57, 123, 234,0.2)'
              //   }
              // ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [2.7, 4.5, 39, 0.22,0]
          }
        ]
      })
      window.addEventListener("resize", function() {
        chart.resize();
      });
    }
    onMounted(()=>{
      initChart()
    })
    // window.addEventListener("resize", function() {
    //   let charts = echarts.init(document.querySelector(`#qualityChart`));
    //   charts.resize();
    // });
  }
};
</script>

<style scoped>

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
.main{
  width:32vw;
  height:40vh;
  padding-top: 2vh;
  position: absolute;
  bottom: 8vh;
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
/**{*/
/*  border: 1px solid red;*/
/*}*/
/*#qualityChart{*/
/*  margin-top: 8vh;*/
/*}*/
</style>
