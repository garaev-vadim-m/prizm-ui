---
title: Dropdown
sidebar: auto
---

# Dropdown

Компонент выпадающий список, основанный на `ElDropdown` из Element Plus.

## Импорт

```ts
import { PrizmDropdown } from 'prizm-ui-vue';
```

## Примеры использования

## Basic usage

##### Наведите курсор на выпадающее меню, чтобы открыть его для выполнения дополнительных действий.

```vue
<script lang="ts" setup>
import { PrizmDropdown, PrizmDropdownMenu, PrizmDropdownItem, PrizmIcon, IconArrowTop } from 'prizm-ui-vue';
</script>

<template>
  <PrizmDropdown>
    <span>
      Dropdown List
      <PrizmIcon>
        <IconArrowTop />
      </PrizmIcon>
    </span>
    <template #dropdown>
      <PrizmDropdownMenu>
        <PrizmDropdownItem>Action 1</PrizmDropdownItem>
        <PrizmDropdownItem>Action 2</PrizmDropdownItem>
        <PrizmDropdownItem>Action 3</PrizmDropdownItem>
        <PrizmDropdownItem disabled>Action 4</PrizmDropdownItem>
        <PrizmDropdownItem divided>Action 5</PrizmDropdownItem>
      </PrizmDropdownMenu>
    </template>
  </PrizmDropdown>
</template>
```

## Placement

##### Запись <Badge type="info">placement</Badge> свойство, позволяющее отображать выпадающий список в разных местах.

```vue
<script lang="ts" setup>
import { PrizmDropdown, PrizmDropdownMenu, PrizmDropdownItem, PrizmButton } from 'prizm-ui-vue';
</script>

<template>
  <div class="root">
    <PrizmDropdown placement="top-start">
      <PrizmButton> topStart </PrizmButton>
      <template #dropdown>
        <PrizmDropdownMenu>
          <PrizmDropdownItem>The Action 1st</PrizmDropdownItem>
          <PrizmDropdownItem>The Action 2st</PrizmDropdownItem>
          <PrizmDropdownItem>The Action 3st</PrizmDropdownItem>
        </PrizmDropdownMenu>
      </template>
    </PrizmDropdown>
    <PrizmDropdown placement="top">
      <PrizmButton> top </PrizmButton>
      <template #dropdown>
        <PrizmDropdownMenu>
          <PrizmDropdownItem>The Action 1st</PrizmDropdownItem>
          <PrizmDropdownItem>The Action 2st</PrizmDropdownItem>
          <PrizmDropdownItem>The Action 3st</PrizmDropdownItem>
        </PrizmDropdownMenu>
      </template>
    </PrizmDropdown>
    <PrizmDropdown placement="top-end">
      <PrizmButton> topEnd </PrizmButton>
      <template #dropdown>
        <PrizmDropdownMenu>
          <PrizmDropdownItem>The Action 1st</PrizmDropdownItem>
          <PrizmDropdownItem>The Action 2st</PrizmDropdownItem>
          <PrizmDropdownItem>The Action 3st</PrizmDropdownItem>
        </PrizmDropdownMenu>
      </template>
    </PrizmDropdown>
    <PrizmDropdown placement="bottom-start">
      <PrizmButton> bottomStart </PrizmButton>
      <template #dropdown>
        <PrizmDropdownMenu>
          <PrizmDropdownItem>The Action 1st</PrizmDropdownItem>
          <PrizmDropdownItem>The Action 2st</PrizmDropdownItem>
          <PrizmDropdownItem>The Action 3st</PrizmDropdownItem>
        </PrizmDropdownMenu>
      </template>
    </PrizmDropdown>
    <PrizmDropdown placement="bottom">
      <PrizmButton> bottom </PrizmButton>
      <template #dropdown>
        <PrizmDropdownMenu>
          <PrizmDropdownItem>The Action 1st</PrizmDropdownItem>
          <PrizmDropdownItem>The Action 2st</PrizmDropdownItem>
          <PrizmDropdownItem>The Action 3st</PrizmDropdownItem>
        </PrizmDropdownMenu>
      </template>
    </PrizmDropdown>
    <PrizmDropdown placement="bottom-end">
      <PrizmButton> bottomEnd </PrizmButton>
      <template #dropdown>
        <PrizmDropdownMenu>
          <PrizmDropdownItem>The Action 1st</PrizmDropdownItem>
          <PrizmDropdownItem>The Action 2st</PrizmDropdownItem>
          <PrizmDropdownItem>The Action 3st</PrizmDropdownItem>
        </PrizmDropdownMenu>
      </template>
    </PrizmDropdown>
  </div>
</template>

<style lang="scss" scoped>
.root {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
```

