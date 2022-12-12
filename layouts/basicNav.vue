<template>
  <div class="bg-gray-100">
    <div class="min-h-screen pt-14">
      <NavBar @on-open-login-dialog="handleOpenLoginDialog" />
      <slot />
      <!-- Auth Page -->
      <Auth :is-open="authPageOpening" @close-dialog="handleOpenLoginDialog" />
    </div>
  </div>
</template>
<script lang="ts" setup>
const authPageOpening = ref<boolean>(false);
const handleOpenLoginDialog = () =>
  (authPageOpening.value = !authPageOpening.value);
</script>
