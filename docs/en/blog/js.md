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

## JavaScript

updating...
