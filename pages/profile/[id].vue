<template>
  <div>
    <NuxtLayout name="basic-nav">
      <ProfileHeader :profile="profile!" />
      <div
        class="grid grid-cols-12 mx-auto gap-5 pt-4 bg-gray-100"
        style="width: 1200px"
      >
        <main class="col-span-9">
          <ProfileUsersPost :profile="profile!" />
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
import { UserProfile } from "~~/interfaces/userInterface";

definePageMeta({
  layout: "basic-nav",
});
const route = useRoute();
const { getProfile } = useUsers();
const profile = ref<UserProfile>({} as UserProfile);
onMounted(() => {
  getProfile(parseInt(route.params.id as string), true).then(
    (res) => (profile.value = res)
  );
  console.log(profile);
});
</script>

<style scoped></style>
