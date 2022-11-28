<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-gray-100">
      <!-- App -->
      <div class="min-h-full">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const darkMode = ref<boolean>(false);
</script>
