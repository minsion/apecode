# JavaScript

## Eight data types and their differences

Including value type (basic object type) and reference type (complex object type)

Basic type (value type): Occupies a fixed size in memory and is stored in stack memory

- Number,

- String,

- Boolean,

- Symbol,

- null,

- undefined

Reference type (complex data type): Stored in heap memory, the stack memory stores the variable identifier of the object and the storage address of the object in the heap memory.

- Object

- Function

Others include Array, Date, RegExp, special basic package types (String, Number, Boolean) and single built-in objects (Global, Math), etc. The value of the reference type is an object.

## Data type detection scheme

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

Advantages: can quickly distinguish basic data types

Disadvantages: cannot distinguish between Object, Array and Null, all return object

### instanceof

```javascript
console.log(1 instanceof Number); // false
console.log(true instanceof Boolean); // false
console.log("str" ​​instanceof String); // false
console.log([] instanceof Array); // true
console.log(function () {} instanceof Function); // true
console.log({} instanceof Object); // true
```

Advantages: Able to distinguish between Array, Object and Function, suitable for judging custom class instance objects

Disadvantages: Cannot judge Number, Boolean, String basic data types

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

Advantages: Accurately determine data types

Disadvantages: The writing is cumbersome and not easy to remember. It is recommended to encapsulate and use

## var && let && const

Before ES6, var was used to create variables, and let/const was used to create variables afterwards

Differences between the three:

- Variables defined by var have no concept of blocks and can be accessed across blocks, but not across functions;
- Variables defined by let can only be accessed in the block scope, not across blocks or across functions;
- const is used to define constants, and must be initialized (i.e., must be assigned a value) when used. It can only be accessed in the block scope and cannot be modified;
- var can be used first and declared later because of variable promotion; let must be declared first and used later;
- var It is allowed to repeatedly declare the same variable in the same scope, while let and const do not allow this phenomenon;
- In the global context, global variables declared based on let have no relationship with the global object GO (window);
- Variables declared by var will have a mapping relationship with GO;
- A temporary dead zone will be generated:

:::tip
The temporary dead zone is a bug in the browser: when detecting an undeclared variable type, no error will be reported, and undefined will be returned

For example: console.log(typeof a) //undefined

And: console.log(typeof a) //cannot be used before declaration

let a
:::

- let /const/function will treat the current curly braces (except functions) as a new block-level context. Applying this mechanism, when developing a project, if you encounter similar requirements such as loop event binding, you don’t need to build a closure to store it yourself. You can solve it based on the block action feature of let.

## Garbage collection mechanism

1. In the project, if there is a large amount of unreleased memory (heap/stack/context), the page performance will become very slow. When some code operations cannot be released reasonably, memory leaks will occur. We try to reduce the use of closures as much as possible because it consumes memory;

2. Browser garbage collection mechanism/memory recycling mechanism;

> The browser's Javascript has an automatic garbage collection mechanism (GC: Garbage Collecation). The garbage collector will periodically (periodically) find out those variables that are no longer in use and then release their memory.

- Mark-sweep: In js, the most commonly used garbage collection mechanism is mark-sweep: when a variable enters the execution environment, it is marked as "entering the environment", and when the variable leaves the execution environment, it is marked as "leaving the environment". The garbage collector will destroy those marked values ​​and recycle the memory space they occupy.

- Google Chrome: "Find references", the browser will periodically find references to the current memory. If it is not occupied, the browser will recycle it; if it is occupied, it cannot be recycled.
- IE browser: "reference counting method", the current memory is occupied once, the count is accumulated by 1, and the occupation is removed and reduced by 1. When it is reduced to 0, the browser recycles it.

3. Optimization means: memory optimization; manual release: cancel the memory occupation.

- Stack memory: cancel the heap occupation occupied by the outside in the context.

- Heap memory: fn = null [null: null pointer object]

4. Memory leak

In JS, there are 4 common memory leaks: global variables, closures, DOM element references, and timers

## Scope and scope chain

When creating a function, the scope of the current function has been declared ==> `The context in which the current function is created`. If the function is created in the global context, it is `[[scope]]:EC(G)`. When the function is executed, a new private context `EC(FN)` is formed for the string code to execute (pushing into the stack)

