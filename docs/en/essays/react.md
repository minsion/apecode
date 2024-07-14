# React

## Have you used hooks? Let's talk about the difference between class components and function components in React

Class components are components defined using ES6 classes. Function components receive a single props object and return a React element.

About React's two APIs (class API and function-based hooks API). The official recommendation is to use hooks (functions) instead of classes. Because hooks are more concise, with less code, they are "lighter" to use, while classes are "heavy". Moreover, hooks are functions, which are more in line with the functional nature of React.

Generally speaking, functions should only do one thing, which is to return a value. If you have multiple operations, each operation should be written as a separate function. Moreover, the state of the data should be separated from the operation method. According to the concept of functions, React's function components should only do one thing: return the HTML code of the component, and have no other functions. The return result of the function depends only on its parameters. It does not change the external data of the function body, and there are no side effects in the function execution process.

A class is an encapsulation of data and logic. In other words, the state and operation methods of a component are encapsulated together. If you choose to write in a class, you should write related data and operations in the same class.

Disadvantages of class components:

- Large components are difficult to split and refactor, and difficult to test.

- Business logic is scattered among various methods of the component, resulting in duplicate logic or associated logic.

- Component classes introduce complex programming patterns, such as render props and higher-order components.

- Difficult to understand classes, understand how this works in JavaScript.

Difference: The performance of function components is higher than that of class components, because class components need to be instantiated when used, while function components can directly execute functions and get the return results.

1. Whether there is state
Before the emergence of hooks, function components had no instances, no life cycle, no state, and no this, so we call function components stateless components. Before the emergence of hooks, function components in react usually only considered responsible for UI rendering, had no own state and no business logic code, and were pure functions. Its output is determined only by the parameter props and is not affected by any other factors.
2. Different calling methods
When a function component is re-rendered, the component method will be re-called to return a new react element. When a class component is re-rendered, a new component instance will be created, and then the render class method will be called to return a react element, which also explains why this is mutable in the class component.
3. Because of the different calling methods, there will be problems in the use of function components
When changing the state value during the operation, the class component can obtain the latest state value, while the function component will return the state value in sequence

### React Hooks (the role of hooks)

Hook is a new feature of React 16.8. It allows you to use state and other React features without writing a class.

Several common hooks of React Hooks:

1. useState() //State hook

2. useContext() //Shared state hook

3. useReducer() //Action hook

4. useEffect() //Side effect hook

There are several uncommon ones, as follows:

1. useCallback memorized function Generally, functional components are understood as syntactic sugar of class component render function, so every time you re-render, all the code inside the functional component will be re-executed. But with useCallback, it is different. You can get a memorized function through useCallback.
The second parameter passes in an array. Once the value or reference of each item in the array changes, useCallback will return a new memorized function for subsequent rendering.

```javascript
function App() {
  const memoizedHandleClick = useCallback(() => {
    console.log("Click happened");
  }, []);
  return <SomeComponent onClick={memoizedHandleClick}>Click Me</SomeComponent>;
}
```
2. useMemo memorizes components. The function of useCallback can be completely replaced by useMemo. If you want to return a memorized function by using useMemo, it is also possible. The only difference is that useCallback will not execute the first parameter function, but return it to you, while useMemo will execute the first function and return the result of the function execution to you. Therefore, useCallback often memorizes event functions, generates memorized event functions and passes them to child components for use. And useMemo is more suitable for obtaining a certain value through function calculation, such as memorizing components.
3. useRef saves reference values
useRef is similar to createRef, and can be used to generate references to DOM objects. The value returned by useRef is passed to the component or the ref attribute of the DOM, and the component or the real DOM node can be accessed through the ref.current value. The key point is that the component can also be accessed, so that some operations can be performed on the DOM, such as listening to events, etc.
4. useImperativeHandle penetrates Ref
useImperativeHandle is used to allow the parent component to obtain the index in the child component
5. useLayoutEffect executes side effects synchronously
In most cases, useEffect can help us handle the side effects of components, but if you want to call some side effects synchronously, such as DOM operations, you need to use useLayoutEffect. The side effects in useLayoutEffect will be executed synchronously after the DOM is updated.

