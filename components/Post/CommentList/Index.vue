<template>
  <div class="mt-4">
    <div class="font-bold text-lg py-2">全部评论</div>
    <PostCommentItem v-for="item in commentList" :key="item.createTime" :comment="item" />
  </div>
</template>

<script setup lang="ts">
import { FirstLevelComment } from "~~/interfaces/postInterface";

const { getPostComments } = usePost();
const commentList = ref<FirstLevelComment[]>();
onMounted(async () => {
  commentList.value = await getPostComments("12");
});
</script>

<style scoped></style>
