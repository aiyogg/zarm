(self.webpackChunksite=self.webpackChunksite||[]).push([[9929],{99929:function(n,e,t){"use strict";t.r(e),e.default="# Pull 上拉加载下拉刷新\n\n## 基本用法\n\n```jsx\nimport { useState, useEffect, useRef } from 'react';\nimport { Pull, Cell, Message, Button, ActivityIndicator, BackToTop } from 'zarm';\nimport { WarningCircle, SuccessCircle, CloseCircle } from '@zarm-design/icons';\n\nconst REFRESH_STATE = {\n  normal: 0, // 普通\n  pull: 1, // 下拉刷新（未满足刷新条件）\n  drop: 2, // 释放立即刷新（满足刷新条件）\n  loading: 3, // 加载中\n  success: 4, // 加载成功\n  failure: 5, // 加载失败\n};\n\nconst LOAD_STATE = {\n  normal: 0, // 普通\n  abort: 1, // 中止\n  loading: 2, // 加载中\n  success: 3, // 加载成功\n  failure: 4, // 加载失败\n  complete: 5, // 加载完成（无新数据）\n};\n\nconst getRandomNum = (min, max) => {\n  const Range = max - min;\n  const Rand = Math.random();\n  return min + Math.round(Rand * Range);\n};\n\nconst fetchData = (length, dataSource = []) => {\n  let newData = [].concat(dataSource);\n  const startIndex = newData.length;\n  for (let i = startIndex; i < startIndex + length; i++) {\n    newData.push(<Cell key={+i}>第 {i + 1} 行</Cell>);\n  }\n  return newData;\n};\n\nlet mounted = true;\n\nconst Demo = () => {\n  const pullRef = useRef();\n  const [bodyScroll, setBodyScroll] = useState(false);\n  const [dataSource, setDataSource] = useState([]);\n  const [refreshing, setRefreshing] = useState(REFRESH_STATE.normal);\n  const [loading, setLoading] = useState(LOAD_STATE.normal);\n\n  const toggleScrollContainer = () => {\n    const newBodyScroll = !bodyScroll;\n    setBodyScroll(newBodyScroll);\n\n    if (newBodyScroll) {\n      document.body.style.overflow = 'auto';\n    } else {\n      document.body.style.overflow = 'hidden';\n    }\n  };\n\n  // 模拟请求数据\n  const refreshData = () => {\n    setRefreshing(REFRESH_STATE.loading);\n    setTimeout(() => {\n      if (!mounted) return;\n      setDataSource(fetchData(20));\n      setRefreshing(REFRESH_STATE.success);\n    }, 2000);\n  };\n\n  // 模拟加载更多数据\n  const loadData = () => {\n    setLoading(LOAD_STATE.loading);\n    setTimeout(() => {\n      if (!mounted) return;\n\n      const randomNum = getRandomNum(0, 5);\n      console.log(`状态: ${randomNum === 0 ? '失败' : randomNum === 1 ? '完成' : '成功'}`);\n\n      let loadingState = LOAD_STATE.success;\n      if (randomNum === 0) {\n        loadingState = LOAD_STATE.failure;\n      } else if (randomNum === 1) {\n        loadingState = LOAD_STATE.complete;\n      } else {\n        setDataSource(fetchData(20, dataSource));\n      }\n\n      setLoading(loadingState);\n    }, 2000);\n  };\n\n  useEffect(() => {\n    setDataSource(fetchData(20));\n\n    return () => {\n      mounted = false;\n      document.body.style.overflow = 'auto';\n    };\n  }, []);\n\n  const style = bodyScroll ? {} : { overflowY: 'auto', maxHeight: 400 };\n\n  const scrollContainer = () => {\n    return bodyScroll ? window : pullRef.current && pullRef.current.scrollContainer;\n  };\n\n  return (\n    <>\n      <Message theme=\"warning\" icon={<WarningCircle />}>\n        当前使用的是 `{bodyScroll ? 'window' : 'div'}` 作为滚动容器。\n        <Button theme=\"primary\" size=\"xs\" onClick={toggleScrollContainer}>\n          点击切换\n        </Button>\n      </Message>\n      <Pull\n        ref={pullRef}\n        style={style}\n        refresh={{\n          state: refreshing,\n          handler: refreshData,\n          // render: (refreshState, percent) => {\n          //   const cls = 'custom-control';\n          //   switch (refreshState) {\n          //     case REFRESH_STATE.pull:\n          //       return (\n          //         <div className={cls}>\n          //           <ActivityIndicator loading={false} percent={percent} />\n          //           <span>下拉刷新</span>\n          //         </div>\n          //       );\n\n          //     case REFRESH_STATE.drop:\n          //       return (\n          //         <div className={cls}>\n          //           <ActivityIndicator loading={false} percent={100} />\n          //           <span>释放立即刷新</span>\n          //         </div>\n          //       );\n\n          //     case REFRESH_STATE.loading:\n          //       return (\n          //         <div className={cls}>\n          //           <ActivityIndicator type=\"spinner\" />\n          //           <span>加载中</span>\n          //         </div>\n          //       );\n\n          //     case REFRESH_STATE.success:\n          //       return (\n          //         <div className={cls}>\n          //           <SuccessCircle theme=\"success\" />\n          //           <span>加载成功</span>\n          //         </div>\n          //       );\n\n          //     case REFRESH_STATE.failure:\n          //       return (\n          //         <div className={cls}>\n          //           <CloseCircle theme=\"danger\" />\n          //           <span>加载失败</span>\n          //         </div>\n          //       );\n\n          //     default:\n          //   }\n          // },\n        }}\n        load={{\n          state: loading,\n          distance: 200,\n          handler: loadData,\n          // render: (loadState) => {\n          //   const cls = 'custom-control';\n          //   switch (loadState) {\n          //     case LOAD_STATE.loading:\n          //       return <div className={cls}><ActivityIndicator type=\"spinner\" /></div>;\n\n          //     case LOAD_STATE.failure:\n          //       return <div className={cls}>加载失败</div>;\n\n          //     case LOAD_STATE.complete:\n          //       return <div className={cls}>我是有底线的</div>;\n          //   }\n          // },\n        }}\n      >\n        {dataSource}\n      </Pull>\n      <BackToTop scrollContainer={scrollContainer} onClick={() => console.log('click back to top')}>\n        <div\n          style={{\n            width: 60,\n            height: 60,\n            lineHeight: '60px',\n            textAlign: 'center',\n            backgroundColor: '#fff',\n            color: '#999',\n            fontSize: 20,\n            borderRadius: 30,\n            boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.2)',\n            cursor: 'pointer',\n          }}\n        >\n          Up\n        </div>\n      </BackToTop>\n    </>\n  );\n};\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n## API\n\n| 属性              | 类型   | 默认值 | 说明                     |\n| :---------------- | :----- | :----- | :----------------------- |\n| refresh           | Action | -      | 下拉刷新的参数配置       |\n| load              | Action | -      | 上拉加载的参数配置       |\n| animationDuration | number | 400    | 动画执行时间，单位：毫秒 |\n| stayTime          | number | 1000   | 加载成功停留时间         |\n\n### Action 类型定义\n\n| 属性          | 类型                                                                          | 默认值 | 说明                                                                  |\n| :------------ | :---------------------------------------------------------------------------- | :----- | :-------------------------------------------------------------------- |\n| state         | REFRESH_STATE &#124; LOAD_STATE                                               | 0      | 状态枚举                                                              |\n| startDistance | number                                                                        | 30     | 下拉时的助跑距离，单位：px                                            |\n| distance      | number                                                                        | 30     | 触发距离阀值，单位：px；下拉刷新阀值默认为 30px，上拉加载阀值默认为 0 |\n| render        | (refreshState: REFRESH_STATE &#124; LOAD_STATE, percent: number) => ReactNode | -      | 各状态渲染的回调函数                                                  |\n| handler       | () => void                                                                    | -      | 达到阀值后释放触发的回调函数                                          |\n\n### REFRESH_STATE 枚举定义\n\n| 枚举值  | 说明                         |\n| :------ | :--------------------------- |\n| normal  | 普通状态                     |\n| pull    | 下拉状态（未满足刷新条件）   |\n| drop    | 释放立即刷新（满足刷新条件） |\n| loading | 加载中                       |\n| success | 加载成功                     |\n| failure | 加载失败                     |\n\n### LOAD_STATE 枚举定义\n\n| 枚举值   | 说明     |\n| :------- | :------- |\n| normal   | 普通状态 |\n| abort    | 终止状态 |\n| loading  | 加载中   |\n| success  | 加载成功 |\n| failure  | 加载失败 |\n| complete | 加载完成 |\n"}}]);