What is the difference between useEffect and useLayoutEffect:

Simply put, the timing of the call is different. UseLayoutEffect is consistent with the original componentDidMount&componentDidUpdate. The code that is synchronously called immediately after react completes the DOM update will block the page rendering. And useEffect is the code that will be called after the entire page is rendered. Official recommendation is to use useEffect first

## React component communication method

Common situations of communication between react components:

1. Parent component communicates with child component

2. Child component communicates with parent component

3. Cross-level component communication

4. Non-nested component communication

### Parent component communicates with child component

The parent component passes the required information to the child component through props. Parent-to-child is to directly bind a normal attribute in the parent component. This attribute refers to a specific value. In the child component, this value can be obtained using props

```javascript
const Child = (props) => {
  return <p>{props.name}</p>;
};

const Parent = () => {
  return <Child name="京程一灯"></Child>;
};
```
### Child component communicates with parent component

The props+ callback method uses common components to promote state. Child to parent means first binding the property to a function on the parent component. When the child component needs to pass a value to the parent component, the function is called through props to pass the parameter into the function. At this time, the parameter can be received in the function in the parent component, and this parameter is the value passed by the child component.

```javascript
const Child = (props) => {
  const cb = (msg) => {
    return () => {
      props.callback(msg);
    };
  };
  return <button onClick={cb("Welcome to Jingcheng Yideng!")}>Welcome to Jingcheng Yideng</button>;
};

class Parent extends Component {
  callback(msg) {
    console.log(msg);
  }
  render() {
    return <Child callback={this.callback.bind(this)}></Child>;
  }
}
```
### Cross-level component communication

That is, the parent component communicates with the child component of the child component, and communicates with the deeper child component.

- Use props and use the intermediate components to pass layer by layer. However, if the parent component structure is deep, each layer of the intermediate component must pass props, which increases the complexity, and these props are not needed by the intermediate component itself.
- Use context, which is equivalent to a large container. We can put the content to be communicated in this container, so that no matter how deeply nested it is, it can be used at will. For global data across multiple layers, context can be used.

```javascript
//Context method to achieve cross-level component communication
//Context is designed to share data that is "global" to a component tree

const BatteryContext = createContext();

class GrandChild extends Component {
  render() {
    return (
      <BatteryContext.Consumer>
        {(color) => <h1 style={{ color: color }}>我是红色的:{color}</h1>}
      </BatteryContext.Consumer>
    );
  }
}

//  子组件
const Child = () => {
  return <GrandChild />;
};
// 父组件
class Parent extends Component {
  state = {
    color: "red",
  };
  render() {
    const { color } = this.state;
    return (
      <BatteryContext.Provider value={color}>
        <Child></Child>
      </BatteryContext.Provider>
    );
  }
}
```
### Component communication with non-nested relationships

That is, there are no components with any containment relationship, including sibling components and non-sibling components that are not in the same parent.

1. Custom event communication (publish-subscribe mode) can be used, using pubsub-js

2. Global state management can be performed through redux, etc.

3. If it is sibling component communication, you can find the common parent node of the two sibling nodes and communicate in combination with the parent-child communication method.

4. You can also create a new Vue EventBus to listen to events. While listening, the newly added VUE eventBus is the publish-subscribe mode, which can be used in React;

## setState has both asynchronous and synchronous situations

1. Asynchronous situation, it is an asynchronous operation in React events.

2. Synchronous situation If it is in a setTimeout event or a custom dom event, it is synchronous.

```javascript
import React, { Component } from "react";
class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <>
        <p>count:{this.state.count}</p>
        <button onClick={this.btnAction}>add</button>
      </>
    );
  }

  btnAction = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count);
    });
  };
}

export default Count;
```

```javascript
import React, { Component } from "react";
class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <>
        <p>count:{this.state.count}</p>
        <button id="btn">绑定点击事件</button>
      </>
    );
  }

  componentDidMount() {
    document.querySelector("#btn").addEventListener("click", () => {
      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count);
    });
  }
}

export default Count;
```

