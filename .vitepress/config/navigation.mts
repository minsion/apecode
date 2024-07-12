export interface navigationItem {
  // id: string | number;
  text: string;
  desc?: string;
  link: string;
  icon?: string;
  type?: string;
}

// 开发工具
// 在线文档
// 在线工具
// 软件客户端
// const TechnicalCommunity = "技术社区"
// const DevTools = "开发工具";
// const OnlineDocument = "在线文档";
// const OnlineTools = "在线工具";
// const SoftwareClient = "软件客户端";

// 文件处理
// - 文件转换
// - 图像编辑
const FileConversion = "文件转换";
const ImageEditor = "图像编辑";

// 设计相关
// - 配色参考
// - 设计参考
// - 在线logo
const ColorReference = "配色参考";
const DesignReference = "设计参考";
const OnlineLogo = "在线logo";

// 素材资源
// - 图标素材
// - 插画素材
// - 字体素材
// - 图像素材
// - 视频素材
// - 图像视频素材
// - 音频素材
// - 模板插件
const IconSource = "图标素材";
const IllustrationSource = "插画素材";
const FontSource = "字体素材";
const ImgSource = "图像素材";
const VideoSource = "视频素材";
const ImgVideoSource = "图像视频素材";
const AudioSource = "音频素材";
const TemplatePlugin = "模板插件";

export const TechnicalCommunity: navigationItem[] = [
  {
    text: "Github",
    desc: "全球最大的程序员交流网站。",
    link: "https://github.com/",
    icon: "https://github.com/fluidicon.png",
    type: "技术社区",
  },
  {
    text: "HuggingFace",
    desc: "AI模型界的Github，開啟AI強大工具庫和預訓練模型",
    link: "https://huggingface.co/",
    icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    type: "技术社区",
  },
  {
    text: "Medium",
    desc: "好的想法在这里找到。",
    link: "https://medium.com/",
    icon: "https://miro.medium.com/v2/resize:fill:152:152/1*sHhtYhaCe2Uc3IU0IgKwIQ.png",
    type: "技术社区",
  },
  {
    text: "30SecondSofCode",
    desc: "发现满足您所有开发需求的简短代码片段。",
    link: "https://www.30secondsofcode.org/",
    icon: "https://www.30secondsofcode.org/assets/icons/icon-192x192.png",
    type: "技术社区",
  },
  {
    text: "CodePen",
    desc: "建造，测试和发现前端代码的最佳场所。",
    link: "https://codepen.io/trending",
    icon: "https://cpwebassets.codepen.io/assets/social/facebook-default-05cf522ae1d4c215ae0f09d866d97413a2204b6c9339c6e7a1b96ab1d4a7340f.png",
    type: "技术社区",
  },
  {
    text: "稀土掘金",
    desc: "掘金是面向全球中文开发者的技术内容分享与交流平台。",
    link: "https://juejin.cn/",
    icon: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/apple-touch-icon.png",
    type: "技术社区",
  },
  {
    text: "CSDN",
    desc: "全球知名中文IT技术交流平台。",
    link: "https://www.csdn.net/",
    icon: "https://img-home.csdnimg.cn/images/20201124032511.png",
    type: "技术社区",
  },
];

export const DevTools: navigationItem[] = [
  {
    text: "VSCode",
    desc: "代码编辑器，微软提供",
    link: "https://code.visualstudio.com/",
    icon: "https://code.visualstudio.com/apple-touch-icon.png",
    type: "开发工具",
  },
  {
    text: "HBuilderX",
    desc: "国产代码编辑器，uni-app的好帮手。",
    link: "https://www.dcloud.io/hbuilderx.html",
    icon: "https://qiniu-ecdn.dcloud.net.cn/uploads/images/hbuilderx/icon/hbuilderx_icon@2x.png",
    type: "开发工具",
  },
  {
    text: "IntelliJ IDEA",
    desc: "领先的 Java 和 Kotlin IDE",
    link: "https://www.jetbrains.com/idea/",
    icon: "https://www.jetbrains.com/icon-512.png?r=1234",
    type: "开发工具",
  },
];

