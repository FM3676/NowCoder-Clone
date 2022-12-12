export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { token, lastId, offset } = query;

  const myHeaders = new Headers();
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const result = await fetch(
    "https://mock.apifox.cn/m2/1957011-0-default/53620470",
    requestOptions
  );

  return await result.json();
});
