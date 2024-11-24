<template>
  <div class="carousel" v-if="swiperList.length != 0">
    <swiper
      :modules="modules"
      :loop="true"
      :slides-per-view="1"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :pagination="{ clickable: true}"
      class="swiperBox"
    >
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="image" :src="item.cover" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination } from "swiper/modules";

// 轮播图数组
const swiperList = ref([
  {
    id: 0,
    cover: "https://www.helloimg.com/i/2024/11/24/6742eb5c75120.png",
  },
  {
    id: 1,
    cover: "https://www.helloimg.com/i/2024/11/24/6742eb80ab958.png",
  },
]);

const modules = [Autoplay, Pagination];

</script>

<style scoped>
.carousel {
  height: 500px;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #efefef;
  z-index: 1;
}
.swiperBox {
  height: 500px;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: fill; /* 确保图片填充整个容器而不保持长宽比 */
}

/* 分页器容器的样式 */
.swiper >>> .swiper-pagination-bullet {
 width: 15px;
 height: 3px;
 border-radius: 2px;
 background-color: grey;
 margin-bottom: 10px;
}
.swiper >>> .swiper-pagination-bullet-active{
  background-color:#efefef;
  width: 25px;
}
</style>
