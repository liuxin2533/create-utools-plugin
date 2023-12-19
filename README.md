# create-utools-plugin

## 简介

create-utools-plugin 是一款生成 uTools 插件开发模板的工具，可以快速生成插件的模板。
作者非职业前端玩家，前几个版本纯属瞎搞，请使用最新版。作者会持续更新，欢迎提 issue 和 PR。

## 安装

```bash
~ npm install create-utools-plugin -g
# 或者
~ yarn global add create-utools-plugin
```

## 使用

```bash
~ create-utools-plugin

 _   _| |_ ___   ___ | |___       _ __ | |_   _  __ _(_)_ __         ___| (_)
| | | | __/ _ \ / _ \| / __|_____| '_ \| | | | |/ _` | | '_ \ _____ / __| | |
| |_| | || (_) | (_) | \__ \_____| |_) | | |_| | (_| | | | | |_____| (__| | |
 \__,_|\__\___/ \___/|_|___/     | .__/|_|\__,_|\__, |_|_| |_|      \___|_|_|
                                 |_|            |___/

                                                                  v0.0.6

? 插件名称: image-viewer
? 插件支持的平台: win32, darwin, linux
? 插件运行模式: utools预设模板应用
? 选择包管理器: pnpm
正在创建项目... C:\Users\anran\image-viewer
正在安装依赖...
Packages: +148
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 148, reused 147, downloaded 0, added 148, done
Done in 2.2s


完成！
```

## 预设模板

- [preset - utools预设模板应用](https://u.tools/docs/developer/template.html#plugin-json-%E6%96%87%E4%BB%B6)

      🌈 开箱即用
      🧸 构建`preload.js`文件，处理第三方依赖

- [vue3 - QC2168大神的模板](https://github.com/QC2168/utools-plugin-template.git)

      🌈 开箱即用的`Vite+Vue3`的`Utools`插件开发模板
      ⚡ 开发环境自动注入`HMR`字段
      🦍 自动构建`upx`包
      🧸 构建`utools/preload`文件，处理第三方依赖
      🚀 构建桌面应用

