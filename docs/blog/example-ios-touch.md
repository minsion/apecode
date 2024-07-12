---
layout: doc
---

# 关于 IOS 移动设备常见的触控问题以及解决方案

## 禁止页面放大

```js
/* 限制页面双击放大，双指放大 */
(function () {
  // 禁用双指放大
  document.documentElement.addEventListener(
    "touchstart",
    function (event) {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    },
    {
      passive: false,
    }
  );
  // 禁用双击放大
  var lastTouchEnd = 0;
  document.documentElement.addEventListener(
    "touchend",
    function (event) {
      var now = Date.now();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    },
    {
      passive: false,
    }
  );
})();
```

## 阻止页面的缓动

```js
/* 阻止ios浏览器默认行为 上下滑动缓动效果 */
(function () {
  const ios = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (ios) {
    let startY,
      endY,
      isScroll = false;
    document.body.addEventListener("touchstart", function (e) {
      startY = e.touches[0].pageY;
    });
    document.body.addEventListener(
      "touchmove",
      function (e) {
        if (isScroll) return;
        e.preventDefault();
      },
      { passive: false }
    );

    document.querySelector(".scrollDom").addEventListener(
      "touchmove",
      function (e) {
        endY = e.touches[0].pageY;
        let domHeight = this.clientHeight,
          domScrollTop = this.scrollTop,
          scrollDomHeight = document.querySelector(".scrollChildren").clientHeight;
        // 手指下滑，页面到达顶端不能继续下滑
        if ((endY > startY && domScrollTop <= 0) || (endY < startY && domHeight + domScrollTop >= scrollDomHeight)) {
          isScroll = false;
        } else {
          isScroll = true;
        }
      },
      { passive: false }
    );
  }
})();
```
