# es6-lib-seed

## 准备工作

- 安装Node，版本>=6

- 安装代码生成器

```
npm i yo -g
npm i generator-es6lib -g
```

## 如何增加库文件

```
yo es6lib:add-lib
```

## 如何增加一个方法

```
yo es6lib:add-func
```

## 如何运行单元测试

- Node

```
npm run test
```

- Browser

```
npm run test-browser
```

然后把`test/runner.html`直接拖到浏览器打开即可
