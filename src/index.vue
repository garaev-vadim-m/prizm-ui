<script setup lang="ts">
import { ref } from 'vue';
import { PrizmButton, PrizmTag, PrizmInput, PrizmDatePicker } from './components';

const datePicker = ref('');
</script>
<template>
  <div :class="classes.root">
    <div :class="classes.group">
      <PrizmButton>Привет</PrizmButton>

      <PrizmButton type="primary">Привет</PrizmButton>

      <PrizmButton type="info">Привет</PrizmButton>

      <PrizmButton type="success">Привет</PrizmButton>

      <PrizmButton type="danger">Привет</PrizmButton>

      <PrizmButton type="warning">Привет</PrizmButton>
    </div>

    <div :class="classes.group">
      <PrizmTag>Привет</PrizmTag>

      <PrizmTag type="danger">Привет</PrizmTag>

      <PrizmTag type="primary">Привет</PrizmTag>

      <PrizmTag type="warning">Привет</PrizmTag>

      <PrizmTag type="success">Привет</PrizmTag>
    </div>

    <div :class="classes.group">
      <PrizmInput placeholder="input" />

      <PrizmInput placeholder="input" size="default" />

      <PrizmInput placeholder="input" size="small" />
    </div>

    <div :class="classes.group">
      <PrizmDatePicker v-model="datePicker" placeholder="datePicker" />

      <PrizmDatePicker v-model="datePicker" placeholder="datePicker" size="default" />

      <PrizmDatePicker v-model="datePicker" placeholder="datePicker" size="small" />
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
