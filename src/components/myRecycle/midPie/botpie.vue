<template>
  <div id="botchart"
       style="width:32vw; height:23vh"
  ></div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted } from "vue";
export default {
  setup() {

    function initchart(){
      let chart1 = echarts.init(document.getElementById("botchart"));
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
            data: [
              { name: "纸箱（大）",
                value: 14.79},
              {  name: "纸箱（中）",
                value: 34.95 },
              {   name: "纸箱（小）",
                value: 47.49 },
              {   name: "纸箱（超大）",
                value: 2.77 }
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
