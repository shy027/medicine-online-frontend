<!--
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-11-23 21:45:05
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-11-24 00:14:48
 * @FilePath: \medicine-online-frontend\src\components\index\header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <header>
    <div class="flex justify-center">
      <div class="header-item position-relative right-50">
        <img
          src="https://www.helloimg.com/i/2024/11/23/6741f9f28cf67.png"
          class="h-15"
        />
        <span class="px-3 py-1 text-h6 cursor-default">中医在线</span>
      </div>
      <div
        v-for="(item, index) in header"
        :key="index"
        class="px-3 py-5 text-h6 cursor-pointer"
        :class="{ 'text-green-500': item.route === currentRoute }"
        @click="wayTo(item.route)"
      >
        {{ item.name }}
      </div>
      <div
        class="header-item position-relative left-40 cursor-pointer"
        :class="{ 'text-green-500': user[0].route === currentRoute }"
        @click="wayTo(user[0].route)"
      >
        <img :src="user[0].avatar" class="h-12 rounded-circle" />
        <span class="px-3 py-1 text-h6">{{ user[0].name }}</span>
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
    route: "personal",
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
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
}
.header-item {
  display: flex; /* 使用flex布局 */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
}
</style>
