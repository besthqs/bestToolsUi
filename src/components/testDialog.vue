<template>
  <div>
    <button @click="testDialog">显示对话框</button>
    <buDialog title="测试对话框" v-if="showDialog" width="600px" height="400px">
      <template #default>
        <div>Lorem.</div>
        <div>Ullam!</div>
        <div>Asperiores.</div>
        <div>Recusandae.</div>
        <div>Quaerat.</div>
        <div>Incidunt.</div>
        <div>Laborum.</div>
        <div>Ipsam.</div>
        <div>Assumenda.</div>
        <div>Debitis?</div>
        <div>Incidunt.</div>
        <div>Laborum.</div>
        <div>Ipsam.</div>
        <div>Assumenda.</div>
        <div>Debitis?</div>
        <div>Ipsam.</div>
        <div>Assumenda.</div>
        <div>Debitis?</div>
        <div>Incidunt.</div>
        <div>Laborum.</div>
        <div>Ipsam.</div>
      </template>

      <template #footer>
        <span>
          <button @click="showDialog = false">取 消</button>
          <button @click="showDialog = false">确 定</button>
        </span>
      </template>
    </buDialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import buDialog from "/packages/buDialog.vue";

const showDialog = ref(false);

function testDialog() {
  showDialog.value = true;
}
</script>
