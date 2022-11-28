<template>
  <li class="flex flex-col bg-white p-2 rounded-md gap-2 transition-all hover:-translate-y-1 hover:shadow-lg">
    <!-- Head -->
    <div class="flex items-center justify-between">
      <!-- Profile -->
      <div class="flex items-center gap-2">
        <span class="overflow-hidden w-4 h-4 rounded-full cursor-pointer">
          <img
            src="https://images.nowcoder.com/images/20220730/253656…B3B?x-oss-process=image/resize,m_mfit,h_100,w_100"
          />
        </span>
        <p class="text-sm cursor-pointer" :style="profileTextColr">牛客2132132132</p>
      </div>
      <!-- Date -->
      <div class="text-gray-300 text-xs self-end">11-24 15:35</div>
    </div>
    <!-- Main -->
    <div class="flex flex-col justify-center gap-2">
      <div class="flex justify-start items-center">
        <h2 class="text-lmd font-bold text-black cursor-pointer hover:text-green-350">all in 成功</h2>
      </div>
      <div class="text-gray-300">
        <img
          class="h-20 w-32 object-cover rounded-md ml-4 float-right"
          src="https://uploadfiles.nowcoder.com/images/20221104/523494833_1667567223082/E2EB97076EF96A4CF672BEE0893B150E?x-oss-process=image/resize,l_280,h_140/format,png"
          alt=""
        />
        <p class="text-sm line-clamp-2 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem mollitia
          quo harum porro. Reiciendis molestiae perferendis voluptates tempora
          quisquam repellat at labore, eos ratione ex tenetur minima sint!
          Facere, aliquam.
        </p>
      </div>
    </div>
    <!-- Footer -->
    <div class="flex items-center justify-end text-gray-300 text-sm gap-3">
      <span class="h-4"
        ><img
          class="w-4 float-left"
          src="https://static.nowcoder.com/images-nk/oss/page/discuss/center/browse.png"
        />123</span
      >
      <span class="h-4"
        ><img
          class="w-4 float-left"
          src="https://static.nowcoder.com/images-nk/oss/page/discuss/center/comment.png"
        />123</span
      >
      <span class="h-4"
        ><img
          class="w-4 float-left"
          src="https://static.nowcoder.com/images-nk/oss/page/discuss/center/like.png"
        />123</span
      >
    </div>
  </li>
</template>

<script setup lang="ts">
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
</script>

<style scoped></style>
