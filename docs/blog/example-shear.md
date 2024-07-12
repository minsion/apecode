---
layout: doc
---

# 将指定内容复制到剪切板

## 一、实现代码

html 代码部分：

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <title>将指定内容复制到剪切板</title>
  </head>
  <body>
    <p><input type="text" value="需复制的内容请在此输入" /></p>
    <button id="btn">copy</button>
  </body>
  <script>
    ……
  </script>
</html>
```

javascript 代码部分

```js
const input = document.querySelector("input");
const btn = document.getElementById("btn");

btn.onclick = function () {
  const value = input.value;
  let isCopy = copyClipboard(value);

  console.log(isCopy ? "复制成功" : "复制失败");
};

/**
 * 将指定内容复制到剪切板
 * @param {String} copyStr 需要复制的内容
 * @return {Boolean} bool 是否复制成功
 */
function copyClipboard(copyStr) {
  const input = document.createElement("input");
  input.value = copyStr;
  document.body.appendChild(input);
  input.select(); // 选取文本域中的内容.
  let bool = document.execCommand("Copy"); // 不支持copy方法返回false，支持返回true
  document.body.removeChild(input); // 必需是在复制语句之后移除
  return bool;
}
```

## 二、原理分析

实现原理：首先获取到需要复制的内容，然后通过脚本创建一个文本框设置内容在文本框内，并且选中文本框中的内容，最后通过 execCommand 方法实现复制。

### 方法描述

1. createElement(tagName)：「方法」创建指定的 HTML 元素节点；tagName ==指定的节点，必需==；返回 HTML 节点。
2. appendChild(node)：「方法」向节点添加最后一个子节点；node ==需要添加的 DOM，必需==； 返回被添加的节点。
3. execCommand(aCommandName, aShowDefaultUI, aValueArgument)：「方法」；aCommandName ==命令的名称，必需==，aShowDefaultUI ==是否展示用户界面，布尔值 常为 false，可选==，aValueArgument ==一些命令（例如 insertImage）需要额外的参数（insertImage 需要提供插入 image 的 url），默认为 null==。
4. removeChild(node)：「方法」向节点移除最后一个子节点；node ==需要移除的 DOM，必需==； 返回被移除的节点。

<br />
<br />
<br />

`最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，感谢您的观看！`
