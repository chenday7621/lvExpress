<template>
  <div class="infonext">
    <span>下一页</span>
    <svg t="1682604054872" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="12424" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50">
      <path
        d="M625.365333 119.552a42.666667 42.666667 0 0 0-73.216 29.781333v176.042667c-128.725333 10.197333-240.341333 62.634667-333.141333 156.672-102.144 103.509333-160.682667 232.533333-176.128 384.853333a42.666667 42.666667 0 0 0 75.477333 31.317334c103.338667-126.208 188.074667-188.245333 253.909334-202.24 63.104-13.354667 122.965333-17.237333 179.882666-11.946667V874.666667a42.666667 42.666667 0 0 0 74.026667 28.928l343.850667-372.352a42.666667 42.666667 0 0 0-0.810667-58.709334l-343.850667-352.981333z"
        p-id="12425"></path>
    </svg>

  </div>
</template>

<script>
export default {
  name: "infoNext"
};
</script>

<style scoped lang="less">
div {
  position: absolute;
  width: 150px;
  right: 1vw;
  bottom: 1vh;
  display: flex;
  align-items: center;
  font-family: 'Inter';
  font-weight: 600;
  color: #f1f1f1;

span {
  line-height: 48px;
  font-size: 25px;
  margin-right: 20px;
}
svg{
  fill:#ffffff;

}
}
//*{
//  border: 1px solid red;
//}
.infonext:hover {
  cursor: pointer;
  color: rgb(118, 172, 185);
svg{
  fill:rgb(118, 172, 185);
}
}
</style>
