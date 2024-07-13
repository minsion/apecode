---
layout: doc
---

# SwiperJS 入门及实现常见的轮播效果

Swiper(Swiper master)是目前应用较广泛的移动端网页触摸内容滑动 js 插件。通过它可以快速地制作轮播图、h5 等许多功能展现。

本文将从如何正确入门、如何结合 animate.css 实现入场动画、如何实现的不同的轮播图效果等。内容丰富，有需要的小伙伴可以收藏食用。

## 使用

1. 使用 swiper 文件或者 cdn 加载（使用 swiperJS 需要同时引入 swiper.css 和 swiper.js 两个文件。本文主要是通过 cdn 加载的方式，并且考虑到浏览器的兼容性，使用 v4.5.1）

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SwiperJS</title>
    <!-- 引入相关的 css 文件 -->
    <link href="https://cdn.bootcdn.net/ajax/libs/Swiper/4.5.1/css/swiper.css" rel="stylesheet" />
  </head>
  <body>
    ...
  </body>
  <!-- 引入相关的 js 文件 -->
  <script src="https://cdn.bootcdn.net/ajax/libs/Swiper/4.5.1/js/swiper.js"></script>
</html>
```

2. html 页面结构配置

```html
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
  </div>
  <!-- 如果需要分页器 -->
  <div class="swiper-pagination"></div>

  <!-- 如果需要导航按钮 -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- 如果需要滚动条 -->
  <div class="swiper-scrollbar"></div>
