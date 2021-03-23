<template>
  <div class="home">
    <ul class="list-info">
      <li v-for="(item, index) in list" :key="item.id" class="item">
        <item :key="index" :item="item" @onDelete="onDeleteItem(index)" />
      </li>
    </ul>
    <div class="count">共：<strong>{{ list.length }}</strong> 条</div>
    <van-form validate-first scroll-to-error :show-error="false" :show-error-message="false" @submit="onSubmit" @failed="onFailed">
      <van-field
        v-model="form.name"
        name="name"
        label="姓名"
        placeholder="姓名"
        :rules="[{ required: true, message: '请填写姓名' }]"
      />
      <van-field
        v-model="form.age"
        name="age"
        label="年龄"
        placeholder="年龄"
        :rules="[{ required: true, message: '请填写年龄' }]"
      />
      <div style="margin: 16px;">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    dark：{{ dark }}
    <van-button block type="default" @click="handleToggle">夜间模式</van-button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import item from '@/components/item'
import { Form, Field, Button, Notify, Dialog } from 'vant'
export default {
  components: {
    item,
    [Form.name]: Form,
    [Field.name]: Field,
    [Notify.name]: Notify,
    [Button.name]: Button,
    [Dialog.name]: Dialog
  },
  data() {
    return {
      list: [
        { name: '关羽', age: 18, id: '010' },
        { name: '刘备', age: 19, id: '011' },
        { name: '曹操', age: 20, id: '012' },
        { name: '张飞', age: 30, id: '013' }
      ],
      form: {
        name: '',
        age: ''
      }
    }
  },
  computed: {
    ...mapState({
      dark: state => state.settings.dark
    })
  },
  mounted() {},
  methods: {
    handleToggle() {
      this.$store.commit('SET_DARK', !this.dark)
    },
    onSubmit(values) {
      console.log(values)
      this.list.push(values)
    },
    onFailed(values) {
      const { errors } = values
      Notify({ type: 'warning', message: errors[0].message })
    },
    onDeleteItem(index) {
      Dialog.confirm({
        title: '温馨提示',
        message: '您确定要删除这条信息吗?'
      }).then(() => {
        this.list.splice(index, 1)
        // this.$delete(this.list, index)
        // on close
      }).catch(() => {
        // on cancel
      })
    }
  }
}
</script>
<style lang="less" scoped>
.count{
  padding: 10px;
  text-align: right;
  font-size: 14px;
  color: #666;
  strong{
    font-size: 18px;
  }
}
</style>
