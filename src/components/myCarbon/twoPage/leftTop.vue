<template>
  <div id="footChart" style="width:40vw; height:39vh"></div>
  <div class="svg1">
    <svg t="1682532440321" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4147" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40"><path d="M469 11.4c27.8-10 58.2-10 86.2 0l384 137.2c50.8 18.2 84.8 66.4 84.8 120.6v485.6c0 54-34 102.4-85 120.6l-384 137.2c-27.8 10-58.2 10-86.2 0l-384-137.2C34 857.2 0 809 0 754.8V269.2c0-54 34-102.4 85-120.6l384-137.2zM512 132L164.6 256 512 380l347.4-124L512 132z m64 737.2l320-114.2v-376l-320 114.2v376z" p-id="4148" ></path></svg>
    <span>邮政标准包装箱-瓦楞纸</span>
  </div>
  <div class="svg2">
    <svg t="1682562235605" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4361" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40"><path d="M64 64h896c35.4 0 64 28.6 64 64v64c0 35.4-28.6 64-64 64H64c-35.4 0-64-28.6-64-64V128c0-35.4 28.6-64 64-64z m0 256h896v512c0 70.6-57.4 128-128 128H192c-70.6 0-128-57.4-128-128V320z m256 160c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32s-14.4-32-32-32H352c-17.6 0-32 14.4-32 32z" p-id="4362"></path></svg>
    <span>塑料薄膜包装袋-PE聚乙烯</span>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {onMounted} from "vue";
