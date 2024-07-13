---
layout: doc
---

# CSS Flex 弹性布局

## 前言

在页面开发的过程中，CSS 页面布局技术允许我们拾取网页中的元素，并且控制它们相对正常布局流、周边元素、父容器或者主视口/窗口的位置。
当前主要的布局方式有：浮动布局(Float)、定位布局(Position)、弹性布局(Flex)、网格布局(Grid)等，本文将探讨 flex 弹性布局。

## Flex

Flex 弹性布局，定义了一种针对用户界面设计而优化的 CSS 盒子模型。在弹性布局模型中，弹性容器的子元素可以在任何方向上排布，也可以“弹性伸缩”其尺寸，既可以增加尺寸以填满未使用的空间，也可以收缩尺寸以避免父元素溢出。子元素的水平对齐和垂直对齐都能很方便的进行操控。通过嵌套这些框（水平框在垂直框内，或垂直框在水平框内）可以在两个维度上构建布局。

## 一、专业名词

- 弹性盒子（Flexbox）
  Flexbox 是 CSS Flexible Box Layout Module 的常用名称，这是一种用于`在单个维度（行或列）中显示项目的布局模型`。

- 伸缩盒子（Flex Container）
  - 定义一个 flexbox（伸缩盒布局），需要在一个父级元素上使用 display 属性的值：flex 或 inline-flex。这个父级元素将成为 flex container（伸缩容器），而它的所有子元素将变成 flex item（伸缩项）。
  - 使用 flex 值能将元素渲染成为一个块级容器，而使用 inline-flex 值则是渲染成一个行内伸缩容器。这些值会将元素格式化，产生 flex formatting context（伸缩格式化上下文），这类似于块的格式化上下文，而浮动不会干扰容器，且容器的 margins（所有边距）不会随着这些项目被折叠。
- 弹性项目（Flex Item）
  Flex Container(弹性容器)的一级子元素(设置 display: flex 或 display: inline-flex 的子元素)将成为弹性元素。弹性容器内的连续文本，也将成为弹性元素。

- 主轴（Main Axis）
  主轴是由弹性容器 flexbox 中弹性方向 flex-direction 属性所定义的的。用来定义主轴上的子元素排列顺序。

- 交叉轴（Cross Axis）
  弹性容器 flexbox 的交叉轴和主轴 main axis 垂直的。用来定义主轴上的子元素排列顺序。

- 伸缩性（Flex）
  flex 是一个 CSS 的 display 属性中新添加一个值。 随着 inline-flex 的使用，它将使它适用的元素成为一个 flex container（伸缩容器），而这个元素的每个子元素将成为 flex item（伸缩项目）。伸缩项目将参与到 flex 布局中，所有由 CSS Flexible Box Layout Module（CSS 伸缩盒布局模型）定义的属性都能被它们使用。
  flex 属性是 flex-grow, flex-shrink 和 flex-basis 属性的简写。

## 二、属性值

### 定义 flex 布局

可选值：

- flex - 将元素渲染成为一个块级容器
- inline-flex - 渲染成一个行内伸缩容器。

> flex 和 inline-flex 区别在于，inline-flex 容器为 inline 特性，因此可以和图片文字一行显示；flex 容器保持块状特性，宽度默认 100%，不和内联元素一行显示。

语法：

```css
选择器 {
  display: flex | inline-flex;
}
```

```html
<style>
  .container {
    background-color: #7f8c8d;
    border: 5px dashed #34495e;
    /* flex 伸缩布局-开始 */
    display: flex;
    /* flex-direction: row | row-reverse | column | column-reverse; */
    /* flex-wrap: nowrap | wrap | wrap-reverse; */
    /* flex-flow: <row | row-reverse | column | column-reverse> || <nowrap | wrap | wrap-reverse>; */
    /* flex 伸缩布局-结束 */
  }
  .item-box {
    margin: 5px;
    width: 100px;
    height: 50px;
    background-color: #ecf0f1;
    color: #000;
    line-height: 50px;
    text-align: center;
  }
  .item-box:nth-of-type(odd) {
    height: 80px;
    line-height: 80px;
  }
</style>
<body>
  <div class="container">
    <div class="item-box item1">item1</div>
    <div class="item-box item2">item2</div>
    <div class="item-box item3">item3</div>
    <div class="item-box item4">item4</div>
    <div class="item-box item5">item5</div>
    <div class="item-box item6">item6</div>
    <div class="item-box item7">item7</div>
    <div class="item-box item8">item8</div>
  </div>
</body>
```

