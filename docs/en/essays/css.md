# CSS

## CSS selectors and priority

### Selectors

- ID selector (#myid)
- Class selector (.myclass)
- Attribute selector (a[rel="external"])
- Pseudo-class selector (a:hover, li:nth-child)
- Tag selector (div, h1,p)
- Adjacent selector (h1 + p)
- Child selector (ul > li)
- Descendant selector (li a)
- Wildcard selector (\*)

### Priority

- !important
- Inline style (1000)
- ID selector (0100)
- Class selector/attribute selector/pseudo-class selector (0010)
- Element selector/pseudo-element selector (0001)
- Relation selector/wildcard selector (0000)

With !important The style attribute of the tag has the highest priority; when the source of the style sheet is the same: `!important > inline style > ID selector > class selector > tag > wildcard > inherit > browser default attribute`

## What are the values ​​of the position attribute and their differences

1. Default positioning `static`: The default value. Without positioning, the element appears in the normal flow (ignoring top, bottom, left, right or z-index declarations). inherit: Specifies that the value of the position attribute should be inherited from the parent element.

2. Fixed positioning `fixed`: The position of the element is fixed relative to the browser window, and it will not move even if the window is scrolled. Fixed positioning makes the position of the element independent of the document flow, so it does not occupy space. Fixed positioned elements overlap other elements.

3. Relative positioning `relative`: If an element is relatively positioned, it will appear where it is. Then, you can move the element "relative" to its starting point by setting the vertical or horizontal position. When using relative positioning, the element still occupies the original space regardless of whether it is moved or not. Therefore, moving the element will cause it to cover other boxes.

4. Absolute positioning `absolute`: The position of an absolutely positioned element is relative to the nearest positioned parent element. If the element has no positioned parent element, then its position is relative to. Absolute positioning makes the position of an element independent of the document flow, so it does not occupy space. Absolutely positioned elements overlap other elements.

5. Sticky positioning `sticky`: The element is first positioned according to the normal document flow, and then positioned relative to the flow root (BFC) and containing block (the nearest block-level ancestor element) of the element in the flow. The element positioning is then shown as relative positioning before crossing a certain threshold, and then fixed positioning.

## box-sizing property

box-sizing specifies two side-by-side bordered boxes, with the syntax box-sizing: content-box / border-box / inherit

- content-box: The width and height are applied to the content box of the element respectively, and the element's padding and border are drawn outside the width and height. `Standard box model`
- border-box: The width and height set for an element determine the border box of the element. `IE box model`
- inherit: Inherit the box-sizing value of the parent element.

## CSS box model

The CSS box model is essentially a box, which includes: margins, borders, padding and actual content. The box models in CSS include `IE box model` and `standard W3C box model`.

- `Standard box model`, width refers to the width of the content part.
- `IE box model`, width refers to the width of the three parts of content + padding + border.

Therefore, there are differences in calculating the width of the box:

- Standard box model: `Total width of a block = width + margin (left and right) + padding (left and right) + border (left and right)`

- Weird box model: `Total width of a block = width + margin (left and right) (that is, width already includes padding and border values)`

## BFC (Block Formatting Context)

### Concept of BFC

BFC is the abbreviation of Block Formatting Context, that is, block formatting context. BFC is a concept of CSS layout. It is an independent rendering area that specifies how the internal box is laid out, and the child elements of this area will not affect the elements outside. Among them, the more important layout rules are that the internal box is placed vertically. When calculating the height of BFC, floating elements are also included in the calculation.

Principle layout rules of BFC:

- The internal boxes will be placed one by one in the `vertical direction`;
- The vertical distance of the box is determined by the margin`. The margins of two adjacent boxes belonging to the same BFC will overlap (box collapse);
- The left side of each element's margin box touches the left side of the containing block's border box (for left-to-right formatting, otherwise it's the opposite);
- The BFC area will not overlap with the float box;
- BFC is an independent container, and the child elements in the container will not affect the elements outside;
- When calculating the height of BFC, the floating elements also participate in the height calculation;
- The type of element and the display property determine the type of this box. Different types of boxes will participate in different Formatting Contexts

:::tip
How to create a BFC?

- Root element, i.e. HTML element;
- float value is not none;
- position is absolute or fixed;
- display value is inline-block, table-cell, table-caption;
- overflow value is not visible
:::

### BFC usage scenarios

- Remove margin overlap;
- Clear float (let the height of the parent element include the child float element);
- Prevent an element from being covered by a float element;
- Prevent multi-column layout from automatically wrapping due to rounding of width calculation

## Center an element horizontally and vertically

### Horizontally center

- For inline elements: text-align: center;
- For block-level elements with a fixed width:
1. Width and margin implementation. margin: 0 auto;
2. Absolute positioning and margin-left: (parent width - child width)/2, provided that the parent element position: relative
- For block-level elements with unknown width
1. The table tag with left and right margin auto achieves horizontal centering. Use the table tag (or directly set the block-level element to display:table), and then add left and right margins to the tag as auto.
2. Inline-block achieves horizontal centering. display: inline-block and text-align:center achieve horizontal centering.
3. Absolute positioning + transform, translateX can move the element itself by 50%.
4. Flex layout uses justify-content:center

### Vertical centering

1. Use line-height to achieve centering, which is suitable for pure text;
2. Set the parent container to relative positioning, the child to absolute positioning, and the label to achieve adaptive centering through margin;
3. Flexible layout flex: parent sets display: flex; child sets margin to auto to achieve adaptive centering;
4. Parent sets relative positioning, child sets absolute positioning, and achieves it through displacement transform;
5. Table layout, the parent is converted into a table form, and then the child sets vertical-align to achieve it. (Note: the prerequisite for using vertical-align: middle is inline elements and elements with display value of table-cell).

## How to hide an element in a page

- opacity: 0, the element is hidden, but the page layout will not be changed. If the element has been bound to some events, such as click events, then clicking on the area can also trigger the click event;
- visibility: hidden, the element is hidden, but the page layout will not be changed, but the events bound to the element will not be triggered. The corresponding element is hidden, and the original space in the document layout is still reserved (redraw);
- display: none, hide the element and change the page layout. It can be understood as not displaying the corresponding element in the page, and no longer allocating space in the document layout (reflow + redraw)

## Use CSS to implement the triangle symbol

```css
/*Memory formula: The width and height of the box are both zero, and the three-sided borders are all transparent. */
div:after {
position: absolute;
width: 0px;
height: 0px;
content: " ";
border-right: 100px solid transparent;
border-top: 100px solid #ff0;
border-left: 100px solid transparent;
border-bottom: 100px solid transparent;
}
```

## Page Layout

### Flex Layout

The traditional layout solution is based on the box model and relies on the display attribute + position attribute + float attribute. It is very inconvenient for those special layouts. For example, vertical centering is not easy to achieve.

Flex is the abbreviation of Flexible Box, which means "flexible layout" and is used to provide maximum flexibility for the box model. Just specify the container display: flex. It is simply divided into container attributes and element attributes.

Container properties:

- flex-direction: determines the direction of the main axis (i.e. the arrangement method of sub-items) flex-direction: row | row-reverse | column | column-reverse;
- flex-wrap: determines the line breaking rules flex-wrap: nowrap | wrap | wrap-reverse;
- flex-flow: .box { flex-flow: || ; };
- justify-content: alignment, horizontal main axis alignment;
- align-items: alignment, vertical axis direction;
- align-content

Item properties (element properties):

- order property: defines the order of items. The smaller the order, the higher the order. The default is 0;
- flex-grow property: defines the magnification ratio of the item. Even if there is space, it will not be magnified;
- flex-shrink property: defines the reduction ratio of the item. When there is insufficient space, it will be reduced proportionally. If the flow-shrink of an item is defined as 0, it will not be reduced;
- flex-basis Attributes: defines the space occupied by the item when allocating extra space;
- flex: is the abbreviation of flex-grow, flex-shrink, and flex-basis, with a default value of 0 1 auto;
- align-self: allows a single item to be aligned differently from other items, which can be overwritten;
- align-items, the default attribute is auto, which means inheriting the align-items of the parent element. For example, using flex to implement the Holy Grail layout.

### Rem layout

First, Rem is calculated relative to the font-size of the root (html). Simply put, it is a relative singleton such as: font-size: 10px;, then (1rem = 10px) After understanding the calculation principle, first solve how to set the font-size of html on different devices. In fact, the essence of rem layout is geometric scaling, which is generally based on width.

Advantages: can quickly adapt to mobile layout, fonts, and image height

Disadvantages:

1. Currently IE does not support it, and it is rarely used for PC pages;

2. Large amount of data: all pictures and boxes require us to give an accurate value; to ensure the adaptation of different models;

3. In responsive layout, the size of the root element font-size must be dynamically controlled through js. That is to say, the css style and js code have a certain coupling. And the code to change the font-size must be placed before the css style.

### Percentage layout

Through percentage units
" % " to achieve responsive effects. The percentage unit can make the width and height of the components in the browser change with the browser, thus achieving a responsive effect. Intuitively, we may think that the percentage of the child element is completely relative to the direct parent element, the height percentage is relative to the height, and the width percentage is relative to the width. Padding, border, margin, etc., whether vertically or horizontally, are relative to the width of the direct parent element. In addition to border-radius, there are also translation, background-size, etc., which are relative to themselves.

Disadvantages:

1. Difficult calculation

2. If percentages are used in each attribute, the attributes relative to the parent element are not unique. This makes it easy for us to use percentage units to complicate layout problems.

### Floating layout

Floating layout: When an element floats, it can move left or right until its outer edge touches the box containing it or the border of another floating element. After the element floats, it will be out of the normal document flow, so the box in the normal flow of the document becomes as if the floating element does not exist.

Advantages

The advantage of this is that it can make the text wrap around the image when the image and text are mixed. In addition, when the element floats, it has some properties of block-level elements, such as the ability to set width and height, but it is still different from inline-block. The first is that when sorting horizontally, float can set the direction while inline-block has a fixed direction; another is that inline-block sometimes has blank gaps when used.

Disadvantages

The most obvious disadvantage is that once the floating element is out of the document flow, it cannot support the parent element, causing the parent element to collapse in height.

## How to use rem or viewport for mobile adaptation

Changes the number of css pixels that an element occupies on different devices.

Advantages and disadvantages of rem adaptation:

- Advantages: does not destroy the perfect viewport
- Disadvantages: px value conversion rem is too complicated (we use less to solve this problem below)

Principle of viewport adaptation:

In the viewport adaptation scheme, the number of css pixels occupied by each element on different devices is the same. However, the ratio of CSS pixels to physical pixels is different, and they are proportional.

Advantages and disadvantages of viewport adaptation:

- The size measured on our design drawing is the pixel size we can set, that is, what is measured is what is set;

- Disadvantages destroy the perfect viewport.

## Ways to clear floating

- Add additional tags;

- Add overflow attributes to the parent, or set the height;

- Create a pseudo-class selector to clear floating.

```html
<div class="parent">
// Add extra tags and add clear attribute
<div style="clear:both"></div>
// You can also add a br tag
</div>
```

```css
/* Add the :after pseudo element in css */
.parent:after {
content: ""; /* Set the content of the added child element to be empty */
display: block; /* Set the added child element to a block-level element */
height: 0; /* Set the height of the added child element to 0 */
visibility: hidden; /* Set the added child element to be invisible */
clear: both; /* Set clear: both */
}
```