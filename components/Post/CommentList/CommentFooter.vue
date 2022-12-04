<template>
  <div class="flex gap-4 text-xs text-gray-300 mt-2">
    <span class="flex h-4 gap-2 cursor-pointer hover:text-green-350 transition-all"> <Pointer /> 123 </span>
    <span class="flex h-4 gap-2 cursor-pointer hover:text-green-350 transition-all"> <ChatLineRound /> 123 </span>
    <span class="flex h-4 gap-2 cursor-pointer hover:text-green-350 transition-all">
      <Share />
    </span>
    <p>发布于 11-02</p>
  </div>
</template>

<script setup lang="ts">
import { ChatLineRound, Pointer, Share } from "@element-plus/icons-vue";
const props = defineProps();
</script>

<style scoped></style>
