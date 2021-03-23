<template>
  <div>
    <brother ref="brother" />
    <brother1 />
    <van-button block type="warning" @click="handleParent">我是父组件</van-button>
    vuex->state>dark: {{ dark }}
  </div>
</template>
<script>
import { Button } from 'vant'
import { mapState } from 'vuex'
import brother from '@/components/brother'
import brother1 from '@/components/brother1'
export default {
  components: {
    brother,
    brother1,
    [Button.name]: Button
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      dark: state => state.settings.dark
    })
  },
  methods: {
    handleParent() {
      this.$refs.brother.watchParentEvent()
      this.$children[0].watchParentEvent()
    },
    watchChildEvent() {
      console.log('我是被子组件触发的')
    }
  }
}
</script>
