<!--
 * @Date: 2021-01-20 23:25:29
 * @LastEditors: xuxiaoxi
 * @LastEditTime: 2021-01-22 21:48:34
 * @FilePath: /github-app-design/doc/zh/guide/deployDev/deploy.md
-->

**app-design**后端部分主要使用 `Nodejs` 开发, 为了满足更多定制化需求和服务的可移植性, 特意编写了API接口文档,
方便大家使用不同的后端语言实现服务接入. 
- 注意: 接口统一前缀为`/api/v0`

## 用户相关

### 用户登录

用户登录接口
- `POST` /vip/check

| 参数名        |  是否必选  |   类型   |    说明    |
| ------------- |:-------------:|:-----:| -------------:|
| n     | true | string | 用户名 |
| co      | true | string | 密码 |

返回示例
``` json
{
    "result": { 
        "n": "test", 
        "od": [], 
        "h5": [
            {
                "t": "23242ED",
                "n": "测试页面"
            }
        ], 
        "rp": "AAAAA", 
        "maxage": 300000 
    }
}
```

### 注销登录

注销接口
- `POST` /vip/checkout

返回示例
``` json
{ 
    "result": null, 
    "msg": "退出成功"
}
```


### 权限控制

不同用户级别所访问的页面权限不同, 这块可结合服务端已有代码设计属于自己的权限字段, 地址为`server/src/router`

### 用户列表

获取用户列表接口
- `GET` /vip/all

获取用户列表需要账号满足以下条件:
- 已登录
- 为超级管理员

返回示例
``` json
[
    {
        "id": "", 
        "n": "test", 
        "co": "123456", 
        "od": [], 
        "h5": [
            {
                "t": "23242ED",
                "n": "测试页面"
            }
        ], 
        "wx": "Mr_xuxiaoxi", 
        "rp": "AAAAA"
    }
]
```

### 添加用户

添加用户接口
- `POST` /vip/add

先决条件:
- 用户已登陆
- 为超级管理员

| 参数名        |  是否必选  |   类型   |    说明    |
| ------------- |:-------------:|:-----:| -------------:|
| nickname    | true | string | 用户名 |
| wx      | true | string | 微信号 |
| co      | true | string | 密码 |

注: co是由笔者写的`加密算法`实现, 不需要手动填写, 详情见`dooirng`后台管理/用户管理页面.

返回示例
``` json
{
    "id": "3422EF",
    "n": "test",
    "wx": "Mr_xuxiaoxi",
    "co": "123456",
    "od": [],
    "h5": [],
    "tpl": [],
    "rp": "AAAAA",
    "h5Num": 10,
    "tplNum": 3
}
```

### 生成登录码

生成登录码接口
- `GET` /vip/gcode

先决条件:
- 用户已登陆
- 为超级管理员


注: 生成登录码是由笔者写的`加密算法`实现, 不需要手动实现, 如果有自定义需求, 可以自行二次开发实现.

返回示例
``` json
{
    "co": "1x2fgggteee3456_zdd4",
}
```

`说明:` 为了保护用户信息安全, 返回的登录码是加密后的密文, 会调用笔者写的`xib.xip`方法进行加密, 如果想看到原始密码, 需要调用`xib.uxip`进行解密.

### 获取用户真实密码

获取用户真实密码接口
- `GET` /vip/gcode/get

先决条件:
- 用户已登陆
- 为超级管理员

| 参数名        |  是否必选  |   类型   |    说明    |
| ------------- |:-------------:|:-----:| -------------:|
| co      | true | string | 加密后的密码 |

返回示例
``` json
{
    "co": "12345678",
}
```

### 修改用户信息

修改用户接口
- `POST` /vip/edit

先决条件:
- 用户已登陆
- 为超级管理员

| 参数名        |  是否必选  |   类型   |    说明    |
| ------------- |:-------------:|:-----:| -------------:|
| id    | false | string | 用户ID |
| nickname      | false | string | 用户名 |
| co      | false | string | 登录码 |
| wx      | false | string | 微信号 |

返回示例
``` json
{
    "state": 200,
    "result": null,
    "msg": "修改成功",
}
```

