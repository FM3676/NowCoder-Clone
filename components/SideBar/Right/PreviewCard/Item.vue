<template>
    <li class="flex flex-col border-b pt-2">
      <NuxtLink :to="props.link">
        <h2 class="text-gray-600 hover:text-green-600 mb-3" :class="defaultTransition">{{ props.title }}</h2>
      </NuxtLink>

      <div class="flex flex-row justify-between items-center text-gray-400 text-xs mb-3">
        <p>发表于{{ props.date }}</p>
        <p>回复({{ props.repliesCount }})</p>
      </div>
    </li>

</template>

<script setup lang="ts">
const { defaultTransition } = useTailwindCofing();
const props = defineProps<{
  title: string;
  date: string;
  repliesCount: number;
  link: string;
}>();
</script>
