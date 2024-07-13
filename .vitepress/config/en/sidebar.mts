import { sidebarBlog } from "./navSidebarBlog.mts";
import { sidebarEssays } from "./navSidebarEssays.mts";

export const sidebar = {
  "/en/blog/": [...sidebarBlog],
  "/en/essays/": [...sidebarEssays],
};
