---
layout: doc
---

# 获取当前标签页地址栏指定参数

## 一、实现代码

html 代码部分：

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <title>获取当前标签页地址栏指定参数</title>
  </head>
  <body></body>
  <script>
    ……
  </script>
</html>
```

js 代码部分

```js
// 本次测试地址是：http://127.0.0.1:5500/index.html?a=1&b=2

/**
 * 获取当前标签页地址栏指定参数
 * @param {String} paramStr 需要获取的参数名称
 * @return {String / Number} 返回对应的参数值，如没有返回-1
 */
function getURLParameter(paramStr) {
  const paramList = location.search.substring(1).split("&");
  let index = paramList.findIndex(function (item) {
    return item.indexOf(paramStr) != -1;
  });
  return index !== -1 ? paramList[index].substring(paramList[index].indexOf("=") + 1) : -1;
}
console.log(getURLParameter("b"));
```

## 二、原理分析

实现原理，通过 BOM Loaction 对象的内置方法，能够快速回去地址栏的参数部分内容；然后经过数组、字符串方法所提取，详细内容请看代码。

### 方法描述

1. loaction.search：「属性」获取浏览器地址栏数据；返回字符串。
2. String.substring(start,stop)：「方法」提取字符串中介于两个指定下标之间的字符；start ==起始下标，必需==，stop ==结束下标，可选==；返回提取后的字符串。
3. Array.split(separator,howmany)：「方法」用于把一个字符串分割成字符串数组；separator ==分隔符，必需==， howmany ==截取长度，可选==；返回新数组。
4. Array.findIndex(function(currentValue, index, arr), thisValue)：「方法」返回传入一个测试条件（函数）符合条件的数组第一个元素位置；function(currentValue, index, arr) ==回调函数，必须==，thisValue ==可选==；返回下标。
5. Strinig.indexOf(searchvalue,start)：「方法」返回某个指定的字符串值在字符串中首次出现的位置；searchvalue ==需要检索的字符串，必需==，start ==检索起始位置，可选==；返回下标。

<br />
<br />
<br />

`最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，感谢您的观看！`