</div>
<!-- 导航等组件可以放在container之外 -->
```

3. js 中初始化轮播图

```js
let mySwiper = new Swiper(".swiper-container", {
  direction: "vertical", // 垂直切换选项
  loop: true, // 循环模式选项

  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination",
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // 如果需要滚动条
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
```

4. 完整 Demo 代码

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
      div.swiper-container {
        width: 100vw;
        height: 100vh;
      }
      div.swiper-slide {
        width: 100%;
        height: 100%;
        color: #ffffff;
      }
      div.swiper-slide:nth-child(1) {
        background-color: #16a085;
      }
      div.swiper-slide:nth-child(2) {
        background-color: #2980b9;
      }
      div.swiper-slide:nth-child(3) {
        background-color: #f1c40f;
      }
    </style>
  </head>
  <body>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
  </body>
  <script src="https://cdn.bootcdn.net/ajax/libs/Swiper/4.5.1/js/swiper.js"></script>
  <script>
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  </script>
</html>
```

初始化完成后效果图：

![2021012616441175.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f2048523379e451193f3e34563945d34~tplv-k3u1fbpfcp-watermark.image?)

## 个性化

除了 Dome 案例中的默认样式之外，Swiper 还提供了许多的内置参数，可供我们个性化调整。

### 1. direction：滑动方向

参数：

- horizontal ：（默认）水平方向
- vertical：垂直方向

### 2. speed：滑动时间

参数：

- number ：（默认：300），单位：ms

### 3. autoHeight：高度自适应

设置为 true 时，wrapper 和 container 会随着当前 slide 的高度而发生变化。

参数：

- boolean：（默认：false）

### 4. autoPlay：自动滑动

参数：

- boolean：（默认：false）

`更多参数的使用说明，可前往 SwiperJS 官方文档查询` [文档](https://swiperjs.com/get-started)

## 跳转指定 slide

> 在日常的 Swiper.js 开发当中，我们难免需要实现：当某个按钮的点击，然后显示相对应的 slide 模块，类似分页器的。实现方式主要为：Swiper 的内置参数 hashNavigation 与 slideTo() 方法。

### hashNavigation

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

[hashNavigation - Swiper 文档](https://www.swiper.com.cn/api/hash/211.html)

### slideTo

- slideTo(number) 是 swiper 实例对象的一个`方法`，通过传进的数值。
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

## 切换动画

在 SwiperJS 可以结合 animate.css，实现轮播图切换时的入场动画。

animate.css 是一个强大的跨平台的预设 css3 动画库，内置了许多的 css3 动画效果，并且兼容性较好，同时属于 MIT 开源协议，支持商用。

![0657e3325a5b4730979f350f6645671b.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1b79d13a29584a86b2fe233895b72668~tplv-k3u1fbpfcp-watermark.image?)

### 准备

在实现轮播图切换时自带入场时，需要提前准备相关源文件，如下。

- swiper.css：swiper 框架的样式。
- swiper.js：实现 swiper 的逻辑文件。
- animate.css：常见的动画样式框架。
- swiper-animate.js：根据 swiper 效果控制动画。  
  [相关文件下载](https://www.swiper.com.cn/download/index.html#file9)

### 前置知识

1. 在需要设置动画的元素中添加 ani 类名。
2. 为需要设置动画的元素设置动画名（必要的）、动画的持续时间、动画的延迟触发时间。

```html
<!-- 1. 例如 -->
<h1 class="ani">Swiper 是什么?</h1>

<!-- 2. 例如 -->
<!-- swiper-animate-effect 值需要与 animate.css 中动画名相对应 -->
<img
  class="ani img"
  swiper-animate-effect="fadeInUp"
  swiper-animate-duration="0.5s"
  swiper-animate-delay="0.3s"
  src=""
/>
```

3. 配置完成后，初始化

```js
on: {
  init: function () {
    swiperAnimateCache(this); //隐藏动画元素
    swiperAnimate(this); //初始化完成开始动画
  },
  slideChange: function () {
    swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
  },
},
```

### 完整 Demo

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SwiperJS</title>
    <link href="https://cdn.bootcdn.net/ajax/libs/Swiper/4.5.1/css/swiper.css" rel="stylesheet" />
    <link href="https://cdn.bootcdn.net/ajax/libs/animate.css/2.0/animate.css" rel="stylesheet" />
    <style>
      body,
      div {
        margin: 0;
        padding: 0;
      }
      div.swiper-container {
        width: 100vw;
        height: 100vh;
      }
      .swiper-wrapper .swiper-slide {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: #ffffff;
      }
      .swiper-wrapper .swiper-slide.bg1 {
        background-color: #16a085;
      }
      .swiper-wrapper .swiper-slide.bg2 {
        background-color: #2980b9;
      }
    </style>
  </head>
  <body>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide bg1">
          <img
            class="ani bg1"
            swiper-animate-effect="flip"
            src="https://ae01.alicdn.com/kf/U750d4e4b89e447f0bf8df87b0c97a505C.jpg"
          />
          <h1 class="ani" swiper-animate-effect="bounceInLeft">Swiper</h1>
        </div>
        <div class="swiper-slide bg2">
          <h1 class="ani" swiper-animate-effect="bounceInRight">Swiper 是什么?</h1>
          <p class="ani" swiper-animate-effect="bounceInRight" swiper-animate-delay="0.2s">
            Swiper是纯javascript打造的滑动特效插件，面向手机、平板电脑等移动终端。
          </p>
          <p class="ani" swiper-animate-effect="bounceInRight" swiper-animate-delay="0.4s">
            Swiper能实现触屏焦点图、触屏Tab切换、触屏轮播图切换等常用效果。
          </p>
          <p class="ani" swiper-animate-effect="bounceInRight" swiper-animate-delay="0.6s">
            Swiper开源、免费、稳定、使用简单、功能强大，是架构移动终端网站的重要选择！
          </p>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </body>
  <script src="https://cdn.bootcdn.net/ajax/libs/Swiper/4.5.1/js/swiper.js"></script>
  <script src="./js/swiper.animate1.0.3.js"></script>
  <script>
    var mySwiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: true,
      // 在swiper中初始化animate动画
      on: {
        init: function () {
          swiperAnimateCache(this); //隐藏动画元素
          swiperAnimate(this); //初始化完成开始动画
        },
        slideChange: function () {
          swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        },
      },
    });
  </script>
</html>
```

## 轮播类型

### coverflow 封面轮播图

> swiper 轮播图效果扩展一：coverflow 封面轮播图主要常用在一些音乐播放网站，或者视频网站中，主要是通过放大正在轮播的图片，从而实现捕获用户的眼球，减少其他未轮播到的轮播图视觉上的干扰，本文我们就通过 swiper 库来简单实现一下。

最终效果：

![20210226121140243.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/43a163b397314e59bfe5c6c3e4d3df8c~tplv-k3u1fbpfcp-watermark.image?)

`实现原理`：在 swiper 中内置了四种轮播的样式，可设置为’slide’（普通切换、默认）,“fade”（淡入）“cube”（方块）“coverflow”（3d 流）“flip”（3d 翻转）。然后 coverflow 和我们要实现的效果相似，可以通过设置了 coverflow 效果，然后再来调整。

coverflow 效果参数，可选值：（属性名，coverflowEffect，启用版本 4.0.0）

| 参数名       | 默认 | 描述                                                                                                                         |
| ------------ | ---- | ---------------------------------------------------------------------------------------------------------------------------- |
| rotate       | 50   | slide 做 3d 旋转时 Y 轴的旋转角度                                                                                            |
| stretch      | 0    | 每个 slide 之间的拉伸值，越大 slide 靠得越紧。5.3.6 后可使用%百分比                                                          |
| depth        | 100  | slide 的位置深度。值越大 z 轴距离越远，看起来越小。                                                                          |
| modifier     | 1    | depth 和 rotate 和 stretch 的倍率，相当于 depth*modifier、rotate*modifier、stretch\*modifier，值越大这三个参数的效果越明显。 |
| slideShadows | true | 是否开启 slide 阴影                                                                                                          |

#### 相关代码

1. 引入 swiper

```html
<!-- swiper库版本 4.5.1 -->
<link href="https://cdn.bootcdn.net/ajax/libs/Swiper/4.5.1/css/swiper.css" rel="stylesheet" />
<script src="https://cdn.bootcdn.net/ajax/libs/Swiper/4.5.1/js/swiper.js"></script>
```

2. html 页面搭建

```html
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide one">Slide 1</div>
    <div class="swiper-slide two">Slide 2</div>
    <div class="swiper-slide three">Slide 3</div>
  </div>
  <!-- 分页器 -->
  <div class="swiper-pagination"></div>
</div>
```

3. css 样式美化

```css
body,
div {
  margin: 0;
  padding: 0;
}
div.swiper-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  border-radius: 5px;
}
div.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 60px;
}
div.one {
  background-color: #34495e;
}
div.two {
  background-color: #d35400;
}
div.three {
  background-color: #16a085;
}
```

4. js 轮播图初始化

```js
var mySwiper = new Swiper(".swiper-container", {
  autoplay: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  centeredSlides: true, // 居中显示正在展示的slide，默认是居左对齐。
  slidesPerView: 2, // 一次显示多少个 slide，这里因为 coverflowEffect子参数设定，设置为3的时候是不能够充满父盒子的，所以要比真正显示的盒子少才行。
  effect: "coverflow", // 轮播效果
  coverflowEffect: {
    // coverflow 效果细节调整
    rotate: 0,
    stretch: 50,
    depth: 350,
  },
});
```

### thumbs 缩略轮播图

> swiper 轮播图效果扩展二：thumbs.

最终效果：

![20210226164934429.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0043057e02e94d3eaacc9e7aa2382233~tplv-k3u1fbpfcp-watermark.image?)

`实现原理`：同时初始化两个 swiper 示例，通过 css 调整显示的比例样式，在 swiper 初始化示例时使用 thumbs 属性，定义为主轮播图的缩略轮播图。

[thumbs - swiper 中文网](https://www.swiper.com.cn/api/thumbs/2018/0915/431.html)

#### 相关代码

有个小坑，用 swiper4.5.1 居然会没有 swiper-slide-thumb-active 类的添加，用早一些版本的又可以正常切换。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>coverflow</title>
    <link href="https://cdn.bootcdn.net/ajax/libs/Swiper/4.5.0/css/swiper.css" rel="stylesheet" />
    <style>
      body,
      div {
        margin: 0;
        padding: 0;
      }

      .container {
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 650px;
        height: 800px;
        border-radius: 5px;
      }

      .swiper-container {
        width: 80%;
        height: 100%;
      }

      .swiper-container-thumbs {
        width: 15%;
        height: 100%;
      }

      .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        font-size: 60px;
        overflow: hidden;
      }

      .swiper-container-thumbs .swiper-slide {
        font-size: 20px;
        /* background: url(../images/1.png) no-repeat center center/auto 100% #000; */
        opacity: 0.5;
      }

      .swiper-container-thumbs .swiper-slide-thumb-active {
        opacity: 1;
      }

      .one {
        background-color: #34495e;
      }
      .two {
        background-color: #d35400;
      }
      .three {
        background-color: #16a085;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide one">Slide 1</div>
          <div class="swiper-slide two">Slide 2</div>
          <div class="swiper-slide three">Slide 3</div>
        </div>
      </div>
      <div class="swiper-container-thumbs">
        <div class="swiper-wrapper">
          <div class="swiper-slide one">Slide 1</div>
          <div class="swiper-slide two">Slide 2</div>
          <div class="swiper-slide three">Slide 3</div>
        </div>
      </div>
    </div>
  </body>
  <script src="https://cdn.bootcdn.net/ajax/libs/Swiper/4.5.0/js/swiper.js"></script>
  <script>
    let thumbsSwiper = new Swiper(".swiper-container-thumbs", {
      direction: "vertical",
      slidesPerView: 3,
      spaceBetween: 20,
      watchSlidesVisibility: true,
    });
    let mySwiper = new Swiper(".swiper-container", {
      autoplay: true,
      direction: "vertical",
      spaceBetween: 20,
      thumbs: {
        swiper: thumbsSwiper,
      },
    });
  </script>
</html>
```

### other-translate 另类轮播图

> swiper 轮播图效果扩展三：other-translate。与常规轮播图不同，在轮播时，图片过渡显示的区域是从中间慢慢隐藏。

最终效果：

![f897cf2a59454ac6a621e28770770e59.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8c83609e883f4f9992dffcb739cdca7f~tplv-k3u1fbpfcp-watermark.image?)

`实现原理`：通过 swiper 中 progress 事件监听，动态设置节点 css:transform 样式。

#### 相关代码

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>other-translate</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />

    <!-- Link Swiper6 CSS -->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css" />

    <!-- Demo styles -->
    <style>
      html,
      body {
        position: relative;
        height: 100%;
      }

      body {
        background: #eee;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: #000;
        margin: 0;
        padding: 0;
        overflow: hidden;
      }

      .swiper-container {
        width: 100%;
        height: 100%;
      }

      .swiper-slide {
        background: #fff;
        text-align: center;
        font-size: 10vw;
        overflow: hidden;
      }

      .slide-inner {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        text-shadow: 0 0 10px #000000;
      }
    </style>
  </head>

  <body>
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div
            class="slide-inner"
            style="background-image: url('https://cdn.pixabay.com/photo/2017/01/24/03/54/urban-2004494_960_720.jpg')"
          >
            slide-1
          </div>
        </div>
        <div class="swiper-slide">
          <div
            class="slide-inner"
            style="background-image: url('https://cdn.pixabay.com/photo/2018/12/09/07/36/city-3864462_960_720.jpg')"
          >
            slide-2
          </div>
        </div>
        <div class="swiper-slide">
          <div
            class="slide-inner"
            style="background-image: url('https://cdn.pixabay.com/photo/2014/06/01/09/25/paris-359503_960_720.jpg')"
          >
            slide-3
          </div>
        </div>
      </div>
      <!-- Navigation -->
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
    </div>

    <!-- Swiper6 JS -->
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>

    <!-- Initialize Swiper -->
    <script>
      var interleaveOffset = 0.5; // 视差比值(取值范围(-infinity, +infinity))

      var swiperOptions = {
        speed: 1000, // 单页的滑动过渡消耗时间
        grabCursor: true, // 鼠标变成手掌形状
        watchSlidesProgress: true, // Progress（进度、进程）分为swiper的progress 和每个slide单独的progress。
        mousewheel: true, // 鼠标控制
        keyboard: true, // 键盘控制
        navigation: {
          // 前进后退按钮
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // 事件
        on: {
          /* 当Swiper的progress被改变时执行. */
          progress: function (swiper) {
            for (var i = 0; i < swiper.slides.length; i++) {
              var slideProgress = swiper.slides[i].progress; // slide单独的progress。
              var innerOffset = swiper.height * interleaveOffset; // 偏移距离 = 当前滑块的宽度 * 视差值
              var innerTranslate = slideProgress * innerOffset;
              swiper.slides[i].querySelector(".slide-inner").style.transform =
                "translate3d(" + innerTranslate + "px, 0,  0)";
            }
          },

          /* 当碰触到slider时执行. */
          touchStart: function (swiper) {
            for (var i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition = "";
            }
          },

          /* 每当设置Swiper开始过渡动画时执行.开始滑动和结束滑动时触发。 */
          setTransition: function (swiper, speed) {
            for (var i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition = speed + "ms";
              swiper.slides[i].querySelector(".slide-inner").style.transition = speed + "ms";
            }
          },
        },
      };

      new Swiper(".swiper-container", swiperOptions);
    </script>
  </body>
</html>
```

## 最后

`最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，感谢您的观看！`

- [官网](https://swiperjs.com/)
