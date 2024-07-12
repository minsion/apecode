---
layout: doc
---

# Prettier 一个固执的代码格式化程序

## Prettier

Prettier 是一个“有态度”的代码格式化工具，它支持：JavaScript （包括实验性功能）、JSX、Angular、Vue、Flow、TypeScript、CSS、Less 和 SCSS、HTML、JSON、GraphQL、Markdown，包括 GFM 和 MDX、YAML

- An `opinionated` code formatter
- Supports many languages
- Integrates with most editors
- Has few options

它移除了所有原始样式\* 并确保输出的所有代码都符合一致的样式。

## 一、安装

### npm 或 yarn

```cmd
## npm
$ npm install --save-dev --save-exact prettier

## yarn
$ yarn add --dev --exact prettier
```

在目录结构需要新建的文件
.prettierrc.json - 定义 prettier 相关配置文件。
.prettierignore - 设置不进行 prettier 格式化的文件。

## 二、配置文件

Prettier uses cosmiconfig for configuration file support. This means you can configure Prettier via (in order of precedence):

- A "prettier" key in your package.json file.
- A .prettierrc file written in JSON or YAML.
- A .prettierrc.json, .prettierrc.yml, .prettierrc.yaml, or .prettierrc.json5 file.
- A .prettierrc.js, .prettierrc.cjs, prettier.config.js, or prettier.config.cjs file that exports an object using module.exports.
- A .prettierrc.toml file.

json：

```json
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true
}
```

javascript：

```js
// prettier.config.js or .prettierrc.js
module.exports = {
  trailingComma: "es5",
  tabWidth: 4,
  semi: false,
  singleQuote: true,
};
```

yaml：

```yaml
## .prettierrc or .prettierrc.yaml
trailingComma: "es5"
tabWidth: 4
semi: false
singleQuote: true
```

toml：

```toml
## .prettierrc.toml
trailingComma = "es5"
tabWidth = 4
semi = false
singleQuote = true
```

## 三、配置参数

### 1. Print Width

指定行字符串显示长度。

| Default |     CLI Override      |    API Override     |
| :-----: | :-------------------: | :-----------------: |
|   80    | --print-width \<int\> | printWidth: \<int\> |

### 2. Tab Width

指定每个缩进级别的空格数。

| Default |    CLI Override     |   API Override    |
| :-----: | :-----------------: | :---------------: |
|    2    | --tab-width \<int\> | tabWidth: \<int\> |

### 3. Tabs

带有标签而不是空格的缩进线。

| Default | CLI Override |   API Override    |
| :-----: | :----------: | :---------------: |
|  false  |  --use-tabs  | useTabs: \<bool\> |

### 4. Semicolons

在语句的末尾打印分号。

可选项：

- true - 在每个语句的末尾添加分号。
- false - 仅在可能介绍 ASI 故障的行开头时添加分号。

| Default | CLI Override |  API Override  |
| :-----: | :----------: | :------------: |
|  true   |  --no-semi   | semi: \<bool\> |

### 5. Quotes

使用单引号而不是双引号。

笔记：

- JSX 引号忽略此选项。
- If the number of quotes outweighs the other quote, the quote which is less used will be used to format the string - Example: "I'm double quoted" results in "I'm double quoted" and "This \"example\" is single quoted" results in 'This "example" is single quoted'.

| Default |  CLI Override  |     API Override      |
| :-----: | :------------: | :-------------------: |
|  false  | --single-quote | singleQuote: \<bool\> |

### 6. Quote Props

引用对象中属性时更改。

可选项：

- "as-needed" - 仅在必需的对象属性周围添加引号。
- "consistent" - 如果对象中的至少一个属性需要引号，请引用所有属性。
- "preserve" - 尊重对象属性中引号的输入使用。

|   Default   |                  CLI Override                   |                  API Override                   |
| :---------: | :---------------------------------------------: | :---------------------------------------------: |
| "as-needed" | --quote-props \<as-needed/consistent/preserve\> | quoteProps: "\<as-needed/consistent/preserve\>" |

### 7. JSX Quotes

使用单引号而不是 JSX 中的双引号。

| Default |    CLI Override    |       API Override       |
| :-----: | :----------------: | :----------------------: |
|  false  | --jsx-single-quote | jsxSingleQuote: \<bool\> |

### 8. Trailing Commas

在可能的多线逗号分离的语法结构中打印尾随逗号。 （例如单行阵列，例如，从未获得尾随逗号。）

可选项：
"es5" - 在 ES5（对象，阵列等）有效的尾随逗号。 在键盘中的类型参数中没有尾随逗号。
"none" - 没有尾随逗号。
"all" - 尽可能尾随逗号（包括函数参数和呼叫）。 要运行，格式化的 JavaScript 代码需要一种支持 ES2017（Node.js 8+或现代浏览器）或下级编译的引擎。 这也使得在 CypeScript 中的类型参数中可以实现尾随逗号（自 2018 年 1 月发布版本 2.7 以来支持。

