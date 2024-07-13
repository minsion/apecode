---
layout: doc
---

<script setup>
const numEmojiMapping = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
let num = 0;
let getNum = () => ++num; // Each time getNum() is called, the value of num increases by 1

// Returns an array representation of a number, for example, getNumSplits(123) returns [1, 2, 3]
let getNumSplits = (number) => {
  return number
  .toString()
  .split("")
  .map((item) => (item = Number(item)));
};

// Returns a string representing the emoji representation of a number
let getNumEmoji = () => {
  let emojis = "";
  getNumSplits(getNum()).forEach((item) => {
    emojis += numEmojiMapping[item];
  });
  return emojis;
  };
</script>

# Light functions

Encapsulate commonly used, lightweight utility functions.

Predecessor [Self-encapsulate commonly used utility functions 👉](https://minsion.github.io/apecode/blog/js-fun.html)

## {{ getNumEmoji() }} Performance optimization

### Debounce

:::tip debounce

`Debounce function: The same event trigger within the specified time interval is only executed for the last time.`

```javascript
/**
* Front-end performance optimization: debounce function
* @param {Function} fn debounce processing callback
* @param {Number} delay time interval threshold
* @returns {Function} encapsulated debounce function
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

### Throttling

:::tip throttle

`Throttling function: The task will only be executed once within the specified time interval. `

```javascript
/**
* Front-end performance optimization: throttling function
* @param {Function} fn throttling processing callback
* @param {Number} delay time interval threshold
* @returns {Function} encapsulated throttling function
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
## {{ getNumEmoji() }} Project Development

### Shallow Clone

:::tip ShallowClone

`Shallow Clone`

```javascript
/**
* Shallowly copy an object or array
* @param {any} value - the value to be shallowly copied
* @returns {any} - the value after shallow copy
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
    return value; // For non-ordinary object types such as Date, RegExp, Map, Set, etc., the original value is returned directly
  }
}
```

:::

### Deep copy

:::tip DeepClone

`Deep copy`

```javascript
/**
* Deep copy object or array
* @param {any} obj - value to be deep copied
*/
const deepClone = obj => {
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

### GUID

:::tip GetGuid

`Globally unique identifier`

```javascript
/**
* Globally unique identifier GUID
* @returns {String} xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
*/
export const getGuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
```

:::

### Browser environment

:::tip GetBrowserEnvironment

`Get browser environment`

```javascript
/**
* Get browser environment
* @returns {Object} Browser environment object {isMobile: boolean, isPc: boolean, isWeixin: boolean}
*/
export const getBrowserEnvironment = () => {
  const { userAgent } = navigator;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator);
  const isPc = !isMobile;
  const isWeixin = /MicroMessenger/i.test(navigator);

  return { isMobile, isPc, isWeixin };
};
```

:::

### Address bar parameters

:::tip GetParams

`According to the incoming URL, automatically parse and extract all parameters, and return`

```javascript
/**
* Extract all parameters in the address bar
* @param {String} url URL
* @returns {Object} Parsed parameter object
*/
export const getParams = (url = "") => {
  // str is? The following parameter part string
  const str = url.substr(url.indexOf("?") + 1);
  // Each element of arr is a complete parameter key value
  const arr = str.split("&");
  // result is a collection of parameter key values
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    // The two elements of item are parameter name and parameter value respectively
    const item = arr[i].split("=");
    result[item[0]] = item[1];
  }
  return result;
};
```

:::

### Address bar parameters (specified)

:::tip GetUrlParam

`Automatically obtain the current page address, search according to the specified parameter name, return the found parameter value, if not return null`

```javascript
/**
* Automatically obtain the current page address, search according to the specified parameter name, return the found parameter value, if not return null
* @param {String} name Parameter name to be searched
* @returns {String||Null} Search value result
*/
export const getUrlParam = (name) => {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // Construct a regular expression object containing the target parameter
  let r = window.location.search.substr(1).match(reg); // Match target parameter
  if (r != null) return unescape(r[2]);
  return null; // Return parameter value
};
```

:::

## {{ getNumEmoji() }} Time processing

### Timestamp

:::tip GetTimestamp

`Get the current timestamp`

```javascript
/**
* Get the current timestamp
* @return {String} timestamp
*/
export const getTimestamp = () => {
  return new Date().getTime();
};
```

:::

### Timestamp format

:::tip TimestampToFormatTime

Convert timestamp to user-defined time format

```javascript
/**
* Convert timestamp to user-defined time format
* @param {Number} timestamp timestamp
* @param {String} rule time format
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

### Time format

:::tip FormatTime

`Format the time according to the rules`

```javascript
/**
* Format the time according to the rules
* @param {String} time The time to be formatted 2023-05-23T12:25:42.9703802 || 2023-05-23 12:25:42.9703802
* @param {String} rule Format rule yyyy-MM-dd HH:mm:ss || yyyy-M-d H:m:s Judged the zero padding
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
    // ft = ft.replace(new RegExp(f, "g"), fillingZero(f, timeObj[ff])); // Can be used with fillingZero
  });

  return ft;
};
```

:::

### Filling zeros

:::tip FillingZero

`Automatically determine whether to fill zeros based on the time field name`

```javascript
/**
* Automatically determine whether to fill zeros based on the time field name
* @param {String} field time field name
* @param {String} value pre-processed value
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

## {{ getNumEmoji() }} Mathematical operations

### Four arithmetic operations

:::tip Calc

`Basic mathematical operations can effectively avoid javascript precision issues. `

```javascript
/**
* Basic mathematical operations can effectively avoid javascript precision issues.
* @param { String | Number } num1 operand
* @param { String | Number } num2 operand
* @param { String } type calculation type
* @return { Number } result calculation result
*/
function calc(num1, num2, type) {
  const n1 = num1.toString().split(".")[1] ?? "0";
  const n2 = num2.toString().split(".")[1] ?? "0";
  const point = 10 ** (+n1 > +n2 ? n1.length : n2.length); // Accuracy
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

### Random numbers

:::tip GetRandomInt

`Get a random integer within the specified interval [min, max]`

```javascript
/**
* Get a random integer within the specified interval [min, max]
* @param {Number} min minimum value
* @param {Number} max maximum value
* @returns random integer
*/
export const getRandomInt = (min, max) => {
  // Use Math.floor() to round down to ensure that the result is an integer
  // Use Math.random() to generate a random decimal between 0 and 1
  // Then multiply it by (max - min + 1) to get a random decimal between 0 and (max - min)
  // Finally add min to move the result into the specified interval
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
```

:::

### Random number (adjacent duplicate removal)

:::tip GetRandomIntWithExclusion

`Randomly generate an integer value in a specified interval, and allow to limit duplicate values ​​to avoid consecutive random number duplication`

```javascript
/**
* Randomly generate an integer value in a specified interval, and allow to limit duplicate values ​​to avoid consecutive random number duplication
* @param {Number} min minimum value
* @param {Number} max maximum value
* @param {Number|undefined} excludeValue limit duplicate value
* @returns {Number}
*/
export const getRandomIntWithExclusion = (min, max, excludeValue) => {
let randomValue;
do {
  randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  // Combined with the use of getRandomInt
  // randomValue = getRandomInt(min, max)
} while (excludeValue !== undefined && randomValue === excludeValue);
  return randomValue;
};
```

:::

## {{ getNumEmoji() }} string processing

### replace string

:::tip ReplaceString

`Replace the specified string`

```javascript
/**
* Replace the specified string
* @param {String} sourceStr source modification content
* @param {String} checkStr content to be checked for matching
* @param {String} replaceStr planned replacement content
* @returns {String} replacement result
*/
function replaceString(sourceStr, checkStr, replaceStr = "") {
  if (!sourceStr) return console.error("sourceStr Required field");
  if (!checkStr) return console.error("checkStr Required field");
  const reg = new RegExp(checkStr);
  return sourceStr.replace(reg, replaceStr);
},
```

:::
## {{ getNumEmoji() }} Thousands separator

:::tip Thousands separator

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
