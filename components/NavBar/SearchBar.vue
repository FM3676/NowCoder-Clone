<template>
  <div
    class="flex items-center p-2 rounded-md w-72 bg-gray-100 ml-5 cursor-pointer"
  >
    <input
      v-model="searchContent"
      type="search"
      class="flex-grow bg-gray-100 text-sm outline-none"
      placeholder="搜索面经/职位/试题/公司"
    />
    <!-- Search Icon -->
    <button @click="handleSearch" class="w-4 h-4 text-gray-400 cursor-pointer">
      <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        data-v-029747aa=""
      >
        <path
          fill="currentColor"
          d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
const searchContent = ref("");
const handleSearch = () => {
  if (!searchContent.value) return;
  useRouter().push({ path: "/search", query: { q: searchContent.value } });
  searchContent.value;
};
</script>
