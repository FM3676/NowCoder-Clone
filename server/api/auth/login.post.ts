export default defineEventHandler(async (event) => {
  const baseURL = useRuntimeConfig().baseURL;
  const body = await readBody(event);
  const myHeaders = new Headers();

  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");
  myHeaders.append("Content-Type", "application/json");

  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid params" })
    );
  }

  const userData = JSON.stringify({
    password,
    username,
  });

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: userData,
    redirect: "follow",
  };

  const result = await fetch(
    "https://mock.apifox.cn/m2/1957011-0-default/50816890",
    requestOptions
  );

  return await result.json()
});
