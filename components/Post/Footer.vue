<template>
  <section
    class="flex items-center justify-between text-gray-300 text-base mt-4"
  >
    <div class="flex gap-4 transition-colors">
      <span
        @click="handleLikeThePost"
        :class="[iconSpanClass, { 'text-green-250': isLiked }]"
      >
        <Pointer />{{ changeableLikeCount }}</span
      >
      <span :class="iconSpanClass" v-once>
        <Star /> {{ Math.floor(Math.random() * 100) }}
      </span>
      <span :class="iconSpanClass">
        <ChatLineRound />{{ props.commentCount }}</span
      >
      <span :class="iconSpanClass"> <Share />分享 </span>
      <span :class="iconSpanClass">
        <MoreFilled />
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Star,
  ChatLineRound,
  Pointer,
  Share,
  MoreFilled,
} from "@element-plus/icons-vue";
const { likeThePost } = usePost();
const iconSpanClass =
  "flex justify-center items-center h-6 gap-2 hover:text-green-250 cursor-pointer transition-colors";

const props = defineProps<{
  commentCount: number;
  likedCount: number;
  entityId: number;
  isLiked: boolean;
}>();
const changeableLikeCount = ref(props.commentCount);
const isLiked = ref(props.isLiked);

const handleLikeThePost = async () => {
  const result = await likeThePost(props.entityId);
  if (result) {
    changeableLikeCount.value = result;
    isLiked.value = !isLiked.value;
  }
};
</script>

<style scoped>
span svg {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
