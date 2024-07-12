# JavaScript

## 八种数据类型及区别

包括值类型(基本对象类型)和引用类型(复杂对象类型)

基本类型(值类型)： 在内存中占据固定大小，保存在栈内存中

- Number(数字),
- String(字符串),
- Boolean(布尔),
- Symbol(符号),
- null(空),
- undefined(未定义)

引用类型(复杂数据类型)： 保存在堆内存中，栈内存存储的是对象的变量标识符以及对象在堆内存中的存储地址。

- Object(对象)
- Function(函数)

其他还有 Array(数组)、Date(日期)、RegExp(正则表达式)、特殊的基本包装类型(String、Number、Boolean) 以及单体内置对象(Global、Math)等 引用类型的值是对象。

## 数据类型检测方案

### typeof

```javascript
console.log(typeof 1); // number
console.log(typeof true); // boolean
console.log(typeof "mc"); // string
console.log(typeof Symbol); // function
console.log(typeof Symbol()); // symbol
console.log(typeof function () {}); // function
console.log(typeof console.log()); // undefined
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof null); // object
console.log(typeof undefined); // undefined
```

优点：能够快速区分基本数据类型

缺点：不能将 Object、Array 和 Null 区分，都返回 object

### instanceof

```javascript
console.log(1 instanceof Number); // false
console.log(true instanceof Boolean); // false
console.log("str" instanceof String); // false
console.log([] instanceof Array); // true
console.log(function () {} instanceof Function); // true
console.log({} instanceof Object); // true
```

优点：能够区分 Array、Object 和 Function，适合用于判断自定义的类实例对象

缺点：Number，Boolean，String 基本数据类型不能判断

### Object.prototype.toString.call()

```javascript
var toString = Object.prototype.toString;
console.log(toString.call(1)); //[object Number]
console.log(toString.call(true)); //[object Boolean]
console.log(toString.call("mc")); //[object String]
console.log(toString.call([])); //[object Array]
console.log(toString.call({})); //[object Object]
console.log(toString.call(function () {})); //[object Function]
console.log(toString.call(undefined)); //[object Undefined]
console.log(toString.call(null)); //[object Null]
```

优点：精准判断数据类型

缺点：写法繁琐不容易记，推荐进行封装后使用

## var && let && const

ES6 之前创建变量用的是 var,之后创建变量用的是 let/const

三者区别：

- var 定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问;
- let 定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问;
- const 用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，且不能修改;
- var 可以先使用，后声明，因为存在变量提升；let 必须先声明后使用;
- var 是允许在相同作用域内重复声明同一个变量的，而 let 与 const 不允许这一现象;
- 在全局上下文中，基于 let 声明的全局变量和全局对象 GO（window）没有任何关系;
- var 声明的变量会和 GO 有映射关系;
- 会产生暂时性死区:

:::tip
暂时性死区是浏览器的 bug：检测一个未被声明的变量类型时，不会报错，会返回 undefined

如：console.log(typeof a) //undefined

而：console.log(typeof a)//未声明之前不能使用

let a
:::

- let /const/function 会把当前所在的大括号(除函数之外)作为一个全新的块级上下文，应用这个机制，在开发项目的时候，遇到循环事件绑定等类似的需求，无需再自己构建闭包来存储，只要基于 let 的块作用特征即可解决。

## 垃圾回收机制

1. 项目中，如果存在大量不被释放的内存（堆/栈/上下文），页面性能会变得很慢。当某些代码操作不能被合理释放，就会造成内存泄漏。我们尽可能减少使用闭包，因为它会消耗内存;
2. 浏览器垃圾回收机制/内存回收机制;

> 浏览器的 Javascript 具有自动垃圾回收机制(GC:Garbage Collecation)，垃圾收集器会定期（周期性）找出那些不在继续使用的变量，然后释放其内存。

- 标记清除:在 js 中，最常用的垃圾回收机制是标记清除：当变量进入执行环境时，被标记为“进入环境”，当变量离开执行环境时，会被标记为“离开环境”。垃圾回收器会销毁那些带标记的值并回收它们所占用的内存空间。
- 谷歌浏览器：“查找引用”，浏览器不定时去查找当前内存的引用，如果没有被占用了，浏览器会回收它；如果被占用，就不能回收。
- IE 浏览器：“引用计数法”，当前内存被占用一次，计数累加 1 次，移除占用就减 1，减到 0 时，浏览器就回收它。

