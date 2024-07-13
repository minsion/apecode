---
layout: doc
---

<script setup>
  import { ref, onMounted, computed } from "vue";
  import { base } from '../../../.vitepress/config/en/meta.mts'
  import { BlogData } from "../../../.vitepress/config/en/navSidebarBlog.mts";
  import DocsBlogCharts from "../../../.vitepress/components/DocsBlogCharts.vue";

  const renderDate = ref([]);

  onMounted(() => {
    renderDate.value = getRenderDate(BlogData).sort((a, b) => new Date(b.time) - new Date(a.time));
  });

  let getRenderDate = (sourceDate) => {
    let arr = [];
    sourceDate.map(({ text, items }) => {
      if (items.length) {
        let list = [];
        items.map((item) => {
          list.push({ ...item, href: item.link.replace(/\.md$/, ""),type: text });
        });
        arr.push(...list);
      }
    });
    return arr;
  };

  let getRenderDateSlice = (date, length) => {
    return date.slice(0, length);
  }
</script>
# Random Notes

## Overview

The technical precipitation section mainly includes seven categories: `Javascript`, `Css`, `WeChat Mini Program`, `Front-end Algorithm`, `Practical Development`, `Plugin Notes`, `Others`, etc.

## Classification

- Javascript: related grammar knowledge;
- Css: related style knowledge;
- WeChat applet: the smallest demo component for actual development of applet;
- Front-end algorithm: common algorithms involved in the front-end;
- Actual development: a collection of bug problems in the web development process, and solutions;
- Plugin notes: records of plugin usage for the front-end, etc.;
- Others: miscellaneous.

## Recent

<div class="recent">
<p v-for="(item, key) in getRenderDateSlice(renderDate, 8)" :key="key">
<a :href="`${base.slice(0, base.length - 1)}${item.href}`">
{{item.type}} - {{item.text}} : {{item.time}}
</a>
</p>
</div>

## Data

<DocsBlogCharts />
