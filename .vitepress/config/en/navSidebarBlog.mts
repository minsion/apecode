const sidebarCollapsed: boolean = true;

export const BlogData = [
  { text: "Overview", link: "/en/blog/blog.md", items: [] },
  // {
  //   text: "Javascript",
  //   items: [
  //     {text: "Native AJAX asynchronous request", link: "/en/blog/js-ajax.md", time: "2020-07-24" },
  //     {text: "Browser Object Model BOM", link: "/blog/js-bom.md", time: "2021-01-29" },
  //     {text: "Canvas learning notes", link: "/blog/js-canvas.md", time: "2021-03-26" },
  //     {text: "Program naming formula and specifications", link: "/blog/js-standard.md", time: "2021-03-29" },
  //     {text: "touch touch events and common touch functions", link: "/blog/js-touch.md", time: "2021-07-18" },
  //     { text: "Self-encapsulated commonly used tool functions", link: "/en/blog/js-fun.md", time: "2023-05-11" },
  //   ],
  // },
  // {
  // text: "Css",
  // items: [
  //   { text: "Six ways to center elements horizontally and vertically", link: "/blog/css-center.md", time: "2020-08-28" },
  //   { text: "Hide in CSS", link: "/blog/css-hidden.md", time: "2020-08-28" },
  //   { text: "Four main ways to clear floats", link: "/blog/css-clear-float.md", time: "2020-12-23" },
  //   { text: "The difference between the standard box model and the weird box model", link: "/blog/css-box-sizing.md", time: "2020-12-24" },
  //   { text: "Four ways to compile Sass", link: "/blog/css-scss-compile.md", time: "2021-02-21" },
  //   { text: "Sass dynamic conversion unit", link: "/blog/css-scss-unit.md", time: "2021-02-23" },
  //   { text: "CSS Float floating layout", link: "/blog/css-float.md", time: "2021-07-13" },
  //   { text: "CSS Position positioning layout", link: "/blog/css-position.md", time: "2021-07-13" },
  //   { text: "CSS Flex Flexible Layout", link: "/blog/css-flex.md", time: "2021-07-13" },
  //   { text: "CSS Grid Grid Layout [To be released]", link: "/blog/css-grid.md", time: "2021-07-13" },
  //   { text: "CSS3 Transition Animation", link: "/en/blog/css-animation.md", time: "2021-08-03" },
  // ],
  // },
  // {
  // text: "WeChat Mini Program",
  // items: [
  //   {
  //     text: "Customize the height of the navigationBar of the mini program and avoid incompatibility between different device systems",
  //     link: "/blog/program-navigation-bar-height.md",
  //     time: "2021-04-14",
  //   },
  //   { text: "Implementing positioning and reverse address resolution in WeChat Mini Program", link: "/blog/program-position.md", time: "2021-12-30" },
  //   { text: "WeChat applet analysis markdown", link: "/blog/program-markdown.md", time: "2023-04-30" },
  //   { text: "WeChat applet sharing and forwarding", link: "/blog/program-share.md", time: "2023-04-30" },
  //   { text: "WeChat applet data communication", link: "/blog/program-datacom.md", time: "2023-06-14" },
  // ],
  // },
  // {
  // text: "Front-end algorithm",
  // items: [{ text: "Knowledge of encryption algorithms and commonly used encryption algorithms", link: "/blog/algorithm-encryption.md", time: "2021-05-20" }],
  // },
  // {
  // text: "Actual development",
  // items: [
  //   { text: "html2canvas screenshot with blur processing solution", link: "/blog/example-html2canvas.md", time: "2021-02-07" },
  //   { text: "audio autoplay troubleshooting solution", link: "/blog/example-audio.md", time: "2021-02-20" },
  //   { text: "page anchor quick positioning jump", link: "/blog/example-anchor.md", time: "2021-02-25" },
  //   { text: "get the current tab address bar specified parameters", link: "/blog/example-url-param.md", time: "2021-05-12" },
  //   { text: "copy the specified content to the clipboard", link: "/blog/example-shear.md", time: "2021-05-12" },
  //   {
  //   text: "Get the type of the current device and whether it is the built-in browser of WeChat",
  //   link: "/blog/example-device-type.md",
  //   time: "2021-05-29",
  //   },
  //   { text: "The layer order is disordered when drawImage draws multiple images", link: "/blog/example-draw-image.md", time: "2021-07-18" },
  //   {
  //   text: "Calculate the average value of the specified attribute of a one-dimensional array and a one-dimensional array object getAvg",
  //   link: "/blog/example-get-avg.md",
  //   time: "2021-10-17",
  //   },
  //   { text: "Date countdown calculation countdown", link: "/blog/example-get-countdown.md", time: "2021-10-17" },
  //   { text: "About common touch problems and solutions for IOS mobile devices", link: "/blog/example-ios-touch.md", time: "2022-03-25" },
  // ],
  // },
  // {
  // text: "Plugin Notes",
  // items: [
  //   { text: "PreloadJS preload and achieve progress loading effect", link: "/blog/js-preload.md", time: "2021-02-23" },
  //   { text: "Swiper implements the specified slide display position", link: "/blog/js-swiper-to.md", time: "2021-03-22" },
  //   { text: "Nuxt pit filling collection (for practical development solutions)", link: "/blog/js-nuxt.md", time: "2022-02-13" },
  //   { text: "Vue-export2excel export table", link: "/blog/js-vue-export2excel.md", time: "2022-04-21" },
  //   { text: "PannellumJS quickly builds your own panoramic viewer", link: "/blog/js-pannellum.md", time: "2022-08-07" },
  //   { text: "SwiperJS Getting Started and Implementing Common Carousel Effects", link: "/blog/js-swiper.md", time: "2022-12-18" },
  // ],
  // },
  // {
  // text: "Others",
  // items: [
  //   { text: "Purchase and Deployment of Tencent Cloud Server", link: "/blog/tencent-cloud-server.md", time: "2021-03-14" },
  //   { text: "Use of ESLint Syntax Checker", link: "/blog/plugin-eslint.md", time: "2021-07-17" },
  //   { text: "Prettier A Stubborn Code Formatter", link: "/blog/plugin-prettier.md", time: "2021-07-17" },
  //   { text: "Common git command summary", link: "/blog/git.md", time: "2021-11-23" },
  //   { text: "About deploying front-end projects to Linux", link: "/blog/nginx.md", time: "2023-09-26" },
  //   { text: "Vitepress practical application", link: "/blog/vue-vitepress.md", time: "2023-01-01" },
  //   { text: "Front-end engineering of Webpack", link: "/blog/plugin-webpack.md", time: "2024-04-19" },
  //   { text: "Front-end engineering of Vite", link: "/blog/plugin-vite.md", time: "2024-04-19" },
  //   { text: "Node Study notes", link: "/blog/plugin-node.md", time: "2024-04-26" },
  // ],
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
  const D = JSON.parse(JSON.stringify(BlogData));
  const data: Array<Object> = [];

  D.forEach((item: any) => {
  data.push({ ...item, collapsed: sidebarCollapsed });
});
return data;
})();