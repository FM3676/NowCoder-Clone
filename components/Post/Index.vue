<template>
  <div class="bg-white rounded-lg p-4">
    <!-- Main Content -->
    <PostMainContent :post-detail="postDetail" />
    <!-- Comment Input -->
    <PostReplyForm />
    <!-- Comments -->
    <PostCommentList :post-id="props.postId" />
  </div>
</template>

<script setup lang="ts">
import { Post } from "~~/interfaces/postInterface";

const props = defineProps<{ postId: string }>();
const { getPostById } = usePost();
const postDetail = ref({} as Post);

onMounted(async () => {
  postDetail.value = await getPostById(props.postId);
});
</script>

<style scoped></style>
