<script setup lang="ts">
import { ref } from 'vue';
import {
  PrizmButton,
  PrizmTag,
  PrizmInput,
  PrizmDatePicker,
  PrizmForm,
  PrizmFormItem,
  PrizmDrawer,
  PrizmMessageBox,
  PrizmNotification,
  PrizmTabs,
  PrizmTabPane,
  PrizmRadioGroup,
  PrizmRadioButton,
  PrizmRadio,
  PrizmSelect,
  PrizmOption,
  PrizmCollapse,
  PrizmCollapseItem,
  PrizmDropdownItem,
  PrizmDropdown,
  PrizmDropdownMenu,
  PrizmTable,
  PrizmTableColumn,
} from './components';
import { type BaseNotificationProps } from './components/PrizmNotification/PrizmNotification';

const datePicker = ref('');
const drawer = ref(false);

const tabs = ref('id1');
const radio = ref('id1');
const select = ref('');
const selects = ref([]);

function onOpenDrawer() {
  return (drawer.value = !drawer.value);
}
function onOpenMessageBox(variant: 'primary' | 'danger') {
  PrizmMessageBox({
    title: 'Привет',
    message: `Message body variant: ${variant}`,
    variant: variant,
  });
}

function onOpenNotification(type: BaseNotificationProps['type']) {
  PrizmNotification({
    title: type,
    type: type,
    message: `Variant type: ${type}`,
  });
}

