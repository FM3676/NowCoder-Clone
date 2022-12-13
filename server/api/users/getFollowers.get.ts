export default defineEventHandler(async (event) => {
  const token = event.node.req.headers["authorization"]?.split(" ")[1];
  //   myHeaders.append("token", "<token>");
  //   fetch("http://localhost:8443/follow/followeeList?pageNum=<pageNum>&pageSize=<pageSize>", requestOptions);
  const myHeaders = new Headers();
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const result = await fetch(
    "https://mock.apifox.cn/m2/1957011-0-default/51959807",
    requestOptions
  );

  return await result.json();
});
