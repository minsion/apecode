---
layout: doc
---

# 关于将前端项目部署到 Linux

## 前言

本文主要从零开始，记录如何将前端项目部署到 Linux 服务器，比较基础。希望能帮助到你们。

## 技术栈

操作系统：Linux ubuntu

服务器：Nginx 一款轻量级的 Web 服务器、反向代理服务器

前端项目：Vue3

操作软件：Tabby 一个高度可配置的现代化终端模拟器

## 基础命令

由于是第一次接触 linux 系统，所以我们先熟悉一下 linux 基础的命令。

```bash
## 1.列出目录中的文件和子目录
ls

## 2.切换当前工作目录
cd [目录路径]

## 3.显示当前工作目录的路径
pwd

## 4.创建新目录
mkdir [命令名]

## 5.删除文件或目录
rm [文件名]    ## 删除文件
rm -r [目录名]    ## 递归删除目录及其内容

## 6.复制文件或目录
cp [源文件] [目标目录]    ## 复制文件到目标目录

## 7.移动文件或目录，也可以用于重命名文件或目录
mv [源文件] [目标目录]    ## 移动文件到目标目录
mv [旧文件名] [新文件名]    ## 重命名文件

## 8.更新文件的时间戳或创建新文件
touch [文件名]

## 9.查看文件内容
cat [文件名]

## 10.分页查看文件内容
less [文件名]

## 11.显示文件的开头或结尾
head [文件名]    ## 显示文件开头的内容
tail [文件名]    ## 显示文件结尾的内容

## 12.在文件中搜索特定模式
grep "pattern" [文件名]

## 13.显示系统进程
ps aux

## 14.终止进程
kill [进程ID]

## 15.打包和解压文件
tar -czvf archive.tar.gz [目录]    ## 打包成 .tar.gz 文件
tar -xzvf archive.tar.gz           ## 解压 .tar.gz 文件

## 16.修改文件或目录的权限
chmod [权限] [文件名]

## 17.以超级用户权限执行命令
sudo [命令]
```

## 安装

```bash
## 首先，更新系统的软件包列表，确保获取最新的可用软件包信息。
sudo apt update

## 随后，使用包管理器安装 Nginx
sudo apt install nginx

## 检查是否安装成功
nginx -v
```

之前已经安装过，第一次安装命令执行会不一样，所以最后需要执行一下 nginx -v，确保已经安装上 nginx

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f84a46210ad24bdca6080428ca5eb901~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=664&h=343&s=44196&e=png&b=212a35)

安装成功之后，直接使用服务器 ip 的方式，在浏览器地址栏中输入，应该能够访问到 nginx 的初始页面（需要启动 `sudo systemctl start nginx`），如下图：

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e71684071a67418b9f4cd4856f21d5a6~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1090&h=743&s=186550&e=png&b=ffffff)

`nginx 相关命令`

```bash
## 1. 启动 Nginx
sudo systemctl start nginx

## 2. 停止 Nginx
sudo systemctl stop nginx

## 3. 重新加载配置
sudo systemctl reload nginx

## 4. 重启 Nginx
sudo systemctl restart nginx

## 5. 查看 Nginx 状态
sudo systemctl status nginx

## 6. 测试 Nginx 配置是否正确
sudo nginx -t

## 7. 查看 Nginx 版本信息
sudo nginx -v

## 8. 查看 Nginx 编译配置信息
sudo nginx -V
```

## 上传处理

### 上传

将打包好的 vue 项目，即 dist 目录文件上传到服务器中，其中 Tabby 一次只能上传一个文件或者是一个压缩文件夹，为此需要提前将 dist 进行压缩。

然后，Tabby 打开你想要上传到的文件路径中，演示使用路径 `/home/ubuntu/files/`。长按拖拽至即可上传。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a19399281a648098ed6546d8db6a5cd~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=844&h=611&s=44075&e=png&b=0d1219)

### 解压

上传的时候，使用的 .zip 的压缩文件类型，需要在 linux 上进行一次解压操作。

