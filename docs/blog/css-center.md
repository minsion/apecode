---
layout: doc
---

# 元素水平垂直居中的六种方式

## 前言

让元素同时实现水平垂直，是我们前端开发所经常遇到的，本文将介绍六种常见的方式，以便你的参考供用。

## 代码预设

下面将会介绍到的六种方法均是使用了这里的 HTML 结构和 css 主体样式。

```html
<!-- css -->
<style>
  body {
    margin: 0;
    padding: 0;
  }
  .parents {
    width: 100vw;
    height: 100vh;
  }
  .children {
    width: 300px;
    height: 300px;
    background-color: #2980b9;
  }
</style>

<!-- html -->
<body>
  <div class="parents">
    <div class="children"></div>
  </div>
</body>
```

## 一、绝对定位 + transform

通过设置父盒子相对定位，子盒子绝对定位并 top 和 left 距离 50%，实现了子盒子左上角点居中，再通过 transform: translate(-50%, -50%); 属性来实现子盒子的中心点居中。

`注意： 需要添加浏览器前缀进行兼容。`

```css
.parents {
  position: relative;
}
.children {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}
```

## 二、绝对定位 + margin

### 1.不用子盒子的宽高

通过设置父盒子相对定位，子盒子绝对定位，top、right、bottom、left 均为 0，再通过 margin: auto; 属性来实现子盒子的水平垂直居中。

```css
.parents {
  position: relative;
}
.children {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
```

### 2.需要子盒子的宽高

通过设置父盒子相对定位，子盒子绝对定位并 top 和 left 距离 50%，实现了子盒子右上角居中，然后利用 margin-top 和 margin-left 属性等于盒子的负宽高，来实现子盒子的中心点居中。

`注意： 需要知道子盒子的宽度和高度。`

```css
.parents {
  position: relative;
}
.children {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -300px;
  margin-left: -300px;
}
```

## 三、table-cell 属性

通过设置子盒子为 display: table-cell; 显示类型 ，并分别通过 text-align: center; 和 vertical-align: middle; 实现了子盒子内的文本水平垂直居中。

`注意： 水平垂直居中的是盒子中的文本段落。`

```css
.children {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
```

## 四、flex 布局

通过设置父盒子为 display: display; 显示类型 ，并分别通过 justify-content: center; 和 align-items: center; 实现父盒子中的主轴、交叉轴居中，从而让子盒子水平垂直居中。

`注意： 需要添加浏览器前缀进行兼容。`

```css
.parents {
  display: flex;
  -webkit-display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
}
```

## 五、Grid 布局

Grid 网格布局，新出的布局方式

```css
.parents {
  display: grid;
  place-items: center;
}
```

## 六、calc()

calc() 函数是 css 中用于动态计算长度值，运算符 ”-“ 前后都需要保留一个空格。

`注意： 需要添加浏览器前缀进行兼容。`

```css
.parents {
  position: relative;
}
.children {
  position: absolute;
  top: calc((100vh - 300px) / 2);
  top: -webkit-calc((100vh - 300px) / 2);
  left: calc((100vw - 300px) / 2);
  left: -webkit-calc((100vw - 300px) / 2);
}
```

## 总结

以上就是今天要讲的内容，本文介绍了六种让元素水平垂直居中的方法，而我个人常用的是绝对定位 + transform 方式，希望可以通过练习，在不同的情景之下使用最优的居中方式。
