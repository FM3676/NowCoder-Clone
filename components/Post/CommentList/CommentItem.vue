<template>
  <div class="pt-4">
    <!-- Info -->
    <PostHeader
      :created-time="comment.createTime"
      :username="comment.username"
    />
    <div class="pl-12">
      <!-- Main Comment -->
      <p class="text-sm">{{ comment.content }}</p>
      <!-- Icons -->
      <PostCommentFooter />
      <!-- Sub Comments -->
      <div class="bg-gray-100 rounded-md p-4 mt-4 flex flex-col gap-4">
        <PostCommentListSubCommentItem
          v-for="item in comment.children"
          :key="item.createTime"
          :comment="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FirstLevelComment } from "~~/interfaces/postInterface";

defineProps<{ comment: FirstLevelComment }>();
</script>

<style scoped></style>
