<template>
  <div class="main">
    <div id="mapchart" style="width:45%; height:88%"></div>
    <div class="head">
      <div class="diver"  :class="{'active1':rotFlag1,'active2':rotFlag2}">
        <span class="title">全国总业务量(万件)<br><span class="number">{{sumData}}</span></span>
      </div>
      </div>
    <div class="choose">
      <ul>
        <li v-for="o in options" :key="o.index" @click="change(o)" :class="{active:myYear===o}">{{o}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import china from '../../../public/map/china.json'
import { onMounted,ref } from "vue";
import countryJSON from '../../assets/data/countryData.json'
echarts.registerMap('china',china)
export default {
  setup(){
    //动画
    let rotFlag1 =ref(true)
    let rotFlag2 =ref(false)
    //年份
    let years=[2017,2018,2019,2020,2021,2022]
    let myYear=ref(2017)

    //选项
    let options=[]
    for(let i=0;i<countryJSON[1].data.length;i++){
      options.push(countryJSON[1].data[i].time-0)
    }
    console.log(options);
    //总数据
    let sumData=ref(countryJSON[0].data[myYear.value-2017])
    // console.log(sumData.value);

    //数据
    let myData=countryJSON[1].data[myYear.value-2017].data
    // console.log(myData);
    let newData=[]
    for(let i=0;i<myData.length;i++){
      let t={
        name:myData[i].area,
        value:myData[i].data
      }
      newData.push(t)
    }

    function change(n){
      myYear.value=n
      myData=countryJSON[1].data[n-2017].data
      //更新地图数据
      let newData=[]
      for(let i=0;i<myData.length;i++){
        let t={
          name:myData[i].area,
          value:myData[i].data
        }
        newData.push(t)
      }
      // console.log(newData);
      let charts = echarts.init(document.querySelector(`#mapchart`));
      charts.setOption({
        series:{
          data:newData
        }
      })
      //更新总量数据
      sumData.value=countryJSON[0].data[n-2017]
      //更新动画数据
      rotFlag1.value=!rotFlag1.value
      rotFlag2.value=!rotFlag2.value
      console.log(rotFlag1.value,rotFlag2.value);
    }


    onMounted(()=>{
      initCharts()
    })
    function initCharts(){
      let charts = echarts.init(document.querySelector(`#mapchart`));
      charts.setOption({
        tooltip: {
          trigger: 'item'
        },

        visualMap: {//颜色的设置  dataRange
          textStyle: { color: '#fff' },
          x: '100',
          y: '420',
          splitList: [
            { start: 2000000 }, { start: 500000, end: 2000000 },
            { start: 200000, end: 500000 }, { start: 10000, end: 200000 },
            { start: 10000, end: 100000 }, { start: 0, end: 10000 },
          ],
          inRange: {
            color: ["rgba(147, 235, 248, 0)", "rgba(147, 235, 248,0.9)"], //取值范围的颜色
          },
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(147, 235, 248, 0)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(147, 235, 248, .2)', // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺为 false
          },
        },
        series: [
          {
            name: '全国数据',
            type: 'map',
            mapType: 'china',
            zoom: 1.1,
            roam: false,//是否开启鼠标缩放和平移漫游
            itemStyle: {
              // borderColor: 'rgba(147, 235, 248, .8)',
              borderWidth: 1,
              backgroundColor: 'rgba(0,0,0,.6)',
              borderColor: 'rgba(147, 235, 248, .8)',
              textStyle: {
                color: '#FFF',
              },
              normal: {
                areaColor: '#01215c',
                borderWidth: 3,//设置外层边框
                borderColor:'#9ffcff',
                shadowColor: 'rgba(0,54,255, 1)',
                shadowBlur: 150
              },
              areaColor: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(147, 235, 248, 0)', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(147, 235, 248, .2)', // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺为 false
              },
              shadowColor: 'rgba(171,223,241,0.5)',
              shadowOffsetX: -5,
              shadowOffsetY: 5,
              shadowBlur: 100,
              emphasis: {
                areaColor: '#389BB7',
                borderWidth: 2,
              },
            },
            /*itemStyle: {//地图区域的多边形 图形样式
              normal: {//是图形在默认状态下的样式
                label: {
                  show: true,
                  textStyle: { color: "rgb(249, 249, 249)" }
                }
              },
              emphasis: {//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                label: {
                  show: true,
                  // textStyle: {color: "#000"}
                },
                // areaColor:"rgba(229, 190, 94,0.85)",
                areaColor: "rgb(239,215,140)",

                shadowColor: "#000",
                shadowOffsetX: 5,
                shadowBlur: 5

                // itemStyle:{areaColor:"rgba(251, 255, 0)"}
              }
            },*/
            top: "100",//组件距离容器的距离
            data: newData
          }
        ],
      });
      window.addEventListener("resize", function() {
        charts.resize();
      });
    }

    return{
      change,options,sumData,myYear,years,
      rotFlag1,rotFlag2
    }
  }

}

</script>

<style scoped lang="less">
.active{
  color: rgb(148, 238, 243);
  font-size: 1.5rem;
  font-weight: bold;
}
#mapchart{
  display: inline-block;
  position: absolute;
  top: 10%;
  left: 27%;
}
//span{
//  display: block;
//}
.diver{
  font-size: 1.3vw;
  padding: 5%;
  .number{
    color: #00d2ee;
    font-size: 2.6vw;
  }
  box-shadow: 0 0 20px #00e0e9 inset;
  color: #fff;
  /* border: 2px solid #00E0E9; */
  background: linear-gradient(to left, #00e0e9, #00e0e9) left top no-repeat,
  linear-gradient(to left, #00e0e9, #00e0e9) left top no-repeat,
  linear-gradient(to left, #00e0e9, #00e0e9) right top no-repeat,
  linear-gradient(to left, #00e0e9, #00e0e9) right top no-repeat,
  linear-gradient(to left, #00e0e9, #00e0e9) left bottom no-repeat,
  linear-gradient(to left, #00e0e9, #00e0e9) left bottom no-repeat,
  linear-gradient(to left, #00e0e9, #00e0e9) right bottom no-repeat,
  linear-gradient(to left, #00e0e9, #00e0e9) right bottom no-repeat;
  background-size: 2px 20px, 20px 2px;
}
.head{
  position: absolute;
  top: 12%;
  width: 15vw;
  left: 42%;
  text-align: center;
  perspective: 800px;
  transform-style: preserve-3d;
}

.choose{
  text-align: center;
  width: 30vw;
  position: absolute;
  right: 36%;
  bottom: 7%;
  display: inline-block;
}
//*{
//  border: 1px solid red;
//}
ul{
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 255, 255,0.2);
  line-height: 5vh;
}
li{
  display: inline-block;
  width: 5vw;
  color: #dddddd;
  &:hover{
    background-color: rgba(131, 181, 210, 0.4);
    cursor: pointer;
  }
}
@keyframes ani1 {
  50%{
    transform: rotateY(180deg);
  }
  100%{
    transform: rotateY(0deg);
  }
}
@keyframes ani2 {
  50%{
    transform: rotateY(-180deg);
  }
  100%{
    transform: rotateY(0deg);
  }
}
.active1 {
  /*旋转180度*/
  animation: ani1;
  animation-duration: 1s;
  /*transform: rotateY(180deg);*/
}
.active2 {
  /*旋转180度*/
  animation: ani2;
  animation-duration: 1s;
  /*transform: rotateY(-180deg);*/
}
</style>

