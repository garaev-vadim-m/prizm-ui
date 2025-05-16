---
title: Select
sidebar: auto
---

# Select

## Импорт

```ts
import { PrizmSelect } from 'prizm-ui-vue';
```

## Basic usage

```vue
<script lang="ts" setup>
import { PrizmSelect, PrizmOption } from 'prizm-ui-vue';
import { ref } from 'vue';

const value = ref('');

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
];
</script>
<template>
  <div class="flex flex-wrap gap-4 items-center">
    <PrizmSelect v-model="value" placeholder="Select" size="large" style="width: 240px">
      <PrizmOption v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </PrizmSelect>
    <PrizmSelect v-model="value" placeholder="Select" style="width: 240px">
      <PrizmOption v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </PrizmSelect>
    <PrizmSelect v-model="value" placeholder="Select" size="small" style="width: 240px">
      <PrizmOption v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </PrizmSelect>
  </div>
</template>
```

## Disabled option

```vue
<script lang="ts" setup>
import { PrizmSelect, PrizmOption } from 'prizm-ui-vue';
import { ref } from 'vue';

const value = ref('');
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
];
</script>
<template>
  <PrizmSelect v-model="value" placeholder="Select" style="width: 240px">
    <PrizmOption
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled" />
  </PrizmSelect>
</template>
```

## Disabled select

```vue
<script lang="ts" setup>
import { PrizmSelect, PrizmOption } from 'prizm-ui-vue';
import { ref } from 'vue';

const value = ref('');
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
];
</script>
<template>
  <PrizmSelect v-model="value" placeholder="Select" style="width: 240px" :disabled="item.disabled">
    <PrizmOption v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </PrizmSelect>
</template>
```

## Basic multiple select

```vue
<script lang="ts" setup>
import { PrizmSelect, PrizmOption } from 'prizm-ui-vue';
import { ref } from 'vue';

const value1 = ref([]);
const value2 = ref([]);
const value3 = ref([]);
const value4 = ref([]);
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
];
</script>

<template>
  <div class="m-4">
    <p>default</p>
    <PrizmSelect v-model="value1" multiple placeholder="Select" style="width: 240px">
      <PrizmOption v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </PrizmSelect>
  </div>
  <div class="m-4">
    <p>use collapse-tags</p>
    <PrizmSelect v-model="value2" multiple collapse-tags placeholder="Select" style="width: 240px">
      <PrizmOption v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </PrizmSelect>
  </div>
  <div class="m-4">
    <p>use collapse-tags-tooltip</p>
    <PrizmSelect
      v-model="value3"
      multiple
      collapse-tags
      collapse-tags-tooltip
      placeholder="Select"
      style="width: 240px">
      <PrizmOption v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </PrizmSelect>
  </div>
  <div class="m-4">
    <p>use max-collapse-tags</p>
    <PrizmSelect
      v-model="value4"
      multiple
      collapse-tags
      collapse-tags-tooltip
      :max-collapse-tags="3"
      placeholder="Select"
      style="width: 240px">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </PrizmSelect>
  </div>
</template>
```

## Custom template

```vue
<script lang="ts" setup>
import { PrizmSelect, PrizmOption } from 'prizm-ui-vue';
import { ref } from 'vue';

const value = ref('');
const cities = [
  {
    value: 'Beijing',
    label: 'Beijing',
  },
  {
    value: 'Shanghai',
    label: 'Shanghai',
  },
  {
    value: 'Nanjing',
    label: 'Nanjing',
  },
  {
    value: 'Chengdu',
    label: 'Chengdu',
  },
  {
    value: 'Shenzhen',
    label: 'Shenzhen',
  },
  {
    value: 'Guangzhou',
    label: 'Guangzhou',
  },
];
</script>

<template>
  <PrizmSelect v-model="value" placeholder="Select" style="width: 240px">
    <PrizmOption v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
      <span style="float: left">{{ item.label }}</span>
      <span
        style="
          float: right;
          color: var(--el-text-color-secondary);
          font-size: 13px;
        ">
        {{ item.value }}
      </span>
    </PrizmOption>
  </PrizmSelect>
</template>
```

## Header of the dropdown

