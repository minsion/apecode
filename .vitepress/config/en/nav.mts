import { navBlog } from "./navSidebarBlog.mts";
import { navEssays } from "./navSidebarEssays.mts";
console.log('en')
export const nav = [
  { text: "Home", link: "/en/" },
  { text: "Navigation", link: "/en/navigation" },
  { text: "Notes", items: [...navBlog] },
  { text: "Eight-part essay", items: [...navEssays] },
  { text: "Light Function", link: "/function.md" },
  { text: "Quotes", link: "/quotation.md" },
];