![在这里插入图片描述](/images/blog/css/20210624155453277.png)

### CSS 属性

#### flex-direction

指定了内部元素是如何在 flex 容器中布局的，定义了主轴的方向(正方向或反方向)。

可选值：

- row（初始值） - flex 容器的主轴被定义为与文本方向相同。 主轴起点和主轴终点与内容方向相同。
- row-reverse - 表现和 row 相同，但是置换了主轴起点和主轴终点
- column - flex 容器的主轴和块轴相同。主轴起点与主轴终点和书写模式的前后点相同
- column-reverse - 表现和 column 相同，但是置换了主轴起点和主轴终点

![在这里插入图片描述](/images/blog/css/20210624155516797.png)

#### flex-wrap

指定 flex 元素`单行显示还是多行显示`。如果允许换行，这个属性允许你控制行的堆叠方向。

可选值：

- nowrap - flex 的元素被摆放到到一行，这可能导致溢出 flex 容器。 cross-start 会根据 flex-direction 的值 相当于 start 或 before。
- wrap - flex 元素 被打断到多个行中。cross-start 会根据 flex-direction 的值选择等于 start 或 before。cross-end 为确定的 cross-start 的另一端。
- wrap-reverse - 和 wrap 的行为一样，但是 cross-start 和 cross-end 互换。

![在这里插入图片描述](/images/blog/css/20210624155554689.png)

#### flex-flow

flex-flow 属性是 flex-direction 和 flex-wrap 的简写。

语法：

```css
选择器 {
  flex-flow: <flex-direction> <flex-wrap>;
}
```

#### flex-grow

设置了一个 flex 项主尺寸的 flex`增长系数`。它指定了 flex 容器中剩余空间的多少应该分配给项目（flex 增长系数）。

主尺寸是项的宽度或高度，这取决于 flex-direction 值。剩余的空间是 flex 容器的大小减去所有 flex 项的大小加起来的大小。如果所有的兄弟项目都有相同的 flex-grow 系数，那么所有的项目将获得相同的剩余空间，否则将根据不同的 flex-grow 系数定义的比例进行分配。

属性值：

- \<number\>。负值无效，默认为 0。

```html
<style>
  .container {
    margin-top: 30px;
    background-color: #7f8c8d;
    border: 5px dashed #34495e;
    display: flex;
  }
  .item-box {
    margin: 5px;
    width: 100px;
    height: 50px;
    background-color: #ecf0f1;
    color: #000;
    line-height: 50px;
    text-align: center;
  }
  .item-box:nth-of-type(odd) {
    height: 80px;
    line-height: 80px;
  }
  .item1 {
    flex-grow: 1; /* 设置 item1 的增长系数 */
  }
  .item2 {
    flex-grow: 2; /* 设置 item2 的增长系数 */
  }
</style>
<body>
  <div class="container">
    <div class="item-box item1">item1</div>
    <div class="item-box item2">item2</div>
    <div class="item-box item3">item3</div>
    <div class="item-box item4">item4</div>
    <div class="item-box item5">item5</div>
  </div>
</body>
```

![在这里插入图片描述](/images/blog/css/20210624155609790.png)

#### flex-shrink

指定了 flex 元素的`收缩规则`。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。

属性值：

- \<number\>。负值无效，默认为 0。

#### flex-basis

指定了 flex 元素在主轴方向上的初始大小。如果不使用 box-sizing 改变盒模型的话，那么这个属性就决定了 flex 元素的内容盒（content-box）的尺寸。

当一个元素同时被设置了 flex-basis (除值为 auto 外) 和 width (或者在 flex-direction: column 情况下设置了 height) , flex-basis 具有更高的优先级。

