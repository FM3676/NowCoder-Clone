export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { token } = body;

  const myHeaders = new Headers();
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  const result = await fetch(
    "https://mock.apifox.cn/m2/1957011-0-default/51080928",
    requestOptions
  );

  return await result.json();
});
