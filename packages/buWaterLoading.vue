<template>
  <div class="myfullscreen">
    <div class="myLoading" :style="{ '--top': mytop }">
      <div class="loadingText bfb">
        {{ position ? position.toFixed(1) + "%" : "加载中..." }}
      </div>

      <div class="loadingText myprogress" v-if="position">
        <progress max="100" :value="position"></progress>
      </div>
      <div class="loadingText seconds">{{ seconds }}</div>
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

:root {
  --top: "100%";
}

.myLoading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  width: 20vh;
  height: 20vh;
  position: relative;
  top: calc(50% - 10vh);
  left: calc(50% - 10vh);
  border-radius: 50%;
  overflow: hidden;
}

.loadingText {
  z-index: 3005;
}
.bfb {
  font-weight: bold;
  font-size: 20px;
}
.myprogress {
  font-size: 12px;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.myLoading:after {
  background-color: #a4eafd;
  display: block;
  width: 40vh;
  height: 40vh;
  content: "";
  border-radius: 15vh;
  position: absolute;
  left: 50%;
  top: var(--top, 100%);
  translate: -50% 0;
  animation: rotate 5s linear infinite;
}
</style>
