<!--
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-11-23 21:45:05
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-12-03 08:54:58
 * @FilePath: \medicine-online-frontend\src\components\index\header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <header>
    <div class="flex justify-center nav">
      <div class="header-item relative right-20">
        <img
          src="https://www.helloimg.com/i/2024/11/23/6741f9f28cf67.png"
          class="h-12"
        />
        <span class="px-3 py-1 text-h8 cursor-default">中医在线</span>
      </div>
      <div
        v-for="(item, index) in header"
        :key="index"
        class="px-3 py-4 text-h8 cursor-pointer"
        :class="{ 'text-green-500': item.route === currentRoute }"
        @click="wayTo(item.route)"
      >
        {{ item.name }}
      </div>
      <div
        class="header-item position-relative left-20 cursor-pointer"
        :class="{ 'text-green-500': user[0].route === currentRoute }"
        @click="wayTo(user[0].route)"
      >
        <img :src="user[0].avatar" class="h-8 rounded-circle" />
        <span class="px-3 py-1 text-h8">{{ user[0].name }}</span>
      </div>
    </div>
  </header>
  <router-view />
</template>

<script setup lang="ts">
import route from "@/router";
import { ref } from "vue";
const header = [
  {
    name: "首页",
    route: "home",
  },
  {
    name: "资讯",
    route: "information",
  },
  {
    name: "专题",
    route: "special",
  },
  {
    name: "视频",
    route: "video",
  },
  {
    name: "音频",
    route: "audio",
  },
  {
    name: "图书",
    route: "book",
  },
  {
    name: "咨询",
    route: "consult",
  },
  {
    name: "练习题",
    route: "practice",
  },
  {
    name: "考核",
    route: "assess",
  },
];
const user = [
  {
    name: "我是奶龙",
    avatar: "https://www.helloimg.com/i/2024/10/08/670513635044e.jpg",
    route: "personal/collection",
  },
];
const currentRoute = ref("");
const wayTo = (param: any) => {
  route.push("/medicine-web/" + param);
  currentRoute.value = param;
};
</script>

<style scoped>
header {
  position: fixed; /* 固定定位 */
  top: 0; /* 距离顶部0 */
  left: 0; /* 距离左侧0 */
  width: 100%; /* 宽度设置为100%，确保覆盖整个屏幕宽度 */
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* 设置较高的z-index确保header在最上层 */
  background-color: white;
}
.header-item {
  display: flex; /* 使用flex布局 */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
}
</style>
