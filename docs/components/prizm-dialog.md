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