## life cycle

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8bae01e6eb804d849e5bb889f787707d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

```javascript
// Installation
// When an instance of the component is created and inserted into the DOM, these methods are called in the following order:
constructor()
static getDerivedStateFromProps()
render()
componentDidMount()

// Updating
// Updates may be caused by changes in props or state. When a component is re-rendered, these methods are called in the following order:
static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()

// Unmount
// This method is called when the component is removed from the DOM:
componentWillUnmount()
```
## Let's talk about react-fiber

### Background

The fundamental reason for the emergence of react-fiber is that a large number of synchronous computing tasks block the browser's UI rendering. By default, JS operations, page layout, and page drawing are all running in the main thread of the browser, and they are mutually exclusive. If JS operations continue to occupy the main thread, the page cannot be updated in time. When we call setState to update the page, React will traverse all nodes of the application, calculate the difference, and then update the UI. If there are many elements on the page, the entire process may take more than 16 milliseconds, which is prone to frame drops.

### Implementation principle

- React's internal operation is divided into three layers
- Virtual DOM layer, describing what the page looks like.
- Reconciler layer, responsible for calling component lifecycle methods, performing Diff operations, etc.
- Renderer layer, rendering the corresponding page according to different platforms, the more common ones are ReactDOM and ReactNative.

Fiber actually refers to a data structure, which can be represented by a pure JS object:

```javascript
const fiber = {
  stateNode, // Node instance
  child, // Child node
  sibling, // Sibling node
  return, // Parent node
}
```
- In order to achieve no lag, a scheduler is needed to allocate tasks. High-priority tasks (such as keyboard input) can interrupt the execution of low-priority tasks (such as Diff) to take effect faster. There are six task priorities:
- synchronous, the same as the previous Stack Reconciler operation, synchronous execution
- task, executed before the next tick
- animation, executed before the next frame
- high, executed immediately in the near future
- low, it doesn’t matter if the execution is slightly delayed
- offscreen, executed at the next render or scroll
- The Fiber Reconciler (react) execution process is divided into 2 stages:
- Stage 1, generate the Fiber tree and obtain the node information that needs to be updated. This step is a gradual process and can be interrupted. The interruptible feature of stage 1 allows higher-priority tasks to be executed first, greatly reducing the probability of page frame drops from the framework level.
- Stage 2, batch update the nodes that need to be updated at one time, and this process cannot be interrupted.
- Fiber tree: When React renders for the first time, it will create an Element tree through React.createElement, which can be called Virtual DOM Tree. Since it needs to record context information, Fiber is added. Each Element will correspond to a Fiber Node, and the structure that links Fiber Nodes is called Fiber Tree. An important feature of Fiber Tree is the linked list structure, which will be programmed to traverse the loop recursively, and then cooperate with the requestIdleCallback API to achieve task splitting, interruption and recovery.

From Stack Reconciler to Fiber Reconciler, the source code level is actually a recursive change to loop

## Portals

Portals provide a first-class way to render child components into DOM nodes that exist outside the DOM hierarchy of the parent component. Portals can be used to create when the structure is not controlled by the outside world.

## When to use asynchronous components? How to use asynchronous components

- When loading large components
- When loading routes asynchronously

Use Suspense in react

```javascript
// Asynchronous lazy loading
const Box = lazy(() => import("./components/Box"));
// When using components, wrap them with suspense
<Suspense fallback={<div>loading...</div>}>{show && <Box />}</Suspense>;
```

## Event binding principle

React does not bind the click event to the real DOM of the div, but `listens to all supported events at the document`. When the event occurs and bubbles to the document, React encapsulates the event content and hands it over to the real processing function to run. This method not only reduces memory consumption, but also allows unified subscription and removal of events when components are mounted and destroyed.
In addition, the events that bubble to the document are not native browser events, but synthetic events (SyntheticEvent) implemented by React itself. Therefore, if we don't want the event to bubble, calling event.stopPropagation is invalid, and we should call `event.preventDefault`.

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2089718f74b342869de15f01588f033f~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)
