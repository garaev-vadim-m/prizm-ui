<script setup lang="ts">
import { ref } from 'vue';
import {
  PrizmButton,
  PrizmTag,
  PrizmInput,
  PrizmDatePicker,
  PrizmForm,
  PrizmFormItem,
  PrizmDrawer,
} from './components';

const datePicker = ref('');
const drawer = ref(false);
function onOpenDrawer() {
  return (drawer.value = !drawer.value);
}
</script>
<template>
  <div :class="classes.root">
    <div :class="classes.group">
      <PrizmButton>PrizmButton</PrizmButton>

      <PrizmButton type="primary">PrizmButton</PrizmButton>

      <PrizmButton type="info">PrizmButton</PrizmButton>

      <PrizmButton type="success">PrizmButton</PrizmButton>

      <PrizmButton type="danger">PrizmButton</PrizmButton>

      <PrizmButton type="warning">PrizmButton</PrizmButton>
    </div>

    <div :class="classes.group">
      <PrizmTag>PrizmTag</PrizmTag>

      <PrizmTag type="danger">PrizmTag</PrizmTag>

      <PrizmTag type="primary">PrizmTag</PrizmTag>

      <PrizmTag type="warning">PrizmTag</PrizmTag>

      <PrizmTag type="success">PrizmTag</PrizmTag>
    </div>

    <div :class="classes.group">
      <PrizmInput placeholder="PrizmInput" />

      <PrizmInput placeholder="PrizmInput" size="default" />

      <PrizmInput placeholder="PrizmInput" size="small" />
    </div>

    <div :class="classes.group">
      <PrizmDatePicker v-model="datePicker" placeholder="PrizmDatePicker" />

      <PrizmDatePicker v-model="datePicker" placeholder="PrizmDatePicker" size="default" />

      <PrizmDatePicker v-model="datePicker" placeholder="PrizmDatePicker" size="small" />
    </div>

    <div :class="classes.group">
      <PrizmForm>
        <PrizmFormItem label="PrizmForm with PrizmFormItem">
          <PrizmInput placeholder="PrizmInput" />
        </PrizmFormItem>
      </PrizmForm>
    </div>

    <div :class="classes.group">
      <p @click="onOpenDrawer">12</p>

      <PrizmButton @click="onOpenDrawer">Open PrizmDrawer</PrizmButton>

      <PrizmDrawer v-model="drawer" />
    </div>
  </div>
</template>
<style module="classes" lang="scss">
.root {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.group {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
