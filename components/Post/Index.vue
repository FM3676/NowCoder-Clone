<template>
  <div class="bg-white rounded-lg p-4">
    <UISpinner v-if="isLoading" class="relative left-1/2" />
    <div v-else>
      <!-- Main Content -->
      <PostMainContent :post-detail="postDetail" />
      <!-- Comment Input -->
      <PostReplyForm
        :clear-reply="clearReply"
        :is-replying="isReplying"
        @on-reply="handlePostReplySubmit"
      />
      <!-- Comments -->
      <PostCommentList :post-id="props.postId" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Post } from "~~/interfaces/postInterface";

const props = defineProps<{ postId: string }>();
const { getPostById, addComment } = usePost();
const postDetail = ref({} as Post);
const isLoading = ref(true);
const isReplying = ref(false);
const clearReply = ref(false);

const handlePostReplySubmit = async (reply: string) => {
  isReplying.value = true;
  clearReply.value = false;
  const result = await addComment(props.postId, reply);
  isReplying.value = false;
  if (result) clearReply.value = true;
};

onMounted(async () => {
  isLoading.value = true;
  postDetail.value = await getPostById(props.postId);
  isLoading.value = false;
});
</script>

<style scoped></style>
