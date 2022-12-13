<template>
  <div class="w-full bg-white fixed top-0 h-14 z-50 shadow-md">
    <nav class="flex h-full px-6 mx-auto w-xl justify-start items-center relative">
      <!-- LOGO -->
      <picture class="h-6" @click="backToIndex">
        <img
          class="h-full cursor-pointer"
          src="https://static.nowcoder.com/fe/file/logo/1.png"
          alt="Logo"
        />
      </picture>
      <!-- Menu -->
      <ul class="h-full flex ml-8">
        <NavBarMenuItem
          v-for="(item, index) in options"
          :title="item.title"
          :sub="item.sub"
          :key="item.title"
          :active="index === 5"
        />
      </ul>
      <!-- SearchBar -->
      <NavBarSearchBar />
      <!-- Right ChangeABLE Part -->
      <NavBarIsAuthRightPart v-if="isAuth" />
      <NavBarNotAuthRightPart
        v-else
        @on-open-login-dialog="emits('onOpenLoginDialog')"
      />
    </nav>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(["onOpenLoginDialog"]);
const props = defineProps<{ isAuth: boolean }>();
const options = [
  { title: "首页" },
  {
    title: "题库",
    sub: ["公司真题", "专项练习", "面试题库", "在线编程"],
  },
  { title: "面试", sub: ["AI模拟面试", "面经汇总"] },
  { title: "学习", sub: ["课程", "课程", "课程"] },
  { title: "求职" },
  { title: "讨论区", sub: ["课程", "课程"] },
  { title: "发现", sub: ["课程", "课程"] },
];

const backToIndex = () => {
  useRouter().push({ path: "/" });
};
</script>