| Default |           CLI Override            |           API Override            |
| :-----: | :-------------------------------: | :-------------------------------: |
|  "es5"  | --trailing-comma \<es5/none/all\> | trailingComma: "\<es5/none/all\>" |

### 9. Bracket Spacing

在对象文字中的括号之间打印空格。

可选项：

- true - Example: { foo: bar }.
- false - Example: {foo: bar}.

| Default |     CLI Override     |       API Override       |
| :-----: | :------------------: | :----------------------: |
|  true   | --no-bracket-spacing | bracketSpacing: \<bool\> |

### 10. JSX Brackets

在最后一行末尾的多行 JSX 元素中放置一个多行 JSX 元素，而不是单行在下一行（不适用于自闭元素）。

可选项：

| Default |      CLI Override       |         API Override         |
| :-----: | :---------------------: | :--------------------------: |
|  false  | --jsx-bracket-same-line | jsxBracketSameLine: \<bool\> |

### 11. Arrow Function Parentheses

在唯一箭头函数参数周围包含括号。

- "always" - 总是包括 Parens。 例子: (x) => x
- "avoid" - 尽可能省略镜子。 例子: x => x

| Default  |          CLI Override           |          API Override           |
| :------: | :-----------------------------: | :-----------------------------: |
| "always" | --arrow-parens \<always/avoid\> | arrowParens: "\<always/avoid\>" |

乍一看，由于视觉噪音较小，避免括号可能看起来更好的选择。 但是，当 prettier 删除括号时，它变得越难添加类型注释，额外的参数或默认值以及制定其他更改。 一致使用括号在编辑真实代码库时提供更好的开发人员体验，这证明了选项的默认值。

### 12. Range

格式化文件的段。

这两个选项可用于格式化启动和结束在给定的字符偏移（分别包含和独占）的代码。 该范围将扩展：

- 向后到包含所选语句的第一行的开始。
- 转发到所选语句的末尾。

| Default  |     CLI Override      |    API Override     |
| :------: | :-------------------: | :-----------------: |
|    0     | --range-start \<int\> | rangeStart: \<int\> |
| Infinity |  --range-end \<int\>  |  rangeEnd: \<int\>  |

### 13. Parser

指定要使用的解析器。

Babel 和 Flow 解析器都支持相同的 JavaScript 功能（包括流型注释）。 它们可能在某些边缘案例中有所不同，因此如果您遇到其中一个，您可以尝试尝试流量而不是 Babel。 几乎相同适用于打字和 Babel-TS。 BABEL-TS 可能支持类型签名尚未支持的 JavaScript 功能（提议），但是当涉及到无效的代码和比 TypeScript 解析器的战斗测试较少时，它不太宽松。

可选项：

- "babel" (via @babel/parser) Named "babylon" until v1.16.0
- "babel-flow" (same as "babel" but enables Flow parsing explicitly to avoid ambiguity) First available in v1.16.0
- "babel-ts" (similar to "typescript" but uses Babel and its TypeScript plugin) First available in v2.0.0
- "flow" (via flow-parser)
- "typescript" (via @typescript-eslint/typescript-estree) First available in v1.4.0
- "espree" (via espree) First available in v2.2.0
- "meriyah" (via meriyah) First available in v2.2.0
- "css" (via postcss-scss and postcss-less, autodetects which to use) First available in v1.7.1
- "scss" (same parsers as "css", prefers postcss-scss) First available in v1.7.1
- "less" (same parsers as "css", prefers postcss-less) First available in v1.7.1
- "json" (via @babel/parser parseExpression) First available in v1.5.0
- "json5" (same parser as "json", but outputs as json5) First available in v1.13.0
- "json-stringify" (same parser as "json", but outputs like JSON.stringify) First available in v1.13.0
- "graphql" (via graphql/language) First available in v1.5.0
- "markdown" (via remark-parse) First available in v1.8.0
- "mdx" (via remark-parse and @mdx-js/mdx) First available in v1.15.0
- "html" (via angular-html-parser) First available in 1.15.0
- "vue" (same parser as "html", but also formats vue-specific syntax) First available in 1.10.0
- "angular" (same parser as "html", but also formats angular-specific syntax via angular-estree-parser) First available in 1.15.0
- "lwc" (same parser as "html", but also formats LWC-specific syntax for unquoted template attributes) First available in 1.17.0
- "yaml" (via yaml and yaml-unist-parser) First available in 1.14.0

也支持自定义解析器。 首先在 v1.5.0 中提供

|         Default          |               CLI Override                |          API Override          |
| :----------------------: | :---------------------------------------: | :----------------------------: |
| None --parser \<string\> | --parser ./my-parser parser: "\<string\>" | parser: require("./my-parser") |

### 14. File Path

指定要用于推断要使用的解析器的文件名。

例如，以下将使用 CSS 解析器：

```cmd
cat foo | prettier --stdin-filepath foo.css
```

此选项仅在 CLI 和 API 中有用。 在配置文件中使用它没有意义。

