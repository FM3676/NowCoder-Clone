<template>
  <li
    class="flex flex-col bg-white p-2 mb-2 rounded-md gap-2 transition-all hover:-translate-y-1 hover:shadow-lg"
  >
    <!-- Head -->
    <div class="flex items-center justify-between">
      <!-- Profile -->
      <div class="flex items-center gap-2">
        <span class="overflow-hidden w-4 h-4 rounded-full cursor-pointer">
          <img
            src="https://images.nowcoder.com/images/20220730/253656…B3B?x-oss-process=image/resize,m_mfit,h_100,w_100"
          />
        </span>
        <p class="text-sm cursor-pointer" :style="profileTextColr">
          {{ props.post.userId }}
        </p>
      </div>
      <!-- Date -->
      <div class="text-gray-300 text-xs self-end">
        {{ props.post.createTime.slice(4) }}
      </div>
    </div>
    <!-- Main -->
    <div class="flex flex-col justify-center gap-2">
      <div class="flex justify-start items-center">
        <NuxtLink :to="`post/${props.post.id}`">
          <h2
            class="text-lmd font-bold text-black cursor-pointer hover:text-green-350"
          >
            {{ props.post.title }}
          </h2>
        </NuxtLink>
      </div>
      <div class="text-gray-300">
        <!-- <img
          class="h-20 w-32 object-cover rounded-md ml-4 float-right"
          src="https://uploadfiles.nowcoder.com/images/20221104/523494833_1667567223082/E2EB97076EF96A4CF672BEE0893B150E?x-oss-process=image/resize,l_280,h_140/format,png"
          alt=""
        /> -->
        <p class="text-sm line-clamp-2 mx-auto">
          {{ props.post.content }}
        </p>
      </div>
    </div>
    <!-- Footer -->
    <div class="flex items-center justify-end text-gray-300 text-sm gap-3">
      <!-- <span class="h-4"
        ><img
          class="w-4 float-left"
          src="https://static.nowcoder.com/images-nk/oss/page/discuss/center/browse.png"
        /></span
      > -->
      <span class="h-4"
        ><img
          class="w-4 float-left"
          src="https://static.nowcoder.com/images-nk/oss/page/discuss/center/comment.png"
        />
        {{ props.post.commentCount }}</span
      >
      <span class="h-4"
        ><img
          class="w-4 float-left"
          src="https://static.nowcoder.com/images-nk/oss/page/discuss/center/like.png"
        />{{ props.post.liked }}</span
      >
    </div>
  </li>
</template>

<script setup lang="ts">
import { Post } from "~~/interfaces/postInterface";

const colorList = [
  "#f34c54",
  "#fc7123",
  "#fc7123",
  "#e8ca2d",
  "#a1a1a1",
  "#42c1a2",
];
const profileTextColr = `color: ${
  colorList[Math.floor(Math.random() * colorList.length)]
} ;`;

const props = defineProps<{ post: Post }>();
</script>

<style scoped></style>
