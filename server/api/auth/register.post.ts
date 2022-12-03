export default defineEventHandler(async (event) => {
  const baseURL = useRuntimeConfig().baseURL;
  const body = await readBody(event);
  const myHeaders = new Headers();

  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");
  myHeaders.append("Content-Type", "application/json");

  const { email, password, username } = body;

  if (!email || !password || !username) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid params" })
    );
  }

  const userData = JSON.stringify({
    email,
    password,
    username,
  });

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: userData,
    redirect: "follow",
  };

  const registerResult = await fetch(
    baseURL + "/user/register",
    requestOptions
  );

  if (registerResult.status !== 200)
    return {
      stautusCode: registerResult.status,
      statusText: registerResult.statusText,
    };

  console.log("registerResult",await registerResult.json());

  // Register succeed, login
  requestOptions.body = JSON.stringify({
    password,
    username,
  });


  const loginResult = await fetch(baseURL + "/user/login", requestOptions);
  
  return { loginResult: await loginResult.json() };
});