export const OnlineDocument: navigationItem[] = [
  {
    text: "MDN Web Docs",
    desc: "自 2005 年以来记录 Web 技术，包括 CSS、HTML 和 JavaScript。",
    link: "https://developer.mozilla.org/",
    icon: "https://developer.mozilla.org/apple-touch-icon.6803c6f0.png",
    type: "在线文档",
  },
  {
    text: "现代 JavaScript 教程",
    desc: "以最新的 JavaScript 标准为基准。通过简单但足够详细的内容，为你讲解从基础到高阶的 JavaScript 相关知识。",
    link: "https://javascript.info/",
    icon: "https://javascript.info/img/favicon/apple-touch-icon-precomposed.png",
    type: "在线文档",
  },
  {
    text: "Can i use",
    desc: "提供了最新的浏览器支持表，以支持桌面和移动 Web 浏览器上的前端 Web 技术。",
    link: "https://caniuse.com/",
    icon: "https://caniuse.com/img/favicon-128.png",
    type: "在线文档",
  },
  {
    text: "Code Points",
    desc: "Unicode 标准中定义的所有字符。字符码点(code point)信息。",
    link: "https://codepoints.net/",
    icon: "https://codepoints.net/apple-touch-icon.png",
    type: "在线文档",
  },
];

export const OnlineTools: navigationItem[] = [
  {
    text: "Gtmertrix",
    desc: "网站性能分析，在线可视化分析工具",
    link: "https://gtmetrix.com/",
    icon: "https://gtmetrix.com/static/images/documentation/meta_social/gtmetrix.png",
    type: "在线工具",
  },
  {
    text: "Easings",
    desc: "Easing functions specify the rate of change of a parameter over time.",
    link: "https://easings.net/",
    icon: "https://easings.net/96.8aa68ac4.png",
    type: "在线工具",
  },
  {
    text: "CubicBezier",
    desc: "贝塞尔曲线在线调试",
    link: "https://cubic-bezier.com/",
    icon: "",
    type: "在线工具",
  },
  {
    text: "Neumorphism",
    desc: "调试和生成 新型態的擬物化風格 的css样式代码",
    link: "https://neumorphism.io/",
    icon: "https://neumorphism.io/apple-touch-icon.png",
    type: "在线工具",
  },
  {
    text: "DBdiagram",
    desc: "Draw Entity-Relationship Diagrams, Painlessly 😎",
    link: "https://dbdiagram.io/home",
    icon: "https://cdn.holistics.io/logo-dbdiagram-notext.ico",
    type: "在线工具",
  },
  {
    text: "WebGradients",
    desc: "180个线性渐变颜色的免费集合",
    link: "https://webgradients.com/",
    icon: "https://webgradients.com/favicons/favicon-196x196.png",
    type: "在线工具",
  },
  {
    text: "LoremPicsum",
    desc: "The Lorem Ipsum for photos.",
    link: "https://picsum.photos/",
    icon: "https://picsum.photos/200",
    type: "在线工具",
  },
];

export const SoftwareClient: navigationItem[] = [
  {
    text: "Snipaste",
    desc: "截图 + 贴图",
    link: "https://zh.snipaste.com/",
    icon: "https://zh.snipaste.com/img/logo.svg",
    type: "软件客户端",
  },
  {
    text: "ScreenToGif",
    desc: "Screen, webcam and sketchboard recorder with an integrated editor",
    link: "https://www.screentogif.com/",
    icon: "https://www.screentogif.com/img/logo.d2151712.png",
    type: "软件客户端",
  },
  {
    text: "PotPlayer",
    desc: "万能格式影音视频播放器",
    link: "https://images.sftcdn.net/images/t_app-icon-s/p/d3c12354-96d3-11e6-bfbf-00163ed833e7/1418749125/potplayer-PotPlayer_logo_(2017).png",
    icon: "",
    type: "软件客户端",
  },
  {
    text: "Xmind",
    desc: "一款 全功能 的思维导图和头脑风暴软件。",
    link: "https://xmind.cn/",
    icon: "https://xmind.cn/webapp-icon/icon_128.png",
    type: "软件客户端",
  },
  {
    text: "PxCook",
    desc: "高效易用的自动标注工具, 生成前端代码, 设计研发协作利器",
    link: "https://www.fancynode.com.cn/pxcook",
    icon: "https://www.fancynode.com.cn/siteicon/PxCook.png",
    type: "软件客户端",
  },
  {
    text: "FileZilla",
    desc: "免费开源的 FTP 方案",
    link: "https://www.filezilla.cn/",
    icon: "https://www.filezilla.cn/images/filezilla-48x48.png",
    type: "软件客户端",
  },
  {
    text: "Tabby",
    desc: "A terminal for the modern age",
    link: "https://tabby.sh/",
    icon: "https://tabby.sh/41c0b2191a91f83bee77.png",
    type: "软件客户端",
  },
  {
    text: "uTools",
    desc: "新一代效率工具平台。自由组合插件应用，打造专属你的趁手工具集",
    link: "https://u.tools/",
    icon: "https://res.u-tools.cn/website/v4/logo.png",
    type: "软件客户端",
  },
];