Definition: In simple terms, the scope is the accessible range of variables and functions, `consisting of a series of variable objects in the current environment and the upper environment`

1. Global scope: Code can be accessed anywhere in the program, and the built-in properties of the window object have a global scope.

2. Function scope: It can only be accessed in a fixed code snippet

Function: The biggest use of the scope is to `isolate variables`, and there will be no conflict between variables with the same name in different scopes.

Scope chain reference link In general, variables are taken from the scope of the function that created the variable. However, if it is not found in the current scope, it will be searched in the upper scope until the global scope is found. The chain formed by such a search process is called a scope chain.

## Closure

`The two main functions of closures are preservation/protection`

### Concept

The private context EC(FN) formed when a function is executed, under normal circumstances, will be released after the code is executed; but in special circumstances, if something in the current private context is occupied by something outside the context, the context will not be released, thus forming an undestroyed context. Function Execution During the function execution process, a new private context will be formed, which may be released or not. Regardless of whether it is released or not, its functions are:

- Protection: Divide an independent code execution area, in which there is space for storing private variables, protecting private variables from external interference (operating private variables has nothing to do with the outside world);

- Preservation: If the current context is not released [as long as something in the context is occupied by the outside], the stored private variables will not be released either, and can be used in its subordinate context, which is equivalent to saving some values;

We call the mechanism of forming a private context by function execution to protect and save private variables `closure`.

:::tip
A closure is a function that has access to variables in another function's scope. "Advanced JavaScript Programming"

A slightly more comprehensive answer: In js, the scope of variables belongs to the function scope. After the function is executed, the scope will be cleaned up and the memory will be recycled. However, since the closure function is a sub-function built inside the function, it can access the parent scope. Even if the parent function is executed, the scope will not be destroyed. At this time, the sub-function (that is, the closure) has the right to access the variables in the parent scope, and the values ​​in the scope will not be destroyed even after the parent function is executed.
:::

### Features

1. Internal functions can access the parameters and variables that define their external functions. (Looking up the scope chain, storing the variable values ​​in the outer scope in memory instead of destroying them after the function call is completed) Design private methods and variables to avoid global variable pollution;
1. Closure is a closed container, similar to set and map containers, which stores data
2. Closure is an object, and the format of storing data is key-value form
2. Function nesting function;
3. The essence is to connect the inside and outside of the function. The advantage is that the variables inside the function can be read, so that the values ​​of these variables are always saved in memory and will not be automatically cleared after the function is called.

### Formation conditions

1. Function nesting;

2. The internal function references the local variables of the external function to extend the variable life cycle of the external function.

### Purpose

- Imitate block-level scope;
- Protect variables of external functions and be able to access the lexical scope where the function is defined (prevent it from being recycled);
- Encapsulate private variables;
- Create modules.

### Application scenarios

Two scenarios of closures, two major functions of closures: `save/protect`.

In development, we can actually see closures everywhere. Most front-end JavaScript codes are "event-driven", that is, a callback method bound to an event; callbacks for success or failure of sending an ajax request; setTimeout's delayed callback; or returning another anonymous function inside a function, these are all applications of closures.

### Advantages and Disadvantages

- Advantages of closures: extend the life cycle of local variables
- Disadvantages of closures: cause the variables of the function to be kept in memory all the time, and too many closures may cause memory leaks

## Five cases of this

- When `normal function execution`, this points to window.

