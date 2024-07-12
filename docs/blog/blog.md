---
layout: doc
---

<script setup>
  import { ref, onMounted, computed } from "vue";
  import { base } from '../../.vitepress/config/meta.mts'
  import { BlogData } from "../../.vitepress/config/navSidebarBlog.mts";
  import DocsBlogCharts from "../../.vitepress/components/DocsBlogCharts.vue";

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

# 随笔记

## 概述

技术沉淀板块，主要包含有：`Javascript`、`Css`、`微信小程序`、`前端算法`、`实际开发`、`插件笔记`、`其他`等七个大类。并且会同步分享至[掘金](https://juejin.cn/user/1126374170967367/posts)、[CSDN](https://blog.csdn.net/weixin_44808483?type=blog) 等博客平台中。

## 分类

- Javascript: 相关的语法知识;
- Css: 相关的样式知识;
- 微信小程序: 实际开发小程序的最小 Demo 组件;
- 前端算法: 前端涉及的常见算法;
- 实际开发: 在 web 开发过程的 bug 问题集合，以及解决方案;
- 插件笔记: 前端等的插件使用记录;
- 其他: 杂项.

## 近期

<div class="recent">
  <p v-for="(item, key) in getRenderDateSlice(renderDate, 8)" :key="key">
    <a :href="`${base.slice(0, base.length - 1)}${item.href}`">
      {{item.type}} - {{item.text}} : {{item.time}}
    </a>
  </p>
</div>

## 数据

<DocsBlogCharts />
