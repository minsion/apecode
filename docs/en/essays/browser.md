# Browser

## The whole process from inputting URL to loading page

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e44aa8a92602405db3c12161b71e2094~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

1. First enter the URL in the browser;

2. Search cache: The browser first checks whether there is a page with the address in the browser cache-system cache-route cache, and displays the page content if there is one. If not, proceed to the next step:

- Browser cache: The browser will record DNS for a period of time, so it is only the first place to resolve the DNS request;

- Operating system cache: If this record is not included in the browser cache, the system will call the operating system to obtain the operating system record (save the most recent DNS query cache);

- Router cache: If the above two steps cannot successfully obtain the DNS record, continue to search the router cache;

- ISP cache: If all the above fail, continue to search the ISP.

3. DNS domain name resolution: The browser initiates a request to the DNS server to resolve the IP address corresponding to the domain name in the URL. DNS server is based on UDP, so UDP protocol is used;

4. Establish TCP connection: After resolving the IP address, establish TCP connection with the server according to the IP address and the default port 80;

5. Initiate HTTP request: The browser initiates an HTTP request to read the file, and the request message is sent to the server as the third data of the TCP three-way handshake;

6. The server responds to the request and returns the result: The server responds to the browser request and sends the corresponding html file to the browser;

7. Close TCP connection: Release the TCP connection through four waves;

8. Browser rendering: The client (browser) parses the HTML content and renders it. The parsing process after the browser receives the data packet is:

- Build DOM tree: Lexical analysis and then parse into DOM tree (dom tree), which is composed of dom elements and attribute nodes, and the root of the tree is the document object

- Build CSS rule tree: Generate CSS rule tree (CSS Rule Tree)

- Build render tree: Web browser will DOM and CSSOM Combine and build a render tree
- Layout: calculate the position of each node on the screen
- Painting: traverse the render tree and use the UI backend layer to draw each node.

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a90660027f0d4c559732519bad4c6323~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

9. JS engine parsing process: calling JS engine to execute JS code (JS interpretation phase, preprocessing phase, execution phase to generate execution context, VO, scope chain, recycling mechanism, etc.)

- Create window object: window object is also called global execution environment. It is created when the page is generated. All global variables and functions belong to the properties and methods of window, and DOM Tree will also be mapped to the doucment object of window. When you close the webpage or the browser, the global execution environment will be destroyed;

- Loading files: The js engine analyzes whether its syntax and lexical structure are legal. If legal, it will enter pre-compilation;

- Pre-compilation: During the pre-compilation process, the browser will look for global variable declarations, add it to the window object as a window attribute, and assign the variable to 'undefined'; look for global function declarations, add it to the window object as a window method, and assign the function body to it (anonymous functions do not participate in pre-compilation because they are variables). The unreasonable problem of variable promotion has been solved in ES6, but function promotion still exists;

- Interpretation and execution: Assign values ​​to variables when executed. If the variable is not defined, it will not be directly assigned by pre-compilation. In ES5 non-strict mode, this variable will become a property of window, that is, a global variable. Values ​​such as string and int directly put the value in the variable's storage space, and object objects point pointers to the variable's storage space. When a function is executed, the function environment is pushed into a stack of environments, and then popped out after execution, and control is returned to the previous environment. JS scope is actually implemented by such an execution flow mechanism.

## What is the difference between browser redrawing and reflow?

- Reflow: When changes in the DOM affect the geometric information of an element, the browser needs to recalculate the geometric properties of the element and place it in the correct position in the interface. This process is called reflow. It manifests as `regenerating the layout and rearranging the elements.`

- Repaint: When the appearance of an element changes, but the layout is not changed, the process of redrawing the appearance of the element is called redrawing. It manifests as `the appearance of some elements has changed.`

Simply changing the appearance of an element will definitely not cause the web page to regenerate the layout, but when the browser completes the reflow, it will redraw the parts affected by the reflow.

Reflow and repaint are expensive. They will destroy the user experience and make the UI display very sluggish. In comparison, reflow has a greater performance impact. In the case where both cannot be avoided, we generally prefer to choose a less expensive repaint.

`'Repaint' does not necessarily lead to 'reflow', but 'reflow' will inevitably lead to 'repaint'. `

## How to trigger reflow and repaint?

Any change to the information used to build the render tree will cause a reflow or repaint:

- Add, delete, or update DOM nodes;

- Hide a DOM node through display: none - trigger reflow and repaint;

- Hide a DOM node through visibility: hidden - only trigger repaint because there is no geometric change;

- Move or animate DOM nodes in the page;

- Add a style sheet and adjust style properties;

- User behavior, such as resizing the window, changing the font size, or scrolling.

## How to avoid repaint or reflow?

1. Change styles in a centralized manner, and do not modify DOM styles one by one. ;
2. Do not put the attribute values ​​of DOM nodes in the loop as variables in the loop. ;
3. Use fixed or absolute position for the animated HTML elements, so that modifying their CSS will not reflow. ;
4. Do not use table layout. Because a small change may cause the entire table to be re-laid out. ;
5. Try to modify only position: absolute or fixed elements, which will have little impact on other elements;
6. GPU acceleration for animation starts, and 3D changes are used for translate;
7. Promote to composite layer;

Promoting elements to composite layers has the following advantages:

- The bitmap of the composite layer will be composited by the GPU, which is faster than CPU processing;
- When repainting is needed, only repaint itself is needed, which will not affect other layers;
- For transform and opacity effects, layout and paint will not be triggered

