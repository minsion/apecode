# 其他

## Webpack

### 优化 Webpack 的构建速度

- 使用高版本的 Webpack （使用 webpack4）
- 多线程/多实例构建：HappyPack(不维护了)、thread-loader
- 缩小打包作用域：
  - exclude/include (确定 loader 规则范围)
  - resolve.modules 指明第三方模块的绝对路径 (减少不必要的查找)
  - resolve.extensions 尽可能减少后缀尝试的可能性
  - noParse 对完全不需要解析的库进行忽略 (不去解析但仍会打包到 bundle 中，注意被忽略掉的文件里不应该包含 import、require、define 等模块化语句)
  - IgnorePlugin (完全排除模块)
  - 合理使用 alias
- 充分利用缓存提升二次构建速度：
  - babel-loader 开启缓存
  - terser-webpack-plugin 开启缓存
  - 使用 cache-loader 或者 hard-source-webpack-plugin
    注意：thread-loader 和 cache-loader 兩個要一起使用的話，請先放 cache-loader 接著是 thread-loader 最後才是 heavy-loader
- DLL：
  - 使用 DllPlugin 进行分包，使用 DllReferencePlugin(索引链接) 对 manifest.json 引用，让一些基本不会改动的代码先打包成静态资源，避免反复编译浪费时间。
  - 使用 webpack4-优化原因
    - V8 带来的优化（for of 替代 forEach、Map 和 Set 替代 Object、includes 替代 indexOf）
    - 默认使用更快的 md4 hash 算法
    - webpacks AST 可以直接从 loader 传递给 AST，减少解析时间
    - 使用字符串方法替代正则表达式

#### 1. noParse

- 不去解析某个库内部的依赖关系
- 比如 jquery 这个库是独立的， 则不去解析这个库内部依赖的其他的东西
- 在独立库的时候可以使用

```javascript
module.exports = {
  module: {
    noParse: /jquery/,
    rules: [],
  },
};
```

#### 2. IgnorePlugin

- 忽略掉某些内容 不去解析依赖库内部引用的某些内容
- 从 moment 中引用 ./locol 则忽略掉
- 如果要用 local 的话 则必须在项目中必须手动引入

```javascript
import 'moment/locale/zh-cn'

module.exports = {
  plugins: [
    new Webpack.IgnorePlugin(/./local/, /moment/),
  ]
}
```

#### 3. dillPlugin

- 不会多次打包， 优化打包时间
- 先把依赖的不变的库打包
- 生成 manifest.json 文件
- 然后在 webpack.config 中引入
- webpack.DllPlugin Webpack.DllReferencePlugin

#### 4. happypack -> thread-loader

- 大项目的时候开启多线程打包
- 影响前端发布速度的有两个方面，一个是构建，一个就是压缩，把这两个东西优化起来，可以减少很多发布的时间。

#### 5. thread-loader

