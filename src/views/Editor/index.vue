<template>
<app-view :scroll="false">
  <div class="editor" @touchmove.prevent>
    <editor-canvas></editor-canvas>
    <footer :class="{hide: status !== 5}">
      <editor-play-controller></editor-play-controller>
      <editor-tools></editor-tools>
      <editor-text-tool></editor-text-tool>
      <editor-pencil-tool></editor-pencil-tool>
    </footer>
    <editor-download></editor-download>
  </div>
</app-view>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
import editor from '@/editor/instance'

import EditorCanvas from './modules/Canvas'
import EditorPlayController from './modules/PlayController'
import EditorTools from './modules/Tools'
import EditorTextTool from './modules/TextTool'
import EditorPencilTool from './modules/PencilTool'
import EditorDownload from './modules/Download'

export default {
  computed: {
    ...mapGetters({
      status: 'status'
    })
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 定时器防止 UI 页面过场卡顿
      setTimeout(() => {
        vm.$store.dispatch('load')
      }, 400)
    })
  },
  beforeRouteLeave(to, from, next) {
    const vm = this
    if (editor.layer.hasElements()) {
      vm.$confirm({
        body: '是否放弃编辑？',
        confirm() {
          vm.$store.dispatch('reset')
          next()
        }
      })
      next(false)
    } else {
      next()
    }
  },
  methods: {
    editorInit() {
      const vm = this

      editor.init()

      editor.layer.handler.on('onaction', type => {
        store.commit('currentAction', type)
      })

      // 监听插入、撤销、还原记录的操作
      editor.history.on('input', history => {
        // 更新对应的状态
        store.commit('undoRedostatus', [
          history.disableUndo,
          history.disableRedo
        ])
      })

      editor.gif.on('frameIndex', index => {
        store.commit('frameIndex', index)
      })

      editor.gif.parser
        .on('loadProgress', (loaded, total) => {
          store.commit('progress', {
            name: 'load',
            value: Math.ceil(loaded / total * 100)
          })
        })
        .on('parseProgress', (name, current, total) => {
          store.commit('progress', {
            name: 'parse',
            value: Math.ceil(current / total * 100)
          })
        })
        .on('parseEnd', () => {
          // 解析结束后显示第一帧的图片
          editor.gif.jump(0, 'absolute')
          // 设置解析结束状态
          store.commit('status', 5)
          // 设置总帧数
          store.commit('frameLength', editor.gif.frames.length)
        })
        .on('loadError', () => {
          vm.$alert({
            body: '加载失败，请重试或更换图片。'
          })
          store.commit('status', 3)
        })
        .on('parseError', () => {
          vm.$alert({
            body: '解析失败，请重试或更换图片。'
          })
          store.commit('status', 4)
        })
    },
    destory() {}
  },
  mounted() {
    this.editorInit()
  },
  components: {
    EditorCanvas,
    EditorPlayController,
    EditorTools,
    EditorTextTool,
    EditorPencilTool,
    EditorDownload
  }
}
</script>

<style lang="postcss">
.editor {
  height: 100%;
  background: var(--black);
  touch-action: none;
  & footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    transition: opacity 0.3s, visibility 0.3s;
    &.hide {
      opacity: 0;
      visibility: hidden;
    }
  }
}

.editor-action-border {
  position: absolute;
  top: 230px;
  left: 130px;
  z-index: 2;
  width: 80px;
  height: 40px;
  border: 1px dashed white;
  background: transparent;
  pointer-events: none;
  display: none;
  & button {
    position: absolute;
    pointer-events: auto;
    width: 28px;
    height: 28px;
    padding: 0;
    cursor: pointer;
    color: white;
    border: none;
    background: transparent;
  }
  & .zoom {
    bottom: -14px;
    right: -14px;
  }
  & i {
    margin: 0 auto;
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    text-align: center;
    display: block;
    background-color: white;
    border-radius: 50%;
    color: var(--black);
  }
}
</style>

