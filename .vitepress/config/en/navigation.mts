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
const FileConversion = "File Conversion";
const ImageEditor = "Image Editor";

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
    desc: "The world's largest programmer communication website.",
    link: "https://github.com/",
    icon: "https://github.com/fluidicon.png",
    type: "Technical Community",
  },
  {
    text: "HuggingFace",
    desc: "Github in the AI ​​model world opens up powerful AI tool libraries and pre-trained models",
    link: "https://huggingface.co/",
    icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    type: "Technical Community",
  },
  {
    text: "Medium",
    desc: "Good ideas found here.",
    link: "https://medium.com/",
    icon: "https://miro.medium.com/v2/resize:fill:152:152/1*sHhtYhaCe2Uc3IU0IgKwIQ.png",
    type: "Technical Community",
  },
  {
    text: "30SecondSofCode",
    desc: "Discover short code snippets for all your development needs.",
    link: "https://www.30secondsofcode.org/",
    icon: "https://www.30secondsofcode.org/assets/icons/icon-192x192.png",
    type: "Technical Community",
  },
  {
    text: "CodePen",
    desc: "The best place to build, test, and discover front-end code.",
    link: "https://codepen.io/trending",
    icon: "https://cpwebassets.codepen.io/assets/social/facebook-default-05cf522ae1d4c215ae0f09d866d97413a2204b6c9339c6e7a1b96ab1d4a7340f.png",
    type: "Technical Community",
  },
  {
    text: "Rare Earth Mining",
    desc: "Nuggets is a technical content sharing and communication platform for Chinese developers around the world.",
    link: "https://juejin.cn/",
    icon: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/apple-touch-icon.png",
    type: "Technical Community",
  },
  {
    text: "CSDN",
    desc: "A world-renowned Chinese IT technology exchange platform.",
    link: "https://www.csdn.net/",
    icon: "https://img-home.csdnimg.cn/images/20201124032511.png",
    type: "Technical Community",
  },
];
export const OnlineDocument: navigationItem[] = [
  {
    text: "MDN Web Docs",
    desc: "Documenting web technologies since 2005, including CSS, HTML, and JavaScript.",
    link: "https://developer.mozilla.org/",
    icon: "https://developer.mozilla.org/apple-touch-icon.6803c6f0.png",
    type: "Online Document",
  },
  {
    text: "Modern JavaScript Tutorial",
    desc: "Based on the latest JavaScript standards, this course explains JavaScript knowledge from basic to advanced level through simple but detailed content.",
    link: "https://javascript.info/",
    icon: "https://javascript.info/img/favicon/apple-touch-icon-precomposed.png",
    type: "Online Document",
  },
  {
    text: "Can i use",
    desc: "Provides an up-to-date browser support table to support front-end web technologies on desktop and mobile web browsers.",
    link: "https://caniuse.com/",
    icon: "https://caniuse.com/img/favicon-128.png",
    type: "Online Document",
  },
  {
    text: "Code Points",
    desc: "All characters defined in the Unicode standard. Character code point information.",
    link: "https://codepoints.net/",
    icon: "https://codepoints.net/apple-touch-icon.png",
    type: "Online Document",
  },
];
export const OnlineTools: navigationItem[] = [
  {
    text: "Gtmertrix",
    desc: "Website performance analysis, online visual analysis tool",
    link: "https://gtmetrix.com/",
    icon: "https://gtmetrix.com/static/images/documentation/meta_social/gtmetrix.png",
    type: "Online Tools",
  },
  {
    text: "Easings",
    desc: "Easing functions specify the rate of change of a parameter over time.",
    link: "https://easings.net/",
    icon: "https://easings.net/96.8aa68ac4.png",
    type: "Online Tools",
  },
  {
    text: "CubicBezier",
    desc: "Bezier curve online debugging",
    link: "https://cubic-bezier.com/",
    icon: "",
    type: "Online Tools",
  },
  {
    text: "Neumorphism",
    desc: "Debugging and generating css style code for new types of skeuomorphic styles",
    link: "https://neumorphism.io/",
    icon: "https://neumorphism.io/apple-touch-icon.png",
    type: "Online Tools",
  },
  {
    text: "DBdiagram",
    desc: "Draw Entity-Relationship Diagrams, Painlessly 😎",
    link: "https://dbdiagram.io/home",
    icon: "https://cdn.holistics.io/logo-dbdiagram-notext.ico",
    type: "Online Tools",
  },
  {
    text: "WebGradients",
    desc: "A free collection of 180 linear gradient colors",
    link: "https://webgradients.com/",
    icon: "https://webgradients.com/favicons/favicon-196x196.png",
    type: "Online Tools",
  },
  {
    text: "LoremPicsum",
    desc: "The Lorem Ipsum for photos.",
    link: "https://picsum.photos/",
    icon: "https://picsum.photos/200",
    type: "Online Tools",
  },
];
export const DevTools: navigationItem[] = [
  {
    text: "VSCode",
    desc: "Code editor from Microsoft",
    link: "https://code.visualstudio.com/",
    icon: "https://code.visualstudio.com/apple-touch-icon.png",
    type: "Dev Tooos",
  },
  {
    text: "HBuilderX",
    desc: "Domestic code editor, a good helper of uni-app.",
    link: "https://www.dcloud.io/hbuilderx.html",
    icon: "https://qiniu-ecdn.dcloud.net.cn/uploads/images/hbuilderx/icon/hbuilderx_icon@2x.png",
    type: "Dev Tooos",
  },
  {
    text: "IntelliJ IDEA",
    desc: "Leading Java and Kotlin IDE",
    link: "https://www.jetbrains.com/idea/",
    icon: "https://www.jetbrains.com/icon-512.png?r=1234",
    type: "Dev Tooos",
  },
];
export const SoftwareClient: navigationItem[] = [
  {
    text: "Snipaste",
    desc: "screenshot + Textures",
    link: "https://zh.snipaste.com/",
    icon: "https://zh.snipaste.com/img/logo.svg",
    type: "SoftwareClient",
  },
  {
    text: "ScreenToGif",
    desc: "Screen, webcam and sketchboard recorder with an integrated editor",
    link: "https://www.screentogif.com/",
    icon: "https://www.screentogif.com/img/logo.d2151712.png",
    type: "SoftwareClient",
  },
  {
    text: "PotPlayer",
    desc: "Universal video player",
    link: "https://images.sftcdn.net/images/t_app-icon-s/p/d3c12354-96d3-11e6-bfbf-00163ed833e7/1418749125/potplayer-PotPlayer_logo_(2017).png",
    icon: "",
    type: "SoftwareClient",
  },
  {
    text: "Xmind",
    desc: "A full-featured mind mapping and brainstorming software.",
    link: "https://xmind.cn/",
    icon: "https://xmind.cn/webapp-icon/icon_128.png",
    type: "SoftwareClient",
  },
  {
    text: "PxCook",
    desc: "An efficient and easy-to-use automatic annotation tool that generates front-end code and is a powerful tool for design and development collaboration",
    link: "https://www.fancynode.com.cn/pxcook",
    icon: "https://www.fancynode.com.cn/siteicon/PxCook.png",
    type: "SoftwareClient",
  },
  {
    text: "FileZilla",
    desc: "Free and open source FTP solution",
    link: "https://www.filezilla.cn/",
    icon: "https://www.filezilla.cn/images/filezilla-48x48.png",
    type: "SoftwareClient",
  },
  {
    text: "Tabby",
    desc: "A terminal for the modern age",
    link: "https://tabby.sh/",
    icon: "https://tabby.sh/41c0b2191a91f83bee77.png",
    type: "SoftwareClient",
  },
  {
    text: "uTools",
    desc: "A new generation of efficiency tool platform. Freely combine plug-in applications to create your own handy tool set",
    link: "https://u.tools/",
    icon: "https://res.u-tools.cn/website/v4/logo.png",
    type: "SoftwareClient",
  },
];
export const FileHandling: navigationItem[] = [
  {
    text: "Convertio",
    desc: "Convert your files to any format",
    link: "https://convertio.co/",
    icon: "https://static.convertio.co/img/apple-touch-icon-180x180-precomposed.png",
    type: FileConversion,
  },
  {
    text: "smallpdf",
    desc: "All online operations for PDF files. [Fee]",
    link: "https://smallpdf.com/",
    icon: "https://s.smallpdf.com/static/2ae88642617fc2c0b873.svg",
    type: FileConversion,
  },
  {
    text: "iLovePDF",
    desc: "Completely free, easy to use, rich PDF processing tools",
    link: "https://www.ilovepdf.com/",
    icon: "https://www.ilovepdf.com/img/app-icon.png",
    // https://www.ilovepdf.com/img/favicons-img/favicon-32x32.png
    type: FileConversion,
  },
  {
    text: "pdf2go",
    desc: "Free Online PDF Converter",
    link: "https://www.pdf2go.com/zh",
    icon: "https://www.pdf2go.com/favicon.ico",
    type: FileConversion,
  },
  {
    text: "iLoveIMG",
    desc: "All tools for batch editing of images",
    link: "https://www.iloveimg.com/",
    icon: "https://www.iloveimg.com/img/favicons-img/favicon-16x16.png",
    type: FileConversion,
  },
  {
    text: "Green Invoice",
    desc: "Electronic invoice PDF merge printing",
    link: "https://lvfapiao.com/",
    icon: "https://cdn.lvfapiao.com/images/fp.png",
    type: FileConversion,
  },

  {
    text: "tinypng",
    desc: "Smart WebP, PNG and JPEG compression",
    link: "https://tinypng.com/",
    icon: "https://tinypng.com/images/apple-touch-icon.png",
    type: ImageEditor,
  },
  {
    text: "recompressor",
    desc: "Best image optimization",
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
    desc: "Remove image background",
    link: "https://www.remove.bg/",
    icon: "https://www.remove.bg/favicon.ico?v=YAXaAv7pao",
    type: ImageEditor,
  },
];
export const DesignRelated: navigationItem[] = [
  {
    text: "Chinese Color",
    desc: "Chinese traditional colors",
    link: "http://zhongguose.com/",
    icon: "http://zhongguose.com/img/favicon.ico",
    type: ColorReference,
  },
  {
    text: "Color Palette",
    desc: "Flat UI Colors",
    link: "https://flatuicolors.com/",
    icon: "https://flatuicolors.com/static/favicon.ico",
    // https://infinitypro-img.infinitynewtab.com/custom-icon/8001e97uk1b5lrookgbeomfvgvzfjn.png
    type: ColorReference,
  },
  {
    text: "Coolors",
    desc: "Create the perfect color palette or get inspired by thousands of beautiful color schemes.",
    link: "https://coolors.co/",
    icon: "https://coolors.co/assets/img/favicon.png",
    type: ColorReference,
  },
  {
    text: "ColorHunt",
    desc: "Color palettes for designers and artists, color inspiration collection",
    link: "https://colorhunt.co/",
    icon: "https://colorhunt.co/img/colorhunt-favicon.svg",
    type: ColorReference,
  },
  {
    text: "CoolHub",
    desc: "Beautiful gradient colors",
    link: "https://webkul.github.io/coolhue/",
    icon: "https://webkul.github.io/coolhue/images/coolhue-logo.png",
    type: ColorReference,
  },
  {
    text: "BrandColors",
    desc: "World famous brand color collection network",
    link: "http://brandcolors.net/",
    icon: "http://brandcolors.net/assets/img/logo.png",
    type: ColorReference,
  },

  {
    text: "Material Design",
    desc: "Material 3 is the latest version of Google's open source design system. Use Material 3 to design and build beautiful, functional products",
    link: "https://m3.material.io/",
    icon: "https://m3.material.io/static/assets/m3-favicon-apple-touch.png",
    type: DesignReference,
  },

  {
    text: "WorldVectorLogo",
    desc: "Download vector logos for your favorite brands",
    link: "https://worldvectorlogo.com/",
    icon: "https://worldvectorlogo.com/static/img/favicon.ico",
    type: OnlineLogo,
  },
  {
    text: "Biao Xiaozhi",
    desc: "Free LOGO design template online production",
    link: "https://www.logosc.cn/biaozhi/",
    icon: "https://www.logosc.cn/img/logo-icons/logosc-new.svg",
    type: OnlineLogo,
  },
];
export const MaterialResources: navigationItem[] = [
  {
    text: "iconfont",
    desc: "Alibaba Icon Library",
    link: "https://www.iconfont.cn/",
    icon: "https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg",
    type: IconSource,
  },
  {
    text: "iconfont",
    desc: "Alibaba Icon Library",
    link: "https://fontawesome.dashgame.com/",
    icon: "https://fa5.dashgame.com/favicon.ico",
    type: IconSource,
  },

  {
    text: "Undraw",
    desc: "A flat style illustration gallery",
    link: "https://undraw.co/illustrations",
    icon: "https://undraw.co/apple-touch-icon.png",
    type: IllustrationSource,
  },
  {
    text: "iradesign",
    desc: "A gradient style vector illustration material website",
    link: "https://iradesign.io/",
    icon: "https://iradesign.io/assets/img/favicon.svg",
    type: IllustrationSource,
  },
  {
    text: "manypixels",
    desc: "2,500+ royalty-free illustrations to enhance your designs",
    link: "https://www.manypixels.co/gallery/",
    icon: "https://assets-global.website-files.com/63a9cb71c629474d4ae334b9/63ac68e5916d9b5c5a24a999_Favicon%201.png",
    type: IllustrationSource,
  },

  {
    text: "iFonts",
    desc: "Design with interesting words",
    link: "https://ifonts.com/",
    icon: "https://pic.51ifonts.com/images/common/logo4.3.png",
    type: FontSource,
  },
  {
    text: "Words by",
    desc: "Thousands of free fonts, easily change fonts with one click, all in the Ziyou client, used by over one million designers",
    link: "https://www.hellofont.cn/",
    icon: "https://resource.hellofont.cn/nav/logo.svg",
    type: FontSource,
  },
  {
    text: "Fontspace",
    desc: "100,000+ Free Fonts. Download legally licensed fonts for free, perfect for your design projects.",
    link: "https://www.fontspace.com/",
    icon: "https://www.fontspace.com/images/fontspace-icon-circle-512.png",
    type: FontSource,
  },
  {
    text: "100font",
    desc: 'A website dedicated to collecting and organizing "free commercial fonts"',
    link: "https://www.100font.com/",
    icon: "https://www.100font.com/view/img/favicon.ico",
    type: FontSource,
  },
  {
    text: "Font World",
    desc: "Free high-speed download of massive fonts",
    link: "http://www.fonts.net.cn",
    icon: "",
    type: FontSource,
  },
  {
    text: "Free Fonts",
    desc: "The latest free commercial fonts",
    link: "https://ziyouziti.com/index-index-all.html",
    icon: "https://ziyouziti.com/favicon.png",
    type: FontSource,
  },

  {
    text: "isorepublic",
    desc: "Thousands of free high-resolution stock CC0 photos and videos",
    link: "https://isorepublic.com/",
    icon: "https://isorepublic.com/wp-content/themes/isorepublic-v4.0/assets/img/logos/iso-logo-small.svg",
    type: ImgVideoSource,
  },
  {
    text: "Pexels",
    desc: "The best free stock photos from creators, plus royalty-free images and videos",
    link: "https://www.pexels.com/",
    icon: "https://www.pexels.com/assets/static/images/meta/favicon.ico",
    type: ImgVideoSource,
  },

  {
    text: "Pixabay",
    desc: "Free genuine high-definition picture material library",
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
    desc: "A website dedicated to collecting screenshots of movies and TV series, which is convenient for us to use as a reference for later color adjustment",
    link: "https://movie-screencaps.com/",
    icon: "",
    type: ImgSource,
  },
  {
    text: "Burst",
    desc: "Download stunning photos for websites and commercial use",
    link: "https://burst.shopify.com/",
    icon: "https://cdn.shopify.com/shopifycloud/stock_photos/assets/global/favicon-ab7018e1fe708a49edcfecce3166032fbeeb1fd7ba4a078c366de344d32ee193.png",
    type: ImgSource,
  },
  {
    text: "skitterphoto",
    desc: "A place to find, display and share public domain photos",
    link: "https://skitterphoto.com/",
    icon: "https://skitterphoto.com/favicon.png",
    type: ImgSource,
  },
  {
    text: "foodiesfeed",
    desc: "All the pictures on this website are related to food",
    link: "https://www.foodiesfeed.com/",
    icon: "https://www.foodiesfeed.com/wp-content/themes/foodiesfeed2022/src/img/ff.svg",
    type: ImgSource,
  },
  {
    text: "Unsplash",
    desc: "The internet's visual source, powered by creators around the world",
    link: "https://unsplash.com",
    icon: "https://unsplash.com/apple-touch-icon.png",
    type: ImgSource,
  },
  {
    text: "Life of pix",
    desc: "Free High Resolution Photography",
    link: "https://www.lifeofpix.com",
    icon: "https://www.lifeofpix.com/wp-content/themes/lifeofpix_v2/img/lop-logo-noir.svg",
    type: ImgSource,
  },
  {
    text: "stocksnap",
    desc: "Beautiful Free Stock Photos",
    link: "https://stocksnap.io/",
    icon: "https://stocksnap.io/img/favicon.png",
    type: ImgSource,
  },

  {
    text: "Pexels",
    desc: "The best free videos shared by the Pexels community.",
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
    desc: "Free HD stock footage and 4K videos, free without pro logo",
    link: "https://www.videezy.com/",
    icon: "https://www.videezy.com/apple-touch-icon-precomposed.png",
    type: VideoSource,
  },
  {
    text: "Mixkit",
    desc: "Free assets for your next video project",
    link: "https://mixkit.co",
    icon: "https://assets.mixkit.co/build/mixkit-logo--black-a90b84b6ac6ad0fbd410b16466b4cb252d399b5caaf03603f36c52ffc648455c.svg",
    type: VideoSource,
  },
  {
    text: "Vidlery",
    desc: "Art is everywhere, free animated video backgrounds",
    link: "http://vidlery.com/",
    icon: "https://www.vidlery.com/wp-content/uploads/2023/07/Vidlery-Logo-200x80.png",
    type: VideoSource,
  },
  {
    text: "Coverr",
    desc: "Beautiful Free Stock Video Footage",
    link: "https://coverr.co/",
    icon: "https://coverr.co/favicon-32x32.png",
    type: VideoSource,
  },
  {
    text: "Mazwai",
    desc: "Stock video footage of hand picking",
    link: "http://mazwai.com",
    icon: "https://mazwai.com/assets/images/favicon-32x32.png",
    type: VideoSource,
  },
  {
    text: "Ignite Motion",
    desc: "Free motion background",
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
    desc: "Youtube Creator Platform",
    link: "https://studio.youtube.com/channel/UCpUDC4OkmFCGv8BFVKHOh_w/music",
    icon: "https://www.gstatic.com/youtube/img/creator/favicon/favicon_144.png",
    type: AudioSource,
  },
  {
    text: "Creative Studio",
    desc: "Facebook Creator Platform",
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
    text: "Freesound (emotional state and style retrieval)",
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
    text: "Scholar CG Resource Station",
    desc: "",
    link: "https://c4dsky.com/",
    icon: "https://c4dsky.com/wp-content/uploads/2019/08/c4dsky.com-icon.png",
    type: TemplatePlugin,
  },
  {
    text: "Common face",
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
    desc: "A free website in Japan",
    link: "http://www.ayatoweb.com/",
    icon: "http://www.ayatoweb.com/images/base_title1.gif",
    type: TemplatePlugin,
  },
];
