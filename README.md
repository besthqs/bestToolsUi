# 组件库

## 安装

```
npm install besttoolsui@latest -S
```

## 水波纹进度条

```
<template>
 <buWaterLoading :position="position" :seconds="seconds" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const position = ref(20);
const seconds = ref('还剩3秒');
</script>
```

### Attributes

| 参数     | 说明       | 类型   | 必填值 |
| -------- | ---------- | ------ | ------ |
| position | 进度条位置 | number | 必填   |
| seconds  | 剩余时间   | string | 必填   |