### 删除用户

删除用户接口
- `DELETE` /vip/del

先决条件:
- 用户已登陆
- 为超级管理员

| 参数名        |  是否必选  |   类型   |    说明    |
| ------------- |:-------------:|:-----:| -------------:|
| id    | true | string | 用户ID |
| wx      | true | string | 微信号 |
| n      | true | string | 用户名 |

返回示例
``` json
{
    "state": 200,
    "result": null,
    "msg": "删除成功",
}
```

## H5页面管理

### 获取H5数据
- `GET` /visible/h5/get

先决条件:
- 用户已登陆

| 参数名        |  是否必选  |   类型   |    说明    |
| ------------- |:-------------:|:-----:| -------------:|
| tid    | true | string | H5唯一id |

返回示例
``` json
{
    "pageConfig": {
        
    },
    "tpl": [
        {
            "id": "879742",
            "item": {
                "type": "Carousel",
                "config": {
                    "direction": "left",
                    "swipeable": false,
                    "autoPlay": false,
                    "imgList": [
                        {
                            "id": "1",
                            "title": "趣谈小课1",
                            "desc": "致力于打造优质小课程",
                            "link": "xxxxx",
                            "imgUrl": [
                                {
                                    "uid": "001",
                                    "name": "image.png",
                                    "status": "done",
                                    "url": "http://io.nainor.com/uploads/1_1740bd7c3dc.png"
                                }
                            ]
                        },
                        {
                            "id": "2",
                            "title": "趣谈小课1",
                            "desc": "致力于打造优质小课程",
                            "link": "xxxxx",
                            "imgUrl": [
                                {
                                    "uid": "001",
                                    "name": "image.png",
                                    "status": "done",
                                    "url": "http://io.nainor.com/uploads/2_1740bd8d525.png"
                                }
                            ]
                        }
                    ],
                    "tplImg": "http://io.nainor.com/uploads/carousal_17442e1420f.png"
                },
                "h": 82,
                "editableEl": [
                    {
                        "key": "direction",
                        "name": "方向",
                        "type": "Radio",
                        "range": [
                            {
                                "key": "down",
                                "text": "从上到下"
                            },
                            {
                                "key": "left",
                                "text": "从左到右"
                            }
                        ]
                    },
                    {
                        "key": "swipeable",
                        "name": "是否可拖拽",
                        "type": "Switch"
                    },
                    {
                        "key": "autoPlay",
                        "name": "是否自动播放",
                        "type": "Switch"
                    },
                    {
                        "key": "imgList",
                        "name": "图片列表",
                        "type": "DataList"
                    }
                ],
                "category": "base"
            },
            "point": {
                "i": "x-0",
                "x": 0,
                "y": 13,
                "w": 24,
                "h": 82,
                "isBounded": true
            },
            "status": "inToCanvas"
        },
        {
            "id": "481194",
            "item": {
                "type": "Form",
                "config": {
                    "title": "表单定制组件",
                    "fontSize": 18,
                    "titColor": "rgba(60,60,60,1)",
                    "titWeight": "400",
                    "bgColor": "rgba(255,255,255,1)",
                    "btnColor": "rgba(20,54,226,100)",
                    "btnTextColor": "rgba(255,255,255,1)",
                    "api": "",
                    "formControls": [
                        {
                            "id": "1",
                            "type": "Text",
                            "label": "姓名",
                            "placeholder": "请输入姓名"
                        },
                        {
                            "id": "2",
                            "type": "Number",
                            "label": "年龄",
                            "placeholder": " 请输入年龄"
                        },
                        {
                            "id": "4",
                            "type": "MySelect",
                            "label": "爱好",
                            "options": [
                                {
                                    "label": "选项一",
                                    "value": "1"
                                },
                                {
                                    "label": "选项二",
                                    "value": "2"
                                },
                                {
                                    "label": "选项三",
                                    "value": "3"
                                }
                            ]
                        }
                    ]
                },
                "h": 172,
                "category": "base"
            },
            "point": {
                "i": "x-1",
                "x": 0,
                "y": 98,
                "w": 24,
                "h": 172,
                "isBounded": true
            },
            "status": "inToCanvas"
        }
    ]
}
```

