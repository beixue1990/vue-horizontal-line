<template>
  <div id="app">
    <div style="display: inline-block; width: 20%;">
      此处模拟侧边栏
    </div>
    <div style="display: inline-block; width: 70%;">
      <VueHorizontalLine style="width: 100%; height: 500px; border: 1px solid black;" :items="items" :container-background-color="containerBackgroundColor" @on-click-content="clickContent" @on-click-dot="clickDot" @on-click-instruction="clickInstruction" @on-click-line="clickLine"></VueHorizontalLine>
    </div>
  </div>
</template>

<script>
import VueHorizontalLine from './components/vue-horizontal-line.vue'
export default {
  name: 'app',
  components: { VueHorizontalLine },
  data () {
    return {
      containerBackgroundColor: 'rgb(253 252 251)',
      items: [
        {
          instruction: '2020-11-01',
          content: '第一天的内容',
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