export const FileHandling: navigationItem[] = [
  {
    text: "Convertio",
    desc: "将您的文件转换成任意格式",
    link: "https://convertio.co/",
    icon: "https://static.convertio.co/img/apple-touch-icon-180x180-precomposed.png",
    type: FileConversion,
  },
  {
    text: "smallpdf",
    desc: "PDF 文件的所有在线操作。【收费】",
    link: "https://smallpdf.com/",
    icon: "https://s.smallpdf.com/static/2ae88642617fc2c0b873.svg",
    type: FileConversion,
  },
  {
    text: "iLovePDF",
    desc: "完全免费、易于使用、丰富的PDF处理工具",
    link: "https://www.ilovepdf.com/",
    icon: "https://www.ilovepdf.com/img/app-icon.png",
    // https://www.ilovepdf.com/img/favicons-img/favicon-32x32.png
    type: FileConversion,
  },
  {
    text: "pdf2go",
    desc: "免费的在线 PDF 转换器",
    link: "https://www.pdf2go.com/zh",
    icon: "https://www.pdf2go.com/favicon.ico",
    type: FileConversion,
  },
  {
    text: "iLoveIMG",
    desc: "可批量编辑图片的所有工具",
    link: "https://www.iloveimg.com/",
    icon: "https://www.iloveimg.com/img/favicons-img/favicon-16x16.png",
    type: FileConversion,
  },
  {
    text: "绿发票",
    desc: "电子发票PDF合并打印",
    link: "https://lvfapiao.com/",
    icon: "https://cdn.lvfapiao.com/images/fp.png",
    type: FileConversion,
  },

  {
    text: "tinypng",
    desc: "智能WebP，PNG和JPEG压缩",
    link: "https://tinypng.com/",
    icon: "https://tinypng.com/images/apple-touch-icon.png",
    type: ImageEditor,
  },
  {
    text: "recompressor",
    desc: "最优图像优化",
    link: "https://recompressor.com/",
    icon: "https://recompressor.com/modutil/assets/lib/modutil/m/favicons/recompressor/apple-touch-icon-180.png",
    type: ImageEditor,
  },
  {
    text: "CodeFormer",
    desc: "Robust Face Restoration and Enhancement Network",
    link: "https://huggingface.co/spaces/sczhou/CodeFormer",
    icon: "https://user-images.githubusercontent.com/14334509/189166076-94bb2cac-4f4e-40fb-a69f-66709e3d98f5.png",
    type: ImageEditor,
  },
  {
    text: "remove.bg",
    desc: "删除图像背景",
    link: "https://www.remove.bg/",
    icon: "https://www.remove.bg/favicon.ico?v=YAXaAv7pao",
    type: ImageEditor,
  },
];

