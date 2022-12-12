<template>
  <div class="bg-gray-100">
    <div class="min-h-screen pt-14">
      <NavBar @on-open-login-dialog="handleOpenLoginDialog" :is-auth="isAuth" />
      <slot />
      <!-- Auth Page -->
      <Auth :is-open="authPageOpening" @close-dialog="handleOpenLoginDialog" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { UserProfile } from "~~/interfaces/userInterface";

const { setToken, setUser, useAuthToken } = useAuth();
const authPageOpening = ref<boolean>(false);
const isAuth = ref(false);
const handleOpenLoginDialog = () =>
  (authPageOpening.value = !authPageOpening.value);
onMounted(() => {
  const user = JSON.parse(localStorage.getItem("userInfo")!);
  const token = localStorage.getItem("token");
  user ? setUser(user) : setUser({} as UserProfile);
  token ? setToken(token) : setToken("");
  isAuth.value = user && token;
});

const token = useAuthToken();

watch(token, () => {
  isAuth.value = !!token.value;
});
</script>
