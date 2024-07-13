---
layout: doc
---

# 浏览器对象模型 BOM

## 前言

BOM，全称 Browser Object Model（浏览器对象模型），它允许 JavaScript 与浏览器之间进行对话，其中主要的有 window、screen、location、history、navigator 等五大对象组成，下面我们将逐一进行介绍。

## 一、Window

window 对象代表了着浏览器窗口，是 javascrip 语言中最大的对象，下列将介绍到的四大对象也属于 window 当中，定义变量、常量、函数会自动成为 window 对象成员。

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>window BOM</title>
  </head>
  <body></body>
  <script>
    var a = "变量";
    console.log(a); // 打印 a 变量，可以正常打印
    console.log(window.a); // 在 a 变量前添加 window. ，也可以正常打印。
  </script>
</html>
```

### 1. 弹出框

- alert：警告框，对用户某操作进行警示功能
  window.alert(value)，value：警告内容。
- confirm：确认框，对用户某操作进行判断，根据用户的需要执行
  window.confirm(value)，value：需要用户确认的内容，返回布尔值。
- prompt：提示框，对用户进行数据采集
  window.prompt(value, defaultvalue)，value：为用户输入提示，返回用户输入内容；defaultvalue：输入框默认值（可省，为空）。

```js
window.alert("这是一个警示框");
let boor = window.confirm("这是一个确认框");
console.log("确认框" + boor);
let userString = window.prompt("这是一个提示框", "默认值");
console.log("提示框中，你输入的是" + userString);

// 由于提示框是常用的方法，所以在 javascript 语法中使用提示框可以省略 window. 直接使用。
alert("这是一个警示框");
let boor2 = confirm("这是一个确认框");
console.log("确认框" + boor);
let userString2 = prompt("这是一个提示框", "默认值");
console.log("提示框中，你输入的是" + userString);
```

### 2. 定时器

- setTimeout：等待指定毫秒数后执行函数 `执行一次`
  setTimeout(function, milliseconds)，function：需要执行的函数；milliseconds：等待时间
- setInterval：等待指定毫秒数循环执行函数 `循环执行，直到被清除`
  setInterval(function, milliseconds)，function：需要执行的函数；milliseconds：等待时间

- clearTimeout：停止 Timeout 定时器的执行
  clearTimeout(id)，id：需要停止执行的序号。
- clearInterval：停止 Interval 定时器的执行
  clearInterval(id)，id：需要停止执行的序号。

```js
// 在这里，window. 也可以省略
// 创建定时器的演示
window.setTimeout(function () {
  console.log("setTimeout定时器执行");
}, 100);

var i = 1;
window.setInterval(function () {
  console.log("setInterval定时器执行" + i++ + "次");
}, 1000);

