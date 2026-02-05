---
title: Notification
sidebar: auto
---

# Notification

Пользовательский MessageBox на основе `ELNotification` из Element Plus с поддержкой кастомных иконок, стилей и событий.

## Импорт

```ts
import { PrizmNotification } from 'prizm-ui-vue';
```

## Примеры использования

## Basic usage

```vue
<script lang="ts" setup>
import { PrizmNotification, PrizmButton, type BaseNotificationProps } from 'prizm-ui-vue';

const open1 = () => {
  PrizmNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  });
};

const open2 = () => {
  PrizmNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  });
};

const open3 = () => {
  PrizmNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
  });
};

const open4 = (types: ElNotificationProps['type']) => {
  PrizmNotification({
    title: 'Error',
    message: 'This is an error message',
    type: types,
  });
};
</script>

<template>
  <PrizmButton plain @click="open1">Success</PrizmButton>
  <PrizmButton plain @click="open2">Warning</PrizmButton>
  <PrizmButton plain @click="open3">Info</PrizmButton>
  <PrizmButton plain @click="open4('error')">Error</PrizmButton>
</template>
```

## Position

```vue
<script lang="ts" setup>
import { PrizmNotification, PrizmButton, type BaseNotificationProps } from 'prizm-ui-vue';

const open1 = () => {
  PrizmNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
    position: 'top-right',
  });
};

const open2 = () => {
  PrizmNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
    position: 'top-left',
  });
};

const open3 = () => {
  PrizmNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
    position: 'bottom-right',
  });
};

const open4 = (positions: BaseNotificationProps['position']) => {
  PrizmNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
    position: positions,
  });
};
</script>

<template>
  <PrizmButton plain @click="open1">top-right</PrizmButton>
  <PrizmButton plain @click="open2">top-left</PrizmButton>
  <PrizmButton plain @click="open3">bottom-right</PrizmButton>
  <PrizmButton plain @click="open4('bottom-left')">bottom-left</PrizmButton>
</template>
```

## Duration

```vue
<script lang="ts" setup>
import { PrizmNotification, PrizmButton } from 'prizm-ui-vue';

const open1 = () => {
  PrizmNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
    duration: 2000,
  });
};
</script>

<template>
  <PrizmButton plain @click="open1">duration 2000</PrizmButton>
</template>
```

## Props

| Название   | Тип                                                            | По умолчанию  | Описание          |
| ---------- | -------------------------------------------------------------- | ------------- | ----------------- |
| `title`    | `string`                                                       |               | Заголовок         |
| `message`  | `string`                                                       |               | Основной текст    |
| `type`     | `'success' \| 'warning' \| 'error' \| 'info'`                  |               | Тип               |
| `position` | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'top-right'` | Основной текст    |
| `duration` | `number`                                                       | `1000`        | Время отображения |
