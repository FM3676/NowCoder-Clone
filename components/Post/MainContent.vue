<template>
  <div>
    <!-- Header -->
    <PostHeader created-time="null" username="saddas"  :show-follow-button="true" />
    <!-- MarkDown Viewer -->
    <h1 class="font-bold text-2xl mb-4">{{ title }}</h1>
    <Viewer :plugins="plugins" :value="value" />
    <!-- Footer Icons -->
    <PostFooter />
  </div>
</template>

<script setup lang="ts">
import { Viewer } from "@bytemd/vue-next";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight-ssr";
import math from "@bytemd/plugin-math-ssr";
import "~~/assets/MdPreview.css";

const plugins = [gfm(), highlight(), math()];
const value = ref(`## ssssss 
规划局国际货币`);
const title = ref("这是一个Title");
</script>

<style scoped></style>
