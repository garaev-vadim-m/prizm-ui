---
title: Checkbox group
sidebar: auto
---

# Checkbox group

Компонент группа чекбоксов, основанный на `ElCheckboxGroup` из Element Plus.

## Импорт

```ts
import { PrizmCheckboxGroup } from 'prizm-ui-vue';
```

## Basin usage

```vue
<script lang="ts" setup>
import { PrizmCheckboxGroup, PrizmCheckbox } from 'prizm-ui-vue';
import { ref } from 'vue';

const checkList = ref(['Value selected and disabled', 'Value A']);
</script>
<template>
  <PrizmCheckboxGroup v-model="checkList">
    <PrizmCheckbox label="Option A" value="Value A" />
    <PrizmCheckbox label="Option B" value="Value B" />
    <PrizmCheckbox label="Option C" value="Value C" />
    <PrizmCheckbox label="disabled" value="Value disabled" disabled />
    <PrizmCheckbox label="selected and disabled" value="Value selected and disabled" disabled />
  </PrizmCheckboxGroup>
</template>
```

## Min/Max items checked

```vue
<script lang="ts" setup>
import { PrizmCheckboxGroup, PrizmCheckbox } from 'prizm-ui-vue';
import { ref } from 'vue';

const checkedCities = ref(['Shanghai', 'Beijing']);
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
</script>
<template>
  <PrizmCheckboxGroup v-model="checkedCities" :min="1" :max="2">
    <PrizmCheckbox v-for="city in cities" :key="city" :label="city" :value="city">
      {{ city }}
    </PrizmCheckbox>
  </PrizmCheckboxGroup>
</template>
```

## Props

### Todo write

## Slots

### Todo write slots