### 保存H5数据
- `POST` /visible/h5/save

先决条件:
- 用户已登陆

| 参数名        |  是否必选  |   类型   |    说明    |
| ------------- |:-------------:|:-----:| -------------:|
| pageConfig    | false | object | H5页面配置数据 |
| tpl    | true | object | H5页面组件配置数据 |
| tid    | true | string | H5页面唯一id |

参数示例
``` json
{
    "pageConfig": {
        "bgColor":"rgba(151,25,25,1)",
        "title":"医院宣传页"
    },
    "tpl": [],
    "tid": "EF123D3"
}
```

返回示例
``` json
{
    "state": 200,
    "result": {
        "tid": "EF123D3"
    },
    "msg": "保存成功"
}
```

### 删除H5数据
- `DELETE` /visible/h5/del

先决条件:
- 用户已登陆

| 参数名        |  是否必选  |   类型   |    说明    |
| ------------- |:-------------:|:-----:| -------------:|
| tid    | true | string | H5页面唯一id |

返回示例
``` json
{
    "state": 200,
    "result": [
        {
            "tid": "EF123D3",
            "name": "test页面"
        },
        {
            "tid": "EF123D6",
            "name": "test2页面"
        }
    ],
    "msg": "删除成功"
}
```

## H5表单数据管理

### 保存表单数据
- `POST` /vip/h5/form/post


| 参数名        |  是否必选  |   类型   |    说明    |
| ------------- |:-------------:|:-----:| -------------:|
| tid(query)    | true | string | H5页面唯一id |
| formData(body)    | true | array | H5页面表单数据 |

返回示例
``` json
{
    "state": 200,
    "result": null,
    "msg": "表单提交成功"
}
```

### 批量导入表单数据
- `POST` /vip/h5/form/import


| 参数名        |  是否必选  |   类型   |    说明    |
| ------------- |:-------------:|:-----:| -------------:|
| tid(query)    | true | string | H5页面唯一id |
| formData(body)    | true | array | H5页面表单数据集合 |

返回示例
``` json
{
    "state": 200,
    "result": null,
    "msg": "批量导入成功"
}
```

### 删除表单数据
- `DELETE` /vip/h5/form/del


| 参数名        |  是否必选  |   类型   |    说明    |
| ------------- |:-------------:|:-----:| -------------:|
| tid    | true | string | H5页面唯一id |
| ID    | true | string | 表单专属id |

返回示例
``` json
{
    "state": 200,
    "result": null,
    "msg": "删除成功"
}
```

## 模版管理

### 获取模版库
- `GET` /visible/tpls/free

返回示例
``` json
{
    "state": 200,
    "result": [
        {
            "img": "http://xxx/uploads/tpl_175adabd8dd.jpg",
            "name": "合作模版",
            "tid": "B73349B6"
        }
    ]
}
```

### 保存模版

- `POST` /visible/tpl/save

先决条件:
- 用户已登陆

| 参数名        |  是否必选  |   类型   |    说明    |
| ------------- |:-------------:|:-----:| -------------:|
| name    | true | string | H5模版名称 |
| cate    | true | string | H5模版分类 |
| img    | false | string | H5模版封面图 |
| tpl   | true | array | H5模版数据 |
| pageConfig   | false | object | H5模版全局配置 |

返回示例
``` json
{
    "state": 200,
    "result": {
        "tid": "B73349B6"
    },
    "msg": "保存成功"
}
```

### 删除模版
- `DELETE` /visible/tpl/del

先决条件:
- 用户已登陆

| 参数名        |  是否必选  |   类型   |    说明    |
| ------------- |:-------------:|:-----:| -------------:|
| tid    | true | string | H5模版id |

返回示例
``` json
{
    "state": 200,
    "result": null,
    "msg": "删除成功"
}
```

## 文件上传

- `POST` /files/upload/free

先决条件:
- 用户已登陆

| 参数名        |  是否必选  |   类型   |    说明    |
| ------------- |:-------------:|:-----:| -------------:|
| File    | true | File | 文件对象 |

