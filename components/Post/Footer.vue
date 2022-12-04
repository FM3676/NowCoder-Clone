<template>
  <section
    class="flex items-center justify-between text-gray-300 text-base mt-4"
  >
    <div class="flex gap-4 transition-colors">
      <span :class="iconSpanClass"> <Pointer /> 134 </span>
      <span :class="iconSpanClass"> <Star /> 25 </span>
      <span :class="iconSpanClass"> <ChatLineRound /> 108 </span>
      <span :class="iconSpanClass"> <Share />分享 </span>
      <span :class="iconSpanClass">
        <MoreFilled />
      </span>
    </div>
    <p>浏览 5.8w</p>
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

const iconSpanClass =
  "flex justify-center items-center h-6 gap-2 hover:text-green-250 cursor-pointer transition-colors";
</script>

<style scoped>
span svg {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
