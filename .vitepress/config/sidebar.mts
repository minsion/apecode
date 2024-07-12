import { sidebarBlog } from "./navSidebarBlog.mts";
import { sidebarEssays } from "./navSidebarEssays.mts";

export const sidebar = {
  "/blog/": [...sidebarBlog],
  "/essays/": [...sidebarEssays],
};
