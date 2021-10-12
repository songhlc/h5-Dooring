editor说明

## 说明
- 入口 index.js
- 主页面Container.tsx


## 区域划分

- 头部操作区域
- 左侧组件选择区域
  - 对应 tabRender 变量的组件
  - 每个列表内的组件使用<DynamicEngine></DynamicEngine>组件渲染(使用<targetBox></targetBox>包装用于拖拽)
  - 基础组件从template变量里取,@/materials/base/template
- 中间画布区域
  - 对应组件<SourceBox></SourceBox>
- 右侧属性设置区域
  - 对应 renderRight 变量的组件

注意:targetBox和SourceBox引入的时候组件名是反的要注意.