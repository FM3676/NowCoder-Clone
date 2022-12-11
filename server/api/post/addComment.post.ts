export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { eneityid, content, rootId, toCommentUserId } = body;
  const myHeaders = new Headers();
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");
  myHeaders.append("Content-Type", "application/json");

  let data = { eneityid, content };

  if (rootId !== -1) data = Object.assign(data, { rootId });
  if (toCommentUserId !== -1) data = Object.assign(data, { toCommentUserId });

  const raw = JSON.stringify(data);

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const result = await fetch(
    "https://mock.apifox.cn/m2/1957011-0-default/51795990",
    requestOptions
  );

  return await result.json();
});
