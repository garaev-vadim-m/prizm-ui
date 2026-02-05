---
title: Tag
sidebar: auto
---

# Tag

Пользовательский тэг на основе `ElTag` из Element Plus с поддержкой кастомных иконок, стилей и событий.

## Импорт

```ts
import { PrizmTag } from from 'prizm-ui-vue';
```

## Примеры использования

## Basic usage

```vue
<script lang="ts" setup>
import { PrizmTag } from 'prizm-ui-vue';
</script>
<template>
  <div>
    <PrizmTag type="primary">Tag 1</PrizmTag>
    <PrizmTag type="success">Tag 2</PrizmTag>
    <PrizmTag type="info">Tag 3</PrizmTag>
    <PrizmTag type="warning">Tag 4</PrizmTag>
    <PrizmTag type="danger">Tag 5</PrizmTag>
  </div>
</template>
```

## Removable Tag

```vue
<script lang="ts" setup>
import { PrizmTag, type TagProps } from 'prizm-ui-vue';
import { ref } from 'vue';

interface TagsItem {
  name: string;
  type: TagProps['type'];
}

const tags = ref<TagsItem[]>([
  { name: 'Tag 1', type: 'primary' },
  { name: 'Tag 2', type: 'success' },
  { name: 'Tag 3', type: 'info' },
  { name: 'Tag 4', type: 'warning' },
  { name: 'Tag 5', type: 'danger' },
]);
</script>

<template>
  <div>
    <PrizmTag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
      {{ tag.name }}
    </PrizmTag>
  </div>
</template>
```

## Edit Dynamically

```vue
<script lang="ts" setup>
import { PrizmTag, PrizmButton, PrizmInput, type InputInstance } from 'prizm-ui-vue';
import { nextTick, ref } from 'vue';

const inputValue = ref('');
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3']);
const inputVisible = ref(false);
const InputRef = ref<InputInstance>();

const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};

const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    InputRef.value!.input!.focus();
  });
};

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = '';
};
</script>

<template>
  <div class="root">
    <PrizmTag v-for="tag in dynamicTags" :key="tag" closable :disable-transitions="false" @close="handleClose(tag)">
      {{ tag }}
    </PrizmTag>
    <PrizmInput
      v-if="inputVisible"
      ref="InputRef"
      v-model="inputValue"
      class="w-20"
      size="small"
      @keyup.enter="handleInputConfirm"
      @blur="handleInputConfirm" />
    <PrizmButton v-else class="button-new-tag" size="small" @click="showInput"> + New Tag </PrizmButton>
  </div>
</template>

<style scoped>
.root {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
```

## Sizes

```vue
<script lang="ts" setup>
import { PrizmTag } from 'prizm-ui-vue';
</script>

<template>
  <div class="root">
    <PrizmTag>Large</PrizmTag>
    <PrizmTag size="default">Default</PrizmTag>
    <PrizmTag size="small">Small</PrizmTag>
  </div>
</template>
<style scoped>
.root {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
```

## Props

| Название             | Тип                                                                 | По умолчанию | Описание        |
| -------------------- | ------------------------------------------------------------------- | ------------ | --------------- |
| `size`               | `'large' \| 'default' \| 'small'`                                   | `'large'`    | Размер          |
| `type`               | `'primary'` \| `'success'` \| `'warning'` \| `'danger'` \| `'info'` | `'info'`     | Тип тэга        |
| `effect`             | `'dark'` \| `'light'` \| `'plain'`                                  | `'light'`    | Тема тэга       |
| `round`              | `boolean`                                                           | `false`      | Скругление тэга |
| `closable`           | `boolean`                                                           | `false`      | Закрытие тэга   |
| `color`              | `string`                                                            |              | Цвет тэга       |
| `disableTransitions` | `boolean`                                                           | `false`      | Анимация тэга   |

## Slots

| Название  | Описание                 |
| --------- | ------------------------ |
| `default` | Основное содержимое тэга |

## Events

| Название | Описание         |
| -------- | ---------------- |
| `click`  | Событие нажатия  |
| `close`  | Событие закрытия |
