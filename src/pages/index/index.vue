<template>
  <view class="content">
    <NutButton type="danger">4567890</NutButton>
    <nut-form :model-value="formData" ref="ruleForm">
      <nut-form-item label="姓名">
        <input class="nut-input-text" placeholder="请输入姓名" type="text" />
      </nut-form-item>

      <nut-form-item
        label="联系电话"
        prop="tel"
        required
        :rules="[{ required: true, message: '请填写联系电话' }]"
      >
        <input
          class="nut-input-text"
          v-model="formData.tel"
          placeholder="请输入联系电话，异步校验电话格式"
          type="text"
        />
      </nut-form-item>
      <nut-form-item
        label="地址"
        prop="address"
        required
        :rules="[{ required: true, message: '请填写地址' }]"
      >
        <input
          class="nut-input-text"
          v-model="formData.address"
          placeholder="请输入地址"
          type="text"
        />
      </nut-form-item>
      <nut-button
        type="primary"
        size="small"
        style="margin-right: 10px"
        @click="submit"
        >提交</nut-button
      >
    </nut-form>
  </view>
</template>

<script setup lang="ts">
// import
import { ref, reactive } from "vue";
const formData = reactive({
  name: "",
  age: "",
  tel: "",
  address: "",
});
const validate = (item: any) => {
  console.log(item);
};
const submit = () => {
  ruleForm.value.validate().then(({ valid, errors }: any) => {
    if (valid) {
      console.log("success", formData);
    } else {
      console.log("error submit!!", errors);
    }
  });
};
const ruleForm = ref<any>(null);

// Promise 异步校验
const asyncValidator = (val: string) => {
  return new Promise((resolve) => {
    uni.showLoading({
      title: "校验中...",
    });
    setTimeout(() => {
      uni.hideLoading();
      resolve(/^400(-?)[0-9]{7}$|^1\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/.test(val));
    }, 1000);
  });
};
const title = ref("Hello");
</script>
