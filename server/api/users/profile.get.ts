export default defineEventHandler(async (event) => {
  const myHeaders = new Headers();
  myHeaders.append("token", "<token>");
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  //   fetch("http://localhost:8443/user/getUserInfo?id=<id>", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));

  //   const result = await fetch("");
  //   return { result: await result.json() };

  return {
    result: {
      code: 200,
      data: {
        email: "10077@qq.com",
        headerUrl: "http://images.nowcoder.com/head/432t.png",
        id: 196,
        username: "sixday",
      },
      msg: "操作成功",
    },
  };
});