```vue
<script lang="ts" setup>
import { PrizmSelect, PrizmOption, PrizmCheckbox } from 'prizm-ui-vue';
import { ref, watch } from 'vue';

const checkAll = ref(false);
const indeterminate = ref(false);
const value = ref([]);
const cities = ref([
  {
    value: 'Beijing',
    label: 'Beijing',
  },
  {
    value: 'Shanghai',
    label: 'Shanghai',
  },
  {
    value: 'Nanjing',
    label: 'Nanjing',
  },
  {
    value: 'Chengdu',
    label: 'Chengdu',
  },
  {
    value: 'Shenzhen',
    label: 'Shenzhen',
  },
  {
    value: 'Guangzhou',
    label: 'Guangzhou',
  },
]);

watch(value, (val) => {
  if (val.length === 0) {
    checkAll.value = false;
    indeterminate.value = false;
  } else if (val.length === cities.value.length) {
    checkAll.value = true;
    indeterminate.value = false;
  } else {
    indeterminate.value = true;
  }
});

const handleCheckAll = (val: CheckboxValueType) => {
  indeterminate.value = false;
  if (val) {
    value.value = cities.value.map((_) => _.value);
  } else {
    value.value = [];
  }
};
</script>

<template>
  <PrizmSelect
    v-model="value"
    multiple
    clearable
    collapse-tags
    placeholder="Select"
    popper-class="custom-header"
    :max-collapse-tags="1"
    style="width: 240px">
    <template #header>
      <PrizmCheckbox v-model="checkAll" :indeterminate="indeterminate" @change="handleCheckAll"> All </PrizmCheckbox>
    </template>
    <PrizmOption v-for="item in cities" :key="item.value" :label="item.label" :value="item.value" />
  </PrizmSelect>
</template>

<style>
.custom-header {
  .el-checkbox {
    display: flex;
    height: unset;
  }
}
</style>
```

## Footer of the dropdown

```vue
<script lang="ts" setup>
import { PrizmSelect, PrizmOption, PrizmCheckbox, PrizmButton, PrizmInput } from 'prizm-ui-vue';
import { ref } from 'vue';

const isAdding = ref(false);
const value = ref([]);
const optionName = ref('');
const cities = ref([
  {
    value: 'Beijing',
    label: 'Beijing',
  },
  {
    value: 'Shanghai',
    label: 'Shanghai',
  },
  {
    value: 'Nanjing',
    label: 'Nanjing',
  },
  {
    value: 'Chengdu',
    label: 'Chengdu',
  },
  {
    value: 'Shenzhen',
    label: 'Shenzhen',
  },
  {
    value: 'Guangzhou',
    label: 'Guangzhou',
  },
]);

const onAddOption = () => {
  isAdding.value = true;
};

const onConfirm = () => {
  if (optionName.value) {
    cities.value.push({
      label: optionName.value,
      value: optionName.value,
    });
    clear();
  }
};

const clear = () => {
  optionName.value = '';
  isAdding.value = false;
};
</script>

<template>
  <PrizmSelect v-model="value" placeholder="Select" style="width: 240px">
    <PrizmOption v-for="item in cities" :key="item.value" :label="item.label" :value="item.value" />
    <template #footer>
      <PrizmButton v-if="!isAdding" text bg size="small" @click="onAddOption"> Add an option </PrizmButton>
      <template v-else>
        <PrizmInput v-model="optionName" class="option-input" placeholder="input option name" size="small" />
        <PrizmButton type="primary" size="small" @click="onConfirm"> confirm </PrizmButton>
        <PrizmButton size="small" @click="clear">cancel</PrizmButton>
      </template>
    </template>
  </PrizmSelect>
</template>

<style>
.option-input {
  width: 100%;
  margin-bottom: 8px;
}
</style>
```

## Option filtering

```vue
<script lang="ts" setup>
import { PrizmSelect, PrizmOption } from 'prizm-ui-vue';
import { ref } from 'vue';

const value = ref('');
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
];
</script>

<template>
  <PrizmSelect v-model="value" filterable placeholder="Select" style="width: 240px">
    <PrizmOption v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </PrizmSelect>
</template>
```

## Props

### Todo write props

## Slots

### Todo write slots

## Events

### Todo write events
