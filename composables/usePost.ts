import { FirstLevelComment, Post } from "~~/interfaces/postInterface";

export default () => {
  // const getPostComments = (id: string): Promise<FirstLevelComment[]> =>
  //   new Promise(async (resolve, reject) => {
  //     try {
  //       const { data } = await useFetch("/api/post/getCommentList", {
  //         method: "GET",
  //         onResponse({ request, response, options }) {
  //           console.log(response._data);
  //           resolve(response._data.result.data.rows);
  //           // resolve({});
  //         },
  //       });
  //     } catch (error) {
  //       reject(error);
  //     }
  //   });

  const getPostComments = withPromiseTryCatch(
    async (pageNum: number, pageSize: number, entityId: number) => {
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
  )<{comments:FirstLevelComment[],total:number}>;

  // const publishPost = (title: string, content: string) =>
  //   new Promise(async (resolve, reject) => {
  //     try {
  //       const token = useAuth().useAuthToken();
  //       // if (!token.value) reject("No Token!");
  //       const { data } = await useFetch("/api/post/publish", {
  //         method: "POST",
  //         body: { title, content },
  //         onResponse({ request, response, options }) {
  //           console.log(response._data);
  //         },
  //       });
  //       resolve(true);
  //     } catch (error) {
  //       reject(false);
  //     }
  //   });

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

  return { getPostComments, publishPost, getPostList };
};
