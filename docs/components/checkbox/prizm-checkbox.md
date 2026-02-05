---
title: Checkbox
sidebar: auto
---

# Checkbox

Компонент выбора элементов (checkbox), основанный на `ElCheckbox` из Element Plus.

## Импорт

```ts
import { PrizmCheckbox } from 'prizm-ui-vue';
```

## Примеры использования

## Basic Checkbox

```vue
<script setup lang="ts">
import { PrizmCheckbox } from 'prizm-ui-vue';
import { ref } from 'vue';

const value1 = ref(false);
const value2 = ref(false);
</script>
<template>
  <PrizmCheckbox v-model="value1" label="Option 1" size="default" />
  <PrizmCheckbox v-model="value2" label="Option 2 & Value 2" size="small" />
</template>
```

## Disabled State

```vue
<script setup lang="ts">
import { PrizmCheckbox } from 'prizm-ui-vue';
import { ref } from 'vue';

const value1 = ref(false);
const value2 = ref(false);
const disabled = ref(false);
</script>
<template>
  <PrizmCheckbox v-model="value1" label="Option 1" size="default" disabled />
  <PrizmCheckbox v-model="value2" label="Option 2 & Value 2" size="small" :disabled="disabled" />
</template>
```

## Porps

| Название        | Тип                                   | По умолчанию | Описание                                 |
| --------------- | ------------------------------------- | ------------ | ---------------------------------------- |
| `name`          | `string`                              | —            | Наименование чекбокса                    |
| `disabled`      | `boolean`                             | —            | Блокировка чекбокса                      |
| `validateEvent` | `boolean`                             | —            | Валидация события                        |
| `falseValue`    | `boolean`                             | —            | Значение чекбокса, если он не установлен |
| `size`          | `'small'` \| `'default'` \| `'large'` | `'large'`    | Размер чекбокса                          |
| `value`         | `string \| number \| boolean`         | -            | Значение чекбокса                        |
| `label`         | `string \| number \| boolean`         | -            | Название чекбокса                        |
| `checked`       | `boolean`                             | -            | Выбранный чекбокс                        |

## Slots

| Название  | Описание                    |
| --------- | --------------------------- |
| `default` | Основное содержимое чекбока |
