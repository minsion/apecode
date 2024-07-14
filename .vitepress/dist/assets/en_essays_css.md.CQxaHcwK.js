import{_ as e,c as i,o as t,a9 as a}from"./chunks/framework.DPHmpOz_.js";const u=JSON.parse('{"title":"CSS","description":"","frontmatter":{},"headers":[],"relativePath":"en/essays/css.md","filePath":"en/essays/css.md","lastUpdated":1720966260000}'),s={name:"en/essays/css.md"},l=a(`<h1 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-label="Permalink to &quot;CSS&quot;">​</a></h1><h2 id="css-selectors-and-priority" tabindex="-1">CSS selectors and priority <a class="header-anchor" href="#css-selectors-and-priority" aria-label="Permalink to &quot;CSS selectors and priority&quot;">​</a></h2><h3 id="selectors" tabindex="-1">Selectors <a class="header-anchor" href="#selectors" aria-label="Permalink to &quot;Selectors&quot;">​</a></h3><ul><li>ID selector (#myid)</li><li>Class selector (.myclass)</li><li>Attribute selector (a[rel=&quot;external&quot;])</li><li>Pseudo-class selector (a:hover, li:nth-child)</li><li>Tag selector (div, h1,p)</li><li>Adjacent selector (h1 + p)</li><li>Child selector (ul &gt; li)</li><li>Descendant selector (li a)</li><li>Wildcard selector (*)</li></ul><h3 id="priority" tabindex="-1">Priority <a class="header-anchor" href="#priority" aria-label="Permalink to &quot;Priority&quot;">​</a></h3><ul><li>!important</li><li>Inline style (1000)</li><li>ID selector (0100)</li><li>Class selector/attribute selector/pseudo-class selector (0010)</li><li>Element selector/pseudo-element selector (0001)</li><li>Relation selector/wildcard selector (0000)</li></ul><p>With !important The style attribute of the tag has the highest priority; when the source of the style sheet is the same: <code>!important &gt; inline style &gt; ID selector &gt; class selector &gt; tag &gt; wildcard &gt; inherit &gt; browser default attribute</code></p><h2 id="what-are-the-values-​​of-the-position-attribute-and-their-differences" tabindex="-1">What are the values ​​of the position attribute and their differences <a class="header-anchor" href="#what-are-the-values-​​of-the-position-attribute-and-their-differences" aria-label="Permalink to &quot;What are the values ​​of the position attribute and their differences&quot;">​</a></h2><ol><li><p>Default positioning <code>static</code>: The default value. Without positioning, the element appears in the normal flow (ignoring top, bottom, left, right or z-index declarations). inherit: Specifies that the value of the position attribute should be inherited from the parent element.</p></li><li><p>Fixed positioning <code>fixed</code>: The position of the element is fixed relative to the browser window, and it will not move even if the window is scrolled. Fixed positioning makes the position of the element independent of the document flow, so it does not occupy space. Fixed positioned elements overlap other elements.</p></li><li><p>Relative positioning <code>relative</code>: If an element is relatively positioned, it will appear where it is. Then, you can move the element &quot;relative&quot; to its starting point by setting the vertical or horizontal position. When using relative positioning, the element still occupies the original space regardless of whether it is moved or not. Therefore, moving the element will cause it to cover other boxes.</p></li><li><p>Absolute positioning <code>absolute</code>: The position of an absolutely positioned element is relative to the nearest positioned parent element. If the element has no positioned parent element, then its position is relative to. Absolute positioning makes the position of an element independent of the document flow, so it does not occupy space. Absolutely positioned elements overlap other elements.</p></li><li><p>Sticky positioning <code>sticky</code>: The element is first positioned according to the normal document flow, and then positioned relative to the flow root (BFC) and containing block (the nearest block-level ancestor element) of the element in the flow. The element positioning is then shown as relative positioning before crossing a certain threshold, and then fixed positioning.</p></li></ol><h2 id="box-sizing-property" tabindex="-1">box-sizing property <a class="header-anchor" href="#box-sizing-property" aria-label="Permalink to &quot;box-sizing property&quot;">​</a></h2><p>box-sizing specifies two side-by-side bordered boxes, with the syntax box-sizing: content-box / border-box / inherit</p><ul><li>content-box: The width and height are applied to the content box of the element respectively, and the element&#39;s padding and border are drawn outside the width and height. <code>Standard box model</code></li><li>border-box: The width and height set for an element determine the border box of the element. <code>IE box model</code></li><li>inherit: Inherit the box-sizing value of the parent element.</li></ul><h2 id="css-box-model" tabindex="-1">CSS box model <a class="header-anchor" href="#css-box-model" aria-label="Permalink to &quot;CSS box model&quot;">​</a></h2><p>The CSS box model is essentially a box, which includes: margins, borders, padding and actual content. The box models in CSS include <code>IE box model</code> and <code>standard W3C box model</code>.</p><ul><li><code>Standard box model</code>, width refers to the width of the content part.</li><li><code>IE box model</code>, width refers to the width of the three parts of content + padding + border.</li></ul><p>Therefore, there are differences in calculating the width of the box:</p><ul><li><p>Standard box model: <code>Total width of a block = width + margin (left and right) + padding (left and right) + border (left and right)</code></p></li><li><p>Weird box model: <code>Total width of a block = width + margin (left and right) (that is, width already includes padding and border values)</code></p></li></ul><h2 id="bfc-block-formatting-context" tabindex="-1">BFC (Block Formatting Context) <a class="header-anchor" href="#bfc-block-formatting-context" aria-label="Permalink to &quot;BFC (Block Formatting Context)&quot;">​</a></h2><h3 id="concept-of-bfc" tabindex="-1">Concept of BFC <a class="header-anchor" href="#concept-of-bfc" aria-label="Permalink to &quot;Concept of BFC&quot;">​</a></h3><p>BFC is the abbreviation of Block Formatting Context, that is, block formatting context. BFC is a concept of CSS layout. It is an independent rendering area that specifies how the internal box is laid out, and the child elements of this area will not affect the elements outside. Among them, the more important layout rules are that the internal box is placed vertically. When calculating the height of BFC, floating elements are also included in the calculation.</p><p>Principle layout rules of BFC:</p><ul><li>The internal boxes will be placed one by one in the <code>vertical direction</code>;</li><li>The vertical distance of the box is determined by the margin\`. The margins of two adjacent boxes belonging to the same BFC will overlap (box collapse);</li><li>The left side of each element&#39;s margin box touches the left side of the containing block&#39;s border box (for left-to-right formatting, otherwise it&#39;s the opposite);</li><li>The BFC area will not overlap with the float box;</li><li>BFC is an independent container, and the child elements in the container will not affect the elements outside;</li><li>When calculating the height of BFC, the floating elements also participate in the height calculation;</li><li>The type of element and the display property determine the type of this box. Different types of boxes will participate in different Formatting Contexts</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>How to create a BFC?</p><ul><li>Root element, i.e. HTML element;</li><li>float value is not none;</li><li>position is absolute or fixed;</li><li>display value is inline-block, table-cell, table-caption;</li><li>overflow value is not visible</li></ul></div><h3 id="bfc-usage-scenarios" tabindex="-1">BFC usage scenarios <a class="header-anchor" href="#bfc-usage-scenarios" aria-label="Permalink to &quot;BFC usage scenarios&quot;">​</a></h3><ul><li>Remove margin overlap;</li><li>Clear float (let the height of the parent element include the child float element);</li><li>Prevent an element from being covered by a float element;</li><li>Prevent multi-column layout from automatically wrapping due to rounding of width calculation</li></ul><h2 id="center-an-element-horizontally-and-vertically" tabindex="-1">Center an element horizontally and vertically <a class="header-anchor" href="#center-an-element-horizontally-and-vertically" aria-label="Permalink to &quot;Center an element horizontally and vertically&quot;">​</a></h2><h3 id="horizontally-center" tabindex="-1">Horizontally center <a class="header-anchor" href="#horizontally-center" aria-label="Permalink to &quot;Horizontally center&quot;">​</a></h3><ul><li>For inline elements: text-align: center;</li><li>For block-level elements with a fixed width:</li></ul><ol><li>Width and margin implementation. margin: 0 auto;</li><li>Absolute positioning and margin-left: (parent width - child width)/2, provided that the parent element position: relative</li></ol><ul><li>For block-level elements with unknown width</li></ul><ol><li>The table tag with left and right margin auto achieves horizontal centering. Use the table tag (or directly set the block-level element to display:table), and then add left and right margins to the tag as auto.</li><li>Inline-block achieves horizontal centering. display: inline-block and text-align:center achieve horizontal centering.</li><li>Absolute positioning + transform, translateX can move the element itself by 50%.</li><li>Flex layout uses justify-content:center</li></ol><h3 id="vertical-centering" tabindex="-1">Vertical centering <a class="header-anchor" href="#vertical-centering" aria-label="Permalink to &quot;Vertical centering&quot;">​</a></h3><ol><li>Use line-height to achieve centering, which is suitable for pure text;</li><li>Set the parent container to relative positioning, the child to absolute positioning, and the label to achieve adaptive centering through margin;</li><li>Flexible layout flex: parent sets display: flex; child sets margin to auto to achieve adaptive centering;</li><li>Parent sets relative positioning, child sets absolute positioning, and achieves it through displacement transform;</li><li>Table layout, the parent is converted into a table form, and then the child sets vertical-align to achieve it. (Note: the prerequisite for using vertical-align: middle is inline elements and elements with display value of table-cell).</li></ol><h2 id="how-to-hide-an-element-in-a-page" tabindex="-1">How to hide an element in a page <a class="header-anchor" href="#how-to-hide-an-element-in-a-page" aria-label="Permalink to &quot;How to hide an element in a page&quot;">​</a></h2><ul><li>opacity: 0, the element is hidden, but the page layout will not be changed. If the element has been bound to some events, such as click events, then clicking on the area can also trigger the click event;</li><li>visibility: hidden, the element is hidden, but the page layout will not be changed, but the events bound to the element will not be triggered. The corresponding element is hidden, and the original space in the document layout is still reserved (redraw);</li><li>display: none, hide the element and change the page layout. It can be understood as not displaying the corresponding element in the page, and no longer allocating space in the document layout (reflow + redraw)</li></ul><h2 id="use-css-to-implement-the-triangle-symbol" tabindex="-1">Use CSS to implement the triangle symbol <a class="header-anchor" href="#use-css-to-implement-the-triangle-symbol" aria-label="Permalink to &quot;Use CSS to implement the triangle symbol&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*Memory formula: The width and height of the box are both zero, and the three-sided borders are all transparent. */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:after</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">absolute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">border-right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> solid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> transparent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">border-top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> solid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> #ff0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">border-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> solid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> transparent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">border-bottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> solid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> transparent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="page-layout" tabindex="-1">Page Layout <a class="header-anchor" href="#page-layout" aria-label="Permalink to &quot;Page Layout&quot;">​</a></h2><h3 id="flex-layout" tabindex="-1">Flex Layout <a class="header-anchor" href="#flex-layout" aria-label="Permalink to &quot;Flex Layout&quot;">​</a></h3><p>The traditional layout solution is based on the box model and relies on the display attribute + position attribute + float attribute. It is very inconvenient for those special layouts. For example, vertical centering is not easy to achieve.</p><p>Flex is the abbreviation of Flexible Box, which means &quot;flexible layout&quot; and is used to provide maximum flexibility for the box model. Just specify the container display: flex. It is simply divided into container attributes and element attributes.</p><p>Container properties:</p><ul><li>flex-direction: determines the direction of the main axis (i.e. the arrangement method of sub-items) flex-direction: row | row-reverse | column | column-reverse;</li><li>flex-wrap: determines the line breaking rules flex-wrap: nowrap | wrap | wrap-reverse;</li><li>flex-flow: .box { flex-flow: || ; };</li><li>justify-content: alignment, horizontal main axis alignment;</li><li>align-items: alignment, vertical axis direction;</li><li>align-content</li></ul><p>Item properties (element properties):</p><ul><li>order property: defines the order of items. The smaller the order, the higher the order. The default is 0;</li><li>flex-grow property: defines the magnification ratio of the item. Even if there is space, it will not be magnified;</li><li>flex-shrink property: defines the reduction ratio of the item. When there is insufficient space, it will be reduced proportionally. If the flow-shrink of an item is defined as 0, it will not be reduced;</li><li>flex-basis Attributes: defines the space occupied by the item when allocating extra space;</li><li>flex: is the abbreviation of flex-grow, flex-shrink, and flex-basis, with a default value of 0 1 auto;</li><li>align-self: allows a single item to be aligned differently from other items, which can be overwritten;</li><li>align-items, the default attribute is auto, which means inheriting the align-items of the parent element. For example, using flex to implement the Holy Grail layout.</li></ul><h3 id="rem-layout" tabindex="-1">Rem layout <a class="header-anchor" href="#rem-layout" aria-label="Permalink to &quot;Rem layout&quot;">​</a></h3><p>First, Rem is calculated relative to the font-size of the root (html). Simply put, it is a relative singleton such as: font-size: 10px;, then (1rem = 10px) After understanding the calculation principle, first solve how to set the font-size of html on different devices. In fact, the essence of rem layout is geometric scaling, which is generally based on width.</p><p>Advantages: can quickly adapt to mobile layout, fonts, and image height</p><p>Disadvantages:</p><ol><li><p>Currently IE does not support it, and it is rarely used for PC pages;</p></li><li><p>Large amount of data: all pictures and boxes require us to give an accurate value; to ensure the adaptation of different models;</p></li><li><p>In responsive layout, the size of the root element font-size must be dynamically controlled through js. That is to say, the css style and js code have a certain coupling. And the code to change the font-size must be placed before the css style.</p></li></ol><h3 id="percentage-layout" tabindex="-1">Percentage layout <a class="header-anchor" href="#percentage-layout" aria-label="Permalink to &quot;Percentage layout&quot;">​</a></h3><p>Through percentage units &quot; % &quot; to achieve responsive effects. The percentage unit can make the width and height of the components in the browser change with the browser, thus achieving a responsive effect. Intuitively, we may think that the percentage of the child element is completely relative to the direct parent element, the height percentage is relative to the height, and the width percentage is relative to the width. Padding, border, margin, etc., whether vertically or horizontally, are relative to the width of the direct parent element. In addition to border-radius, there are also translation, background-size, etc., which are relative to themselves.</p><p>Disadvantages:</p><ol><li><p>Difficult calculation</p></li><li><p>If percentages are used in each attribute, the attributes relative to the parent element are not unique. This makes it easy for us to use percentage units to complicate layout problems.</p></li></ol><h3 id="floating-layout" tabindex="-1">Floating layout <a class="header-anchor" href="#floating-layout" aria-label="Permalink to &quot;Floating layout&quot;">​</a></h3><p>Floating layout: When an element floats, it can move left or right until its outer edge touches the box containing it or the border of another floating element. After the element floats, it will be out of the normal document flow, so the box in the normal flow of the document becomes as if the floating element does not exist.</p><p>Advantages</p><p>The advantage of this is that it can make the text wrap around the image when the image and text are mixed. In addition, when the element floats, it has some properties of block-level elements, such as the ability to set width and height, but it is still different from inline-block. The first is that when sorting horizontally, float can set the direction while inline-block has a fixed direction; another is that inline-block sometimes has blank gaps when used.</p><p>Disadvantages</p><p>The most obvious disadvantage is that once the floating element is out of the document flow, it cannot support the parent element, causing the parent element to collapse in height.</p><h2 id="how-to-use-rem-or-viewport-for-mobile-adaptation" tabindex="-1">How to use rem or viewport for mobile adaptation <a class="header-anchor" href="#how-to-use-rem-or-viewport-for-mobile-adaptation" aria-label="Permalink to &quot;How to use rem or viewport for mobile adaptation&quot;">​</a></h2><p>Changes the number of css pixels that an element occupies on different devices.</p><p>Advantages and disadvantages of rem adaptation:</p><ul><li>Advantages: does not destroy the perfect viewport</li><li>Disadvantages: px value conversion rem is too complicated (we use less to solve this problem below)</li></ul><p>Principle of viewport adaptation:</p><p>In the viewport adaptation scheme, the number of css pixels occupied by each element on different devices is the same. However, the ratio of CSS pixels to physical pixels is different, and they are proportional.</p><p>Advantages and disadvantages of viewport adaptation:</p><ul><li><p>The size measured on our design drawing is the pixel size we can set, that is, what is measured is what is set;</p></li><li><p>Disadvantages destroy the perfect viewport.</p></li></ul><h2 id="ways-to-clear-floating" tabindex="-1">Ways to clear floating <a class="header-anchor" href="#ways-to-clear-floating" aria-label="Permalink to &quot;Ways to clear floating&quot;">​</a></h2><ul><li><p>Add additional tags;</p></li><li><p>Add overflow attributes to the parent, or set the height;</p></li><li><p>Create a pseudo-class selector to clear floating.</p></li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;parent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// Add extra tags and add clear attribute</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;clear:both&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// You can also add a br tag</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Add the :after pseudo element in css */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.parent:after</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Set the content of the added child element to be empty */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Set the added child element to a block-level element */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Set the height of the added child element to 0 */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">visibility</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hidden</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Set the added child element to be invisible */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">clear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">both</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Set clear: both */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,72),n=[l];function o(h,r,d,p,c,g){return t(),i("div",null,n)}const m=e(s,[["render",o]]);export{u as __pageData,m as default};