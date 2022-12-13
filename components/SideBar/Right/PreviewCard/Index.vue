<template>
  <div
    class="bg-white px-4 pt-3 rounded-md mb-2"
    :class="[{ 'module-head': props.moduleHead }]"
  >
    <h1 class="text-gray-600" :class="[{ 'font-bold': props.boldTilte }]">
      {{ props.title }}
    </h1>
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    boldTilte: boolean;
    moduleHead: boolean;
  }>(),
  { boldTilte: true, moduleHead: true }
);
</script>
<style scoped>
.module-head h1:before {
  background: #ff6547;
  content: "";
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-right: 5px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>
