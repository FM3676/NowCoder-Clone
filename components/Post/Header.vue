<template>
  <header class="flex w-full justify-between items-center">
    <!-- Info -->
    <div class="cursor-pointer">
      <!-- Avatar -->
      <span
        class="w-10 h-10 rounded-full overflow-hidden inline-flex justify-center items-center"
      >
        <img src="https://static.nowcoder.com/fe/file/logo/1.png" />
      </span>

      <span class="inline-flex flex-col ml-4 -translate-y-2">
        <p class="text-sm">{{ username }}</p>
        <p class="text-gray-300 text-sm">{{ createdTime }}</p>
      </span>
    </div>
    <!-- Follow Button -->
    <button
      v-if="showFollowButton"
      class="bg-green-350 rounded-lg text-white text-sm h-9 px-6"
    >
      +关注
    </button>
  </header>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    showFollowButton: boolean;
    username: string;
    createdTime: string;
  }>(),
  {
    showFollowButton: false,
  }
);
</script>

<style scoped></style>