export const DesignRelated: navigationItem[] = [
  {
    text: "中国色",
    desc: "中国传统颜色",
    link: "http://zhongguose.com/",
    icon: "http://zhongguose.com/img/favicon.ico",
    type: ColorReference,
  },
  {
    text: "调色板",
    desc: "平面UI颜色",
    link: "https://flatuicolors.com/",
    icon: "https://flatuicolors.com/static/favicon.ico",
    // https://infinitypro-img.infinitynewtab.com/custom-icon/8001e97uk1b5lrookgbeomfvgvzfjn.png
    type: ColorReference,
  },
  {
    text: "Coolors",
    desc: "创建完美的调色板或从数千种美丽的配色方案中获取灵感。",
    link: "https://coolors.co/",
    icon: "https://coolors.co/assets/img/favicon.png",
    type: ColorReference,
  },
  {
    text: "ColorHunt",
    desc: "设计师和艺术家的调色板，配色灵感收集",
    link: "https://colorhunt.co/",
    icon: "https://colorhunt.co/img/colorhunt-favicon.svg",
    type: ColorReference,
  },
  {
    text: "CoolHub",
    desc: "超好看的渐变颜色",
    link: "https://webkul.github.io/coolhue/",
    icon: "https://webkul.github.io/coolhue/images/coolhue-logo.png",
    type: ColorReference,
  },
  {
    text: "BrandColors",
    desc: "世界知名品牌颜色收集网",
    link: "http://brandcolors.net/",
    icon: "http://brandcolors.net/assets/img/logo.png",
    type: ColorReference,
  },

  {
    text: "Material Design",
    desc: "Material 3是谷歌开源设计系统的最新版本。使用材料3设计和制造美观、实用的产品",
    link: "https://m3.material.io/",
    icon: "https://m3.material.io/static/assets/m3-favicon-apple-touch.png",
    type: DesignReference,
  },

  {
    text: "WorldVectorLogo",
    desc: "下载矢量徽标，你喜欢的品牌",
    link: "https://worldvectorlogo.com/",
    icon: "https://worldvectorlogo.com/static/img/favicon.ico",
    type: OnlineLogo,
  },
  {
    text: "标小智",
    desc: "免费LOGO设计模板在线制作",
    link: "https://www.logosc.cn/biaozhi/",
    icon: "https://www.logosc.cn/img/logo-icons/logosc-new.svg",
    type: OnlineLogo,
  },
];

