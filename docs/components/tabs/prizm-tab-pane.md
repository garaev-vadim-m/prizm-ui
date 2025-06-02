---
title: Tab-pane
sidebar: auto
---

# Tab-pane

Компонент вкладки, основанный на `ElTabPane` из Element Plus.

## Импорт

```ts
import { PrizmTabPane } from 'prizm-ui-vue';
```

## Props

| Название   | Тип       | По умолчанию | Описание             |
| ---------- | --------- | ------------ | -------------------- |
| `label`    | `string`  |              | Название вкладки     |
| `name`     | `string`  |              | Наименование вкладки |
| `disabled` | `boolean` | `false`      | Блокировка вкладки   |
| `closable` | `boolean` | `false`      | Закрытие вкладки     |

## Slots

| Название  | Описание            |
| --------- | ------------------- |
| `default` | Основное содержимое |
| `label`   | Содержимое названия |
