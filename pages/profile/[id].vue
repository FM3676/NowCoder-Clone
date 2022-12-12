<template>
  <div>
    <NuxtLayout name="basic-nav">
      <ProfileHeader :profile="profile!" />
      <div
        class="grid grid-cols-12 mx-auto gap-5 pt-4 bg-gray-100"
        style="width: 1200px"
      >
        <main class="col-span-9">
          <div class="rounded-lg p-4 bg-white">
            <ProfileUsersPost
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
const profile = ref({} as UserProfile);
const postList = ref<{
  posts: Post[];
  total: number;
}>();
onMounted(async () => {
  profile.value = await getProfile(parseInt(route.params.id as string));
  postList.value = await getPostList(1, 10, profile.value.id);
});
</script>

<style scoped></style>
