---
title: Drawer
sidebar: auto
---

# Drawer

Пользовательский драйвер на основе `ElDrawer` из Element Plus с поддержкой кастомных иконок, стилей и событий.

## Импорт

```ts
import { PrizmDrawer } from from 'prizm-ui-vue';
```

## Basic usage

```vue
<script lang="ts" setup>
import { ref } from 'vue';
import { PrizmDrawer, PrizmMessageBox, type DrawerProps, PrizmRadioGroup, PrizmRadio, PrizmButton } from 'prizm-ui-vue';

const drawer = ref(false);
const direction = ref<DrawerProps['direction']>('rtl');
const radio1 = ref('Option 1');
const handleClose = (done: () => void) => {
  PrizmMessageBox({
    title: 'Are you sure you want to close this?',
  })
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};

function cancelClick() {
  drawer.value = false;
}
function confirmClick() {
  PrizmMessageBox({
    title: `Are you confirm to chose ${radio1.value} ?`,
  })
    .then(() => {
      drawer.value = false;
    })
    .catch(() => {
      // catch error
    });
}
</script>

<template>
  <PrizmRadioGroup v-model="direction">
    <PrizmRadio value="ltr">left to right</PrizmRadio>
    <PrizmRadio value="rtl">right to left</PrizmRadio>
    <PrizmRadio value="ttb">top to bottom</PrizmRadio>
    <PrizmRadio value="btt">bottom to top</PrizmRadio>
  </PrizmRadioGroup>

  <PrizmDrawer
    v-model="drawer"
    title="I am the title"
    :direction="direction"
    :before-close="handleClose"
    @confirmButton="confirmClick"
    @cancelButton="cancelClick">
    <span>Hi, there!</span>
  </PrizmDrawer>
</template>
```

## Customized Header

```vue
<script lang="ts" setup>
import { ref } from 'vue';
import { PrizmDrawer, IconUser, PrizmButton } from 'prizm-ui-vue';

const visible = ref(false);

function close() {
  visible.value = false;
}

function onRequest() {
  fetch('someUrl')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

function onCancel() {
  visible.value = false;
}
</script>

<template>
  <PrizmButton @click="visible = true"> Open Drawer with customized header </PrizmButton>
  <PrizmDrawer v-model="visible" :show-close="false" @confirmButton="onRequest" @cancelButton="onCancel">
    <template #header>
      <h4>This is a custom header!</h4>
      <PrizmButton type="danger" @click="close" :icon="IconUser"> Close </PrizmButton>
    </template>
    This is drawer content.
  </PrizmDrawer>
</template>
```

## Props

| Название            | Тип                | По умолчанию      | Описание                        |
| ------------------- | ------------------ | ----------------- | ------------------------------- |
| `title`             | `string`           | `'Default title'` | Заголовок                       |
| `closeIcon`         | `Component`        |                   | Компонент кнопки закрытия       |
| `appendToBody`      | `boolean`          | `true`            | Расположение компонента в body  |
| `size`              | `string \| number` |                   | Ширина                          |
| `withHeader`        | `boolean`          | `true`            | Наличия header                  |
| `defaultFooter`     | `boolean`          | `true`            | Стандартный footer              |
| `showClose`         | `boolean`          | `true`            | Отображение закрытия            |
| `fullscreen`        | `boolean`          | `false`           | Отображение в полный экран      |
| `lockScroll`        | `boolean`          | `true`            | Блокировка страницы             |
| `headerClass`       | `string`           |                   | Класс стилизации                |
| `confirmButtonText` | `string`           | `'Сохранить'`     | Текст кнопки подтверждения      |
| `cancelButtonText`  | `string`           | `'Отмена'`        | Текст кнопки отмена             |
| `confirmDisabled`   | `boolean`          | `false`           | Блокировка кнопки подтверждения |

## Slots

| Название  | Описание                        |
| --------- | ------------------------------- |
| `default` | Основное содержимое радиокнопки |

## Events

| Название        | Описание                     |
| --------------- | ---------------------------- |
| `confirmButton` | Событие кнопки подтверждения |
| `cancelButton`  | Событие кнопки отмены        |
