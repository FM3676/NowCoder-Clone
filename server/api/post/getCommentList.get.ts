export default defineEventHandler(async (event) => {
  const baseURL = useRuntimeConfig().baseURL;
  const myHeaders = new Headers();
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");
  myHeaders.append("Accept", "*/*");
  myHeaders.append("Host", "mock.apifox.cn");
  myHeaders.append("Connection", "keep-alive");

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  //   const result = await fetch(
  //     "https://mock.apifox.cn/m2/1957011-0-default/51801878",
  //     requestOptions
  //   );

  //   return { result: await result.json() };

  return {
    result: {
      code: 200,
      data: {
        rows: [
          {
            children: [
              {
                content: "这是评论的子评论",
                createBy: 196,
                createTime: "2022-11-28 15:59:35",
                entityId: 303,
                id: 32,
                rootId: 31,
                toCommentId: -1,
                toCommentUserId: 196,
                toCommentUserName: "jerryLin",
                username: "jerryLin",
              },
              {
                content: "这是评论的子评论",
                createBy: 196,
                createTime: "2022-11-28 22:22:20",
                id: 33,
                rootId: 31,
                toCommentId: -1,
                toCommentUserId: 196,
                toCommentUserName: "jerryLin",
                username: "jerryLin",
              },
            ],
            content: "这是一条评论",
            createBy: 196,
            createTime: "2022-11-28 15:56:45",
            entityId: 303,
            id: 31,
            rootId: -1,
            toCommentId: -1,
            toCommentUserId: -1,
            username: "jerryLin",
          },
        ],
        total: 1,
      },
      msg: "操作成功",
    },
  };
});
