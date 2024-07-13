---
layout: doc
---

# CSS Position 定位布局

## 前言

在页面开发的过程中，CSS 页面布局技术允许我们拾取网页中的元素，并且控制它们相对正常布局流、周边元素、父容器或者主视口/窗口的位置。
当前主要的布局方式有：浮动布局(Float)、定位布局(Position)、弹性布局(Flex)、网格布局(Grid)等，本文将探讨 position 定位布局。

## 一、 Position 定位布局

定位(positioning)能够让我们把一个元素从它原本在正常布局流(normal flow)中应该在的位置移动到另一个位置。定位(positioning)`并不是一种页面布局的方式`，它更像是让你去管理和微调页面中的一个特殊项的位置。

有一些非常有用的技术在特定的布局下依赖于 position 属性。同时，理解定位(positioning)也能够帮助你理解正常布局流(normal flow)，理解把一个元素移出正常布局流(normal flow)是怎么一回事。

## 二、 属性值

在 CSS 中，可以使用 position 属性快速定义这个标签是某种定位类型。通过 top，right，bottom 和 left 属性决定了该元素的最终位置。

### 定位类型

- 静态定位(Static positioning): 是每个元素默认的属性——它表示“将元素放在文档布局流的默认位置——没有什么特殊的地方”。
- 相对定位(Relative positioning): 允许我们相对于元素在正常的文档流中的位置移动它——包括将两个元素叠放在页面上。这对于微调和精准设计(design pinpointing)非常有用。
- 绝对定位(Absolute positioning): 将元素完全从页面的正常布局流(normal layout flow)中移出，类似将它单独放在一个图层中。我们可以将元素相对于页面的 \<html\> 元素边缘固定，或者相对于该元素的最近被定位祖先元素 (nearest positioned ancestor element)。绝对定位在创建复杂布局效果时非常有用，例如通过标签显示和隐藏的内容面板或者通过按钮控制滑动到屏幕中的信息面板。
- 固定定位(Fixed positioning): 与绝对定位非常类似，但是它是将一个元素相对浏览器视口固定，而不是相对另外一个元素。 这在创建类似在整个页面滚动过程中总是处于屏幕的某个位置的导航菜单时非常有用。
- 粘性定位(Sticky positioning): 是一种新的定位方式，它会让元素先保持和 position: static 一样的定位，当它的相对视口位置(offset from the viewport)达到某一个预设值时，他就会像 position: fixed 一样定位。

### 语法

```css
position: static | relative | absolute | fixed | sticky;
```

### top，right，bottom，left 属性

分别定义了盒子属性上下左右四个方向的距离。

可选项：

- length - 使用 px、cm 等单位设置元素的具体方向位置。可使用负值。
- % - 设置包含元素的百分比计的具体方向位置。可使用负值。
- inherit - 规定应该从父元素中继承对应的属性值。
- auto - 通过浏览器计算方向位置（默认值）。

## 三、 实例

### 相对定位

相对定位(relative positioning)让你能够把一个正常布局流(normal flow)中的元素从它的默认位置按坐标进行相对移动，`不影响其他元素的偏移`。

```html
<style>
  .child {
    float: left; /* 让所有的 child 元素靠左侧排列 */
    margin: 5px;
    width: 100px;
    height: 100px;
    background-color: #2c3e50;
    color: #fff;
  }
  .child2 {
    background-color: #3498dbf0; /* 十六进制色值表示法，前面六位代表色值，后两位代表透明度 */
    position: relative; /* 定义相对定位 */
    top: 50px; /* 元素顶部距离 */
    left: 50px; /* 元素左侧距离 */
  }
</style>
<body>
  <div class="child child1">child1</div>
  <div class="child child2">child2</div>
  <div class="child child3">child3</div>
  <div class="child child3">child4</div>
</body>
```

![position-relative](/images/blog/css/20210623115800209.png)

### 绝对定位

绝对定位用于将元素`移出正常布局流(normal flow)`，`影响其他元素的偏移`，将以坐标的形式相对于它的容器定位到 web 页面的任何位置，以创建复杂的布局。有趣的是，它经常被用于与相对定位和浮动的协同工作。

在布置文档流中其它元素时，绝对定位元素不占据空间。绝对定位元素相对于最近的非 static 祖先元素定位。当这样的祖先元素不存在时，则相对于 ICB（inital container block, 初始包含块）。

- 实例中，child2 定义绝对定位，使其脱离原本的文档流， child3 依次代替 child2 的文档位置；并且定义的 top，left 属性值所参考的距离也变为外层盒子（这里是 body）。

