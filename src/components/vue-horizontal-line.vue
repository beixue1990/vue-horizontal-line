<template>
  <div class="vhl" :style="{ backgroundColor: containerBackgroundColor }" ref="vhl">
    <ul class="vhl-container">
      <!--线-->
      <li class="vhl-line" v-for="(item, index) in items" :key="index" :style="{ backgroundColor: item.lineColor || lineColor }" @click.stop="clickEmit(ConstEvent.ClickLine, item)" :ref="item.itemCenter ? constItemCenterRef : null">
        <!-- 点 -->
        <i class="vhl-dot" :style="{ borderColor: item.dotColor }" @click.stop="clickEmit(ConstEvent.ClickDot, item)"></i>
        <!-- 显示介绍的卡片 -->
        <div class="vhl-card-instruction" :title="item.instruction" @click.stop="clickEmit(ConstEvent.ClickInstruction, item)">{{ item.instruction }}</div>
        <!-- 显示内容的卡片 -->
        <div class="vhl-card-content" @click.stop="clickEmit(ConstEvent.ClickContent, item)" v-if="item.content">
          <span class="vhl-card-inner-content" :title="item.content" v-html="fnHtmlLineBreak(item.content)"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vue-horizontal-line',
  data () {
    return {
      ConstEvent: Object.freeze({
        ClickContent: 'on-click-content',
        ClickInstruction: 'on-click-instruction',
        ClickDot: 'on-click-dot',
        ClickLine: 'on-click-line'
      }),
      constItemCenterRef: 'ref_item_center'
    }
  },
  props: {
    // 总体配置
    items: { // 数据数组，格式为{ content: '这里是内容', instruction: '这里是介绍', 'dot-color': '点的颜色，默认#2d8cf0', 'lineColor': '线的颜色', 'itemCenter' }
      type: Array,
      default () {
        return []
      }
    },
    containerBackgroundColor: { // 整个图区域的背景色
      type: String,
      default: '#fff'
    },
    lineColor: { // 横线的默认颜色
      type: String,
      default: '#e5e6eb'
    },
  },
  methods: {
    fnHtmlLineBreak (str = '') {
      let result
      if (str) {
          result = str.toString().replace(/\n|\r\n/g, '<br>')
      } else {
          result = ''
      }
      return result
    },

    // 点击事件
    clickEmit (eventName, item) {
      this.$emit(eventName, item)
    },

    // 滑动到指定位置
    instructionLineSlide () {
      this.$nextTick(() => {
        const itemCenterVue = this.$refs[this.constItemCenterRef]
        if (itemCenterVue) {
          const itemCenterDom = itemCenterVue[0]
          if (itemCenterDom) {
            const container = this.$refs.vhl // 最外层容器
            const containerWidth = container.clientWidth
            const itemCenterDomLeft =  itemCenterDom.offsetLeft // 中间节点的左边距
            container.scrollLeft = itemCenterDomLeft - (containerWidth / 2) + 175
          }
        }
      })
    }
  },
  watch: {
    items: {
      handler (newValue) {
        if (newValue && newValue.length) {
          this.instructionLineSlide()
        }
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="less" scoped>
  * {
    box-sizing: border-box;
  }
  @line-color-default: #e5e6eb;
  .vhl {
    background-color: #fff;
    width: 100%;
    overflow-x: auto;
    display: flex;
    align-items: center;
    font-size: 14px;
    text-align: left;
    line-height: 1.5;

    .vhl-container {
      white-space: nowrap;
      padding: 0 180px;
      position: relative;
      list-style: none;

      .vhl-line {
        display: inline-block;
        cursor: pointer;
        height: 3px;
        background-color: @line-color-default;
        width: 180px;
        margin: 0 0;
        position: relative;
        white-space: normal;
        
        .vhl-card-instruction {
          cursor: pointer;
          position: absolute;
          left: 120px;
          margin: 10px;
          width: 85px;
          text-align: center;
        }

        .vhl-card-content {
          width: 269px;
          height: 185px;
          cursor: pointer;
          position: absolute;
          left: 37px;
          padding: 10px;
          border: 1px solid @line-color-default;
          top: 20px;
          border-radius: 3px;
          
          .vhl-card-inner-content {
            overflow: hidden;
            display: -webkit-box;
            text-overflow: ellipsis;
            -webkit-line-clamp: 8;  /*要显示的行数*/
            -webkit-box-orient: vertical;
          }

          &:before {
            content: "";
            width: 0;
            height: 0;
            border-style: solid;
            box-sizing: border-box;
            position: absolute;
            left: 126px;
          }
        }

        &:first-child {
          width: 0;
          .vhl-card-instruction {
            left: -60px;
          }
          .vhl-card-content {
            left: -144px;
          }
        }
        .vhl-dot {
          cursor: pointer;
          position: absolute;
          top: 50%;
          right: 0;
          bottom: 0;
          width: 15px;
          height: 15px;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          border-radius: 50%;
          background: #fff;
          border: 3px solid #2d8cf0;
        }

        &:nth-child(even) {
          .vhl-card-instruction {
            top: -40px;
          }
          .vhl-card-content::before {
            border-width: 0 8px 8px 8px;
            border-color: transparent transparent white transparent;
            filter: drop-shadow(1px -1px 1px rgba(0, 0, 0, 0.2));
            top: -8px;
          }
        }

        &:nth-child(odd) {
          .vhl-card-instruction {
            top: 7px;
          }
          .vhl-card-content {
            top: -201px;
          }
          .vhl-card-content::before {
            border-width: 8px 8px 0 8px;
            border-color: white transparent transparent transparent;
            filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2)) drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.14));
            bottom: -8px;
          }
        }
      }
    }
  }
</style>
