<template>
  <div id="siChart" style="width:40vw; height:39vh"></div>
</template>

<script>
import * as echarts from "echarts";
import {onMounted} from "vue";
export default {
  name: "siChart",
  setup(){
    function initChart(){
      let chart = echarts.init(document.getElementById("siChart"))
      chart.setOption({
        title: {
          text: '快递包装全生命周期的碳排放总量',
          textStyle: {
            color:'rgb(78,156,182)',
            fontSize: 20
          },
          top: '4%',
          left: "center",
        },
        grid: {
          top: '30%',
          left: '12%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          data: ['包装材料生产', '废弃物处理', '填埋','焚烧','再生利用'],
          axisLabel: {
            interval: 0,
            //	margin:15,
            textStyle: {
              color: '#65D5FF',
              fontStyle: 'normal',
              fontSize: 16
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(77, 128, 254, 0.2)'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(77, 128, 254, 0.2)'
            }
          }
        },
        yAxis: [
          {
            axisLabel: {
              show: false,
              textStyle: {
                color: '#65D5FF',
                fontStyle: 'normal',
                fontSize: 16
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(77, 128, 254, 0.2)'
              }
            }
          }
        ],

        series: [
          {
            name: '包装材料生产',
            type: 'pictorialBar',
            barWidth: '100%',
            label: {
              normal: {
                position: 'top',
                distance: 5,
                fontSize: 16,
                color: '#fff',
                /*
                                        borderColor: '#555',
                                                  borderWidth: 2,
                                                            borderRadius: 5,
                                                                      textBorderColor: '#000',
            textBorderWidth: 3,
                     */
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(0, 151, 251, 1)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(0, 34, 66, 0.2)' // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                }
              }
            },
            symbol:
              'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',
            data:[437.42,265.39,174.41,90.97,-36.77]
          },
          {
            barGap: '100%',
            name: '废弃物处理',
            type: 'pictorialBar',
            barWidth: '100%',
            label: {
              normal: {
                position: 'top',
                distance: 5,
                fontSize: 16,
                borderWidth: 2,
                borderRadius: 5,
                textBorderColor: '#000',
                textBorderWidth: 3,
                color: '#fff',
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(25, 252, 119,1)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(74, 214, 132, 0.2)' // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                }
              }
            },
            symbol:
              'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',
            data:[437.42,265.39,174.41,90.97,-36.77]
          },
          {
            name: '填埋',
            type: 'pictorialBar',
            barWidth: '100%',
            label: {
              normal: {
                position: 'top',
                distance: 5,
                fontSize: 16,
                borderWidth: 2,
                borderRadius: 5,
                textBorderColor: '#000',
                textBorderWidth: 3,
                color: '#fff',
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(244, 169, 7, 1)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(211, 166, 67, 0.2)' // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                }
              }
            },
            symbol:
              'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',
            data: [437.42,265.39,174.41,90.97,-36.77]
          },
          {
            name: '焚烧',
            type: 'pictorialBar',
            barWidth: '100%',
            label: {
              normal: {
                position: 'top',
                distance: 5,
                fontSize: 16,
                borderWidth: 2,
                borderRadius: 5,
                textBorderColor: '#000',
                textBorderWidth: 3,
                color: '#fff',
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(244, 169, 7, 1)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(211, 166, 67, 0.2)' // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                }
              }
            },
            symbol:
              'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',
            data: [437.42,265.39,174.41,90.97,-36.77]
          },
          {
            name: '再生利用',
            type: 'pictorialBar',
            barWidth: '100%',
            label: {
              normal: {
                position: 'top',
                distance: 5,
                fontSize: 16,
                borderWidth: 2,
                borderRadius: 5,
                textBorderColor: '#000',
                textBorderWidth: 3,
                color: '#fff',
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(244, 169, 7, 1)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(211, 166, 67, 0.2)' // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                }
              }
            },
            symbol:
              'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',
            data: [437.42,265.39,174.41,90.97,-36.77]
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
#siChart{
  position: absolute;
  bottom: 8vh;
  right: 3vw;
  background-image: url("@/assets/imgs/线框.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
