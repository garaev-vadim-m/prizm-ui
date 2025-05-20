---
title: Radio group
sidebar: auto
---

# Radio group

## Импорт

```ts
import { PrizmRadioGroup } from 'prizm-ui-vue';
```

## Пример испоьлзования

```vue
<script lang="ts" setup>
import { PrizmRadio, PrizmRadioGroup } from 'prizm-ui-vue';
import { ref } from 'vue';

const radio1 = ref('1');
</script>

<template>
  <PrizmRadioGroup v-model="radio1">
    <PrizmRadio value="1" size="large">Option 1</PrizmRadio>
    <PrizmRadio value="2" size="large">Option 2</PrizmRadio>
  </PrizmRadioGroup>
</template>
```

| Название   | Тип       | По умолчанию | Описание                      |
| ---------- | --------- | ------------ | ----------------------------- |
| `disabled` | `boolean` | `false`      | Блокировка группы радиокнопок |
| `name`     | `string`  |              | Название группы радиокнопок   |

## Slots

| Название  | Описание                               |
| --------- | -------------------------------------- |
| `default` | Основное содержимое группы радиокнопок |

## Events

| Название | Описание                             |
| -------- | ------------------------------------ |
| `change` | Событие изменения группы радиокнопок |
