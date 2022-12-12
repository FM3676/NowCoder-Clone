<template>
  <div class="flex flex-col justify-between items-center h-20 mb-4">
    <div class="w-full flex items-center justify-between">
      <NuxtLink :to="`/post/${post.id}`">
        <p
          class="line-clamp-1 text-lg flex-grow cursor-pointer hover:text-green-350"
        >
          {{ props.post.title }}
        </p>
      </NuxtLink>
      <p class="text-gray-400 text-xs">
        发布于{{ props.post.createTime.slice(5) }}
      </p>
    </div>
    <div class="flex items-center justify-start w-full">
      <p class="text-gray-400 text-xs" v-once>
        浏览 {{ Math.floor(Math.random() * 100) }}
      </p>
      <div class="bg-gray-400 h-2 mx-2" style="width: 1px"></div>
      <p class="text-gray-400 text-xs">点赞 {{ props.post.liked }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Post } from "~~/interfaces/postInterface";

const props = defineProps<{ post: Post }>();
</script>

<style scoped></style>
