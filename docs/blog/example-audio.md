---
layout: doc
---

# audio 自动播放产生的困扰解决方案

## 项目场景

如今，h5 的开发越来越多，其中作为 h5 的背景音乐是开发必不可少的一个功能模块。

比如这样：

![在这里插入图片描述](/images/blog/example/20210220154829553.png)

## 问题描述

为 audio 标签设置了 autoplay 没有效果，并不会自动播放。

官方定义：浏览器为了提高用户体验，减少性能消耗，只有在发生用户行为的时候才可以播放音频或视频。而页面加载，定时请求不属于用户行为，因此被禁止自动播放。

## 解决方案

实现思路，首先音乐以及动画默认开启；判断是否为微信内置浏览器，根据 wx-jsdk，实现自动播放，否则在限制自动播放的浏览器下是静音，需要用户手动播放；或者可以初始化的时候
然后判断是否为微信内置浏览器，如果是就播放，否则显示未播放按钮，引导用户点击图标从而实现播放功能。以下为主要代码。

- hmtl

```html
<div class="n-bgmusic">
  <div class="n-bgmusic-img">
    <img src="https://s3.ax1x.com/2021/02/24/yOfu3F.png" />
  </div>
  <!-- 在这里我并没有直接隐藏audio元素，这样可以方便检测是否播放和暂停了，需要隐藏的话可以设置样式 .n-bgmusic-music { display: none } -->
  <audio
    class="n-bgmusic-music"
    controls="controls"
    preload="load"
    autoplay="autoplay"
    loop="loop"
    src="http://m701.music.126.net/20210426183230/713ac2b215d49da62b627bce606a7af9/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/7564479985/d0de/330f/68b3/86b3a474f213f9026f340672157b749c.mp3"
  >
    您的浏览器尚未支持播放当前音乐，建议更换浏览器再来。
  </audio>
</div>
```

- css

```css
html,
body {
  margin: 0;
  padding: 0;
}

.n-bgmusic {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.n-bgmusic-img {
  display: inline-block;
  width: 85px;
  height: 98px;
  -webkit-animation: bgRotate 2s linear 0s infinite normal;
  animation: bgRotate 2s linear 0s infinite normal;
}

@-webkit-keyframes bgRotate {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes bgRotate {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
```

- js

写法 一：

```js
musicPlayPause(".n-bgmusic-img img", ".n-bgmusic-music");

/**
 * 控制背景音乐动画的播放暂停的切换，以及控制音乐播放暂停
 * @param { string } img 图片节点img
 * @param { string } music 音乐audio元素节点
 */
function musicPlayPause(img, music) {
  let imgDom = document.querySelector(img);
  let musicDom = document.querySelector(music);
  let isOpen = true;

  // 监听微信内置浏览器是否加载完成（只有微信端口才可以调用）
  document.addEventListener(
    "WeixinJSBridgeReady",
    function () {
      musicPlay();
    },
    false
  );

  // 绑定音乐图片的点击事件
  imgDom.addEventListener("click", function () {
    if (isOpen) {
      musicPause();
    } else {
      musicPlay();
    }
  });

  // 播放
  function musicPlay() {
    musicDom.play();
    imgDom.src = "https://s3.ax1x.com/2021/02/24/yOfu3F.png";
    isOpen = true;
  }

  // 暂停
  function musicPause() {
    musicDom.pause();
    imgDom.src = "https://s3.ax1x.com/2021/02/24/yOfKc4.png";
    isOpen = false;
  }
}
```

写法 二 :

```js
/**
 * 关于背景音乐和动画控制的Music Class
 * @param { DOM } imgDOM 需要控制的 img标签.
 * @param { DOM } audioDOM 需要控制的 audio标签.
 * @param { String } playImg 播放图片路径.
 * @param { String } pauseImg 暂停图片路径.
 * retrun { Object } Music 实例对象
 */
class Music {
  constructor(imgDOM, audioDOM, playImg, pauseImg) {
    this.imgDOM = imgDOM;
    this.audioDOM = audioDOM;
    this.playImg = playImg;
    this.pauseImg = pauseImg;
    this.isOpen = true; // 默认开启
  }
  init() {
    this.autoplay();

    let that = this;
    this.imgDOM.addEventListener("click", function () {
      if (that.isOpen) {
        that.pauseMusic();
      } else {
        that.playMusic();
      }
    });
  }
  autoplay() {
    let that = this;
    document.addEventListener(
      "WeixinJSBridgeReady",
      function () {
        that.playMusic();
        that.isOpen = true;
      },
      false
    );
  }
  playMusic() {
    this.audioDOM.play();
    this.imgDOM.src = this.playImg;
    this.isOpen = true;
  }
  pauseMusic() {
    this.audioDOM.pause();
    this.imgDOM.src = this.pauseImg;
    this.isOpen = false;
  }
}

let imgDOM = $x(".n-bgmusic-img img");
let audioDOM = $x(".n-bgmusic-music");

const music = new Music(
  imgDOM,
  audioDOM,
  "https://s3.ax1x.com/2021/02/24/yOfu3F.png",
  "https://s3.ax1x.com/2021/02/24/yOfKc4.png"
).init();

/**
 * 获取函数节点
 * @param { String } strDom 需要获取DOM节点的名称。
 * @return { DOM } 返回DOM节点树。
 */
function $x(strDom) {
  return document.querySelector(strDom);
}
```
