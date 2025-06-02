---
title: Tabs
sidebar: auto
---

# Tabs

Компонент радио кнопки, основанный на `ElTabs` из Element Plus.

## Импорт

```ts
import { PrizmTabs } from 'prizm-ui-vue';
```

## Примеры использования

## Basic usage

##### Вкладки обеспечивают выборочную функциональность карточек. По умолчанию первая вкладка выбрана как активная, и вы можете активировать любую вкладку, установив атрибут <Badge type="info">value</Badge>.

```vue
<script lang="ts" setup>
import { PrizmTabs, PrizmTabPane, type TabsPaneContext } from 'prizm-ui-vue';
import { ref } from 'vue';

const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<template>
  <PrizmTabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <PrizmTabPane label="User" name="first">User</PrizmTabPane>
    <PrizmTabPane label="Config" name="second">Config</PrizmTabPane>
    <PrizmTabPane label="Role" name="third">Role</PrizmTabPane>
    <PrizmTabPane label="Task" name="fourth">Task</PrizmTabPane>
  </PrizmTabs>
</template>
```

## Card style

##### Записать <Badge type="info">type</Badge> в <Badge type="info">card</Badge>

```vue
<script lang="ts" setup>
import { PrizmTabs, PrizmTabPane, type TabsPaneContext } from 'prizm-ui-vue';
import { ref } from 'vue';

const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<template>
  <PrizmTabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
    <PrizmTabPane label="User" name="first">User</PrizmTabPane>
    <PrizmTabPane label="Config" name="second">Config</PrizmTabPane>
    <PrizmTabPane label="Role" name="third">Role</PrizmTabPane>
    <PrizmTabPane label="Task" name="fourth">Task</PrizmTabPane>
  </PrizmTabs>
</template>
```

## Border card

##### Записать <Badge type="info">type</Badge> в <Badge type="info">border-card</Badge>

```vue
<script lang="ts" setup>
import { PrizmTabs, PrizmTabPane, type TabsPaneContext } from 'prizm-ui-vue';
import { ref } from 'vue';

const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<template>
  <PrizmTabs v-model="activeName" type="border-card" class="demo-tabs" @tab-click="handleClick">
    <PrizmTabPane label="User" name="first">User</PrizmTabPane>
    <PrizmTabPane label="Config" name="second">Config</PrizmTabPane>
    <PrizmTabPane label="Role" name="third">Role</PrizmTabPane>
    <PrizmTabPane label="Task" name="fourth">Task</PrizmTabPane>
  </PrizmTabs>
</template>
```

## Tab position

##### Вы можете выбрать одно из четырех направлений: <Badge type="info">tabPosition="left|right|top|bottom"</Badge>

```vue
<script lang="ts" setup>
import { PrizmTabs, PrizmTabPane, type TabsPaneContext, PrizmRadioGroup, PrizmRadioButton } from 'prizm-ui-vue';
import { ref } from 'vue';

const tabPosition = ref<TabsInstance['tabPosition']>('left');
</script>

<template>
  <PrizmRadioGroup v-model="tabPosition" style="margin-bottom: 30px">
    <PrizmRadioButton value="top">top</PrizmRadioButton>
    <PrizmRadioButton value="right">right</PrizmRadioButton>
    <PrizmRadioButton value="bottom">bottom</PrizmRadioButton>
    <PrizmRadioButton value="left">left</PrizmRadioButton>
  </PrizmRadioGroup>

  <PrizmTabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">
    <PrizmTabPane label="User">User</PrizmTabPane>
    <PrizmTabPane label="Config">Config</PrizmTabPane>
    <PrizmTabPane label="Role">Role</PrizmTabPane>
    <PrizmTabPane label="Task">Task</PrizmTabPane>
  </PrizmTabs>
</template>
```

### Add & close tab and Customized add button icon

##### Только вкладки типа карт поддерживают возможность добавления и закрытия.

```vue
<script lang="ts" setup>
import { PrizmTabs, PrizmTabPane, type TabPaneName, PrizmIcon, IconClose } from 'prizm-ui-vue';
import { ref } from 'vue';

let tabIndex = 2;
const editableTabsValue = ref('2');
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content',
  },
]);

const handleTabsEdit = (targetName: TabPaneName | undefined, action: 'remove' | 'add') => {
  if (action === 'add') {
    const newTabName = `${++tabIndex}`;
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    });
    editableTabsValue.value = newTabName;
  } else if (action === 'remove') {
    const tabs = editableTabs.value;
    let activeName = editableTabsValue.value;
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            activeName = nextTab.name;
          }
        }
      });
    }

    editableTabsValue.value = activeName;
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
  }
};
</script>

<template>
  <PrizmTabs v-model="editableTabsValue" type="card" class="demo-tabs" editable @edit="handleTabsEdit">
    <template #add-icon>
      <PrizmIcon><IconClose /></PrizmIcon>
    </template>
    <PrizmTabPane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
      {{ item.content }}
    </PrizmTabPane>
  </PrizmTabs>
</template>
```
