# ApeCode

猿代码，程序员的知识补给、工具小站

## 模块

- 导航
- 随笔记
- 八股文
- 轻函数【开发中】

## 运行

node v18.17.0

```shell
# 安装依赖
npm install

# 运行开发环境
npm run dev

# 打包
npm run build

# 运行生产环境
npm run preview

# 把项目中 .vitepress/dist 里面的文件提交到gh-pages分支，实现自动部署
 git push origin :gh-pages && git subtree push --prefix .vitepress/dist origin gh-pages
```