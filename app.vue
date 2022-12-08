<template>
  <div class="bg-gray-100 min-w-min">
    <!-- App -->
    <div class="min-h-screen">
      <NuxtPage :key="$route.fullPath" />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
