<template>
  <div v-if="props.postDetail">
    <!-- Header -->
    <PostHeader
      :created-time="props.postDetail.createTime"
      :username="props.postDetail.username"
      :show-follow-button="true"
      :header-url="props.postDetail.headerUrl"
    />
    <!-- MarkDown Viewer -->
    <h1 class="font-bold text-2xl mb-4">{{ props.postDetail.title }}</h1>
    <Viewer :plugins="plugins" :value="props.postDetail.content" />
    <!-- Footer Icons -->
    <PostFooter
      :comment-count="props.postDetail.commentCount"
      :liked-count="props.postDetail.liked"
    />
  </div>
</template>

<script setup lang="ts">
import { Viewer } from "@bytemd/vue-next";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight-ssr";
import math from "@bytemd/plugin-math-ssr";
import "~~/assets/MdPreview.css";
import { Post } from "~~/interfaces/postInterface";
const plugins = [gfm(), highlight(), math()];

const props = defineProps<{ postDetail: Post }>();
</script>

<style scoped></style>
