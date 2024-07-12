---
layout: doc
---

# 前端工程化之 Vite

下一代的前端工具链

[Vite 官网 👉](https://cn.vitejs.dev/)

- vite 也是前端的构建工具
- 相较于 webpack，vite 采用了不同的运行方式
  - 开发时，不对代码打包，而是直接采用 ESM 的方式来运行项目
  - 生产时，再进行项目打包
- 除了运行速度外，vite 使用起来也特别方便
- 基本使用
  - 1. 安装开发依赖 vite
  - 2. vite 的源码目录就是项目的根目录
  - 3. 开发命令：
    - `vite` 启动开发服务器
    - `vite build` 打包代码
    - `vite preview` 启动打包服务器

## 自定义

安装

```sh
npm install vite -D
```

配置

```json
/* package.json */
{
  "version": "0.0.1",
  "devDependencies": {
    // more
  },
  "scripts": {
    "dev": "vitepress dev",
    "build": "vitepress build",
    "preview": "vitepress preview"
  }
}
```

```html
<!-- 根目录/index.html -->
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- 注意，vite 需要使用 ESM 的方式导入 -->
    <script type="module" src="./index.js"></script>
  </head>
  <body> </body>
</html>
```

```js
/* 根目录/index.js */
console.log("Hello World");
```

完成上述三个文件的配置后，即可通过控制台执行相关命令实现项目的打包了。

## 脚手架

::: code-group

```sh [npm]
$ npm create vite@latest
```

```sh [yarn]
$ yarn create vite
```

```sh [pnpm]
$ pnpm create vite
```

```sh [bun]
$ bun create vite
```

:::

## 配置文件

[官网案例 👉](https://cn.vitejs.dev/guide/using-plugins#using-plugins)

若要使用一个插件，需要将它添加到项目的 devDependencies 并在 vite.config.js 配置文件中的 plugins 数组中引入它。例如，要想为传统浏览器提供支持，可以按下面这样使用官方插件 @vitejs/plugin-legacy：

```sh
npm add -D @vitejs/plugin-legacy
```

```js
/* vite.config.js */
import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
});
```

## 参考

[前端构建工具（webpack&vite）教程 李立超 - bilibili 📺](https://www.bilibili.com/video/BV1Kd4y147gg/)
