---
title: Form item
sidebar: auto
---

# Form item

Компонент формы, основанный на `ElFormItem` из Element Plus.

## Импорт

```ts
import { PrizmFormItem } from 'prizm-ui-vue';
```

## Props

| Название        | Тип                              | По умолчанию | Описание                         |
| --------------- | -------------------------------- | ------------ | -------------------------------- |
| `disabled`      | `boolean`                        | `false`      | Блокировка формы                 |
| `statusIcon`    | `boolean`                        | `false`      | Отображение статуса формы        |
| `inline`        | `boolean`                        | `false`      | Отоброжение формы по горизонтали |
| `labelPosition` | `'top'` \| `'right'` \| `'left'` | `left`       | Отображение label                |

## Slots

| Название  | Описание                        |
| --------- | ------------------------------- |
| `default` | Основное содержимое части формы |
| `label`   | Слот для кастомного label       |
| `error`   | Слот для кастомной ошибки       |
