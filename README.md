# eMenu

### 项目大体结构
```
emenu
├── README.md
├── config // 配置项
│   └── env // 环境
│       └── 3003.js
├── db.js // 文件读写操作
├── package.json
├── project.config.json
├── src
│   ├── app.wpy
│   ├── assets
│   ├── common
│   │   └── eventHub.js
│   ├── components
│   │   └── list.wpy
│   ├── env.js // 配置文件项，运行时生成
│   ├── mixins
│   │   └── test.js
│   ├── pages
│   │   └── index.wpy
│   ├── plugins // 插件
│   │   └── service.js
│   ├── server  // 接口相关
│   │   └── test.js
│   └── store
│       └── index.js
├── static
├── wepy.config.js
└── yarn.lock
```