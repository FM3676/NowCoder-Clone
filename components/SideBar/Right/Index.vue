<template>
  <div class="flex flex-col" :class="defaultTransition">
    <!-- CreateCenter -->
    <SideBarRightPreviewCard
      title="创作中心"
      :module-head="false"
      :bold-tilte="false"
    >
      <div class="flex items-center justify-around py-6">
        <NuxtLink
          v-for="item in imgList"
          to="/creation/MarkDown"
          class="flex flex-col justify-center items-center w-16 rounded-lg hover:bg-green-50"
        >
          <img :src="item.img" :alt="item.text" class="w-12 h-12" />
          <p>{{ item.text }}</p>
        </NuxtLink>
      </div>
      <NuxtLink
        to="/"
        class="bg-green-350 rounded-md text-white w-full block text-sm text-center py-2 mb-3 hover:bg-green-250"
        >进入创作者中心</NuxtLink
      >
    </SideBarRightPreviewCard>

    <!-- Billboard -->
    <SideBarRightPreviewCard
      v-for="card in dummyData"
      :key="card.title"
      :title="card.title"
      :boldTilte="true"
      :moduleHead="true"
    >
      <ul
        class="flex flex-col cursor-pointer text-sm"
        :class="defaultTransition"
      >
        <SideBarRightPreviewCardItem
          v-for="item in card.sub"
          :key="item.title"
          :title="item.title"
          :link="item.link"
          :date="item.Date"
          :replies-count="item.repliesCount"
        >
        </SideBarRightPreviewCardItem>
      </ul>
    </SideBarRightPreviewCard>
  </div>
</template>

<script setup lang="ts">
import DummyData from "./DummyData";

const { defaultTransition } = useTailwindCofing();
const dummyData = DummyData();
const baseImgUrl = (v: string) =>
  `https://static.nowcoder.com/images-nk/oss/creation/creation-${v}-publish.png`;
const imgList = [
  { text: "发动态", img: baseImgUrl("feed") },
  { text: "写文章", img: baseImgUrl("post") },
  { text: "发内推", img: baseImgUrl("career-push") },
];
</script>

<style scoped>
ul li:last-child {
  border-bottom: none;
}
</style>
