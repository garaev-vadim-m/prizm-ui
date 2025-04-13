<script setup lang="ts">
import { PrizmButton, PrizmTag, PrizmInput } from './components';
</script>
<template>
  <div :class="classes.root">
    <div :class="classes.group">
      <PrizmButton type="primary">Привет</PrizmButton>
      <PrizmButton type="danger">Привет</PrizmButton>
      <PrizmButton type="warning">Привет</PrizmButton>
      <PrizmButton type="default">Привет</PrizmButton>
    </div>
    <div :class="classes.group">
      <PrizmTag type="danger">Привет</PrizmTag>
      <PrizmTag type="primary">Привет</PrizmTag>
      <PrizmTag type="success">Привет</PrizmTag>
      <PrizmTag type="warning">Привет</PrizmTag>
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