可选值：

- width - css 中的长度尺寸（px、em 等），该值也可以是一个相对于其父弹性盒容器主轴尺寸的百分数 。负值是不被允许的。默认为 auto。
- 关键词 content - 基于 flex 的元素的内容自动调整大小。

#### flex

flex CSS 简写属性设置了弹性项目如何增大或缩小以适应其弹性容器中可用的空间。

```css
选择器 {
  /* 关键字值 */
  flex: auto;
  flex: initial;
  flex: none;

  /* 一个值, 无单位数字: flex-grow */
  flex: 2;

  /* 一个值, width/height: flex-basis */
  flex: 10em;
  flex: 30px;
  flex: min-content;

  /* 两个值: flex-grow | flex-basis */
  flex: 1 30px;

  /* 两个值: flex-grow | flex-shrink */
  flex: 2 2;

  /* 三个值: flex-grow | flex-shrink | flex-basis */
  flex: 2 2 10%;

  /*全局属性值 */
  flex: inherit;
  flex: initial;
  flex: unset;
}
```

可以使用一个，两个或三个值来指定 flex 属性。

单值语法: 值必须为以下其中之一:

- 一个无单位数(\<number\>): 它会被当作 flex:\<number\> 1 0; \<flex-shrink\>的值被假定为 1，然后\<flex-basis\> 的值被假定为 0。
- 一个有效的宽度(width)值: 它会被当作 \<flex-basis\>的值。
- 关键字 none，auto 或 initial.

双值语法: 第一个值必须为一个无单位数，并且它会被当作 \<flex-grow\> 的值。第二个值必须为以下之一：

- 一个无单位数：它会被当作 \<flex-shrink\> 的值。
- 一个有效的宽度值: 它会被当作 \<flex-basis\> 的值。

三值语法:

- 第一个值必须为一个无单位数，并且它会被当作 \<flex-grow\> 的值。
- 第二个值必须为一个无单位数，并且它会被当作 \<flex-shrink\> 的值。
- 第三个值必须为一个有效的宽度值， 并且它会被当作 \<flex-basis\> 的值。

可选值：

- initial - 元素会根据自身宽高设置尺寸。它会缩短自身以适应 flex 容器，但不会伸长并吸收 flex 容器中的额外自由空间来适应 flex 容器 。相当于将属性设置为"flex: 0 1 auto"。
- auto - 元素会根据自身的宽度与高度来确定尺寸，但是会伸长并吸收 flex 容器中额外的自由空间，也会缩短自身来适应 flex 容器。这相当于将属性设置为 "flex: 1 1 auto".
- none - 元素会根据自身宽高来设置尺寸。它是完全非弹性的：既不会缩短，也不会伸长来适应 flex 容器。相当于将属性设置为"flex: 0 0 auto"。
- <'flex-grow'> - 定义 flex 项目的 flex-grow 。负值无效。省略时默认值为 1。 (初始值为 0)
- <'flex-shrink'> - 定义 flex 元素的 flex-shrink 。负值无效。省略时默认值为 1。 (初始值为 1)
- <'flex-basis'> - 定义 flex 元素的 flex-basis 属性。若值为 0，则必须加上单位，以免被视作伸缩性。省略时默认值为 0。(初始值为 auto)

#### order

规定了弹性容器中的可伸缩项目在布局时的顺序。元素按照 order 属性的值的增序进行布局。拥有相同 order 属性值的元素按照它们在源代码中出现的顺序进行布局。

order `仅仅对元素的视觉顺序 (visual order) 产生作用`，并不会影响元素的逻辑或 tab 顺序。 order 不可以用于非视觉媒体，例如 speech。

属性值：

- \<integer\> - 表示此可伸缩项目所在的次序组。默认值：0。

```html
<style>
  其它css样式同上 {
  }
  .item1 {
    order: 2; /* 设置 order 排列次序 */
  }
  .item2 {
    order: 1; /* 设置 order 排列次序 */
  }
</style>
<body>
  HTML 结构同上
</body>
```

