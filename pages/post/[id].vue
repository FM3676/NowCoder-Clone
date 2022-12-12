<template>
  <div>
    <NuxtLayout name="basic-nav">
      <div class="grid grid-cols-12 mx-auto w-xl gap-3 lg:px-8 pt-6 bg-gray-100">
        <!-- Main Content -->
        <main class="col-span-9">
          <Post :postId="(route.params.id as string)" />
        </main>
        <!-- Right Sidebar -->
        <aside class="col-span-3">
          <div class="sticky top-16">
            <SideBarRight />
          </div>
        </aside>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "basic-nav",
});
const route = useRoute();
</script>

<style scoped></style>
