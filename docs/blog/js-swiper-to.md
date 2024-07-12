---
layout: doc
---

# Swiper 实现指定的 slide 显示位置

## 前言

在日常的 Swiper.js 开发当中，我们难免需要实现：当某个按钮的点击，然后显示相对应的 slide 模块，类似分页器的。本文将会从 Swiper 的内置参数 hashNavigation 与 slideTo() 方法，两种实现方式介绍。

## 一、hashNavigation

- 设置散列导航选项，或 true 使用默认值。为每个 slide 增加散列导航（有点像锚链接）。
- `还需要在每个slide处增加data-hash属性`。
- 这样当你的 swiper 切换时==你的页面 url 就会加上这个属性的值==了，你也可以通过进入页面时修改页面 url 让 swiper 在初始化时切换到指定的 slide。

| 参数           | 描述                                                                                                                                                                        |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hashNavigation | 锚导航（类型：boolean；默认：false；启用版本：4.0.0）                                                                                                                       |
| watchState     | 开启后观察浏览器窗口的的 hashchange 状态变化。可通过浏览器历史记录（页面前进后退按钮）或者 URL 的锚链接改变控制 slide 切换。（类型：boolean；默认：false；启用版本：4.0.0） |
| replaceState   | 使用 replaceState（window.history.replaceState）代替 hashnav 的 hash（document.location.hash）。（类型：boolean；默认：false；启用版本：4.0.0）                             |
| hashChange     | 事件函数：当浏览器的 hash 改变时执行。使用此功能需要开启 Swiper 的 hashNavigation - watchState 功能。（启用版本：5.4.0）                                                    |
| hashSet        | 事件函数：当 Swiper 设置浏览器的 hash 值时执行。（启用版本：5.4.0）                                                                                                         |

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SwiperJS hashNavigation</title>
    <link href="https://cdn.bootcdn.net/ajax/libs/Swiper/4.5.1/css/swiper.css" rel="stylesheet" />
    <style>
      body,
      div {
        margin: 0;
        padding: 0;
      }
      div.swiper-button {
        margin: 10px 0;
      }

      div.swiper-container {
        width: 800px;
        height: 500px;
      }
      div.swiper-slide {
        width: 100%;
        height: 100%;
        color: #ffffff;
      }
      div.swiper-slide.slide1 {
        background-color: #16a085;
      }
      div.swiper-slide.slide2 {
        background-color: #2980b9;
      }
      div.swiper-slide.slide3 {
        background-color: #f1c40f;
      }
    </style>
  </head>
  <body>
    <div class="swiper-container">
      <div class="swiper-button">
        <a href="#slide1" target="_blank">slide1</a>
        <a href="#slide2" target="_blank">slide2</a>
        <a href="#slide3" target="_blank">slide3</a>
      </div>
      <div class="swiper-wrapper">
        <div class="swiper-slide slide1" data-hash="slide1">Slide 1</div>
        <div class="swiper-slide slide2" data-hash="slide2">Slide 2</div>
        <div class="swiper-slide slide3" data-hash="slide3">Slide 3</div>
      </div>
    </div>
  </body>
  <script src="https://cdn.bootcdn.net/ajax/libs/Swiper/4.5.1/js/swiper.js"></script>
  <script>
    var mySwiper = new Swiper(".swiper-container", {
      hashNavigation: true,
    });
  </script>
</html>
```

缺点：需要通过 a 标签的 target: \_block，跳转到新页面才会显示需要展示的 slide，如果想通过 window.loaction.hash 改变地址栏实现显示的话是行不通的，hash 的确可以改变了地址栏，不过还是需要手动刷新页面才会显示正确。

## 二、slideTo

- slideTo(number) 是 swiper 实例对象的一个方法，通过传进的数值。
- 根据点击的按钮传回的下标去展现 slide，其中起始的位置为 0。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SwiperJS</title>
    <link href="https://cdn.bootcdn.net/ajax/libs/Swiper/4.5.1/css/swiper.css" rel="stylesheet" />
    <style>
      body,
      div {
        margin: 0;
        padding: 0;
      }
      div.swiper-button {
        margin: 10px 0;
      }

      div.swiper-container {
        width: 800px;
        height: 500px;
      }
      div.swiper-slide {
        width: 100%;
        height: 100%;
        color: #ffffff;
      }
      div.swiper-slide.slide1 {
        background-color: #16a085;
      }
      div.swiper-slide.slide2 {
        background-color: #2980b9;
      }
      div.swiper-slide.slide3 {
        background-color: #f1c40f;
      }
    </style>
  </head>
  <body>
    <div class="swiper-container">
      <div class="swiper-button">
        <button data-hash="1">slide1</button>
        <button data-hash="2">slide2</button>
        <button data-hash="3">slide3</button>
      </div>
      <div class="swiper-wrapper">
        <div class="swiper-slide slide1">Slide 1</div>
        <div class="swiper-slide slide2">Slide 2</div>
        <div class="swiper-slide slide3">Slide 3</div>
      </div>
    </div>
  </body>
  <script src="https://cdn.bootcdn.net/ajax/libs/Swiper/4.5.1/js/swiper.js"></script>
  <script>
    // 创建 Swiper 的实例对象 mySwiper
    var mySwiper = new Swiper(".swiper-container", {});

    let buttons = document.querySelectorAll(".swiper-button button");
    for (const i of buttons) {
      i.addEventListener("click", function (e) {
        mySwiper.slideTo(i.getAttribute("data-hash") - 1);
      });
    }
  </script>
</html>
```

## 总结

以上便是今天介绍到的，总体来说 slideTo 是更贴合实际开发的，希望会对你有所帮助。

<br />
<br />
<br />

`最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，感谢您的观看！`
官方文档：[Swiper-hashNavigation](https://www.swiper.com.cn/api/hash/211.html)