![在这里插入图片描述](/images/blog/css/20210624155623986.png)

### 对齐属性

#### align-content

设置了浏览器如何沿着弹性盒子布局的纵轴和网格布局的主轴在内容项之间和周围分配空间。`弹性盒子需要有多余空间，并且该属性对单行弹性盒子模型无效。（即：带有 flex-wrap: nowrap）。`

可选值：

- start - 所有行从容器的起始边缘开始填充。
- end - 所有行从容器的结束边缘开始填充。
- flex-start - 所有行从垂直轴起点开始填充。第一行的垂直轴起点边和容器的垂直轴起点边对齐。接下来的每一行紧跟前一行。
- flex-end - 所有行从垂直轴末尾开始填充。最后一行的垂直轴终点和容器的垂直轴终点对齐。同时所有后续行与前一个对齐。
- center - 所有行朝向容器的中心填充。每行互相紧挨，相对于容器居中对齐。容器的垂直轴起点边和第一行的距离相等于容器的垂直轴终点边和最后一行的距离。
- normal - 这些项按默认位置填充，就像没有设置对齐内容值一样。
- baseline
- first baseline
- last baseline
- space-between - 所有行在容器中平均分布。相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的边对齐。
- space-around - 所有行在容器中平均分布，相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的距离是相邻两行间距的一半。
- space-evenly - 所有行沿垂直轴均匀分布在对齐容器内。每对相邻的项之间的间距，主开始边和第一项，以及主结束边和最后一项，都是完全相同的。
- stretch - 拉伸所有行来填满剩余空间。剩余空间平均地分配给每一行。
- safe - 与对齐关键字一起使用。如果所选的关键字意味着项溢出对齐容器（data loss），则将采用备用策略对项进行对齐，就像启动了 start 对齐模式一样。
- unsafe - 与对齐关键字一起使用。无论元素和对齐容器的相对大小如何、是否会导致一些元素溢出可见范围（data loss），都使用给定的对齐值。

```html
<style>
  .container {
    margin-top: 30px;
    height: 400px; /* 设置弹性盒子的高度，需要大于子盒子的默认高度 */
    background-color: #7f8c8d;
    border: 5px dashed #34495e;
    /* flex 伸缩布局-开始 */
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    /* flex 伸缩布局-结束 */
  }
  .item-box {
    margin: 5px;
    width: 100px;
    height: 50px;
    background-color: #ecf0f1;
    color: #000;
    line-height: 50px;
    text-align: center;
  }
  .item-box:nth-of-type(odd) {
    height: 80px;
    line-height: 80px;
  }
</style>
<body>
  <div class="container">
    <div class="item-box item1">item1</div>
    <div class="item-box item2">item2</div>
    <div class="item-box item3">item3</div>
    <div class="item-box item4">item4</div>
    <div class="item-box item5">item5</div>
  </div>
</body>
```

![在这里插入图片描述](/images/blog/css/20210624155637250.png)

#### align-items

align-items 属性将所有直接子节点上的 align-self 值设置为一个组。`实现弹性布局中子元素的交叉轴上对齐`。

可选值：

- normal - 这个关键字的效果取决于我们处在什么布局模式中：
  - 在绝对定位的布局中，对于被替代的绝对定位盒子，这个效果和 start?的效果的一样；对于其他所有绝对定位的盒子，这个效果和 stretch 的效果一样。
  - 在绝对定位布局的静态位置上，效果和 stretch 一样。
  - 对于那些弹性项目而言，效果和 stretch 一样。
  - 对于那些网格项目而言，效果和 stretch 一样，除了有部分比例或者一个固定大小的盒子的效果像 start。
  - 这个属性不适用于会计盒子和表格。
- flex-start - 元素向侧轴起点对齐。
- flex-end - 元素向侧轴终点对齐。
- start - The item is packed flush to each other toward the start edge of the alignment container in the appropriate axis.
- end - The item is packed flush to each other toward the end edge of the alignment container in the appropriate axis.
- center - 元素在侧轴居中。如果元素在侧轴上的高度高于其容器，那么在两个方向上溢出距离相同。
- left
- right
- self-start
- self-end
- baseline
- first baseline
- last baseline - 所有元素向基线对齐。侧轴起点到元素基线距离最大的元素将会于侧轴起点对齐以确定基线。
- stretch - 弹性元素被在侧轴方向被拉伸到与容器相同的高度或宽度。
- safe
- unsafe

