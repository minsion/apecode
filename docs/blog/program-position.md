---
layout: doc
---

# 微信小程序中实现定位以及逆地址解析

## 前言

在微信小程序开发中，我们可以提前获取用户的地理位置，为用户提供更好的服务，因此我们今天就来实现一下。

## 一、原理

通过微信小程序的开发文档，我们可以发现 wx.getLoaction 能够获取到用户所在位置的经纬度，并且通过腾讯地图提供的逆地址解析中可以将经纬度信息还原成城市名称。
在实际开发当中，我们可以分为两个部分，一个是腾讯地图 key 的获取，另一个是微信开发端的编码。

## 二、腾讯地图 key

- 创建一个腾讯地图的账号。（需要手机号和邮箱号）[腾讯地图官网](https://lbs.qq.com/)

- 登录成功之后可以点击右上角的控制台就会出现下图的界面，点击创建应用数量，进入到应用的管理页面。

![在这里插入图片描述](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e162bebc3e164dc58d6b98fa2dd3acb5~tplv-k3u1fbpfcp-zoom-1.image)

- 创建一个应用.。（应用名称、应用类型如实填写即可）
  ![在这里插入图片描述](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7e72b8159424e64a873ddc937f66f45~tplv-k3u1fbpfcp-zoom-1.image)

- 随即在我的应用中会显示刚刚创建的，点击添加 key
  ![在这里插入图片描述](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b3943a91d883461a971e033a79bf509f~tplv-k3u1fbpfcp-zoom-1.image)
- 信息如实填写就可以了，`注意：启用产品选项要勾选 WebServiceAPI 和 微信小程序`，如果忘记勾选的也可以在创建 key 之后重新编辑配置。`APPID需要到微信小程序网站查阅`
  ![在这里插入图片描述](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fc6820debafa470f8fe904f750312eb2~tplv-k3u1fbpfcp-zoom-1.image)

- 添加成功之后，在创建好的应用可以看到 key。
  ![在这里插入图片描述](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2a05348ed0314fceb5c22e4792d71ba1~tplv-k3u1fbpfcp-zoom-1.image)

## 二、编码

### 1. App.json

```json
"permission": {
  "scope.userLocation": {
    "desc": "为了更好的服务体验，我们希望获取你的位置"
  }
}
```

### 2. JavaScript

```js
// 这里我选择在onShow中触发，可以根据具体情况设置触发事件
data: {
  locationObj: {}
}

onShow: function () {
  // 调用定位方法
  this.getUserLocation();
},

// 定位方法
getUserLocation: function () {
  let _this = this
  wx.getLocation({
    type: 'gcj02', // type有两中类型，gcj02 是腾讯地图所能解析的
    success: res => {
      _this.setData({
        locationObj: res
      })
      // 调用获取城市名称方法
      _this.getCity()
    }
  })
},

// 获取定位城市名称方法
getCity: function () {
  var _this = this
  wx.request({
    url: `https://apis.map.qq.com/ws/geocoder/v1/?key=key填写的位置&location=`+ _this.data.locationObj.latitude + ',' +_this.data.locationObj.longitude,
    success: res => {
      console.log(res) // 此处返回的就是需要查询的城市名称
    }
  })
},
```

### 3. 返回值

逆地址解析之后的返回值如下：

![在这里插入图片描述](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd40ead9877f4c8eb407be4528fed395~tplv-k3u1fbpfcp-zoom-1.image)

## 总结

综上所述，便是今天介绍的微信小程序中定位及逆地址解析的实现方式。更多的参数信息，可以查阅本文末的开发文档链接。

`最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，感谢您的观看！`

微信开发文档：[wx.getLocation(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html)

腾讯开发文档：[逆地址解析](https://lbs.qq.com/service/webService/webServiceGuide/webServiceGcoder)

原 文 链 接 ：[JhouXu 博客](https://blog.csdn.net/weixin_44808483?spm=1011.2124.3001.5343)
