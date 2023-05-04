<template>
  <div class="main">
    <img src="@/assets/imgs/zuo.png" alt="" class="left">
    <h1>快递包装废弃物社会管理成本分析</h1>
    <img src="@/assets/imgs/you.png" alt="" class="right">
    <div id="budgetChart" style="width:32vw; height:35vh"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {onMounted} from "vue";
export default {
  setup(){
    function initChart(){
      console.log(1);
      console.log(echarts);
      let chart = echarts.init(document.getElementById("budgetChart"))
      console.log(chart);
      chart.setOption({
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FFBF00','#FF0087' ],
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
          data: ['清洁费用', '运营与基建费用', '土地占用成本', '环境污染成本'],
          textStyle: {
            color:'rgb(166, 166, 166)'
          },
          // left:'45%',
          top:'2%',
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top:'15%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: [ '2013', '2016', '2019', '2022','2025'],
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
            name: '清洁费用',
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
              //     color: 'rgb(122,229,210)'
              //   },
              //   {
              //     offset: 1,
              //     color: 'rgba(122,229,210,0.2)'
              //   }
              // ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [0.25,1.7,2.4,3.85,6.5]
          },
          {
            name: '运营与基建费用',
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
              //     color: 'rgb(49, 100, 161)'
              //   },
              //   {
              //     offset: 1,
              //     color: 'rgba(49, 100, 161,0.2)'
              //   }
              // ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [ 0.5,2,3.85,5.25,12.5]

          },
          {
            name: '土地占用成本',
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
              //     color: 'rgb(87,187,111)'
              //   },
              //   {
              //     offset: 1,
              //     color: 'rgba(44,94,56,0.2)'
              //   }
              // ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [ 1.7,4,5.2,12.5,22.5]
          },
          {
            name: '环境污染成本',
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
              //     color: 'rgb(225,206,110)'
              //   },
              //   {
              //     offset: 1,
              //     color: 'rgba(225,206,110,0.2)'
              //   }
              // ])
            },
            emphasis: {
              focus: 'series'
            },
            data:  [0.1,0.1,0.12,0.12,0.12]
          },
        ]
      })
      window.addEventListener("resize", function() {
        chart.resize();
      });
    }
    onMounted(()=>{
      try{
        initChart()
      }catch (error){
        console.error(error)
      }
    })

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
.main{
  position: absolute;
  bottom: 8vh;
  margin-left: 2vw;
  text-align: center;

}
/**{*/
/*  border: 1px solid red;*/
/*}*/
</style>
