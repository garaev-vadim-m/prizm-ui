---
title: Table
sidebar: auto
---

# Table

Компонент таблицы, основанный на `ElTable` из Element Plus.

## Импорт

```ts
import { PrizmTable } from 'prizm-ui-vue';
```

## Basic usage

```vue
<script lang="ts" setup>
import { PrizmTable, PrizmTableColumn } from 'prizm-ui-vue';
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
</script>

<template>
  <PrizmTable :data="tableData" style="width: 100%">
    <PrizmTableColumn prop="date" label="Date" width="180" />
    <PrizmTableColumn prop="name" label="Name" width="180" />
    <PrizmTableColumn prop="address" label="Address" />
  </PrizmTable>
</template>
```

## Table with border

```vue
<script lang="ts" setup>
import { PrizmTable, PrizmTableColumn } from 'prizm-ui-vue';
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
</script>

<template>
  <PrizmTable :data="tableData" border style="width: 100%">
    <PrizmTableColumn prop="date" label="Date" width="180" />
    <PrizmTableColumn prop="name" label="Name" width="180" />
    <PrizmTableColumn prop="address" label="Address" />
  </PrizmTable>
</template>
```

## Table with show overflow tooltip

```vue
<script lang="ts" setup>
import { PrizmTable, PrizmTableColumn } from 'prizm-ui-vue';
interface User {
  date: string;
  name: string;
  address: string;
}
const tableData: User[] = [
  {
    date: '2016-05-04',
    name: 'Aleyna Kutzner',
    address: 'Lohrbergstr. 86c, Süd Lilli, Saarland',
  },
  {
    date: '2016-05-03',
    name: 'Helen Jacobi',
    address: '760 A Street, South Frankfield, Illinois',
  },
  {
    date: '2016-05-02',
    name: 'Brandon Deckert',
    address: 'Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen',
  },
  {
    date: '2016-05-01',
    name: 'Margie Smith',
    address: '23618 Windsor Drive, West Ricardoview, Idaho',
  },
];
</script>

<template>
  <PrizmTable :data="tableData" style="width: 100%">
    <PrizmTableColumn type="selection" width="55" />
    <PrizmTableColumn label="Date" width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </PrizmTableColumn>
    <PrizmTableColumn property="name" label="Name" width="120" />
    <PrizmTableColumn property="address" label="use show-overflow-tooltip" width="240" show-overflow-tooltip />
    <PrizmTableColumn property="address" label="address" />
  </PrizmTable>
</template>
```

## Table with fixed header

```vue
<script lang="ts" setup>
import { PrizmTable, PrizmTableColumn } from 'prizm-ui-vue';
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
</script>

<template>
  <PrizmTable :data="tableData" height="250" style="width: 100%">
    <PrizmTableColumn prop="date" label="Date" width="180" />
    <PrizmTableColumn prop="name" label="Name" width="180" />
    <PrizmTableColumn prop="address" label="Address" />
  </PrizmTable>
</template>
```

## Table witch fixed column

```vue
<script lang="ts" setup>
import { PrizmTable, PrizmTableColumn } from 'prizm-ui-vue';
const handleClick = () => {
  console.log('click');
};

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
];
</script>

<template>
  <PrizmTable :data="tableData" style="width: 100%">
    <PrizmTableColumn fixed prop="date" label="Date" width="150" />
    <PrizmTableColumn prop="name" label="Name" width="120" />
    <PrizmTableColumn prop="state" label="State" width="120" />
    <PrizmTableColumn prop="city" label="City" width="120" />
    <PrizmTableColumn prop="address" label="Address" width="600" />
    <PrizmTableColumn prop="zip" label="Zip" width="120" />
    <PrizmTableColumn fixed="right" label="Operations" min-width="120">
      <template #default>
        <el-button link type="primary" size="small" @click="handleClick"> Detail </el-button>
        <el-button link type="primary" size="small">Edit</el-button>
      </template>
    </PrizmTableColumn>
  </PrizmTable>
</template>
```

## Table with fixed columns and header

```vue
<script lang="ts" setup>
import { PrizmTable, PrizmTableColumn } from 'prizm-ui-vue';
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
];
</script>

<template>
  <PrizmTable :data="tableData" style="width: 100%" height="250">
    <PrizmTableColumn fixed prop="date" label="Date" width="150" />
    <PrizmTableColumn prop="name" label="Name" width="120" />
    <PrizmTableColumn prop="state" label="State" width="120" />
    <PrizmTableColumn prop="city" label="City" width="320" />
    <PrizmTableColumn prop="address" label="Address" width="600" />
    <PrizmTableColumn prop="zip" label="Zip" />
  </PrizmTable>
</template>
```

## Grouping table head

