export default () => {
  const useAuthToken = () => useState<string>("auth_token");
  const useAuthUser = () => useState("auth_user");
  const useAuthLoading = () => useState("auth_loading", () => true);

  const setToken = (newToken: string) => {
    const authToken = useAuthToken();
    authToken.value = newToken;
  };

  const setUser = (newUser: object) => {
    const authUser = useAuthUser();
    authUser.value = newUser;
  };

  const setIsAuthLoading = (value: boolean) => {
    const authLoading = useAuthLoading();
    authLoading.value = value;
  };

  const register = (email: string, password: string, username: string) =>
    new Promise(async (resolve, reject) => {
      try {
        setIsAuthLoading(true);
        const { data } = await useFetch("/api/auth/register", {
          method: "POST",
          body: { email, password, username },
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
      } finally {
        setIsAuthLoading(false);
      }
    });

  const login = (username: string, password: string) =>
    new Promise(async (resolve, reject) => {
      try {
        setIsAuthLoading(true);
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
      } finally {
        setIsAuthLoading(false);
      }
    });
  return {
    useAuthLoading,
    useAuthToken,
    useAuthUser,
    setIsAuthLoading,
    setToken,
    setUser,
    register,
    login,
  };
};
