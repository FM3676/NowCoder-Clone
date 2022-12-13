export default defineEventHandler(async (event) => {
  const endPoints = [
    /\/api\/post\/addComment/,
    /\/api\/post\/like/,
    /\/api\/post\/publish/,
    /\/api\/users\/follow/,
  ];
  const isMatch = endPoints.some((endpoint) => {
    return endpoint.test(event.node.req.url!);
  });
  if (!isMatch) return;

  const token = event.req.headers["authorization"]?.split(" ")[1];

  if (!token)
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "Unauthorized" })
    );
});
