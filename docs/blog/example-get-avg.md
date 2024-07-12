---
layout: doc
---

# 计算一维数组、一维数组对象指定属性的平均值 getAvg

## 一、实现代码

函数封装：

```js
/* getAvg.js */
/**
 * 求平均值，可计算一维数组，一维数组对象.
 * @param {array} arr 「必需」需求平均的数组.
 * @param {string} attr 「一维数组对象时必需」当数组为对象型数组时,需要指定具体属性名.
 * @param {number} deg 「存在小数时必需」十的倍数。当数组存在小数时，为避免 js 自身存在的精度问题，
 *                      可先乘于倍数消去小数，之后再除回来。（默认值1，[1,10,100,1000, …]）.
 * @returns {number} 返回平均值,如果数据本身死循环,会根据传入的精度对数据进行四舍五入.
 */
function getAvg(arr, attr = "", deg = 1) {
  let len, total, avg, dot;
  len = arr.length;

  // 数组无数据时:
  if (len === 0) return 0;
  // 数据有仅只有一个数据时:
  if (len === 1) return arr[len - 1][attr] || arr[len - 1];

  // 数组存在多个数据时:
  const IsObj = arr[0].constructor === Object;
  dot = `${deg}`.split("").length - `${deg}`.split("").indexOf("0"); // 根据传入的精度,判断需要保留小数点后几位.
  if (!IsObj) {
    // 基本数组
    total = arr.reduce((total, item) => total + item * deg, 0);
  } else {
    // 数组对象
    total = arr.reduce((total, item) => total + item[attr] * deg, 0);
  }

  avg = total / len / deg;

  return avg.toFixed(dot) * 1;
}
```

运行效果：

```js
// 基本数组
let arr = [1.2, 2.2];
// 数组对象
let obj = [
  {
    name: "苹果",
    price: 7.99,
  },
  {
    name: "香蕉",
    price: 3.34,
  },
  {
    name: "葡萄",
    price: 11.9,
  },
];

/* 未指定数据精度时 */
getAvg(arr); // 1.7000000000000002
/* 指定数据精度时 */
getAvg(arr, "", 10); // 1.7

/* 未指定属性名 */
getAvg(obj); // NaN
/* 指定属性名 */
getAvg(obj, "price", 100); // 7.74
```

## 二、原理分析

实现原理：根据用户传入是一维数组、数组对象，函数内部自行判断后进行求均值。

### 描述方法：

1. length「属性」获得数组的长度。
2. String.prototype.split() 「方法」使用指定的分隔符字符串将一个 String 对象分割成子字符串数组。
3. String.prototype.indexOf()「方法」用它的 String 对象中第一次出现的指定值的索引，从 fromIndex 处进行搜索。如果未找到该值，则返回 -1。
4. Array.prototype.reduce() 「方法」对数组中的每个元素执行一个由您提供的 reducer 函数(升序执行)，将其结果汇总为单个返回值。
5. Mumber.prototype.toFixed() 「方法」使用定点表示法来格式化一个数值，即保留小数点个位数。

<br />
<br />
<br />

`最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，感谢您的观看！`
