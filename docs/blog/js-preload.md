---
layout: doc
---

# PreloadJS 预加载及实现进度加载效果

## 前言

在 H5 的开发过程中，我们不难发现在首次打开 H5 时，会有一个进度条表示当前页面全部文件的加载进度，并且当加载到 100%的时候会跳转显示出首页的这一整个流程。这个流程我们可以通过 preload.js 插件来完成，下面我们先来介绍一下这个插件已经常用的监听事件。

## 一、preload.js

它是一个一致的方式预先加载在 HTML 应用的内容，以及预加载可以使用 HTML 标签作为 XHR 完成。
我们将要实现的功能，主要是在 LoadQueue 类中实现的, 其中包括如何加载文件和处理结果的简要概述。

LoadQueue 类 中的监听事件：
事件名|描述
--|--
complete |当队列完成加载所有文件时。（返回 number，在 0 到 1 之间，表示加载状态）
error | 当队列与任何文件遇到错误时。
progress| 对于整个队列进展已经改变。
fileload| 单个文件已完成加载。
fileprogress| 单个文件进度变化。注意,只有文件装载 XHR(或可能通过插件)将 file 事件进展除了 0 或 100%。

## 二、Demo

通过上述的 LoadQueue 类，以及相关的事件，我们可以快速地实现 H5 的加载效果。

- html：文档结构中，创建了两个页面，分别用 article 作为承载，在第一个 article 盒子当中，用 .progress 作为进度条的显示盒子，并且通过 .progress-status 实际显示当前进度条的状态，通过 span 标签显示具体的数值；在第二个 article 盒子中主要作为首页的展示，没有过多的样式装饰。

```html
<div class="container">
  <article class="article-box article-one">
    <div class="progress">
      <span>0 %</span>
      <div class="progress-status"></div>
    </div>
  </article>
  <article class="article-box article-two">
    <h1>首页</h1>
  </article>
</div>
```

- css：作为页面样式的调整，在这里我是先编写 scss 样式文件了之后，再通过 live sass compiler 插件编译而成，这样对于那些需要浏览器前缀的样式属性会自动生成的。

```css
body {
  margin: 0;
  padding: 0;
  color: #fff;
}

body .container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

body .container .article-box {
  display: none;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
}

body .container .article-box .progress {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  width: 50vw;
  height: 10vw;
  background: transparent;
  border: 3px solid #fff;
  border-radius: 3vw;
  -webkit-box-shadow: 2px 3px 4px 0px #505050;
  box-shadow: 2px 3px 4px 0px #505050;
  overflow: hidden;
}

body .container .article-box .progress span {
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 20;
  -webkit-animation: progressAnimate 1s linear 0s infinite alternate;
  animation: progressAnimate 1s linear 0s infinite alternate;
}

@-webkit-keyframes progressAnimate {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}

@keyframes progressAnimate {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}

body .container .article-box .progress .progress-status {
  position: absolute;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  left: 0;
  width: 0%;
  height: 100%;
  background: #f39c12;
}

body .container .article-one {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background: #1abc9c;
}

body .container .article-two {
  background: #16a085;
}
```

- js：含义见代码后面的注释

```html
<!-- 先引入preload.js 插件库 -->
<script src="https://cdn.bootcdn.net/ajax/libs/PreloadJS/1.0.1/preloadjs.js"></script>
```

```js
// 获取需要操作的DOM节点。
let articleOne = document.getElementsByClassName("article-one")[0]; // 第一个article
let articleTwo = document.getElementsByClassName("article-two")[0]; // 第二个article
let span = document.querySelector(".progress span"); // 数值展示位置
let progressStatus = document.getElementsByClassName("progress-status")[0]; // 进度条实际状态效果

// 实例 LoadQueue 类，得到实例对象 queue。
let queue = new createjs.LoadQueue(true);

// 加载进度条，监听文件的加载在全部文件中的占比，并回调 handleProgress 函数。
queue.on("progress", handleProgress);
// 加载完成时，监听全部文件加载完成的那一刻，并回调 handleComplete 函数。
queue.on("complete", handleComplete);

// 需要监测的文件，文件可以是图片、js文件、json文件等都可以。
queue.loadManifest([
  // 这里使用的链接纯做测试，实际开发中添加项目中的全部文件链接即可。
  "https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=1451575657,3505068488&fm=218&app=92&f=JPEG?w=121&h=75&s=FAA3716CC61A22770344000A0300E091",
  "https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=1451575657,3505068488&fm=218&app=92&f=JPEG?w=121&h=75&s=FAA3716CC61A22770344000A0300E091",
  "https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=1451575657,3505068488&fm=218&app=92&f=JPEG?w=121&h=75&s=FAA3716CC61A22770344000A0300E091",
  "https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=1451575657,3505068488&fm=218&app=92&f=JPEG?w=121&h=75&s=FAA3716CC61A22770344000A0300E091",
  "https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=1451575657,3505068488&fm=218&app=92&f=JPEG?w=121&h=75&s=FAA3716CC61A22770344000A0300E091",
  "https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=1451575657,3505068488&fm=218&app=92&f=JPEG?w=121&h=75&s=FAA3716CC61A22770344000A0300E091",
  "https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=1451575657,3505068488&fm=218&app=92&f=JPEG?w=121&h=75&s=FAA3716CC61A22770344000A0300E091",
  "https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=1451575657,3505068488&fm=218&app=92&f=JPEG?w=121&h=75&s=FAA3716CC61A22770344000A0300E091",
  // js文件
  "https://cdn.bootcdn.net/ajax/libs/PreloadJS/1.0.1/preloadjs.js",
]);

// 进度条回调函数
function handleProgress() {
  let num = `${Math.floor(queue.progress * 100)}%`; // queue.progress 是 'progress' 监听事件所返回的，它介于0到1之间，全部加载完成的时候结果为1，这里主要是处理这个数值按比例在1-100之间呈百分比显示。
  span.innerHTML = num; // 设置span中显示的数值。
  progressStatus.style.width = num; // 这里是通过控制 .progress-status盒子的 width所显示的加载效果的。
}

// 加载完成回调函数
function handleComplete() {
  articleOne.style.display = "none";
  articleTwo.style.display = "flex";
}
```

## 总结

`最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，感谢您的观看！`
官方文档：[PreloadJs](http://www.createjs.cc/preloadjs/docs/modules/PreloadJS.html)
