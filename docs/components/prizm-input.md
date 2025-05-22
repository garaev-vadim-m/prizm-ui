---
title: Input
sidebar: auto
---

# Input

Пользовательский input-компонент на основе `ElInput` из Element Plus с поддержкой кастомных иконок, стилей и событий.

## Импорт

```ts
import { PrizmInput } from from 'prizm-ui-vue';
```

## Пример использования

```vue
<script setup lang="ts">
import { PrizmInput } from from 'prizm-ui-vue';
import { ref } from 'vue';

const text = ref('')
</script>
<template>
  <PrizmInput v-model="text" placeholder="Введите текст" />
</template>
```

---

## Props

| Название       | Тип                                     | По умолчанию | Описание                    |
| -------------- | --------------------------------------- | ------------ | --------------------------- |
| `modelValue`   | `string \| number`                      | —            | Значение поля ввода         |
| `disabled`     | `boolean`                               | `false`      | Отключение поля             |
| `maxlength`    | `number`                                | —            | Максимальная длина ввода    |
| `minlength`    | `number`                                | —            | Минимальная длина ввода     |
| `type`         | `string` (`'text'`, `'textarea'` и др.) | `'text'`     | Тип инпута                  |
| `autosize`     | `boolean \| object`                     | —            | Авторазмер (для `textarea`) |
| `autocomplete` | `'on' \| 'off'`                         | —            | Автозаполнение              |
| `placeholder`  | `string`                                | —            | Плейсхолдер                 |
| `suffixIcon`   | `string \| Component`                   | —            | Иконка справа               |
| `prefixIcon`   | `string \| Component`                   | —            | Иконка слева                |
| `autofocus`    | `boolean`                               | `false`      | Автофокус                   |
| `formatter`    | `(value: string \| number) => string`   | —            | Форматирование отображения  |
| `parser`       | `(value: string) => string \| number`   | —            | Парсинг значения            |
| `size`         | `'large' \| 'default' \| 'small'`       | `'large'`    | Размер                      |

---

## Slots

| Название  | Описание                  |
| --------- | ------------------------- |
| `prefix`  | Слот перед текстом        |
| `suffix`  | Слот после текста         |
| `prepend` | Элемент перед полем ввода |
| `append`  | Элемент после поля ввода  |

---

## Events

| Название             | Аргумент                  | Описание               |
| -------------------- | ------------------------- | ---------------------- |
| `onInput`            | `value: string`           | При вводе текста       |
| `onChange`           | `value: string`           | При изменении значения |
| `onFocus`            | `event: FocusEvent`       | При фокусе             |
| `onBlur`             | `event: FocusEvent`       | При потере фокуса      |
| `onClear`            | `—`                       | При очистке            |
| `onKeydown`          | `event: KeyboardEvent`    | При нажатии клавиши    |
| `onCompositionstart` | `event: CompositionEvent` | Начало композиции      |
| `onCompositionend`   | `event: CompositionEvent` | Конец композиции       |

---

## Стили

Компонент использует CSS-модуль `classes` для кастомизации внешнего вида. Пример доступных переменных:

```scss
--el-input-border-radius: var(--border-radius);
--el-input-border-color: var(--color-gray);
--el-disabled-bg-color: var(--color-light-gray);
```

---

## Примеры

```vue
<PrizmInput v-model="text" placeholder="Имя пользователя">
  <template #prefix>
    <UserIcon />
  </template>
</PrizmInput>
```

---

## Работа с `ref`

```ts
const input = ref();

<PrizmInput ref="input" />
```

Вы получите доступ к `baseInputRef`, ссылающемуся на `ElInput`.
