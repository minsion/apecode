import{_ as s,c as i,o as a,a8 as n}from"./chunks/framework.DpdlITVW.js";const g=JSON.parse('{"title":"微信小程序中实现定位以及逆地址解析","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"blog/program-position.md","filePath":"blog/program-position.md","lastUpdated":1720777384000}'),p={name:"blog/program-position.md"},t=n(`<h1 id="微信小程序中实现定位以及逆地址解析" tabindex="-1">微信小程序中实现定位以及逆地址解析 <a class="header-anchor" href="#微信小程序中实现定位以及逆地址解析" aria-label="Permalink to &quot;微信小程序中实现定位以及逆地址解析&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>在微信小程序开发中，我们可以提前获取用户的地理位置，为用户提供更好的服务，因此我们今天就来实现一下。</p><h2 id="一、原理" tabindex="-1">一、原理 <a class="header-anchor" href="#一、原理" aria-label="Permalink to &quot;一、原理&quot;">​</a></h2><p>通过微信小程序的开发文档，我们可以发现 wx.getLoaction 能够获取到用户所在位置的经纬度，并且通过腾讯地图提供的逆地址解析中可以将经纬度信息还原成城市名称。 在实际开发当中，我们可以分为两个部分，一个是腾讯地图 key 的获取，另一个是微信开发端的编码。</p><h2 id="二、腾讯地图-key" tabindex="-1">二、腾讯地图 key <a class="header-anchor" href="#二、腾讯地图-key" aria-label="Permalink to &quot;二、腾讯地图 key&quot;">​</a></h2><ul><li><p>创建一个腾讯地图的账号。（需要手机号和邮箱号）<a href="https://lbs.qq.com/" target="_blank" rel="noreferrer">腾讯地图官网</a></p></li><li><p>登录成功之后可以点击右上角的控制台就会出现下图的界面，点击创建应用数量，进入到应用的管理页面。</p></li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e162bebc3e164dc58d6b98fa2dd3acb5~tplv-k3u1fbpfcp-zoom-1.image" alt="在这里插入图片描述"></p><ul><li><p>创建一个应用.。（应用名称、应用类型如实填写即可） <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7e72b8159424e64a873ddc937f66f45~tplv-k3u1fbpfcp-zoom-1.image" alt="在这里插入图片描述"></p></li><li><p>随即在我的应用中会显示刚刚创建的，点击添加 key <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b3943a91d883461a971e033a79bf509f~tplv-k3u1fbpfcp-zoom-1.image" alt="在这里插入图片描述"></p></li><li><p>信息如实填写就可以了，<code>注意：启用产品选项要勾选 WebServiceAPI 和 微信小程序</code>，如果忘记勾选的也可以在创建 key 之后重新编辑配置。<code>APPID需要到微信小程序网站查阅</code><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fc6820debafa470f8fe904f750312eb2~tplv-k3u1fbpfcp-zoom-1.image" alt="在这里插入图片描述"></p></li><li><p>添加成功之后，在创建好的应用可以看到 key。 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2a05348ed0314fceb5c22e4792d71ba1~tplv-k3u1fbpfcp-zoom-1.image" alt="在这里插入图片描述"></p></li></ul><h2 id="二、编码" tabindex="-1">二、编码 <a class="header-anchor" href="#二、编码" aria-label="Permalink to &quot;二、编码&quot;">​</a></h2><h3 id="_1-app-json" tabindex="-1">1. App.json <a class="header-anchor" href="#_1-app-json" aria-label="Permalink to &quot;1. App.json&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;permission&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scope.userLocation&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;desc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;为了更好的服务体验，我们希望获取你的位置&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_2-javascript" tabindex="-1">2. JavaScript <a class="header-anchor" href="#_2-javascript" aria-label="Permalink to &quot;2. JavaScript&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这里我选择在onShow中触发，可以根据具体情况设置触发事件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  locationObj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onShow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 调用定位方法</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUserLocation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 定位方法</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUserLocation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _this </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  wx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;gcj02&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// type有两中类型，gcj02 是腾讯地图所能解析的</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      _this.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        locationObj: res</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      })</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 调用获取城市名称方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      _this.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取定位城市名称方法</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _this </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  wx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`https://apis.map.qq.com/ws/geocoder/v1/?key=key填写的位置&amp;location=\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _this.data.locationObj.latitude </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;,&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_this.data.locationObj.longitude,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 此处返回的就是需要查询的城市名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div><h3 id="_3-返回值" tabindex="-1">3. 返回值 <a class="header-anchor" href="#_3-返回值" aria-label="Permalink to &quot;3. 返回值&quot;">​</a></h3><p>逆地址解析之后的返回值如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd40ead9877f4c8eb407be4528fed395~tplv-k3u1fbpfcp-zoom-1.image" alt="在这里插入图片描述"></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>综上所述，便是今天介绍的微信小程序中定位及逆地址解析的实现方式。更多的参数信息，可以查阅本文末的开发文档链接。</p><p><code>最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，感谢您的观看！</code></p><p>微信开发文档：<a href="https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html" target="_blank" rel="noreferrer">wx.getLocation(Object object)</a></p><p>腾讯开发文档：<a href="https://lbs.qq.com/service/webService/webServiceGuide/webServiceGcoder" target="_blank" rel="noreferrer">逆地址解析</a></p><p>原 文 链 接 ：<a href="https://blog.csdn.net/weixin_44808483?spm=1011.2124.3001.5343" target="_blank" rel="noreferrer">JhouXu 博客</a></p>`,23),l=[t];function e(h,k,r,E,o,c){return a(),i("div",null,l)}const y=s(p,[["render",e]]);export{g as __pageData,y as default};
