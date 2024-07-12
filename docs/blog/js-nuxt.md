---
layout: doc
---

# Nuxt 填坑集合（面向实际开发解决方案）

## 前言

在 nuxt 开发的过程中，遇到了一些坑，通过官方文档和面向百度式的学习，这些坑得到了解决，最后将这些坑的解决方式记录下来。无需全文阅读，直接阅读需求内容即可。「后续还会更新 nuxt 相关的坑，并欢迎指正」

## 一、样式分类

当页面结构足够复杂时，template、srcitp、style 全部代码都写在 `.vue` 文件就会显得冗余，并且需要代码查看时也不方便，可以将样式代码抽离，单独存放一个样式文件中（如：.css、.scss）。本文样式文件为 scss，其它样式文件同理。

```md
基本结构
├─ assets - 资产目录
│ └─ scss - 样式资产.scss
│ │ ├─ page - 页面样式文件目录
│ │ │ ├─ ….scss - 其它样式文件
│ │ │ └─ index.scss - 首页样式文件
│ │ │ var.scss - 公共变量「按需创建」
│ │ └─ styles.scss - 需要抽离的样式文件主入口
└─ pages - 页面目录
├─ ….vue - 其它页面文件
└─ index.vue - 首页
```

```css
// styles.scss
// 公共变量需要提前声明：
$theme-color: #096; // 直接定义；
@import "pages/var.scss"; // 或使用文件，单独存放公共变量。

// 将页面样式目录下的样式文件全部引入
@import "pages/….scss";
@import "pages/index.scss";
```

```js
// nuxt.config.js
export default {
  // 添加以下配置，在项目运行或打包时，会自动引用 styles.scss文件
  css: [{ src: "~/assets/scss/styles.scss" }],
};
```

## 二、api 请求

### axios

