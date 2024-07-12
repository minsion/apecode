---
layout: doc
---

# 获取当前设备的类型，以及是否为微信内置浏览器

## 一、实现代码

html 部分代码：

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <title>获取当前设备的类型、系统、以及是否为微信内置浏览器</title>
  </head>
  <body></body>
  <script>
    ……
  </script>
</html>
```

javascrit 部分代码：

```js
/**
 * 获取当前设备的类型、系统、以及是否为微信内置浏览器.
 * @return {Object} 关于设备类型的对象，值包含安卓，ios，移动设备，pc设备，以及微信内置浏览器.
 */
function getDeviceType() {
  const ua = navigator.userAgent.toLowerCase();
  let deviceObj = {
    isAndroid: false,
    isIOS: false,
    isMobile: false,
    isPC: false,
    isWeiXin: false,
  };
  deviceObj.isAndroid = ua.match(/android/i) ? true : false;
  deviceObj.isIOS = ua.match(/iphone|ipod|ipad|Macintosh/i) ? true : false;
  deviceObj.isMobile = ua.match(/android|iphone|ipod|ipad/i) ? true : false;
  deviceObj.isPC = !deviceObj.isMobile;
  deviceObj.isWeiXin = ua.match(/MicroMessenger/i) ? true : false;
  return deviceObj;
}
```

## 二、原理分析

实现原理：通过检测 userAgent 用户代理信息，是否属于相关设备即可。

### 方法描述

1. navigator.userAgent「属性」获取用户代理信息，返回字符串。
2. String.toLowerCase()「方法」将字符串的字符全部转换为小写字母，返回小写字母字符串。
3. stringObject.match(regexp)「方法」在字符串内检索指定的值，或找到一个或多个正则表达式的匹配；stringObject ==需要检索的字符串 必需==，regexp ==正则表达式 必需==；返回布尔值。

<br />
<br />
<br />

`最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，感谢您的观看！`