3. 优化手段：内存优化 ; 手动释放：取消内存的占用即可。

- 栈内存：把上下文中，被外部占用的堆的占用取消即可。
- 堆内存：fn = null 【null：空指针对象】

4. 内存泄漏

在 JS 中，常见的内存泄露主要有 4 种,全局变量、闭包、DOM 元素的引用、定时器

## 作用域和作用域链

创建函数的时候，已经声明了当前函数的作用域 ==> `当前创建函数所处的上下文`。如果是在全局下创建的函数就是`[[scope]]:EC(G)`，函数执行的时候，形成一个全新的私有上下文 `EC(FN)`，供字符串代码执行(进栈执行)

定义：简单来说作用域就是变量与函数的可访问范围，`由当前环境与上层环境的一系列变量对象组成`

1. 全局作用域：代码在程序的任何地方都能被访问，window 对象的内置属性都拥有全局作用域。
2. 函数作用域：在固定的代码片段才能被访问

作用：作用域最大的用处就是`隔离变量`，不同作用域下同名变量不会有冲突。

作用域链参考链接一般情况下，变量到 创建该变量 的函数的作用域中取值。但是如果在当前作用域中没有查到，就会向上级作用域去查，直到查到全局作用域，这么一个查找过程形成的链条就叫做作用域链。

## 闭包

`闭包的两大作用保存/保护`

### 概念

函数执行时形成的私有上下文 EC(FN)，正常情况下，代码执行完会出栈后释放;但是特殊情况下，如果当前私有上下文中的某个东西被上下文以外的事物占用了，则上下文不会出栈释放，从而形成不销毁的上下文。 函数执行函数执行过程中，会形成一个全新的私有上下文，可能会被释放，可能不会被释放，不论释放与否，他的作用是：

- 保护：划分一个独立的代码执行区域，在这个区域中有自己私有变量存储的空间，保护自己的私有变量不受外界干扰（操作自己的私有变量和外界没有关系）；
- 保存：如果当前上下文不被释放【只要上下文中的某个东西被外部占用即可】，则存储的这些私有变量也不会被释放，可以供其下级上下文中调取使用，相当于把一些值保存起来了；

我们把函数执行形成私有上下文，来保护和保存私有变量机制称为`闭包`。

:::tip
闭包是指有权访问另一个函数作用域中的变量的函数 《JavaScript 高级程序设计》

稍全面的回答： 在 js 中变量的作用域属于函数作用域, 在函数执行完后,作用域就会被清理,内存也会随之被回收,但是由于闭包函数是建立在函数内部的子函数, 由于其可访问上级作用域,即使上级函数执行完, 作用域也不会随之销毁, 这时的子函数(也就是闭包),便拥有了访问上级作用域中变量的权限,即使上级函数执行完后作用域内的值也不会被销毁。
:::

### 特性

1. 内部函数可以访问定义他们外部函数的参数和变量。(作用域链的向上查找，把外围的作用域中的变量值存储在内存中而不是在函数调用完毕后销毁)设计私有的方法和变量，避免全局变量的污染;
   1. 闭包是密闭的容器，，类似于 set、map 容器，存储数据的
   2. 闭包是一个对象，存放数据的格式为 key-value 形式
2. 函数嵌套函数;
3. 本质是将函数内部和外部连接起来。优点是可以读取函数内部的变量，让这些变量的值始终保存在内存中，不会在函数被调用之后自动清除。

### 形成的条件

1. 函数的嵌套;
2. 内部函数引用外部函数的局部变量，延长外部函数的变量生命周期。

### 用途

- 模仿块级作用域;
- 保护外部函数的变量 能够访问函数定义时所在的词法作用域(阻止其被回收);
- 封装私有化变量;
- 创建模块.

### 应用场景

闭包的两个场景，闭包的两大作用：`保存/保护`。

在开发中, 其实我们随处可见闭包的身影, 大部分前端 JavaScript 代码都是“事件驱动”的,即一个事件绑定的回调方法; 发送 ajax 请求成功|失败的回调;setTimeout 的延时回调;或者一个函数内部返回另一个匿名函数,这些都是闭包的应用。

### 优缺点

- 闭包的优点：延长局部变量的生命周期
- 闭包缺点：会导致函数的变量一直保存在内存中，过多的闭包可能会导致内存泄漏

## this 的五种情况

