import { UserProfile } from "~~/interfaces/userInterface";

const { useAuthToken } = useAuth();

export default () => {
  const getProfile = (id: number, selfProfile: boolean):Promise<UserProfile> =>
    new Promise(async (resolve, reject) => {
      try {
        const token = selfProfile ? null : useAuthToken().value;
        const { data } = await useFetch("/api/users/profile", {
          method: "GET",
          onResponse({ request, response, options }) {
            resolve(response._data.result.data);
          },
        });
      } catch (error) {
        reject(error);
      }
    });
  return { getProfile };
};
