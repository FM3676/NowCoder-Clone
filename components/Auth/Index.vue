<template>
  <ElDialog v-model="props.isOpen" width="48rem" align-center append-to-body>
    <div class="flex">
      <!-- Left Side -->
      <div
        class="auth-side-bar-bg auth-side-bar-height relative p-12 w-56 flex flex-col justify-center items-center"
      >
        <img
          class="w-32 absolute top-12"
          src="https://static.nowcoder.com/fe/file/logo/1.png"
          alt=""
        />
        <p class="mb-6">微信登陆</p>
        <img
          class="w-full mb-6 transform scale-125"
          src="https://www.nowcoder.com/qrcode/to-pc-code?code=6b97318b91b54d16b5180e87bcc45ab8"
          alt=""
        />
        <p class="text-xs text-center text-gray-400 mb-2">扫码关注【牛客】</p>
        <p class="text-xs text-center text-gray-400">即可登录</p>
      </div>
      <!-- Right Side Main Form -->
      <div class="flex flex-col grow items-center">
        <!-- Switch Mode Button -->
        <div
          class="flex h-10 w-48 p-2 rounded-md relative mt-16 bg-gray-200 justify-between cursor-pointer"
        >
          <span
            class="w-24 flex justify-center items-center z-10"
            :class="[{ active: isRegistering }]"
            @click="changeRegisterOrLogin"
            >注册登录</span
          >
          <span
            class="w-24 flex justify-center items-center z-10"
            :class="[{ active: !isRegistering }]"
            @click="changeRegisterOrLogin"
            >密码登录</span
          >
          <span
            class="switch-button absolute rounded-md bg-white h-8 transition-transform"
            :class="[{ 'switch-button-transform': !isRegistering }]"
          ></span>
        </div>
        <!-- Form -->
        <AuthForm
          @on-submit="handleSubmit"
          :is-registering="isRegistering"
          :is-auth-loading="isAuthLoading"
        />
      </div>
    </div>
  </ElDialog>
</template>

<script setup lang="ts">
import { ElDialog } from "element-plus";
const { register, login } = useAuth();
const props = defineProps<{ isOpen: boolean }>();
const emits = defineEmits(["closeDialog"]);
const isRegistering = ref<boolean>(true);
const isAuthLoading = ref(false);
const changeRegisterOrLogin = () =>
  (isRegistering.value = !isRegistering.value);

const handleSubmit = async (
  email: string,
  password: string,
  username: string
) => {
  if (isAuthLoading.value) return;
  isAuthLoading.value = true;
  const result = isRegistering.value
    ? await register(email, password, username)
    : await login(username, password);
  isAuthLoading.value = false;
  if (result) return emits("closeDialog");
};
</script>

<style scoped>
.auth-side-bar-bg {
  background: rgba(50, 202, 153, 0.05);
}
.auth-side-bar-height {
  height: 32rem;
}

.switch-button {
  width: 5.8rem;
  left: 0.25rem;
  top: 0.25rem;
}
.active {
  color: rgb(91 213 173);
}

.switch-button-transform {
  transform: translateX(92px);
}
</style>
