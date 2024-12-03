<!--
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-11-23 21:02:22
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-12-03 11:59:23
 * @FilePath: \medicine-online-frontend\src\pages\medicine-web\information.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="top_div">
    <img
      src="https://www.helloimg.com/i/2024/12/03/674e69ed97887.png"
      class="top"
    />
  </div>
  <span class="top_sp">资讯</span>
  <div class="flex all_list">
    <div v-for="(item, index) in list" :key="index">
      <div class="list flex">
        <div class="image">
          <img :src="item.pic" class="list_img mx-8" />
        </div>
        <div class="right">
          <div class="title mx-2 my-4">{{ item.title }}</div>
          <div class="flex">
            <div class="label mx-2">{{ item.label }}</div>
            <div class="flex ml-12">
              <svg
                t="1733198019682"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2281"
                width="20"
                height="20"
              >
                <path
                  d="M512.3 276.9c-228.4 0-374 178.5-393.8 255.9 19.3 78.2 165.5 256 393.8 256s373.8-176.5 393.9-256c-19.7-78.2-165.6-255.9-393.9-255.9z m0 452.9c-182.3 0-303.2-131.1-331.5-196.7C209.6 467.4 331.2 336 512.3 336c181.9 0 303 131.2 331.5 196.9-28.6 65.6-149.8 196.9-331.5 196.9z"
                  fill="#bfbfbf"
                  p-id="2282"
                ></path>
                <path
                  d="M512.3 434.4c-54.4 0-98.4 44.1-98.4 98.5s44.1 98.4 98.4 98.4c54.4 0 98.5-44.1 98.5-98.4 0-54.4-44.1-98.5-98.5-98.5z m0 137.9c-21.7 0-39.4-17.7-39.4-39.4s17.6-39.4 39.4-39.4 39.4 17.7 39.4 39.4-17.7 39.4-39.4 39.4z"
                  fill="#bfbfbf"
                  p-id="2283"
                ></path>
              </svg>
              <span class="num">{{ item.watch }}</span>
            </div>
            <div class="flex mx-8">
              <svg
                t="1733198150054"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3414"
                width="20"
                height="20"
              >
                <path
                  d="M518.1 193.1l103.1 205.2 11.6 23 25.5 3.6 228.7 32.6L722 615.3l-19 18.2 4.5 25.9 20.8 118.9 9.2 52.5 5.9 33.8 3.2 18.5-206-106.3-22.6-11.7-22.6 11.6L289.4 883.2l39-223.9 4.5-25.9-19-18.2L149.1 457.6l228.8-32.7 25.5-3.6 11.6-23L518.1 193.1M518.1 118.3c-11.1 0-20.6 6.3-25.2 15.4L370.9 376.2 98.2 415.1c-10.2 1.5-19.2 8.4-22.7 18.7-3.5 10.4-0.3 21.2 7.1 28.3l197.3 188.7-46.5 266.6c-1.7 10 2.2 20.6 11.2 26.9 5 3.6 10.8 5.3 16.5 5.3 4.6 0 9.1-1.1 13.1-3.2l243.9-125.8 243.8 125.8c4.1 2.1 8.6 3.2 13.2 3.2 5.7 0 11.5-1.7 16.4-5.3 8.9-6.3 13-16.9 11.2-26.9 0 0-4.5-25.8-10.7-61.3-4.5-25.7-9.9-56.5-15.1-86.4-10.8-61.5-20.8-118.9-20.8-118.9l197.3-188.7c7.4-7.1 10.6-18 7.1-28.3-3.3-10.3-12.4-17.3-22.6-18.7l-272.7-38.9L543.3 133.7C538.7 124.6 529.2 118.3 518.1 118.3L518.1 118.3z"
                  fill="#bfbfbf"
                  p-id="3415"
                ></path>
              </svg>
              <span class="num">{{ item.likes }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Bottom></Bottom>
</template>

<script setup lang="ts">
import Bottom from "@/components/index/Bottom.vue";
// import { getListApi } from "@/api/information";
// import type { informationListParm } from "@/api/information/InformationModel";
// import { reactive, ref } from "vue";

// const informationListParm = reactive({
//   currentPage: 1,
//   pageSize: 16,
//   total: 0,
// });

// const list = ref([]);
// const getList = async (parm: informationListParm) => {
//   let res = await getListApi(parm);
//   if (res && res.code == 200) {
//     list.value = res.data;
//   }
// };

const list = [
  {
    pic: "https://www.helloimg.com/i/2024/10/24/671a44769a160.jpg",
    title:
      "这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题",
    label: "小标签",
    watch: 100,
    likes: 80,
    route: "",
  },
  {
    pic: "https://www.helloimg.com/i/2024/10/24/671a44769a160.jpg",
    title: "这里是标题这里是标题这里是标题这里是标题",
    label: "小标签",
    watch: 100,
    likes: 80,
    route: "",
  },
  {
    pic: "https://www.helloimg.com/i/2024/10/24/671a44769a160.jpg",
    title: "这里是标题这里是标题这里是标题这里是标题",
    label: "小标签",
    watch: 100,
    likes: 80,
    route: "",
  },
  {
    pic: "https://www.helloimg.com/i/2024/10/24/671a44769a160.jpg",
    title: "这里是标题这里是标题这里是标题这里是标题",
    label: "小标签",
    watch: 100,
    likes: 80,
    route: "",
  },
  {
    pic: "https://www.helloimg.com/i/2024/10/24/671a44769a160.jpg",
    title: "这里是标题这里是标题这里是标题这里是标题",
    label: "小标签",
    watch: 100,
    likes: 80,
    route: "",
  },
  {
    pic: "https://www.helloimg.com/i/2024/10/24/671a44769a160.jpg",
    title: "这里是标题这里是标题这里是标题这里是标题",
    label: "小标签",
    watch: 100,
    likes: 80,
    route: "",
  },
  {
    pic: "https://www.helloimg.com/i/2024/10/24/671a44769a160.jpg",
    title: "这里是标题这里是标题这里是标题这里是标题",
    label: "小标签",
    watch: 100,
    likes: 80,
    route: "",
  },
  {
    pic: "https://www.helloimg.com/i/2024/10/24/671a44769a160.jpg",
    title: "这里是标题这里是标题这里是标题这里是标题",
    label: "小标签",
    watch: 100,
    likes: 80,
    route: "",
  },
  {
    pic: "https://www.helloimg.com/i/2024/10/24/671a44769a160.jpg",
    title: "这里是标题这里是标题这里是标题这里是标题",
    label: "小标签",
    watch: 100,
    likes: 80,
    route: "",
  },
  {
    pic: "https://www.helloimg.com/i/2024/10/24/671a44769a160.jpg",
    title: "这里是标题这里是标题这里是标题这里是标题",
    label: "小标签",
    watch: 100,
    likes: 80,
    route: "",
  },
  {
    pic: "https://www.helloimg.com/i/2024/10/24/671a44769a160.jpg",
    title: "这里是标题这里是标题这里是标题这里是标题",
    label: "小标签",
    watch: 100,
    likes: 80,
    route: "",
  },
  {
    pic: "https://www.helloimg.com/i/2024/10/24/671a44769a160.jpg",
    title: "这里是标题这里是标题这里是标题这里是标题",
    label: "小标签",
    watch: 100,
    likes: 80,
    route: "",
  },
  {
    pic: "https://www.helloimg.com/i/2024/10/24/671a44769a160.jpg",
    title: "这里是标题这里是标题这里是标题这里是标题",
    label: "小标签",
    watch: 100,
    likes: 80,
    route: "",
  },
  {
    pic: "https://www.helloimg.com/i/2024/10/24/671a44769a160.jpg",
    title: "这里是标题这里是标题这里是标题这里是标题",
    label: "小标签",
    watch: 100,
    likes: 80,
    route: "",
  },
  {
    pic: "https://www.helloimg.com/i/2024/10/24/671a44769a160.jpg",
    title: "这里是标题这里是标题这里是标题这里是标题",
    label: "小标签",
    watch: 100,
    likes: 80,
    route: "",
  },
];
</script>

<style scoped>
.top {
  width: 970px;
  height: 60px;
  border-radius: 5px;
  margin-top: 1%;
}
.top_div {
  display: flex;
  text-align: center;
  justify-content: center;
}
.top_sp {
  display: block;
  text-align: center;
  position: relative;
  bottom: 38px;
  font-size: 15px;
  color: gray;
}
.all_list {
  flex-wrap: wrap; /* 允许换行 */
  justify-content: flex-start; /* 从起始位置开始排列 */
  width: 1000px;
  position: relative;
  left: 475px;
  bottom: 20px;
}
.list_img {
  width: 150px;
  height: 110px;
  border-radius: 10px;
}
.list {
  width: 460px;
  height: 130px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  flex-direction: row;
  margin: 5px;
}
.title {
  font-size: 18px;
  width: 285px;
  display: -webkit-box; /* 使用弹性盒子模型 */
  -webkit-box-orient: vertical; /* 子项排列为垂直 */
  -webkit-line-clamp: 2; /* 显示的行数 */
  overflow: hidden; /* 隐藏溢出 */
  text-overflow: ellipsis; /* 使用省略号 */
}
.label {
  font-size: 11px;
  border: solid 1px;
  border-radius: 5px;
  padding: 1px 3px;
}
.num {
  font-size: 14px;
  color: gray;
}
.image {
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
}
</style>