- When `the function is called as a method of an object`, this points to the object.
- `Constructor call`, this points to the returned object.
- The this binding of the `arrow function` depends on the object under which the function where this is located is defined. If there is a nested situation, this is bound to the nearest layer of object.
- Based on the `apply, call and bind calling modes` on Function.prototype, these three methods can explicitly specify the this pointer of the calling function. apply receives an array of parameters, call accepts a parameter list, and the ``bind method returns a this bound to the passed object by passing in an object.
A new function. The this pointer of this function will not change except when new` is used. If it is empty, it points to the global object window by default.

## Prototype && Prototype chain

Prototype relationship:

- Each class has a displayed prototype prototype

- Each instance has an implicit prototype _ proto_

- The * proto* of the instance points to the prototype of the corresponding class

Prototype: In JS, whenever an object is defined (a function is also an object), the object will contain some predefined properties. Each function object has a prototype property, which points to the prototype object of the function.

Prototype chain: The prototype chain object constructor of the function points to the function itself by default. In addition to the prototype property, the prototype object also has a prototype chain pointer **proto** in order to achieve inheritance. The pointer points to the prototype object of the upper layer, and the structure of the prototype object of the upper layer is still similar. Therefore, **proto** can be used to point to the prototype object of Object, and the Object prototype object uses Object.prototype.** proto** = null to indicate the top of the prototype chain. This forms the prototype chain inheritance of js. At the same time, all js objects have the basic defense of Object

Features: JavaScript objects are passed by reference, and each new object entity we create does not have its own copy of the prototype. When we modify the prototype, the objects related to it will also inherit the change.

## Implementation mechanism of the new operator

- First, a new empty object is created;
- Set the prototype, set the prototype of the object to the prototype object of the function;
- Let the this of the function point to this object, and execute the code of the constructor (add properties to this new object);
- Determine the return value type of the function. If it is a value type, return the created object. If it is a reference type, return the object of this reference type.

## EventLoop event loop

JS is single-threaded. In order to prevent a function from blocking the subsequent code due to a long execution time, the synchronous code will be pushed into the execution stack first, and executed in sequence, and the asynchronous code will be pushed into the asynchronous queue. The asynchronous queue is divided into a macro task queue and a micro task queue. Because the execution time of the macro task queue is longer, the micro task queue should take precedence over the macro task queue. `The representatives of microtask queue are: Promise.then, MutationObserver`, and `the representatives of macrotask are: setImmediate setTimeout setInterval`.

The environment where JS runs. Generally, it is a browser or Node. In the browser environment, there are JS engine threads and rendering threads, and the two threads are mutually exclusive. In the Node environment, there is only a JS thread. The execution mechanisms of different environments are different, and different tasks enter different Event Queue queues. When the main program ends, the prepared microtasks are executed first, and then the prepared macrotasks are executed, and a polling ends.

## Event Loop in the Browser

The operating mechanism of the event loop is that the contents in the stack will be executed first, and then the microtasks will be executed after the contents in the stack are executed. After the microtasks are cleared, the macrotasks will be executed. First, a macrotask will be taken out, and then the microtasks will be executed, and then the macrotasks will be taken out and the microtasks will be cleared. This cycle continues.

- eventLoop is implemented by the host environment (browser) of JS;
- The event loop can be simply described as the following four steps:
1. The function is pushed into the stack. When the asynchronous task is executed in the Stack, it is thrown to WebAPIs, and then the synchronous task is executed until the Stack is empty;
2. During this period, WebAPIs completes the event and puts the callback function into the queue for execution (microtasks are put into the microtask queue, and macrotasks are put into the macrotask queue);
3. When the execution stack is empty, Event Loop clears the microtask queue;
4. After the microtask queue is cleared, enter the macrotask queue, take the first task in the queue and put it into the Stack for execution. After the execution is completed, check whether there is a task in the microtask queue. If there is, clear the microtask queue. Repeat 4, continue to take tasks from the macrotask for execution, and after the execution is completed, continue to clear the microtask, and repeat the cycle until all tasks are cleared.

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/342e581223d2471d9484fc48beb9f8e1~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

- Task source in the browser (task):
- Macrotask: provided by the host environment, such as browser ajax, setTimeout, setInterval, setTmmediate (only compatible with ie), script, requestAnimationFrame, messageChannel, UI rendering, some browser APIs
- Microtask: provided by the language itself, such as promise.then, then, queueMicrotask (based on then), mutationObserver (provided by the browser), messageChannel, mutationObersve

## Node Event Loop in the Environment

Node is a JavaScript runtime environment based on the V8 engine that runs on the server. It has obvious advantages in handling high-concurrency, I/O-intensive (file operations, network operations, database operations, etc.) scenarios. Although it also uses the V8 engine, its API is somewhat different from native JS due to different service purposes and environments. Its Event Loop also handles some I/O, such as new network connections, so Node's Event Loop (event loop mechanism) is different from that of the browser.

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e362c1770f62428fbf3faabd99d2a64c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

The execution order is as follows:

- timers: timers, execute callbacks of setTimeout and setInterval;

- pending callbacks: execute I/O callbacks delayed to the next loop iteration;

- idle, prepare: queue movement, only used internally by the system;

- poll polling: retrieve new I/O events; execute callbacks related to I/O. In fact, except for the things handled in other stages, almost all other asynchronous operations are handled in this stage;
- check: execute the setImmediate callback, setImmediate is executed here;
- close callbacks: execute the callback of the close event, some closing callback functions, such as: socket.on('close', ...)

## The difference between setTimeout, Promise, and Async/Await

### setTimeout

The callback function of setTimeout is placed in the macro task queue and executed after the execution stack is cleared.

### Promise

Promise itself is a synchronous immediate execution function. When resolve or reject is executed in the executor, it is an asynchronous operation at this time. Then/catch will be executed first. When the main stack is completed, the method stored in resolve/reject will be called for execution.

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
// Output order: script start->promise1->promise1 end->script end->promise2->settimeout
```

