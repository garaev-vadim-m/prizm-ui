<script setup lang="ts">
import { PrizmButton, PrizmTag, PrizmInput } from './components';

const mockComponentsData = [
  {
    id: 1,
    name: 'Loren data',
    type: 'default',
  },
  {
    id: 2,
    name: 'Loren data',
    type: 'danger',
  },
  {
    id: 3,
    name: 'Loren data',
    type: 'warning',
  },
  {
    id: 4,
    name: 'Loren data',
    type: 'primary',
  },
  {
    id: 5,
    name: 'Loren data',
    type: 'success',
  },
];
</script>
<template>
  <div :class="classes.root">
    <div :class="classes.group">
      <PrizmButton
        v-for="mockComponentData in mockComponentsData"
        :type="mockComponentData.type"
        :key="mockComponentData.id"
        >{{ mockComponentData.name }}</PrizmButton
      >
    </div>
    <div :class="classes.group">
      <PrizmTag
        v-for="mockComponentData in mockComponentsData"
        :type="mockComponentData.type"
        :key="mockComponentData.id"
        >{{ mockComponentData.name }}</PrizmTag
      >
    </div>

    <div :class="classes.group">
      <PrizmInput placeholder="input" />
      <PrizmInput placeholder="input" size="default" />
      <PrizmInput placeholder="input" size="small" />
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
