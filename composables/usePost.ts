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
      return { data };
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

  const getPostById = withPromiseTryCatch(async (postId: string) => {
    const { data } = await $fetch("/api/post/getPostById", {
      method: "GET",
    });

    console.log(`data:${data}`);

    return data;
  })<Post>;

  return { getPostComments, publishPost, getPostList, getPostById };
};
