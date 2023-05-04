<template>
  <div class="main">
    <lottie :options="defaultOptions" style="height:25vh;width:25vh" @animCreated="handleAnimation" />
  </div>
</template>

<script>
import lottie from 'vue-lottie'
import * as animationData from '@/assets/js/animPie.json'

export default {
  components: {
    lottie
  },
  setup() {
    let defaultOptions = {
      // animationData:animationData.default
      animationData: animationData,   //需要引入的json动画对象
      renderer: 'svg',    //渲染方式，svg、canvas、html（轻量版仅svg渲染）
      loop: true,    //是否循环播放，true表示循环，false表示不循环
      autoplay: true,   //是否自动播放，true表示自动播放
    }
    let anim = {}

    function handleAnimation(a) {
      anim = a
      console.log(a);
    }

    return {
      defaultOptions, handleAnimation
    }
  }
};
</script>

<style scoped>
.main {
  /*background-color: #ccc;*/
  position: absolute;
  left: 44vw;
  bottom: 1vh;
}

/**{*/
/*  border: 1px solid red;*/
/*}*/
</style>
