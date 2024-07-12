---
layout: doc
---

# Sass 的四种编译方式

## 前言

作为 css 的扩展语言，能够快速地编写 css 样式，进一步地提高工作效率，如今主流的 css 扩展语言有 sass 以及 less，两者的语法类似，本文则先从 Sass 扩展语法开始记录。

## 一、Sass

世界上最成熟、最稳定、最强大的专业级 CSS 扩展语言！这是 sass 官网首页能够看到的一句话。
由于 sass 是基于 Ruby 语言开发而成的，所以在使用 sass 语言之前得先行安装 Ruby 编译器。[Ruby 编译器安装包](https://download.csdn.net/download/weixin_44808483/15384259)
关于 Sass 语言有两种后缀名，分别是 .sass 和 .scss ，两者只是写法有些许不同。
安装教程在 Sass 官网中有详细的介绍，本文则略过。[安装教程看这里！](https://www.sass.hk/install/)

## 二、编译方式

命令行编译 sass 有配置选项，如编译过后 css 排版、生成调试 map、开启 debug 信息等，可通过使用命令 sass -v 查看详细。
在 sass 中，有四种排版方式，分别是输出：嵌套、展开、紧凑以及压缩等格式。下面将分别介绍命令行的四种具体命令。

### 1. 命令行编译

命令行编译，顾名思义就是通过终端控制台进行编译，从而生成所需要的格式。

```css
//未编译样式
.box {
  width: 300px;
  height: 400px;
  &-title {
    height: 30px;
    line-height: 30px;
  }
}
```

- nested 编译排版格式 （嵌套输出方式）

```css
/*命令行内容*/
/*
	style.scss 需要编译的scss文件名包含后缀
	style.css  设置转变之后的css文件名包含后缀
	nested     编译的方式
*/
sass style.scss:style.css --style nested

/*编译过后样式*/
.box {
  width: 300px;
  height: 400px;
}
.box-title {
  height: 30px;
  line-height: 30px;
}
```

- expanded 编译排版格式 （展开输出方式）

```css
/*命令行内容*/
sass style.scss:style.css --style expanded

/*编译过后样式*/
.box {
  width: 300px;
  height: 400px;
}
.box-title {
  height: 30px;
  line-height: 30px;
}
```

- compact 编译排版格式（紧凑输出方式）

```css
/*命令行内容*/
sass style.scss:style.css --style compact

/*编译过后样式*/
.box {
  width: 300px;
  height: 400px;
}
.box-title {
  height: 30px;
  line-height: 30px;
}
```

- compressed 编译排版格式（压缩输出方式）

```css
/*命令行内容*/
sass style.scss:style.css --style compressed

/*编译过后样式*/
.box {
  width: 300px;
  height: 400px;
}
.box-title {
  height: 30px;
  line-height: 30px;
}
```

在使用命令行编译的时候，需要注意 cdm 的路径中需要当下就是包含需要编译的 sass 文件才可以，否则编译错误。（包含的关系）
![在这里插入图片描述](/images/blog/css/20210221124743437.png#pic_center)

### 2. 插件保存编译

在此先前，我们需要到 vscode 的扩展插件当中找到 Live Sass Compiler 插件安装，并到 setting.json 中进行配置。

![在这里插入图片描述](/images/blog/css/20210221110642436.png#pic_center)
打开 vscode 的 setting.json 文件，添加以下配置项。

```json
"liveSassCompile.settings.formats": [
	// 插件配置项
    {
      "format": "compact", // 设置编译之后的格式
      "extensionName": ".css", // 编译后缀名
      "savePath": "~/../css" // 编译之后的路径，相对路径，此处的意思是将编译之后的文件保存在当前项目的css文件下（没有css文件夹将自动创建）
    }
  ],
```

添加完成之后，回到需要编译的 sass 文件中，在 vscode 右下角会有 Watch Sass 字样，他是监测 sass 文件的，当保存之后自动编译成 setting.json 定义的格式文件，点击开启即可。
之后就可以随意编写 sass 文件了，并且在输出控制台会有编译的成功或错误信息，可以及时纠正。
![在这里插入图片描述](/images/blog/css/20210221130050853.png?)

## 总结

以上便是今天介绍到的 sass 四种编译格式，以及具体的编译步骤，希望能够帮助到您。

`最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，感谢您的观看！`
官方文档：[Sass 官方文档](https://www.sass.hk/)
