<template>
  <div>
    <NuxtLayout name="basic-nav">
      <ProfileHeader :profile="profile!" />
      <div
        class="grid grid-cols-12 mx-auto gap-5 pt-4 bg-gray-100"
        style="width: 1200px"
      >
        <main class="col-span-9">
          <div class="rounded-lg py-4 px-8 bg-white">
            <ul
              class="flex gap-4 text-gray-300 text-lg mb-4 relative transition-all"
            >
              <li
                v-for="(item, index) in ['帖子', '动态']"
                :key="item"
                @click="changeLookingFor(index)"
                :class="[{ 'text-green-350': index === lookingFor }]"
                class="hover:text-green-350 cursor-pointer text-center w-12"
              >
                {{ item }}
              </li>
              <div
                class="absolute h-1 w-6 rounded-full bg-green-350 left-3 top-8 transition-all"
                :style="{ transform: `translateX(${4 * lookingFor}rem)` }"
              ></div>
            </ul>
            <UISpinner v-if="isLoading" class="relative left-1/2" />

            <ProfileUsersPost
              v-if="!isLoading"
              :profile="profile!"
              :posts="postList?.posts!"
              :total="postList?.total!"
            />
          </div>
        </main>
        <!-- Right Sidebar -->
        <aside class="col-span-3">
          <div class="sticky top-16">
            <SideBarRight />
          </div>
        </aside>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { Post } from "~~/interfaces/postInterface";
import { UserProfile } from "~~/interfaces/userInterface";

definePageMeta({
  layout: "basic-nav",
});
const route = useRoute();
const { getProfile } = useUsers();
const { getPostList } = usePost();
const lookingFor = ref(0);
const isLoading = ref(true);
const profile = ref({} as UserProfile);
const postList = ref<{
  posts: Post[];
  total: number;
}>();

const changeLookingFor = (n: number) => {
  lookingFor.value = n;
};
onMounted(async () => {
  isLoading.value = true;
  profile.value = await getProfile(parseInt(route.params.id as string));
  postList.value = await getPostList(1, 10, profile.value.id);
  isLoading.value = false;
});
</script>

<style scoped></style>
