<template>
  <div id="fochart" style="width:40vw; height:39vh"></div>
</template>

<script>
import * as echarts from "echarts";
import {onMounted} from "vue";
export default {
  setup(){
    function initChart(){
      let chart = echarts.init(document.getElementById("fochart"))
      chart.setOption({
        title:{
          text:'主要快递包装用品的环境影响和能源消耗',
          textStyle: {
            color:'rgb(78,156,182)',
            fontSize: 20
          },
          top:'4%',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        legend: {
          textStyle:{color:'#ccc',
          },
          top:'20%',
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top:'30%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: "#ccc"
            }
          }
        },
        yAxis: {
          type: 'category',
          data: ['酸化', '富营养化', '全球变暖', '能耗'],
          // textStyle:{color:'#ccc',
          // }
          axisLine: {
            lineStyle: {
              color: "#ccc"
            }
          }
        },
        color:[ 'rgb(149, 186, 255)','#69afbe', 'rgb(158,161,238)', 'rgb(126, 237, 254)' ],
        series: [
          {
            name: '瓦楞纸箱(160g)',
            type: 'bar',
            stack: 'total',
            // label: {
            //   show: true
            // },
            emphasis: {
              focus: 'series',
            },
            data: [4.83,0.463,0.745,10.696]
          },
          {
            name: '纸箱用胶带(4g)',
            type: 'bar',
            stack: 'total',
            // label: {
            //   show: true
            // },
            emphasis: {
              focus: 'series'
            },
            data: [0.00254,0.00002736,0.009,0.00356]
          },
          {
            name: '塑料袋(10g)',
            type: 'bar',
            stack: 'total',
            // label: {
            //   show: true
            // },
            emphasis: {
              focus: 'series'
            },
            data: [0.565,0.0675,0.0822,1.417]
          },
          {
            name: '塑料袋用胶带(3g)',
            type: 'bar',
            stack: 'total',
            // label: {
            //   show: true
            // },
            emphasis: {
              focus: 'series'
            },
            data: [0.001905,0.00002052,0.00675,0.00267]
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
  }
};
</script>

<style scoped>
#fochart{
  position: absolute;
  bottom: 8vh;
  left: 3vw;
  background-image: url("@/assets/imgs/线框.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

</style>
