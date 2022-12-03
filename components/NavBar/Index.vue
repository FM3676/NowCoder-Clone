<template>
  <div class="w-full bg-white fixed top-0 h-14 z-50">
    <nav class="flex h-full px-6 mx-auto w-xl justify-start items-center">
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
      <NavBarIsAuthRightPart v-if="!isAuth" />
      <NavBarNotAuthRightPart
        v-else
        @on-open-login-dialog="emits('onOpenLoginDialog')"
      />
    </nav>
  </div>
</template>

<script setup lang="ts">
import DummyData from "./DummyData";
const emits = defineEmits(["onOpenLoginDialog"]);
const options = DummyData();
const { useAuthUser } = useAuth();
const user = useAuthUser();
const isAuth = ref(!!user);
const activeMenuItem = ref(0);
</script>