- 作为`普通函数执行时`，this 指向 window。
- 当`函数作为对象的方法被调用时`，this 就会指向该对象。
- `构造器调用`，this 指向返回的这个对象。
- `箭头函数`的 this 绑定看的是 this 所在函数定义在哪个对象下，就绑定哪个对象。如果有嵌套的情况，则 this 绑定到最近的一层对象上。
- 基于 Function.prototype 上的 `apply 、 call 和 bind 调用模式`，这三个方法都可以显示的指定调用函数的 this 指向。apply 接收参数的是数组，call 接受参数列表，``bind方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this指向除了使用new`时会被改变，其他情况下都不会改变。若为空默认是指向全局对象 window。

## 原型 && 原型链

原型关系:

- 每个 class 都有显示原型 prototype
- 每个实例都有隐式原型 _ proto_
- 实例的* proto*指向对应 class 的 prototype

原型: 在 JS 中，每当定义一个对象（函数也是对象）时，对象中都会包含一些预定义的属性。其中每个函数对象都有一个 prototype 属性，这个属性指向函数的原型对象。

原型链：函数的原型链对象 constructor 默认指向函数本身，原型对象除了有原型属性外，为了实现继承，还有一个原型链指针**proto**,该指针是指向上一层的原型对象，而上一层的原型对象的结构依然类似。因此可以利用**proto**一直指向 Object 的原型对象上，而 Object 原型对象用 Object.prototype.** proto** = null 表示原型链顶端。如此形成了 js 的原型链继承。同时所有的 js 对象都有 Object 的基本防范

特点: JavaScript 对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。

## new 运算符的实现机制

- 首先创建了一个新的空对象;
- 设置原型，将对象的原型设置为函数的 prototype 对象;
- 让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）;
- 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

## EventLoop 事件循环

JS 是单线程的，为了防止一个函数执行时间过长阻塞后面的代码，所以会先将同步代码压入执行栈中，依次执行，将异步代码推入异步队列，异步队列又分为宏任务队列和微任务队列，因为宏任务队列的执行时间较长，所以微任务队列要优先于宏任务队列。`微任务队列的代表是: Promise.then，MutationObserver`，`宏任务的是: setImmediate setTimeout setInterval`。

JS 运行的环境。一般为浏览器或者 Node。 在浏览器环境中，有 JS 引擎线程和渲染线程，且两个线程互斥。 Node 环境中，只有 JS 线程。 不同环境执行机制有差异，不同任务进入不同 Event Queue 队列。 当主程结束，先执行准备好微任务，然后再执行准备好的宏任务，一个轮询结束。

## 浏览器中的事件环(Event Loop)

事件环的运行机制是，先会执行栈中的内容，栈中的内容执行后执行微任务，微任务清空后再执行宏任务，先取出一个宏任务，再去执行微任务，然后在取宏任务清微任务这样不停的循环。

- eventLoop 是由 JS 的宿主环境（浏览器）来实现的;
- 事件循环可以简单的描述为以下四个步骤:
  1. 函数入栈，当 Stack 中执行到异步任务的时候，就将他丢给 WebAPIs,接着执行同步任务,直到 Stack 为空;
  2. 此期间 WebAPIs 完成这个事件，把回调函数放入队列中等待执行（微任务放到微任务队列，宏任务放到宏任务队列）;
  3. 执行栈为空时，Event Loop 把微任务队列执行清空;
  4. 微任务队列清空后，进入宏任务队列，取队列的第一项任务放入 Stack(栈)中执行，执行完成后，查看微任务队列是否有任务，有的话，清空微任务队列。重复 4，继续从宏任务中取任务执行，执行完成之后，继续清空微任务，如此反复循环，直至清空所有的任务。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/342e581223d2471d9484fc48beb9f8e1~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

- 浏览器中的任务源(task):
  - 宏任务(macrotask): 宿主环境提供的，比如浏览器 ajax、setTimeout、setInterval、setTmmediate(只兼容 ie)、script、requestAnimationFrame、messageChannel、UI 渲染、一些浏览器 api
  - 微任务(microtask): 语言本身提供的，比如 promise.then、then、queueMicrotask(基于 then)、mutationObserver(浏览器提供)、messageChannel、mutationObersve

## Node 环境中的事件环(Event Loop)

Node 是基于 V8 引擎的运行在服务端的 JavaScript 运行环境，在处理高并发、I/O 密集(文件操作、网络操作、数据库操作等)场景有明显的优势。虽然用到也是 V8 引擎，但由于服务目的和环境不同，导致了它的 API 与原生 JS 有些区别，其 Event Loop 还要处理一些 I/O，比如新的网络连接等，所以 Node 的 Event Loop(事件环机制)与浏览器的是不太一样。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e362c1770f62428fbf3faabd99d2a64c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

执行顺序如下：

- timers: 计时器，执行 setTimeout 和 setInterval 的回调;
- pending callbacks: 执行延迟到下一个循环迭代的 I/O 回调;
- idle, prepare: 队列的移动，仅系统内部使用;
- poll 轮询: 检索新的 I/O 事件;执行与 I/O 相关的回调。事实上除了其他几个阶段处理的事情，其他几乎所有的异步都在这个阶段处理;
- check: 执行 setImmediate 回调，setImmediate 在这里执行;
- close callbacks: 执行 close 事件的 callback，一些关闭的回调函数，如：socket.on('close', ...)

## setTimeout、Promise、Async/Await 的区别

### setTimeout

setTimeout 的回调函数放到宏任务队列里，等到执行栈清空以后执行。

### Promise

Promise 本身是同步的立即执行函数， 当在 executor 中执行 resolve 或者 reject 的时候, 此时是异步操作， 会先执行 then/catch 等，当主栈完成后，才会去调用 resolve/reject 中存放的方法执行。

```javascript
console.log("script start");
let promise1 = new Promise(function (resolve) {
  console.log("promise1");
  resolve();
  console.log("promise1 end");
}).then(function () {
  console.log("promise2");
});
setTimeout(function () {
  console.log("settimeout");
});
console.log("script end");
// 输出顺序: script start->promise1->promise1 end->script end->promise2->settimeout
```

### async/await

async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。

```javascript
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}

