<template>
  <div class="pt-4">
    <!-- Info -->
    <PostHeader
      :created-time="comment.createTime"
      :username="comment.username"
      :header-url="comment.headUrl"
    />
    <div class="pl-12">
      <!-- Main Comment -->
      <p class="text-sm">{{ comment.content }}</p>
      <!-- Icons -->
      <PostCommentFooter
        :entity-id="comment.entityId"
        :root-id="comment.id"
        :to-comment-user-id="comment.createBy"
      />
      <!-- Sub Comments -->
      <div class="bg-gray-100 rounded-md p-4 mt-4 flex flex-col gap-4">
        <PostCommentListSubCommentItem
          v-for="(item, index) in comment.children"
          :key="item.createTime"
          :comment="item"
          :is-the-last="index === comment.children?.length! - 1"
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
