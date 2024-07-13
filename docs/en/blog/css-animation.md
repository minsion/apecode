---
layout: doc
---

# CSS3 Transition Animation

## Preface

In the past, if we wanted to achieve animation effects on the page, we often needed to use javascript scripts to listen for events. Now with the introduction of CSS3, we can achieve animation effects more concisely. This article will mainly start from the three major points of transform, transition, and animate, and conduct an in-depth review of their properties.

## transform

![Please add image description](/images/blog/css/abbfe3e08b8a98da1ea3d65247220926.gif)

The transformation property allows you to `rotate`, `scale`, `tilt` or `translate` a given element. This is achieved by modifying the `coordinate space of the CSS visual formatting model`. The transformation property can be divided into 2D and 3D according to the effect after the transformation. The following will introduce them from the property value and usage.

### 2D transform

Related property values:

- translate(x, y) - `Translation`, relative position movement according to the corresponding values ​​of the x and y axes, similar to position:relative; translate(x) is equivalent to translate(x,0); optional units: all length units in CSS.
- translateX(x) - only set the offset position on the x axis.
- translateY(y) - only set the offset position on the y axis.
- rotate(deg) - `Rotation angle`, rotate the element with its own center as the origin according to the setting of the deg angle; optional unit: deg (unit for angles in CSS).
- scale(mul) - `Scale`, magnify and reduce the effect with its own center as the origin according to the mul scaling factor. The mul parameter is a real number greater than or equal to 0, with a default value of 1. Greater than 1 means magnification, and less than 1 means reduction.
- scaleX(mul) - change the width of the element.
- scaleY(mul) - changes the height of the element.
- skew(\<angle\> [,\<angle\>]) - `skew angle`, which indicates the angle of the X-axis and Y-axis respectively. If the second parameter is empty, the default is 0. A negative parameter indicates a tilt in the opposite direction. Optional unit: deg (the unit for angles in CSS).
- skewX(\<angle\>) - indicates tilt only on the X-axis (horizontal direction).
- skewY(\<angle\>) - indicates tilt only on the Y-axis (horizontal direction).
- matrix(a, b, c, d, tx, ty) - is a `combination setting` of 2D transformation methods, setting scaling, tilting and moving (translation) functions. .
- a - horizontal scaling
- b - horizontal tilting
- c - vertical tilting
- d - vertical scaling
- tx - horizontal movement
- ty - vertical movement

```html
<!-- 2d 案例 -->
<style>
  * {
    margin: 0;
    padding: 0;
  }
  .child {
    width: 100px;
    height: 100px;
    background-color: #8e44ad;
    transform: translate(150px, 60px) rotate(-35deg) scale(1.5) skew(1deg);
    /* transform: matrix(1.5, 0, 0, 1.5, 150, 60); */ /* 除了旋转外的同等配置 */
    color: #fff;
  }
</style>
<body>
  <div class="child">2D 转换</div>
</body>
```

### 3D transform

相关属性值：

- translate3d(x,y,z) - 定义 3D `转化`。
  - translateX(x) - 仅使用用于 X 轴的值。
  - translateY(y) - 仅使用用于 Y 轴的值。
  - translateZ(z) - 仅使用用于 Z 轴的值。
- rotate3d(x,y,z,angle) - 定义 3D `旋转`。
  - rotateX(angle) - 定义沿 X 轴的 3D 旋转。
  - rotateY(angle) - 定义沿 Y 轴的 3D 旋转。
  - rotateZ(angle) - 定义沿 Z 轴的 3D 旋转。
- scale3d(x,y,z) - 定义 3D `缩放`转换。
  - scaleX(x) - 通过给定一个 X 轴的值。
  - scaleY(y) - 通过给定一个 Y 轴的值。
  - scaleZ(z) - 通过给定一个 Z 轴的值。
- matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4) - 定义 3D 转换，使用 16 个值的 4x4 矩阵。
- perspective(n) - 定义 3D 转换元素的`透视视图`。
  - perspective() 这个 CSS 函数定义了 z=0 平面与用户之间的距离，以便给三维定位元素一定透视度。当每个 3D 元素的 z>0 时会显得比较大，而在 z<0 时会显得比较小。其影响的程度由这个属性的值来决定。
  - 该参数是一个 \<length\> 给定从用户（显示屏）到 z = 0 平面的距离。 它用于将透视图转换应用于元素。 如果它是 0 或负值，则不应用透视变换。

相关单位与 2d 的一致，就不过多描述，直接上案例。

```html
<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    padding: 100px;
  }
  .child {
    margin-bottom: 20px;
    width: 100px;
    height: 100px;
    color: #fff;
  }
  .translate3d {
    background-color: #8e44adee;
    transform: translate3d(30px, 30px, 30px);
  }
  .rotate3d {
    background-color: #2980b9ee;
    transform: rotate3d(20, 20, 20, 10deg);
  }
  .scale3d {
    background-color: #2c3e50ee;
    transform: scale3d(1.2, 1.2, 1.2);
  }
</style>
<body>
  <div class="child translate3d">3D 转化</div>
  <div class="child rotate3d">3D 旋转</div>
  <div class="child scale3d">3D 缩放</div>
</body>
```

### 其它相关转换属性

#### transform-origin

transform-origin 属性允许您更改转换元素的位置。默认转换位置是在元素的正中心。
2D 转换元素可以改变元素的 X 和 Y 轴。 3D 转换元素，还可以更改元素的 Z 轴。

```css
/* 语法 */
transform-origin: x-axis y-axis z-axis;
```

可选值：

- x-axis - 定义视图被置于 X 轴的何处。可能的值：left、center、right、length、%。
- y-axis - 定义视图被置于 X 轴的何处。可能的值：left、center、right、length、%。
- z-axis - 定义视图被置于 Z 轴的何处。可能的值：length。

#### transform-style

transform--style 属性指定嵌套元素是怎样在三维空间中呈现。
注意： 使用此属性必须先使用 transform 属性.

可选值：

- flat - 表示所有子元素在 2D 平面呈现。
- preserve-3d - 表示所有子元素在 3D 空间中呈现。

#### perspective

多少像素的 3D 元素是从视图的 perspective 属性定义。这个属性允许你改变 `3D 元素是怎样查看透视图`。
定义时的 perspective 属性，它是一个元素的子元素，透视图，而不是元素本身。perspective 属性只影响 3D 转换元素。

可选值：

- number - 元素距离视图的距离，以像素计。
- none - 默认值。与 0 相同。不设置透视。

#### perspective-origin

perspective-origin 属性定义 3D 元素所基于的 X 轴和 Y 轴。该属性允许您改变 `3D 元素的底部位置`。
定义时的 perspective -Origin 属性，它是一个元素的子元素，透视图，而不是元素本身。

```css
/* 语法 */
perspective-origin: x-axis y-axis;
```

可选值：

- x-axis - 定义该视图在 x 轴上的位置。默认值：50%。可能的值：left、center、right、length、%。
- y-axis - 定义该视图在 y 轴上的位置。默认值：50%。可能的值：left、center、right、length、%。

#### backface-visibility

backface-visibility 属性定义当元素背面向屏幕时是否可见。

可选值：

- visible - 背面是可见的。
- hidden - 背面是不可见的。

## transition

过渡可以为一个元素在不同状态之间切换的时候定义不同的过渡效果。比如在不同的伪元素之间切换，像是 :hover，:active 或者通过 JavaScript 实现的状态变化。

![请添加图片描述](/images/blog/css/b4aa838f647c69af446d6337a0322115.gif)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      .child {
        margin-top: 100px;
        display: flex;
        place-content: center;
        width: 150px;
        height: 100px;
        background-color: #8e44ad;
        border-radius: 10px;
        color: #ffffff;
        transition: transform ease-in-out 1s, background-color 0.5s ease-in-out 0.5s; /* 定义过渡 */
      }
      .child:hover {
        transform: translateX(20vw) scale(1.2) rotate(360deg);
        background-color: #2980b9;
      }
    </style>
  </head>
  <body>
    <div class="child">transition</div>
  </body>