// 清除定时器的演示
// 在定义定时器的时候，会返回一个定时器的 id，通过这个 id 即可清除停止定时器。
var j = 1;
var k = window.setInterval(function () {
  // 当执行到第十次时清除定时器。
  if (j === 10) {
    clearInterval(k);
  }
  console.log("setInterval定时器执行" + j++ + "次");
}, 1000);
// clearTimeout 同理
```

### 3. 位置

| 属性                                 | 描述                                                                                                                                                       |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| innerHeight                          | 返回窗口的文档`显示区`的高度。                                                                                                                             |
| innerWidth                           | 返回窗口的文档`显示区`的宽度。                                                                                                                             |
| outerHeight                          | 返回窗口的外部高度。                                                                                                                                       |
| outerWidth                           | 返回窗口的外部宽度。                                                                                                                                       |
| pageXOffset                          | 设置或返回当前页面相对于窗口显示区左上角的 X 位置。                                                                                                        |
| pageYOffset                          | 设置或返回当前页面相对于窗口显示区左上角的 Y 位置。                                                                                                        |
| screenLeft screenTop screenX screenY | 只读整数。声明了窗口的左上角在屏幕上的的 x 坐标和 y 坐标。IE、Safari 和 Opera 支持 screenLeft 和 screenTop，而 Firefox 和 Safari 支持 screenX 和 screenY。 |

| 方法           | 描述                                     |
| -------------- | ---------------------------------------- |
| resizeBy(x, y) | 按照指定的像素调整窗口的大小。           |
| resizeTo(x, y) | 把窗口的大小调整到指定的宽度和高度。     |
| scrollBy(w, h) | 按照指定的像素值来滚动内容。             |
| scrollTo(x, y) | 把内容滚动到指定的坐标。                 |
| moveBy()       | 可相对窗口的当前坐标把它移动指定的像素。 |
| moveTo()       | 把窗口的左上角移动到一个指定的坐标。     |

```html
<!-- 实现点击导航栏快速定位页面内位置 -->
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Go To Page</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      nav {
        overflow: hidden;
      }
      nav ul {
        position: fixed;
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 80px;
        background-color: #2b2b2b;
        list-style-type: none;
        cursor: pointer;
      }
      nav ul li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80px;
        color: #fff;
      }
      nav ul li:hover {
        background-color: #d19a66;
      }
      article {
        overflow: hidden;
      }
      article section {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-weight: bold;
        width: 100vw;
        height: 100vh;
      }
      article section:nth-child(1) {
        background-color: #45aaf2;
      }
      article section:nth-child(2) {
        background-color: #4b7bec;
      }
      article section:nth-child(3) {
        background-color: #a55eea;
      }
      article section:nth-child(4) {
        background-color: #0fb9b1;
      }
      input[type="button"] {
        position: fixed;
        right: 20px;
        bottom: 50px;
      }
    </style>
  </head>
  <body>
    <nav>
      <ul>
        <li class="box1">首页</li>
        <li class="box2">关于</li>
        <li class="box3">服务</li>
        <li class="box4">联系</li>
      </ul>
    </nav>
    <article>
      <section id="box1">首页</section>
      <section id="box2">关于</section>
      <section id="box3">服务</section>
      <section id="box4">联系</section>
    </article>
    <!-- 这里！因为已经封装好了calculate函数，直接传对应的参数即可 -->
    <input type="button" value="按钮" onclick="calculate('body', 30);" />
  </body>
  <script>
    // 1.绑定点击事件
    let liList = document.querySelectorAll("nav ul li");
    for (let i = 0; i < liList.length; i++) {
      liList[i].addEventListener("click", function () {
        calculate(`#${this.className}`);
      });
    }
    // 2.计算高度，进行移动
    // @param {String} value , dom节点
    // @param {Number} speed , 每10毫秒移动的像素距离
    function calculate(value, speed = 10) {
      let nowHeight = window.pageYOffset; // 当前高度
      let newHeight = document.querySelector(value).offsetTop; // 需要移动的高度
      let poor = Math.abs(newHeight - nowHeight); // 计算两个高度差，并取正
      let add = newHeight > nowHeight ? true : false; // 判断需要移动的高度是在当前高度的前面还是后面，设置布尔值
      let setIntervalId = setInterval(function () {
        if (poor <= 0) {
          // 当高度差没有的时候清除定时器
          clearInterval(setIntervalId);
        }
        poor -= speed; // 根据速度，减去相对应的高度
        window.scrollBy(0, add ? speed : -speed); // 根据之前设置布尔值进行加减。
      }, 10);
    }
  </script>
