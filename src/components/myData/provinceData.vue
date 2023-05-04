<template>
  <div class="echarts-box">
    <div class="header">
      <ul>
        <li>
          <select v-model="myYear" @change="changeYear">
            <option v-for="y in years" :value="y" :key="y.index">{{y}}</option>
          </select>
        </li>
        <li>
          <select v-model="myType" @change="changeType">
            <option value="0">收入</option>
            <option value="1">业务量</option>
          </select>
        </li>
        <li>
          <select v-model="myOption" @change="handleChange">
            <option v-for="o in options" :value="o.ename" :key="o.index">{{o.name}}</option>
          </select>
        </li>
      </ul>
    </div>
    <div id="provchart" style="width:18vw; height:35vh"></div>
    <div id="table">
      <table>
        <tr>
          <th>排名</th>
          <th>城市</th>
          <th v-if="myType==0">收入(万元)</th>
          <th v-else>业务量(万件)</th>
        </tr>
        <tr v-for="(item,index) in myData" :key="index">
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { onMounted, onUnmounted, reactive } from "vue";
import cityJSON from '@/assets/data/cityData.json'
import {ref} from "vue";
import { Select } from "@element-plus/icons-vue";
export default {
  components: { Select },
  setup() {
    let myOption=ref('zhejiang')
    const options=[
      { ename: "beijing", name: "北京"},
      { ename: "tianjin", name: "天津" },
      { ename: "shanghai", name: "上海" },
      { ename: "chongqing", name: "重庆" },
      { ename: "hebei", name: "河北" },
      { ename: "henan", name: "河南"},
      { ename: "yunnan", name: "云南" },
      { ename: "liaoning", name: "辽宁" },
      { ename: "heilongjiang", name: "黑龙江" },
      { ename: "hunan", name: "湖南"},
      { ename: "anhui", name: "安徽" },
      { ename: "shandong", name: "山东" },
      { ename: "xinjiang", name: "新疆" },
      { ename: "jiangsu", name: "江苏" },
      { ename: "zhejiang", name: "浙江" },
      { ename: "jiangxi", name: "江西" },
      { ename: "hubei", name: "湖北" },
      { ename: "guangxi", name: "广西"},
      { ename: "gansu", name: "甘肃" },
      { ename: "shanxi", name: "山西" },
      { ename: "neimenggu", name: "内蒙古" },
      { ename: "shanxi1", name: "陕西" },
      { ename: "jilin", name: "吉林" },
      { ename: "fujian", name: "福建" },
      { ename: "guizhou", name: "贵州" },
      { ename: "guangdong", name: "广东" },
      { ename: "qinghai", name: "青海" },
      { ename: "xizang", name: "西藏" },
      { ename: "sichuan", name: "四川" },
      { ename: "ningxia", name: "宁夏" },
      { ename: "hainan", name: "海南" },
      { ename: "taiwan",name: "台湾"},
      { ename: "xianggang", name: "香港" },
      { ename: "aomen", name: "澳门" },
      // { ename:"nanhai",name: "南海诸岛" }
    ]
    const cityData=cityJSON
    //数据

    //获取年份
    console.log(cityData);
    const years=[]
    for(let i=0;i<cityData.length;i++){
      years.push(cityData[i].year)
    }
    // console.log(years);
    let myYear=ref(2017)
    function changeYear(){
      // console.log(myYear.value);
      updateData()
    }

    //业务量
    let myType=ref(0)
    function changeType(){
      updateData()
      // console.log(myType.value);
    }
    let myData=ref(cityData[myYear.value-2017].data[myType.value].data)
    // console.log(myData.value);
    function updateData(){
      // console.log('change');
      myData.value=cityData[myYear.value-2017].data[myType.value].data
      // console.log(myData.value);

      setChart()

    }

    onMounted(()=>{
      setChart()
    })

    function handleChange(){
      setChart()
    }

    function setChart(){
      let provinceJSON=require('../../../public/map/province/'+myOption.value+'.json')
      echarts.registerMap(myOption.value,provinceJSON)
      let charts = echarts.init(document.querySelector(`#provchart`));
      charts.setOption({
        title: {
          text: "",
          subtext: "",
          x: "center"
        },
        tooltip: {
          trigger: "item"
        },

        //左侧小导航图标
        visualMap: {
          min: 38000,
          max: 4500000,
          text: ["高", "低"],
          textStyle:{
            color:'#dddddd'
          },
          inRange: {
            color: ['rgb(131,181,210)', 'rgb(51,114,154)', 'rgb(5,62,105)']
          }
        },

        //配置属性
        series: [
          {
            name: myType.value==0?myYear.value+"收入总量":myYear.value+"业务总量",
            type: "map",
            mapType: myOption.value,
            roam: true,
            label: {
              normal: {
                show: false //省份名称
              },
              emphasis: {
                show: false
              }
            },
            data: myData.value, //数据
            itemStyle: {
              borderColor: 'rgb(131,181,210)',
              areaColor: 'transparent'  //这里是重点
            },
          }
        ]
      });
      window.addEventListener("resize", function() {
        charts.resize();
      });
    }

    // window.addEventListener("resize", function() {
    //   let charts = echarts.init(document.querySelector(`#provchart`));
    //   charts.resize();
    // });

    return{
      options,myOption,handleChange,
      myYear,changeYear,years,
      myType,changeType,
      myData
    }
  }
};
</script>

<style scoped lang="less">
//*{
// border: 1px solid red;
//}
.echarts-box{
  display: inline-block;
  width: 30%;
  position: absolute;
  right:1%;
  bottom: 3%;
  background-image: url("@/assets/imgs/center_map.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height:40vh
}
#table{
  color: #dddddd;
  height: 90%;
  width: 43%;
  display: inline-block;
  overflow-y: scroll;
  background-color: transparent;
  border: 2px solid rgba(40, 69, 109);
  text-align: center;
  position: absolute;
  right: 1%;
  tr:nth-child(2n){
    background: linear-gradient(to right, rgb(97, 157, 204), rgba(28, 103, 161, 0.2));
    &:nth-child(2n){
      background: linear-gradient(to right, rgb(49, 90, 164), rgba(4, 36, 94, 0.2));
    }
  }
  th{
    background-color: rgba(54, 121, 213);
    padding: 3px;
  }
}
/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
  width:5px;
  /*background-color:#F5F5F5;*/
}
/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track
{
  border-radius:10px;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
  border-radius:10px;
  background-color:rgba(191, 192, 196,0.25);
}
::-webkit-scrollbar-thumb:hover
{
  background-color:rgba(191, 192, 196,0.4);
}

#provchart{
  display: inline-block;

}

ul{
  display: flex;
  flex-direction: row;
  margin: 0;
}
li{
  list-style: none;
}
select{
  border: 3px solid rgb(53, 86, 134);
  background-color: transparent;
  color: #dddddd;
  font-size: 16px;
  width: 85px;
}
option{
  background-color: rgb(29, 55, 100);
}
</style>
