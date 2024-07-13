import { defineConfig } from "vitepress";

import {
  titleEn,
  description,
  base,
  logo,
  outlineTitle,
  sidebarMenuLabel,
  docFooterPrev,
  docFooterNext,
  returnToTopLabel,
  darkModeSwitchLabel,
  editLinkPattern,
  editLinkText,
  lastUpdatedText,
  footerMessage,
  footerCopyright,
} from "./meta.mts";
import { head } from "./head.mts";
import { socialLinks } from "./social.mts";
import { nav } from "./nav.mts";
import { sidebar } from "./sidebar.mts";

export default defineConfig({
  lang: 'en-US',
  title: titleEn,
  description: description,
  base: base,
  srcDir: "docs",
  lastUpdated: true,
  themeConfig: {
    siteTitle: titleEn,
    logo: logo,
    outline: "deep",
    outlineTitle: outlineTitle,
    sidebarMenuLabel: sidebarMenuLabel,
    docFooter: {
      prev: docFooterPrev,
      next: docFooterNext,
    },
    returnToTopLabel: returnToTopLabel,
    darkModeSwitchLabel: darkModeSwitchLabel,
    editLink: {
      pattern: editLinkPattern,
      text: editLinkText,
    },
    lastUpdatedText: lastUpdatedText,

    nav: nav,
    sidebar: sidebar,
    socialLinks: socialLinks,

    footer: {
      message: footerMessage,
      copyright: footerCopyright,
    },
    search: {
      provider: "local",
    },
  },

  head: [...head],
});
