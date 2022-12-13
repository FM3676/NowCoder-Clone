<template>
  <div :class="[{ isReplying: openReplyForm }]">
    <div class="flex gap-4 text-xs text-gray-300 mt-2">
      <span
        class="flex h-4 gap-2 cursor-pointer hover:text-green-350 transition-all"
      >
        <Pointer /> 123
      </span>
      <span
        @click="handleOpenReplyForm"
        class="flex h-4 gap-2 cursor-pointer hover:text-green-350 transition-all"
      >
        <ChatLineRound /> 123
      </span>
      <span
        class="flex h-4 gap-2 cursor-pointer hover:text-green-350 transition-all"
      >
        <Share />
      </span>
      <p>发布于 11-02</p>
    </div>
    <!-- Reply to Comment : ReplyForm -->
    <div class="w-full flex gap-2 items-end replyForm">
      <input
        v-model="reply"
        class="border grow outline-none p-2 text-sm rounded-xl border-gray-100 hover:border-green-350 focus:border-green-350 transition-all"
        type="text"
      />
      <button
        @click="handleSendReplyToComment"
        class="px-4 rounded-full text-white text-xs bg-green-350 h-6"
      >
        <UISpinner v-if="isSending" class="w-4 h-4 relative left-2" />
        <span v-else>发送</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChatLineRound, Pointer, Share } from "@element-plus/icons-vue";
import { ElNotification } from "element-plus";
const { addComment } = usePost();
const props = defineProps<{
  entityId: number;
  rootId: number;
  toCommentUserId: number;
}>();

const openReplyForm = ref(false);
const reply = ref("");
const isSending = ref(false);

const handleOpenReplyForm = () => {
  openReplyForm.value = !openReplyForm.value;
};
const handleSendReplyToComment = async () => {
  isSending.value = true;
  addComment(props.entityId, reply.value, props.rootId, props.toCommentUserId)
    .then((res) => (reply.value = ""))
    .catch((error) =>
      ElNotification({
        title: "No Auth!",
        message: "Login First",
        type: "warning",
      })
    );

  isSending.value = false;
};
</script>

<style scoped>
.isReplying .replyForm {
  max-height: 200px;
  margin-top: 0.5rem; /* 8px */
}
.replyForm {
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
</style>
