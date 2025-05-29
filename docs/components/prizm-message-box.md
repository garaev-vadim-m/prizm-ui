---
title: MessageBox
sidebar: auto
---

# MessageBox

Пользовательский MessageBox на основе `ElMessageBox` из Element Plus с поддержкой кастомных иконок, стилей и событий.

## Импорт

```ts
import { PrizmMessageBox } from from 'prizm-ui-vue';
```

```vue
<template>
  <el-button plain @click="open">Click to open the Message Box</el-button>
</template>

<script lang="ts" setup>
import { PrizmMessageBox, PrizmNotification } from from 'prizm-ui-vue';

const open = () => {
  PrizmMessageBox({
    title: 'proxy will permanently delete the file. Continue?', 'Warning',
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning',
  })
    .then(() => {
      PrizmNotification({
        type: 'success',
        message: 'Delete completed',
      });
    })
    .catch(() => {
      PrizmNotification({
        type: 'error',
        message: 'Delete canceled',
      });
    });
};
</script>
```

## Props

| Название              | Тип                                             | По умолчанию | Описание                                  |
| --------------------- | ----------------------------------------------- | ------------ | ----------------------------------------- |
| `title`               | `string`                                        |              | Заголовок                                 |
| `message`             | `string`                                        |              | Основной текст                            |
| `showCancelButton`    | `boolean`                                       | `true`       | Отображение кнопки отмены                 |
| `showConfirmButton`   | `boolean`                                       | `true`       | Отображение кнопки подтверждения          |
| `center`              | `boolean`                                       | `false`      | Центрирование контекнта                   |
| `variant`             | `'primary' \| 'danger'`                         | `primary`    | Варианта отображение кнопки подтверждения |
| `cancelButtonText`    | `string`                                        |              | Текст кнопки отмены                       |
| `confirmButtonText`   | `string`                                        |              | Текст кнопки подтверждеиня                |
| `classLocalComponent` | `string`                                        |              | class для компонента                      |
| `vertical`            | `boolean`                                       | `false`      | Вертикальное расположение кнопок          |
| `width`               | `string + px \| stirng + % \| string \| number` | `'100%'`     | Ширина компонента                         |