| Default |        CLI Override         |      API Override      |
| :-----: | :-------------------------: | :--------------------: |
|  None   | --stdin-filepath \<string\> | filepath: "\<string\>" |

### 15. Require Pragma

prettier 可以仅限于文件顶部的仅格式化包含特殊注释的文件，该文件称为 Pragma。 当逐渐过渡到 prettier 的大型未格式化的码布时，这非常有用。

当提供 - 重新查询 - Pragma 时，将格式化以下内容作为其第一个注释的文件：

```js
/**
 * @prettier
 */
```

or

```js
/**
 * @format
 */
```

| Default |   CLI Override   |      API Override       |
| :-----: | :--------------: | :---------------------: |
|  false  | --require-pragma | requirePragma: \<bool\> |

### 16. Insert Pragma

prettier 可以在文件顶部插入特殊的@Format 标记，指定文件已格式化文件。 与 - 重新核心 - Pragma 选项一起使用时，这会很好。 如果文件顶部已有 DocBlock，则此选项将使用@Format 标记添加换行符。

| Default |  CLI Override   |      API Override      |
| :-----: | :-------------: | :--------------------: |
|  false  | --insert-pragma | insertPragma: \<bool\> |

### 17. Prose Wrap

默认情况下，更 prettier 的将包装 Markdown 文本，因为某些服务使用 Linebreak 敏感渲染器，例如， github 评论和 bitbucket。 在某些情况下，您可能希望依赖 Editor / Viewer 软包装，因此此选项允许您选择“永远不会”。

可选项：

- "always" - 包装散文如果超过打印宽度。
- "never" - 不包散文。
- "preserve" - 包裹散文如此。 首先在 v1.9.0 中提供

|  Default   |              CLI Override              |              API Override              |
| :--------: | :------------------------------------: | :------------------------------------: |
| "preserve" | --prose-wrap \<always/never/preserve\> | proseWrap: "\<always/never/preserve\>" |

### 18. HTML Whitespace Sensitivity

为 HTML，Vue，Angular 和 Suppherbars 指定全局空白的灵敏度。 请参阅空白敏感格式以获取更多信息。

可选项：

- "css" - 尊重 CSS 显示属性的默认值。 对于处理与严格相同的把手。
- "strict" - 所有标签周围的空白（或缺乏）被认为是显着的。
- "ignore" - 所有标签周围的空格（或缺乏）被认为是微不足道的。

| Default |                    CLI Override                     |                    API Override                    |
| :-----: | :-------------------------------------------------: | :------------------------------------------------: |
|  "css"  | --html-whitespace-sensitivity \<css/strict/ignore\> | htmlWhitespaceSensitivity: "\<css/strict/ignore\>" |

### 19. Vue files script and style tags indentation

是否要在 VUE 文件中缩进 \<script\> 和 \<style\> 标记中的代码。 有些人（如 Vue 的创建者）不归于挽救缩进级别，但这可能会在编辑器中打破代码折叠。

- "false" - 不要在 VUE 文件中缩进脚本和样式标记。
- "true" - Indent script and style tags in Vue files.

| Default |         CLI Override          |           API Override            |
| :-----: | :---------------------------: | :-------------------------------: |
|  false  | --vue-indent-script-and-style | vueIndentScriptAndStyle: \<bool\> |

### 20. End of Line

所有操作系统中的所有现代文本编辑器都能够在使用\ n（lf）时正确显示线路结束。 但是，旧版本的 Windows for Windows 将在视觉上挤压这样的线，因为它们只能处理\ r \ n（crlf）。

可选项：

- "lf" – Line Feed only (\n), common on Linux and macOS as well as inside git repos
- "crlf" - Carriage Return + Line Feed characters (\r\n), common on Windows
- "cr" - Carriage Return character only (\r), used very rarely
- "auto" - Maintain existing line endings (mixed values within one file are normalised by looking at what’s used after the first line)

| Default |           CLI Override            |           API Override           |
| :-----: | :-------------------------------: | :------------------------------: |
|  "lf"   | --end-of-line \<lf/crlf/cr/auto\> | endOfLine: "\<lf/crlf/cr/auto\>" |

### 21. Embedded Language Formatting

控制是否 prettier 格式的引用代码嵌入在文件中。

可选项：

- "auto" – 如果 prettier 可以自动识别它，格式嵌入式代码。
- "off" - 切勿自动格式化嵌入的代码。

| Default |            CLI Override            |           API Override            |
| :-----: | :--------------------------------: | :-------------------------------: |
| "auto"  | --embedded-language-formatting=off | embeddedLanguageFormatting: "off" |

## 总结

通过 npm 包管理工具或开发工具，均能够安装 prettier 插件。在项目文件中，需要创建一个名为 .prettier 的文件用来定义格式，通过对配置参数的设定，就能够快速地实现格式化统一了。

<br />
<br />
<br />

`最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，感谢您的观看！`
官方文档：[Prettier-docs](https://prettier.io/docs/en/index.html)