</html>
```

### 相关属性

#### transition-property

transition-property：指定应用过渡属性的名称。默认值：all。

可选值：

- none - 没有过渡动画。
- all - 所有可被动画的属性都表现出过渡动画。
- IDENT - 属性名称。由小写字母 a 到 z，数字 0 到 9，下划线（\_）和破折号（-）。第一个非破折号字符不能是数字。同时，不能以两个破折号开头。

#### transition-duration

transition-duration：属性以秒或毫秒为单位指定过渡动画`所需的时间`。默认值为 0s ，表示不出现过渡动画。

#### transition-timing-function

transition-timing-function：指定切换效果的速度。

可选值：

- linear - 规定以`相同速度开始至结束`的过渡效果（同等于 cubic-bezier(0,0,1,1)）。
- ease - 规定以`慢速开始，然后变快，最后再以慢速结束`的过渡效果（同等于 cubic-bezier(0.25,0,1.0.25,1)）。
- ease-in - 规定以`慢速开始`的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。
- ease-in-out - 规定`以慢速结束`的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。
- cubic-bezier(n,n,n,n) - 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。
- step-start - 规定在`起点`发生跳跃变化。（等同于 step(1, start)）。
- step-end - 规定在`终点`发生跳跃变化。（等同于 step(1, end)）。
- steps(n, state) - 在 steps 函数中分别定义间隔数量和发生阶段跳跃变化的状态。
  - n - 常数。指定时间函数中的间隔数量。
  - state - 可选参数，属性值：start 或 end。分别是指在开始阶段、结束阶段发生跳跃变化。

![请添加图片描述](/images/blog/css/eda086d404867e22bff113dd915128d5.gif)

#### transition-delay

transition-delay：属性规定了在过渡效果开始作用之前需要`等待的时间`。

#### transition

transition：属性是 transition-property，transition-duration，transition-timing-function 和 transition-delay 的一个简写属性。

> 在 transition 中传入两个时间参数时候，会默认解析第一个时间参数为 transition-duration，第二个时间参数为 transition-delay。

```css
/* 相关语法：（出自MDN Web Docs） */

/* Apply to 1 property */
/* property name | duration */
transition: margin-right 4s;

/* property name | duration | delay */
transition: margin-right 4s 1s;

/* property name | duration | timing function */
transition: margin-right 4s ease-in-out;

/* property name | duration | timing function | delay */
transition: margin-right 4s ease-in-out 1s;

/* Apply to 2 properties */
transition: margin-right 4s, color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out;

/* Global values */
transition: inherit;
transition: initial;
transition: unset;
```

## animation

animations 使得可以将从一个 CSS 样式配置转换到另一个 CSS 样式配置。动画包括两个部分:描述动画的样式规则和用于指定动画开始、结束以及中间点样式的关键帧。

### 相关属性

- animation-delay - 设置延时，即从元素加载完成之后到动画序列开始执行的这段时间。
- animation-direction - 设置动画在每次运行完后是反向运行还是重新回到开始位置重复运行。
- animation-duration - 设置动画一个周期的时长。
- animation-iteration-count - 设置动画重复次数， 可以指定 infinite 无限次重复动画。
- animation-name - 指定由@keyframes 描述的关键帧名称。
- animation-play-state - 允许暂停和恢复动画。
- animation-timing-function - 设置动画速度， 即通过建立加速度曲线，设置动画在关键帧之间是如何变化。
- animation-fill-mode - 指定动画执行前后如何为目标元素应用样式。

animation-delay、animation-duration、animation-timing-function，与 transition 相关属性类似，可以参考上述内容。

### animation-direction

可选值：

- normal - 每个循环内动画向前循环，换言之，每个动画循环结束，动画`重置到起点`重新开始，默认值。
- alternate - 动画`交替反向运行`，反向运行时，动画按步后退，同时，带时间功能的函数也反向，比如，ease-in 在反向时成为 ease-out。计数取决于开始时是奇数迭代还是偶数迭代。
- reverse - 反向运行动画，每周期结束动画`由尾到头`运行。
- alternate-reverse - `反向交替`，反向开始交替，动画第一次运行时是反向的，然后下一次是正向，后面依次循环。决定奇数次或偶数次的计数从 1 开始。

![请添加图片描述](/images/blog/css/69be5d888e2434d534e0653d29c61368.gif)

```html
<!-- animate-direction -->
<style>
  .main {
    display: flex;
  }
  .container {
    margin: 10px;
    width: 360px;
    height: 300px;
    overflow: hidden;
    line-height: 20px;
    border: 1px dotted #666;
  }
  .item {
    width: 80px;
    height: 80px;
    background-color: skyblue;
    border-radius: 100%;
    animation-name: dire;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-delay: 2s;
  }
  .item1 {
    animation-direction: normal;
  }
  .item2 {
    animation-direction: alternate;
  }
  .item3 {
    animation-direction: reverse;
  }
  .item4 {
    animation-direction: alternate-reverse;
  }
  @keyframes dire {
    0%,
    100% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(0, 200px);
    }
    50% {
      transform: translate(200px, 200px);
    }
    75% {
      transform: translate(200px, 0);
    }
  }