解压需要使用 unzip 软件，安装如下：

```bash
sudo apt update    ## 更新软件列表
sudo apt install unzip    ## 安装 unzip
```

安装完成后，即可使用 unzip 相关命令：

```bash
unzip [options] filename.zip
## `-d <directory>`：指定解压缩的目标目录。
## `-l`：列出 ZIP 文件中的文件列表，但不解压缩。
## `-o`：覆盖已经存在的文件。
## `-q`：安静模式，不显示解压缩过程中的输出信息。
## `-x <pattern>`：排除符合模式 `<pattern>` 的文件。

## 解压名为 `example.zip` 的 ZIP 文件到当前目录下
unzip example.zip

## 将文件解压缩到指定目录，可以使用 `-d` 选项，如：
unzip example.zip -d /path/to/directory
```

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/790e355ed7314d9887508e57fae67bcd~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=754&h=224&s=30186&e=png&b=212a35)

这里我将上传的 dist.zip 解压，且解压至 `var/www/html/` 下，因为这个路径是， nginx 的初始路径（下图为解压后）。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/49a9ca5907d04ff091a0722cd5d63f90~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=844&h=410&s=36601&e=png&b=131b24)

## 配置

完成上面的步骤之后，因为 nginx 的默认启动路径是 `/var/www/html/index.nginx-debian.html`，所以需要将这个启动路径重新指向到 `/var/www/html/dist/index.html` 中，修改方式如下：

```
## 使用 nano 编辑器，打开 /etc/nginx/sites-available/default 文件
sudo nano /etc/nginx/sites-available/default
```

打开，应该看到这样的结构。需要做： 1. 设置根路径；2. 修改 try_files

```dash
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /var/www/html/dist;    ## 1. 设置根路径

    location / {
        ## First attempt to serve request as file, then
        ## as directory, then fall back to displaying a 404.
        ## try_files $uri $uri/ =404;
        try_files $uri $uri/ /dist/index.html;    ## 2. 修改 try_files
    }
}
```

nano 编辑器快捷键：保存：ctrl + S，退出：ctrl + Z.

配置完成后，别忘了重启 Nginx 服务（`sudo systemctl restart nginx`）

到此，就已经完成了将前端项目部署到 Linux 的全部过程，有别的方案欢迎在评论区留下你的见解。

---

## GZIP

如果还没看`上传处理`和`配置`部分的内容，推荐看了再来。

gzip 是一种数据压缩算法，可以将文本文件等内容进行压缩，减小文件大小，提高传输效率。正好 nginx 有相关配置。

需要打开 nginx.conf 文件，命令 `sudo nano /etc/nginx/nginx/conf`

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96737c15a9fe473388f0e8785623fb95~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1920&h=955&s=84218&e=png&b=212a35)

找到 Gzip Settings，默认情况下，这里的内容是被注释起来的，解除注释，且对比少了的配置，添加进去即可。保存之后，需要重启一下 nginx.

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03aa4aa3251c4416834274b305c283ae~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1325&h=381&s=29548&e=png&b=212a35)

```bash
## 配置参数

## 开启 gzip 压缩
gzip on;

## 根据客户端的 `Accept-Encoding` 头值发送不同的响应，以便更好地利用缓存或 CDN 等
gzip_vary on;

## 在反向代理情况下是否启用 gzip 压缩
gzip_proxied any;

## 压缩级别，级别范围是 1 到 9，数字越大压缩越多，但消耗 CPU 越多
gzip_comp_level 6;

## 压缩的缓冲区大小
gzip_buffers 16 8k;

## 启用 gzip 压缩的 HTTP 版本
gzip_http_version 1.1;

## 指定要压缩的 MIME 类型
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

## 对所有类型的文件进行 gzip 压缩
gzip_types *;
```

验证是否成功开启 gzip 的方式，可以打开浏览器控制台，查看网络面板的资源加载情况。

Content-Encoding: gzip (即开启 GZIP)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ed41c9eedd9f4b1ba22bc15f501b5436~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1338&h=582&s=75574&e=png&b=292929)
