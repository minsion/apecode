---
layout: doc
---

<script setup>
  const numEmojiMapping = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
  let num = 0;
  let getNum = () => ++num; // 每次调用 getNum()，num 的值加 1

  // 返回数字的数组表示形式，例如，getNumSplits(123) 返回 [1, 2, 3]
  let getNumSplits = (number) => {
    return number
      .toString()
      .split("")
      .map((item) => (item = Number(item)));
  };

  // 返回一个字符串，表示数字的 emoji 表示形式
  let getNumEmoji = () => {
    let emojis = "";
    getNumSplits(getNum()).forEach((item) => {
      emojis += numEmojiMapping[item];
    });
    return emojis;
  };
</script>

# 轻函数

封装常用量、轻量的工具函数。

## {{ getNumEmoji() }} 性能优化

### 防抖

:::tip debounce

`防抖函数：指定时间间隔内相同的事件触发只执行最后一次。`

```javascript
/**
 * 前端性能优化：防抖函数
 * @param {Function} fn 防抖处理回调
 * @param {Number} delay 时间间隔阈值
 * @returns {Function} 封装好的防抖函数
 */
export const debounce = (fn, delay = 200) => {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};
```

:::

### 节流

:::tip throttle

`节流函数: 指定时间间隔内只会执行一次任务。`

```javascript
/**
 * 前端性能优化：节流函数
 * @param {Function} fn 节流处理回调
 * @param {Number} delay 时间间隔阈值
 * @returns {Function} 封装好的节流函数
 */
export const throttle = (fn, delay = 200) => {
  let timer;
  return function () {
    if (!timer) {
      fn.apply(this, arguments);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
},
```

:::

## {{ getNumEmoji() }} 时间处理

### 时间戳

:::tip GetTimestamp

`获取现在的时间戳`

```javascript
/**
 * 获取当前时刻的时间戳
 * @return {String} 时间戳
 */
export const getTimestamp = () => {
  return new Date().getTime();
};
```

:::

### 时间戳格式

:::tip TimestampToFormatTime

将时间戳转换为用户自定义的时间格式

```javascript
/**
 * 将时间戳转换为用户自定义的时间格式
 * @param {Number} timestamp 时间戳
 * @param {String} rule 时间格式
 * @returns {String}
 */
export const timestampToFormatTime = (timestamp, rule = "yyyy-MM-dd HH:mm:ss") => {
  const D = new Date(timestamp);
  const timeObj = {};
  const rules = rule.match(/\w+/g);
  let ft = rule;

  timeObj["yyyy"] = D.getFullYear();
  timeObj["MM"] = D.getMonth() + 1;
  timeObj["dd"] = D.getDate();
  timeObj["HH"] = D.getHours();
  timeObj["mm"] = D.getMinutes();
  timeObj["ss"] = D.getSeconds();
  timeObj["ms"] = D.getMilliseconds();

  rules.map((f) => {
    let ff = f.length === 1 ? `${f}${f}` : f;
    ft = ft.replace(new RegExp(f, "g"), fillingZero(f, timeObj[ff]));
  });

  return ft;
};
```

:::

### 时间格式

:::tip FormatTime

`根据规则，对时间进行格式处理`

```javascript
/**
 * 根据规则，对时间进行格式处理
 * @param {String} time 需格式的时间 2023-05-23T12:25:42.9703802 || 2023-05-23 12:25:42.9703802
 * @param {String} rule 格式规则 yyyy-MM-dd HH:mm:ss || yyyy-M-d H:m:s 对填充零进行了判断
 * @returns {String}
 */
export const formatTime = (time, rule = "yyyy-MM-dd HH:mm:ss") => {
  const times = time.match(/\d+/g);
  const timeObj = {};
  const rules = rule.match(/\w+/g);
  let mapping = ["yyyy", "MM", "dd", "HH", "mm", "ss", "ms"];
  let ft = rule;

  // 数组转对象
  times.map((t, k) => {
    timeObj[mapping[k]] = times[k];
  });

  rules.map((f) => {
    let ff = f.length === 1 ? `${f}${f}` : f;
    ft = ft.replace(new RegExp(f, "g"), timeObj[ff]);
    // ft = ft.replace(new RegExp(f, "g"), fillingZero(f, timeObj[ff])); // 可搭配 fillingZero 使用
  });

  return ft;
};
```

:::

### 前补零

:::tip FillingZero

`根据时间字段名，自动判断是否需要填充零`

```javascript
/**
 * 根据时间字段名，自动判断是否需要填充零
 * @param {String} field 时间字段名
 * @param {String} value 预处理值
 * @returns {String|Number}
 */
export const fillingZero = (field, value) => {
  switch (field) {
    case "MM":
    case "dd":
    case "HH":
    case "mm":
    case "ss":
      return value < 10 ? `0${+value}` : value;
    case "M":
    case "d":
    case "H":
    case "m":
    case "s":
      return +value;
    default:
      return value;
  }
};
```

:::

## {{ getNumEmoji() }} 数学运算

### 四则运算

:::tip Calc

`基本数学运算，能够有效避免 javascript 精度问题。`

```javascript
/**
 * 基本数学运算，能够有效避免javascript精度问题。
 * @param { String | Number } num1 操作数
 * @param { String | Number } num2 被操作数
 * @param { String } type 计算类型
 * @return { Number } result 计算结果
 */
function calc(num1, num2, type) {
  const n1 = num1.toString().split(".")[1] ?? "0";
  const n2 = num2.toString().split(".")[1] ?? "0";
  const point = 10 ** (+n1 > +n2 ? n1.length : n2.length); // 精度
  let result = 0;
  switch (type) {
    case "+":
      result = (num1 * point + num2 * point) / point;
      break;
    case "-":
      result = (num1 * point - num2 * point) / point;
      break;
    case "*":
      result = (num1 * point * (num2 * point)) / point / point;
      break;
    case "/":
      result = (num1 * point) / (num2 * point);
      break;
  }
  return result;
}
```

