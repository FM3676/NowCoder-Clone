<template>
  <div>
    <ElDrawer
      v-model="props.showDrawer"
      append-to-body
      lock-scroll
      direction="rtl"
      size="30%"
      class="drawer"
    >
      <template #header>
        <h4 class="text-xl">通知</h4>
      </template>
      <div class="flex gap-4">
        <p
          @click="handleChangeSelection(index)"
          :class="[{ selected: index === selection }]"
          class="text-xl hover:text-green-350 cursor-pointer transition-all"
          v-for="(item, index) in titleList"
          :key="item"
        >
          {{ item }}
        </p>
      </div>
      <ul class="w-full pt-4">
        <li
          :class="selectedItemClass"
          class="rounded-xl w-full pl-4 relative -left-2 mb-4 hover:text-green-350 cursor-pointer h-24 flex justify-start items-center transition-all"
        >
          <Pointer class="w-16 h-16 mr-4" v-if="selection === 0" />
          <ChatLineRound class="w-16 h-16 mr-4" v-if="selection === 1" />
          <Star class="w-16 h-16 mr-4" v-if="selection === 2" />
          您有
          <span class="font-bold mx-2">
            {{ renderList[selection].unread }}
          </span>
          个新的{{ titleList[selection] }}
        </li>
      </ul>
    </ElDrawer>
  </div>
</template>

<script setup lang="ts">
import { ElDrawer } from "element-plus";
import { Star, Pointer, ChatLineRound } from "@element-plus/icons-vue";
import { Message } from "~~/composables/useNotice";
const props = defineProps<{
  showDrawer: boolean;
  likeNotice: Message;
  commentNotice: Message;
  followNotice: Message;
}>();

const selection = ref(0);
const handleChangeSelection = (s: number) => {
  selection.value = s;
  selectedItemClass.value = `selecte-item-${s}`;
};
const renderList = ref([
  props.likeNotice,
  props.commentNotice,
  props.followNotice,
]);

const titleList = ["点赞", "评论", "关注"];
const selectedItemClass = ref("selecte-item-0");
</script>

<style scoped>
.selected {
  color: rgb(50 202 153);
}

.selecte-item-0 {
  border-left: 4px solid rgb(91 213 173);
}
.selecte-item-0:hover {
  color: rgb(91 213 173);
}
.selecte-item-1 {
  border-left: 4px solid rgb(92, 149, 255);
}
.selecte-item-1:hover {
  color: rgb(92, 149, 255);
}
.selecte-item-2 {
  border-left: 4px solid rgb(221, 228, 127);
}
.selecte-item-2:hover {
  color: rgb(221, 228, 127);
}
</style>
