<template>
  <div class="w-screen bg-white fixed top-0 h-14 z-50">
    <nav class="flex h-full px-8 mx-auto w-xl justify-start items-center">
      <!-- LOGO -->
      <picture class="h-6">
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
          :active="index === activeMenuItem"
        />
      </ul>
      <!-- SearchBar -->
      <NavBarSearchBar />
      <!-- Right ChangeABLE Part -->
      <NavBarNotAuthRightPart
        v-if="!isAuth"
        @on-open-login-dialog="emits('onOpenLoginDialog')"
      />
      <NavBarIsAuthRightPart v-else />
    </nav>
  </div>
</template>

<script setup lang="ts">
import DummyData from "./DummyData";
const emits = defineEmits(["onOpenLoginDialog"]);
const options = DummyData();
const isAuth = ref(false);
const activeMenuItem = ref(0);
</script>
