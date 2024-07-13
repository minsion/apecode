import { navBlog } from "./navSidebarBlog.mts";
import { navEssays } from "./navSidebarEssays.mts";
export const nav = [
  { text: "Home", link: "/en/" },
  { text: "Navigation", link: "/en/navigation" },
  { text: "Light Function", link: "/en/function.md" },
  { text: "Notes", items: [...navBlog] },
  { text: "Eight-part essay", items: [...navEssays] },
  { text: "Quotes", link: "/en/quotation.md" },
];
