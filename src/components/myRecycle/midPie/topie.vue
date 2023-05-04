<template>
  <div id="topchart"
       style="width:32vw; height:22vh"
  ></div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted } from "vue";
export default {
  setup() {

    function initchart(){
      let chart1 = echarts.init(document.getElementById("topchart"));
      chart1.setOption({
        color:[ 'rgb(186, 202, 217)','rgb(102, 125, 182)','rgb(226, 229, 235)','rgb(132, 112, 158)'],

        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '快递包装组成材料',
            type: 'pie',
            radius: '70%',
            label:{
              color: '#fff'
            },
            data: [ {   name: "杂塑料袋（大）",
              value: 19.44 },
              {name: "白色塑料袋（大）",
                value: 0.82},
              {  name: "白色塑料袋（小）",
                value: 0.67 },
              {   name: "杂塑料袋（小）",
                value: 6.16 },

              {   name: "黑灰塑料袋（大）",
                value: 47.63},
              {   name: "黑灰塑料袋（小）",
                value: 25.3}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
      window.addEventListener("resize", function() {
        chart1.resize();
      });
    }

    onMounted(() => {
      initchart()
    })

    // window.addEventListener("resize", function() {
    //   let chartPanel = echarts.init(document.getElementById("chart-panel3"));
    //   chartPanel.resize();
    // });
    return {}
  }
}
</script>

<style scoped>
/**{*/
/*  border: 1px solid red;*/
/*}*/
#chart-panel3{
  position: absolute;
  bottom: 1%;
}
</style>