- thread-loader 会将您的 loader 放置在一个 worker 池里面运行，以达到多线程构建。把这个 loader 放置在其他 loader 之前（如下图 example 的位置）， 放置在这个 loader 之后的 loader 就会在一个单独的 worker 池(worker pool)中运行。

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /.js$/,
        include: path.resolve("src"),
        use: [
          "thread-loader",
          // 你的高开销的loader放置在此 (e.g babel-loader)
        ],
      },
    ],
  },
};
```

每个 worker 都是一个单独的有 600ms 限制的 node.js 进程。同时跨进程的数据交换也会被限制。请在高开销的 loader 中使用，否则效果不佳

#### 6. 压缩加速，开启多线程压缩

- 不推荐使用 webpack-paralle-uglify-plugin，项目基本处于没人维护的阶段，issue 没人处理，pr 没人合并。
  Webpack 4.0 以前：uglifyjs-webpack-plugin，parallel 参数

```javascript
module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
      }),
    ],
  },
};
```

- 推荐使用 terser-webpack-plugin

```javascript
module.exports = {
  optimization: {
    minimizer: [new TerserPlugin(
      parallel: true   // 多线程
    )],
  },
};
```

### 优化 Webpack 的打包体积

- 压缩代码
- 提取页面公共资源：
- Tree shaking
- Scope hoisting
- 图片压缩
- 动态 Polyfill

### speed-measure-webpack-plugin

简称 SMP，分析出 Webpack 打包过程中 Loader 和 Plugin 的耗时，有助于找到构建过程中的性能瓶颈。

开发阶段: 开启多核压缩 插件：** terser-webpack-plugin **

```javascript
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
      }),
    ],
  },
};
```

## Babel

### 简单描述一下 Babel 的编译过程

Babel 是一个 JavaScript 编译器，是一个工具链，主要用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

Babel 本质上就是在操作 AST 来完成代码的转译。AST 是抽象语法树（Abstract Syntax Tree, AST）

- 分析 AST：[ASTexplorer.net](https://astexplorer.net/)
- AST 规范：[estree](https://github.com/estree/estree)

Babel 的功能很纯粹，它只是一个编译器。大多数编译器的工作过程可以分为三部分：

- 解析（Parse） ：将源代码转换成更加抽象的表示方法（例如抽象语法树）。包括词法分析和语法分析。词法分析主要把字符流源代码（Char Stream）转换成令牌流（ Token Stream），语法分析主要是将令牌流转换成抽象语法树（Abstract Syntax Tree，AST）。
- 转换（Transform） ：通过 Babel 的插件能力，对（抽象语法树）做一些特殊处理，将高版本语法的 AST 转换成支持低版本语法的 AST。让它符合编译器的期望，当然在此过程中也可以对 AST 的 Node 节点进行优化操作，比如添加、更新以及移除节点等。
- 生成（Generate） ：将 AST 转换成字符串形式的低版本代码，同时也能创建 Source Map 映射。

经过这三个阶段，代码就被 Babel 转译成功了。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a30bf2739fec4c29847ba1675c03b62f~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c73423b335c34399b4e69b61515365ad~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

## Git

### Git 常用命令

- 查看分支：git branch
- 创建分支：git branch
- 切换分支：git checkout
- 创建+切换分支：git checkout -b
- 合并某分支到当前分支：git merge
- 删除分支：git branch -d

### 如何使用 Git 管理项目

[](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03bc9064b8fd4342beb73cfc2c49acea~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

实际开发中，一个仓库（一般只放一个项目）主要存在两条主分支：master 与 develop 分支。这个两个分支的生命周期是整个项目周期。

我们可能使用的不同类型的分支对项目进行管理是：

- 功能分支（或有时称为主题分支）: 用于为即将发布或遥远的未来版本开发新功能。在开始开发某个功能时，将包含该功能的目标版本在那时很可能是未知的。功能分支的本质在于，只要该功能处于开发阶段，它就存在，但最终会被合并回 develop（明确将新功能添加到即将发布的版本中）或丢弃。功能分支通常只存在于开发者仓库中，而不存在于 origin。
- 发布分支: 支持准备新的生产版本。它们允许在最后一刻打点 i 和交叉 t。此外，它们允许修复小错误并为发布准备元数据（版本号、构建日期等）。通过在发布分支上完成所有这些工作，该 develop 分支被清除以接收下一个大版本的功能。
  - 从 develop 分支拉取，且必须合并回 develop 和 master
  - 分支命名约定：release-\*
- 修补程序分支: Hotfix 分支与发布分支非常相似，因为它们也旨在为新的生产版本做准备，尽管是计划外的。它们产生于需要立即对现场制作版本的不良状态采取行动。当必须立即解决生产版本中的关键错误时，可以从标记生产版本的主分支上的相应标记中分支出一个修补程序分支。
- master：这个分支最为稳定，这个分支表明项目处于可发布的状态。
- develop：做为开发的分支，平行于 master 分支。
- feature branches：这种分支和咱们程序员平常开发最为密切，称做功能分支。必须从 develop 分支建立，完成后合并回 develop 分支。
- release branches：这个分支用来分布新版本。从 develop 分支建立，完成后合并回 develop 与 master 分支。这个分支上能够作一些很是小的 bug 修复，固然，你也能够禁止在这个分支作任何 bug 的修复工做，而只作版本发布的相关操做，例如设置版本号等操做，那样的话那些发现的小 bug 就必须放到下一个版本修复了。若是在这个分支上发现了大 bug，那么也绝对不能在这个分支上改，须要 Featrue 分支上改，走正常的流程。
- hotfix branches：这个分支主要为修复线上特别紧急的 bug 准备的。必须从 master 分支建立，完成后合并回 develop 与 master 分支。这个分支主要是解决线上版本的紧急 bug 修复的，例如忽然版本 V0.1 上有一个致命 bug，必须修复。那么咱们就能够从 master 分支上发布这个版本那个时间点 例如 tag v0.1（通常代码发布后会及时在 master 上打 tag），来建立一个 hotfix-v0.1.1 的分支，而后在这个分支上改 bug，而后发布新的版本。最后将代码合并回 develop 与 master 分支。

## 项目优化

`移除生产环境的控制台打印`。方案很多，esling+pre-commit、使用插件自动去除，插件包括 babel-plugin-transform-remove-console、uglifyjs-webpack-plugin、terser-webpack-plugin。最后选择了 terser-webpack-plugin，脚手架 vue-cli 用这个插件来开启缓存和多线程打包，无需安装额外的插件，仅需在 configureWebpack 中设置 terser 插件的 drop_console 为 true 即可。最好还是养成良好的代码习惯，在开发基本完成后去掉无用的 console，vscode 中的 turbo console 就蛮好的。

`第三方库的按需加载`。echarts，官方文档里是使用配置文件指定使用的模块，另一种使用 babel-plugin-equire 实现按需加载。element-ui 使用 babel-plugin-component 实现按需引入。

前后端数据交换方面，推动项目组使用蓝湖、接口文档，与后端同学协商，规范后台数据返回。

雅虎军规提到的，`避免 css 表达式、滤镜，减少 DOM 操作`，优化图片、精灵图，避免图片空链接等。

性能问题：页面加载性能、动画性能、操作性能。Performance API，`记录性能数据`。

winter 重学前端，优化技术方案。

缓存：`客户端控制的强缓存策略`。

`降低请求成本`：DNS 由客户端控制，隔一段时间主动请求获取域名 IP，不走系统 DNS（完全看不懂）。TCP/TLS 连接复用，服务器升级到 HTTP2，尽量合并域名。

`减少请求数`：JS、CSS 打包到 HTML。JS 控制图片异步加载、懒加载。小型图片使用 data-uri。

`减少传输体积`：尽量使用 SVG\gradient 代替图片。根据机型和网络状况控制图片清晰度。对低清晰度图片使用锐化来提升体验。设计上避免大型背景图。

`使用 CDN 加速`，内容分发网络，是建立再承载网基础上的虚拟分布式网络，能够将源站内容缓存到全国或全球的节点服务器上。用户就近获取内容，提高了资源的访问速度，分担源站压力。