```html
<style>
  .container {
    margin-top: 30px;
    background-color: #7f8c8d;
    border: 5px dashed #34495e;
    /* flex 伸缩布局-开始 */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    /* flex 伸缩布局-结束 */
  }
  .item-box {
    margin: 5px;
    width: 100px;
    height: 50px;
    background-color: #ecf0f1;
    color: #000;
    line-height: 50px;
    text-align: center;
  }
  .item-box:nth-of-type(odd) {
    height: 80px;
    line-height: 80px;
  }
</style>
<div class="container">
  <div class="item-box item1">item1</div>
  <div class="item-box item2">item2</div>
  <div class="item-box item3">item3</div>
  <div class="item-box item4">item4</div>
  <div class="item-box item5">item5</div>
</div>
```

![在这里插入图片描述](/images/blog/css/20210624155650210.png)

#### align-self

会对齐当前 grid 或 flex 行中的元素，并覆盖已有的 align-items 的值。align-self 属性不适用于块类型的盒模型和表格单元。如果任何 flexbox 元素的侧轴方向 margin 值设置为 auto，则会忽略 align-self。`控制的是当个元素的对齐方式`。

可选值：

- auto - 设置为父元素的 align-items 值。
- normal - 效果取决于当前的布局模式:
  - 绝对定位布局中，normal 在绝对定位的替代元素上表现为 start，在所有其他绝对定位元素上表现为 stretch。
  - 在绝对定位的静态元素上表现为 stretch。
  - flex 布局中表现为 stretch。
  - For grid items, this keyword leads to a behavior similar to the one of stretch, except for boxes with an aspect ratio or an intrinsic sizes where it behaves like start.
  - 在块级和表格单元中无效。
- self-start
- self-end
- flex-start - flex 元素会对齐到 cross-axis 的首端。
- flex-end - flex 元素会对齐到 cross-axis 的尾端。
- center - flex 元素会对齐到 cross-axis 的中间，如果该元素的 cross-size 尺寸大于 flex 容器，将在两个方向均等溢出。
- baseline
- first baseline
- last baseline
- safe
- unsafe

```html
<style>
  .container {
    margin-top: 30px;
    background-color: #7f8c8d;
    border: 5px dashed #34495e;
    /* flex 伸缩布局-开始 */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    /* flex 伸缩布局-结束 */
  }
  .item-box {
    margin: 5px;
    width: 100px;
    height: 50px;
    background-color: #ecf0f1;
    color: #000;
    line-height: 50px;
    text-align: center;
  }
  .item-box:nth-of-type(odd) {
    height: 80px;
    line-height: 80px;
  }
  .item2 {
    align-self: flex-end;
  }
</style>
<div class="container">
  <div class="item-box item1">item1</div>
  <div class="item-box item2">item2</div>
  <div class="item-box item3">item3</div>
  <div class="item-box item4">item4</div>
  <div class="item-box item5">item5</div>
</div>
```

![在这里插入图片描述](/images/blog/css/20210624155700166.png)

#### justify-content

定义了浏览器之间，如何分配顺着弹性容器主轴(或者网格行轴) 的元素之间及其周围的空间。

可选值：

