<template>
  <div class="sidebar">
    <div
      v-for="item in list"
      :key="item.name"
      class="menu-item"
      @click="wayTo(item.route)"
    >
      <img :src="getIcon(item.name)" class="icon" alt="icon" />
      <span class="menu-text">{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const list = [
  { name: "我的收藏", route: "collection" },
  { name: "浏览记录", route: "browsing" },
  { name: "我的问答", route: "answer" },
  { name: "我的考核", route: "quiz" },
  { name: "学习统计", route: "stact" },
];

const wayTo = (route: string) => {
  router.push(route);
};

function getIcon(name: string) {
  switch (name) {
    case "我的收藏":
      return "https://whyhd.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/collection1.jpg";
    case "浏览记录":
      return "https://whyhd.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/brsowing.jpg";
    case "我的问答":
      return "https://whyhd.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/answer.jpg";
    case "我的考核":
      return "https://whyhd.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/quiz.jpg";
    case "学习统计":
      return "https://whyhd.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/stact.jpg";
  }
}
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f8f9fa;
  padding: 20px 0;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
}

.menu-item:hover {
  background-color: #e9ecef;
}

.menu-item.active {
  background-color: #d4edda;
  border-left: 3px solid #43af79;
}

.icon {
  margin-right: 10px;
}

.menu-text {
  font-size: 16px;
}
</style>
