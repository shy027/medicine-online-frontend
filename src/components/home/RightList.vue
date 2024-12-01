<!--
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-11-26 07:59:48
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-12-01 21:41:28
 * @FilePath: \medicine-online-frontend\src\components\home\RightList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="list flex relative left-120">
    <div v-for="item in list" :key="item.id" class="list-item my-6">
      <img :src="item.picture" class="image" />
      <div class="text">
        <span class="text-h6">{{ item.tText }}</span>
        <span class="bText">{{ item.bText }}</span>
      </div>
    </div>
  </div>
  <div>
    <img
      src="https://www.helloimg.com/i/2024/11/24/674341575ef58.png"
      class="h-17 relative left-30 top-3"
    />
    <img
      src="https://www.helloimg.com/i/2024/11/24/674341575ef58.png"
      class="h-17 relative left-30 top-14"
    />
  </div>
</template>
<script setup lang="ts">
const list = [
  {
    id: 1,
    name: "pic1",
    picture: "https://www.helloimg.com/i/2024/11/24/674334ca7a30f.png",
    tText: "2000+",
    bText: "用户同时在线学习",
  },
  {
    id: 2,
    name: "pic2",
    picture: "https://www.helloimg.com/i/2024/11/24/674334d8178ff.png",
    tText: "3000+",
    bText: "音视频资源免费提供",
  },
  {
    id: 3,
    name: "pic3",
    picture: "https://www.helloimg.com/i/2024/11/24/674334e55efd6.png",
    tText: "数百本",
    bText: "专业中医书籍轻松查阅",
  },
  {
    id: 4,
    name: "pic4",
    picture: "https://www.helloimg.com/i/2024/11/24/674334f04fceb.png",
    tText: "5000+",
    bText: "题库测试学习",
  },
  {
    id: 5,
    name: "pic5",
    picture: "https://www.helloimg.com/i/2024/11/24/674334fbd536b.png",
    tText: "上百本",
    bText: "专家在线答疑",
  },
];
</script>
<style scoped>
.text {
  display: flex;
  flex-direction: column;
}
.bText {
  font-size: 15px;
  color: gray;
}
.list {
  flex-wrap: wrap;
  flex-direction: row;
  width: 31%;
}
.list-item {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  width: 50%; /* 减去间距，确保每行两个 */
}
.image {
  width: 60px;
  margin-right: 20px;
}
::selection {
  background-color: #43af79;
  color: white;
}
</style>
