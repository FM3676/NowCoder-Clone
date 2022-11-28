<template>
  <div class="flex flex-col" :class="defaultTransition">
    <!-- CreateCenter -->
    <SideBarRightPreviewCard
      title="创作中心"
      :module-head="false"
      :bold-tilte="false"
    >
      <div class="flex items-center justify-around py-6">
        <NuxtLink to="/" class="flex flex-col justify-center items-center w-16">
          <img
            src="https://static.nowcoder.com/images-nk/oss/creation/creation-feed-publish.png"
            alt="发动态"
            class="w-12 h-12"
          />
          <p>发动态</p>
        </NuxtLink>
        <NuxtLink to="/" class="flex flex-col justify-center items-center w-16">
          <img
            src="https://static.nowcoder.com/images-nk/oss/creation/creation-post-publish.png"
            alt="写文章"
            class="w-12 h-12"
          />
          <p>写文章</p>
        </NuxtLink>
        <NuxtLink to="/" class="flex flex-col justify-center items-center w-16">
          <img
            src="https://static.nowcoder.com/images-nk/oss/creation/creation-career-push-publish.png"
            alt="发内推"
            class="w-12 h-12"
          />
          <p>发内推</p>
        </NuxtLink>
      </div>
      <div>
        <NuxtLink
          to="/"
          class="bg-green-350 rounded-md text-white w-full block text-sm text-center py-2 mb-3 hover:bg-green-250"
          >进入创作者中心</NuxtLink
        >
      </div>
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
</script>

<style scoped>
ul li:last-child {
  border-bottom: none;
}
</style>