## Triggering element

##### Используйте <Badge type="info">split-button</Badge>, чтобы разделить запускающий элемент на группу кнопок, где левая кнопка является обычной кнопкой, а правая - фактической целью запуска. Если вы хотите вставить разделительную линию между третьим и четвертым элементами, просто добавьте атрибут divided к четвертому элементу.

```vue
<script lang="ts" setup>
import {
  PrizmDropdown,
  PrizmDropdownMenu,
  PrizmDropdownItem,
  PrizmButton,
  IconArrowTop,
  PrizmIcon,
} from 'prizm-ui-vue';

const handleClick = () => {
  alert('button click');
};
</script>

<template>
  <div class="root">
    <PrizmDropdown>
      <PrizmButton type="primary">
        Dropdown List<PrizmIcon><IconArrowTop /></PrizmIcon>
      </PrizmButton>
      <template #dropdown>
        <PrizmDropdownMenu>
          <PrizmDropdownItem>Action 1</PrizmDropdownItem>
          <PrizmDropdownItem>Action 2</PrizmDropdownItem>
          <PrizmDropdownItem>Action 3</PrizmDropdownItem>
          <PrizmDropdownItem>Action 4</PrizmDropdownItem>
          <PrizmDropdownItem>Action 5</PrizmDropdownItem>
        </PrizmDropdownMenu>
      </template>
    </PrizmDropdown>
    <PrizmDropdown split-button type="primary" @click="handleClick">
      Dropdown List
      <template #dropdown>
        <PrizmDropdownMenu>
          <PrizmDropdownItem>Action 1</PrizmDropdownItem>
          <PrizmDropdownItem>Action 2</PrizmDropdownItem>
          <PrizmDropdownItem>Action 3</PrizmDropdownItem>
          <PrizmDropdownItem divided>Action 4</PrizmDropdownItem>
          <PrizmDropdownItem>Action 5</PrizmDropdownItem>
        </PrizmDropdownMenu>
      </template>
    </PrizmDropdown>
  </div>
</template>

<style lang="scss" scoped>
.root {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
```

```vue
<script lang="ts" setup>
import { PrizmDropdown, PrizmDropdownMenu, PrizmDropdownItem } from 'prizm-ui-vue';
</script>

<template>
  <h1>hover to trigger</h1>
  <PrizmDropdown>
    <span> Dropdown List </span>
    <template #dropdown>
      <PrizmDropdownMenu>
        <PrizmDropdownItem>Action 1</PrizmDropdownItem>
        <PrizmDropdownItem> Action 2 </PrizmDropdownItem>
        <PrizmDropdownItem>Action 3</PrizmDropdownItem>
        <PrizmDropdownItem>Action 4</PrizmDropdownItem>
        <PrizmDropdownItem>Action 5</PrizmDropdownItem>
      </PrizmDropdownMenu>
    </template>
  </PrizmDropdown>
  <h1>click to trigger</h1>
  <PrizmDropdown trigger="click">
    <span> Dropdown List </span>
    <template #dropdown>
      <PrizmDropdownMenu>
        <PrizmDropdownItem>Action 1</PrizmDropdownItem>
        <PrizmDropdownItem> Action 2 </PrizmDropdownItem>
        <PrizmDropdownItem>Action 3</PrizmDropdownItem>
        <PrizmDropdownItem>Action 4</PrizmDropdownItem>
        <PrizmDropdownItem>Action 5</PrizmDropdownItem>
      </PrizmDropdownMenu>
    </template>
  </PrizmDropdown>
  <h1>right click to trigger</h1>
  <PrizmDropdown trigger="contextmenu">
    <span> Dropdown List </span>
    <template #dropdown>
      <PrizmDropdownMenu>
        <PrizmDropdownItem>Action 1</PrizmDropdownItem>
        <PrizmDropdownItem> Action 2 </PrizmDropdownItem>
        <PrizmDropdownItem>Action 3</PrizmDropdownItem>
        <PrizmDropdownItem>Action 4</PrizmDropdownItem>
        <PrizmDropdownItem>Action 5</PrizmDropdownItem>
      </PrizmDropdownMenu>
    </template>
  </PrizmDropdown>
</template>
```
