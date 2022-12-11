<template>
  <form
    @submit.prevent="handleSendReplyToPost"
    class="flex bg-gray-100 rounded-md px-4 py-2 mt-4 gap-6"
  >
    <input
      v-model="reply"
      class="rounded-md flex-grow focus:outline-none focus:border focus:border-green-350 p-2"
      type="text"
      placeholder="输入你的评论吧"
    />
    <button class="bg-green-350 rounded-lg text-white text-sm h-9 px-6">
      <UISpinner v-if="props.isReplying" class="relative left-2 w-6 h-6" />
      <span v-else>评论</span>
    </button>
  </form>
</template>

<script setup lang="ts">
const emits = defineEmits(["onReply"]);
const props = defineProps<{ isReplying: boolean; clearReply: boolean }>();
const reply = ref<string>();

watchEffect(()=> props.clearReply === true ? reply.value = "" : null)

const handleSendReplyToPost = () => {
  if (!props.isReplying) emits("onReply", reply);
};
</script>

<style scoped></style>
