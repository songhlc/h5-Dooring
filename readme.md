app设计器

文档说明:
- 编辑器页面路由:/editor?id=xxx
- 左侧组件列表 src/materials
- 编辑器主页面:src/pages/editor/index.js
- editor相关页面布局请看src/pages/editor下的readme.md

后端接口
```
- "ws/micro_page/detail?id="
- "ws/micro_page/update"MicroPageDTO{
 "id":1,
 "name":"问问",
 "streamlineInfo":"信息",
 "originalInfo":"原始信息",
 "companyId":1,
}微页面
```

设计图:
https://yapk04.axshare.com/

1.3=》店铺装修 =》微页面管理



本地开发如何登录:

http://localhost:8080/yn-scm  登录后本地代理(.umirc.ts中配置)会跳转到,http://39.108.212.191:8016/yn-scm,手工把url再改成 http://localhost:8080/editor?id=xx  就行
