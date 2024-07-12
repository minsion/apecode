---
layout: doc
---

# 程序命名公式及规范

## 前言

本文将从程序的命名常见形似以及现在主流的命名规范做介绍。

## 一、命名公式

### 1. 动词+名

函数命名的时候。

```js
// 如：
var getUserName = function () {};
var addData = function () {};
```

### 2. 判断+名

当返回布尔值的时候使用 is+的形式。

```js
// 如：
var isBool = function () {};
```

## 二、命名规范

### 1. 匈牙利命名法

基本原则是：变量名=属性+类型+对象描述，其中每一对象的名称都要求有明确含义，可以取对象名字全称或名字的一部分。要基于容易记忆容易理解的原则。保证名字的连贯性是非常重要的。

```js
// 如：
var szUserName = "admin";
var aFruits = ["苹果", "西瓜", "樱桃"];
```

| 说明（类型部分）       | 符号              |
| ---------------------- | ----------------- |
| 数组                   | a                 |
| 指针                   | 　 p              |
| 函数                   | 　 fn             |
| 无效                   | 　 v              |
| 句柄                   | 　 h              |
| 长整型                 | 　 l              |
| 布尔                   | 　 b              |
| 浮点型（有时也指文件） | 　 f              |
| 双字                   | 　 dw             |
| 字符串                 | 　 sz             |
| 短整型                 | 　 n              |
| 双精度浮点             | 　 d              |
| 计数                   | c（通常用 cnt）   |
| 字符                   | 　 ch（通常用 c） |
| 整型                   | 　 i（通常用 n）  |
| 字节                   | 　 by             |
| 字                     | 　 w              |
| 实型                   | 　 r              |
| 无符号                 | 　 u              |

关于匈牙利命名法的前缀除了属性部分外，还有属性部分和描述部分，感兴趣的小伙伴可以点击此处[立即查阅](https://baike.baidu.com/item/%E5%8C%88%E7%89%99%E5%88%A9%E5%91%BD%E5%90%8D%E6%B3%95/7632397?fr=aladdin#2)

### 2. 驼峰式命名法

驼峰式命名法（Camel-Case），当变量名或函数名是由一个或多个单词连结在一起，而构成的唯一识别字时，第一个单词以小写字母开始；从第二个单词开始以后的每个单词的首字母都采用大写字母。

```js
// 如：
var userName = "admin";
var fruits = ["苹果", "西瓜", "樱桃"];
```

### 3. 帕斯卡命名法

帕斯卡命名法（Pascal），当变量名和函式名称是由二个或二个以上单词连结在一起，每个单词首字母大写。

```js
// 如：
var UserName = "admin";
```

### 4. BEM 命名法

前面介绍的三中命名规范在多种语言中是通用的，第四种 BEM 则主要侧重于前端的 css 命名规范。
BEM：（Block: 块, Element: 元素, Modifier: 修饰符）是一种基于组件的`Web 开发`方法，基本思想是将用户界面划分为独立的块。

> 官方标准：`namespace-block__element_modifier`

1.  追加约定：给组件添加命名空间 m，表示 模块，防止和第三方组件命名冲突。如：m-block \_\_ element_modifier
2.  所有单词一律小写。
3.  单词之间用 - 分隔，命名尽量不要超过三个单词，避免命名过长。
4.  块名称（Block）通过 - 与命名空间（Namespace）分隔。

块名称 Block 表示一个最高级别的抽象或者说是组件，主要是起到边界的作用，其中有以下三个主要功能特点：

- 负责描述功能，不应该包含状态。

  ```css
  /* correct */
  .m-header {
  }

  /* error */
  .m-header--active {
  }
  ```

- 不影响自身布局，不包含具体的样式。

  ```css
  /* correct */
  .m-header {
  }

  /* error */
  .m-header {
    background-color: skyblue;
  }
  ```

- 不能使用元素选择器和 ID 选择器。

  ```css
  /* correct */
  .m-header {
  }

  /* error */
  .m-header a {
  }
  ```

5.  元素名称（Element）通过 \_\_ 与块名称（Block）分隔。
    元素名称（Element）表示目的，而`不是状态`，在此层用于设置盒子边距宽高度数据、布局方式等。不能脱离 Block 父级单独使用。

```css
.m-header__logo {
  margin-left: 50px;
  width: 100px;
}
.m-header__nav {
  margin: 100px;
}
```

6.  修饰符名称（Modifier）通过 \_ 与元素（Element）名称分隔。
    修饰符名称（Modifier）表示的是状态。

```css
.m-header__nav_navlist {
  background-color: #2b2b2b;
}
```

7.  在组件开发中避免使用全局的 OOCSS 原子类，因为这会降低组件的可复用性；如：pull-left、pull-right、clearfix。（补充：OOCSS 原子类是指将复用度高的样式抽取出来，整合独立的抽象公共类）
8.  尽量避免使用子选择器，如果层次关系过长，逻辑不清晰，非常不利于维护；如: .kso-nav ul li a {}。

使用 sass 预编译语法
首先先搭建好我们的页面结构：

```html
<div class="m-header">
  <div class="m-header__logo">
    <img class="m-header__logo_img" src="" alt="" />
  </div>
  <div class="m-header__nav">
    <ul class="m-header__nav_ul">
      <li></li>
      <li></li>
    </ul>
  </div>
</div>
```

sass 写法：

```css
/* namespace-block__element_modifier */
/* namespace-block */
.m-header {
  /* element */
  &__logo {
    /* modifier */
    &_img {
    }
  }
  /* element */
  &__nav {
    /* modifier */
    &_ul {
    }
  }
}
```

## 总结

程序的命名规范没有强制使用某一种，结合自己日常开发习惯，使用顺手的就可以了，当然同时用多种也可以，比如用驼峰式命名法定义函数，帕斯卡命名法定义变量可以提高辨别度等。以上，便是今天介绍到的全部内容，希望会对你有所帮助。

<br />
<br />
<br />

`最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，感谢您的观看！`
参考博客：
[BEM 命名规范-CSDN 往后余生 cq](https://blog.csdn.net/luchuanqi67/article/details/106116427?spm=1001.2014.3001.5506)
[BEM 命名规范-知乎小思](https://zhuanlan.zhihu.com/p/72631379)