const table = [
  {
    id: 1,
    name: 'Col1',
    sex: 'woomen',
    age: Math.floor(Math.random() * 98) + 2,
  },
  {
    id: 2,
    name: 'Col2',
    sex: 'man',
    age: Math.floor(Math.random() * 98) + 2,
  },
  {
    id: 3,
    name: 'Col3',
    sex: 'woomen',
    age: Math.floor(Math.random() * 98) + 2,
  },
  {
    id: 4,
    name: 'Col4',
    sex: 'man',
    age: Math.floor(Math.random() * 98) + 2,
  },
];
</script>
<template>
  <div :class="classes.root">
    <h3>Button</h3>

    <div :class="classes.group">
      <PrizmButton>PrizmButton</PrizmButton>

      <PrizmButton type="primary">PrizmButton</PrizmButton>

      <PrizmButton type="info">PrizmButton</PrizmButton>

      <PrizmButton type="success">PrizmButton</PrizmButton>

      <PrizmButton type="danger">PrizmButton</PrizmButton>

      <PrizmButton type="warning">PrizmButton</PrizmButton>
    </div>

    <h3>Tag</h3>

    <div :class="classes.group">
      <PrizmTag type="primary">PrizmTag</PrizmTag>

      <PrizmTag>PrizmTag</PrizmTag>

      <PrizmTag type="success">PrizmTag</PrizmTag>

      <PrizmTag type="danger">PrizmTag</PrizmTag>

      <PrizmTag type="warning">PrizmTag</PrizmTag>
    </div>

    <h3>Input</h3>

    <div :class="classes.group">
      <PrizmInput placeholder="PrizmInput" />

      <PrizmInput placeholder="PrizmInput" size="default" />

      <PrizmInput placeholder="PrizmInput" size="small" />
    </div>

    <h3>DatePicker</h3>

    <div :class="classes.group">
      <PrizmDatePicker v-model="datePicker" placeholder="PrizmDatePicker" />

      <PrizmDatePicker v-model="datePicker" placeholder="PrizmDatePicker" size="default" />

      <PrizmDatePicker v-model="datePicker" placeholder="PrizmDatePicker" size="small" />
    </div>

    <h3>Form</h3>

    <div :class="classes.group">
      <PrizmForm ref="prizmForm">
        <PrizmFormItem label="PrizmForm with PrizmFormItem 1">
          <PrizmInput placeholder="PrizmInput" />
        </PrizmFormItem>

        <PrizmFormItem label="PrizmForm with PrizmFormItem 2">
          <PrizmInput placeholder="PrizmInput" />
        </PrizmFormItem>

        <PrizmFormItem label="PrizmForm with PrizmFormItem 3">
          <PrizmInput placeholder="PrizmInput" />
        </PrizmFormItem>

        <PrizmFormItem>
          <PrizmButton nativeType="submit" type="primary">Submit!</PrizmButton>
        </PrizmFormItem>

        <PrizmFormItem>
          <PrizmButton type="default">Cancel!</PrizmButton>
        </PrizmFormItem>
      </PrizmForm>
    </div>

    <h3>Drawer</h3>

    <div :class="classes.group">
      <PrizmButton @click="onOpenDrawer">Open PrizmDrawer</PrizmButton>
    </div>

    <h3>MessageBox</h3>

    <div :class="classes.group">
      <PrizmButton type="primary" @click="onOpenMessageBox('primary')">Open PrizmMessageBox primary</PrizmButton>

      <PrizmButton type="danger" @click="onOpenMessageBox('danger')">Open PrizmMessageBox danger</PrizmButton>
    </div>

    <h3>Notification</h3>

    <div :class="classes.group">
      <PrizmButton type="danger" @click="onOpenNotification('error')">Open PrizmNotification error</PrizmButton>

      <PrizmButton type="primary" @click="onOpenNotification('info')">Open PrizmNotification info</PrizmButton>

      <PrizmButton type="success" @click="onOpenNotification('success')">Open PrizmNotification success</PrizmButton>

      <PrizmButton type="warning" @click="onOpenNotification('warning')">Open PrizmNotification warning</PrizmButton>
    </div>

    <h3>Tabs</h3>

    <div :class="classes.group">
      <PrizmTabs v-model="tabs">
        <PrizmTabPane label="Привет" name="id1" />

        <PrizmTabPane label="Как дела?" name="id3" />

        <PrizmTabPane label="Пока" name="id2" />
      </PrizmTabs>

      <PrizmTabs v-model="tabs" type="card">
        <PrizmTabPane label="Привет" name="id1" />

        <PrizmTabPane label="Как дела?" name="id3" />

        <PrizmTabPane label="Пока" name="id2" />
      </PrizmTabs>
    </div>

    <h3>Radio button</h3>

    <div :class="classes.group">
      <PrizmRadioGroup v-model="radio">
        <PrizmRadioButton value="id1">Привет</PrizmRadioButton>

        <PrizmRadioButton value="id2">Как дела?</PrizmRadioButton>

        <PrizmRadioButton value="id3">Пока</PrizmRadioButton>
      </PrizmRadioGroup>
    </div>

    <h3>Radio</h3>

    <div :class="classes.group">
      <PrizmRadioGroup v-model="radio">
        <PrizmRadio value="id1">Привет</PrizmRadio>

        <PrizmRadio value="id2">Как дела?</PrizmRadio>

        <PrizmRadio value="id3">Пока</PrizmRadio>
      </PrizmRadioGroup>
    </div>

    <h3>Select</h3>

    <div :class="classes.group">
      <PrizmSelect v-model="select">
        <PrizmOption label="Option1" value="option1" />

        <PrizmOption label="Option2" value="option2" />

        <PrizmOption label="Option3" value="option3" />
      </PrizmSelect>

      <PrizmSelect v-model="selects" :multiple="true">
        <PrizmOption label="Option1" value="option1" />

        <PrizmOption label="Option2" value="option2" />

        <PrizmOption label="Option3" value="option3" />
      </PrizmSelect>
    </div>

    <div :class="classes.group">
      <PrizmSelect v-model="select">
        <PrizmOption label="Option1" value="option1" />

        <PrizmOption label="Option2" value="option2" />

        <PrizmOption label="Option3" value="option3" />
      </PrizmSelect>

      <PrizmSelect v-model="select" size="default">
        <PrizmOption label="Option1" value="option1" />

        <PrizmOption label="Option2" value="option2" />

        <PrizmOption label="Option3" value="option3" />
      </PrizmSelect>

      <PrizmSelect v-model="select" size="small">
        <PrizmOption label="Option1" value="option1" />

        <PrizmOption label="Option2" value="option2" />

        <PrizmOption label="Option3" value="option3" />
      </PrizmSelect>
    </div>

    <h3>Collapse</h3>

    <div :class="classes.group">
      <PrizmCollapse>
        <PrizmCollapseItem name="one" title="PrizmCollapseItem1">
          <div>Привет</div>
        </PrizmCollapseItem>

        <PrizmCollapseItem name="two" title="PrizmCollapseItem2">
          <div>Как дела?</div>
        </PrizmCollapseItem>

        <PrizmCollapseItem name="three" title="PrizmCollapseItem3">
          <div>Пока</div>
        </PrizmCollapseItem>
      </PrizmCollapse>
    </div>

    <h3>Dropdown</h3>

    <div :class="classes.group">
      <PrizmDropdown>
        <PrizmButton type="primary">Dropdown</PrizmButton>

        <template #dropdown>
          <PrizmDropdownMenu>
            <PrizmDropdownItem>Привет</PrizmDropdownItem>

            <PrizmDropdownItem>Как дела?</PrizmDropdownItem>

            <PrizmDropdownItem>Пока</PrizmDropdownItem>
          </PrizmDropdownMenu>
        </template>
      </PrizmDropdown>

      <PrizmDropdown :splitButton="true" size="default">
        <p>Dropdown split</p>

        <template #dropdown>
          <PrizmDropdownMenu>
            <PrizmDropdownItem>Привет</PrizmDropdownItem>

            <PrizmDropdownItem>Как дела?</PrizmDropdownItem>

            <PrizmDropdownItem>Пока</PrizmDropdownItem>
          </PrizmDropdownMenu>
        </template>
      </PrizmDropdown>

      <PrizmDropdown size="small" type="warning" :splitButton="true">
        Dropdown small warning

        <template #dropdown>
          <PrizmDropdownMenu>
            <PrizmDropdownItem>Привет</PrizmDropdownItem>

            <PrizmDropdownItem>Как дела?</PrizmDropdownItem>

            <PrizmDropdownItem>Пока</PrizmDropdownItem>
          </PrizmDropdownMenu>
        </template>
      </PrizmDropdown>

      <PrizmDropdown size="small" type="danger" :splitButton="true">
        Dropdown small danger

        <template #dropdown>
          <PrizmDropdownMenu>
            <PrizmDropdownItem>Привет</PrizmDropdownItem>

            <PrizmDropdownItem>Как дела?</PrizmDropdownItem>

            <PrizmDropdownItem>Пока</PrizmDropdownItem>
          </PrizmDropdownMenu>
        </template>
      </PrizmDropdown>

      <PrizmDropdown size="small" type="info" :splitButton="true">
        Dropdown small info

        <template #dropdown>
          <PrizmDropdownMenu>
            <PrizmDropdownItem>Привет</PrizmDropdownItem>

            <PrizmDropdownItem>Как дела?</PrizmDropdownItem>

            <PrizmDropdownItem>Пока</PrizmDropdownItem>
          </PrizmDropdownMenu>
        </template>
      </PrizmDropdown>

      <PrizmDropdown size="small" type="success" :splitButton="true">
        Dropdown small success

        <template #dropdown>
          <PrizmDropdownMenu>
            <PrizmDropdownItem>Привет</PrizmDropdownItem>

            <PrizmDropdownItem>Как дела?</PrizmDropdownItem>

            <PrizmDropdownItem>Пока</PrizmDropdownItem>
          </PrizmDropdownMenu>
        </template>
      </PrizmDropdown>

      <PrizmDropdown size="small" type="text" :splitButton="true">
        Dropdown small text

        <template #dropdown>
          <PrizmDropdownMenu>
            <PrizmDropdownItem>Привет</PrizmDropdownItem>

            <PrizmDropdownItem>Как дела?</PrizmDropdownItem>

            <PrizmDropdownItem>Пока</PrizmDropdownItem>
          </PrizmDropdownMenu>
        </template>
      </PrizmDropdown>
    </div>

    <h3>Table</h3>

    <div :class="classes.group">
      <PrizmTable :data="table">
        <PrizmTableColumn label="Name" prop="name" fixed width="180" sortable />

        <PrizmTableColumn label="Sex" prop="sex" fixed width="180" sortable />

        <PrizmTableColumn label="Age" prop="age" fixed width="180" sortable />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />

        <PrizmTableColumn label="MockAge" prop="age" width="180" />
      </PrizmTable>
    </div>
  </div>

  <PrizmDrawer v-model="drawer" />
</template>
<style module="classes" lang="scss">
.root {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.group {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
