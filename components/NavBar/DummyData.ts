export default (): {
  title: string;
  sub?: string[];
}[] => [
  { title: "首页" },
  {
    title: "题库",
    sub: ["公司真题", "专项练习", "面试题库", "在线编程"],
  },
  { title: "面试", sub: ["AI模拟面试", "面经汇总"] },
  { title: "学习", sub: ["课程", "课程", "课程"] },
  { title: "求职" },
  { title: "讨论区", sub: ["课程", "课程"] },
  { title: "发现", sub: ["课程", "课程"] },
];
