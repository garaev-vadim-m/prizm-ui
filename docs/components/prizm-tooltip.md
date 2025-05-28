---
title: Tooltip
sidebar: auto
---

# Tooltip

Пользовательский тэг на основе `ElTooltip` из Element Plus с поддержкой кастомных иконок, стилей и событий.

## Импорт

```ts
import { PrizmTooltip } from from 'prizm-ui-vue';
```

## Примеры использования

## Basic usage

```vue
<script setup lang="ts">
import { PrizmTooltip, PrizmButton } from from 'prizm-ui-vue';
</script>
<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <PrizmTooltip class="box-item" effect="dark" content="Top Left prompts info" placement="top-start">
        <PrizmButton>top-start</PrizmButton>
      </PrizmTooltip>
      <PrizmTooltip class="box-item" effect="dark" content="Top Center prompts info" placement="top">
        <PrizmButton>top</PrizmButton>
      </PrizmTooltip>
      <PrizmTooltip class="box-item" effect="dark" content="Top Right prompts info" placement="top-end">
        <PrizmButton>top-end</PrizmButton>
      </PrizmTooltip>
    </div>
    <div class="row">
      <PrizmTooltip class="box-item" effect="dark" content="Left Top prompts info" placement="left-start">
        <PrizmButton>left-start</PrizmButton>
      </PrizmTooltip>
      <PrizmTooltip class="box-item" effect="dark" content="Right Top prompts info" placement="right-start">
        <PrizmButton>right-start</PrizmButton>
      </PrizmTooltip>
    </div>
    <div class="row">
      <PrizmTooltip class="box-item" effect="dark" content="Left Center prompts info" placement="left">
        <PrizmButton class="mt-3 mb-3">left</PrizmButton>
      </PrizmTooltip>
      <PrizmTooltip class="box-item" effect="dark" content="Right Center prompts info" placement="right">
        <PrizmButton>right</PrizmButton>
      </PrizmTooltip>
    </div>
    <div class="row">
      <PrizmTooltip class="box-item" effect="dark" content="Left Bottom prompts info" placement="left-end">
        <PrizmButton>left-end</PrizmButton>
      </PrizmTooltip>
      <PrizmTooltip class="box-item" effect="dark" content="Right Bottom prompts info" placement="right-end">
        <PrizmButton>right-end</PrizmButton>
      </PrizmTooltip>
    </div>
    <div class="row center">
      <PrizmTooltip class="box-item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
        <PrizmButton>bottom-start</PrizmButton>
      </PrizmTooltip>
      <PrizmTooltip class="box-item" effect="dark" content="Bottom Center prompts info" placement="bottom">
        <PrizmButton>bottom</PrizmButton>
      </PrizmTooltip>
      <PrizmTooltip class="box-item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
        <PrizmButton>bottom-end</PrizmButton>
      </PrizmTooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
```

## Theme

```vue
<script setup lang="ts">
import { PrizmTooltip, PrizmButton } from from 'prizm-ui-vue';
</script>
<template>
  <PrizmTooltip content="Top center" placement="top">
    <PrizmButton>Dark</PrizmButton>
  </PrizmTooltip>
  <PrizmTooltip content="Bottom center" placement="bottom" effect="light">
    <PrizmButton>Light</PrizmButton>
  </PrizmTooltip>

  <PrizmTooltip content="Bottom center" effect="customized">
    <PrizmButton>Customized theme</PrizmButton>
  </PrizmTooltip>
</template>

<style>
.el-popper.is-customized {
  /* Set padding to ensure the height is 32px */
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
}

.el-popper.is-customized .el-popper__arrow::before {
  background: linear-gradient(45deg, #b2e68d, #bce689);
  right: 0;
}
</style>
```

## More Content

```vue
<script setup lang="ts">
import { PrizmTooltip, PrizmButton } from from 'prizm-ui-vue';
</script>
<template>
  <PrizmTooltip placement="top">
    <template #content> multiple lines<br />second line </template>
    <PrizmButton>Top center</PrizmButton>
  </PrizmTooltip>
</template>
```

## Advanced usage

#### В дополнение к базовым настройкам, есть некоторые атрибуты, которые позволяют вам настроить свои собственные: <Badge type="info" text="transition" /> атрибут позволяет настроить анимацию, при которой всплывающая подсказка отображается или скрывается, а значение по умолчанию - el-fade-in-linear. Атрибут <Badge type="info" text="disabled" /> позволяет отключить <Badge type="info" text="tooltip" />

```vue
<script lang="ts" setup>
import { PrizmTooltip, PrizmButton } from from 'prizm-ui-vue';
import { ref } from 'vue';

const disabled = ref(false);
</script>

<template>
  <PrizmTooltip :disabled="disabled" content="click to close tooltip function" placement="bottom" effect="light">
    <PrizmButton @click="disabled = !disabled">
      click to {{ disabled ? 'active' : 'close' }} tooltip function
    </PrizmButton>
  </PrizmTooltip>
</template>
```

## Props

| Название    | Тип                                                                                                                                                                   | По умолчанию | Описание             |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------- |
| `placement` | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \|  'right-end'` | `'right'`    | Расположение         |
| `content`   | `string`                                                                                                                                                              |              | Контент              |
| `trigger`   | `'hover' \| 'click' \| 'focus' \| 'contextmenu'`                                                                                                                      |              | Событие срабатывания |
| `effect`    | `'dark' \| 'light'`                                                                                                                                                   | `dark`       | Тема                 |

## Slots

| Название  | Описание            |
| --------- | ------------------- |
| `default` | Основное содержимое |
| `content` | Содержимое тултипа  |
