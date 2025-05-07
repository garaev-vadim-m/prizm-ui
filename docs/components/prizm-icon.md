---
title: Icon
sidebar: auto
---

# Icon

Компонент иконки, основанный на `ElIcon` из Element Plus.

## Импорт

```ts
import { PrizmIcon } from 'prizm-ui-vue';
```

## Пример использования

```vue
<script setup lang="ts">
import { PrizmIcon } from 'prizm-ui-vue';
</script>
<template>
  <PrizmIcon>
    <SomeIcon />
  </PrizmIcon>
</template>
```

## Props

| Название | Тип                      | По умолчанию | Описание      |
| -------- | ------------------------ | ------------ | ------------- |
| `size`   | `'string'` \| `'number'` | `'16'`       | Размер иконки |
| `color`  | `'string'`               | `'-'`        | Цвет иконки   |
| `class`  | `'string'`               | `'-'`        | Свой class    |


---

## Слоты

| Название  | Описание                                |
| --------- | --------------------------------------- |
| `default` | Основное содержимое иконки              |

---

## Примеры

```vue
<script setup lang="ts">
import { PrizmIcon } from 'prizm-ui-vue';
</script>
<template>
  <PrizmIcon>
    <SomeIcon size="20" color="#000000"/>
  </PrizmIcon>
</template>
```
---

```vue
<script setup lang="ts">
import { PrizmIcon } from 'prizm-ui-vue';
</script>
<template>
  <PrizmIcon>
    <SomeIcon :size="11" />
  </PrizmIcon>
</template>
```