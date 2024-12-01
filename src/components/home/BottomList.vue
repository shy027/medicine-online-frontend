<template>
  <div class="container">
    <div v-for="item in list" :key="item.id" class="lists">
      <div class="list">
        <img :src="item.pic" class="image" />
        <span class="block my-4 text">{{ item.text }}</span>
        <span class="title">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const list = [
  {
    id: 0,
    pic: "https://www.helloimg.com/i/2024/12/01/674c6869408e6.png",
    text: "实时展示中医要相关的各类资讯，包括图文结合展示、资讯收藏、分享",
    title: "资讯预览",
  },
  {
    id: 1,
    pic: "https://www.helloimg.com/i/2024/12/01/674c687d6a706.png",
    text: "提供多种学习方式，包括图文、图书、视频、音频、直播等，同时对学习进行统计、追踪",
    title: "在线学习",
  },
  {
    id: 2,
    pic: "https://www.helloimg.com/i/2024/12/01/674c68927cdca.png",
    text: "自由配置题库，动态生成考卷，随机抽取题目，及时回馈评测结果",
    title: "在线评测",
  },
  {
    id: 3,
    pic: "https://www.helloimg.com/i/2024/12/01/674c68a1a8b7c.png",
    text: "知名专家实时在线，一对一解答相关疑问，生成并公开展示对应问答记录",
    title: "专家答疑",
  },
  {
    id: 4,
    pic: "https://www.helloimg.com/i/2024/12/01/674c68b10d3c8.png",
    text: "按中医基础理论、中医诊断学、中药学、方剂学、中医内科、中医外科四大经典分类",
    title: "知识库",
  },
  {
    id: 5,
    pic: "https://www.helloimg.com/i/2024/12/01/674c68c284e7c.png",
    text: "以专题形式，发布内容资讯，或者学习内容，用于定期的专题学习。专题中可以自定整合资讯、电子书、视频及考试评测",
    title: "专题整合",
  },
  {
    id: 6,
    pic: "https://www.helloimg.com/i/2024/12/01/674c68e3a2bdc.png",
    text: "用于管理用户的登录名、个人基本信息。支持手机短信实名认证专业用户。",
    title: "个人中心",
  },
  {
    id: 7,
    pic: "https://www.helloimg.com/i/2024/12/01/674c68f461c13.png",
    text: "支持在WEB浏览器端,浏览平台所发布的内容。在线学习及评测仅在移动小程序端",
    title: "官网展示",
  },
];
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 1100px;
  margin-left: 25%;
}
.list {
  background-color: white;
  border-radius: 20px;
  padding: 42px 10px 36px;
  width: 230px;
  height: 275px;
  margin: 0 10px 25px 0;
}
.image{
  width: 60px;
  margin-left: 35%;
}
.text{
  font-size: small;
  color: gray;
  height: 84px;
  width: 215px;
}
.title{
  font-size: larger;
  padding-left: 32%;
}
.list:hover{
  color: #43af79;
  cursor: pointer;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
}
::selection {
  background-color: #43af79;
  color: white;
}
</style>

