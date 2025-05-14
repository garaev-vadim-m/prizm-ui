---
title: DatePicker
sidebar: auto
---

# DatePicker

Компонент выбора даты, основанный на `ElDatePicker` из Element Plus.

## Импорт

```ts
import { PrizmDatePicker } from 'prizm-ui-vue';
```

## Пример использования

## Basic usage

```vue
<script setup lang="ts">
import { PrizmDatePicker } from 'prizm-ui-vue';

const date = ref('');
</script>
<template>
  <PrizmDatePicker v-model="date" type="date" size="default" />
</template>
```

---

## Date Range

```vue
<script setup lang="ts">
import { PrizmDatePicker } from 'prizm-ui-vue';
import { ref } from 'vue'

const size = ref<'default' | 'large' | 'small'>('default')

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]
</script>
<template>
  <PrizmDatePicker
    v-model="value1"
    type="daterange"
    range-separator="To"
    start-placeholder="Start date"
    end-placeholder="End date"
    :size="size" />

  <PrizmDatePicker
    v-model="value2"
    type="daterange"
    range-separator="To"
    start-placeholder="Start date"
    end-placeholder="End date"
    :shortcuts="shortcuts"
    :size="size" />
</template>
```
