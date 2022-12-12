import { withPromiseTryCatch } from "./../utils/hooksUtils";
import { UserProfile } from "./../interfaces/userInterface";
export default () => {
  const useAuthToken = () => useState<string>("auth_token");
  const useAuthUser = () => useState<UserProfile>("auth_user");

  const setToken = (newToken: string) => {
    const authToken = useAuthToken();
    authToken.value = newToken;
  };

  const setUser = (newUser: UserProfile) => {
    const authUser = useAuthUser();
    authUser.value = newUser;
  };

  const register = withPromiseTryCatch(
    async (email: string, password: string, username: string) => {
      const { data } = await $fetch("/api/auth/register", {
        method: "POST",
        body: { password, email, username },
      });
      setToken(data.token);
      setUser(data.userInfo);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
      return data;
    }
  );

  const login = withPromiseTryCatch(
    async (username: string, password: string) => {
      const { data } = await $fetch("/api/auth/login", {
        method: "POST",
        body: { username, password },
      });
      setToken(data.token);
      setUser(data.userInfo);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
      return data;
    }
  );

  const logout = withPromiseTryCatch(async () => {
    const { data } = await $fetch("/api/auth/logout", {
      method: "POST",
      body: {
        token: useAuthToken().value,
      },
    });
    setToken("");
    setUser({} as UserProfile);
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    return data;
  });

  return {
    useAuthToken,
    useAuthUser,
    setToken,
    setUser,
    register,
    login,
    logout,
  };
};
