---
layout: doc
---

# 原生 AJAX 的异步请求

> AJAX 是 Asynchronous JavaScript And XML 的缩写，即异步 JavaScript 和 XML 技术，并不是一门新的语言或技术，可以在无需重新加载整个网页的情况下，实现更新部分网页。

## 一、创建 XMLHttpRequest 对象

```js
// 创建自定义变量，用于存储 XMLHttpRequest 对象的实例
let xmlhttp;
// 避免浏览器不兼容
if (window.XMLHttpRequest) {
  // IE7+、Firefox、Chrome、Safari 以及 Opera
  xmlhttp = new XMLHttpRequest();
} else {
  // IE5、IE6
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
```

## 二、请求

```js
//  打开请求
xmlhttp.open("GET", "./data/data.txt", true);
// xmlhttp.open(method, url, async);
// method 	请求的类型，如常用的 get 和 post
// url 		处理响应文件的路径
// async	是否使用异步处理，布尔数据类型

// 发送请求
xmlhttp.send();
```

## 三、响应

```js
// 字符串形式的响应数据
xmlhttp.responseText;

// XML形式的响应数据
xmlhttp.responseXML;
```

## 四、onreadystatechange 事件

- onreadystatechange：监测 XMLHTTP 请求的状态（readyState）信息事件，一旦 readyState 发生改变即调用该事件。
- readyState 请求状态表如下：

| 状态 |           含义           |
| :--: | :----------------------: |
|  0   |       请求未初始化       |
|  1   |     服务器连接已建立     |
|  2   |        请求已接收        |
|  3   |        请求处理中        |
|  4   | 请求已完成，且响应已就绪 |

- status 状态码：

| 状态码 |      含义      |
| :----: | :------------: |
|  200   |      “OK”      |
|  304   |     未修改     |
|  403   |      禁止      |
|  404   |   未找到页面   |
|  500   | 内部服务器错误 |

_需要了解更多的状态码信息不妨观看： [HTTP\_请求信息与响应信息](https://blog.csdn.net/weixin_44808483/article/details/105216356)_

- 结合使用

```js
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    // 这里是异步之后的执行的内容
  }
};
```

## 五、小案例

```js
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Demo</title>
    <script src="js/index.js"></script>
    <!-- <script type="module" src="js/mian.js"></script> -->
  </head>

  <body></body>

    <script>
    "use strict";
    /*
      读取本地 json 文件的数据
	  1.读取 data.txt 中的内容
   	  2.打印在 body 节点上
	*/
    const xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    // 这里的 url 是需要读取的文件路径
    xhr.open("GET", "./data/data.json", true);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        if (xhr.status == 200) {
          // 把响应的内容打印在 body 上
          document.body.innerHTML = xhr.responseText;
        }
      }
    };
  </script>
</html>
```

_注： 运行 AJAX 的时候需要在服务器环境上才可以运行，不然会报错，这里可以在 vscode 添加 live server 插件，并使用该插件运行代码即可。_
