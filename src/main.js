import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "animate.css";
import lottie from "vue-lottie";
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

const app=createApp(App);
app.use(store).use(router).use(ElementPlus);
app.component('lottie',lottie)
app.mount('#app')
// createApp(App).use(store).use(router).use(Particles).use(ElementPlus).use(Vue3Lottie).mount("#app");
