import{_ as s,c as i,o as a,a8 as t,a9 as n,aa as l}from"./chunks/framework.BF0lEhK2.js";const F=JSON.parse('{"title":"加密算法的认识及常用加密算法","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"en/blog/algorithm-encryption.md","filePath":"en/blog/algorithm-encryption.md","lastUpdated":1720857820000}'),h={name:"en/blog/algorithm-encryption.md"},p=t('<h1 id="加密算法的认识及常用加密算法" tabindex="-1">加密算法的认识及常用加密算法 <a class="header-anchor" href="#加密算法的认识及常用加密算法" aria-label="Permalink to &quot;加密算法的认识及常用加密算法&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><blockquote><p>数据加密，是一门历史悠久的技术，指通过加密算法和加密密钥将明文转变为密文，而解密则是通过解密算法和解密密钥将密文恢复为明文。</p></blockquote><p>数据加密仍是计算机系统对信息进行保护的一种最可靠的办法。它利用密码技术对信息进行加密，实现信息隐蔽，从而起到保护信息的安全的作用。</p><p>本文将分别从加密算法的分类，具体的内容，以及前端代码的实现作为切入口，下面让我们一起来学习一下。</p><h2 id="一、加密算法" tabindex="-1">一、加密算法 <a class="header-anchor" href="#一、加密算法" aria-label="Permalink to &quot;一、加密算法&quot;">​</a></h2><h3 id="_1-加密算法的分类" tabindex="-1">1. 加密算法的分类 <a class="header-anchor" href="#_1-加密算法的分类" aria-label="Permalink to &quot;1. 加密算法的分类&quot;">​</a></h3><ul><li>需要密钥 <ul><li>对称密钥加密</li><li>非对称密钥加密</li></ul></li><li>不需要密钥（或称：散列算法）</li></ul><h3 id="_2-名词解读" tabindex="-1">2. 名词解读 <a class="header-anchor" href="#_2-名词解读" aria-label="Permalink to &quot;2. 名词解读&quot;">​</a></h3><ul><li><p><strong>公钥、密钥</strong>：是一种参数，两者均是在明文转换为密文或将密文转换为明文的算法中输入的参数。</p></li><li><p><strong>对称密钥加密</strong>：对称密钥加密又叫专用密钥加密或共享密钥加密，即发送和接收数据的双方必使用<strong>相同的密钥</strong>对明文进行加密和解密运算。对称密钥加密算法主要包括：<code>DES、3DES、IDEA、RC5、RC6</code>等。</p></li></ul><p><img src="'+n+'" alt="1.png"></p><ul><li><strong>非对称密钥加密</strong>：非对称加密算法<strong>需要两个密钥</strong>：公开密钥（<code>publickey</code>）和私有密钥（privatekey:简称私钥）。公钥与私钥是一对，如果用公钥对数据进行加密，只有用对应的私钥才能解密。非对称密钥加密算法主要包括：<code>RSA「最广泛」、Elgamal、背包算法、Rabin、D-H、ECC（椭圆曲线加密算法）</code>等。</li></ul><p><img src="'+l+`" alt="2.png"></p><p>「 公钥-密钥：互相作用 」</p><ul><li><p>使用公钥进行加密的时候，必须使用对应的密钥进行解密。</p></li><li><p>使用密钥进行加密的时候，必须使用同等对应的公钥来解密。</p></li><li><p><strong>散列算法</strong>：散列算法（<code>Secure Hash Algorithm</code>）是一个<strong>密码散列函数家族</strong>，是 FIPS 所认证的安全散列算法。能计算出一个数字消息所对应到的，长度固定的字符串（又称消息摘要）的算法。且若输入的消息不同，它们对应到不同字符串的机率很高。散列算法主要包括：<code>SHA家族（SHA-1、SHA-224、SHA-256、SHA-384，和SHA-512）、MD5</code>等。</p></li></ul><h2 id="二、常见加密算法实现" tabindex="-1">二、常见加密算法实现 <a class="header-anchor" href="#二、常见加密算法实现" aria-label="Permalink to &quot;二、常见加密算法实现&quot;">​</a></h2><h3 id="_1-ase「对称密钥加密」" tabindex="-1">1. ASE「对称密钥加密」 <a class="header-anchor" href="#_1-ase「对称密钥加密」" aria-label="Permalink to &quot;1. ASE「对称密钥加密」&quot;">​</a></h3><p>AES 高级加密标准（<code>Advanced Encryption Standard</code>），这个标准用来替代原先的 DES（Data Encryption Standard），AES 的区块长度固定为 128 位，密钥长度则可以是 128，192 或 256 位。</p><p><a href="https://github.com/brix/crypto-js" target="_blank" rel="noreferrer">👉 crypto-js.js github 仓库</a></p><p><a href="https://www.bootcdn.cn/crypto-js/" target="_blank" rel="noreferrer">👉 crypto-js.js BootCDN</a></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.bootcdn.net/ajax/libs/crypto-js/4.0.0/crypto-js.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 需要加密的内容</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> secretKey </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;secret-key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 密钥</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Encrypt</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ciphertext </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CryptoJS.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">encrypt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str, secretKey).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Encrypt:&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ciphertext); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;U2FsdGVkX19f+yy4jSDE6ZVtam6BWzx+MiKzHKx7bsI=&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Decrypt</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bytes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CryptoJS.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">decrypt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ciphertext, secretKey);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> originalText </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bytes.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CryptoJS.enc.Utf8);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Decrypt:&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> originalText); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;value&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="_2-rsa「非对称密钥加密」" tabindex="-1">2. RSA「非对称密钥加密」 <a class="header-anchor" href="#_2-rsa「非对称密钥加密」" aria-label="Permalink to &quot;2. RSA「非对称密钥加密」&quot;">​</a></h3><p>RSA 公开密钥密码体制是一种使用不同的加密密钥与解密密钥，“由已知加密密钥推导出解密密钥在计算上是不可行的”密码体制。</p><p><a href="http://travistidwell.com/jsencrypt/" target="_blank" rel="noreferrer">👉 jsencrypt 官网</a></p><p><a href="https://www.bootcdn.cn/jsencrypt/" target="_blank" rel="noreferrer">👉 jsencrypt BootCDN</a></p><h3 id="_3-md5「散列算法」" tabindex="-1">3. MD5「散列算法」 <a class="header-anchor" href="#_3-md5「散列算法」" aria-label="Permalink to &quot;3. MD5「散列算法」&quot;">​</a></h3><p>MD5 信息摘要算法（<code>Message-Digest Algorithm</code>），一种被广泛使用的密码散列函数，可以产生出一个 128 位（16 字节）的散列值（hash value），用于确保信息传输完整一致。</p><p><a href="https://www.javascriptcn.com/post/34190" target="_blank" rel="noreferrer">👉 blueimp-md5.js 教程</a></p><p><a href="https://www.bootcdn.cn/blueimp-md5/" target="_blank" rel="noreferrer">👉 blueimp-md5.js BootCDN</a></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- blueimp-md5 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.bootcdn.net/ajax/libs/blueimp-md5/2.18.0/js/md5.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 需要加密的内容</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * Calculates MD5 value for a given string.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * If a key is provided, calculates the HMAC-MD5 value.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * Returns a Hex encoded string unless the raw argument is given.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * @param {string} string Input string</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * @param {string} [key] HMAC key</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * @param {boolean} [raw] Raw output switch</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * @returns {string} MD5 output</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`加密前：\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 加密前：value</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`直接加密结果：\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">md5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// index.html:49 直接加密结果：2063c1608d6e0baf80249c42e2be5804</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`添加HMAC Key，加密结果：\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">md5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;key&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// index.html:50 添加HMAC Key，加密结果：01433efd5f16327ea4b31144572c67f6</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`原始输出，加密结果：\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">md5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// index.html:51 原始输出，加密结果： cÁ\`n\v¯$Bâ¾X</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>以上便是今天的全部内容，通过本文我们认识到了加密算法的分类，以及一些常见的加密算法，通过插件形式快速地实现了简单的数据加密功能。</p><br><br><br><p><code>最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，感谢您的观看！</code></p><p>参考 blog：</p><p><a href="https://blog.csdn.net/baidu_22254181/article/details/82594072" target="_blank" rel="noreferrer">浅谈常见的七种加密算法及实现-零壹技术栈</a></p><p><a href="https://www.cnblogs.com/wjrblogs/p/13730128.html" target="_blank" rel="noreferrer">常见加密算法的 JS 实现-1ndex</a></p>`,39),k=[p];function e(r,E,d,g,o,y){return a(),i("div",null,k)}const u=s(h,[["render",e]]);export{F as __pageData,u as default};
