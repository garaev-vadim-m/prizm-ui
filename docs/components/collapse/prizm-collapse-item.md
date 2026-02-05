---
title: Collapse item
sidebar: auto
---

# Collapse item

Пользовательский айтем коллапса на основе `ElCollapseItem` из Element Plus с поддержкой кастомных иконок, стилей и событий.

## Импорт

```ts
import { ElCollapseItem } from from 'prizm-ui-vue';
```

## Props

| Название   | Тип                     | По умолчанию      | Описание                 |
| ---------- | ----------------------- | ----------------- | ------------------------ |
| `title`    | `string`                | `'Default title'` | Название айтема          |
| `disabled` | `boolean`               | `false`           | Блокировка айтема        |
| `icon`     | `string` \| `Component` | `IconDubleArrow`  | Название айтема          |
| `name`     | `string \| number`      |                   | Имя для обработки айтема |

## Slots

| Название  | Описание                            |
| --------- | ----------------------------------- |
| `default` | Основное содержимое                 |
| `title`   | Содержимое название названия айтема |
| `icon`    | Содержимое иконки                   |

## Exposes

| Название   | Expose                                       | Описание      |
| ---------- | -------------------------------------------- | ------------- |
| `validate` | `someRef.$refs.baseCollapseItemRef.isActive` | Активный item |
