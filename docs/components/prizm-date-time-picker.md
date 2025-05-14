---
title: DateTimePicker
sidebar: auto
---

# DateTimePicker

Компонент выбора даты и времени, основанный на `ElDatePicker` из Element Plus.

## Импорт

```ts
import { PrizmDateTimePicker } from 'prizm-ui-vue';
```

## Пример использования

## Basic usage

```vue
<script setup lang="ts">
import { PrizmDateTimePicker } from 'prizm-ui-vue';

const date = ref('');
</script>
<template>
  <PrizmDateTimePicker v-model="date" type="datetime" size="default" />
</template>
```

---

## Date Range

```vue
<script setup lang="ts">
import { PrizmDateTimePicker } from 'prizm-ui-vue';
import { ref } from 'vue';

const size = ref<'default' | 'large' | 'small'>('default');

const value1 = ref('');
const value2 = ref('');
</script>
<template>
  <p>Default</p>
  <PrizmDateTimePicker
    v-model="value1"
    type="datetime"
    placeholder="Pick a Date"
    format="YYYY-MM-DD HH:mm:ss"
    date-format="MMM DD, YYYY"
    time-format="HH:mm" />

  <p>With quick options</p>
  <PrizmDateTimePicker
    v-model="value2"
    type="datetimerange"
    start-placeholder="Start date"
    end-placeholder="End date"
    format="YYYY-MM-DD HH:mm:ss"
    date-format="YYYY/MM/DD ddd"
    time-format="A hh:mm:ss" />
</template>
```

```vue
<script setup lang="ts">
import { PrizmDateTimePicker } from 'prizm-ui-vue';
import { ref } from 'vue';

const size = ref<'default' | 'large' | 'small'>('default');

const value1 = ref<[Date, Date]>([new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]);
const value2 = ref('');

const shortcuts = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setDate(start.getDate() - 7);
      return [start, end];
    },
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setMonth(start.getMonth() - 1);
      return [start, end];
    },
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setMonth(start.getMonth() - 3);
      return [start, end];
    },
  },
];
</script>
<template>
  <p>Default</p>
  <PrizmDatePicker
    v-model="value1"
    type="datetimerange"
    range-separator="To"
    start-placeholder="Start date"
    end-placeholder="End date" />

  <p>With quick options</p>
  <PrizmDatePicker
    v-model="value2"
    type="datetimerange"
    :shortcuts="shortcuts"
    range-separator="To"
    start-placeholder="Start date"
    end-placeholder="End date" />
</template>
```

## Porps

### todo write props

## Slots

### todo write slots

## Events

### todo write events
