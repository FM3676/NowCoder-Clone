export default defineEventHandler(async (event) => {
  const token = event.node.req.headers["authorization"]?.split(" ")[1];
  const myHeaders = new Headers();
  //   myHeaders.append("token", "<token>");
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");
  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  //   fetch("http://localhost:8443/message/getLatestNotice", requestOptions);

  const result = await fetch(
    "https://mock.apifox.cn/m2/1957011-0-default/52300848",
    requestOptions
  );

  return await result.json();
});
