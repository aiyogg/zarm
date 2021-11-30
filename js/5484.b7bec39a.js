(self.webpackChunksite=self.webpackChunksite||[]).push([[5484],{5484:function(n,r,e){"use strict";e.r(r),r.default="# NavBar 导航栏\n\n## 左侧渲染\n\n```jsx\nimport { NavBar } from 'zarm';\nimport { ArrowLeft } from '@zarm-design/icons';\n\nReactDOM.render(\n  <NavBar\n    left={<ArrowLeft theme=\"primary\" onClick={() => window.history.back()} />}\n    title=\"这是标题\"\n  />,\n  mountNode,\n);\n```\n\n## 右侧渲染\n\n```jsx\nimport { NavBar } from 'zarm';\nimport { Plus } from '@zarm-design/icons';\n\nReactDOM.render(\n  <NavBar\n    title=\"这是标题这是标题这是标题\"\n    right={\n      <Plus theme=\"primary\" onClick={() => window.alert('click icon')} />\n    }\n  />,\n  mountNode,\n);\n```\n\n## 复数渲染\n\n```jsx\nimport { NavBar, Icon } from 'zarm';\nimport { ArrowLeft, Search, Plus } from '@zarm-design/icons';\n\nReactDOM.render(\n  <NavBar\n    left={<ArrowLeft theme=\"primary\" onClick={() => window.history.back()} />}\n    title=\"这是标题\"\n    right={\n      <>\n        <Plus\n          theme=\"primary\"\n          onClick={() => alert('click icon1')}\n          style={{ marginRight: 16 }}\n        />\n        <Search theme=\"primary\" onClick={() => alert('click icon2')} />\n      </>\n    }\n  />,\n  mountNode,\n);\n```\n\n## API\n\n| 属性  | 类型      | 默认值 | 说明           |\n| :---- | :-------- | :----- | :------------- |\n| title | ReactNode | -      | 标题渲染       |\n| left  | ReactNode | -      | 导航栏左侧渲染 |\n| right | ReactNode | -      | 导航栏右侧渲染 |\n"}}]);