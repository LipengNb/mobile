<template>
  <div class="brother1">
    <van-button type="primary" block @click="handleEvent">兄弟组件传参：触发</van-button>
  </div>
</template>
<script>
import eventBus from './eventBus'
import { Button } from 'vant'
export default {
  components: {
    [Button.name]: Button
  },
  data() {
    return {}
  },
  methods: {
    handleEvent() {
      eventBus.$emit('handleEvent', '我点击的是小老弟， 老哥你收到我的消息了么')
    },
    watchParentEvent() {
      console.log('父组件触发了我， 我是子组件的事件')
    }
  }
}
</script>
