<template>
  <!-- Not Have Post Yet -->
  <div v-if="props.total === 0">
    <img
      class="w-48 mx-auto"
      src="https://static.nowcoder.com/fe/file/site/www-web/prod/1.0.160/imageAssets/36f9bbb6c7f4f3506acd.png"
    />
    <p class="text-center mb-4">你还没有帖子，快去发帖分享你遇到的问题和经验</p>
    <button
      class="flex justify-center items-center py-2 px-4 rounded-lg text-sm bg-green-350 text-white mx-auto"
    >
      去发帖
    </button>
  </div>
  <!-- Post List -->
  <div>
    <ProfilePostItem
      v-for="item in props.posts"
      :key="item.createTime"
      :post="item"
    />
    <p class="text-center text-sm text-gray-400">暂无更多内容</p>
  </div>
</template>

<script setup lang="ts">
import { Post } from "~~/interfaces/postInterface";

const props = defineProps<{
  posts: Post[];
  total: number;
}>();
</script>

<style scoped></style>
