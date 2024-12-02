<template>
  <div class="sidebar">
    <!-- 用户信息 -->
    <div class="header-item" @click="wayTo('personal')">
      <img :src="user[0].avatar" class="avatar" />
      <span class="username">{{ user[0].name }}</span>
    </div>

    <!-- 菜单项 -->
    <div
      v-for="item in list"
      :key="item.name"
      class="menu-item"
      @click="wayTo(item.route)"
    >
      <img :src="getIcon(item.name)" class="icon" />
      <span class="menu-text">{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const currentRoute = ref("");
const user = ref([
  {
    name: "我是奶龙",
    avatar: "https://www.helloimg.com/i/2024/10/08/670513635044e.jpg",
    route: "personal",
  },
]);

const list = ref([
  {
    name: "编辑资料",
    route: "edit",
  },
  {
    name: "退出登录",
    route: "logout",
  },
]);

const wayTo = (route: string) => {
  router.push(route);
  currentRoute.value = route;
};

function getIcon(name: string) {
  switch (name) {
    case "编辑资料":
      return "https://whyhd.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/esit.jpg"; // 替换为实际的图标URL或图标类名
    case "退出登录":
      return "https://whyhd.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/logout.jpg"; // 替换为实际的图标URL或图标类名
    default:
      return "";
  }
}
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f8f9fa;
  padding: 20px 0;
}

.header-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.username {
  font-size: 16px;
  font-weight: bold;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}

.menu-item:hover {
  background-color: #e9ecef;
}

.icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.menu-text {
  font-size: 14px;
}
</style>
