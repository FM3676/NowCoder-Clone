<template>
  <div class="bg-gray-100">
    <div class="min-h-full pt-14">
      <NavBar @on-open-login-dialog="handleOpenLoginDialog" />
      <slot />
      <!-- Auth Page -->
      <Auth :is-open="authPageOpening" />
    </div>
  </div>
</template>
<script lang="ts" setup>
const authPageOpening = ref<boolean>(false);
const handleOpenLoginDialog = () =>
  (authPageOpening.value = !authPageOpening.value);
</script>
