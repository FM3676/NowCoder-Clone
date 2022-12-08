import { FirstLevelComment } from "~~/interfaces/postInterface";

export default () => {
  const getPostComments = (id: string): Promise<FirstLevelComment[]> =>
    new Promise(async (resolve, reject) => {
      try {
        const { data } = await useFetch("/api/post/getCommentList", {
          method: "GET",
          onResponse({ request, response, options }) {
            console.log(response._data);
            resolve(response._data.result.data.rows);
            // resolve({});
          },
        });
      } catch (error) {
        reject(error);
      }
    });
  const publishPost = (title: string, content: string) =>
    new Promise(async (resolve, reject) => {
      const token = useAuth().useAuthToken();
      try {
        // if (!token.value) reject("No Token!");
        const { data } = await useFetch("/api/post/publish", {
          method: "POST",
          body: { title, content },
          onResponse({ request, response, options }) {
            console.log(response._data);
          },
        });
        resolve(true);
      } catch (error) {
        reject(false);
      }
    });

  return { getPostComments, publishPost };
};
