---
layout: doc
---

# html2canvas 实现截图附上模糊处理方案

## 前言

在微信端开发的时候需要动态地添加某些文字，并且可以长按进行保存，html2canvas 则是可以完成上述的功能的。

提示：以下是本篇文章正文内容，下面案例可供参考

## 一、html2canvas 是什么？

是能够在浏览器上进行网页或者某个 dom 的屏幕截图，需要注意的是它并不是通过截取页面的屏幕快照，而是根据它从 DOM 读取的属性来构建页面的表示形式。`会有样式不兼容的情况`

## 二、使用步骤

### 1.引库

可以通过 cdn 引入或者通过 npm 安装，本文主要讲述的是 cdn 引入方式
代码如下（示例）：

```html
<script src="https://cdn.bootcdn.net/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.svg.js"></script>
```

### 2.功能实现

语法
` html2canvas(dom[, options]).then(
	function(){}
});`

dom：需要截图的 dom 元素
options：由 html2canvar 官方定义了一些参数，可以具体设置宽度高度、跨域等问题，对象数据结构。（可省）
function(e)：截图之后的回调函数，e 是已经截好图的 canvas 内容

```js
// 官方给出的写法。
html2canvas(document.body).then(function (canvas) {
  document.body.appendChild(canvas);
});

// Demo
html2canvas(document.querySelector("#capture"), {
  allowTaint: true, // options 的传入，这里的意思是允许跨域。
}).then((canvas) => {
  let img = document.createElement("img"); // 创建一个img标签。
  img.setAttribute("src", canvas.toDataURL()); // 为img标签添加上src属性，canvas.toDataURL()是canvas内置的一个方法，是将画好的图转化为url地址。
  document.body.appendChild(img); // 在body中追加img标签上去。
});
```

## 三、避免模糊

原理，创建一个 canvas，并且设置它的尺寸是需要截图尺寸的 n 倍，这里的倍数根据实际设备分辨率来定，然后截取后设置 canvas 的显示尺寸和截图尺寸一样，这样既可以避免模糊了，详细请看案例。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/style.css" />
    <title>html2canvas 截图模糊Demo</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        font-size: 0;
        /* 移动端中，取消用户长按时候的选中状态 */
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      img {
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body onLoad="fun()">
    <img id="imgDOM" src="https://i.loli.net/2021/03/18/iXZrPFWDJU3eqAa.jpg" />
  </body>
  <script src="https://cdn.bootcdn.net/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.js"></script>
  <script>
    function fun() {
      let imgDOM = document.querySelector("#imgDOM");

      // 获取当前图片的宽度和高度，取整
      let w = parseInt(imgDOM.width, 10);
      let h = parseInt(imgDOM.height, 10);

      // 获取像素比例
      let dpi = getDPI();
      // 创建一个 canvas 标签，！设置它的实际大小是需要截图大小的两倍，显示大小和截图大小一致（避免截图模糊）
      let canvas = document.createElement("canvas");
      canvas.width = w * dpi; // 按截图的大小，根据dpi比例缩小
      canvas.height = h * dpi;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";

      let ctx = canvas.getContext("2d"); // 渲染上下文，创建一个2d的canvas画板
      ctx.scale(dpi, dpi); // canvas web内置方法 缩放当前的canvas画板！， 参数：x轴比例，y轴比例

      html2canvas(imgDOM, {
        canvas,
        scale: 2,
        useCORS: true,
      }).then(function (imgCanvas) {
        let newIMG = document.createElement("img");
        newIMG.setAttribute("src", imgCanvas.toDataURL());
        document.body.appendChild(newIMG);
      });
    }

    function getDPI() {
      if (window.devicePixelRatio && window.devicePixelRatio > 1) {
        return window.devicePixelRatio;
      }
      return 1;
    }
  </script>
</html>
```

## 总结

以上就是今天要讲的内容，本文仅仅简单介绍了 html2canvas 的使用，而 html2canvas 提供了大量能使我们快速便捷地处理 canvas 图的 options，可以到官网上查阅了解。

`最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我。`
参考文档：[ html2canvas ](http://html2canvas.hertzen.com/documentation)
