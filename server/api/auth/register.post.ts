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

  const registerRawBody = JSON.stringify({ email, password, username });

  const registerRequestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: registerRawBody,
    redirect: "follow",
  };

  // Register First
  const registerResult = await fetch(
    "https://mock.apifox.cn/m2/1957011-0-default/50350710",
    registerRequestOptions
  );

  if (!registerResult)
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Fail to register" })
    );

  // After Register, login with this account

  const loginRawBody = JSON.stringify({ username, password });
  const loginRequestOption: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: loginRawBody,
    redirect: "follow",
  };

  const loginResult = await fetch(
    "https://mock.apifox.cn/m2/1957011-0-default/50816890",
    loginRequestOption
  );

  return await loginResult.json();
});
