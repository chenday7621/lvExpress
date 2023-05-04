<template>
  <div id="fvChart" style="width:62vw; height:65vh"></div>
</template>

<script>
import * as echarts from "echarts";
import {onMounted} from "vue";
export default {
  setup(){
    function initChart(){
      let chart = echarts.init(document.getElementById("fvChart"))
      chart.setOption({
        title: {
          text: '快递包装在生命周期不同阶段的全球变暖潜能',
          textStyle: {
            fontSize: 20,
            color: "#fff",
          },
          top: 10,
          left: "center",
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type:'shadow'
          }
        },
        legend: {
          data: ['碳排放量', '占比', ],
          textStyle:{color:'#ccc',
          },
          bottom: 10,
          left: "right",
        },
        xAxis: [
          {
            type: 'category',
            data: ["原材料和生产","收集与运输","废纸和纸板回收","废塑料回收","废纸和纸板再生","塑料再生","焚烧纸张","焚烧塑料","填埋纸张","填埋塑料"],
            axisPointer: {
              type: 'shadow'
            },
            axisLine: {
              lineStyle: {
                color: "#ccc"
              }
            },
            axisLabel: {
              color: '#d5d2d2',
              interval: 0,
              rotate: 40, // 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠；旋转的角度从-90度到90度
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '碳排放量',
            // min: 0,
            // max: 250,
            // interval: 50,
            axisLabel: {
              formatter: '{value}'
            },
            axisLine: {
              lineStyle: {
                color: "#ccc"
              }
            }
          },
          {
            type: 'value',
            name: '占比',
            // min: 0,
            // max: 25,
            // interval: 5,
            axisLabel: {
              formatter: '{value} %'
            },
            axisLine: {
              lineStyle: {
                color: "#ccc"
              }
            }
          }
        ],
        series: [
          {
            name: '碳排放量',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' kgCO2e';
              }
            },
            data: [
              834.88,13.88,24.11,0.59,-433.46,-6.54,-231.34,7.31,95.39,5.50
              ],
            itemStyle:{
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(93, 194, 208)' },
                { offset: 0.5, color: 'rgba(93, 194, 208,0.5)' },
                { offset: 1, color: 'rgba(93, 194, 208,0.2)' }
              ])
            }
          },
          {
            name: '占比',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' %';
              }
            },
            itemStyle:{
              color:'rgba(222, 194, 65)'
            },
            lineStyle:{
              color:'rgba(222, 194, 65)'
            },
            data: [85,1.4,2.5,0.1,-44.2,-0.7,-23.6,0.7,9.7,0.6]
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
#fvChart{
  margin: 0 auto;
  padding-top: 10vh;
}
</style>
