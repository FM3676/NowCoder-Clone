<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-gray-100">
      <!-- Loading Page -->
      <!-- App -->
      <div class="min-h-full">
        <!-- NavBar -->
        <NavBar @on-open-login-dialog="handleOpenLoginDialog" />
        <div
          class="grid grid-cols-12 mx-auto lg:max-w-8xl lg:px-8 lg:gap-3 pt-16"
        >
          <!-- sm:px-6 -->
          <!-- Left Sidebar -->
          <aside class="bg-red-500 hidden md:block md:col-span-2">
            <!-- xs-col-span-1 xl:col-span-2 -->
            <div class="sticky top-0">
              <SideBarLeft />
            </div>
          </aside>
          <!-- Main Content -->
          <main class="bg-green-500 col-span-12 md:col-span-7">Main</main>
          <!-- Right Sidebar -->
          <aside class="hidden md:block md:col-span-3">
            <!--  xl:col-span-4 md:col-span-3 -->
            <div class="sticky top-0">
              <SideBarRight />
            </div>
          </aside>
        </div>
      </div>
      <!-- Auth Page -->
      <Auth :is-open="authPageOpening" />
    </div>
  </div>
</template>
<script setup lang="ts">
const darkMode = ref<boolean>(false);
const authPageOpening = ref<boolean>(false);
const handleOpenLoginDialog = () =>
  (authPageOpening.value = !authPageOpening.value);
</script>
<style>
.el-dialog__header,
.el-dialog__body {
  padding: 0;
  padding-bottom: 0;
}
</style>
