---
title: Radio button
sidebar: auto
---

# Radio button

Компонент радио кнопки в стиле кнопки, основанный на `ElRadioButton` из Element Plus.

## Пример испоьлзования

```vue
<script lang="ts" setup>
import { PrizmRadioGroup, PrizmRadioButton } from 'prizm-ui-vue';
import { ref } from 'vue';

const radio1 = ref('Russian');
const radio2 = ref('Russian');
const radio3 = ref('Russian');
</script>

<template>
  <div>
    <PrizmRadioGroup v-model="radio1" size="large" fill="#6cf">
      <PrizmRadioButton label="New York" value="New York" />
      <PrizmRadioButton label="Washington" value="Washington" />
      <PrizmRadioButton label="Los Angeles" value="Los Angeles" />
      <PrizmRadioButton label="Chicago" value="Chicago" />
    </PrizmRadioGroup>
  </div>
  <div style="margin-top: 20px">
    <PrizmRadioGroup v-model="radio2" text-color="#626aef" fill="rgb(239, 240, 253)">
      <PrizmRadioButton label="New York" value="New York" />
      <PrizmRadioButton label="Washington" value="Washington" />
      <PrizmRadioButton label="Los Angeles" value="Los Angeles" />
      <PrizmRadioButton label="Chicago" value="Chicago" />
    </PrizmRadioGroup>
  </div>
  <div style="margin-top: 20px">
    <PrizmRadioGroup v-model="radio3" size="small">
      <PrizmRadioButton label="New York" value="New York" />
      <PrizmRadioButton label="Washington" value="Washington" disabled />
      <PrizmRadioButton label="Los Angeles" value="Los Angeles" />
      <PrizmRadioButton label="Chicago" value="Chicago" />
    </PrizmRadioGroup>
  </div>
</template>
```

## Props

| Название   | Тип                           | По умолчанию | Описание                 |
| ---------- | ----------------------------- | ------------ | ------------------------ |
| `disabled` | `boolean`                     | `false`      | Блокировка радиокнопки   |
| `label`    | `string \| number \| boolean` |              | Название радиокнопки     |
| `name`     | `string`                      |              | Наименование радиокнопки |
| `value`    | `string \| number \| boolean` |              | Значение радиокнопки     |

## Slots

| Название  | Описание                        |
| --------- | ------------------------------- |
| `default` | Основное содержимое радиокнопки |
