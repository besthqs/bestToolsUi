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
import { buWaterLoading } from 'besttoolsui'
const position = ref(20);
const seconds = ref('还剩3秒');
</script>
```

### Attributes

| 参数     | 说明       | 类型   | 必填值             |
| -------- | ---------- | ------ | ------------------ |
| position | 进度条位置 | number | 必填               |
| max      | 进度条最大 | number | 非必填（默认 100） |
| content  | 说明文字   | string | 非必填             |

## 对话框

```
<template>
    <buDialog title="测试对话框" v-if="showDialog" width="600px" height="400px">
        <template #default>
        <div>Lorem.</div>
        </template>
        <template #footer>
        <span>
            <button @click="showDialog = false">取 消</button>
            <button @click="showDialog = false">确 定</button>
        </span>
        </template>
    </buDialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { buDialog } from 'besttoolsui'
const showDialog = ref(true);
</script>
```

### Attributes

| 参数   | 说明       | 类型   | 必填值              |
| ------ | ---------- | ------ | ------------------- |
| title  | 对话框标题 | string | 非必填              |
| width  | 对话框宽度 | string | 非必填（默认 50%）  |
| height | 对话框高度 | string | 非必填 （默认 50%） |

### Slot

| 名称    | 说明           |
| ------- | -------------- |
| default | 对话框内容     |
| footer  | 对话框底部内容 |
| header  | 对话框头部内容 |
