---
layout: doc
---

# drawImage 绘制多张图片时层次顺序错乱

## 项目场景：

日常 canvas 开发中，

## 问题描述：

目前需要使用 drawImage() 绘制多张图片

在 canvas 中是没有 z-index 这个属性的，只有绘制早的图片会显示在底层，绘制的图片显示在顶层，`早底后顶`。

```js
function draw(ctx, imgSrc, x, y, w, h) {
  const img = new Image();
  img.onload = function () {
    ctx.drawImage(img, x, y, w, h);
  };
  img.src = imgSrc;
}
```

根据上述代码，可以绘制多张图片在 canvas 标签当中，但是显示的层级会错乱。

## 原因分析：

因为 img.onload 属于`异步加载`了，所以哪张图片加载快就绘制顺序靠前。

## 解决方案：

在这个时候里，我们可以通过 Promise 对象返回一个同步的回调函数，让图片按顺序进行绘制。

```js
function drawImage(ctx, imgSrc, x, y, w, h) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      ctx.drawImage(img, x, y, w, h);
      resolve(img);
    };
    img.src = imgSrc;
  });
}
```

参考文章：

[谈谈 canvas 的性能优化（主要讲缓存问题）](https://blog.csdn.net/cysear/article/details/70859880)
