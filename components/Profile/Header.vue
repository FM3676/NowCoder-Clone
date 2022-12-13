<template>
  <header
    class="w-screen relative pt-32 mx-0 h-80 min-w-full"
    style="
      background-image: url('https://uploadfiles.nowcoder.com/files/20220630/318889480_1656569616418/lucky.png');
    "
  >
    <!-- Main Profile -->
    <div
      class="rounded-lg profile-card mx-auto h-48 relative z-10"
      style="width: 1200px"
    >
      <span
        class="inline-flex justify-center items-center rounded-full cursor-pointer profile-avatar"
        ><img class="rounded-full object-cover" :src="profile.headerUrl"
      /></span>
      <!-- Name & Fans -->
      <div class="flex pt-12 ml-44 h-24 items-center justify-between">
        <span class="font-bold text-xl">{{ profile.username }}</span>
        <div class="flex items-center">
          <div
            class="h-12 w-28 align-middle text-center text-lg text-gray-600 hover:text-green-350 transition-all cursor-pointer"
            @click="emits('onCheckFollowOrFans', '粉丝')"
          >
            <p>粉丝</p>
            <p>{{ props.fans }}</p>
          </div>
          <div class="h-4 bg-gray-400" style="width: 1px"></div>
          <div
            class="h-12 w-28 align-middle text-center text-lg text-gray-600 hover:text-green-350 transition-all cursor-pointer"
            @click="emits('onCheckFollowOrFans', '关注')"
          >
            <p>关注</p>
            <p>{{ props.follows }}</p>
          </div>
        </div>
      </div>
      <!-- Follow Button -->
      <button
        v-if="!isMineProfilePage"
        @click="handleFollow"
        class="absolute right-6 bottom-8 text-white text-xl rounded-lg py-2 text-center w-44"
        style="background: linear-gradient(135deg, #00dcc2, #00dc93)"
      >
        {{ isFollowed ? "已关注" : "关注" }}
      </button>
    </div>
    <!-- Mask -->
    <div class="mask-bg"></div>
  </header>
</template>

<script setup lang="ts">
import { UserProfile } from "~~/interfaces/userInterface";
const { follow, checkIsFollowed } = useUsers();
const { useAuthUser } = useAuth();
const emits = defineEmits(["onCheckFollowOrFans"]);
const props = defineProps<{
  profile: UserProfile;
  fans: number;
  follows: number;
  id: number;
}>();
const user = useAuthUser();
const isMineProfilePage = ref(true);
const isFollowed = ref(false);
const isHandling = ref(false);

onMounted(async () => {
  isFollowed.value = await checkIsFollowed(props.id);
  isMineProfilePage.value = props.id === user.value.id;
  console.log(user.value.id);
});

const handleFollow = async () => {
  if (isHandling.value) return;
  isHandling.value = true;
  const result = await follow(props.id, isFollowed.value);
  console.log(result);
  if (!result) return;
  isFollowed.value = !isFollowed.value;
  isHandling.value = false;
};
</script>

<style scoped>
.profile-card {
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0.6),
    hsla(0, 0%, 100%, 0.9) 76%,
    #fff
  );
  border-radius: 8px;
  -webkit-clip-path: path(
    "M85 0c18.703 0 35.339 8.853 45.945 22.597.41.53.84 1.132 1.293 1.804A24 24 0 0 0 152.148 35H1188c6.627 0 12 5.373 12 12v169c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V47c0-6.627 5.373-12 12-12h5.857a24 24 0 0 0 19.916-10.608c.478-.712.933-1.345 1.364-1.901C49.747 8.807 66.345 0 85 0Z"
  );
  clip-path: path(
    "M85 0c18.703 0 35.339 8.853 45.945 22.597.41.53.84 1.132 1.293 1.804A24 24 0 0 0 152.148 35H1188c6.627 0 12 5.373 12 12v169c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V47c0-6.627 5.373-12 12-12h5.857a24 24 0 0 0 19.916-10.608c.478-.712.933-1.345 1.364-1.901C49.747 8.807 66.345 0 85 0Z"
  );
  position: relative;
}
.mask-bg {
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 98%, 0),
    hsla(0, 0%, 98%, 0.95) 85%,
    rgb(243 244 246)
  );

  bottom: 0px;
  height: 4rem;
  left: 0;
  position: absolute;
  width: 100%;
}

.profile-avatar {
  cursor: pointer;
  height: 90px;
  left: 40px;
  position: absolute;
  top: 13px;
  width: 90px;
}
.profile-avatar img {
  border-radius: 50%;
  height: 90px;
  -o-object-fit: cover;
  object-fit: cover;
  width: 90px;
}

.profile-username {
  position: relative;
}
</style>
