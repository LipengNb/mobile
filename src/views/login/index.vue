<template>
  <div class="login-wrap">
    <van-nav-bar title="登录/注册" />
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
  </div>
</template>
<script>
import { Form, Field, Button, Notify, NavBar } from 'vant'
export default {
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Notify.name]: Notify,
    [Button.name]: Button,
    [NavBar.name]: NavBar
  },
  data() {
    return {
      form: {
        name: '',
        age: ''
      }
    }
  },
  methods: {
    onSubmit(values) {
      console.log(values)
    },
    onFailed(values) {
      const { errors } = values
      Notify({ type: 'warning', message: errors[0].message })
    }
  }
}
</script>
