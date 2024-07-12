import { navBlog } from "./navSidebarBlog.mts";
import { navEssays } from "./navSidebarEssays.mts";

export const nav = [
  { text: "首页", link: "/" },
  { text: "导航", link: "/navigation" },
  { text: "随笔记", items: [...navBlog] },
  { text: "八股文", items: [...navEssays] },
  { text: "轻函数", link: "/function.md" },
  { text: "语录", link: "/quotation.md" },
];
