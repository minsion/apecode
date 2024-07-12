---
layout: doc
---

<script setup>
  import { TechnicalCommunity, DevTools, OnlineDocument, OnlineTools, SoftwareClient, FileHandling, DesignRelated, MaterialResources } from '../.vitepress/config/navigation.mts'
</script>

# 导航

## 技术社区

<NavigationCard :navigationData=TechnicalCommunity />

## 在线文档

<NavigationCard :navigationData=OnlineDocument />

## 在线工具

<NavigationCard :navigationData=OnlineTools />

## 开发工具

<NavigationCard :navigationData=DevTools />

## 软件客户端

<NavigationCard :navigationData=SoftwareClient />

## 文件处理

<NavigationCard :navigationData=FileHandling />

## 设计相关

<NavigationCard :navigationData=DesignRelated />

## 素材资源

<NavigationCard :navigationData=MaterialResources />
