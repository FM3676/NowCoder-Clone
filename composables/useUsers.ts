import { withPromiseTryCatch } from "./../utils/hooksUtils";
import { UserProfile } from "~~/interfaces/userInterface";
import { Post } from "~~/interfaces/postInterface";

const { useAuthToken } = useAuth();

export default () => {
  /* State To Check Follower Newest Post */
  const useMinTime = () => useState("min_time", () => new Date().valueOf());
  const useOffset = () => useState("offset", () => 0);

  const setMinTime = (time: number) => (useMinTime().value = time);

  const setOffest = (time: number) => (useOffset().value = time);

  const getFollowerNewestPost = withPromiseTryCatch(async () => {
    const { data } = await $fetch("/api/users/myFollowerPost", {
      method: "GET",
      query: {
        token: useAuthToken().value,
        lastId: useMinTime().value,
        offset: useOffset().value,
      },
    });

    setMinTime(data.minTime);
    setOffest(data.offset);

    return { followNewestPosts: data.list, total: data.list.length };
  })<{ followNewestPosts: Post[]; total: number }>;

  const getProfile = withPromiseTryCatch(async (id: number) => {
    const token = useAuthToken();
    const { data } = await $fetch("/api/users/profile", {
      method: "GET",
      query: { id, token: JSON.stringify(token) },
    });
    return data;
  })<UserProfile>;

  const getUserFollowFansCount = withPromiseTryCatch(async (id: number) => {
    const token = useAuthToken();
    const { data } = await $fetch("/api/users/getFollowNum", {
      method: "GET",
      query: { token: JSON.stringify(token), id },
    });

    return data;
  })<{ follower: number; fans: number }>;

  const follow = withPromiseTryCatch(async (id: number, followed: boolean) => {
    const token = useAuthToken();
    const data = await $fetch("/api/users/follow", {
      method: "GET",
      query: { token: JSON.stringify(token), id, followed },
    });
    console.log(data);
    return data;
  });

  const checkFollow = withPromiseTryCatch(async (id: number) => {
    const token = useAuthToken();
    const { data } = await $fetch("/api/users/checkFollow", {
      method: "GET",
      query: { token: JSON.stringify(token), id },
    });
    console.log(data);
    return data;
  });

  return {
    getProfile,
    getFollowerNewestPost,
    useMinTime,
    useOffest: useOffset,
    setMinTime,
    setOffest,
    getUserFollowFansCount,
    follow,
    checkFollow,
  };
};