</html>
```

### 4. 状态栏

| 属性          | 描述                               |
| ------------- | ---------------------------------- |
| status        | 设置窗口状态栏的文本。             |
| defaultStatus | 设置或返回窗口状态栏中的默认文本。 |

### 5. 焦点

| 方法    | 描述                       |
| ------- | -------------------------- |
| focus() | 把键盘焦点给予一个窗口。   |
| blur()  | 把键盘焦点从顶层窗口移开。 |

### 6. 引用操作

| 属性   | 描述                           |
| ------ | ------------------------------ |
| top    | 返回最顶层的先辈窗口。         |
| parent | 返回父窗口。                   |
| length | 设置或返回窗口中的框架数量。   |
| self   | 返回对当前窗口的引用。         |
| opener | 返回对创建此窗口的窗口的引用。 |
| name   | 设置或返回窗口的名称。         |
| closed | 返回窗口是否已被关闭。         |

| 方法    | 描述                                           |
| ------- | ---------------------------------------------- |
| open()  | 打开一个新的浏览器窗口或查找一个已命名的窗口。 |
| print() | 打印当前窗口的内容。                           |
| close() | 关闭浏览器窗口。                               |

## 二、Screen

screen 对象包含有关客户端显示屏幕的信息。

Screen 对象属性：
属性 | 描述
-- | --
availHeight | 返回显示屏幕的高度 (除 Windows 任务栏之外)。
availWidth| 返回显示屏幕的宽度 (除 Windows 任务栏之外)。
width| 返回显示器屏幕的宽度。
height| 返回显示屏幕的高度。
bufferDepth| 设置或返回调色板的比特深度。
colorDepth| 返回目标设备或缓冲器上的调色板的比特深度。
deviceXDPI| 返回显示屏幕的每英寸水平点数。
deviceYDPI| 返回显示屏幕的每英寸垂直点数。
fontSmoothingEnabled| 返回用户是否在显示控制面板中启用了字体平滑。
logicalXDPI| 返回显示屏幕每英寸的水平方向的常规点数。
logicalYDPI| 返回显示屏幕每英寸的垂直方向的常规点数。
pixelDepth| 返回显示屏幕的颜色分辨率（比特每像素）。
updateInterval| 设置或返回屏幕的刷新率。

```js
console.log(screen.height); // 获取显示屏幕的高度
console.log(screen.availHeight); // 获取显示屏幕的高度（除window任务栏）
```

## 三、Location

location 对象包含有关当前 URL 的信息，是 Window 对象的一个部分，可通过 window.location 属性来访问。

location 对象属性:
属性 |描述
-- | --
hash| 设置或返回从井号 (#) 开始的 URL（锚）。
host |设置或返回主机名和当前 URL 的端口号。
hostname| 设置或返回当前 URL 的主机名。
href |设置或返回完整的 URL。
pathname| 设置或返回当前 URL 的路径部分。
port| 设置或返回当前 URL 的端口号。
protocol| 设置或返回当前 URL 的协议。
search |设置或返回从问号 (?) 开始的 URL（查询部分）。
`href = protocol // hostname : port / pathname ? search # hash`

location 对象方法：
属性| 描述
-- | --
assign(url)| 加载新的文档。
reload()| 重新加载当前文档。
replace(newUrl)| 用新的文档替换当前文档。

```js
console.log(location.href); // 返回完整的URl
console.log(location.assign("https://www.baidu.com")); // 加载新的文档
```

## 四、History

history 对象包含用户（在浏览器窗口中）访问过的 URL，是 window 对象的一部分，可通过 window.history 属性对其进行访问。

history 对象属性：
属性 | 描述
--- | ---
length| 返回浏览器历史列表中的 URL 数量。

history 对象方法：
方法 |描述：
-- | --
back()| 加载 history 列表中的前一个 URL。
forward()| 加载 history 列表中的下一个 URL。
go()| 加载 history 列表中的某个具体页面。

```js
// history.go(number|URL)
// number 可以使用负数，即退回。
history.go(1); // 加载 history 列表中的下一个 URL
history.go(2); // 加载 history 列表中的下第二个 URL
history.go(-1); // 加载 history 列表中的下一个 URL
```

## 五、Navigator

navigator 对象包含有关浏览器的信息。

navigator 对象属性：
属性 | 描述
-------- | -------
appCodeName | 返回浏览器的代码名。
appMinorVersion | 返回浏览器的次级版本。
appName | 返回浏览器的名称。
appVersion | 返回浏览器的平台和版本信息。
browserLanguage | 返回当前浏览器的语言。
cookieEnabled | 返回指明浏览器中是否启用 cookie 的布尔值。
cpuClass | 返回浏览器系统的 CPU 等级。
onLine | 返回指明系统是否处于脱机模式的布尔值。
platform | 返回运行浏览器的操作系统平台。
systemLanguage | 返回 OS 使用的默认语言。
userAgent | 返回由客户机发送服务器的 user-agent 头部的值。
userLanguage | 返回 OS 的自然语言设置。

navigator 对象方法：
方法 | 描述
-------- | -------
javaEnabled() | 规定浏览器是否启用 Java。
taintEnabled() | 规定浏览器是否启用数据污点 (data tainting)。

```js
console.log(navigator.appCodeName); // 返回浏览器的代码名。
console.log(navigator.appName); // 返回浏览器的名称。
console.log(navigator.appVersion); // 返回浏览器的平台和版本信息。
```

## 总结

以上便是对 浏览器对象 的全部介绍，需要了解更多可以阅读相关文档，相信里面会有你想要的。

`最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我。`
参考文档：[ w3school](https://www.w3school.com.cn/jsref/index.asp)
