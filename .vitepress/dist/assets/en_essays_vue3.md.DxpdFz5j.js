import{_ as e,c as o,o as t,a9 as a}from"./chunks/framework.C-fnN7C-.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"en/essays/vue3.md","filePath":"en/essays/vue3.md","lastUpdated":1720966260000}'),i={name:"en/essays/vue3.md"},n=a('<p>#Vue3</p><h2 id="what-optimizations-has-vue3-done-compared-to-vue2" tabindex="-1">What optimizations has vue3 done compared to vue2? <a class="header-anchor" href="#what-optimizations-has-vue3-done-compared-to-vue2" aria-label="Permalink to &quot;What optimizations has vue3 done compared to vue2?&quot;">​</a></h2><h3 id="performance-improvements" tabindex="-1">Performance improvements <a class="header-anchor" href="#performance-improvements" aria-label="Permalink to &quot;Performance improvements&quot;">​</a></h3><ul><li><code>Faster Rendering</code>: Vue 3 has significantly improved performance in initializing, updating and destroying components, thanks to virtual DOM optimizations and compile-time performance enhancements.</li><li><code>Smaller package size</code>: Vue 3 further reduces the package size through Tree Shaking, so that unused functions can be removed during packaging.</li><li><code>Compile-time optimization</code>: The template compiler has been improved to generate more efficient rendering functions and supports optimization methods such as static promotion and pre-compilation.</li></ul><h3 id="composition-api" tabindex="-1">Composition API <a class="header-anchor" href="#composition-api" aria-label="Permalink to &quot;Composition API&quot;">​</a></h3><ul><li><code>Better code organization</code>: Composition API provides a function-based code organization method, making logic reuse and code more readable.</li><li><code>Better type support</code>: Composition API makes TypeScript type inference more natural and powerful</li></ul><h3 id="new-responsive-system" tabindex="-1">New responsive system <a class="header-anchor" href="#new-responsive-system" aria-label="Permalink to &quot;New responsive system&quot;">​</a></h3><ul><li>vue2 uses object.defineProperty. When operating on some properties, this return method cannot be intercepted, including adding new properties that are not available to the object, or deleting a certain property, or changing the array in the form of an array subscript. ViewModel cannot monitor it, and vue.$ needs to be called. The set() method then changes the responsive data.</li><li>vue3 uses the proxy proxy proposed by ES6. It is equivalent to built-in executors such as set and delete. It proxies the entire object instead of the properties of the object. For arrays, the array methods are overridden inside vue3.</li></ul><h3 id="diff-algorithm-optimization" tabindex="-1">Diff algorithm optimization <a class="header-anchor" href="#diff-algorithm-optimization" aria-label="Permalink to &quot;Diff algorithm optimization&quot;">​</a></h3><ul><li>Vue 2 uses a virtual DOM diff algorithm based on <code>double-ended comparison</code> (that is, comparing the same position of the old and new trees until a difference is found). Although it is simple and intuitive, it is not effective when dealing with complex and large-scale node changes. , the performance is not as good as Vue 3.</li><li>Vue 3 adopts an optimization algorithm based on <code>single-ended comparison and LIS</code> (based on bit operations, marking the beginning and end, and then comparing from the middle, using bit operations to reduce the number of judgments), which significantly improves the performance and performance of the diff process. Efficiency, especially when handling large-scale and complex node changes, is better. At the same time, unnecessary comparisons and DOM operations are further reduced through compile-time optimizations such as static promotion and Block Tree.</li></ul><h2 id="refer-to" tabindex="-1">refer to <a class="header-anchor" href="#refer-to" aria-label="Permalink to &quot;refer to&quot;">​</a></h2><p><a href="https://juejin.cn/post/7205504065504477243" target="_blank" rel="noreferrer">What optimizations has vue3 done compared to vue2 - Don’t lose 20 pounds and don’t change your avatar 📝</a></p>',12),r=[n];function s(d,c,p,h,l,m){return t(),o("div",null,r)}const g=e(i,[["render",s]]);export{f as __pageData,g as default};