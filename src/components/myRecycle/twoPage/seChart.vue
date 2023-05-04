<template>
<!--  <div id="rtchart2"  style="width:50vw; height:80vh"></div>-->
  <div id="rtchart1"  style="width:55vw; height:85vh"></div>
  <div id="rtchart2"  style="width:50vw; height:80vh"></div>

  <div class="myoptions">
<!--    <div @click="change(0)" :class="{active:num==0,'antiactive':num!=0}"></div>-->
<!--    <div @click="change(1)" :class="{active:num==1,'antiactive':num!=1}"></div>-->
    <img @click="change(0)" :src="require(`@/assets/imgs/knowle/${options[0]}.png`)" alt=""/>
    <img @click="change(1)" :src="require(`@/assets/imgs/knowle/${options[1]}.png`)" alt=""/>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { onMounted, reactive } from "vue";
import {ref} from "vue";

export default {
  setup(){
    let suData=[]
    let zhiData=[]
    let provinces=[]

    let data1=["广东 37.39","浙江 30.40","江苏 11.82","山东 7.03","河北 6.27","福建 5.81","上海 5.69","河南 5.25","北京 4.03","安徽 3.73","四川 3.64","湖北 3.03","湖南 2.49","江西 1.90","辽宁 1.90","天津 1.57","陕西 1.55","广西 1.32","重庆 1.24","云南 1.07","山西 0.91","黑龙江 0.77","吉林 0.76","贵州 0.48","内蒙古 0.33","甘肃 0.23","新疆 0.19","海南 0.19","宁夏 0.12","青海 0.40","西藏 0.20"]
    data1.reverse()
    let pieData=[
      [
        { value: 5, name: '白色塑料袋' },
        { value: 53.12, name: '灰褐塑料袋' },
        { value: 6.3, name: '编织袋' },
        { value: 0.94, name: '泡沫箱' },
        { value: 9.55, name: '气泡袋' },
        { value: 4.2, name: '胶带' },
        { value: 19.48, name: '填充塑料' }
      ],
      [
        { value: 1.4, name: '信封袋' },
        { value: 1.75, name: '快递单' },
        { value: 96.85, name: '瓦楞纸箱' }
      ]
    ]
    for(let i=0;i<data1.length;i++){
      let temp=data1[i].split(" ")
      provinces.push(temp[0])
      suData.push(temp[1])
    }
    let data2=["广东 380.28","浙江 309.15","江苏 120.22","山东 71.51","河北 63.72","福建 59.07","上海 57.87","河南 53.39","北京 41.03","安徽 37.92","四川 37.06","湖北 30.83","湖南 25.33","江西 19.29","辽宁 19.29","天津 15.98","陕西 15.80","广西 13.41","重庆 12.59","云南 10.85","山西 9.23","黑龙江 7.84","吉林 7.70","贵州 4.85","内蒙古 3.37","甘肃 2.38","新疆 1.58","海南 1.90","宁夏 1.26","青海 0.41","西藏 0.20"]
    data2.reverse()
    for(let i=0;i<data2.length;i++){
      let temp=data2[i].split(" ")
      zhiData.push(temp[1])
    }

    let titles=['各地塑料包装材料消耗量','各地纸类包装材料消耗量']
    let subTexts=['塑料类/万吨','纸类/万吨']
    let num=ref(0)
    const options=reactive(['selected','unselected'])
    function change(n){
      num.value=n
      for (let i=0;i<2;i++){
        options[i]='unselected'
      }
      options[num.value]='selected'
      let chart1 = echarts.init(document.getElementById("rtchart1"))
      let newdata=suData
      let newText=subTexts[num.value]
      if(num.value==1){
        newdata=zhiData
      }
      // console.log(newdata);
      chart1.setOption({
        title:{
          text:titles[num.value],
          subtext:subTexts[num.value]
        },
        series:[
          {
            data:newdata
          }
        ]
      })

      let chart2=echarts.init(document.getElementById("rtchart2"))
      chart2.setOption({
        series:[{
          data:pieData[num.value]
        }]
      })

    }

    function initChart(){
      let chart1 = echarts.init(document.getElementById("rtchart1"))
      chart1.setOption({
        title: {
          text: titles[num.value],
          textStyle: {
            fontSize: 23,
            color: "#fff",
          },
          subtextStyle: {
            fontSize: 12,
            color: "rgba(255,250,255,0.6)"
          }, top: 10,
          left: "center",
          subtext: subTexts[num.value]
        },
        xAxis: {
          type: 'value',
          data: provinces,
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
        },
        yAxis: {
          type: 'category',
          axisLabel: {
            color: '#d5d2d2',
            interval: 0,
            // rotate: 40, // 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠；旋转的角度从-90度到90度
            // inside: false, // 刻度标签是否朝内，默认朝外
            // margin: 6, // 刻度标签与轴线之间的距离
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          data: provinces
        },
        tooltip: {
          trigger:'item',
          // axisPointer:{
          //   type:'shadow'
          // }

        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        color: ['#5470c6'],
        series: [
          {
            data: suData,
            type: 'bar',
            // showBackground: true,
            // backgroundStyle: {
            //   color: 'rgba(180, 180, 180, 0.2)'
            // }
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: 'right', //在上方显示
                  textStyle: { //数值样式
                    color: 'rgb(166, 166, 166)',
                    fontSize: 14
                  }
                }
              }
            }
          }]
      })

      let chart2=echarts.init(document.getElementById("rtchart2"))
      chart2.setOption({
        tooltip: {
          trigger: 'item',
          formatter:`<span>{a}<br>{b}{c}%</span>`
        },
        legend: {
          // orient: 'vertical',
          bottom:"5%",
          // bottom: '-2%',
          textStyle: {
            color: "rgb(166, 166, 166)",
            fontSize: 17
          },
          left: "left",
        },
        color:[ 'rgb(154,238,215)','rgb(149, 186, 255)','#5470c6', 'rgb(126, 131, 251)', 'rgb(126, 237, 254)' ],
        series: [
          {
            name: '快递包装材料消耗比例',
            type: 'pie',
            radius: '40%',
            data: pieData[0],
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
      window.addEventListener("resize", function() {
        chart2.resize();
      });

    }
    onMounted(()=>{
      initChart()
    })
    // window.addEventListener("resize", function() {
    //   let charts = echarts.init(document.querySelector(`#rtchart`));
    //   charts.resize();
    // });
    return{
      num,change,options
    }
  }
}
</script>

<style scoped lang="less">
.myoptions{
  img{
    width: 4vh;
    height: 4vh;
    display: block;
    &:hover{
      cursor: pointer;
    }
    margin-top: 25vh;
  }

  position: absolute;
  left: 20%;
  top: 10%;
}
#rtchart1{
  margin: 0 auto;
}
#rtchart2{
  position: absolute;
  left: 27%;
  top: 18%;
}
//*{
//  border: 1px solid red;
//}
</style>
