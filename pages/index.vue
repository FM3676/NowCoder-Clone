<template>
  <NuxtLayout name="basic-nav">
    <div class="grid grid-cols-12 mx-auto w-xl gap-3 lg:px-8  pt-16 bg-gray-100">
      <!-- Left Sidebar -->
      <aside class="bg-red-500 col-span-2">
        <div class="sticky top-0">
          <SideBarLeft />
        </div>
      </aside>
      <!-- Main Content -->
      <main class="col-span-7"><MainSection /></main>
      <!-- Right Sidebar -->
      <aside class="col-span-3">
        <div class="sticky top-0">
          <SideBarRight />
        </div>
      </aside>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "basic-nav",
});
</script>
<style>
.el-dialog__header,
.el-dialog__body {
  padding: 0;
  padding-bottom: 0;
}
</style>
