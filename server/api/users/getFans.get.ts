export default defineEventHandler(async (event) => {
  const token = event.node.req.headers["authorization"]?.split(" ")[1];
  const query = getQuery(event);
  const { id } = query;
  //   myHeaders.append("token", "<token>");
  //   fetch("http://localhost:8443/follow/list?pageNum=<pageNum>&pageSize=<pageSize>", requestOptions);
  const myHeaders = new Headers();
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const result = await fetch(
    "https://mock.apifox.cn/m2/1957011-0-default/51959704",
    requestOptions
  );

  return await result.json();
});