返回示例
``` json
{
    "state": 200,
    "result": {
        "filename": "app-design",
        "url": "http://h5.dooring.cn/uploads/1_17ac208480d.png",
        "size": 261972
    },
    "msg": "文件上传成功"
}
```

## 数据统计

### 数据大盘接口

- `GET` /vip/dashboard

先决条件:
- 用户已登陆

返回示例
``` json
{
    "state": 200,
    "result": {
        "userNums": 1300, 
        "pageNums": 808,
        "tplNums": 86,
        "views": 60235,
        "userList": []
    }
}
```

## 组件商店

### 组件上传

- `POST` /visible/cp/save

先决条件:
- 用户已登陆

| 参数名        |  是否必选  |   类型   |    说明    |
| ------------- |:-------------:|:-----:| -------------:|
| react    | true | string | react字符串 |
| css    | true | string | css字符串 |
| schema    | true | string | schema字符串 |
| form    | true | object | 表单对象 |

返回示例
``` json
{
    "state": 200,
    "result": null,
    "msg": "提交成功, 请等待审核..."
}
```

### 获取组件上传列表

- `GET` /visible/cp/list

先决条件:
- 用户已登陆

返回示例
``` json
{
    "state": 200,
    "result": [
        {
            "cpName":"test",
            "cpField":"test",
            "cate":"base",
            "width":3,
            "height":6,
            "icon":"http://196.345.0.345:3000/uploads/1_17a8a4eaedf.png",
            "ispass":3
        },
        {
            "cpName":"test2",
            "cpField":"test2",
            "cate":"media",
            "width":4,
            "height":20,
            "icon":"http://196.345.0.345:3000/uploads/1_17a8a4eaedf.png",
            "ispass":1
        }
    ],
}
```

### 获取组件详情

- `GET` /visible/cp/get

先决条件:
- 用户已登陆

| 参数名        |  是否必选  |   类型   |    说明    |
| ------------- |:-------------:|:-----:| -------------:|
| cate    | true | string | 组件分类 |
| cpField    | true | string | 组件英文名字段 |

返回示例
``` json
{
    "state": 200,
    "result": {
        "react": "react代码",
        "css": "css/less代码",
        "schema": "schema的js/ts代码"
    }
}
```

### 更新组件审批状态

- `POST` /visible/cp/update

先决条件:
- 用户已登陆

| 参数名        |  是否必选  |   类型   |    说明    |
| ------------- |:-------------:|:-----:| -------------:|
| cate    | true | string | 组件分类 |
| cpField    | true | string | 组件英文名字段 |
| ispass    | true | number | 组件审核状态, 0 待处理 1 审核中 2 审核通过 3 审核不通过 |


返回示例
``` json
{
    "state": 200,
    "result": null,
    "msg": "审批成功"
}
```

### 删除组件

- `DELETE` /visible/cp/del

先决条件:
- 用户已登陆

| 参数名        |  是否必选  |   类型   |    说明    |
| ------------- |:-------------:|:-----:| -------------:|
| cate    | true | string | 组件分类 |
| cpField    | true | string | 组件英文名字段 |

返回示例
``` json
{
    "state": 200,
    "result": null,
    "msg": "删除成功"
}
```

### 下载组件源码

- `POST` /visible/cp/download

先决条件:
- 用户已登陆

| 参数名        |  是否必选  |   类型   |    说明    |
| ------------- |:-------------:|:-----:| -------------:|
| cate    | true | string | 组件分类 |
| cpField    | true | string | 组件英文名字段 |

返回示例
``` json
{
    "state": 200,
    "result": "组件压缩包地址"
}
```

## 数据源管理

### 获取用户数据源

- `GET` /vip/sourcedata/get

先决条件:
- 用户已登陆

返回示例
``` json
{
    "state": 200,
    "result": [],
}
```

### 保存用户数据源

- `POST` /vip/sourcedata/save

先决条件:
- 用户已登陆

| 参数名        |  是否必选  |   类型   |    说明    |
| ------------- |:-------------:|:-----:| -------------:|
| sourcedata  | true | array | 用户数据源集合 |

返回示例
``` json
{
    "state": 200,
    "result": []
}
```
