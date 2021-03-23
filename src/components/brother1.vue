<template>
  <div class="brother2">
    <van-button type="danger" block>兄弟组件传参：接收</van-button>
    <van-button type="info" block @click="handleParentEvent">子组件触发：父亲组件</van-button>
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
  mounted() {
    eventBus.$on('handleEvent', function(e) {
      console.log(e)
    })
  },
  methods: {
    handleParentEvent() {
      this.$parent.watchChildEvent()
    }
  }
}
</script>
<style lang="less" scoped>
.brother2{
  margin-bottom: 20px;
}
</style>
