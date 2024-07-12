---
layout: doc
---

# PannellumJS 快速搭建属于你的全景查看器

> A Lightweight Panorama Viewer for the Web. Pannellum is a lightweight, free, and open source panorama viewer for the web. Built using HTML5, CSS3, JavaScript, and WebGL, it is plug-in free.

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/054c3082ccee43dab8519d387471aa0a~tplv-k3u1fbpfcp-watermark.image?)

web 中一个轻量级的全景查看器。[官方入口](https://pannellum.org/)

让我们来看看官网的一个 demo：

[代码片段](https://code.juejin.cn/pen/7126545096878751757)

## 前置知识

实现全景查看器，PannelumJS 有三种方式：`equirectangular`, `cubemap`, `multires`。

### equirectangular

全景图 / 等距圆柱投影（equirectangular）：是一种广角图。源自于传统[平面](<https://zh.wikipedia.org/wiki/%E5%B9%B3%E9%9D%A2_(%E6%95%B0%E5%AD%A6)> "平面 (数学)")的概念，水平视角包含完整一周 360°，但受限于二度空间，无法完整呈现出置身于[球体](https://zh.wikipedia.org/wiki/%E7%90%83%E9%AB%94 "球体")，或是[立方体](https://zh.wikipedia.org/wiki/%E7%AB%8B%E6%96%B9%E9%AB%94 "立方体")内部的那种三维的立体空间之视觉效果，谓之为全景。在多重照片接合时，离画面中地平在线下越远，变形会越大，需要将照片的中线固定、上下端都左右来开来接合图片，而直线将呈现曲型。

![360-degree_Panorama_of_the_Southern_Sky.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0dc76f75f0f543b59a0dbcce6e2a533d~tplv-k3u1fbpfcp-watermark.image?)

![panorama.jpg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5f5029c23b94fb8b8812754a902cbb5~tplv-k3u1fbpfcp-watermark.image?)

### cubemap

立方体贴图（cubemap）：一种以立方体结构组织的，使用多个纹理组合映射的，每个 2D 纹理组成立方体的一个面的纹理类型。因此，每一个立方体必定会有 6 个 2D 纹理。

立面展开效果图
![R-C.jpg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ae2f697dcba14c99a66730296372f14f~tplv-k3u1fbpfcp-watermark.image)

![cabemap-实景.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da383a00ce8540f181a353121bed5a2c~tplv-k3u1fbpfcp-watermark.image?)

## 常用参数

PannellumJS 官方文档已经完整地记录了参数的使用说明，在这里则主要对常用的参数进行介绍，如果查看全部参数 [传送门](https://pannellum.org/documentation/reference/)

- type：指定全景创建方式。`equirectangular`, `cubemap`, `multires`, 默认 `equirectangular`。
- hotSpots：创建一个热点显示在全景视窗中。
  - pitch: 指定热点的垂直位置。
  - yaw: 指定热点的水平位置。
  - type: 热点类型：`info`, `scene`。
  - text：鼠标经过悬浮显示的文字信息。
  - cssClass：自定义热点类名，默认样式会被清除。
  - sceneId：指定场景热点要链接到的场景的 ID。
- preview：设定场景加载时，显示的封面图。
- sceneFadeDuration：场景切换过渡所花费的时间。
- autoRotate：自动转动速率。
- autoRotateInactivityDelay：在用户活动停止后自动旋转全景。
- autoLoad：初次进入，是否自动加载场景。
- hotSpotDebug：如果为 true，则单击鼠标按钮时，鼠标指针的俯仰和偏航将记录到控制台。默认为 false。
- showControlle：是否显示控制器。
- orientationOnByDefault：是否开启 vr 模式，需要在 https 中进行访问。
- on：内置事件监听绑定函数
  - load: 全景加载完成
  - scenechange：场景切换时候触发
  - …
- …

## 场景搭建

```html
<!DOCTYPE html>
<html lang="ch-ZN">
  <head>
    <meta charset="UTF-8" />
    <title>pannellumJS - 单场景</title>
    <link href="https://cdn.bootcdn.net/ajax/libs/pannellum/2.5.6/pannellum.css" rel="stylesheet" />
    * { margin: 0; padding: 0; }
  </head>
  <body>
    <div id="container"></div>
  </body>
  <script src="https://cdn.bootcdn.net/ajax/libs/pannellum/2.5.6/pannellum.js"></script>
  <script>
    var width = window.innerWidth;
    var height = window.innerHeight;
    var container = document.getElementById("container");
    container.style.width = `${width}px`;
    container.style.height = `${height}px`;

    // 配置
    var view = pannellum.viewer("container", {
      type: "cubemap", // 采用立方体方式渲染
      cubeMap: [
        // 依次加载所需要的纹理贴图（位置顺序是固定的）
        "https://gw.alicdn.com/imgextra/i3/O1CN01550SRA1JcwWgs0sIj_!!6000000001050-0-tps-1500-1500.jpg",
        "https://img.alicdn.com/imgextra/i4/O1CN01e796bV1P2CRfCQkrA_!!6000000001782-0-tps-1500-1500.jpg",
        "https://img.alicdn.com/imgextra/i4/O1CN01GcW84X29SHK4oJlWc_!!6000000008066-0-tps-1500-1500.jpg",
        "https://img.alicdn.com/imgextra/i2/O1CN01ZHLck11GX2ZgBHA4o_!!6000000000631-0-tps-1500-1500.jpg",
        "https://img.alicdn.com/imgextra/i2/O1CN019c9xKu1ig1aC7pWPk_!!6000000004441-0-tps-1500-1500.jpg",
        "https://img.alicdn.com/imgextra/i4/O1CN01XfaKOu1kzNYODz7HD_!!6000000004754-0-tps-1500-1500.jpg",
      ],
    });
  </script>
</html>
```

## 多场景搭建

```html
<!DOCTYPE html>
<html lang="ch-ZN">
  <head>
    <meta charset="UTF-8" />
    <title>pannellumJS - 多场景</title>
    <!-- pannellumCSS CDN -->
    <link href="https://cdn.bootcdn.net/ajax/libs/pannellum/2.5.6/pannellum.css" rel="stylesheet" />
    <style>
      * {
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <!-- 承载容器 -->
    <div id="container"></div>
  </body>
  <!-- pannellumJS CDN -->
  <script src="https://cdn.bootcdn.net/ajax/libs/pannellum/2.5.6/pannellum.js"></script>
  <script>
    // 设置承载容器的宽度高度撑满浏览器可视区域
    var width = window.innerWidth;
    var height = window.innerHeight;
    var container = document.getElementById("container");
    container.style.width = `${width}px`;
    container.style.height = `${height}px`;

    var firstScene = "living";
    var viewer = pannellum.viewer("container", {
      default: {
        firstScene, // 设置首次显示场景
        sceneFadeDuration: 1000, // 场景切换过渡时间
      },
      scenes: {
        // 场景 - 客厅
        living: {
          sceneId: "living",
          type: "equirectangular",
          panorama: 'https://img.alicdn.com/imgextra/i2/6000000004217/O1CN01djW9bE1h1QprTMP5d_!!6000000004217-0-hotel.jpg',,
          hotSpots: [
            {
              pitch: -26,
              yaw: -125,
              text: "进入场景2"
              type: "scenes"
              scenesId: "room"
            }
          ],
        },

        // 场景 - 房间
        room: {
          sceneId: "room",
          type: "cubemap",
          preview: "https://img.alicdn.com/imgextra/i1/O1CN01dVOIEe1IhEcaIPw2z_!!6000000000924-0-tps-100-100.jpg",
          cubeMap: [
            // 图片方位图顺序必须一致
            "https://gw.alicdn.com/imgextra/i3/O1CN01550SRA1JcwWgs0sIj_!!6000000001050-0-tps-1500-1500.jpg",
            "https://img.alicdn.com/imgextra/i4/O1CN01e796bV1P2CRfCQkrA_!!6000000001782-0-tps-1500-1500.jpg",
            "https://img.alicdn.com/imgextra/i4/O1CN01GcW84X29SHK4oJlWc_!!6000000008066-0-tps-1500-1500.jpg",
            "https://img.alicdn.com/imgextra/i2/O1CN01ZHLck11GX2ZgBHA4o_!!6000000000631-0-tps-1500-1500.jpg",
            "https://img.alicdn.com/imgextra/i2/O1CN019c9xKu1ig1aC7pWPk_!!6000000004441-0-tps-1500-1500.jpg",
            "https://img.alicdn.com/imgextra/i4/O1CN01XfaKOu1kzNYODz7HD_!!6000000004754-0-tps-1500-1500.jpg",
          ],
          hotSpots: [
            {
              pitch: 0,
              yaw: -10,
              text: "进入场景1"
              type: "scenes"
              scenesId: "living"
            }
          ],
        },
      },
    });
  </script>
</html>
```

## 进阶

### 自定义控制器

- [Custom controls - pannellumJS](https://pannellum.org/documentation/examples/custom-controls/)

### 自定义热点样式

- [Custom hot spots - pannellumJS](https://pannellum.org/documentation/examples/custom-hot-spots/)

### 场景初次动画

在配置中，通过 `yaw` `pitch` 设置视觉初始角度，然后在 `load` 事件，重新设置视觉角度值，便能产生动画效果。

![全景入场动画.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8834fc19253344e5bd86fb09ef2efd44~tplv-k3u1fbpfcp-watermark.image?)

```
var viewer = pannellum.viewer("container", {
  type: "cubemap",
  preview: "https://img.alicdn.com/imgextra/i1/O1CN01dVOIEe1IhEcaIPw2z_!!6000000000924-0-tps-100-100.jpg",
  cubeMap: [
    "https://gw.alicdn.com/imgextra/i3/O1CN01550SRA1JcwWgs0sIj_!!6000000001050-0-tps-1500-1500.jpg",
    "https://img.alicdn.com/imgextra/i4/O1CN01e796bV1P2CRfCQkrA_!!6000000001782-0-tps-1500-1500.jpg",
    "https://img.alicdn.com/imgextra/i4/O1CN01GcW84X29SHK4oJlWc_!!6000000008066-0-tps-1500-1500.jpg",
    "https://img.alicdn.com/imgextra/i2/O1CN01ZHLck11GX2ZgBHA4o_!!6000000000631-0-tps-1500-1500.jpg",
    "https://img.alicdn.com/imgextra/i2/O1CN019c9xKu1ig1aC7pWPk_!!6000000004441-0-tps-1500-1500.jpg",
    "https://img.alicdn.com/imgextra/i4/O1CN01XfaKOu1kzNYODz7HD_!!6000000004754-0-tps-1500-1500.jpg",
  ],

  yaw: 180, // 初始视觉角度，水平偏移
  pitch: 360, // 初始视觉角度，垂直偏移
});

viewer.on("load", () => {
  viewer.setYaw(0); // 重置水平偏移角度
  viewer.setPitch(0); // 重置垂直偏移角度
});
```

### 场景切换动画

在 pannellumJS 中关于场景切换配置只有 `sceneFadeDuration` 可直接设置效果，但切换比较直接，没有场景位移的效果。

无位移效果图：
![没有切换效果.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/43eb8904053042b98a18bdbd57cc72b7~tplv-k3u1fbpfcp-watermark.image?)

有位移效果图：
![有切换效果.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/49b90d2c89384119933cc41f66c563de~tplv-k3u1fbpfcp-watermark.image?)

```js
// viewer 配置及时间监听处理
var firstScene = "living";
var viewer = pannellum.viewer("container", {
  default: {
    firstScene,
    sceneFadeDuration: 1000,
    hotSpotDebug: true,
    // 由于在加载监听函数和场景切换函数中进行了 (hfov - 10) 操作，所以需要在全局的时候配置 hfov: viewer.getHov() + 需偏移距离
    hfov: 110, // 起始水平视野，hfov 默认值为 100
  },
  // scenes,
  scenes: {
    living: {
      sceneId: "living",
      type: "cubemap",
      preview: "https://img.alicdn.com/imgextra/i1/O1CN01dVOIEe1IhEcaIPw2z_!!6000000000924-0-tps-100-100.jpg",
      cubeMap: [
        "https://gw.alicdn.com/imgextra/i3/O1CN01550SRA1JcwWgs0sIj_!!6000000001050-0-tps-1500-1500.jpg",
        "https://img.alicdn.com/imgextra/i4/O1CN01e796bV1P2CRfCQkrA_!!6000000001782-0-tps-1500-1500.jpg",
        "https://img.alicdn.com/imgextra/i4/O1CN01GcW84X29SHK4oJlWc_!!6000000008066-0-tps-1500-1500.jpg",
        "https://img.alicdn.com/imgextra/i2/O1CN01ZHLck11GX2ZgBHA4o_!!6000000000631-0-tps-1500-1500.jpg",
        "https://img.alicdn.com/imgextra/i2/O1CN019c9xKu1ig1aC7pWPk_!!6000000004441-0-tps-1500-1500.jpg",
        "https://img.alicdn.com/imgextra/i4/O1CN01XfaKOu1kzNYODz7HD_!!6000000004754-0-tps-1500-1500.jpg",
      ],
      hotSpots: [
        {
          pitch: -5.984732127927283,
          yaw: 159.5438702588048,
          type: "scene",
          text: "前往房间",
          sceneId: "room",
        },
      ],
      yaw: 100, // 设置全景图的起始偏航位置
    },
    room: {
      sceneId: "room",
      type: "cubemap",
      preview: "https://img.alicdn.com/imgextra/i1/O1CN01KU3hrj1uJNO2OdyaC_!!6000000006016-0-tps-100-100.jpg",
      cubeMap: [
        "https://img.alicdn.com/imgextra/i1/O1CN01fWDIfB1bWgC3NnVVa_!!6000000003473-0-tps-1500-1500.jpg",
        "https://img.alicdn.com/imgextra/i2/O1CN01xt97cb1YMeg4BOCbI_!!6000000003045-0-tps-1500-1500.jpg",
        "https://img.alicdn.com/imgextra/i1/O1CN01xKTq1u1DR8cdeMeYt_!!6000000000212-0-tps-1500-1500.jpg",
        "https://img.alicdn.com/imgextra/i3/O1CN01Zko8Qy1p1uCLUYBji_!!6000000005301-0-tps-1500-1500.jpg",
        "https://img.alicdn.com/imgextra/i3/O1CN01k3AVvK28W71UNWXW7_!!6000000007939-0-tps-1500-1500.jpg",
        "https://img.alicdn.com/imgextra/i1/O1CN015MBT6P1N8x3J83Fqo_!!6000000001526-0-tps-1500-1500.jpg",
      ],
      hotSpots: [
        {
          pitch: -14.205156853981782,
          yaw: -80.6414865633464,
          type: "scene",
          text: "前往客厅",
          sceneId: "living",
        },
      ],
      yaw: 0,
    },
  },
});

// 场景首次加载时，不会触发 scenechange 事件，所以需要在加载完成后，手动设置一次
viewer.on("load", (id) => {
  viewer.setHfov(viewer.getHfov() - 10);
});

viewer.on("scenechange", (id) => {
  console.warn(`正在切换至 ${id} 场景`);
  viewer.setHfov(viewer.getHfov() - 10);
});
```

### ai 模式开启

ai 模式：即开启 devicemotion 事件监听，根据手机重力感应实时调整视觉角度。

```js
default: {
  orientationOnByDefault: true, // 开启重力感应，需要 https 访问
},
```

## 参考文章

[全景图-维基百科](https://zh.wikipedia.org/wiki/%E5%85%A8%E6%99%AF%E5%9B%BE)

[实现一个 360 全景的 N 种方案-飞猪前端团队](https://juejin.cn/post/6946448087225368589)：

`测试图片来源飞猪前端团队`

[立方体贴图 Cube map-黄金裁决者](https://zhuanlan.zhihu.com/p/439219722)
