<script setup lang="ts">
import { ref } from 'vue';
import { PrizmButton, PrizmTag, PrizmInput, PrizmDatePicker } from './components';

const mockComponentsData = [
  {
    id: 1,
    name: 'Loren data',
    type: 'default',
    outline: false,
  },
  {
    id: 2,
    name: 'Loren data',
    type: 'danger',
    outline: true,
  },
  {
    id: 3,
    name: 'Loren data',
    type: 'warning',
    outline: false,
  },
  {
    id: 4,
    name: 'Loren data',
    type: 'primary',
    outline: true,
  },
  {
    id: 5,
    name: 'Loren data',
    type: 'success',
    outline: false,
  },
];

const datePicker = ref('');
</script>
<template>
  <div :class="classes.root">
    <div :class="classes.group">
      <PrizmButton
        v-for="mockComponentData in mockComponentsData"
        :key="mockComponentData.id"
        :type="mockComponentData.type"
        :plain="mockComponentData.outline"
        >{{ mockComponentData.name }}</PrizmButton
      >
    </div>

    <div :class="classes.group">
      <PrizmTag
        v-for="mockComponentData in mockComponentsData"
        :key="mockComponentData.id"
        :type="mockComponentData.type"
        >{{ mockComponentData.name }}</PrizmTag
      >
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
