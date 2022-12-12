export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { token, id } = query;

  // const myHeaders = new Headers();
  // myHeaders.append("token", "<token>");

  // fetch("http://localhost:8443/follow/followNum?id=<id>", requestOptions)
  const myHeaders = new Headers();
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");
  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const result = await fetch(
    "https://mock.apifox.cn/m2/1957011-0-default/54417914",
    requestOptions
  );

  return await result.json();
});
