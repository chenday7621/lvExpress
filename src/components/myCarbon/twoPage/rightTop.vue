<template>
  <div id="carbontChart" style="width:40vw; height:39vh"></div>
</template>

<script>
import * as echarts from "echarts";
import {onMounted} from "vue";
export default {
  name: "thChart",
  setup(){

    function initChart(){
      let chart = echarts.init(document.getElementById('carbontChart'))
      chart.setOption({
        color:['rgba(77, 195, 244)','rgba(106, 135, 89)'],
        title: [
      {
        left: "center",
        top:'4%',
          // 标题
          text: '快递包装材料全生命期碳排因子',
        textStyle: {
          color:'rgb(78,156,182)',
      },

      },
      {
        top:'13%',
        left: "80%",
          // 标题
          subtext: "单位：gCO2/g",
        // 副标题样式
        subtextStyle: {
          color:"#ccc"
        }
      },
          ],
        //   text: '快递包装材料全生命期碳排因子',
        //   subtext:"单位：gCO2/g",
        //   textStyle: {
        //     color:'rgb(78,156,182)',
        //     fontSize: 20
        //   },
        //   subtextStyle:{
        //     color:"#ccc",
        //     left:'right',
        //   },
        //   left:'center',
        //   top:'4%',
        // },

        legend: {
          data: ['原材料' , '生产','填埋','焚烧', '再生利用'],
          orient:'vertical',
          top:"80%",
          left:'3%',
          textStyle:{color:'#ccc',
          }

        },
        radar: {
          center: ['50%', '60%'],
          radius: 98,
          // shape: 'circle',
          indicator: [
            { name: '瓦楞纸箱', max: 1 },
            { name: '信封袋', max: 2.6 },
            { name: '塑料袋', max: 3.2 },
            { name: '编织袋', max: 2.5 },
            { name: '胶带', max: 2.2 },
            { name: '泡沫箱', max: 4 },
            { name: '气泡袋', max: 2.5 }
          ]
        },
        series: [
          {
            name: '原材料 vs 生产',
            type: 'radar',
            data: [
              {
                value: [0.88, 2.52,2.68,1.97,1.97,3.04,2.15],
                name: '原材料',
                areaStyle: {
                  color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                    {
                      color: 'rgba(47, 92, 174, 0.1)',
                      offset: 0
                    },
                    {
                      color: 'rgba(47, 92, 174,0.9)',
                      offset: 1
                    }
                  ])
                }
              },
              {
                value: [0.257,0.008,0.56,0.537,0.795,0.758,0.363],
                name: '生产',
                areaStyle: {
                  color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                    {
                      color: 'rgba(150, 204, 108, 0.1)',
                      offset: 0
                    },
                    {
                      color: 'rgba(150, 204, 108, 0.9)',
                      offset: 1
                    }
                  ])
                }
              }
            ]
          }
        ]
      })
      window.addEventListener("resize", function() {
        chart.resize();
      });
    }
    onMounted(() => {
      initChart()
    })
    return{}
  }
};
</script>

<style scoped>
#carbontChart{
  position: absolute;
  top: 10vh;
  right: 3vw;
  background-image: url("@/assets/imgs/线框.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
