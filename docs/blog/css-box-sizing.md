---
layout: doc
---

# 标准盒模型与怪异盒模型的区别

## 前言

盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括：边距，边框，填充，和实际内容。它允许我们在其它元素和周围元素边框之间的空间放置元素。
目前盒模型主要分为两大门派：标准盒模型和怪异盒模型。其中早期的怪异盒模型是存在于 IE 内核浏览器。

## 一、标准盒模型

标准盒模型又称 W3C 标准盒模型，其中标准盒模型的 width 等于 content 的宽度，标准盒模型的 height 等于 content 的高度。
`标准盒大小计算公式：width(content) + padding + border + margin`

![在这里插入图片描述](/images/blog/css/20201224112703410.png)

## 二、怪异盒模型

怪异盒模型又称 IE 盒子模型，其中怪异盒子模型的 width 等于 content + padding + border 的宽度，怪异盒子模型的 height 等于 content + padding + border 的高度。
`怪异盒大小的计算公式：width(content + padding + border) + margin`

![在这里插入图片描述](/images/blog/css/20201224113002950.png)

## 三、css 样式

在 css3 中添加了对盒模型设置的属性 box-sizing，可以根据需要自由调整。`浏览器支持：IE8+`

float 常用属性值：

| 属性值      | 描述                                                        |
| ----------- | ----------------------------------------------------------- |
| content-box | 默认值，盒子宽度高度等于 content（标准盒模型）。            |
| border-box  | 盒子宽度高度等于 content + padding + border（怪异盒模型）。 |
| padding-box | 盒子宽度高度等于 content + padding。                        |
| inherit     | 从父元素中继承 box-sizing 属性的值。                        |

## 四、测试代码

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <style>
      .box {
        margin: 30px;
        padding: 20px;
        width: 80px;
        height: 40px;
        border: 10px solid #00007e;
        background: #fec997;
        box-sizing: border-box; /* 设置盒子类型 */
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

## 总结

最后，IE 浏览器中使用怪异盒子模型的是 IE5.5 及更早的版本，使用标准盒模型的是 IE6 及更新的版本，并且在编写 html 文件的时候应该`设置 !DOCTYPE 声明`，这样可以让 IE 浏览器遵循标准的兼容模式渲染。

`最后，如果您有更好的方式，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，`
