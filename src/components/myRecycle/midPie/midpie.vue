<template>
  <div id="midchart"
       style="width:32vw; height:32vh"
  ></div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted } from "vue";
export default {
  setup() {

    function initchart(){
      let chart1 = echarts.init(document.getElementById("midchart"));
      chart1.setOption({
        color:[ 'rgb(154,238,215)','rgb(149, 186, 255)','#5470c6', 'rgb(126, 131, 251)', 'rgb(126, 237, 254)' ],
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

              { name: "编织袋",
                value: 2.86 },
              { name: "珠光袋",
                value: 4.13 },
              { name: "套装纸箱",
                value: 9.47 },

              {name: "泡沫材料",
                value: 0.57 },
              { name: "文件袋",
                value: 5.05 },
              { name: "其他",
                value: 0.37 },
              {  name: "瓦楞纸箱",
                value: 44.03 },
              { name: "塑料袋",
                value: 33.52},

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
