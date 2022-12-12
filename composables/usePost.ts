import { FirstLevelComment, Post } from "~~/interfaces/postInterface";

export default () => {
  const getPostComments = withPromiseTryCatch(
    async (pageNum: number, pageSize: number, entityId: string) => {
      const { data } = await $fetch("/api/post/getCommentList", {
        method: "GET",
        query: {
          pageNum,
          pageSize,
          entityId,
        },
      });
      return {
        comments: data.rows,
        total: data.total,
      };
    }
  )<{ comments: FirstLevelComment[]; total: number }>;

  const publishPost = withPromiseTryCatch(
    async (title: string, content: string) => {
      const token = useAuth().useAuthToken();
      // if (!token.value) reject("No Token!");
      const { data } = await $fetch("/api/post/publish", {
        method: "POST",
        body: { title, content },
      });
      return true;
    }
  );

  const getPostList = withPromiseTryCatch(
    async (pageNum: number, pageSize: number, userId?: number) => {
      const { data } = await $fetch("/api/post/getPosts", { method: "GET" });
      return {
        posts: data.rows,
        total: data.total,
      };
    }
  )<{ posts: Post[]; total: number }>;

  const getHostPostList = withPromiseTryCatch(
    async (pageNum: number, pageSize: number) => {
      const { data } = await $fetch("/api/post/getHostDisscussPost", {
        method: "GET",
      });
      return {
        posts: data.rows,
        total: data.total,
      };
    }
  )<{ posts: Post[]; total: number }>;

  const getPostById = withPromiseTryCatch(async (postId: string) => {
    const { data } = await $fetch("/api/post/getPostById", {
      method: "GET",
    });

    return data;
  })<Post>;

  const addComment = withPromiseTryCatch(
    async (eneityid, content, rootId = -1, toCommentUserId = -1) => {
      const { data } = await $fetch("/api/post/addComment", {
        method: "POST",
        body: { eneityid, content, rootId, toCommentUserId },
      });

      return true;
    }
  );

  const likeThePost = withPromiseTryCatch(async (eneityId: number) => {
    const token = useAuth().useAuthToken();
    const { data } = await $fetch("/api/post/like", {
      method: "GET",
      query: { eneityId, token },
    });

    return data;
  })<number>;

  const searchPost = withPromiseTryCatch(
    async (pageNum: number, pageSize: number, searchContent: string) => {
      const { data } = await $fetch("/api/post/search", {
        method: "GET",
        query: { pageNum, pageSize, searchContent },
      });
      console.log({
        posts: data.rows,
        total: data.total,
      });

      return {
        posts: data,
        total: data.length,
      };
    }
  )<{ posts: Post[]; total: number }>;

  return {
    getPostComments,
    publishPost,
    getPostList,
    getPostById,
    addComment,
    likeThePost,
    getHostPostList,
    searchPost,
  };
};
