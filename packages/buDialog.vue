<template>
  <div class="myfullscreen">
    <div
      class="myDialog"
      :style="{ '--dialog-width': width, '--dialog-height': height }"
    >
      <header class="header">
        <slot name="header">{{ title }}</slot>
      </header>
      <main class="main">
        <slot> </slot>
      </main>
      <footer class="footer"><slot name="footer"></slot></footer>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    title?: string;
    width?: string;
    height?: string;
  }>(),
  {}
);
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.myDialog {
  position: relative;
  background-color: rgb(255, 255, 255);
  width: var(--dialog-width, 50%);
  height: var(--dialog-height, 50%);
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #f2f2f2;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.main {
  flex-grow: 1;
  overflow: scroll;
  padding: 10px;
}

.footer {
  bottom: 0;
  background-color: #f2f2f2;
  padding: 10px;
  border-top: 1px solid #ccc;
  text-align: right;
}
</style>
