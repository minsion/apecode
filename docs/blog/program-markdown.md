---
layout: doc
---

# 微信小程序解析 markdown

## 背景

近期需求：需要对后端返回的 `markdown 解析`，并且需要对`代码块高亮`显示，最后显示在`微信小程序`中。

方式：

- markedJS + highlightJs
- mp-html [ prismJS + highlightJS ]

以下案例，均采用源码引入的方式。

## 方式一

- markedJS + highlightJs

[markedJS](https://github.com/markedjs/marked): A markdown parser and compiler. Built for speed. (只对 markdown 解析)

[highlightJS](https://github.com/highlightjs/highlight.js): JavaScript syntax highlighter with language auto-detection and zero dependencies. (设置代码块高亮样式)

需要提前下载好以下三个文件，且放置在项目目录中: [`marked.min.js`](https://github.com/markedjs/marked/blob/master/marked.min.js) [`highlight.min.js`](//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js) [`default.min.css`](//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css)

更多代码高亮主题： [styles directory](https://github.com/highlightjs/highlight.js/tree/main/src/styles)

```html
<!-- pages/chat/chat.wxml -->
<view class="contain">
  <rich-text nodes="{{html}}"></rich-text>
</view>
```

```javascript
// pages/chat/chat.js
import { marked } from "../../plugin/marked.min";
import hljs from "../../plugin/highlight.min";

Page({
  data: {
    markdown: "", // markdown格式内容
    html: "", // 解析后内容
  },

  onShow() {
    const { markdown } = this.data;
    this.setData({
      html: this.markdownParse(markdown),
    });
  },

  markdownParse(md) {
    return marked(md, {
      highlight: function (code, lang) {
        return hljs.highlightAuto(code).value;
      },
    });
  },
});
```

```css
/* pages/chat/chat.wxss */
/* 
  注意：导入路径的写法，以及导入后缀名需要为wxss【可将default.min.css改成default.min.wxss】
*/
@import "..\\..\\plugin/theme-code.wxss";
```

## 方式二

- mp-html [ prismJS + highlightJS ]

[mp-html](https://jin-yufeng.gitee.io/mp-html/#/): 一个强大的小程序富文本组件，其中包含了`prismJS` `highlightJS` 等相关插件

使用方式：[源码引入](https://jin-yufeng.gitee.io/mp-html/#/overview/quickstart?id=miniprogram)

![插入图片](/images/blog/program/program-markdown_2023-04-18_23-47-34.jpg)

### 引入

1. 将 [源码](https://jin-yufeng.gitee.io/mp-html/#/overview/quickstart?id=source) 中对应平台的代码包（dist/platform）拷贝到 components 目录下，更名为 mp-html
2. 在需要使用页面的 json 文件中添加

```json
{
  "usingComponents": {
    "mp-html": "mp-html"
  }
}
```

### 使用

1. 在需要使用页面的 wxml 文件中添加

```html
<mp-html content="{{html}}" selectable="{{true}}" />
<!-- selectable 开启文本长按复制功能 -->
```

2. 在需要使用页面的 js 文件中添加

```javascript
Page({
  onLoad() {
    this.setData({
      html: "<div>Hello World!</div>",
    });
  },
});
```

支持的 [属性](https://jin-yufeng.gitee.io/mp-html/#/basic/prop) 和 [事件](https://jin-yufeng.gitee.io/mp-html/#/basic/event) 见对应文档

### 配置

完成使用方式的步骤之后，富文本内容能够正常渲染，但是 markdown 和 highlight 依旧不能解析和高亮，为此我们需要前往`tools/config.js`，打开相关注释。

```js{13,14}
/**
 * @fileoverview 配置文件
 */
module.exports = {
  /**
   * @description 需要的插件列表
   */
  plugins: [
    // 按需打开注释即可
    // 'audio',     // 音乐播放器
    // 'editable',  // 内容编辑
    // 'emoji',     // 小表情
    'highlight', // 代码高亮
    'markdown',  // 解析 md
    // 'latex',     // 解析 latex
    // 'search',    // 关键词搜索
    // 'style',     // 解析 style 标签
    // 'txv-video', // 使用腾讯视频
    // 'img-cache'  // 图片缓存
  ],
};
```

然后重新[生成组件包](https://jin-yufeng.gitee.io/mp-html/#/advanced/develop?id=pack)，并替换项目目录下的 mp-html。重新运行项目即可看到效果。

默认情况下，highlight 代码块右上角显示语言的名称是不显示的，在`tools/config.js`中配置 highlight 情况下，修改`/plugins/highlight/config.js`的配置，最后重新生成组件包替换 mp-html 源文件即可：

```javascript
module.exports = {
  copyByLongPress: false, // 是否需要长按代码块时显示复制代码内容菜单
  showLanguageName: false, // 是否在代码块右上角显示语言的名称
  showLineNumber: false, // 是否显示行号
};
```

mp-html 还有其它的一些插件扩展，感兴趣的可以测试使用一下。

## 总结

以上，就是关于如何在微信小程序内，解析 markdown 的步骤，其中 mp-html 提供长按复制等业务场景常见的功能，支持个性化 plugins.
