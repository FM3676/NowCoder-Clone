<template>
  <div class="bg-gray-100 min-w-min">
    <!-- App -->
    <div class="min-h-screen">
      <NuxtPage :key="$route.fullPath" />
      <footer class="mt-8 w-full py-12 bg-gray-800">
        <p
          class="text-gray-600 text-8xl text-center hover:text-gray-300 transition-all cursor-pointer"
        >
          N O W C O D E R
        </p>
      </footer>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
