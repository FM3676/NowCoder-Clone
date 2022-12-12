<template>
  <header class="flex w-full justify-between items-center">
    <!-- Info -->
    <NuxtLink :to="`/profile/${props.id}`" class="cursor-pointer">
      <!-- Avatar -->
      <span
        class="w-10 h-10 rounded-full overflow-hidden inline-flex justify-center items-center"
      >
        <img :src="props.headerUrl" />
        <!-- "https://static.nowcoder.com/fe/file/logo/1.png" -->
      </span>

      <span class="inline-flex flex-col ml-4 -translate-y-2">
        <p class="text-sm">{{ username }}</p>
        <p class="text-gray-300 text-sm">{{ createdTime }}</p>
      </span>
    </NuxtLink>
    <!-- Follow Button -->
    <button
      @click="handleFollow"
      v-if="showFollowButton"
      class="bg-green-350 rounded-lg text-white text-sm h-9 px-6"
    >
      {{ isFollowed ? "已关注" : "+关注" }}
    </button>
  </header>
</template>

<script setup lang="ts">
const { follow, checkFollow } = useUsers();
const props = withDefaults(
  defineProps<{
    showFollowButton: boolean;
    username: string;
    createdTime: string;
    headerUrl: string;
    id: number;
  }>(),
  {
    showFollowButton: false,
  }
);
const isFollowed = ref(false);
const isHandling = ref(false);

onMounted(async () => {
  isFollowed.value = await checkFollow(props.id);
});

const handleFollow = async () => {
  if (isHandling.value) return;
  isHandling.value = true;
  const result = await follow(props.id, isFollowed.value);
  console.log(result);
  if (!result) return;
  isFollowed.value = !isFollowed.value;
  isHandling.value = false;
};
</script>

<style scoped></style>
