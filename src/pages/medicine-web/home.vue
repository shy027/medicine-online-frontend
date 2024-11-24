<template>
  <div>
    <Swiper></Swiper>
  </div>
  <div class="py-9">
    <img
      src="https://www.helloimg.com/i/2024/11/24/674320e3cb276.png"
      class="h-7 relative left-215"
    />
    <span class="span-head relative left-217 bottom-6">知识服务平台</span>
    <img
      src="https://www.helloimg.com/i/2024/11/24/674322b1bd219.png"
      class="h-5 relative left-258 bottom-12"
    />
    <span class="span-bottom position relative left-204 bottom-27px mb-6">精准、及时、交互式、全天候、全程顾问式</span>
    <div class="lr">
      <img
        src="https://www.helloimg.com/i/2024/11/24/6743300b9f083.png"
        class="image-left h-74 relative left-110"
      />
      <RightList></RightList>
    </div>
  </div>
</template>

<script setup lang="ts">
import Swiper from "@/components/home/Swiper.vue";
import RightList from "@/components/home/RightList.vue";
</script>

<style scoped>
span {
  display: block;
  overflow: hidden;
}
.span-head {
  font-size: 30px;
}
::selection {
  background-color: #43af79;
  color: white;
}
.span-bottom {
  color: rgb(155, 154, 154);
  font-size: 15px;
}
.image-left {
  box-shadow: 3px 3px 5px 3px #c5c5c580;
  border-radius: 20px;
}
.lr{
  display: flex;
}
</style>
