---
title: Radio
sidebar: auto
---

# Radio

Компонент радио кнопки, основанный на `ElRadio` из Element Plus.

## Импорт

```ts
import { PrizmRadio } from 'prizm-ui-vue';
```

## Basic usage

```vue
<script lang="ts" setup>
import { PrizmRadio, PrizmRadioGroup } from 'prizm-ui-vue';
import { ref } from 'vue';

const radio1 = ref('1');
const radio2 = ref('1');
const radio3 = ref('1');
</script>

<template>
  <div>
    <PrizmRadioGroup v-model="radio1">
      <PrizmRadio value="1" size="large">Option 1</PrizmRadio>
      <PrizmRadio value="2" size="large">Option 2</PrizmRadio>
    </PrizmRadioGroup>
  </div>
  <div>
    <PrizmRadioGroup v-model="radio2">
      <PrizmRadio value="1">Option 1</PrizmRadio>
      <PrizmRadio value="2">Option 2</PrizmRadio>
    </PrizmRadioGroup>
  </div>
  <div>
    <PrizmRadioGroup v-model="radio3">
      <PrizmRadio value="1" size="small">Option 1</PrizmRadio>
      <PrizmRadio value="2" size="small">Option 2</PrizmRadio>
    </PrizmRadioGroup>
  </div>
</template>
```

## Disabled

```vue
<script lang="ts" setup>
import { PrizmRadio } from 'prizm-ui-vue';
import { ref } from 'vue';

const radio = ref('selected and disabled');
const disabled = ref(true)
</script>

<template>
  <PrizmRadio v-model="radio" disabled value="disabled">Option A</PrizmRadio>
  <PrizmRadio v-model="radio" :disabled="disabled" value="selected and disabled"> Option B </PrizmRadio>
</template>
```
