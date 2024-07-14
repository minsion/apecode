# Vue

## Brief introduction to MVVM

### What is MVVM?

`View-model two-way binding` is the abbreviation of `Model-View-ViewModel`, which means that the Controller in MVC is transformed into ViewModel. The Model layer represents the data model, the View represents the UI component, and the ViewModel is the bridge between the View and Model layers. The data will be bound to the ViewModel layer and automatically rendered to the page. When the view changes, the ViewModel layer will be notified to update the data. `In the past, the DOM structure was operated to update the view, and now the data drives the view`.

### Advantages of MVVM

1. `Low coupling`. The view can change and modify independently of the model. A model can be bound to different views. When the view changes, the model can remain unchanged, and when the model changes, the view can remain unchanged;

2. `Reusability`. You can put some view logic in a model and let many views reuse this view logic.

3. `Independent development`. Developers can focus on the development of business logic and data (ViewModel), and designers can focus on page design.
4. `Testable`.

## Vue

The Progressive JavaScript Framework
Progressive JavaScript Framework

### Advantages

1. `Easy to learn`: One of the design goals of Vue.js is to be easy to learn and get started. Its core library is very lightweight, with clear documentation and rich examples, allowing beginners to get started quickly.
2. `Progressive framework`: Vue.js is a progressive framework that allows you to gradually introduce different parts of it as needed, such as Vue Router, Vuex, etc. This flexibility is very useful for projects of different sizes and needs.
3. `Responsive data binding`: Vue.js provides a powerful data binding mechanism that can easily achieve synchronous updates of views and data and improve development efficiency.
4. `Componentized development`: Vue.js encourages the use of componentized development methods to split pages into multiple reusable components to improve the maintainability and reusability of the code.
5. `Virtual DOM`: Vue.js uses virtual DOM technology. When data changes, it reduces real DOM operations by comparing the differences between virtual DOM and real DOM, thereby improving performance.
6. `Rich documentation`: Vue.js official documentation is detailed and provides a large number of examples and explanations for developers to consult.
7. `Active community`: Vue.js has a large community, and there are many third-party plug-ins and libraries that can be used to solve various problems.
8. `Rich ecosystem`: In addition to the core library, Vue.js also has a large number of ecosystem libraries, such as Vue Router (routing), Vuex (state management), Vuetify (UI component library), etc., which can help build more complete applications.

### Disadvantages

1. `Scale limitation`: Although Vue.js is suitable for most projects, for particularly large applications, it may not be powerful enough due to the lack of features of some large frameworks (such as Angular).
2. `Varying plugin quality`: Although there are many excellent Vue.js plugins and libraries, not all of them are of high quality, and sometimes you may need to make a decision among multiple choices.
3. `Relatively new`: Although Vue.js has been around for a while, it has a relatively short history compared to some other frameworks (such as Angular and React). This may affect some companies' decisions when choosing a technology stack.
4. `Global state management`: Although Vue.js provides Vuex for global state management, in large applications, the management of global state may require more work.

## Vue underlying implementation principle

vue.js adopts the method of `data hijacking combined with publisher-subscriber mode`, hijacking the setter and getter of each attribute through Object.defineProperty(), publishing messages to subscribers when data changes, triggering corresponding listening callbacks.

Vue is a typical MVVM framework. The model is just an ordinary javascript object. If it is modified, the view will be automatically updated. This design makes state management very simple and intuitive.

MVC:

- Model (data model): data layer, responsible for business logic and data processing.

- View (view): view layer, responsible for page display.

- Controller (controller): control layer, responsible for business logic and data processing.

MVVM:

- Model (data model): data layer, responsible for business logic and data processing.

- View (view): view layer.

- ViewModel (view model): control layer, responsible for business logic and data processing.

Observer (data listener): The core of Observer is to monitor data changes through Object.defineProprtty(). Setters and getters can be defined inside this function. Whenever the data changes, the setter will be triggered. At this time, Observer will notify the subscriber, and the subscriber is Watcher.

Watcher (subscriber): Watcher subscribers serve as a bridge for communication between Observer and Compile. The main things they do are:

1. Add themselves to the property subscriber (dep) when they are instantiated.
2. It must have an update() method.
3. When the property changes dep.notice(), it can call its own update() method and trigger the callback bound in Compile.

## Talk about the vue diff algorithm

Vue.js uses an efficient diff algorithm to update the `virtual DOM` to improve rendering performance. The core idea of ​​the algorithm is to only update necessary DOM nodes.

When comparing the new and old virtual DOMs, the Diff algorithm will only compare at the same level, not across levels. So the Diff algorithm is: `depth-first algorithm`. Time complexity: O(n)

### Specific steps

