<template>
  <div>
    <ElDrawer
      v-model="props.showDrawer"
      append-to-body
      lock-scroll
      direction="rtl"
      size="60%"
      class="drawer"
    >
      <template #header>
        <h4 class="text-xl text-green-350">{{ props.title }}</h4>
      </template>
      <ul class="border-t pt-4">
        <li
          v-for="item in renderList"
          :key="item.username"
          class="flex border-b h-20 pt-4 justify-start items-start"
        >
          <NuxtLink :to="`/profile/${item.id}`">
            <span class="w-12 h-12 overflow-hidden rounded-full bg-gray-400">
              <img :src="item.headerUrl" />
            </span>

            <p
              class="relative left-4 text-lg hover:text-green-350 transition-all"
            >
              {{ item.username }}
            </p>
          </NuxtLink>
        </li>
      </ul>
    </ElDrawer>
  </div>
</template>

<script setup lang="ts">
import { ElDrawer } from "element-plus";
import { UserProfile } from "~~/interfaces/userInterface";
const props = defineProps<{
  showDrawer: boolean;
  title: string;
  renderList: UserProfile[];
}>();
</script>

<style scoped></style>
