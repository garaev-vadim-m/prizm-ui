---
title: Collapse
sidebar: auto
---

# Collapse

Пользовательский коллапс на основе `ElCollapse` из Element Plus с поддержкой кастомных иконок, стилей и событий.

## Импорт

```ts
import { PrizmCollapse } from 'prizm-ui-vue';
```

## Примеры использования

## Basic usage

```vue
<script lang="ts" setup>
import { PrizmCollapse, PrizmCollapseItem, type CollapseModelValue } from 'prizm-ui-vue';
import { ref } from 'vue';

const activeNames = ref(['1']);
const handleChange = (val: CollapseModelValue) => {
  console.log(val);
};
</script>

<template>
  <div class="demo-collapse">
    <PrizmCollapse v-model="activeNames" @change="handleChange">
      <PrizmCollapseItem title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real life, and comply with languages and
          habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such as: design style, icons and texts,
          position of elements, etc.
        </div>
      </PrizmCollapseItem>
      <PrizmCollapseItem title="Feedback" name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their operations by style updates and interactive
          effects;
        </div>
        <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
      </PrizmCollapseItem>
      <PrizmCollapseItem title="Efficiency" name="3">
        <div>Simplify the process: keep operating process simple and intuitive;</div>
        <div>
          Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make
          decisions;
        </div>
        <div>
          Easy to identify: the interface should be straightforward, which helps the users to identify and frees them
          from memorizing and recalling.
        </div>
      </PrizmCollapseItem>
      <PrizmCollapseItem title="Controllability" name="4">
        <div>
          Decision making: giving advices about operations is acceptable, but do not make decisions for the users;
        </div>
        <div>
          Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or
          terminating current operation.
        </div>
      </PrizmCollapseItem>
    </PrizmCollapse>
  </div>
</template>
```

## Custom icon

```vue
<script lang="ts" setup>
import { PrizmCollapse, PrizmCollapseItem, type CollapseModelValue, IconArrowTop } from 'prizm-ui-vue';
import { ref } from 'vue';

const activeNames = ref(['1']);
const handleChange = (val: CollapseModelValue) => {
  console.log(val);
};
</script>

<template>
  <div class="demo-collapse">
    <PrizmCollapse v-model="activeNames" @change="handleChange">
      <PrizmCollapseItem title="Consistency" name="1" :icon="IconArrowTop">
        <div>
          Consistent with real life: in line with the process and logic of real life, and comply with languages and
          habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such as: design style, icons and texts,
          position of elements, etc.
        </div>
      </PrizmCollapseItem>
      <PrizmCollapseItem title="Feedback" name="2">
        <template #icon="{ isActive }">
          <span class="icon-ele">
            {{ isActive ? 'Expanded' : 'Collapsed' }}
          </span>
        </template>
        <div>
          Operation feedback: enable the users to clearly perceive their operations by style updates and interactive
          effects;
        </div>
        <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
      </PrizmCollapseItem>
      <PrizmCollapseItem title="Efficiency" name="3">
        <div>Simplify the process: keep operating process simple and intuitive;</div>
        <div>
          Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make
          decisions;
        </div>
        <div>
          Easy to identify: the interface should be straightforward, which helps the users to identify and frees them
          from memorizing and recalling.
        </div>
      </PrizmCollapseItem>
      <PrizmCollapseItem title="Controllability" name="4">
        <div>
          Decision making: giving advices about operations is acceptable, but do not make decisions for the users;
        </div>
        <div>
          Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or
          terminating current operation.
        </div>
      </PrizmCollapseItem>
    </PrizmCollapse>
  </div>
</template>

<style scoped>
.icon-ele {
  margin: 0 8px 0 auto;
  color: #409eff;
}
</style>
```

```vue
<script lang="ts" setup>
import { PrizmCollapse, PrizmCollapseItem } from 'prizm-ui-vue';
import { ref } from 'vue';

const activeName = ref('1');
</script>

<template>
  <div class="demo-collapse">
    <PrizmCollapse v-model="activeName" accordion>
      <PrizmCollapseItem title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real life, and comply with languages and
          habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such as: design style, icons and texts,
          position of elements, etc.
        </div>
      </PrizmCollapseItem>
      <PrizmCollapseItem title="Feedback" name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their operations by style updates and interactive
          effects;
        </div>
        <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
      </PrizmCollapseItem>
      <PrizmCollapseItem title="Efficiency" name="3">
        <div>Simplify the process: keep operating process simple and intuitive;</div>
        <div>
          Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make
          decisions;
        </div>
        <div>
          Easy to identify: the interface should be straightforward, which helps the users to identify and frees them
          from memorizing and recalling.
        </div>
      </PrizmCollapseItem>
      <PrizmCollapseItem title="Controllability" name="4">
        <div>
          Decision making: giving advices about operations is acceptable, but do not make decisions for the users;
        </div>
        <div>
          Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or
          terminating current operation.
        </div>
      </PrizmCollapseItem>
    </PrizmCollapse>
  </div>
</template>
```

## Custom title

```vue
<script setup lang="ts">
import { PrizmCollapse, PrizmCollapseItem } from 'prizm-ui-vue';
</script>

<template>
  <div class="demo-collapse">
    <PrizmCollapse accordion>
      <PrizmCollapseItem name="1">
        <template #title="{ isActive }">
          <div :class="['title-wrapper', { 'is-active': isActive }]">
            Consistency
            <el-icon class="header-icon">
              <info-filled />
            </el-icon>
          </div>
        </template>
        <div>
          Consistent with real life: in line with the process and logic of real life, and comply with languages and
          habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such as: design style, icons and texts,
          position of elements, etc.
        </div>
      </PrizmCollapseItem>
      <PrizmCollapseItem title="Feedback" name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their operations by style updates and interactive
          effects;
        </div>
        <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
      </PrizmCollapseItem>
      <PrizmCollapseItem title="Efficiency" name="3">
        <div>Simplify the process: keep operating process simple and intuitive;</div>
        <div>
          Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make
          decisions;
        </div>
        <div>
          Easy to identify: the interface should be straightforward, which helps the users to identify and frees them
          from memorizing and recalling.
        </div>
      </PrizmCollapseItem>
      <PrizmCollapseItem title="Controllability" name="4">
        <div>
          Decision making: giving advices about operations is acceptable, but do not make decisions for the users;
        </div>
        <div>
          Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or
          terminating current operation.
        </div>
      </PrizmCollapseItem>
    </PrizmCollapse>
  </div>
</template>

<style scoped>
.title-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
}

.title-wrapper.is-active {
  color: var(--el-color-primary);
}
</style>
```

## Props

| Название    | Тип       | По умолчанию | Описание       |
| ----------- | --------- | ------------ | -------------- |
| `accordion` | `boolean` | `false`      | Вид аккардиона |

## Slots

## Slots

| Название  | Описание                     |
| --------- | ---------------------------- |
| `default` | Основное содержимое коллапса |

## Events

| Название | Описание          |
| -------- | ----------------- |
| `change` | Событие изменения |

## Exposes

| Название         | Expose                                         | Описание       |
| ---------------- | ---------------------------------------------- | -------------- |
| `activeNames`    | `someRef.$refs.baseCollapseRef.activeNames`    | Активный names |
| `setActiveNames` | `someRef.$refs.baseCollapseRef.setActiveNames` | Запись names   |
