<template>
  <!-- Hire & Enterprise -->
  <div class="ml-4 grid gap-4 grid-flow-col">
    <div
      class="flex justify-center items-center p-2 bg-green-50 text-green-350 rounded-xl text-sm cursor-pointer"
    >
      去企业版<span class="w-4 h-4"><ArrowRight /></span>
    </div>
    <div
      class="flex justify-center items-center p-2 bg-green-50 text-green-350 rounded-xl text-sm cursor-pointer"
    >
      我要招聘<span class="w-4 h-4"><ArrowRight /></span>
    </div>
  </div>
  <!-- DownLoad App (Phone Icon) -->
  <span
    class="ml-4 h-8 w-8 flex justify-center items-center text-gray-400 hover:bg-gray-200 rounded-md cursor-pointer"
  >
    <Iphone />
  </span>
  <!-- Sign in / Sign up button -->
  <button
    class="flex justify-center items-center py-2 px-4 ml-4 rounded-lg text-sm bg-green-350 text-white"
    type="button"
    @click="emits('onOpenLoginDialog')"
  >
    登录/注册
  </button>
</template>

<script setup lang="ts">
import { ArrowRight, Iphone } from "@element-plus/icons-vue";
const emits = defineEmits(["onOpenLoginDialog"]);
</script>
