<template>
  <div class="">
    <!-- Header -->
    <div class="cursor-pointer flex text-sm items-center">
      <span
        class="w-6 h-6 rounded-full overflow-hidden inline-flex justify-center items-center mr-2"
      >
        <img src="https://static.nowcoder.com/fe/file/logo/1.png" />
      </span>
      {{ comment.username }} <span class="text-gray-300 mx-2">回复</span>
      {{ comment.toCommentUserName }}
    </div>
    <div class="text-sm pl-8">
      <!-- Comment -->
      <div class="mt-2">{{ comment.content }}</div>
      <!-- Footer -->
      <PostCommentFooter
        :entity-id="comment.entityId"
        :root-id="comment.id"
        :to-comment-user-id="comment.createBy"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Comment } from "~~/interfaces/postInterface";

defineProps<{ comment: Comment }>();
</script>

<style scoped></style>
