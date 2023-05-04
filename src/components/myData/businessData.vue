<template>
  <div class="echarts-box">
    <div id="buschart" style="width:30vw; height:40vh"></div>
    <div class="btn" @click="changeBtn">{{text}}</div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {onMounted,onUnmounted} from "vue";
import {ref} from 'vue'
import incomeJson from '@/assets/data/income.json'
export default {
  setup() {
    console.log(1);
    // let chart = echarts.init(document.getElementById("buschart"));
    const selects=['全国业务收入','邮政业务收入']
    console.log(incomeJson);
    let text=ref(selects[1])
    function changeBtn(e){
      console.log(e.target.innerText);
      let newData
      let newText
      if(e.target.innerText==='邮政业务收入'){
        newData=incomeJson[1].data
        newText='邮政快递业务收入发展'
        text.value=selects[0]
      }else{
        newData=incomeJson[0].data
        newText='全国快递业务收入发展'
        text.value=selects[1]
      }
      let chart = echarts.init(document.getElementById("buschart"));
      chart.setOption({
        series:[
          {data:newData}
        ],
        title:{
          text:newText
        }
      })
    }
    onMounted(() => {
      initChart();
    });

    onUnmounted(() => {
      console.log(0);
      echarts.dispose;
    });

    // 基础配置一下Echarts
    function initChart() {
      var chart = echarts.init(document.getElementById("buschart"));
      // 把配置和数据放这里
      chart.setOption({
        title: {
            text: '全国快递业务收入发展',
            textStyle: {
              fontSize: 23,
              color: "#fff"
            },
            subtextStyle: {
              fontSize: 12,
              color: "rgba(255,250,255,0.6)"
            },
            subtext: '单位：亿元',
            // right:120,
            top: 10,
            left: "center",
          },
        grid: {
          x: '15%',
          y: '15%',
          x2: '10%',
          y2: '15%'
        },
        xAxis: {
          type: 'category',
          data: incomeJson[2].data,
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          axisLabel: {
            color: '#d5d2d2',
            interval: 0,
            rotate: 40, // 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠；旋转的角度从-90度到90度
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            data: incomeJson[0].data,
            type: 'line',
            color: "rgb(183,144,86)"
          }
        ],
        tooltip: {
          trigger: 'axis'
        }
    });
      window.addEventListener("resize", function() {
        chart.resize();
      });
    }
    return { initChart ,text,changeBtn};
  }
};
</script>

<style scoped>
.echarts-box{
  display: inline-block;
  background-image: url("@/assets/imgs/center_map.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  left:1%;
  top: 9%;
}
.btn{
  color: #dddddd;
  height: 6vh;
  line-height: 6vh;
  width: 9vw;
  background: url("@/assets/imgs/btn.png") no-repeat center center;
  /*background-attachment: fixed;*/
  /*background-size: cover;*/
  background-size: 100% 100%;
  text-align: center;
  position: absolute;
  font-size: 1em;
  left: 70%;
  top: 102%;
}
.btn:hover{
  cursor: pointer;
}
/**{*/
/*  border: 1px solid red;*/
/*}*/
</style>