</style>
<body>
  <div class="main">
    <div class="container">
      normal：默认值，动画结束后重置。
      <div class="item item1"></div>
    </div>
    <div class="container">
      alternate：动画交替反向运行。
      <div class="item item2"></div>
    </div>
    <div class="container">
      reverse：始终反向执行动画。
      <div class="item item3"></div>
    </div>
    <div class="container">
      alternate-reverse：交替执行动画，先执行反向。
      <div class="item item4"></div>
    </div>
  </div>
</body>
```

### animation-count

可选值：

- 正整数。
- infinite - 指定无限次执行动画。

### animation-play-state

可选值：

- running - 当前动画正在运行。
- paused - 当前动画已被停止。

### animation-fill-mode

可选值：

- none - 当动画未执行时，动画将不会将任何样式应用于目标，而是已经赋予给该元素的 CSS 规则来显示该元素。默认值。
- forwards - 目标将保留由执行期间遇到的`最后一个关键帧`计算值。
- backwards - 动画将在应用于目标时立即应用第一个关键帧中定义的值，并在 animation-delay 期间保留此值。
- both - 动画将遵循 forwards 和 backwards 的规则，从而在两个方向上扩展动画属性。

### animation

animation 属性是 animation-name，animation-duration, animation-timing-function，animation-delay，animation-iteration-count，animation-direction，animation-fill-mode 和 animation-play-state 属性的一个简写属性形式。

### keyframes

keyframes：定义动画中的关键帧，可以定义从 0% 到 100% 之间的动画状态。

语法：

```css
@keyframes anim {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(100px);
  }
}
/* 等同于 */
@keyframes anim {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(100px);
  }
}
```

通过 animate 实现一个简单的 loading 效果，附上代码：

![请添加图片描述](/images/blog/css/9f094415bed14d4eb03cf69982d970b4.gif)

```html
<!-- loading-demo -->
<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #2c3e50;
  }
  .main {
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  .item {
    margin: 0 10px;
    width: 20px;
    height: 100px;
    background-color: #2980b9;
    border-radius: 15px;
  }
  .item:nth-child(1) {
    animation: loading 1s linear 0s alternate infinite;
  }
  .item:nth-child(2) {
    animation: loading 1s linear 0.25s alternate infinite;
  }
  .item:nth-child(3) {
    animation: loading 1s linear 0.5s alternate infinite;
  }
  .item:nth-child(4) {
    animation: loading 1s linear 0.75s alternate infinite;
  }
  .item:nth-child(5) {
    animation: loading 1s linear 1s alternate infinite;
  }
  @keyframes loading {
    0% {
      height: 100px;
      background-color: #f39c12;
    }
    25% {
      height: 75px;
      background-color: #c0392b;
    }
    50% {
      height: 50px;
      background-color: #27ae60;
    }
    75% {
      height: 25px;
      background-color: #2980b9;
    }
    100% {
      height: 15px;
      background-color: #8e44ad;
    }
  }
</style>
<body>
  <div class="main">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</body>
```

`最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，感谢您的观看！`

官方文档：
[MDN Web Docs](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