console.log("script start");
async1();
console.log("script end");
// 输出顺序：script start->async1 start->async2->script end->async1 end
```

## Async/Await 如何通过同步的方式实现异步

Async/Await 就是一个自执行的 generate 函数。利用 generate 函数的特性把异步的代码写成“同步”的形式,第一个请求的返回值作为后面一个请求的参数,其中每一个参数都是一个 promise 对象.

## 介绍节流防抖原理、区别以及应用

- `节流`：事件触发后，规定时间内，事件处理函数不能再次被调用。也就是说在规定的时间内，函数只能被调用一次，且是最先被触发调用的那次。

- `防抖`：多次触发事件，事件处理函数只能执行一次，并且是在触发操作结束时执行。也就是说，当一个事件被触发准备执行事件函数前，会等待一定的时间（这时间是码农自己去定义的，比如 1 秒），如果没有再次被触发，那么就执行，如果被触发了，那就本次作废，重新从新触发的时间开始计算，并再次等待 1 秒，直到能最终执行！

`使用场景`：
节流：滚动加载更多、搜索框搜的索联想功能、高频点击、表单重复提交……
防抖：搜索框搜索输入，并在输入完以后自动搜索、手机号，邮箱验证输入检测、窗口大小 resize 变化后，再重新渲染。

```javascript
/**
 * 节流函数 一个函数执行一次后，只有大于设定的执行周期才会执行第二次。有个需要频繁触发的函数，出于优化性能的角度，在规定时间内，只让函数触发的第一次生效，后面的不生效。
 * @param fn要被节流的函数
 * @param delay规定的时间
 */
function throttle(fn, delay) {
  //记录上一次函数触发的时间
  var lastTime = 0;
  return function () {
    //记录当前函数触发的时间
    var nowTime = Date.now();
    if (nowTime - lastTime > delay) {
      //修正this指向问题
      fn.call(this);
      //同步执行结束时间
      lastTime = nowTime;
    }
  };
}

document.onscroll = throttle(function () {
  console.log("scllor事件被触发了" + Date.now());
}, 200);

/**
 * 防抖函数  一个需要频繁触发的函数，在规定时间内，只让最后一次生效，前面的不生效
 * @param fn要被节流的函数
 * @param delay规定的时间
 */
function debounce(fn, delay) {
  //记录上一次的延时器
  var timer = null;
  return function () {
    //清除上一次的演示器
    clearTimeout(timer);
    //重新设置新的延时器
    timer = setTimeout(() => {
      //修正this指向问题
      fn.apply(this);
    }, delay);
  };
}
document.getElementById("btn").onclick = debounce(function () {
  console.log("按钮被点击了" + Date.now());
}, 1000);
```
