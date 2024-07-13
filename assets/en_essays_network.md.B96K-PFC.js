import{_ as s,c as t,o as i,a8 as a}from"./chunks/framework.BF0lEhK2.js";const E=JSON.parse('{"title":"网络","description":"","frontmatter":{},"headers":[],"relativePath":"en/essays/network.md","filePath":"en/essays/network.md","lastUpdated":1720857820000}'),e={name:"en/essays/network.md"},p=a(`<h1 id="网络" tabindex="-1">网络 <a class="header-anchor" href="#网络" aria-label="Permalink to &quot;网络&quot;">​</a></h1><h2 id="http-和-https" tabindex="-1">HTTP 和 HTTPS <a class="header-anchor" href="#http-和-https" aria-label="Permalink to &quot;HTTP 和 HTTPS&quot;">​</a></h2><h3 id="http-和-https-的基本概念" tabindex="-1">http 和 https 的基本概念 <a class="header-anchor" href="#http-和-https-的基本概念" aria-label="Permalink to &quot;http 和 https 的基本概念&quot;">​</a></h3><ul><li><p>http: 是一个客户端和服务器端请求和应答的标准（TCP），用于从 www 服务器传输超文本到本地浏览器的超文本传输协议。</p></li><li><p>https: 是以安全为目标的 http 通道，即 http 下 加入 ssl 层进行加密。其作用是：建立一个信息安全通道，来确保数据的传输，确保网站的真实性。</p></li></ul><h3 id="http-和-https-的区别及优缺点" tabindex="-1">http 和 https 的区别及优缺点？ <a class="header-anchor" href="#http-和-https-的区别及优缺点" aria-label="Permalink to &quot;http 和 https 的区别及优缺点？&quot;">​</a></h3><ul><li><p>http 是超文本传输协议，信息是明文传输，https 协议要比 http 协议 <code>安全</code>，https 是具有安全性的 ssl 加密传输协议，可防止数据在传输过程中被窃取、改变，确保数据的完整性。</p></li><li><p>http 协议的 <code>默认端口</code> 为 80，https 的 <code>默认端口</code> 为 443。</p></li><li><p>http 的连接很简单，是无状态的。https 握手阶段比较 <code>费时</code>，会使页面加载时间延长 50%，增加 10%~20%的耗电。</p></li><li><p>https <code>缓存</code> 不如 http 高效，会增加数据开销。</p></li><li><p>https 协议需要 ca 证书，费用较高，功能越强大的 <code>证书费</code> 用越高。</p></li><li><p>ssl 证书需要绑定 <code>域名</code>。</p></li></ul><h3 id="https-协议的工作原理" tabindex="-1">https 协议的工作原理 <a class="header-anchor" href="#https-协议的工作原理" aria-label="Permalink to &quot;https 协议的工作原理&quot;">​</a></h3><p>客户端在使用 https 方式与 Web 服务器通信时有以下几个步骤：</p><ol><li><p>客户端使用 https url 访问服务器，则要求 web 服务器 <code>建立 ssl 链接</code>。</p></li><li><p>web 服务器接收到客户端的请求之后，会 <code>将网站的证书（证书中包含了公钥），传输给客户端</code>。</p></li><li><p>客户端和 web 服务器端开始 <code>协商 SSL 链接的安全等级</code>，也就是加密等级。</p></li><li><p>客户端浏览器通过双方协商一致的安全等级，<code>建立会话密钥</code>，然后通过网站的公钥来加密会话密钥，并传送给网站。</p></li><li><p>web 服务器 <code>通过自己的私钥解密出会话密钥</code>。</p></li><li><p>web 服务器 <code>通过会话密钥加密与客户端之间的通信</code>。</p></li></ol><h2 id="tcp-三次握手" tabindex="-1">TCP 三次握手 <a class="header-anchor" href="#tcp-三次握手" aria-label="Permalink to &quot;TCP 三次握手&quot;">​</a></h2><p>第一次握手: <code>建立连接时，客户端发送 syn 包（syn=j）到服务器，并进入 SYN_SENT 状态，等待服务器确认</code>；SYN：同步序列编号（Synchronize Sequence Numbers）。</p><p>第二次握手: <code>服务器收到 syn 包并确认客户的 SYN</code>（ack=j+1），<code>同时也发送一个自己的 SYN 包</code>（syn=k），即 SYN+ACK 包，此时服务器进入 SYN_RECV 状态；</p><p>第三次握手: <code>客户端收到服务器的 SYN+ACK 包，向服务器发送确认包 ACK（ack=k+1）</code>，此包发送完毕，客户端和服务器进入 ESTABLISHED（TCP 连接成功）状态，完成三次握手。</p><blockquote><p>握手过程中传送的包里不包含数据，三次握手完毕后，客户端与服务器才正式开始传送数据。</p></blockquote><h2 id="tcp-四次挥手" tabindex="-1">TCP 四次挥手 <a class="header-anchor" href="#tcp-四次挥手" aria-label="Permalink to &quot;TCP 四次挥手&quot;">​</a></h2><ol><li><p><code>客户端进程发出连接释放报文</code>，并且停止发送数据。释放数据报文首部，FIN=1，其序列号为 seq=u（等于前面已经传送过来的数据的最后一个字节的序号加 1），此时，<code>客户端进入 FIN-WAIT-1（终止等待 1）状态</code>。 TCP 规定，FIN 报文段即使不携带数据，也要消耗一个序号。</p></li><li><p><code>服务器收到连接释放报文，发出确认报文</code>，ACK=1，ack=u+1，并且带上自己的序列号 seq=v，此时，<code>服务端就进入了 CLOSE-WAIT（关闭等待）状态</code>。TCP 服务器通知高层的应用进程，客户端向服务器的方向就释放了，这时候处于半关闭状态，即客户端已经没有数据要发送了，但是服务器若发送数据，客户端依然要接受。这个状态还要持续一段时间，也就是整个 CLOSE-WAIT 状态持续的时间。</p></li><li><p>客户端收到服务器的确认请求后，此时，<code>客户端就进入 FIN-WAIT-2（终止等待 2）状态</code>，等待服务器发送连接释放报文（在这之前还需要接受服务器发送的最 后的数据）。</p></li><li><p><code>服务器将最后的数据发送完毕后，就向客户端发送连接释放报文</code>，FIN=1，ack=u+1，由于在半关闭状态，服务器很可能又发送了一些数据，假定此时的序列号为 seq=w，此时，服务器就进入了 LAST-ACK（最后确认）状态，等待客户端的确认。</p></li><li><p><code>客户端收到服务器的连接释放报文后，必须发出确认</code>，ACK=1，ack=w+1，而自己的序列号是 seq=u+1，此时，客户端就进入了 TIME-WAIT（时间等待）状态。注意此时 TCP 连接还没有释放，必须经过 2∗∗MSL（最长报文段寿命）的时间后，当客户端撤销相应的 TCB 后，才进入 CLOSED 状态。</p></li><li><p>服务器只要收到了客户端发出的确认，<code>立即进入 CLOSED 状态</code>。同样，撤销 TCB 后，就结束了这次的 TCP 连接。可以看到，<code>服务器结束 TCP 连接的时间要比客户端早一些</code>。</p></li></ol><h2 id="tcp-ip-如何保证数据包传输的有序可靠" tabindex="-1">TCP / IP 如何保证数据包传输的有序可靠？ <a class="header-anchor" href="#tcp-ip-如何保证数据包传输的有序可靠" aria-label="Permalink to &quot;TCP / IP 如何保证数据包传输的有序可靠？&quot;">​</a></h2><p>对字节流分段并进行编号然后 <code>通过 ACK 回复</code>和<code>超时重发</code>这两个机制来保证。</p><ol><li><p>为了保证数据包的可靠传递，发送方必须把已发送的数据包保留在缓冲区；</p></li><li><p>并为每个已发送的数据包启动一个超时定时器；</p></li><li><p>如在定时器超时之前收到了对方发来的应答信息（可能是对本包的应答，也可以是对本包后续包的应答），则释放该数据包占用的缓冲区;</p></li><li><p>否则，重传该数据包，直到收到应答或重传次数超过规定的最大次数为止。</p></li><li><p>接收方收到数据包后，先进行 CRC 校验，如果正确则把数据交给上层协议，然后给发送方发送一个累计应答包，表明该数据已收到，如果接收方正好也有数据要发给发送方，应答包也可方在数据包中捎带过去。</p></li></ol><h2 id="tcp-和-udp-的区别" tabindex="-1">TCP 和 UDP 的区别 <a class="header-anchor" href="#tcp-和-udp-的区别" aria-label="Permalink to &quot;TCP 和 UDP 的区别&quot;">​</a></h2><p>TCP 是面向<code>链接</code>的，而 UDP 是面向无连接的。</p><p>TCP 仅支持<code>单播传输</code>，UDP 提供了单播，多播，广播的功能。</p><p>TCP 的三次握手保证了连接的<code>可靠性</code>; UDP 是无连接的、不可靠的一种数据传输协议，首先不可靠性体现在无连接上，通信都不需要建立连接，对接收到的数据也不发送确认信号，发送端不知道数据是否会正确接收。</p><p>UDP 的<code>头部开销</code>比 TCP 的更小，数据传输速率更高，实时性更好。</p><h2 id="http-请求跨域问题" tabindex="-1">HTTP 请求跨域问题 <a class="header-anchor" href="#http-请求跨域问题" aria-label="Permalink to &quot;HTTP 请求跨域问题&quot;">​</a></h2><ol><li>跨域的原理</li></ol><p>跨域，是指浏览器不能执行其他网站的脚本。它是由浏览器的<code>同源策略</code>造成的。 同源策略,是浏览器对 JavaScript 实施的安全限制，只要<code>协议、域名、端口</code>有任何一个不同，都被当作是不同的域。 跨域原理，即是通过各种方式，<code>避开浏览器的安全限制</code>。</p><ol start="2"><li>解决方案</li></ol><p>最初做项目的时候，使用的是 jsonp，但存在一些问题，使用 get 请求不安全，携带数据较小，后来也用过 iframe，但只有主域相同才行，也是存在些问题，后来通过了解和学习发现使用代理和 proxy 代理配合起来使用比较方便，就引导后台按这种方式做下服务器配置，在开发中使用 proxy，在服务器上使用 nginx 代理，这样开发过程中彼此都方便，效率也高；现在 h5 新特性还有 windows.postMessage()</p><ul><li>JSONP:</li></ul><p>ajax 请求受同源策略影响，不允许进行跨域请求，而 script 标签 src 属性中的链 接却可以访问跨域的 js 脚本，利用这个特性，服务端不再返回 JSON 格式的数据，而是 返回一段调用某个函数的 js 代码，在 src 中进行了调用，这样实现了跨域。</p><p>步骤：</p><p>1） 去创建一个 script 标签</p><p>2） script 的 src 属性设置接口地址</p><p>3） 接口参数，必须要带一个自定义函数名，要不然后台无法返回数据</p><p>4） 通过定义函数名去接受返回的数据</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//动态创建 script</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> script </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;script&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置回调函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//设置 script 的 src 属性，并设置请求地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">script.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;http://localhost:3000/?callback=getData&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 让 script 生效</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.body.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(script);</span></span></code></pre></div><p>缺点:</p><p>JSON 只支持 get，因为 script 标签只能使用 get 请求； JSONP 需要后端配合返回指定格式的数据。</p><ul><li><p>document.domain 基础域名相同 子域名不同</p></li><li><p>window.name 利用在一个浏览器窗口内，载入所有的域名都是共享一个 window.name</p></li><li><p>CORS CORS(Cross-origin resource sharing)跨域资源共享 服务器设置对 CORS 的支持原理：服务器设置 Access-Control-Allow-Origin HTTP 响应头之后，浏览器将会允许跨域请求。</p></li><li><p>proxy 代理 目前常用方式,通过服务器设置代理</p></li><li><p>window.postMessage() 利用 h5 新特性 window.postMessage()</p></li></ul><h2 id="cookie、sessionstorage、localstorage-的区别" tabindex="-1">Cookie、SessionStorage、LocalStorage 的区别 <a class="header-anchor" href="#cookie、sessionstorage、localstorage-的区别" aria-label="Permalink to &quot;Cookie、SessionStorage、LocalStorage 的区别&quot;">​</a></h2><table align="center" style="width:100%;"><tr><th>关系</th><th>Cookie</th><th>SessionStorage</th><th>LocalStorage</th></tr><tr><td>相同</td><td colspan="3">存储在客户端</td></tr><tr><td>数据大小</td><td>大小不能超过4k</td><td colspan="2">比cookie大得多，可以达到5M+</td></tr><tr><td>过期时间</td><td>设置的过期时间之前一直有效</td><td>永久存储，浏览器关闭后数据不丢失除非主动删除数据</td><td>在当前浏览器窗口关闭后自动删除</td></tr><tr><td>存储方式</td><td>数据会自动的传递到服务器</td><td colspan="2">数据保存在本地</td></tr></table><h2 id="粘包问题分析与对策" tabindex="-1">粘包问题分析与对策 <a class="header-anchor" href="#粘包问题分析与对策" aria-label="Permalink to &quot;粘包问题分析与对策&quot;">​</a></h2><p>TCP 粘包是指发送方发送的若干包数据到接收方接收时粘成一包，从接收缓冲区看，后一包数据的头紧接着前一包数据的尾。</p><p>粘包出现原因:</p><p>简单得说，在流传输中出现，UDP 不会出现粘包，因为它有消息边界</p><p>粘包情况有两种，一种是<code>粘在一起的包都是完整的数据包</code>，另一种情况是<code>粘在一起的包有不完整的包</code>。</p><p>为了避免粘包现象，可采取以下几种措施：</p><ul><li><p>对于发送方引起的粘包现象，用户可通过编程设置来避免，<code>TCP 提供了强制数据立即传送的操作指令 push</code>，TCP 软件收到该操作指令后，就立即将本段数据发送出去，而不必等待发送缓冲区满;</p></li><li><p>对于接收方引起的粘包，则可通过优化程序设计、精简接收进程工作量、提高接收进程优先级等措施，使其及时接收数据，从而尽量避免出现粘包现象;</p></li><li><p>由接收方控制，将一包数据按结构字段，人为控制分多次接收，然后合并，通过这种手段来避免粘包。分包多发。</p></li></ul><p>以上提到的三种措施，都有其不足之处:</p><ul><li><p>第一种编程设置方法虽然可以避免发送方引起的粘包，但它关闭了优化算法，降低了网络发送效率，影响应用程序的性能，一般不建议使用;</p></li><li><p>第二种方法只能减少出现粘包的可能性，但并不能完全避免粘包，当发送频率较高时，或由于网络突发可能使某个时间段数据包到达接收方较快，接收方还是有可能来不及接收，从而导致粘包;</p></li><li><p>第三种方法虽然避免了粘包，但应用程序的效率较低，对实时应用的场合不适合。</p></li></ul><blockquote><p>一种比较周全的对策是：接收方创建一预处理线程，对接收到的数据包进行预处理，将粘连的包分开。实验证明这种方法是高效可行的。</p></blockquote>`,52),l=[p];function o(h,n,d,c,r,k){return i(),t("div",null,l)}const g=s(e,[["render",o]]);export{E as __pageData,g as default};
