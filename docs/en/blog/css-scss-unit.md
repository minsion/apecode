---
layout: doc
---

# Sass 动态转换单位

## 项目场景：

在使用 Sass 扩展语言进行开发的时候。

## 问题描述：

使用 Sass 定义了一个变量 $box: 750px, 在这个时候想直接在后面添加是行不通的。

```css
$box: 750px;
div {
  width: $box vw; /* 返回 750px vw */
}
```

## 原因分析：

在这里与 Sass 语言的编译处理机制有关。

## 解决方案：

首先我们得先去掉当前长度的单位，用现在的长度除于 1 的单位即可去掉单位；然后在乘以需要转换的比例即可，当然在转换单位的时候记得按比例转换。

```css
/* 示例 */
$box: 750px;
div {
  width: $box / 1px * 1vw; /* 返回 750vw */
}
```

现在有一个需求的就是将 px 转变为 vw，并且基准值为 100px

```css
$box: 750px;
div {
  width: $n / 1px / 100 * 1vw; /* 返回 7.5vw */
}
```

可是通过这样写发现，如果需要重复转换的时候就得重复这样写了，所以我们可以使用 Sass 中的函数进行封装，以便重复调用。

```css
$box: 750px;

/* 转换width */
@function getWidth($n) {
  /* $n * 0 + 1 这样可以获取到 $n 的单位 */
  @return $n / ($n * 0 + 1) / 100 * 1vw;
}

/* 转换Height */
@function getHeight($n) {
  @return $n / ($n * 0 + 1) / 100 * 1vh;
}

div {
  width: getWitch($box); /* 返回 7.5vw */
  height: getHeight(3721px); /* 返回 37.21vh */
}
```
