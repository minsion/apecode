import { navBlog } from "./navSidebarBlog.mts";
import { navEssays } from "./navSidebarEssays.mts";

export const nav = [
  { text: "首页", link: "/" },
  { text: "导航", link: "/navigation" },
  { text: "轻函数", link: "/function.md" },
  { text: "八股文", items: [...navEssays] },
  { text: "面试题", items: [...navBlog] },
  { text: "语录", link: "/quotation.md" },
];
