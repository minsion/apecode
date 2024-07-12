---
layout: doc
---

# 页面锚点快速定位跳转

## 前言

先前曾在浏览器对象模型 BOM 中，封装了 goToPage.js 的小工具，它主要是可以实现页面的快速定位跳转功能，由于主要是使用原生的 javascript 进行编写的，还有有些繁杂。这次进一步地简化，在 html 中锚点也可以实现页面定位的功能，便想着是否可是设置锚点跳转执行时间，实现动画效果。

相关文章：[浏览器对象模型 BOM](https://blog.csdn.net/weixin_44808483/article/details/113244449)

## 一、锚点

它是网页制作中超级链接的一种，又叫命名锚记。命名锚记像一个迅速定位器一样是一种页面内的超级链接，运用相当普遍。

## 二、锚点使用

### 1. 简单实现

它主要是通过在页面内设置 id 选择器，然后同页面设置 a 标签并设置 href 的属性值等于 id 选择器的值，这样就可以实现简易的锚点跳转了。我们来看案例。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      body {
        overflow-x: hidden;
      }

      ul,
      li {
        list-style-type: none;
      }

      a {
        color: #fff;
        text-decoration: none;
      }

      nav {
        position: fixed;
        top: 0;
        width: 100vw;
        height: 80px;
        line-height: 80px;
        background-color: #2b2b2b;
        color: #fff;
      }

      nav ul {
        display: flex;
        flex-decoration: row;
        justify-content: space-around;
      }

      nav ul li {
        transition: 0.3s;
        cursor: pointer;
      }

      nav ul li a:hover {
        color: #f39c12;
      }

      .container {
        margin-top: 80px;
      }

      .container section {
        width: 100vw;
        height: 100vh;
      }

      .container section:nth-child(1) {
        background-color: skyblue;
      }

      .container section:nth-child(2) {
        background-color: green;
      }

      .container section:nth-child(3) {
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <nav>
      <ul>
        <li><a class="label" href="#box1">box1</a></li>
        <li><a class="label" href="#box2">box2</a></li>
        <li><a class="label" href="#box3">box3</a></li>
      </ul>
    </nav>
    <div class="container">
      <section id="box1"><h1>盒子一</h1></section>
      <section id="box2"><h1>盒子二</h1></section>
      <section id="box3"><h1>盒子三</h1></section>
    </div>
  </body>
</html>
```

这样就可以实现页面内的跳转了，注意到浏览器的 URL 地址栏时，会发现 a 标签的同时，`地址栏末尾也会添加对应的id值`，这就是锚点可以跳转的原因。

### 2. 动画添加

在上述案例的基础上，先引入 jQuery 库和 jQuery.easing 库。[jQuery.easing API 文档](https://www.runoob.com/jqueryui/api-easings.html)

```html
<!-- jQuery -->
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/2.0.0/jquery.js"></script>
<!-- jQuery.easing 过渡速度，内置32种速度变化 -->
<script src="https://cdn.bootcdn.net/ajax/libs/jquery-easing/1.4.1/jquery.easing.js"></script>
```

编写 javascript 脚本

```js
// 实现思路：为 a标签添加一个 class.label，根据这个类名获取统计的 href属性（也就是里面的 id值），紧接着根据 id值取获取这个 id 在页面内的高度，最后通过 jqeruy.animate 实现跳转。
$(".label").bind("click touch", function () {
  // .animate( properties [, duration ] [, easing ] [, complete ] )
  $("html,body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500, "easeInOutExpo");
});
```

这样就可以实现过渡的动画了，不过在跳转的时候页面会白屏以下，原因是因为地址栏发生的变动，解决方案是把 a 标签中的 href 改一下名字，自定义一个属性名。比如：

```html
<!-- 最终版 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      body {
        overflow-x: hidden;
      }

      ul,
      li {
        list-style-type: none;
      }

      a {
        color: #fff;
        text-decoration: none;
      }

      nav {
        position: fixed;
        top: 0;
        width: 100vw;
        height: 80px;
        line-height: 80px;
        background-color: #2b2b2b;
        color: #fff;
      }

      nav ul {
        display: flex;
        flex-decoration: row;
        justify-content: space-around;
      }

      nav ul li {
        transition: 0.3s;
        cursor: pointer;
      }

      nav ul li a:hover {
        color: #f39c12;
      }

      nav ul li .active {
        color: #f39c12;
      }

      .container {
        margin-top: 80px;
      }

      .container section {
        width: 100vw;
        height: 100vh;
      }

      .container section:nth-child(1) {
        background-color: skyblue;
      }

      .container section:nth-child(2) {
        background-color: green;
      }

      .container section:nth-child(3) {
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <nav>
      <ul>
        <!-- n-href:是自己定义的，不要和css样式名冲突，尽量一看就懂就可以了 -->
        <li><a class="label active" n-href="#box1">box1</a></li>
        <li><a class="label" n-href="#box2">box2</a></li>
        <li><a class="label" n-href="#box3">box3</a></li>
      </ul>
    </nav>
    <div class="container">
      <section id="box1"><h1>盒子一</h1></section>
      <section id="box2"><h1>盒子二</h1></section>
      <section id="box3"><h1>盒子三</h1></section>
    </div>
  </body>
  <script src="https://cdn.bootcdn.net/ajax/libs/jquery/2.0.0/jquery.js"></script>
  <script src="https://cdn.bootcdn.net/ajax/libs/jquery-easing/1.4.1/jquery.easing.js"></script>
  <script>
    $(".label").bind("click touch", function () {
      $("html,body").animate({ scrollTop: $($(this).attr("n-href")).offset().top - 80 }, 500, "easeInOutExpo");

      // 先移除上一次全部字体的样式，然后根据当前点击label去添加字体样式类。
      $(".label").removeClass("active");
      $(this).addClass("active");
    });
  </script>
</html>
```

## 总结

以上便是今天对页面定位跳转小工具的进一步优化以及记录，希望能够帮助到你。

<br />
<br />
<br />

`最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，感谢您的观看！`
参考文章：[使用 JS 给 html 锚点跳转增加动画效果](https://blog.csdn.net/weixin_41395648/article/details/82424137)
