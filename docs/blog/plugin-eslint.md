---
layout: doc
---

# ESLint 语法检验工具的使用

## 前言

在计算机科学中，lint 是一种工具的名称，它用来标记代码中，某些可疑的、不具结构性（可能造成 bug）的语句。它是一种静态程序分析工具，最早适用于 C 语言，在 UNIX 平台上开发出来。后来它成为通用术语，可用于描述在任何一种编程语言中，用来标记代码中有疑义语句的工具。今天介绍到的 ESLint，便是 JavaScript 20 多年的发展历程中主流程序分析工具之一。

## ESLint

ESLint 是在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具，它的目标是保证代码的一致性和避免错误。在许多方面，它和 JSLint、JSHint 相似，除了少数的例外。

- ESLint 使用 Espree 解析 JavaScript。
- ESLint 使用 AST（抽象语法树） 去分析代码中的模式。
- ESLint 拥有丰富的 rules 规则，并支持自定义 rules。
- ESLint 是完全插件化的。每一个规则都是一个插件并且你可以在运行时添加更多的规则。

## 一、安装

### 1. cmd 命令式安装

```cmd
## 安装 eslint 模块
$ npm install eslint --save-dev

## 设置配置文件
$ ./node_modules/.bin/eslint --init

## 运行ESLint
$ ./node_modules/.bin/eslint yourfile.js
```

### 2. 编辑器式安装

打开 Vscode，找到扩展中心，搜索安装 eslint 插件即可。

## 二、配置方式

ESlint 被设计为完全可配置的，这意味着可以关闭每一个规则而只运行基本语法验证，或混合和匹配 ESLint 默认绑定的规则和自定义规则。有两种主要的方式来配置 ESLint：

- Configuration Comments： 使用 JavaScript 注释把配置信息直接嵌入到一个代码源文件中。
- Configuration Files： 使用 JavaScript、JSON 或者 YAML 文件为整个目录（处理你的主目录）和它的子目录指定配置信息。可以配置一个独立的 .eslintrc.\* 文件，或者直接在 package.json 文件里的 eslintConfig 字段指定配置，ESLint 会查找和自动读取它们，再者，可以在命令行运行时指定一个任意的配置文件。

```js
// 配置文件优先级
const configFilenames = [
  ".eslintrc.js",
  ".eslintrc.yaml",
  ".eslintrc.yml",
  ".eslintrc.json",
  ".eslintrc",
  "package.json",
];
```

### 1. 配置对象

- Environments： 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量。
- Globals： 脚本在执行期间访问的额外的全局变量。
- Rules： 启用的规则及其各自的错误级别。

### 2. 指定解析器选项 parserOptions

ESLint 允许你指定想要支持的 JavaScript 语言选项。默认情况下，ESLint 支持 ECMAScript 5 语法。当然，如果需要可以覆盖默认设置，以启用对其他 ECMAScript 版本或 JSX 的支持。

关于解析器选项可以在 `.eslintrc.*` 文件中使用 `parserOptions` 属性设置。配置选项如下：

- ecmaVersion：默认设置 3，5 ECMAScript 版本，可以使用 6、7、8、9、10 来指定需要使用的 ECMAScript 版本，当然使用对应的年份版本号也是可以的，如 6 对应 2015。
- sourceType：设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
- ecmaFeatures： 这是个对象，表示想使用的额外的语言特性：
  - globalReturn：允许在全局作用域下使用 return 语句
  - impliedStrict：启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
  - jsx：启用 JSX
  - experimentalObjectRestSpread：启用实验性的 object rest/spread properties 支持。

### 3. 规则定义 rules

```json
// 定义规则部分
{
  "rules": {
    "semi": ["error", "always"], // 使用分号结束
    "quotes": ["error", "double"] // 使用双引号
  }
}
```

其中，"semi"和"quotes"是 ESLint 中规则的名称，规则中的第一个值是指错误级别。

这三个错误级别可以允许细粒度的控制 ESLint 是如何应用规则：
| 错误级别 | 描述 |
| :--: | :--: |
| **off** or **0** | 关闭规则 |
| **warn** or **1** | 将规则视为一个警告（不会影响退出码） |
| **error** or **2** | 将规则视为一个错误（退出码为 1） |

### 4. .eslintrc.json 示例

```json
{
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "semi": ["error", "always"],
    "quotes": "error"
  }
}
```

配置文件传送门：[configuring 配置文件](http://eslint.cn/docs/user-guide/configuring)

## 三、规则页面

为了对规则有更好的理解，ESLint 对其进行了分门别类。

所有的规则默认都是禁用的。在配置文件中，使用 "extends": "eslint:recommended" 来启用推荐的规则，报告一些常见的问题，在下文中这些推荐的规则都带有一个 ✔ 标记。

```json
"extends": "eslint:recommended" // 开启规则页面中 ✔ 的规则
```

规则分类主要有以下：

- Possible Errors：这些规则与 JavaScript 代码中可能的错误或逻辑错误有关。
- Best Practices：这些规则是关于最佳实践的，帮助避免一些问题。
- Strict Mode：该规则与使用严格模式和严格模式指令有关。
- Variables：这些规则与变量声明有关。
- Node.js and CommonJS：这些规则是关于 Node.js 或 在浏览器中使用 CommonJS 的。
- Stylistic Issues：这些规则是关于风格指南的，而且是非常主观的。
- ECMAScript 6：这些规则只与 ES6 有关, 即通常所说的 ES2015。
- Deprecated
- Removed：来自旧版本的 eslint（在弃用策略之前）的这些规则已被较新规则替换。

规则页面传送门：[Rules 规则页面](http://eslint.cn/docs/rules/)

## 总结

以上便是今天介绍到的 ESLint 相关的全部内容，通过配置信息或者配置文件能够实现对 JavaScript 语法进行检测，对于 eslint 中内置的 rules 规则可以到官网中阅读详细内容。

<br />
<br />
<br />

`最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，感谢您的观看！`
官方文档：[ESLint](http://eslint.cn/)
