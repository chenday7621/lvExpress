<template>
  <div class="echarts-box">
    <div id="platchart"  style="width:30vw; height:40vh"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {onMounted,onUnmounted} from "vue";

export default {
  setup() {

    onMounted(() => {
      initChart();
    });

    onUnmounted(() => {
      echarts.dispose;
    });

    // 基础配置一下Echarts
    function initChart() {
      let chart = echarts.init(document.getElementById("platchart"));
      // 把配置和数据放这里
      chart.setOption({
        dataset: {
          source: [
            ['score', 'amount', 'product'],
            [90, 24270, '淘宝'],
            [76, 14740, '京东'],
            [80, 15860, '抖音'],
            [85, 16880, '拼多多'],
            [64, 6410, '天猫'],
            [70, 12550, '小红书'],
            [49, 3250, '什么值得买'],
            [37, 2500, '阿里巴巴'],
          ]
        },
        grid: {
          x: '15%',
          y: '15%',
          x2: '10%',
          y2: '20%'
        },
        title: {
          text: '主流网购平台',
          left: "center",
          top: "2%",
          textStyle: {
            fontSize: 23,
            color: "#fff",
          },
          subtextStyle: {
            fontSize: 12,
            color: "rgba(255,250,255,0.6)"
          },
          subtext: '中国主流网购平台月均访问量   单位：万'
        },
        xAxis: {
          // name: 'amount',
          axisLine: {
            lineStyle: {
              color: "#ccc"
            }
          }
        },
        yAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.8)"
            }
          }
        },
        visualMap: {
          orient: 'horizontal',
          left: 'center',
          // align:"auto",
          min: 10,
          max: 100,
          text: ['25000', '0'],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ['rgb(131,181,210)', 'rgb(85,154,197)', 'rgb(11,97,162)']
          },
          textStyle: {
            color:'#fff'
          }
        },
        series: [
          {
            type: 'bar',
            encode: {
              // Map the "amount" column to X axis.
              x: 'amount',
              // Map the "product" column to Y axis
              y: 'product'
            }
          }
        ]
      })
      window.addEventListener("resize", function() {
        chart.resize();
      });
    }
    // window.addEventListener("resize", function() {
    //   let charts = echart.init(document.querySelector(`#platchart`));
    //   charts.resize();
    // });
    return { };
  }
};
</script>

<style scoped>
.echarts-box{
  display: inline-block;
  position: absolute;
  left:1%;
  bottom: 3%;
  background-image: url("@/assets/imgs/center_map.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