- Compare the root nodes of the two virtual DOM trees:
- If the root nodes are the same, recursively compare their child nodes.
- If the root nodes are different, directly replace the old root node.
- Compare the child nodes of the two virtual DOM trees:
- If the number of child nodes is the same, compare each child node one by one.
- If the number of child nodes is different, the longest common subsequence (LCS) algorithm is used to find the maximum match in the two lists of child nodes.
- Compare two virtual DOM nodes:
- If the node types are the same, compare the node attributes.
- If the node types are different, directly replace the old node.
- Update DOM nodes:
- If the node attributes change, update the DOM node attributes.
- If the text content of the node changes, update the text content of the DOM node.

### Optimization

The Vue diff algorithm uses some optimization techniques to improve performance, such as:

- Use key to identify nodes: Using key can quickly find the same nodes in two virtual DOM trees, thereby reducing the number of comparisons.
- Use reuse strategy: Vue will try to reuse old DOM nodes to reduce the number of DOM operations.

### Advantages

- It is an efficient diff algorithm that can effectively reduce the number of DOM operations, thereby improving rendering performance.

## Talk about your understanding of the vue life cycle?

Each Vue instance will go through a series of initialization processes when it is created. The vue life cycle hook is a function that is triggered when a certain stage or condition is reached. The purpose is to complete some actions or events.

`create phase`: vue instance is created

- `beforeCreate`: before creation, the data in data and methods are not initialized

- `created`: creation is complete, data has value, not mounted

`mount phase`: vue instance is mounted to the real DOM node

- `beforeMount`: server request can be initiated to get data

- `mounted`: DOM can be operated at this time

`update phase`: when the data in the vue instance changes, the component is re-rendered

- `beforeUpdate`: before update

- `updated`: after update

`destroy phase`: vue instance is destroyed

- `beforeDestroy`: before the instance is destroyed, some methods can be manually destroyed at this time

- `destroyed`: after destruction

## Component life cycle

### Life cycle (parent-child components)

- Parent component beforeCreate -->
- Parent component created -->
- Parent component beforeMount -->
- Child component beforeCreate -->
- Child component created -->
- Child component beforeMount -->
- Child component mounted -->
- Parent component mounted -->
- Parent component beforeUpdate -->
- Child component beforeDestroy -->
- Child component destroyed -->
- Parent component updated

### Loading and rendering process

- Parent beforeCreate ->
- Parent created ->
- Parent beforeMount ->
- Child beforeCreate ->
- Child created ->
- Child beforeMount ->
- Child mounted ->
- Parent mounted

### Mounting phase

- Parent created ->
- Child created ->
- Child mounted ->
- Parent mounted

### Parent component update phase

- Parent beforeUpdate ->
- Parent updated

### Child component update phase

- Parent beforeUpdate ->
- child beforeUpdate ->
- child updated ->
- parent updated

### Destruction phase

- parent beforeDestroy ->
- child beforeDestroy ->
- child destroyed ->
- parent destroyed

## computed and watch

Generally speaking, for functions that can be implemented by both computed and watch monitoring, computed is recommended, with the focus on computed's caching function. Computed properties are used to declaratively describe that a value depends on other values. When the dependent value or variable changes, the calculated property will also change; watch monitors the variables that have been defined in data. When the variable changes, the method in watch is triggered.

watch property monitoring is an object. The key is the property to be observed, and the value is the corresponding callback function. It is mainly used to monitor changes in certain specific data, so as to perform certain specific business logic operations. Monitoring property changes is used when asynchronous or high-cost operations need to be performed when data changes.

computed computed property The result of the property will be cached. When the property that the function in computed depends on has not changed, the result will be read from the cache when the current function is called. Unless the dependent responsive property changes, it will be recalculated. It is mainly used as a property. The function in computed must use return to return the final result. computed is more efficient and should be used first. If data does not change, computed will not be updated.

Usage scenario computed: `Use when a property is affected by multiple properties`, for example: shopping cart product settlement function watch: Use when a piece of data affects multiple pieces of data, for example: search data

## Why is data in a component a function?

1. If a component is reused multiple times, multiple instances will be created. Essentially, these instances use the same constructor.
2. If data is an object, the object is a reference type and will affect all instances. So in order to ensure that data does not conflict between different instances of the component, data must be a function.

## Why v-for and v-if are not recommended to be used together

1. When v-for and v-if are in the same node, v-for has a higher priority than v-if, which means that v-if will be repeated in each v-for loop. If the array to be traversed is large, but the data to be displayed is small, this will cause a great waste of performance (Vue2.x)
2. In this scenario, it is recommended to use computed to filter the data first.

:::tip
Note: In version 3.x, v-if always takes precedence over v-for. Due to grammatical ambiguity, it is recommended to avoid using both on the same element at the same time. Compared to managing at the template level
Related logic, a better way is to filter out the list by creating a calculated property and create a visible element based on it.
:::

## The role of key in the project

