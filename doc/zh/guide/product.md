<img src="http://cdn.dooring.cn/dr/ccc.png" alt="dooring" width="100%">

app-design 是一款功能强大，高可扩展的 H5 可视化页面配置解决方案，致力于提供一套简单方便、专业可靠、无限可能的 H5 落地页最佳实践。

## 背景介绍

**LowCode** 平台这两年在国内热度很高, 也有很多公司在着手设计能支撑更多业务场景的低代码平台, 但是国内发展仍然处于起步阶段, 还有非常多的问题需要处理。就我本人服务过的多家上市公司, 中后台业务非常复杂, 但是通用性非常高, 业务逻辑和展现形态有很多复用性, 为了解决复用性低和研发效能低的问题, **规则引擎** 孕育而生, 当然这只是 **Lowcode/nocode** 的一个过渡方案, 但已经能为企业提高20%以上的研发效率。

当然很多企业早已看到这样的机会, 也研发出了非常优秀的 **LowCode** 产品, 但是由于国内企业业务的复杂性, 很多 **LowCode** 产品都存在一定的局限, 所以各大中小企业也开始研究可视化搭建相关的产品, 可谓“百花齐放”。

[**app-design**](http://h5.dooring.cn/h5_plus) 正是为了解决企业内部可视化搭建需求的解决方案, 它更多的是提供一套可视化搭建解决方案, 以源码的方式交付企业, 使得企业能从此方案中受益, 二次开发适合自身业务需求的搭建平台。当然随着 [**app-design**](http://h5.dooring.cn/h5_plus)  的不断更新和完善, 部分企业甚至不需要二次开发就能直接使用 [**app-design**](http://h5.dooring.cn/h5_plus) , 我们也提供部署服务, 来快速帮企业做项目部署。目前已完成了常用的功能:

- 微信/QQ分享(支持配置微信分享文案, 自定义分享图标)
- https服务支持解决方案
- oss解决方案(已跑通七牛云上传服务)
- 国际化方案

同时由于 **app-design** 的核心在编辑器前端, 也是其最大价值所在, 我们服务层主要提供基础的数据支持服务(用户管理, H5页面管理, 模版管理, 基本页面统计等), 企业也可以轻松接入自己的服务后台,如 **java, php, go, python** 等。所以不用担心整合内部系统之后的数据问题, 同时我建议有二次开发需求的企业需要具备一定的技术能力, 比如**React, Nodejs** 等的开发经验。

## H5编辑器介绍
接下来和大家详细介绍一下 [**app-design**](http://h5.dooring.cn/h5_plus) 编辑器的功能模块。

<img src="http://cdn.dooring.cn/dr/chrome-capture%20%284%29.gif" alt="dooring" width="100%">

### 1.入口页面

入口页面主要是我们在编辑器前台管理用户页面的一个入口, 我们可以创建H5页面, 在线编程等, 同时也能基于已有的精选模版来快速的创建页面:

<img src="http://cdn.dooring.cn/dr/1.png" alt="dooring" width="100%">

### 2.编辑器页面

编辑器页面的内容比较多, 也是最为重要的部分。我们可以从几个部分来介绍:

- 组件区
- 画布区
- 顶部功能区
- 属性编辑面板
- 数据源
- 快捷键
- 国际化

#### 2.1 组件区

<img src="http://cdn.dooring.cn/dr/3.png" alt="dooring" width="100%">

组件主要包括 基础组件, 图表组件, 媒体组件, 商品组件, 功能组件, 当然企业也可以基于自身业务划分不同的分类, 并进行组件的二次开发。我们只需要从左侧拖拽组件到画布, 即可使用该组件。

同时 [**app-design**](http://h5.dooring.cn/h5_plus) 还提供了组件定制的能力, 让用户选择自己常用的组件, 这样用户可以更高效的搭建页面:

<img src="http://cdn.dooring.cn/dr/4.png" alt="dooring" width="100%">

由上图所示, 用户只需要选择或者取消选择, 可以决定组件是否在编辑器页面显示, 如果后期用户想恢复设置, 也可以在该页面恢复。

#### 2.2 画布区

画布区可以动态调整画布大小来试试预览不同尺寸的样式, 也可以移动画布, 缩放画布来快捷的操作页面:

<img src="http://cdn.dooring.cn/dr/13.png" alt="dooring" width="100%">

#### 2.3 顶部功能区

顶部功能区包括的功能有:

- 模版库
- 保存
- 下载源码
- 导出json
- 导入json
- 预览
- 真机预览
- 撤销/重做
- 删除
- 截图
- 页面设置

大家可以亲自体验一下。

#### 2.4 属性编辑面板

<img src="http://cdn.dooring.cn/dr/12.png" alt="dooring" width="100%">

属性编辑面板可以对组件的外观, 逻辑, 交互进行配置, 比较简单但大部分满足业务搭建需求, 企业技术人员也可以增量式地添加更多属性配置。

#### 2.5 数据源

数据源主要为瓶平台用户提供一种高效的数据接入机制, 不同页面或者统同一页面的不同组件可以共享数据:

<img src="http://cdn.dooring.cn/dr/11.png" alt="dooring" width="100%">

更详细的数据源介绍可以参考我的文章 [Dooring可视化搭建平台数据源设计剖析](https://mp.weixin.qq.com/s?__biz=MzU2Mzk1NzkwOA==&mid=2247487877&idx=2&sn=770ff16d69d3e7ac2bbcd78e97ab8f32&chksm=fc53087ecb2481685451a50e892fa889781788ca16a4ce689ec7f7fff1ae99c91ac8b82a160d&token=1373546109&lang=zh_CN#rd)

#### 2.6 快捷键

快捷键主要分为画布内组件的快捷键(复制, 删除)和全局的快捷键, 如下图所示:

<img src="http://cdn.dooring.cn/dr/10.png" alt="dooring" width="100%">

#### 2.7 国际化

国际化目前已支持, 我们只需要在入口页面切换即可:

<img src="http://cdn.dooring.cn/dr/9.png" alt="dooring" width="100%">


### 3.预览页面

用户可以点击顶部功能区的预览按钮一键预览:

<img src="http://cdn.dooring.cn/dr/5.png" alt="dooring" width="100%">

也可以在预览页面, 打开控制台调整为谷歌的仿真预览模式:

<img src="http://cdn.dooring.cn/dr/6.png" alt="dooring" width="100%">

### 4.真机预览

<img src="http://cdn.dooring.cn/dr/7.png" alt="dooring" width="100%">

### 5.登录页面

<img src="http://cdn.dooring.cn/dr/8.png" alt="dooring" width="100%">


## Dooring后台管理介绍

**Dooring后台管理** 主要是为 **app-design** 提供数据支撑, 比如增删查改等操作, 同时随着用户需求的不断增加, **Dooring后台管理** 目前已实现了非常多的功能, 比如说表单数据收集, 表单数据分析, 导出数据, 基本的页面数据监控等, 接下来我就来带大家介绍一下。

<img src="http://cdn.dooring.cn/dr/20.png" alt="dooring" width="100%">

我们可以从上图的编辑器界面右上角头像下拉框中进入后台管理系统。

### 1.后台主页

后台主页主要是对编辑器页面提供基本的访问量统计, 同时对用户数, 模版数, 页面数进行统计, 企业可以根据自身需求二次开发更多数据统计方案。

<img src="http://cdn.dooring.cn/dr/21.png" alt="dooring" width="100%">

### 2.用户管理

用户管理主要是对网站用户进行管理(注册, 修改, 删除, 查看等), 当然只有超级管理员能看到, 目前我们做了简单的权限管理: 超级管理员, 普通用户. 普通用户可以管理自己的页面, 查看页面数据分析等,超级管理员可以使用所有功能, 比如管理用户, 生成注册链接, 模版管理, 页面管理等, 同时可以审核页面, 一键删除其他用户产生的不符合规定的页面。

<img src="http://cdn.dooring.cn/dr/22.png" alt="dooring" width="100%">


### 3.页面管理

页面管理主要是对用户搭建的H5页面进行管理, 我们可以查看页面的链接, 页面访问量, 编辑页面标题, 删除页面等,如果这个页面包含表单, 我们还能一键查看表单数据的收集情况,并一键进行数据分析。

<img src="http://cdn.dooring.cn/dr/24.png" alt="dooring" width="100%">


#### 3.1表单页面数据分析

表单数据分析主要针对有表单的页面, 我们可以一键统计表单数据, 并生成分析报告, 如下图:

<img src="http://cdn.dooring.cn/dr/23.png" alt="dooring" width="100%">

同时我们可以将数据导出为 `excel`, 或者将数据导入, 一键生成数据分析报告, 当然更多分析维度开发者也可以二次开发。

### 4.模版管理

超级管理员可以对用户产生的模版进行预览, 审核, 删除, 保证线上用户使用的模版都是精美可用的:

<img src="http://cdn.dooring.cn/dr/26.png" alt="dooring" width="100%">

### 5.精选模版管理

精选模版主要是用来管理 **app-design** 入口页面中的模版, 我们可以把精美的行业模版上传到精选模版中, 让用户更高效的搭建页面:

<img src="http://cdn.dooring.cn/dr/25.png" alt="dooring" width="100%">

## Dooring后台服务介绍

后台服务主要采用的 koa + nodejs, 同时还使用了微信 `sdk`, 轻松帮我们实现微信相关的功能, 接口遵循 `restful` 规范, 并且提供了接口文档, 企业可以轻松基于此使用自己的后端语言来接入, 比如 java, python, go, php等。