The best way to promote a composite layer is to use the will-change attribute of CSS:

```css
#target {
will-change: transform;
}
```

## Introduce the 304 process

> The HTTP 304 Not Modified client redirection response code indicates that there is no need to retransmit the requested resources.

`304 Not Modified`: The unmodified client redirect response code indicates that there is no need to resend the requested resource.

1. When the browser requests a resource, it first hits the resource's Expires and Cache-Control. Expires is limited by the local time. If the local time is modified, the cache may become invalid. The maximum life cycle can be specified through Cache-control: max-age. The status still returns 200, but no data will be requested. The words from cache can be clearly seen in the browser;

2. The strong cache fails and enters the negotiation cache stage. First, verify ETag. ETag can ensure that each resource is unique, and resource changes will cause ETag changes. The server determines whether the cache is hit based on the If-None-Match value sent by the client;

3. In the negotiation cache Last-Modify/If-Modify-Since stage, when the client requests a resource for the first time, the header returned by the server will add Last-Modify. Last-modify is a time mark indicating the last modification time of the resource. When requesting the resource again, the request header will contain If-Modify-Since, which is the Last-Modify returned before caching. After receiving If-Modify-Since, the server determines whether the cache is hit based on the last modification time of the resource.

## Browser caching mechanism Forced caching && Negotiated caching

The way the browser communicates with the server is the response mode, that is: the browser initiates an HTTP request - the server responds to the request. Then after the browser initiates the request to the server for the first time and gets the request result, it will decide whether to cache the result based on the cache flag in the HTTP header of the response message. If it is, it will store the request result and cache flag in the browser cache. The simple process is as follows:

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/487144abaada4b9a8b34bc9375191ec7~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

From the above figure, we can know:

- Every time the browser initiates a request, it will first search for the result of the request and the cache flag in the browser cache;
- Every time the browser gets the returned request result, it will store the result and cache flag in the browser cache.

The above two conclusions are the key to the browser cache mechanism. It ensures the cache storage and reading of each request. As long as we understand the usage rules of the browser cache, all problems will be solved. For easy understanding, the cache process is divided into two parts, namely `forced cache` and `negotiated cache`, according to whether it is necessary to re-initiate HTTP request to the server.

### Forced cache

`Forced cache is the process of searching the browser cache for the request result and deciding whether to use the cache result according to the cache rule of the result`. When the browser initiates a request to the server, the server will put the cache rule into the HTTP header of the HTTP response message and return it to the browser together with the request result. The fields that control forced cache are `Expires` and `Cache-Control`, among which Cache-Control has a higher priority than Expires.

There are three main situations of forced caching (the negotiation cache process is not analyzed for the time being), as follows:

1. If the cache result and cache identifier do not exist, the forced cache is invalid, and a request is directly made to the server (consistent with the first request);

2. If the cache result and cache identifier exist, but the result has expired, the forced cache is invalid, and the negotiated cache is used;

3. If the cache result and cache identifier exist, and the result has not expired, the forced cache is effective, and the result is directly returned

### Negotiated Cache

`Negotiated cache is the process in which the browser sends a request to the server with the cache identifier after the forced cache is invalid, and the server decides whether to use the cache based on the cache identifier`. Similarly, the negotiated cache identifier is also returned to the browser in the HTTP header of the response message together with the request result. The fields that control the negotiated cache are: Last-Modified / If-Modified-Since and Etag / If-None-Match, among which Etag / If-None-Match has a higher priority than Last-Modified / If-Modified-Since. There are two main situations for negotiation cache:

1. Negotiation cache takes effect, return 304;

2. Negotiation cache fails, return 200 and request result.

## Let's talk about processes, threads and coroutines

A process is a dynamic execution process of a program with certain independent functions on a data set. It is an independent unit for resource allocation and scheduling of the operating system and a carrier for application operation. Process is an abstract concept and has never had a unified standard definition.

A thread is a single sequential control flow in program execution. It is the smallest unit of program execution flow and the basic unit of processor scheduling and dispatching. A process can have one or more threads, and each thread shares the program's memory space (that is, the memory space of the process in which it is located). A standard thread consists of a thread ID, a current instruction pointer (PC), registers, and registers.
and stack. A process consists of memory space (code, data, process space, open files) and one or more threads.

Coroutines, in English, is based on threads, but is "lighter than threads". This lightweight thread managed by programmers writing programs is called "user space thread" and has the characteristic of being invisible to the kernel.

[Difference]:
Scheduling: Threads are the basic unit of scheduling and allocation, and processes are the basic unit of resources;
Concurrency: Not only can processes be executed concurrently, but multiple threads of the same process can also be executed concurrently;
Owning resources: A process is an independent unit with resources. Threads do not own system resources, but can access resources belonging to processes.
System overhead: When creating or canceling a process, the system overhead is significantly greater than the overhead of creating or canceling a thread because the system has to allocate and recycle resources for it. However, processes have independent address spaces. When a process crashes, it will not affect other processes in protected mode, while threads are just different execution paths in a process. Threads have their own stacks and local variables, but there is no separate address space between threads. If a process dies, all threads die. Therefore, multi-process programs are more robust than multi-threaded programs, but when switching processes, they consume more resources and are less efficient.

[Relationship]:
A thread can only belong to one process, while a process can have multiple threads, but at least one thread;
Resources are allocated to processes, and all threads of the same process share all resources of the process;
Processors are allocated to threads, that is, threads actually run on processors;
Threads need to cooperate and synchronize during execution. Threads of different processes should use message communication to achieve synchronization.