```html
<style>
  .child {
    float: left; /* 让所有的 child 元素靠左侧排列 */
    margin: 5px;
    width: 100px;
    height: 100px;
    background-color: #2c3e50;
    color: #fff;
  }
  .child2 {
    background-color: #3498dbf0; /* 十六进制色值表示法，前面六位代表色值，后两位代表透明度 */
    position: absolute; /* 定义绝对定位 */
    top: 50px; /* 元素顶部距离 */
    left: 50px; /* 元素左侧距离 */
  }
</style>
<body>
  <div class="child child1">child1</div>
  <div class="child child2">child2</div>
  <div class="child child3">child3</div>
  <div class="child child3">child4</div>
</body>
```

![position-absolute](/images/blog/css/20210623115815803.png)

- 在实际的开发当中，我们不可能只是圈套一层 div 盒子，如：在子盒子外层再定义一个 father 盒子，并且让这个 father 盒子水平居中起来，这个时候不难发现原本定义的 child2 盒子的绝对定位并不是基于 father 盒子偏移的，这是`因为绝对定位元素相对于最近的非 static 祖先元素定位`。这个时候我们可以采用`父相子绝`的方式，为 father 的选择器添加相对定位即可。

```html
<style>
  .father {
    margin: 0 auto; /* 水平居中 */
    width: 500px;
    height: 200px;
    border: 5px double skyblue;
    /* position: relative; */
  }
  .child {
    float: left; /* 让所有的 child 元素靠左侧排列 */
    margin: 5px;
    width: 100px;
    height: 100px;
    background-color: #2c3e50;
    color: #fff;
  }
  .child2 {
    background-color: #3498dbf0; /* 十六进制色值表示法，前面六位代表色值，后两位代表透明度 */
    position: absolute; /* 设置绝对定位 */
    top: 50px; /* 元素顶部距离 */
    left: 50px; /* 元素左侧距离 */
  }
</style>
<div>
  <div class="father">
    <div class="child child1">child1</div>
    <div class="child child2">child2</div>
    <div class="child child3">child3</div>
    <div class="child child3">child4</div>
  </div>
</div>
```

![position-父相子绝](/images/blog/css/20210623115823552.png)

### 固定定位

固定定位(fixed positioning)同绝对定位(absolute positioning)一样，将元素从文档流(document flow)当中移出了。但是，定位的坐标不会应用于"容器"边框来计算元素的位置，而是会应用于视口(viewport)边框。利用这一特性，我们可以轻松搞出一个固定位置的菜单，而不受底下的页面滚动的影响。

```html
<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    height: 2000px;
  }
  ul,
  li {
    list-style: none;
  }
  .navbar,
  .navbar ul {
    width: 100%;
    overflow: hidden; /* 防止因浮动所产生的盒子塌陷 */
    background-color: #2c3e50;
    color: #fff;
  }

  .navbar {
    /* position: fixed; */ /* 定义固定定位 */
  }
  .navbar ul li {
    float: left;
    width: 20%;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
</style>
<body>
  <nav class="navbar">
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
      <li>item 5</li>
    </ul>
  </nav>
</body>
```

### 粘性定位

粘性定位(sticky positioning)是最后一种我们能够使用的定位方式。它 `将默认的静态定位(static positioning)和固定定位(fixed positioning)相混合`。当一个元素被指定了 position: sticky 时，它会在正常布局流中滚动，直到它出现在了我们给它设定的相对于容器的位置，这时候它就会停止随滚动移动，就像它被应用了 position: fixed 一样。

```html
<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    height: 2000px;
  }
  ul,
  li {
    list-style: none;
  }
  .navbar,
  .navbar ul {
    width: 100%;
    overflow: hidden; /* 防止因浮动所产生的盒子塌陷 */
    background-color: #2c3e50;
    color: #fff;
  }
  .navbar {
    position: sticky; /* 定义粘性定位 */
    top: 0; /* 触发位置 */
    margin-top: 500px;
  }
  .navbar ul li {
    float: left;
    width: 20%;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
</style>
<body>
  <nav class="navbar">
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
      <li>item 5</li>
    </ul>
  </nav>
</body>
```

## 总结

以上便是今天所介绍的 position 全部内容，在实际的开发当中“父相子绝”，是经常会用到的；还有就是通过 sticky 粘性定位可以快速实现导航栏的响应式固定，在其出现之前实现方式是通过 javascript 脚本实现的，为此大大提高了开发效率。

<br />
<br />
<br />

`最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，感谢您的观看！`

官方文档：[MDN Web Docs - position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)
