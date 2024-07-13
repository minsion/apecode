import{_ as i,c as s,o as a,a8 as l}from"./chunks/framework.BF0lEhK2.js";const g=JSON.parse('{"title":"CSS","description":"","frontmatter":{},"headers":[],"relativePath":"en/essays/css.md","filePath":"en/essays/css.md","lastUpdated":1720857820000}'),t={name:"en/essays/css.md"},e=l(`<h1 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-label="Permalink to &quot;CSS&quot;">​</a></h1><h2 id="css-选择器及优先级" tabindex="-1">CSS 选择器及优先级 <a class="header-anchor" href="#css-选择器及优先级" aria-label="Permalink to &quot;CSS 选择器及优先级&quot;">​</a></h2><h3 id="选择器" tabindex="-1">选择器 <a class="header-anchor" href="#选择器" aria-label="Permalink to &quot;选择器&quot;">​</a></h3><ul><li>Id 选择器(#myid)</li><li>类选择器(.myclass)</li><li>属性选择器(a[rel=&quot;external&quot;])</li><li>伪类选择器(a:hover, li:nth-child)</li><li>标签选择器(div, h1,p)</li><li>相邻选择器（h1 + p）</li><li>子选择器(ul &gt; li)</li><li>后代选择器(li a)</li><li>通配符选择器(*)</li></ul><h3 id="优先级" tabindex="-1">优先级 <a class="header-anchor" href="#优先级" aria-label="Permalink to &quot;优先级&quot;">​</a></h3><ul><li>!important</li><li>内联样式（1000）</li><li>ID 选择器（0100）</li><li>类选择器/属性选择器/伪类选择器（0010）</li><li>元素选择器/伪元素选择器（0001）</li><li>关系选择器/通配符选择器（0000）</li></ul><p>带!important 标记的样式属性优先级最高； 样式表的来源相同时：<code>!important &gt; 行内样式 &gt; ID 选择器 &gt; 类选择器 &gt; 标签 &gt; 通配符 &gt; 继承 &gt; 浏览器默认属性</code></p><h2 id="position-属性的值有哪些及其区别" tabindex="-1">position 属性的值有哪些及其区别 <a class="header-anchor" href="#position-属性的值有哪些及其区别" aria-label="Permalink to &quot;position 属性的值有哪些及其区别&quot;">​</a></h2><ol><li><p>默认定位 <code>static</code>： 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声 明）。 inherit: 规定应该从父元素继承 position 属性的值。</p></li><li><p>固定定位 <code>fixed</code>： 元素的位置相对于浏览器窗口是固定位置，即使窗口是滚动的它也不会移动。Fixed 定 位使元素的位置与文档流无关，因此不占据空间。 Fixed 定位的元素和其他元素重叠。</p></li><li><p>相对定位 <code>relative</code>： 如果对一个元素进行相对定位，它将出现在它所在的位置上。然后，可以通过设置垂直 或水平位置，让这个元素“相对于”它的起点进行移动。 在使用相对定位时，无论是 否进行移动，元素仍然占据原来的空间。因此，移动元素会导致它覆盖其它框。</p></li><li><p>绝对定位 <code>absolute</code>： 绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那 么它的位置相对于。absolute 定位使元素的位置与文档流无关，因此不占据空间。 absolute 定位的元素和其他元素重叠。</p></li><li><p>粘性定位 <code>sticky</code>： 元素先按照普通文档流定位，然后相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位。而后，元素定位表现为在跨越特定阈值前为相对定 位，之后为固定定位。</p></li></ol><h2 id="box-sizing-属性" tabindex="-1">box-sizing 属性 <a class="header-anchor" href="#box-sizing-属性" aria-label="Permalink to &quot;box-sizing 属性&quot;">​</a></h2><p>box-sizing 规定两个并排的带边框的框，语法为 box-sizing：content-box / border-box / inherit</p><ul><li>content-box：宽度和高度分别应用到元素的内容框，在宽度和高度之外绘制元素的内边距和边框。<code>标准盒子模型</code></li><li>border-box：为元素设定的宽度和高度决定了元素的边框盒。<code>IE 盒子模型</code></li><li>inherit：继承父元素的 box-sizing 值。</li></ul><h2 id="css-盒子模型" tabindex="-1">CSS 盒子模型 <a class="header-anchor" href="#css-盒子模型" aria-label="Permalink to &quot;CSS 盒子模型&quot;">​</a></h2><p>CSS 盒模型本质上是一个盒子，它包括：边距，边框，填充和实际内容。CSS 中的盒子模型包括 <code>IE 盒子模型</code>和<code>标准的 W3C 盒子模型</code>。</p><ul><li><code>标准盒子模型</code>，width 指 content 部分的宽度。</li><li><code>IE 盒子模型</code>，width 表示 content + padding + border 这三个部分的宽度。</li></ul><p>故在计算盒子的宽度时存在差异:</p><ul><li>标准盒模型: <code>一个块的总宽度 = width + margin(左右) + padding(左右) + border(左右)</code></li><li>怪异盒模型: <code>一个块的总宽度 = width + margin（左右）（既 width 已经包含了 padding 和 border 值）</code></li></ul><h2 id="bfc-块级格式上下文" tabindex="-1">BFC（块级格式上下文） <a class="header-anchor" href="#bfc-块级格式上下文" aria-label="Permalink to &quot;BFC（块级格式上下文）&quot;">​</a></h2><h3 id="bfc-的概念" tabindex="-1">BFC 的概念 <a class="header-anchor" href="#bfc-的概念" aria-label="Permalink to &quot;BFC 的概念&quot;">​</a></h3><p>BFC 是 Block Formatting Context 的缩写，即块级格式化上下文。BFC 是 CSS 布局的一个概念，是一个独立的渲染区域，规定了内部 box 如何布局， 并且这个区域的子元素不会影响到外面的元素，其中比较重要的布局规则有内部 box 垂直放置，计算 BFC 的高度的时候，浮动元素也参与计算。</p><p>BFC 的原理布局规则:</p><ul><li>内部的 Box 会在<code>垂直方向</code>，一个接一个地放置;</li><li>Box <code>垂直方向的距离由 margin 决定</code>。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠 <code>(盒子塌陷)</code>;</li><li>每个元素的 margin box 的左边， 与包含块 border box 的左边相接触(对于从左往右的格式化，否则相反);</li><li>BFC 的区域<code>不会与 float box 重叠</code>;</li><li>BFC 是一个独立容器，容器里面的<code>子元素不会影响到外面的元素</code>;</li><li>计算 BFC 的高度时，<code>浮动元素也参与计算高度</code>;</li><li><code>元素的类型和 display 属性，决定了这个 Box 的类型</code>。不同类型的 Box 会参与不同的 Formatting Context</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如何创建 BFC？</p><ul><li>根元素，即 HTML 元素;</li><li>float 的值不为 none;</li><li>position 为 absolute 或 fixed;</li><li>display 的值为 inline-block、table-cell、table-caption;</li><li>overflow 的值不为 visible</li></ul></div><h3 id="bfc-的使用场景" tabindex="-1">BFC 的使用场景 <a class="header-anchor" href="#bfc-的使用场景" aria-label="Permalink to &quot;BFC 的使用场景&quot;">​</a></h3><ul><li>去除边距重叠现象;</li><li>清除浮动（让父元素的高度包含子浮动元素）;</li><li>避免某元素被浮动元素覆盖;</li><li>避免多列布局由于宽度计算四舍五入而自动换行</li></ul><h2 id="让一个元素水平垂直居中" tabindex="-1">让一个元素水平垂直居中 <a class="header-anchor" href="#让一个元素水平垂直居中" aria-label="Permalink to &quot;让一个元素水平垂直居中&quot;">​</a></h2><h3 id="水平居中" tabindex="-1">水平居中 <a class="header-anchor" href="#水平居中" aria-label="Permalink to &quot;水平居中&quot;">​</a></h3><ul><li>对于行内元素: text-align: center;</li><li>对于确定宽度的块级元素： <ol><li>width 和 margin 实现。margin: 0 auto;</li><li>绝对定位和 margin-left: (父 width - 子 width)/2, 前提是父元素 position: relative</li></ol></li><li>对于宽度未知的块级元素 <ol><li>table 标签配合 margin 左右 auto 实现水平居中。使用 table 标签（或直接将块级元素设值为 display:table），再通过给该标签添加左右 margin 为 auto。</li><li>inline-block 实现水平居中方法。display：inline-block 和 text-align:center 实现水平居中。</li><li>绝对定位+transform，translateX 可以移动本身元素的 50%。</li><li>flex 布局使用 justify-content:center</li></ol></li></ul><h3 id="垂直居中" tabindex="-1">垂直居中 <a class="header-anchor" href="#垂直居中" aria-label="Permalink to &quot;垂直居中&quot;">​</a></h3><ol><li>利用 line-height 实现居中，这种方法适合纯文字类;</li><li>通过设置父容器 相对定位 ，子级设置 绝对定位，标签通过 margin 实现自适应居中;</li><li>弹性布局 flex :父级设置 display: flex; 子级设置 margin 为 auto 实现自适应居中;</li><li>父级设置相对定位，子级设置绝对定位，并且通过位移 transform 实现;</li><li>table 布局，父级通过转换成表格形式，然后子级设置 vertical-align 实现。（需要注意的是：vertical-align: middle 使用的前提条件是内联元素以及 display 值为 table-cell 的元素）。</li></ol><h2 id="隐藏页面中某个元素的方法" tabindex="-1">隐藏页面中某个元素的方法 <a class="header-anchor" href="#隐藏页面中某个元素的方法" aria-label="Permalink to &quot;隐藏页面中某个元素的方法&quot;">​</a></h2><ul><li>opacity: 0，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定一些事件，如 click 事件，那么点击该区域，也能触发点击事件的;</li><li>visibility: hidden，该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件，隐藏对应元素，在文档布局中仍保留原来的空间（重绘）;</li><li>display: none，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素。不显示对应的元素，在文档布局中不再分配空间（回流+重绘）</li></ul><h2 id="用-css-实现三角符号" tabindex="-1">用 CSS 实现三角符号 <a class="header-anchor" href="#用-css-实现三角符号" aria-label="Permalink to &quot;用 CSS 实现三角符号&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*记忆口诀：盒子宽高均为零，三面边框皆透明。 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:after</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">absolute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  border-right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> solid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> transparent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  border-top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> solid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> #ff0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  border-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> solid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> transparent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  border-bottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> solid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> transparent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="页面布局" tabindex="-1">页面布局 <a class="header-anchor" href="#页面布局" aria-label="Permalink to &quot;页面布局&quot;">​</a></h2><h3 id="flex-布局" tabindex="-1">Flex 布局 <a class="header-anchor" href="#flex-布局" aria-label="Permalink to &quot;Flex 布局&quot;">​</a></h3><p>布局的传统解决方案，基于盒状模型，依赖 display 属性 + position 属性 + float 属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。</p><p>Flex 是 Flexible Box 的缩写，意为&quot;弹性布局&quot;,用来为盒状模型提供最大的灵活性。指定容器 display: flex 即可。 简单的分为容器属性和元素属性。</p><p>容器的属性：</p><ul><li>flex-direction：决定主轴的方向（即子 item 的排列方法）flex-direction: row | row-reverse | column | column-reverse;</li><li>flex-wrap：决定换行规则 flex-wrap: nowrap | wrap | wrap-reverse;</li><li>flex-flow： .box { flex-flow: || ; };</li><li>justify-content：对其方式，水平主轴对齐方式;</li><li>align-items：对齐方式，竖直轴线方向;</li><li>align-content</li></ul><p>项目的属性（元素的属性）：</p><ul><li>order 属性：定义项目的排列顺序，顺序越小，排列越靠前，默认为 0;</li><li>flex-grow 属性：定义项目的放大比例，即使存在空间，也不会放大;</li><li>flex-shrink 属性：定义了项目的缩小比例，当空间不足的情况下会等比例的缩小，如果 定义个 item 的 flow-shrink 为 0，则为不缩小;</li><li>flex-basis 属性：定义了在分配多余的空间，项目占据的空间;</li><li>flex：是 flex-grow 和 flex-shrink、flex-basis 的简写，默认值为 0 1 auto;</li><li>align-self：允许单个项目与其他项目不一样的对齐方式，可以覆盖;</li><li>align-items，默认属 性为 auto，表示继承父元素的 align-items 比如说，用 flex 实现圣杯布局。</li></ul><h3 id="rem-布局" tabindex="-1">Rem 布局 <a class="header-anchor" href="#rem-布局" aria-label="Permalink to &quot;Rem 布局&quot;">​</a></h3><p>首先 Rem 相对于根(html)的 font-size 大小来计算。简单的说它就是一个相对单例 如:font-size:10px;,那么（1rem = 10px）了解计算原理后首先解决怎么在不同设备上设置 html 的 font-size 大小。其实 rem 布局的本质是等比缩放，一般是基于宽度。</p><p>优点：可以快速适用移动端布局，字体，图片高度</p><p>缺点：</p><ol><li>目前 ie 不支持，对 pc 页面来讲使用次数不多;</li><li>数据量大：所有的图片，盒子都需要我们去给一个准确的值；才能保证不同机型的适配;</li><li>在响应式布局中，必须通过 js 来动态控制根元素 font-size 的大小。也就是说 css 样式和 js 代码有一定的耦合性。且必须将改变 font-size 的代码放在 css 样式之前。</li></ol><h3 id="百分比布局" tabindex="-1">百分比布局 <a class="header-anchor" href="#百分比布局" aria-label="Permalink to &quot;百分比布局&quot;">​</a></h3><p>通过百分比单位 &quot; % &quot; 来实现响应式的效果。通过百分比单位可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果。 直观的理解，我们可能会认为子元素的百分比完全相对于直接父元素，height 百分比相 对于 height，width 百分比相对于 width。 padding、border、margin 等等不论是垂直方向还是水平方向，都相对于直接父元素的 width。 除了 border-radius 外，还有比如 translate、background-size 等都是相对于自身的。</p><p>缺点：</p><ol><li>计算困难</li><li>各个属性中如果使用百分比，相对父元素的属性并不是唯一的。造成我们使用百分比单位容易使布局问题变得复杂。</li></ol><h3 id="浮动布局" tabindex="-1">浮动布局 <a class="header-anchor" href="#浮动布局" aria-label="Permalink to &quot;浮动布局&quot;">​</a></h3><p>浮动布局:当元素浮动以后可以向左或向右移动，直到它的外边缘碰到包含它的框或者另外一个浮动元素的边框为止。元素浮动以后会脱离正常的文档流，所以文档的普通流中的框就变的好像浮动元素不存在一样。</p><p>优点</p><p>这样做的优点就是在图文混排的时候可以很好的使文字环绕在图片周围。另外当元素浮动了起来之后，它有着块级元素的一些性质例如可以设置宽高等，但它与 inline-block 还是有一些区别的，第一个就是关于横向排序的时候，float 可以设置方向而 inline-block 方向是固定的；还有一个就是 inline-block 在使用时有时会有空白间隙的问题。</p><p>缺点</p><p>最明显的缺点就是浮动元素一旦脱离了文档流，就无法撑起父元素，会造成父级元素高度塌陷。</p><h2 id="如何使用-rem-或-viewport-进行移动端适配" tabindex="-1">如何使用 rem 或 viewport 进行移动端适配 <a class="header-anchor" href="#如何使用-rem-或-viewport-进行移动端适配" aria-label="Permalink to &quot;如何使用 rem 或 viewport 进行移动端适配&quot;">​</a></h2><p>改变了一个元素在不同设备上占据的 css 像素的个数。</p><p>rem 适配的优缺点：</p><ul><li>优点：没有破坏完美视口</li><li>缺点：px 值转换 rem 太过于复杂(下面我们使用 less 来解决这个问题)</li></ul><p>viewport 适配的原理：</p><p>viewport 适配方案中，每一个元素在不同设备上占据的 css 像素的个数是一样的。但是 css 像素和物理像素的比例是不一样的，等比的。</p><p>viewport 适配的优缺点：</p><ul><li>在我们设计图上所量取的大小即为我们可以设置的像素大小，即所量即所设;</li><li>缺点破坏完美视口。</li></ul><h2 id="清除浮动的方式" tabindex="-1">清除浮动的方式 <a class="header-anchor" href="#清除浮动的方式" aria-label="Permalink to &quot;清除浮动的方式&quot;">​</a></h2><ul><li>添加额外标签;</li><li>父级添加 overflow 属性，或者设置高度;</li><li>建立伪类选择器清除浮动。</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;parent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 添加额外标签并且添加 clear 属性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;clear:both&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 也可以加一个 br 标签</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 在 css 中添加:after 伪元素 */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.parent:after</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 设置添加子元素的内容是空 */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 设置添加子元素为块级元素 */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 设置添加的子元素的高度 0 */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  visibility</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hidden</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 设置添加子元素看不见 */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  clear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">both</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 设置 clear：both */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,69),n=[e];function h(p,r,o,k,d,c){return a(),s("div",null,n)}const u=i(t,[["render",h]]);export{g as __pageData,u as default};
