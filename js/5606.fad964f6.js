(self.webpackChunksite=self.webpackChunksite||[]).push([[5606],{45606:function(n,e,r){"use strict";r.r(e),e.default='# 定制主题\n\nZarm 的样式使用了 <a href="https://sass-lang.com" target="_blank">scss</a> 和 <a href="https://www.w3.org/Style/CSS/" target="_blank">css 变量</a> 相结合做为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整，实现定制主题的能力。\n\nZarm 提供了一个 React 组件 [ConfigProvider](#/components/config-provider) 用于快速定制主题。\n\n## 品牌标准色\n\n目前的默认的品牌标准色是 `#00bc70`，如果需要使用其他颜色，可以参考下面的方案。\n\n```jsx\nreturn (\n  <ConfigProvider primaryColor="#1890ff">\n    <App />\n  </ConfigProvider>\n);\n```\n\n## 暗黑主题\n\n除了目前提供的默认主题外，我们还提供了一套暗黑主题，可以参考下面的方案进行配置。\n\n```jsx\nreturn (\n  <ConfigProvider theme="dark">\n    <App />\n  </ConfigProvider>\n);\n```\n\n## 深度定制\n\n可以通过修改 zarm 开放出来的 css 变量的方式深度定制你的样式。\n\n```js\ndocument.documentElement.style.setProperty(\'--theme-primary\', \'#108ee9\');\n```\n\n以下是一些最常用的通用变量，所有样式变量可以在 <a href="https://github.com/ZhongAnTech/zarm/blob/master/packages/zarm/src/style/themes/default.scss" target="_blank">这里</a> 找到。\n\n```scss\n--theme-primary: #00bc70; // 全局主色\n--theme-success: #00bc70; // 成功色\n--theme-warning: #ec9231; // 警告色\n--theme-danger: #ff5050; // 危险色\n```\n'}}]);