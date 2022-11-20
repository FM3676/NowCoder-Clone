<template>
  <div class="flex flex-col h-screen bg-white">
    <!-- First Level -->
    <ul
      v-for="(first, index) in dummyData"
      :key="first.title"
      class="flex flex-col py-4 px-2"
    >
      <li>
        <div class="font-bold text-gray-900 mb-2 flex items-center">
          <component :is="IconList[index]" class="w-5 mr-1" />
          <h1>{{ first.title }}</h1>
        </div>
        <!-- Second Level -->
        <ul class="flex flex-col mt-2 px-1">
          <li
            v-for="(second, idx) in first.sub"
            :key="second"
            class="font-normal text-sm pl-3 py-1 text-gray-400 hover:bg-green-100 hover:text-green-600"
            :class="[
              idx === activeSub && first.id === activeFirstId
                ? activeClass
                : '',
            ]"
          >
            {{ second }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import IconList from "~~/components/Icons/LeftSideBar";
const dummyData = [
  {
    title: "讨论区",
    id: 1,
    sub: ["交流讨论", "交流讨论", "交流讨论", "交流讨论"],
  },
  {
    title: "圈子",
    id: 2,
    sub: ["热议动态"],
  },
  {
    title: "我的圈子",
    id: 3,
    sub: ["暂无圈子"],
  },
];
const activeClass = "bg-green-100 text-green-600";
const activeFirstId = ref<number>(1);
const activeSub = ref<number>(0);
</script>
