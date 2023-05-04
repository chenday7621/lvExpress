import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/views/Homepage";
import Policy from "@/views/Policy";
import Process from "@/views/Process";
import Info from "@/views/Info";
import Box from "@/views/Process/concrete/Box";
import Filler from "@/views/Process/concrete/Filler";
import Bag from "@/views/Process/concrete/Bag";
import Tape from "@/views/Process/concrete/Tape";
const routes = [
  {
    path: "/",
    name: "home",
    component: Homepage,
    meta:{
      title:"“绿” 箱 计 划"
    }
  },
  {
    path: "/homepage",
    component: Homepage,
    meta:{
      title:"“绿” 箱 计 划"
    }
  },
  {
    path: "/policy",
    component: Policy,
    meta:{
      title:"“绿”箱计划——政策展示"
    }
  },
  {
    path: "/process",
    component: Process,
    meta:{
      title:"“绿”箱计划——知识科普"
    }
  },
  {
    path: "/info",
    component: Info,
    meta:{
      title:"“绿”箱计划——数据展示"
    }
  },

  {
    path:"/process/tape",
    component:Tape,
    meta:{
      title:"“绿”箱计划——胶带"
    }
  },
  {
    path:"/process/bag",
    component:Bag,
    meta:{
      title:"“绿”箱计划——塑料袋"
    }
  },
  {
    path:"/process/box",
    component:Box,
    meta:{
      title:"“绿”箱计划——纸箱"
    }
  },
  {
    path:"/process/filler",
    component:Filler,
    meta:{
      title:"“绿”箱计划——缓冲气柱袋"
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
