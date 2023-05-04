<template>
  <video id="mp4" autoplay muted loop>
    <!--        <source src="https://lf3-cdn-tos.bytescm.com/obj/eden-cn/lmeh7pfuho/campus/campus_intro_20200522.mp4" type="video/mp4">-->
    <source src="@/assets/imgs/bg2.mp4" type="video/mp4">
  </video>
</template>

<script>
export default {
  name: "bag"
};
</script>

<style scoped>
video{
  position: fixed;
  z-index: -999;
  width: 100%;
  height: 100%;
  object-fit:fill;
}
</style>