- The role of key is to find the corresponding node faster when the diff algorithm is executed, improve the diff speed, and `update the virtual DOM more efficiently`;
- Both vue and react use the diff algorithm to compare the new and old virtual nodes to update the nodes.
- In the diff function of vue, the key in the old node array is compared according to the key of the new node to find the corresponding old node.
- If it is not found, it is considered to be a new node.
- If there is no key, the corresponding old node will be found by traversal search.
- One is a map mapping, and the other is a traversal search. In comparison. Map mapping is faster.
- In order to force the component to be updated when the data changes, to avoid the side effects of "in-place reuse".
- When Vue.js uses v-for to update the list of rendered elements, it uses the "in-place reuse" strategy by default.
- If the order of the data items is changed, Vue will not move the DOM elements to match the order of the data items, but will simply reuse each element here and ensure that it shows each element rendered at a specific index.
- Duplicate keys will cause rendering errors.

## Component communication method

1. props/$emit parent-child component communication

Parent -> child props, child -> parent $on, $emit Get parent-child component instance parent, children Ref Get instance to call component properties or methods Parent->child Provide, inject Officially not recommended, but very commonly used when writing component libraries

2. $emit/$on Custom event Brother component communication

`Event Bus` implements cross-component communication Vue.prototype.$bus = new Vue() Custom event

3. vuex cross-level component communication

Vuex, $attrs, $listeners Provide, inject

## Implementation of nextTick

1. nextTick is a global API provided by Vue. It executes a delayed callback after the next DOM update cycle ends. Use $nextTick after modifying the data to get the updated DOM in the callback;

2. Vue executes asynchronously when updating the DOM. As long as data changes are detected, Vue will open a queue and buffer all data changes that occur in the same event loop. If the same watcher is triggered multiple times, it will only be pushed into the queue once. This deduplication of data during buffering is very important for avoiding unnecessary calculations and DOM operations. The nextTick method adds a callback function to the queue to ensure that the function is called after the previous DOM operation is completed;

## What is the implementation principle of nextTick?

After the next DOM update cycle ends, the delayed callback is executed, and nextTick is used immediately after the data is modified to obtain the updated DOM. NextTick mainly uses macrotasks and microtasks. According to the execution environment, try to use Promise, MutationObserver, and setImmediate respectively. If none of the above works, setTimeout is used to define an asynchronous method. Multiple calls to nextTick will store the method in the queue, and the current queue is cleared through this asynchronous method.

## Have you used slots? Are named slots, anonymous slots or scoped slots used?

The slot in Vue is a very useful thing. To put it simply, slots are placeholders. There are three types of slots in Vue: one is the `default slot (anonymous)`, one is the `named slot` and the other is the `scoped slot`.

Anonymous slots are those without names. As long as the default ones are filled in here, the named slots are those with names.

## Implementation of keep-alive

Function: Implement component caching and maintain the status of these components to avoid performance problems caused by repeated rendering. Components need to be cached and switched frequently, and no repeated rendering is required.

Scenarios: tabs, background navigation, Vue performance optimization.

Principle: Vue.js abstracts DOM nodes into VNode nodes, and the cache of keep-alive components is also based on VNode nodes instead of directly storing DOM structures. It caches the components that meet the conditions (pruneCache and pruneCache) in the cache object, and takes the vnode node from the cache object and renders it when it needs to be re-rendered.

## mixin

When the mixin project becomes complex, mixins will be used when there is repeated logic between multiple components. Multiple components have the same logic, which is extracted. Mixin is not a perfect solution and there will be some problems.

The Composition API proposed by vue3 aims to solve these problems [the pursuit of perfection consumes a certain cost, such as development cost]

Scenario: The right column of the news list and the details page on the PC side can be mixed using mixin.

Disadvantages:

1. The source of the variable is unclear, which is not conducive to reading.

2. Multiple mixins may cause naming conflicts 3. Mixins and components may have many-to-many relationships, making the project more complex.

## Understanding and usage scenarios of Vuex

Vuex is a state management mode developed specifically for Vue applications. The core of every Vuex application is the store.

1. Vuex's state storage is responsive; when a Vue component reads the state from the store, if the state in the store changes, the corresponding component will also be efficiently updated accordingly.
2. The only way to change the state in the store is to explicitly commit mutations, which allows us to easily track the changes of each state. Vuex mainly includes the following core modules:
1. State: defines the number of states of the application.
2. Getter: Define "getter" in the store (which can be considered as the calculated property of the store). Just like the calculated property, the return value of the getter will be cached according to its dependencies and will only be recalculated when its dependent values ​​change.
3. Mutation: It is the only way to change the state in the store and must be a synchronous function.
4. Action: It is used to submit mutations instead of directly changing the state. It can contain any asynchronous operations.
5. Module: allows a single Store to be split into multiple stores and saved in a single state tree at the same time.

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7249773a1634f779c48f3f0ffabf968~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)