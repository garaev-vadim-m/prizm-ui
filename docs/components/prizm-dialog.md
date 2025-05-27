---
title: Dialog
sidebar: auto
---

# Dialog

Пользовательский диалоговое окно основано на `ElDialog` из Element Plus с поддержкой кастомных иконок, стилей и событий.

## Импорт

```ts
import { PrizmDialog } from 'prizm-ui-vue';
```

## Примеры использования

## Basic usage

```vue
<script lang="ts" setup>
import { PrizmDialog, PrizmMessageBox, PrizmButton } from 'prizm-ui-vue';
import { ref } from 'vue';

const dialogVisible = ref(false);

const handleClose = (done: () => void) => {
  PrizmMessageBox({
    title: 'Are you sure to close this dialog?',
  })
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};
</script>

<template>
  <PrizmButton plain @click="dialogVisible = true"> Click to open the Dialog </PrizmButton>

  <PrizmDialog v-model="dialogVisible" title="Tips" width="500" :before-close="handleClose">
    <span>This is a message</span>
    <template #footer>
      <div class="dialog-footer">
        <PrizmButton @click="dialogVisible = false">Cancel</PrizmButton>
        <PrizmButton type="primary" @click="dialogVisible = false"> Confirm </PrizmButton>
      </div>
    </template>
  </PrizmDialog>
</template>
```

## Customized Content

```vue
<script lang="ts" setup>
import {
  PrizmDialog,
  PrizmButton,
  PrizmTable,
  PrizmTableColumn,
  PrizmForm,
  PrizmFormItem,
  PrizmInput,
  PrizmSelect,
  PrizmOption,
} from 'prizm-ui-vue';
import { reactive, ref } from 'vue';

const dialogTableVisible = ref(false);
const dialogFormVisible = ref(false);
const formLabelWidth = '140px';

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});

const gridData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
];
</script>

<template>
  <PrizmButton plain @click="dialogTableVisible = true"> Open a Table nested Dialog </PrizmButton>

  <PrizmButton plain @click="dialogFormVisible = true"> Open a Form nested Dialog </PrizmButton>

  <PrizmDialog v-model="dialogTableVisible" title="Shipping address" width="800">
    <PrizmTable :data="gridData">
      <PrizmTableColumn property="date" label="Date" width="150" />
      <PrizmTableColumn property="name" label="Name" width="200" />
      <PrizmTableColumn property="address" label="Address" />
    </PrizmTable>
  </PrizmDialog>

  <PrizmDialog v-model="dialogFormVisible" title="Shipping address" width="500">
    <PrizmForm :model="form">
      <PrizmFormItem label="Promotion name" :label-width="formLabelWidth">
        <PrizmInput v-model="form.name" autocomplete="off" />
      </PrizmFormItem>
      <PrizmFormItem label="Zones" :label-width="formLabelWidth">
        <PrizmSelect v-model="form.region" placeholder="Please select a zone">
          <PrizmOption label="Zone No.1" value="shanghai" />
          <PrizmOption label="Zone No.2" value="beijing" />
        </PrizmSelect>
      </PrizmFormItem>
    </PrizmForm>
    <template #footer>
      <div class="dialog-footer">
        <PrizmButton @click="dialogFormVisible = false">Cancel</PrizmButton>
        <PrizmButton type="primary" @click="dialogFormVisible = false"> Confirm </PrizmButton>
      </div>
    </template>
  </PrizmDialog>
</template>
```

## Customized Header

```vue
<script lang="ts" setup>
import { PrizmDialog, PrizmButton, PrizmIcon, IconClose } from 'prizm-ui-vue';
import { ref } from 'vue';

const visible = ref(false);
</script>

<template>
  <PrizmButton plain @click="visible = true"> Open Dialog with customized header </PrizmButton>

  <PrizmDialog v-model="visible" :show-close="false" width="500">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
        <PrizmButton type="danger" @click="close">
          <PrizmIcon class="el-icon--left"><IconClose /></PrizmIcon>
          Close
        </PrizmButton>
      </div>
    </template>
    This is dialog content.
  </PrizmDialog>
</template>

<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
}
</style>
```