### async/await

The async function returns a Promise object. When the function is executed, once await is encountered, it will return first, wait until the triggered asynchronous operation is completed, and then execute the following statements in the function body. It can be understood as giving up the thread and jumping out of the async function body.

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
// Output order: script start->async1 start->async2->script end->async1 end
```

## How to achieve asynchrony in Async/Await through synchronization

Async/Await is a self-executing generate function. Using the characteristics of the generate function, the asynchronous code is written in a "synchronous" form. The return value of the first request is used as the parameter of the next request, and each parameter is a promise object.

## Introduce the principle, difference and application of throttling and anti-shaking

- `Throttling`: After the event is triggered, the event processing function cannot be called again within the specified time. That is to say, within the specified time, the function can only be called once, and it is the first time it is triggered.

- `Anti-shake`: If an event is triggered multiple times, the event processing function can only be executed once, and it is executed at the end of the triggering operation. That is to say, when an event is triggered and ready to execute the event function, it will wait for a certain time (this time is defined by the programmer himself, such as 1 second). If it is not triggered again, it will be executed. If it is triggered, then this time will be invalidated and the calculation will start from the new trigger time, and wait for 1 second again until it can be finally executed!

`Usage scenario`:
Throttling: scrolling to load more, search box search association function, high-frequency clicks, repeated form submission...
Anti-shake: search box search input, and automatically search after input, mobile phone number, email verification input detection, window size resize change, and then re-render.

```javascript
/**
* Throttling function After a function is executed once, it will only be executed a second time if it is greater than the set execution cycle. There is a function that needs to be triggered frequently. To optimize performance, only the first time the function is triggered is effective within the specified time, and the subsequent ones are not effective.
* @param fn function to be throttled
* @param delay specified time
*/
function throttle(fn, delay) {
//Record the time when the last function was triggered
var lastTime = 0;
return function () {
//Record the time when the current function was triggered
var nowTime = Date.now();
if (nowTime - lastTime > delay) {
//Fix this pointing problem
fn.call(this);
//Synchronous execution end time
lastTime = nowTime;
}
};
}

document.onscroll = throttle(function () {
console.log("scllor event was triggered" + Date.now());
}, 200);

/**
* Anti-shake function A function that needs to be triggered frequently. Within the specified time, only the last one will take effect, and the previous ones will not take effect
* @param fn function to be throttled
* @param delay specified time
*/
function debounce(fn, delay) {
  //Record the last delay
  var timer = null;
  return function () {
    // Clear the last demonstrator
    clearTimeout(timer);
    // ReSet a new delay timer
    timer = setTimeout(() => {
      //Fix this pointing problem
      fn.apply(this);
    }, delay);
  };
}
document.getElementById("btn").onclick = debounce(function () {
console.log("Button was clicked" + Date.now());
}, 1000);
```