:::

### 随机数

:::tip GetRandomInt

`获取指定间距 [min, max] 内的随机整数`

```javascript
/**
 * 获取指定间距 [min, max] 内的随机整数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @returns 随机整数
 */
export const getRandomInt = (min, max) => {
  // 使用 Math.floor() 向下取整，确保结果是整数
  // 使用 Math.random() 生成一个介于 0 到 1 之间的随机小数
  // 然后将其乘以 (max - min + 1) 来获取一个介于 0 到 (max - min) 之间的随机小数
  // 最后再加上 min，将结果移动到指定的间距内
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
```

:::

### 随机数(相邻去重)

:::tip GetRandomIntWithExclusion

`随机一个指定区间的整型数值，且允许限制重值，避免连续随机数重复`

```javascript
/**
 * 随机一个指定区间的整型数值，且允许限制重值，避免连续随机数重复
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @param {Number|undefined} excludeValue 限制重值
 * @returns {Number}
 */
export const getRandomIntWithExclusion = (min, max, excludeValue) => {
  let randomValue;
  do {
    randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

    // 结合 getRandomInt 的使用
    // randomValue =  getRandomInt(min, max)
  } while (excludeValue !== undefined && randomValue === excludeValue);
  return randomValue;
};
```

:::

## {{ getNumEmoji() }} 面试手撕函数

### 替换字符串

:::tip ReplaceString

`替换指定字符串`

```javascript
/**
 * 替换指定字符串
 * @param {String} sourceStr 源修改内容
 * @param {String} checkStr 需检验匹配的内容
 * @param {String} replaceStr 计划替换内容
 * @returns {String} 替换结果
 */
function replaceString(sourceStr, checkStr, replaceStr = "") {
  if (!sourceStr) return console.error("sourceStr 为必传字段");
  if (!checkStr) return console.error("checkStr 为必传字段");
  const reg = new RegExp(checkStr);
  return sourceStr.replace(reg, replaceStr);
},
```
:::


### 千分位分隔符
:::tip 千分位分隔符

```javascript
function thousandSeparator(number) {
  let result = [];
  let rest = String(number);
  while (rest.length) {
    result.unshift(rest.slice(-3));
    rest = rest.slice(0, -3);
  }
  const tempRes = result.join(",");
  return tempRes
}
console.log('thousandSeparator：', thousandSeparator(12378900)) // 12,378,900
```
:::

### 检查是否是类的对象实例
:::tip 检查是否是类的对象实例

```javascript
const checkIfInstanceOf = (obj, classFunction) => {
  if (classFunction === null) return false;
  while (obj !== null) {
    if (obj.__proto__ === classFunction.prototype) {
      return true
    };
    obj = obj.__proto__;
  }
  return false;
}
class Animal {};
class Dog extends Animal {};

console.log('checkIfInstanceOf', checkIfInstanceOf(new Date(), Date)) // true
console.log('checkIfInstanceOf', checkIfInstanceOf(new Dog(), Animal)) // true
console.log('checkIfInstanceOf', checkIfInstanceOf(Date, Date)) // false
console.log('checkIfInstanceOf', checkIfInstanceOf(5, Number)) // true
console.log('checkIfInstanceOf', checkIfInstanceOf([], Array)) // true
```
:::


### 浅拷贝

:::tip ShallowClone

`浅拷贝`

```javascript
/**
 * 浅拷贝对象或数组
 * @param {any} value - 需要浅拷贝的值
 * @returns {any} - 浅拷贝后的值
 */
function shallowClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  const type = Object.prototype.toString.call(value);

  if (type === "[object Array]") {
    return [...value];
  } else if (type === "[object Object]") {
    return { ...value };
  } else {
    return value; // 对于 Date, RegExp, Map, Set 等非普通对象类型，直接返回原值
  }
}
```

:::

### 深拷贝

:::tip DeepClone

`深拷贝`

```javascript
/**
 * 深拷贝对象或数组
 * @param {any} value - 需要深拷贝的值
 * @returns {any} - 深拷贝后的值
 */
fconst deepClone = obj => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key =>
      (clone[key] =
        typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  );
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
};

const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj
```
:::

### 数组的交集

:::tip intersect
```js
// 在西雅图的公司远程工作，因为月中算法考核，半月的绩效奖金没了。。。
const intersect = function (nums1, nums2) {
  let result = []
  let longArr = nums1.length > nums2.length ? nums1 : nums2;
  let shortArr = nums1.length > nums2.length ? nums2 : nums1;

  for (let i = 0; i < shortArr.length; i++) {
    let longIndex = longArr.indexOf(shortArr[i])
    if (longIndex != -1) {
      result.push(longArr.splice(longIndex, 1)[0])
    }
  }
  return result
};

intersect([1,2,1,2], [2,2,2]) // [2, 2, 2]
intersect([4,9,5], [9,4,9,8,4]) // [4, 9]
intersect([3,1,2], [2,2]) // [2]
```
:::

### 数组排序
:::tip sortArray
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function (nums) {
  const { length } = nums;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
};
sortArray([1, 3, 9, 5, 2, 4, 6])
```
:::