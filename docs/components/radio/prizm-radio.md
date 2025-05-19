---
title: Radio
sidebar: auto
---

# Radio

Компонент радио кнопки, основанный на `ElRadio` из Element Plus.

## Импорт

```ts
import { PrizmRadio } from 'prizm-ui-vue';
```

## Basic usage

```vue
<script lang="ts" setup>
import { PrizmRadio, PrizmRadioGroup } from 'prizm-ui-vue';
import { ref } from 'vue';

const radio1 = ref('1');
const radio2 = ref('1');
const radio3 = ref('1');
</script>

<template>
  <div>
    <PrizmRadioGroup v-model="radio1">
      <PrizmRadio value="1" size="large">Option 1</PrizmRadio>
      <PrizmRadio value="2" size="large">Option 2</PrizmRadio>
    </PrizmRadioGroup>
  </div>
  <div>
    <PrizmRadioGroup v-model="radio2">
      <PrizmRadio value="1">Option 1</PrizmRadio>
      <PrizmRadio value="2">Option 2</PrizmRadio>
    </PrizmRadioGroup>
  </div>
  <div>
    <PrizmRadioGroup v-model="radio3">
      <PrizmRadio value="1" size="small">Option 1</PrizmRadio>
      <PrizmRadio value="2" size="small">Option 2</PrizmRadio>
    </PrizmRadioGroup>
  </div>
</template>
```

## Disabled

```vue
<script lang="ts" setup>
import { PrizmRadio } from 'prizm-ui-vue';
import { ref } from 'vue';

const radio = ref('selected and disabled');
const disabled = ref(true);
</script>

<template>
  <PrizmRadio v-model="radio" disabled value="disabled">Option A</PrizmRadio>
  <PrizmRadio v-model="radio" :disabled="disabled" value="selected and disabled"> Option B </PrizmRadio>
</template>
```

## With border

```vue
<script lang="ts" setup>
import { PrizmRadio, PrizmRadioGroup } from 'prizm-ui-vue';
import { ref } from 'vue';

const radio1 = ref('1');
const radio2 = ref('1');
const radio3 = ref('1');
const radio4 = ref('1');
</script>

<template>
  <div>
    <PrizmRadioGroup v-model="radio1">
      <PrizmRadio value="1" size="large" border>Option A</PrizmRadio>
      <PrizmRadio value="2" size="large" border>Option B</PrizmRadio>
    </PrizmRadioGroup>
  </div>
  <div style="margin-top: 20px">
    <PrizmRadioGroup v-model="radio2">
      <PrizmRadio value="1" border>Option A</PrizmRadio>
      <PrizmRadio value="2" border>Option B</PrizmRadio>
    </PrizmRadioGroup>
  </div>
  <div style="margin-top: 20px">
    <PrizmRadioGroup v-model="radio3" size="small">
      <PrizmRadio value="1" border>Option A</PrizmRadio>
      <PrizmRadio value="2" border disabled>Option B</PrizmRadio>
    </PrizmRadioGroup>
  </div>
  <div style="margin-top: 20px">
    <PrizmRadioGroup v-model="radio4" size="small" disabled>
      <PrizmRadio value="1" border>Option A</PrizmRadio>
      <PrizmRadio value="2" border>Option B</PrizmRadio>
    </PrizmRadioGroup>
  </div>
</template>
```

## Button style

```vue
<script lang="ts" setup>
import { PrizmRadioGroup, PrizmRadioButton } from 'prizm-ui-vue';
import { ref } from 'vue';

const radio1 = ref('Russian');
const radio2 = ref('Russian');
const radio3 = ref('Russian');
</script>

<template>
  <div>
    <PrizmRadioGroup v-model="radio1" size="large" fill="#6cf">
      <PrizmRadioButton label="New York" value="New York" />
      <PrizmRadioButton label="Washington" value="Washington" />
      <PrizmRadioButton label="Los Angeles" value="Los Angeles" />
      <PrizmRadioButton label="Chicago" value="Chicago" />
    </PrizmRadioGroup>
  </div>
  <div style="margin-top: 20px">
    <PrizmRadioGroup v-model="radio2" text-color="#626aef" fill="rgb(239, 240, 253)">
      <PrizmRadioButton label="New York" value="New York" />
      <PrizmRadioButton label="Washington" value="Washington" />
      <PrizmRadioButton label="Los Angeles" value="Los Angeles" />
      <PrizmRadioButton label="Chicago" value="Chicago" />
    </PrizmRadioGroup>
  </div>
  <div style="margin-top: 20px">
    <PrizmRadioGroup v-model="radio3" size="small">
      <PrizmRadioButton label="New York" value="New York" />
      <PrizmRadioButton label="Washington" value="Washington" disabled />
      <PrizmRadioButton label="Los Angeles" value="Los Angeles" />
      <PrizmRadioButton label="Chicago" value="Chicago" />
    </PrizmRadioGroup>
  </div>
</template>
```
