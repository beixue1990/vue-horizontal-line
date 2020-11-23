<div align="center">
  <h1>Vue Horizontal Line</h1>
</div>

> Vue Horizontal Line 是一个水平方向（横向）进行多数据展示的组件，最常见的应用场景为水平（横向）时间轴，但也可用于其它类似场景。

## 支持 Support Vue 2.5+
## 入门指南 Getting started

### 安装 Install
``` bash
# 使用npm
npm install vue-horizontal-line --save
```
### 引入 Import
``` js
import VueHorizontalLine from 'vue-horizontal-line';
```
### 加入到 Vue 组件 Vue Components
``` js
export default {
  components: {
    VueHorizontalLine
  }
};
```
## 使用 Usage
``` html
<template>
    <VueHorizontalLine style="width: 100%; height: 500px; border: 1px solid black;" :items="items" :container-background-color="containerBackgroundColor" @on-click-content="clickContent" @on-click-dot="clickDot" @on-click-instruction="clickInstruction" @on-click-line="clickLine"></VueHorizontalLine>
</template>

<script>
export default {
  name: 'app',
  components: { 
    VueHorizontalLine: () => { return import('vue-horizontal-line') }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      containerBackgroundColor: 'rgb(253 252 251)',
      items: [
        {
          instruction: '2020-11-01',
          content: null,
          dotColor: null,
          lineColor: null,
          itemCenter: false
        },
        {
          instruction: '2020-11-02',
          content: null,
          dotColor: null,
          lineColor: null,
          itemCenter: false
        },
        {
          instruction: '2020-11-03',
          content: null,
          dotColor: null,
          lineColor: null,
          itemCenter: false
        },
        {
          instruction: '2020-11-04',
          content: null,
          dotColor: null,
          lineColor: null,
          itemCenter: false
        },
        {
          instruction: '2020-11-05',
          content: null,
          dotColor: null,
          lineColor: null,
          itemCenter: false
        },
        {
          instruction: '2020-11-06',
          content: null,
          dotColor: null,
          lineColor: null,
          itemCenter: false
        },
        {
          instruction: '2020-11-07',
          content: null,
          dotColor: null,
          lineColor: null,
          itemCenter: false
        },
        {
          instruction: '2020-11-08',
          content: null,
          dotColor: null,
          lineColor: null,
          itemCenter: false
        },
        {
          instruction: '2020-11-09',
          content: '今天除了工作什么都没做，除了bug什么都没写。\n今天除了工作什么都没做，除了bug什么都没写。\n今天除了工作什么都没做，除了bug什么都没写。\n今天除了工作什么都没做，除了bug什么都没写。\n今天除了工作什么都没做，除了bug什么都没写。',
          dotColor: null,
          lineColor: null,
          itemCenter: false
        },
        {
          instruction: '今天',
          content: '此处模拟报告漏报\n以此点为中心居中',
          dotColor: '#ed4014',
          lineColor: '#19be6b',
          itemCenter: true
        },
        {
          instruction: '2020-11-11',
          content: null,
          dotColor: null,
          lineColor: null,
          itemCenter: false
        },
        {
          instruction: '2020-11-12',
          content: null,
          dotColor: null,
          lineColor: null,
          itemCenter: false
        },
        {
          instruction: '2020-11-13',
          content: null,
          dotColor: null,
          lineColor: null,
          itemCenter: false
        },
        {
          instruction: '2020-11-14',
          content: null,
          dotColor: null,
          lineColor: null,
          itemCenter: false
        },
        {
          instruction: '2020-11-15',
          content: null,
          dotColor: null,
          lineColor: null,
          itemCenter: false
        }
      ]
    }
  },
  methods: {
    clickContent (item) {
      alert(`点击了【内容】，参数：${JSON.stringify(item)}`)
    },

    clickInstruction (item) {
      alert(`点击了【介绍】，参数：${JSON.stringify(item)}`)
    },

    clickDot (item) {
      alert(`点击了【点】，参数：${JSON.stringify(item)}`)
    },

    clickLine (item) {
      alert(`点击了【线】，参数：${JSON.stringify(item)}`)
    }
  }
}
</script>
```
## API
### Props 属性
|属性|说明|类型|默认值|
|-|-|-|-|
|items|显示的结构化数据|Array|[]|
|container-background-color|容器背景色|String|#fff|
|line-color|水平线默认颜色|String|#e5e6eb|
### 事件 Events
|事件名|说明|返回值|
|-|-|-|
|on-click-content|内容卡片点击事件|当前点击的数据项|
|on-click-instruction|介绍点击事件|当前点击的数据项|
|on-click-dot|圆点点击事件|当前点击的数据项|
|on-click-line|线段点击事件|当前点击的数据项|
### 数据项属性 Items Props
|属性|说明|类型|默认值|
|-|-|-|-|
|content|卡片展示的内容|String|空|
|instruction|内容卡片对应的说明|String|空|
|dotColor|点的颜色|String|#2d8cf0|
|lineColor|线段的颜色|String|#e5e6eb|
|itemCenter|是否以此点为页面的中心。当有多个值为true时以最后一个为准。|Boolean|false|