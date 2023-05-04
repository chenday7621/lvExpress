<template>
  <div class="echarts-box">
    <div id="areachart" style="width:30vw; height:40vh"></div>
<!--    <div class="btns">-->
<!--    <select v-model="mySelect" >-->
<!--      <option value="0">同城</option>-->
<!--      <option value="1">异地</option>-->
<!--    </select>-->
    <div class="btn" @click="changeSelect">
      {{content}}
    </div>
      <ul>
        <li v-for="item in options" @click="changeBtn" data-name="item">{{item}}</li>
      </ul>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {onMounted,onUnmounted} from "vue";
import {ref} from 'vue'
import areaJson from '@/assets/data/areaData.json'
export default {
  setup() {
    const areaList=areaJson
    console.log(areaList);
    const dataX=areaList[2].data
    // console.log(dataX);
    let mySelect=ref(0)
    let myOption=ref(0)
    /// 声明定义一下echart
    let echart = echarts;

    let selects=['同城','异地']
    let options=['快递量','累计值','同比增长率']

    function changeTitle(){
      let chart = echart.init(document.getElementById("areachart"));
      chart.setOption({
        title:{
          text: "全国"+selects[mySelect.value]+options[myOption.value]+"数据"
        }
      })
    }

    let content=ref('异地')
    function changeSelect(e) {
      // console.log(e.target.innerText);
      if (e.target.innerText==='异地'){
        mySelect.value=1
        content.value='同城'
      }else{
        mySelect.value=0
        content.value='异地'
      }
      // console.log(mySelect.value);
      let newData=areaList[mySelect.value].data[myOption.value].data
      // console.log(newData);
      let chart = echart.init(document.getElementById("areachart"));
      chart.setOption({
        series:[
          {data:newData}
        ]
      })
      changeTitle()
    }
    function changeBtn(e){
      console.log(e.target.innerText);
      myOption.value=options.indexOf(e.target.innerText)
      console.log(myOption.value);
      let newData=areaList[mySelect.value].data[myOption.value].data
      let chart = echart.init(document.getElementById("areachart"));
      chart.setOption({
        series:[
          {data:newData}
        ]
      })
      changeTitle()
    }


    onMounted(() => {
      initChart();
    });

    onUnmounted(() => {
      echart.dispose;
    });

    // 基础配置一下Echarts
    function initChart() {
      let chart = echart.init(document.getElementById("areachart"));
      // 把配置和数据放这里
      // let dataAxis = dataX;
// prettier-ignore
      let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
      let yMax = 500;
      let dataShadow = [];
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }
      chart.setOption({
        title: {
          text: "全国"+selects[mySelect.value]+options[myOption.value]+"数据",
          textStyle: {
            fontSize: 23,
            color: "#fff",
          },
          subtextStyle: {
            fontSize: 12,
            color: "rgba(255,250,255,0.6)"
          },top: 10,
          left: "center",
          subtext: ''
        },
        grid: {
          x: '15%',
          y: '15%',
          x2: '5%',
          y2: '25%'
        },
        xAxis: {
          data:dataX,
          // nameTextStyle:{
          //   color:"#fff"
          // },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#d5d2d2',
            interval: 0,
            rotate: 40, // 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠；旋转的角度从-90度到90度
            // inside: false, // 刻度标签是否朝内，默认朝外
            // margin: 6, // 刻度标签与轴线之间的距离
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#d5d2d2'
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        tooltip:{
          trigger:'axis',
          axisPointer:{
            type:'shadow'
          }
        },
        series: [
          {
            type: 'bar',
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(93, 194, 208)' },
                { offset: 0.5, color: 'rgba(93, 194, 208,0.5)' },
                { offset: 1, color: 'rgba(93, 194, 208,0.2)' }
              ])
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: 'rgb(122,230,246)' },
                  { offset: 0.7, color: 'rgb(79,160,171)' },
                  { offset: 1, color: '#83bff6' }
                ])
              }
            },
            data: areaList[mySelect.value].data[myOption.value].data
          }
        ]
      });
      window.addEventListener("resize", function() {
        chart.resize();
      });
    }

    return {  mySelect,options,changeSelect,changeBtn,content};
  }
};
</script>

<style scoped>
.btn{
  width: 13%;
  height:4vh;
  line-height: 4vh;
  font-size: 1em;
  color: white;
  text-align: center;
  border: 2px solid rgba(61, 86, 137);
  position: absolute;
  left: 85%;
  top: 2%;
}
.btn:hover{
  background-color: rgba(61, 70, 133, 0.8);
  cursor: pointer;
}

.echarts-box{
  display: inline-block;
  position: absolute;
  right:1%;
  top: 9%;
  background-image: url("@/assets/imgs/center_map.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
ul{
  position: absolute;
  bottom: -16%;
  right: 1%;
  width: 88%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
li{
  list-style: none;
  /*color: #262626;*/
  color: #dddddd;
  display: inline-block;
  /*height: 50%;*/
  width: 26%;
  height: 5vh;
  line-height: 5vh;
  /*background-color: rgb(136, 222, 239,0.8);*/
  background: url("@/assets/imgs/btn.png") no-repeat center center;
  /*background-attachment: fixed;*/
  background-size: cover;
  text-align: center;
  font-size: 1em;
  /*line-height: 30%;*/
  /*padding:1em;*/
  /*margin: 2%;*/
}
/**{*/
/*  border: 1px solid red;*/
/*}*/
li:hover{
  /*background-color: rgba(80, 216, 243, 0.8);*/
  cursor: pointer;
}
</style>
