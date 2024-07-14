import { navBlog } from "./navSidebarBlog.mts";
import { navEssays } from "./navSidebarEssays.mts";
export const nav = [
  { text: "Home", link: "/en/" },
  { text: "Navigation", link: "/en/navigation" },
  { text: "Light Function", link: "/en/function.md" },
  { text: "Eight-part essay", items: [...navEssays] },
  { text: "Interview Questions", items: [...navBlog] },
  { text: "Quotes", link: "/en/quotation.md" },
];
