<template>
  <Msg></Msg>
  <FeatureList></FeatureList>
  <router-view />
</template>

<script setup lang="ts">
import FeatureList from "@/components/personal/FeatureList.vue";
import Msg from "@/components/personal/Msg.vue";
</script>

<style scoped></style>
