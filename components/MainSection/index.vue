<template>
  <div class="translate-y-4">
    <!-- Lil Nav -->
    <ul
      class="bg-white border-b-2 pt-2 flex gap-1 text-sm border-b-green-350 mb-4"
    >
      <li
        v-for="(item, index) in lilNavOptions"
        :key="item"
        class="py-1 px-4 text-black cursor-pointer hover:text-white hover:bg-green-350"
        :class="[{ selectedNavOption: activeNavOption === index }]"
      >
        {{ item }}
      </li>
    </ul>
    <ul>
      <!-- Order Type -->
      <ul class="flex gap-5 p-4">
        <li
          v-for="(item, index) in orderTypes"
          :key="item"
          class="text-gray-400 hover:text-green-250 relative cursor-pointer"
          :class="[{ selectedOrderType: activeOrderType === index }]"
        >
          {{ item }}
        </li>
      </ul>
      <UISpinner v-if="isLoading" class="relative left-1/2" />
      <MainSectionItem
        v-for="item in postList"
        :key="item.createTime"
        :post="item"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Post } from "~~/interfaces/postInterface";

const lilNavOptions = ["交流讨论", "找面经", "找内推", "建立互助点评"];
const orderTypes = ["默认", "最新", "最热", "精华"];
const activeNavOption = ref(0);
const activeOrderType = ref(0);

const { getPostList, getHostPostList } = usePost();
const postList = ref<Post[]>([]);
const postListTotal = ref(0);
const isLoading = ref(true);

onMounted(async () => {
  isLoading.value = true;
  const { posts: hotPost, total: hotPostTotal } = await getHostPostList(1, 10);
  const { posts, total } = await getPostList(1, 10);
  postList.value = hotPost.concat(posts);
  postListTotal.value = hotPostTotal + total;
  isLoading.value = false;
});
</script>

<style scoped>
.selectedNavOption {
  background-color: rgb(50 202 153);
  color: white;
}
.selectedOrderType {
  color: rgb(91 213 173);
  font-weight: 600;
}
.selectedOrderType::after {
  position: absolute;
  bottom: -0.4rem;
  left: -25%;
  transform: translateX(100%);
  content: "";
  padding: 0.15rem 0.5rem;
  background-color: rgb(50 202 153);
  border-radius: 9999px;
}
</style>