```vue
<script lang="ts" setup>
import { PrizmTable, PrizmTableColumn } from 'prizm-ui-vue';
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
];
</script>

<template>
  <PrizmTable :data="tableData" style="width: 100%">
    <PrizmTableColumn prop="date" label="Date" width="150" />
    <PrizmTableColumn label="Delivery Info">
      <PrizmTableColumn prop="name" label="Name" width="120" />
      <PrizmTableColumn label="Address Info">
        <PrizmTableColumn prop="state" label="State" width="120" />
        <PrizmTableColumn prop="city" label="City" width="120" />
        <PrizmTableColumn prop="address" label="Address" />
        <PrizmTableColumn prop="zip" label="Zip" width="120" />
      </PrizmTableColumn>
    </PrizmTableColumn>
  </PrizmTable>
</template>
```

## Single select row

```vue
<template>
  <PrizmTable
    ref="singleTableRef"
    :data="tableData"
    highlight-current-row
    style="width: 100%"
    @current-change="handleCurrentChange">
    <PrizmTableColumn type="index" width="50" />
    <PrizmTableColumn property="date" label="Date" width="120" />
    <PrizmTableColumn property="name" label="Name" width="120" />
    <PrizmTableColumn property="address" label="Address" />
  </PrizmTable>
  <div style="margin-top: 20px">
    <PrizmButton @click="setCurrent(tableData[1])">Select second row</PrizmButton>
    <PrizmButton @click="setCurrent()">Clear selection</PrizmButton>
  </div>
</template>

<script lang="ts" setup>
import { PrizmTable, PrizmTableColumn, PrizmButton, type TableInstance } from 'prizm-ui-vue';
import { ref, useTemplateRef } from 'vue';

interface User {
  date: string;
  name: string;
  address: string;
}

const currentRow = ref();
const singleTableRef = useTemplateRef<TableInstance>('singleTableRef');

const setCurrent = (row?: User) => {
  singleTableRef.value?.$refs.baseTableRef!.setCurrentRow(row);
};
const handleCurrentChange = (val: User | undefined) => {
  currentRow.value = val;
};
const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
</script>
```

## Sorting

```vue
<script lang="ts" setup>
import { PrizmTable, PrizmTableColumn, type TableColumnCtx } from 'prizm-ui-vue';

interface User {
  date: string;
  name: string;
  address: string;
}

const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row?.$refs.baseTableRef.address;
};

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
</script>
<template>
  <PrizmTable :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }" style="width: 100%">
    <PrizmTableColumn prop="date" label="Date" sortable width="180" />
    <PrizmTableColumn prop="name" label="Name" width="180" />
    <PrizmTableColumn prop="address" label="Address" :formatter="formatter" />
  </PrizmTable>
</template>
```

## Custom column template

```vue
<script lang="ts" setup>
import { PrizmTable, PrizmTableColumn, IconTimer, PrizmTag, PrizmButton } from 'prizm-ui-vue';

interface User {
  date: string;
  name: string;
  address: string;
}

const handleEdit = (index: number, row: User) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: User) => {
  console.log(index, row);
};

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
</script>

<template>
  <PrizmTable :data="tableData" style="width: 100%">
    <PrizmTableColumn label="Date" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </div>
      </template>
    </PrizmTableColumn>
    <PrizmTableColumn label="Name" width="180">
      <template #default="scope">
        <PrizmTag>{{ scope.row.name }}</PrizmTag>
      </template>
    </PrizmTableColumn>
    <PrizmTableColumn label="Operations">
      <template #default="scope">
        <PrizmButton size="small" @click="handleEdit(scope.$index, scope.row)"> Edit </PrizmButton>
        <PrizmButton size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"> Delete </PrizmButton>
      </template>
    </PrizmTableColumn>
  </PrizmTable>
</template>
```

## Table with custom header

```vue
<script lang="ts" setup>
import { PrizmTable, PrizmTableColumn, PrizmButton, PrizmInput } from 'prizm-ui-vue';
import { computed, ref } from 'vue';

interface User {
  date: string;
  name: string;
  address: string;
}

const search = ref('');
const filterTableData = computed(() =>
  tableData.filter((data) => !search.value || data.name.toLowerCase().includes(search.value.toLowerCase())),
);
const handleEdit = (index: number, row: User) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: User) => {
  console.log(index, row);
};

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
</script>

<template>
  <PrizmTable :data="filterTableData" style="width: 100%">
    <PrizmTableColumn label="Date" prop="date" />
    <PrizmTableColumn label="Name" prop="name" />
    <PrizmTableColumn align="right">
      <template #header>
        <PrizmInput v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <PrizmButton size="small" @click="handleEdit(scope.$index, scope.row)"> Edit </PrizmButton>
        <PrizmButton size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"> Delete </PrizmButton>
      </template>
    </PrizmTableColumn>
  </PrizmTable>
</template>
```
