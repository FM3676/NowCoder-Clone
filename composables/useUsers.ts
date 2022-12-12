import { UserProfile } from "~~/interfaces/userInterface";

const { useAuthToken } = useAuth();

export default () => {
  const getProfile = withPromiseTryCatch(async (id: number) => {
    const token = useAuthToken();
    const { data } = await $fetch("/api/users/profile", {
      method: "GET",
      query: { id, token },
    });
    return data;
  })<UserProfile>;
  return { getProfile };
};
