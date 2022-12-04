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

  return { getPostComments };
};
