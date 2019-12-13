# 基于webpack4搭建vue2、vuex多页应用

## 背景

该项目是为公司内部使用vue开发而准备的基于webpack4搭建的vue2多页应用基础框架

## 需要了解的相关技术知识

webpack + vue + vuex + ElementUI + Sass + ES6


## 安装与运行

本项目运行需要本机安装Node6.0以上版本。
命令行到此目录下运行：
···
npm install
···
安装完成后，工程内会生成node_modules等相关依赖目录，继续运行：
···
npm run dev
···
进入开发模式，自动打开浏览器并访问http://localhost:8080/index.html，并随时响应代码修改。

## 目录结构说明

```
project
│   README.md
│   webpack.config.js // webpack配置基础文件
│   .gitignore // 标注git提交需忽略的内容
│   package.json  // 项目所需要的各种模块及项目的配置信息等重要信息
│
└───build
│   │   config.js //多文件及路径配置
│   │   webpack.base.js //打包基础配置
│   │   webpack.dev.js //开发打包配置
│   │   webpack.prod.js //产品打包配置
│   │
│   └───subfolder1
│       │   file111.txt
│       │   file112.txt
│       │   ...
│   
└───src
    │   assets //静态文件集合，如静态图片等
    │   components // 模块和组件
    │   pages // 项目模板文件，会根据需要持续扩充
    │   store // vuex
    │   styles // 存放样式
```

