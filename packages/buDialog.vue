<template>
  <div class="myfullscreen">
    <div class="myDialog">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{ position: number; seconds: string }>();
const mytop = computed(() => 100 - props.position + "%");
</script>
<style scoped>
.myfullscreen {
  z-index: 3000;
  position: fixed;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transform: opacity 0.3s;
}
.myDialog {
  position: relative;
  background-color: rgb(255, 255, 255);
  width: 50%;
  height: 50%;
}
</style>
