<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <NutButton type="danger">4567890</NutButton>
  </view>
</template>

<script setup lang="ts">
import NutButton from "@/components/nutui/packages/button/index.taro.vue";
// import
import { ref } from "vue";
const title = ref("Hello");
</script>
