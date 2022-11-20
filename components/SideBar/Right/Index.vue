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
          class="bg-green-350 rounded-md text-white w-full block text-sm text-center py-2 hover:bg-green-250"
          >进入创作者中心</NuxtLink
        >
      </div>
    </SideBarRightPreviewCard>
    <!-- Billboard -->
    <SideBarRightPreviewCard
      v-for="card in dummyData"
      :key="card.title"
      :title="card.title"
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
const { defaultTransition } = useTailwindCofing();
const dummyCreateCenterData = [
  {
    title: "发动态",
    img: "https://static.nowcoder.com/images-nk/oss/creation/creation-feed-publish.png",
  },
  {
    title: "写文章",
    img: "https://static.nowcoder.com/images-nk/oss/creation/creation-post-publish.png",
  },
  {
    title: "发内推",
    img: "https://static.nowcoder.com/images-nk/oss/creation/creation-career-push-publish.png",
  },
];
const dummyData = [
  {
    title: "时事热点",
    sub: [
      {
        title: "笔试成绩不好也能获得面试机会吗",
        link: "",
        Date: "10-15 22:01",
        repliesCount: 15,
      },
      {
        title: "笔试成绩不好也能获得面试机会吗",
        link: "",
        Date: "10-15 22:01",
        repliesCount: 15,
      },
    ],
  },
  {
    title: "时事热点",
    sub: [
      {
        title: "笔试成绩不好也能获得面试机会吗",
        link: "",
        Date: "10-15 22:01",
        repliesCount: 15,
      },
    ],
  },
  {
    title: "时事热点",
    sub: [
      {
        title: "笔试成绩不好也能获得面试机会吗",
        link: "",
        Date: "10-15 22:01",
        repliesCount: 15,
      },
    ],
  },
];
</script>
