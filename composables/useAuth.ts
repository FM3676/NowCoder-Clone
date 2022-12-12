export default () => {
  const useAuthToken = () => useState<string>("auth_token");
  const useAuthUser = () => useState("auth_user");

  const setToken = (newToken: string) => {
    const authToken = useAuthToken();
    authToken.value = newToken;
  };

  const setUser = (newUser: object) => {
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
      return data;
    }
  );

  const login = (username: string, password: string) =>
    new Promise(async (resolve, reject) => {
      try {
        const { data } = await useFetch("/api/auth/login", {
          method: "POST",
          body: { username, password },
          onResponse({ request, response, options }) {
            // Process the response data
            setToken(response._data.loginResult.data.token);
            setUser({ user: { username } });
            localStorage.setItem(
              "token",
              response._data.loginResult.data.token
            );
          },
        });
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  return {
    useAuthToken,
    useAuthUser,
    setToken,
    setUser,
    register,
    login,
  };
};