正常 [使用 create-nuxt-app](https://nuxtjs.org/docs/get-started/installation#using-create-nuxt-app) 初始化项目，能够直接添加 axios。

```dos
# 安装 axios
npm install @nuxtjs/axios --save
```

```js
// nuxt.config.js
export default {
  // 添加以下配置，即可
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],
};
```

完成上述步骤，即可在项目中使用 axios 请求。

```js
// 在 created 生命周期函数中请求
created() {
  this.$axios.get('/接口地址')
    .then(res => {
      console.log(res)
    })
    .catch(e => {
      console.log(e)
    })
}
```

### 跨域、代理

当 axios 请求时，出现跨域问题。需要通过代理来解决。

步骤主要分为安装、配置两步。

```dos
# 安装 proxy
npm install @nuxtjs/proxy --save
```

```js
export default {
  // 添加以下配置
  axios: {
    proxy: true, // 表示开启代理
    prefix: "/api", // 表示给请求url加个前缀 /api -> 本地调试 http://localhost:3000/api/
    credentials: true, // 表示跨域请求时是否需要使用凭证
  },
  proxy: {
    "/api": {
      target: "http://www.request.cn/api", // 目标接口域名 -> 项目打包 http://www.request.cn/api
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
        "^/api": "", // 打包时把 /api 替换成 ''
      },
    },
  },
};
```

## 三、SEO

搜索引擎优化(Search Engine Optimization; SEO)

> 搜索引擎优化分为站外 SEO 和站内 SEO 两种。SEO 的主要工作是通过了解各类搜索引擎如何抓取[互联网](https://wiki.mbalib.com/wiki/%E4%BA%92%E8%81%94%E7%BD%91 "互联网")页面、如何进行索引以及如何确定其对某一特定关键词的搜索结果排名等[技术](https://wiki.mbalib.com/wiki/%E6%8A%80%E6%9C%AF "技术")，来对网页进行相关的优化，使其提高搜索引擎排名，从而提高网站访问量，最终提升网站的销售能力或宣传能力的技术。

对于前端来说，进行 seo 优化主要有 title 标签、 meta 元标签 等（俗称：tdk）。

```html
<title>网站标题</title>
<meta name="description" content="网站描述" />
<meta name="keywords" content="网站关键词" />

<img alt="图片无法加载时显示的问题" title="鼠标悬浮图片时显示的文字" />
<!-- 也能被 seo 相关爬虫抓取到 -->
```

### 数据动态设定

nuxt 项目中可以在 nuxt.config.js 中配置`全局静态` tdk 数据，也可以在 pages 目录页面中使用 nuxt 内置方法 head() 设置`本地静态` tdk 数据。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68a1439f0fb947b7a5066bcac4d48dd6~tplv-k3u1fbpfcp-watermark.image? "nuxt.config.js全局配置")

更多 head 静态配置：[nuxtjs meta-tags-seo](https://nuxtjs.org/docs/features/meta-tags-seo/)

当更改时，需要找到对应的代码文件才能更改，不利于后期维护，所以一般是通过 API 请求 + head() 进行动态设定。

```html
// 需要动态设定的 .vue 页面文件
<template> … </template>
<script>
  export default {
    // 1. 数据获取
    // asyncData不能使用this（当前组件）
    // 提供第一个参数context，表示上下文（nuxt 所有功能）
    // 或 对context对象进行解构，context.$axios —> { $axios }
    async asyncData({ $axios }) {
      return await $axios
        .$post(`需要请求的接口`, {
          [参数名]: "值",
        })
        .then((res) => {
          const { msg } = res;
          return {
            title: msg.title,
            description: msg.description,
            keywords: msg.keywords,
          };
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
    // 2. 数据设定
    head() {
      return {
        title: this.title,
        meta: [
          { hid: "description", name: "description", content: this.description },
          { hid: "keywords", name: "keywords", content: this.keywords },
        ],
      };
    },
  };
</script>
<style>
  …
</style>
```

### connect ECONNREFUSED

> 情景复现：如果页面没有使用`async asyncData`方法去请求后台地址能正常请求，如果使用了该方法去请求后台就会报下面的异常。

```dos
// 异常信息
connect ECONNREFUSED 127.0.0.1:80 at TCPConnectWrap.afterConnect [as oncomplete]
```

解决方法一：

```js
// nuxt.config.js
export default {
  // 添加以下配置
  server: {
    port: 80,
    host: "0.0.0.0",
  },
};
```

解决方法二：

```json
// package.json
{
  // 添加以下配置
  "config": {
    "nuxt": {
      "host": "0.0.0.0",
      "port": "80"
    }
  }
}
```

更多 connect ECONNREFUSED 异常说明：[异常的解决-大橙子 Hi](https://www.jianshu.com/p/6507518daf54)

## 四、项目打包

当 nuxt 项目打包运行时，css 部分样式、nuxt 请求方法 会被打包在 `.html` 中，这样并不利于源码查看，及 SEO 排名。

css 内部样式：
![fc84cbdc0765491386c4a2e873e0ca02_tplv-k3u1fbpfcp-watermark.webp](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a3dc4ed6913d4b52b4ed3cd5d89f3ca6~tplv-k3u1fbpfcp-watermark.image? "图片来源于网络")

window.\_\_NUXT\_\_\_ 匿名方法：
![39e940c6342a471491a38ae1f6f7af71_tplv-k3u1fbpfcp-watermark.webp](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/30fedc41a89544e4997044852ede697a~tplv-k3u1fbpfcp-watermark.image? "图片来源于网络")

### css 自动创建文件，并引用

```js
// nuxt.config.js 文件
export default {
  build: {
    extractCSS: { allChunks: true }, // 添加此配置，重新打包即可
  },
};
```

### js 自动创建文件，并引用

#### 方法一、修改 vue-renderer.js 文件

```js
// node_modules/@nuxt/vue-renderer/dist/vue-renderer.js
APP += `<script>${serializedSession}</script>`; // 注释此语句，重新打包即可
```

#### 方法二、nuxt.config.js 添加配置项

```js
// 添加 hooks 配置项，重新打包即可
hooks: {
  'vue-renderer:ssr:context'(context) {
    const routePath = JSON.stringify(context.nuxt.routePath)
    context.nuxt = { serverRendered: true, routePath }
  }
},
```

更多 nuxt 相关打包内容：[NUXT 去掉源代码里面的 css 和 window.\_\_NUXT\_\_ - CV 大法师](https://juejin.cn/post/7027318040840634381)

## 五、vconsole 调试

在项目中安装移动端 H5 调试插件。

1. 安装相关依赖包：

```cmd
# 安装
$ yarn add vconsole
```

2. 在项目目录 plugins 中，新建 vconsole.js 文件：

```js
// ./plugins/vconsole.js
import VConsole from "vconsole";

// 方式一：开发环境和生产环境均创建
const vConsole = new VConsole();

// 方式二：仅在开发环境中创建
const vConsole = process.env.NODE_ENV === "development" ? new VConsole() : "";

export default vConsole;
```

3. 在 nuxt.config.js 中引入配置文件

```js
export default {
  plugins: [{ src: "@/plugins/vconsole.js", ssr: false }],
};
```

## 六、https 本地测试

在项目的实际开发过程中，可能会遇到一些只能通过 https 访问采用正确触发是 api，例如 [`navigator.geolocation`](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation_API) 方法。

基本步骤如下：

- 通过安装生成证书库生成证书。
- 在项目 `nuxt.config.js` 中引入证书，并配置。

```shell
$ 安装证书生成库
# npm install -g mkcert

$ 创建证书颁发机构
# mkcert create-ca

$ 创建证书
# mkcert create-cert
```

完成上述命令操作之后，会在 cmd 运行目录中生成 `cert.key` 和 `cert.crt` 两个文件，将这两个文件复制一份到需要 https 访问的项目根路径中。

```shell
$ 为项目安装相关 npm 包
$ 下载 path 和 fs 库
# npm i path
# npm i fs
```

```js
// nuxt.config.js
import path from "path";
import fs from "fs";

export default {
  server: {
    https: {
      // 把生成证书引入项目中
      key: fs.readFileSync(path.resolve(__dirname, "cert.key")),
      cert: fs.readFileSync(path.resolve(__dirname, "cert.crt")),
    },
  },
};
```

## 参考博文

- [Nuxt 爬坑 - LuSir\_天之骄子!](https://juejin.cn/post/6844903833840123912#heading-12)

- [前端使用 Nuxt 框架，配置本地 https 访问 - 甜甜圆圆圈圈](https://blog.csdn.net/zhangtian_tian/article/details/105238160)
