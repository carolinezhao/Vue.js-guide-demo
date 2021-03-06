# Vue.js-guide-demo

在浏览器中调试，使用插件 Vue DevTools，需要在 HTTP 协议下打开页面才能检测到。

    $ httpserver

cmd + 点击 http://0.0.0.0:8080 进入文件目录

---

### [Vue.js core docs 2.x](https://vuejs.org/v2/guide/)

### 1. 基础 

--> [*essentials*](https://github.com/carolinezhao/Vue.js-guide-demo/tree/master/essentials)

还没看的部分：安装，组件-杂项

***

### 2. 工具

#### 单文件组件(.vue)
  
用到的附加工具：npm，webpack
  
通过 node 安装了 npm，创建 .json [working with package.json](https://docs.npmjs.com/getting-started/using-a-package.json)
  
通过 npm 安装了 webpack，进一步学习 [webpack learning academy](https://webpack.academy/courses/enrolled/104961)
  
Babel [ES2015](https://babeljs.io/learn-es2015/) 作为手册看
  
从一个基于 webpack 模板的项目入手了解 .vue [webpack-simple](https://github.com/vuejs-templates/webpack-simple)  --> [*my-project*](https://github.com/carolinezhao/Vue.js-guide-demo/tree/master/my-project)
  
具体原理看 vue-loader
  
### [vue-loader docs](https://vue-loader.vuejs.org/)

--> [*vue-loader*](https://github.com/carolinezhao/Vue.js-guide-demo/tree/master/vue-loader)

*** 

### 3. 可复用性&组合

#### 渲染函数&JSX

--> [*render*](https://github.com/carolinezhao/Vue.js-guide-demo/tree/master/render)

#### 过滤器

--> *vue-filter*
  
***
  
### 4. 规模化

#### 4.1 路由

简单路由(用到渲染函数) --> [*vue-router*](https://github.com/carolinezhao/Vue.js-guide-demo/tree/master/vue-router)

more examples: 结合 HTML5 History API, 整合第三方路由

官方路由看 vue-router

### [vue-router docs](https://router.vuejs.org/)

#### 4.2 状态管理

简单状态管理

类 [Flux](https://facebook.github.io/flux/) 状态管理的官方实现

### [vuex docs](https://vuex.vuejs.org/)

