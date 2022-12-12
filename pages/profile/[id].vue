<template>
  <div>
    <NuxtLayout name="basic-nav">
      <ProfileHeader
        :profile="profile!"
        :fans="followAndFansCount.fans"
        :follows="followAndFansCount.follower"
        :id="queryId"
      />
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
            <!-- MyPost -->
            <ProfileUsersPost
              v-if="!isLoading && lookingFor === 0"
              :profile="profile!"
              :posts="postList?.posts!"
              :total="postList?.total!"
            />
            <!-- Follow Newest Post -->
            <div v-if="!isLoading && lookingFor === 1">
              <MainSectionItem
                v-for="item in followNewestPost?.followNewestPosts"
                :key="item.createTime"
                :post="item"
              />
            </div>
            <p class="text-center text-sm text-gray-400">暂无更多内容</p>
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
const queryId = parseInt(route.params.id as string);
const { getProfile, getFollowerNewestPost, getUserFollowFansCount } =
  useUsers();
const { getPostList } = usePost();
const lookingFor = ref(0);
const isLoading = ref(true);
const followAndFansCount = ref(
  {} as {
    follower: number;
    fans: number;
  }
);
let profile = ref({} as UserProfile);
const postList = ref<{
  posts: Post[];
  total: number;
}>();
const followNewestPost = ref<{ followNewestPosts: Post[]; total: number }>();

const changeLookingFor = async (n: number) => {
  lookingFor.value = n;
  if (followNewestPost.value) return;
  handleGetFollowerNewPost();
};

const handleGetFollowerNewPost = async () => {
  isLoading.value = true;
  followNewestPost.value = await getFollowerNewestPost();
  isLoading.value = false;
};

onMounted(async () => {
  isLoading.value = true;
  profile.value = await getProfile(queryId);
  postList.value = await getPostList(1, 10, profile.value.id);
  followAndFansCount.value = await getUserFollowFansCount(queryId);
  isLoading.value = false;
});
</script>

<style scoped></style>