export default {
  setup() {
function initChart() {
      const myChart = echarts.init(document.getElementById('footChart'))
      var xData2 = ['12#三层', '9#三层', '6#三层','3#三层','小/12g','大/21g','特大/39.5g']
  //data1橙色
      var data1 = [0.032408468,0.032408468,0.032408468,0.032408468,0.032408468,0.032408468,0.032408468]
  //data2总
      var data2 =[0.048053,0.076453,0.125353,0.257253,0.056253,0.085353,0.145353]
  //data3绿色
      var data3=[0.000008468,0.000008468,0.000008468,0.000008468,0.000008468,0.000008468,0.000008468]
      var barWidth = 30
      const option = {
        title: [
          {
            left: "center",
            top:'4%',
            // 标题
            text: '不同快递包裹的碳足迹',
            textStyle: {
              color:'rgb(78,156,182)',
            },

          },
          {
            top:'13%',
            left: "80%",
            // 标题
            subtext: "单位：kgCO2e",
            // 副标题样式
            subtextStyle: {
              color:"#ccc"
            }
          },
        ],
        tooltip: {
          trigger: 'axis',
          formatter: function (params, ticket, callback) {
            var htmlStr = ''
            var barValue1 = params[0]
            var barValue2 = params[1]
            var barValue3=params[2]
            let finvalue1=barValue1.value-barValue2.value
            let finvalue2=barValue2.value-barValue3.value
            var xName = params[0].name
            htmlStr += xName + '<br/>'

            // 绘制总金额
            var dian =
              '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:#163F7A;"></span>'
            htmlStr +=  '总量' + '：' + params[0].value.toFixed(6)
            htmlStr += '<br/>'

            // 绘制已支付金额
            var dian1 =
              '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:#163F7A;"></span>'
            htmlStr += dian1 + '第三碳足迹' + '：' + finvalue1.toFixed(6)
            htmlStr += '<br/>'

            // 绘制已支付金额
            var dian2 =
              '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:rgb(247, 190, 61);"></span>'
            htmlStr += dian2 + '第二碳足迹' + '：' + finvalue2.toFixed(6)
            htmlStr += '<br/>'

            // 绘制未支付金额
            var dian3 =
              '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:rgb(84, 170, 57);"></span>'
            htmlStr += dian3 + '第一碳足迹' + '：' + barValue3.value.toFixed(6)

            return htmlStr
          }
        },
        grid: {
          left: 40,
          bottom: 50,
          height:620
        },
        xAxis: {
          data: xData2,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              color: '#bfb7b7',
              fontSize: 16
            },
            margin: 24
          }
        },
        yAxis: {
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false,
            textStyle: {
              color: '#bfb7b7',
              fontSize: 16
            }
          }
        },
        series: [
          {
            // 上半截柱子
            name: '柱子1',
            type: 'bar',
            barWidth: barWidth,
            barGap: '-100%',
            z: 0,
            itemStyle: {
              color: '#163F7A',
              opacity: 0.7
            },
            data: data2,
            label:{
              show:false
            }
          },
          {
            name: '柱子2',
            type: 'bar',
            barWidth: barWidth,
            barGap: '-100%',
            itemStyle: {
              opacity: 0.7,
              color: function (params) {
                return new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#FF9A22' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#FFD56E' // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            },
            data: data1
          },
          {
            name: '柱子3',
            type: 'bar',
            barWidth: barWidth,
            barGap: '-100%',
            itemStyle: {
              opacity: 0.7,
              color: function (params) {
                return new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#3ba940' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#94b684' // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            },
            data: data3
          },
          {
            // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20
            type: 'bar',
            barWidth: barWidth,
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
              color: 'transparent'
            },
            data: data1
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [barWidth, 15],
            symbolOffset: [0, -5],
            z: 12,
            symbolPosition: 'end',
            itemStyle: {
              color: '#163F7A',
              opacity: 1
            },
            label: {
              show: true,
              position: 'top',
              fontSize: 16,
              color: '#bfb7b7'
            },
            data: data2
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [barWidth, 15],
            symbolOffset: [0, -10],
            z: 12,
            itemStyle: {
              opacity: 1,
              color: function (params) {
                return new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#FF9A22' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#FFD56E' // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            },
            // label: {
            //   show: true,
            //   position: 'top',
            //   fontSize: 16,
            //   color: '#bfb7b7'
              // formatter:(item)=>{
              //     console.log(item)
              //     return 'ssss'
              // }
            // },
            symbolPosition: 'end',
            data: data1
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [barWidth, 15],
            symbolOffset: [0, -10],
            z: 12,
            itemStyle: {
              opacity: 1,
              color: function (params) {
                return new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#3ba940' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#94b684' // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            },
            symbolPosition: 'end',
            data: data3
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [barWidth, 15],
            symbolOffset: [0, 5],
            z: 12,
            itemStyle: {
              opacity: 1,
              color: function (params) {
                return new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#3ba940' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#94b684' // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            },
            data: [1, 1, 1,1,1,1,1]
          },
          {
            name: '第一圈',
            type: 'pictorialBar',
            symbolSize: [barWidth, 13],
            symbolOffset: [0, 11],
            z: 11,
            itemStyle: {
              normal: {
                // color: 'rgba(0,0,0,0)',
                color: 'rgba(12, 13, 56)',
                borderColor: '#3ACDC5',
                borderWidth: 2
              }
            },
            data: [1, 1, 1,1,1,1,1]
          },
          {
            name: '第二圈',
            type: 'pictorialBar',
            symbolSize: [barWidth + 15, 20],
            symbolOffset: [0, 17],
            z: 10,
            itemStyle: {
              normal: {
                color: 'rgba(12, 13, 56)',
                borderColor: '#02c3f1',
                borderWidth: 2
              }
            },
            data: [1, 1, 1,1,1,1,1]
          }
        ]
      }
      myChart.setOption(option)
  window.addEventListener("resize", function() {
    myChart.resize();
  });
    }

    onMounted(() => {
      initChart()
    })
  }
}
</script>

<style scoped lang="less">
.svg1{
svg{
  fill: rgb(225, 168, 124);
}
  span{
    color: rgb(225, 168, 124);
    position: relative;
    left: 1vw;
    bottom: 2vh;
    font-size: 2vh;
  }
  position: absolute;
 left: 6vw;
  top: 20vh;
}
//*{
//  border: 1px solid red;
//}
.svg2{
  position: absolute;
  left: 25vw;
  top: 20vh;
  span{
    color: rgb(110, 158, 210);
    left: 1vw;
    position: relative;
    bottom: 2vh;
    font-size: 2vh;
  }
  svg{
    fill: rgb(110, 158, 210);
  }
}
#footChart{
  position: absolute;
  top: 10vh;
  left: 3vw;
  background-image: url("@/assets/imgs/线框.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
