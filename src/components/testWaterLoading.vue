<template>
  <div>
    <button @click="testWaterLoading">显示水波纹进度条</button>
    <bu-water-loading
      v-if="showWaterLoading"
      :position="position"
      :max="max"
      :content="content"
    ></bu-water-loading>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import buWaterLoading from "/packages/buWaterLoading.vue";
const showWaterLoading = ref(false);

const content = computed(() => seconds.value + "s");
const position = ref(0);
const max = 100;
const seconds = ref(max);
const testWaterLoading = () => {
  position.value = 0;
  seconds.value = max;
  showWaterLoading.value = true;
  warterLoadingSetup();
};

const warterLoadingSetup = () => {
  setTimeout(() => {
    position.value++;
    seconds.value--;
    if (position.value < max) {
      warterLoadingSetup();
    } else {
      showWaterLoading.value = false;
    }
  }, 100);
};
</script>

<style scoped></style>
