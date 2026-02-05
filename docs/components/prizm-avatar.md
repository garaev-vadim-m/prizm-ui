---
title: Avatar
sidebar: auto
---

# Avatar

Компонент автараки, основанный на `ElAvatar` из Element Plus.

## Импорт

```ts
import { PrizmAvatar } from 'prizm-ui-vue';
```

## Basic usage

```vue
<script lang="ts" setup>
import { PrizAvatar } from 'prizm-ui-vue';
import { ref } from 'vue';

const avatarPath = ref('somePath');
const avatarPath2 = 'somePath';
</script>
<template>
  <!-- circle -->
  <PrizAvatar size="large" src="somePath" />
  <PrizAvatar size="default" :src="avatarPath" />
  <PrizAvatar size="small" :src="avatarPath2" />

  <!-- square -->
  <PrizAvatar shape="square" size="small" :src="avatarPath2" />
  <PrizAvatar shape="square" size="default" :src="avatarPath" />
  <PrizAvatar shape="square" size="large" src="somePath" />
</template>
```

## Fallback

```vue
<script lang="ts" setup>
import { PrizAvatar } from 'prizm-ui-vue';
const errorHandler = () => true;
</script>

<template>
  <PrizAvatar :size="60" src="" @error="errorHandler">
    <img src="somePath" />
  </PrizAvatar>
</template>
```

## Fit Container

```vue
<script lang="ts" setup>
import { PrizAvatar } from 'prizm-ui-vue';
import { reactive, toRefs } from 'vue';
import type { ObjectFitProperty } from 'csstype';

const state = reactive({
  fits: ['fill', 'contain', 'cover', 'none', 'scale-down'] as ObjectFitProperty[],
  url: 'somePath' as const,
});

const { fits, url } = toRefs(state);
</script>

<template>
  <div class="demo-fit">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="title">{{ fit }}</span>
      <PrizAvatar shape="square" :size="100" :fit="fit" :src="url" />
    </div>
  </div>
</template>

<style scoped>
.demo-fit {
  display: flex;
  text-align: center;
  justify-content: space-between;
}
.demo-fit .block {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
}

.demo-fit .title {
  margin-bottom: 10px;
  font-size: 14px;
}
</style>
```

## Props

| Название | Тип                                                | По умолчанию | Описание           |
| -------- | -------------------------------------------------- | ------------ | ------------------ |
| `icon`   | `string / Component`                               | `Component`  | Иконка автарки     |
| `size`   | `default` \| `small` \| `large` \| `nubmer`        | `large`      | Размер аватарки    |
| `fit`    | `fill` \| `contain` \| `cover` \| `none` \| `none` | `cover`      | Заполнение автарки |
| `shape`  | `circle` \| `square`                               | `circle`     | Заполнение автарки |

## Slots

| Название  | Описание                        |
| --------- | ------------------------------- |
| `default` | Основное содержимое радиокнопки |

## Events

| Название | Описание              |
| -------- | --------------------- |
| `error`  | Ошибка загрузки image |
