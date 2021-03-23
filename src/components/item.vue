<template>
  <div class="item">
    <div>
      姓名：{{ item.name }}; 年龄：{{ item.age }}
    </div>
    <van-button type="danger" plain size="small" @click="onDeleteItem">删除</van-button>
  </div>
</template>
<script>
import { Button } from 'vant'
export default {
  components: {
    [Button.name]: Button
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    onDeleteItem() {
      this.$emit('onDelete')
    }
  }
}
</script>
<style lang="less" scoped>
.item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: relative;
  &::after{
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid #ebedf0;
    transform: scaleY(.5);
  }
}
</style>