export const MaterialResources: navigationItem[] = [
  {
    text: "iconfont",
    desc: "阿里巴巴图标库",
    link: "https://www.iconfont.cn/",
    icon: "https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg",
    type: IconSource,
  },
  {
    text: "iconfont",
    desc: "阿里巴巴图标库",
    link: "https://fontawesome.dashgame.com/",
    icon: "https://fa5.dashgame.com/favicon.ico",
    type: IconSource,
  },

  {
    text: "Undraw",
    desc: "一个扁平风格插画图库",
    link: "https://undraw.co/illustrations",
    icon: "https://undraw.co/apple-touch-icon.png",
    type: IllustrationSource,
  },
  {
    text: "iradesign",
    desc: "一款渐变风格的矢量插画素材网站",
    link: "https://iradesign.io/",
    icon: "https://iradesign.io/assets/img/favicon.svg",
    type: IllustrationSource,
  },
  {
    text: "manypixels",
    desc: "2500 多张免版税插图，为您的设计增光添彩",
    link: "https://www.manypixels.co/gallery/",
    icon: "https://assets-global.website-files.com/63a9cb71c629474d4ae334b9/63ac68e5916d9b5c5a24a999_Favicon%201.png",
    type: IllustrationSource,
  },

  {
    text: "以方·iFonts",
    desc: "用有趣的字做设计",
    link: "https://ifonts.com/",
    icon: "https://pic.51ifonts.com/images/common/logo4.3.png",
    type: FontSource,
  },
  {
    text: "字由",
    desc: "千款免费字体，轻松一键换字，尽在字由客户端，超百万设计师正在使用",
    link: "https://www.hellofont.cn/",
    icon: "https://resource.hellofont.cn/nav/logo.svg",
    type: FontSource,
  },
  {
    text: "Fontspace",
    desc: "100,000+ 免费字体。免费下载法律许可的字体，非常适合您的设计项目。",
    link: "https://www.fontspace.com/",
    icon: "https://www.fontspace.com/images/fontspace-icon-circle-512.png",
    type: FontSource,
  },
  {
    text: "100font",
    desc: '一个专门收集整理"免费商用字体"的网站',
    link: "https://www.100font.com/",
    icon: "https://www.100font.com/view/img/favicon.ico",
    type: FontSource,
  },
  {
    text: "字体天下",
    desc: "海量字体免费高速下载",
    link: "http://www.fonts.net.cn",
    icon: "",
    type: FontSource,
  },
  {
    text: "自由字体",
    desc: "最新免费商用字体大全",
    link: "https://ziyouziti.com/index-index-all.html",
    icon: "https://ziyouziti.com/favicon.png",
    type: FontSource,
  },

  {
    text: "isorepublic",
    desc: "成千上万的免费高分辨率库存CC0照片和视频",
    link: "https://isorepublic.com/",
    icon: "https://isorepublic.com/wp-content/themes/isorepublic-v4.0/assets/img/logos/iso-logo-small.svg",
    type: ImgVideoSource,
  },
  {
    text: "Pexels",
    desc: "創作者分享的最佳免費圖庫相片，以及免權利金的影像和影片",
    link: "https://www.pexels.com/",
    icon: "https://www.pexels.com/assets/static/images/meta/favicon.ico",
    type: ImgVideoSource,
  },

  {
    text: "Pixabay",
    desc: "免费正版高清图片素材库",
    link: "https://pixabay.com/",
    icon: "https://pixabay.com/apple-touch-icon.png",
    type: ImgSource,
  },
  {
    text: "Splitshire",
    desc: "Beautiful & exclusive free stock photos.",
    link: "https://www.splitshire.com",
    icon: "",
    type: ImgSource,
  },
  {
    text: "movie-screencaps",
    desc: "专门收集电影影视剧截图的网站,方便我们后期调色做参考",
    link: "https://movie-screencaps.com/",
    icon: "",
    type: ImgSource,
  },
  {
    text: "Burst",
    desc: "下载令人惊叹的照片供网站和商业使用",
    link: "https://burst.shopify.com/",
    icon: "https://cdn.shopify.com/shopifycloud/stock_photos/assets/global/favicon-ab7018e1fe708a49edcfecce3166032fbeeb1fd7ba4a078c366de344d32ee193.png",
    type: ImgSource,
  },
  {
    text: "skitterphoto",
    desc: "一个查找、显示和共享公共域照片的地方",
    link: "https://skitterphoto.com/",
    icon: "https://skitterphoto.com/favicon.png",
    type: ImgSource,
  },
  {
    text: "foodiesfeed",
    desc: "这个网站所有的图片都和美食相关",
    link: "https://www.foodiesfeed.com/",
    icon: "https://www.foodiesfeed.com/wp-content/themes/foodiesfeed2022/src/img/ff.svg",
    type: ImgSource,
  },
  {
    text: "Unsplash",
    desc: "互联网的视觉来源，由世界各地的创造者提供动力",
    link: "https://unsplash.com",
    icon: "https://unsplash.com/apple-touch-icon.png",
    type: ImgSource,
  },
  {
    text: "Life of pix",
    desc: "免费高分辨率摄影",
    link: "https://www.lifeofpix.com",
    icon: "https://www.lifeofpix.com/wp-content/themes/lifeofpix_v2/img/lop-logo-noir.svg",
    type: ImgSource,
  },
  {
    text: "stocksnap",
    desc: "美丽的免费库存照片",
    link: "https://stocksnap.io/",
    icon: "https://stocksnap.io/img/favicon.png",
    type: ImgSource,
  },

  {
    text: "Pexels",
    desc: "Pexels社区共享的最佳免费视频。",
    link: "https://www.pexels.com/videos",
    icon: "https://www.pexels.com/assets/static/images/meta/pexels-icon.png",
    type: VideoSource,
  },
  {
    text: "Life of Vids",
    desc: "Free Videos, Clips & Loops",
    link: "https://www.lifeofvids.com/",
    icon: "https://www.lifeofvids.com/favicon.ico",
    type: VideoSource,
  },
  {
    text: "Videezy",
    desc: "免费高清库存镜头和4K视频，无pro标志则为免费",
    link: "https://www.videezy.com/",
    icon: "https://www.videezy.com/apple-touch-icon-precomposed.png",
    type: VideoSource,
  },
  {
    text: "Mixkit",
    desc: "为您的下一个视频项目提供免费资产",
    link: "https://mixkit.co",
    icon: "https://assets.mixkit.co/build/mixkit-logo--black-a90b84b6ac6ad0fbd410b16466b4cb252d399b5caaf03603f36c52ffc648455c.svg",
    type: VideoSource,
  },
  {
    text: "Vidlery",
    desc: "艺术无处不在，免费动画视频背景",
    link: "http://vidlery.com/",
    icon: "https://www.vidlery.com/wp-content/uploads/2023/07/Vidlery-Logo-200x80.png",
    type: VideoSource,
  },
  {
    text: "Coverr",
    desc: "美丽的免费库存视频镜头",
    link: "https://coverr.co/",
    icon: "https://coverr.co/favicon-32x32.png",
    type: VideoSource,
  },
  {
    text: "Mazwai",
    desc: "手工采摘的库存视频镜头",
    link: "http://mazwai.com",
    icon: "https://mazwai.com/assets/images/favicon-32x32.png",
    type: VideoSource,
  },
  {
    text: "Ignite Motion",
    desc: "自由运动背景",
    link: "https://www.ignitemotion.com",
    icon: "https://www.ignitemotion.com/wp-content/uploads/2018/05/logo-Ignitemotion-free-video-backgrounds.png",
    type: VideoSource,
  },
  {
    text: "Vidsplay",
    desc: "Download Free Stock Video Footage",
    link: "https://www.vidsplay.com/",
    icon: "https://www.vidsplay.com/wp-content/uploads/2019/10/vidsplay-logo-without-text-300x300.png",
    type: VideoSource,
  },

  {
    text: "Youtube Audio Library",
    desc: "Youtube创作者平台",
    link: "https://studio.youtube.com/channel/UCpUDC4OkmFCGv8BFVKHOh_w/music",
    icon: "https://www.gstatic.com/youtube/img/creator/favicon/favicon_144.png",
    type: AudioSource,
  },
  {
    text: "创作工作室",
    desc: "Facebook创作者平台",
    link: "https://business.facebook.com/creatorstudio/?tab=ct_sound_collection&collection_id=all_pages",
    icon: "https://business.facebook.com/images/assets_DO_NOT_HARDCODE/facebook_icons/app-creator-studio_filled_24_geo-icon-info.png",
    type: AudioSource,
  },
  {
    text: "SoundCloud",
    desc: "",
    link: "https://soundcloud.com/discover",
    icon: "https://a-v2.sndcdn.com/assets/images/sc-icons/ios-a62dfc8fe7.png",
    type: AudioSource,
  },
  {
    text: "SoundJay",
    desc: "",
    link: "https://www.soundjay.com/",
    icon: "https://www.soundjay.com/graphics/thumbnail.jpg",
    type: AudioSource,
  },
  {
    text: "BBC Sound Effects",
    desc: "",
    link: "http://bbcsfx.acropolis.org.uk/",
    icon: "https://sound-effects.bbcrewind.co.uk/favicon.ico",
    type: AudioSource,
  },
  {
    text: "Free PD",
    desc: "",
    link: "https://freepd.com/",
    icon: "https://freepd.com/favicon-32x32.png",
    type: AudioSource,
  },
  {
    text: "Freesound（情绪状态和风格检索）",
    desc: "",
    link: "https://freesound.org/",
    icon: "https://freesound.org/apple-touch-icon.png",
    type: AudioSource,
  },
  {
    text: "Audiolibrary",
    desc: "",
    link: "https://www.audiolibrary.com.co",
    icon: "https://cdn.audiolibrary.com.co/themes/ytalc/assets/img/artists/tvari.jpg?56247834125",
    type: AudioSource,
  },
  {
    text: "Free Stock Music",
    desc: "",
    link: "https://www.free-stock-music.com/",
    icon: "https://www.free-stock-music.com/thumbnails/free-music-thumbnail.jpg",
    type: AudioSource,
  },

  {
    text: "书生CG资源站",
    desc: "",
    link: "https://c4dsky.com/",
    icon: "https://c4dsky.com/wp-content/uploads/2019/08/c4dsky.com-icon.png",
    type: TemplatePlugin,
  },
  {
    text: "大众脸",
    desc: "",
    link: "https://www.lookae.com/",
    icon: "https://www.lookae.com/wp-content/uploads/2019/03/home-logo.png",
    type: TemplatePlugin,
  },
  {
    text: "VIDEEZY",
    desc: "Free After Effects Templates",
    link: "https://www.videezy.com/after-effects-templates",
    icon: "https://www.videezy.com/apple-touch-icon-precomposed.png",
    type: TemplatePlugin,
  },
  {
    text: "ayatoweb",
    desc: "日本的一个免费网站",
    link: "http://www.ayatoweb.com/",
    icon: "http://www.ayatoweb.com/images/base_title1.gif",
    type: TemplatePlugin,
  },
];