- start - 从行首开始排列。每行第一个元素与行首对齐，同时所有后续的元素与前一个对齐。
- flex-start - 从行首开始排列。每行第一个弹性元素与行首对齐，同时所有后续的弹性元素与前一个对齐。
- flex-end - 从行尾开始排列。每行最后一个弹性元素与行尾对齐，其他元素将与后一个对齐。
- center - 伸缩元素向每行中点排列。每行第一个元素到行首的距离将与每行最后一个元素到行尾的距离相同。
- left - 伸缩元素一个挨一个在对齐容器得左边缘，如果属性的轴与内联轴不平行，则 left 的行为类似于 start。
- right - 元素以容器右边缘为基准，一个挨着一个对齐,如果属性轴与内联轴不平行，则 right 的行为类似于 end。
- baseline
- first baseline
- last baseline
- space-between - 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素与行首对齐，每行最后一个元素与行尾对齐。
- space-around - 在每行上均匀分 配弹性元素。相邻元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。
- space-evenly - flex 项都沿着主轴均匀分布在指定的对齐容器中。相邻 flex 项之间的间距，主轴起始位置到第一个 flex 项的间距,，主轴结束位置到最后一个 flex 项的间距，都完全一样。
- stretch
- safe - 与对齐关键字一起使用，如果选定的关键字会导致元素溢出容器造成数据丢失，那么将会使用 start 代替它。
- unsafe

```html
<style>
  .container {
    margin-top: 30px;
    background-color: #7f8c8d;
    border: 5px dashed #34495e;
    /* flex 伸缩布局-开始 */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* flex 伸缩布局-结束 */
  }
  .item-box {
    margin: 5px;
    width: 100px;
    height: 50px;
    background-color: #ecf0f1;
    color: #000;
    line-height: 50px;
    text-align: center;
  }
  .item-box:nth-of-type(odd) {
    height: 80px;
    line-height: 80px;
  }
</style>
<body>
  <div class="container">
    <div class="item-box item1">item1</div>
    <div class="item-box item2">item2</div>
    <div class="item-box item3">item3</div>
    <div class="item-box item4">item4</div>
    <div class="item-box item5">item5</div>
  </div>
</body>
```

![在这里插入图片描述](/images/blog/css/20210624155711311.png)

#### place-content

place-content 属性是 align-content 和 justify-content 的简写. 使用这两个属性的值可以用于任何的布局情况。

#### row-gap

用来设置行元素之间的间隙(gutter) 大小。

#### column-gap

用来设置元素列之间的间隔 (gutter) 大小。

#### gap

用来设置网格行与列之间的间隙（gutters），该属性是 row-gap and column-gap 的简写形式。

可选值：

- \<length\> - 网格线之间的间隙宽度。
- \<percentage\> - 网格线直接的间隙宽度，相对网格容器的百分比。

```html
<style>
  .container {
    margin-top: 30px;
    background-color: #7f8c8d;
    border: 5px dashed #34495e;
    /* flex 伸缩布局-开始 */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px 10px;
    /* flex 伸缩布局-结束 */
  }
  .item-box {
    margin: 5px;
    width: 100px;
    height: 50px;
    background-color: #ecf0f1;
    color: #000;
    line-height: 50px;
    text-align: center;
  }
  .item-box:nth-of-type(odd) {
    height: 80px;
    line-height: 80px;
  }
</style>
<body>
  <div class="container">
    <div class="item-box item1">item1</div>
    <div class="item-box item2">item2</div>
    <div class="item-box item3">item3</div>
    <div class="item-box item4">item4</div>
    <div class="item-box item5">item5</div>
  </div>
</body>
```

![在这里插入图片描述](/images/blog/css/2021062415572382.png)

## 总结

弹性布局是现在比较流行的布局方式了，我们分别从如何定义一个弹性盒子出发，学习关于弹性布局的专业名字，并将其子元素控制的 css 属性做了深入的认识与比较。

在 css 的一般属性中，可以控制主轴方向、是否换行以及对 flex 元素的缩放进行测试；其次是对齐属性的认识，关于交叉轴的对齐方式有三种，分别是：align-content（控制除子元素外的对于空间对齐），align-items（为子元素行中空间对齐），align-self（单一控制某一个 flex 子元素的对齐。然后就是关于主轴上的元素对齐，最后，属性 gap 则是控制子元素之间的间隔。

本文介绍到的 css 属性有很多，感兴趣的小伙伴们可以运行测试。

<br />
<br />
<br />

`最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，感谢您的观看！`

官方文档：

[MDN Web Docs - Basic Concepts of Flexbox](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

[MDN Web Docs - CSS Flexible Box Layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)
