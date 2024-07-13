const sidebarCollapsed: boolean = true;

export const BlogData = [
  { text: "概述", link: "/blog/blog.md", items: [] },
  // {
  //   text: "Javascript",
  //   items: [
  //     { text: "原生 AJAX 的异步请求", link: "/blog/js-ajax.md", time: "2020-07-24" },
  //     { text: "浏览器对象模型 BOM", link: "/blog/js-bom.md", time: "2021-01-29" },
  //     { text: "Canvas 学习笔记", link: "/blog/js-canvas.md", time: "2021-03-26" },
  //     { text: "程序命名公式及规范", link: "/blog/js-standard.md", time: "2021-03-29" },
  //     { text: "touch 触摸事件以及常用触摸功能", link: "/blog/js-touch.md", time: "2021-07-18" },
  //     { text: "自封装常用的工具函数", link: "/blog/js-fun.md", time: "2023-05-11" },
  //   ],
  // },
  // {
  //   text: "Css",
  //   items: [
  //     { text: "元素水平垂直居中的六种方式", link: "/blog/css-center.md", time: "2020-08-28" },
  //     { text: "CSS 中实现隐藏", link: "/blog/css-hidden.md", time: "2020-08-28" },
  //     { text: "浮动清除的四大主要方式", link: "/blog/css-clear-float.md", time: "2020-12-23" },
  //     { text: "标准盒模型与怪异盒模型的区别", link: "/blog/css-box-sizing.md", time: "2020-12-24" },
  //     { text: "Sass 的四种编译方式", link: "/blog/css-scss-compile.md", time: "2021-02-21" },
  //     { text: "Sass 动态转换单位", link: "/blog/css-scss-unit.md", time: "2021-02-23" },
  //     { text: "CSS Float 浮动布局", link: "/blog/css-float.md", time: "2021-07-13" },
  //     { text: "CSS Position 定位布局", link: "/blog/css-position.md", time: "2021-07-13" },
  //     { text: "CSS Flex 弹性布局", link: "/blog/css-flex.md", time: "2021-07-13" },
  //     { text: "CSS Grid 网格布局【待】", link: "/blog/css-grid.md", time: "2021-07-13" },
  //     { text: "CSS3 转换过渡动画", link: "/blog/css-animation.md", time: "2021-08-03" },
  //   ],
  // },
  // {
  //   text: "微信小程序",
  //   items: [
  //     {
  //       text: "自定义小程序 navigationBar 的高度，以及避免设备系统不同产生不兼容",
  //       link: "/blog/program-navigation-bar-height.md",
  //       time: "2021-04-14",
  //     },
  //     { text: "微信小程序中实现定位以及逆地址解析", link: "/blog/program-position.md", time: "2021-12-30" },
  //     { text: "微信小程序解析 markdown", link: "/blog/program-markdown.md", time: "2023-04-30" },
  //     { text: "微信小程序之分享转发", link: "/blog/program-share.md", time: "2023-04-30" },
  //     { text: "微信小程序之数据通讯", link: "/blog/program-datacom.md", time: "2023-06-14" },
  //   ],
  // },
  // {
  //   text: "前端算法",
  //   items: [{ text: "加密算法的认识及常用加密算法", link: "/blog/algorithm-encryption.md", time: "2021-05-20" }],
  // },
  // {
  //   text: "实际开发",
  //   items: [
  //     { text: "html2canvas 实现截图附上模糊处理方案", link: "/blog/example-html2canvas.md", time: "2021-02-07" },
  //     { text: "audio 自动播放产生的困扰解决方案", link: "/blog/example-audio.md", time: "2021-02-20" },
  //     { text: "页面锚点快速定位跳转", link: "/blog/example-anchor.md", time: "2021-02-25" },
  //     { text: "获取当前标签页地址栏指定参数", link: "/blog/example-url-param.md", time: "2021-05-12" },
  //     { text: "将指定内容复制到剪切板", link: "/blog/example-shear.md", time: "2021-05-12" },
  //     {
  //       text: "获取当前设备的类型，以及是否为微信内置浏览器",
  //       link: "/blog/example-device-type.md",
  //       time: "2021-05-29",
  //     },
  //     { text: "drawImage 绘制多张图片时层次顺序错乱", link: "/blog/example-draw-image.md", time: "2021-07-18" },
  //     {
  //       text: "计算一维数组、一维数组对象指定属性的平均值 getAvg",
  //       link: "/blog/example-get-avg.md",
  //       time: "2021-10-17",
  //     },
  //     { text: "日期倒计时计算 countdown", link: "/blog/example-get-countdown.md", time: "2021-10-17" },
  //     { text: "关于 IOS 移动设备常见的触控问题以及解决方案", link: "/blog/example-ios-touch.md", time: "2022-03-25" },
  //   ],
  // },
  // {
  //   text: "插件笔记",
  //   items: [
  //     { text: "PreloadJS 预加载及实现进度加载效果", link: "/blog/js-preload.md", time: "2021-02-23" },
  //     { text: "Swiper 实现指定的 slide 显示位置", link: "/blog/js-swiper-to.md", time: "2021-03-22" },
  //     { text: "Nuxt 填坑集合（面向实际开发解决方案）", link: "/blog/js-nuxt.md", time: "2022-02-13" },
  //     { text: "Vue-export2excel 导出表格", link: "/blog/js-vue-export2excel.md", time: "2022-04-21" },
  //     { text: "PannellumJS 快速搭建属于你的全景查看器", link: "/blog/js-pannellum.md", time: "2022-08-07" },
  //     { text: "SwiperJS 入门及实现常见的轮播效果", link: "/blog/js-swiper.md", time: "2022-12-18" },
  //   ],
  // },
  // {
  //   text: "其它",
  //   items: [
  //     { text: "腾讯云服务器购买以及部署", link: "/blog/tencent-cloud-server.md", time: "2021-03-14" },
  //     { text: "ESLint 语法检验工具的使用", link: "/blog/plugin-eslint.md", time: "2021-07-17" },
  //     { text: "Prettier 一个固执的代码格式化程序", link: "/blog/plugin-prettier.md", time: "2021-07-17" },
  //     { text: "常用的 git 命令总结", link: "/blog/git.md", time: "2021-11-23" },
  //     { text: "关于将前端项目部署到 Linux", link: "/blog/nginx.md", time: "2023-09-26" },
  //     { text: "Vitepress 实战应用", link: "/blog/vue-vitepress.md", time: "2023-01-01" },
  //     { text: "前端工程化之 Webpack", link: "/blog/plugin-webpack.md", time: "2024-04-19" },
  //     { text: "前端工程化之 Vite", link: "/blog/plugin-vite.md", time: "2024-04-19" },
  //     { text: "Node 学习笔记", link: "/blog/plugin-node.md", time: "2024-04-26" },
  //   ],
  // },
];

export const navBlog: any = (() => {
  const D = JSON.parse(JSON.stringify(BlogData));
  const data: Array<Object> = [];

  D.forEach((item: any) => {
    let items = item["items"];
    data.push({ text: item["text"], link: item["link"] || items[items.length - 1]["link"] });
  });
  return data;
})();

export const sidebarBlog: any = (() => {
  // 数据作用域隔断处理
  const D = JSON.parse(JSON.stringify(BlogData));
  const data: Array<Object> = [];

  D.forEach((item: any) => {
    data.push({ ...item, collapsed: sidebarCollapsed });
  });
  return data;
})();
