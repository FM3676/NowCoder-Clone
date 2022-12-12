<template>
  <div class="mt-4">
    <div class="font-bold text-lg py-2">全部评论</div>
    <PostCommentItem
      v-for="item in commentList?.comments"
      :key="item.createTime"
      :comment="item"
    />
  </div>
</template>

<script setup lang="ts">
import { FirstLevelComment } from "~~/interfaces/postInterface";
const props = defineProps<{ postId: string }>();
const { getPostComments } = usePost();
const commentList = ref<{ comments: FirstLevelComment[]; total: number }>();
onMounted(async () => {
  commentList.value = await getPostComments(1, 10, props.postId);
});
</script>

<style scoped></style>