## Nested Dialog

##### If a Dialog is nested in another Dialog, <Badge type="info" text="append-to-body" /> is required.

```vue
<script lang="ts" setup>
import { PrizmDialog, PrizmButton } from 'prizm-ui-vue';
import { ref } from 'vue';

const outerVisible = ref(false);
const innerVisible = ref(false);
</script>

<template>
  <PrizmButton plain @click="outerVisible = true"> Open the outer Dialog </PrizmButton>

  <PrizmDialog v-model="outerVisible" title="Outer Dialog" width="800">
    <span>This is the outer Dialog</span>
    <PrizmDialog v-model="innerVisible" width="500" title="Inner Dialog" append-to-body>
      <span>This is the inner Dialog</span>
    </PrizmDialog>
    <template #footer>
      <div class="dialog-footer">
        <PrizmButton @click="outerVisible = false">Cancel</PrizmButton>
        <PrizmButton type="primary" @click="innerVisible = true"> Open the inner Dialog </PrizmButton>
      </div>
    </template>
  </PrizmDialog>
</template>
```

## Default footer

```vue
<script lang="ts" setup>
import { PrizmDialog, PrizmButton } from 'prizm-ui-vue';
import { ref } from 'vue';

const dialog = ref(false);
</script>
<template>
  <PrizmButton plain @click="dialog = true"> Open the outer Dialog </PrizmButton>
  <!-- todo write component -->
</template>
```

## Props

| Название            | Тип                | По умолчанию | Описание                                                  |
| ------------------- | ------------------ | ------------ | --------------------------------------------------------- |
| `title`             | `string`           |              | Заголовок                                                 |
| `center`            | `boolean`          | `false`      | Центрирование контента                                    |
| `width`             | `string \| number` |              | Ширина модального окна                                    |
| `fullscreen`        | `boolean`          | `false`      | Ширина во всю страницу                                    |
| `appendToBody`      | `boolean`          | `true`       | Инициализация компонента в body                           |
| `lockScroll`        | `boolean`          | `true`       | Блокировка скролла вне модального окна                    |
| `alignCenter`       | `boolean`          | `true`       | Центрирование модального кона                             |
| `varticalFooter`    | `boolean`          | `true`       | Вертикальное расположение кнопок                          |
| `defaultFooter`     | `boolean`          | `true`       | Стандартный футер модального окна                         |
| `confirmDisabled`   | `boolean`          | `false`      | Блокировка кнопки подверждения. Если defaultFooter = true |
| `cancelDisabled`    | `boolean`          | `false`      | Блокировка кнопки отмены. Если defaultFooter = true       |
| `confirmButtonText` | `string`           | `Сохранить`  | Текст кнопки подверждения. Если defaultFooter = true      |
| `cancelButtonText`  | `string`           | `Отмены`     | Текст кнопки отмены. Если defaultFooter = true            |

## Slots

| Название  | Описание                             |
| --------- | ------------------------------------ |
| `default` | Основное содержимое модального окна  |
| `header`  | Содержимое шапки модального окна     |
| `footer`  | Содержимое футера модального окна    |
| `title`   | Содержимое заголовка модального окна |

## Events

| Название         | Описание                                                           |
| ---------------- | ------------------------------------------------------------------ |
| `beforeClose`    | Событие закрытия модального окна вне области окна                  |
| `open`           | Событие открытие модального окна                                   |
| `opened`         | Событие открытого модального окна                                  |
| `close`          | Событие закрытия модального окна                                   |
| `closed`         | Событие закрытого модального окна                                  |
| `openAutoFocus`  | Событие фокусирования при открытии модального окна                 |
| `closeAutoFocus` | Событие фокусирования при закрытии модального окна                 |
| `confirmButton`  | Событие нажатия на кнопку подтверждения. Если defaultFooter = true |
| `cancelButton`   | Событие нажатия на кнопку отмены. Если defaultFooter = true        |
