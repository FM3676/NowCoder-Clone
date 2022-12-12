<template>
  <NuxtLayout name="basic-nav"
    ><div class="grid grid-cols-12 mx-auto w-xl gap-3 lg:px-8 pt-2 bg-gray-100">
      <!-- Left Sidebar -->
      <aside class="col-span-2">
        <div class="sticky top-16">
          <SideBarLeft />
        </div>
      </aside>
      <!-- Main Content -->
      <main class="col-span-7">
        <p class="font-bold text-2xl pt-2 mb-2">搜索：{{ searchQuery }}</p>
        <UISpinner v-if="isLoading" class="relative left-1/2" />
        <MainSectionItem
          v-for="item in searchPostList"
          :key="item.createTime"
          :post="item"
        />
        <p v-if="!searchPostListTotal && !isLoading">没有你想要搜索的内容</p>
      </main>
      <!-- Right Sidebar -->
      <aside class="col-span-3">
        <div class="sticky top-16">
          <SideBarRight />
        </div>
      </aside>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Post } from "~~/interfaces/postInterface";
definePageMeta({
  layout: "basic-nav",
});
const { searchPost } = usePost();
const searchQuery = useRouter().currentRoute.value.query.q;
const isLoading = ref(true);
const searchPostList = ref<Post[]>([]);
const searchPostListTotal = ref(0);

onMounted(async () => {
  if (!searchQuery) return navigateTo("/");
  isLoading.value = true;
  const { posts, total } = await searchPost(1, 10, searchQuery as string);
  searchPostList.value = posts;
  searchPostListTotal.value = total;
  isLoading.value = false;
});
</script>

<style scoped></style>
