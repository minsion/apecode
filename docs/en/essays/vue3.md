#Vue3

## What optimizations has vue3 done compared to vue2?

### Performance improvements

- `Faster Rendering`: Vue 3 has significantly improved performance in initializing, updating and destroying components, thanks to virtual DOM optimizations and compile-time performance enhancements.
- `Smaller package size`: Vue 3 further reduces the package size through Tree Shaking, so that unused functions can be removed during packaging.
- `Compile-time optimization`: The template compiler has been improved to generate more efficient rendering functions and supports optimization methods such as static promotion and pre-compilation.

### Composition API

- `Better code organization`: Composition API provides a function-based code organization method, making logic reuse and code more readable.
- `Better type support`: Composition API makes TypeScript type inference more natural and powerful

### New responsive system

- vue2 uses object.defineProperty. When operating on some properties, this return method cannot be intercepted, including adding new properties that are not available to the object, or deleting a certain property, or changing the array in the form of an array subscript. ViewModel cannot monitor it, and vue.$ needs to be called. The set() method then changes the responsive data.
- vue3 uses the proxy proxy proposed by ES6. It is equivalent to built-in executors such as set and delete. It proxies the entire object instead of the properties of the object. For arrays, the array methods are overridden inside vue3.

### Diff algorithm optimization

- Vue 2 uses a virtual DOM diff algorithm based on `double-ended comparison` (that is, comparing the same position of the old and new trees until a difference is found). Although it is simple and intuitive, it is not effective when dealing with complex and large-scale node changes. , the performance is not as good as Vue 3.
- Vue 3 adopts an optimization algorithm based on `single-ended comparison and LIS` (based on bit operations, marking the beginning and end, and then comparing from the middle, using bit operations to reduce the number of judgments), which significantly improves the performance and performance of the diff process. Efficiency, especially when handling large-scale and complex node changes, is better. At the same time, unnecessary comparisons and DOM operations are further reduced through compile-time optimizations such as static promotion and Block Tree.

## refer to

[What optimizations has vue3 done compared to vue2 - Don’t lose 20 pounds and don’t change your avatar 📝](https://juejin.cn/post/7205504065504477243)