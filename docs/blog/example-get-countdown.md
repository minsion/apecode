---
layout: doc
---

# 日期倒计时计算 countdown

## 一、实现代码

函数封装：

```js
/* countdown.js */
/**
 * 输入一个时间，自动计算与当前时间的时间差，可返回剩余天数、小时数、分钟数、秒数、毫秒数，或全部最佳时间集合。
 * @param {String} planTimeStr 设定需计算的时间（格式：2021-09-23T18:32:00）
 * @param {String} type 需要计算得到的数据。（type = "a" | "d" | "h" | "m" | "s" | "ms"）
 * @returns {Object} 返回对应的数据
 */
export default function countdown(planTimeStr, type = "a") {
  const planTime = new Date(planTimeStr).getTime();
  const nowTime = new Date().getTime();
  let diffTime, isExpire, result;

  isExpire = nowTime > planTime ? true : false;
  diffTime = isExpire ? nowTime - planTime : planTime - nowTime;

  switch (type) {
    case "d": {
      result = { d: floor(diffTime / 86400000), isExpire };
      break;
    }

    case "h": {
      result = { h: floor(diffTime / 3600000), isExpire };
      break;
    }

    case "m": {
      result = { m: floor(diffTime / 60000), isExpire };
      break;
    }

    case "s": {
      result = { s: floor(diffTime / 1000), isExpire };
      break;
    }

    case "ms": {
      result = { ms: diffTime, isExpire };
      break;
    }

    case "a": {
    }
    default: {
      let d, h, m, s, ms;
      d = floor(diffTime / 86400000);
      h = floor((diffTime - d * 86400000) / 3600000);
      m = floor((diffTime - d * 86400000 - h * 3600000) / 60000);
      s = floor((diffTime - d * 86400000 - h * 3600000 - m * 60000) / 1000);
      ms = floor(diffTime - d * 86400000 - h * 3600000 - m * 60000 - s * 1000);
      result = {
        d,
        h,
        m,
        s,
        ms,
        isExpire,
      };
    }
  }

  return result;
}

function floor(num) {
  return Math.floor(num);
}
```

## 二、原理分析

实现原理：通过将用户指定时间的时间戳和当前时间的时间戳相减后，将结果按照毫秒的换算比例转换即可。

### 描述方法：

1. new Date()「方法」获得当前时间。
2. getTime() 「方法」将日期时间转换成时间戳。
3. Math.floor()「方法」将指定数值向下取整。

<br />
<br />
<br />

`最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，感谢您的观看！`
