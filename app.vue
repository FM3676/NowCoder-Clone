<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <!-- Loading Page -->
      <!-- App -->
      <div class="min-h-full">
        <div
          class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-10"
        >
          <!-- Left Sidebar -->
          <aside class="bg-red-500 hidden md:block xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">Left</div>
          </aside>
          <!-- Main Content -->
          <main class="bg-green-500 col-span-12 md:col-span-8 xl:col-span-6">
            Main
          </main>
          <!-- Right Sidebar -->
          <aside class="bg-red-500 hidden md:block xl:col-span-4 md:col-span-3">
            <div class="sticky top-0">RIGHT</div>
          </aside>
        </div>
      </div>
      <!-- Auth Page -->
    </div>
  </div>
</template>
<script setup lang="ts">
const darkMode = false;
</script>
