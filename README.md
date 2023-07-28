# 模板说明

方便开发

## 文件规范

```shell
celiae-vite-template/
|-- src/
|   |-- assets/   页面需要的图片或其他资源
|   |-- components/   小组件
|   |-- router/   路由配置文件夹
|   |-- server/   调用数据, 后端交互
|   |-- types/    Typescript 所需要的类型
|   |-- views/    由路由引导的各个页面
|   |-- App.vue   整体布局, 可设置导航栏加 <router-view/>
|   |-- main.js   加载插件, 导入全局文件
|-- vite.config.js    配置 vite
|-- index.html        单页面挂载点
|-- package.json      npm 软件包或脚本
```

## 必改项

模板的一些默认的配置需要根据现实的情况改变

- `package.json`

name属性中的 "celiae-vite-template" 替换为你想要的名字
