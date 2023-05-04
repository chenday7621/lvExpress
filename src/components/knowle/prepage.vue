<template>
  <div id="pre">
    <img src="@/assets/imgs/next2.png" alt="">
    上一页
  </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="less">
#pre{
  font-family: 'Inter';
  font-weight: 600;
  font-size: 25px;
  color: #f1f1f1;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  left: 5%;
  bottom: 7px;
}
img{
  transform: rotateY(180deg);
  width: 80px;
  height: 50px;
}
#pre:hover{
  cursor: pointer;
  color: rgb(118, 172, 185);
}
</style>
