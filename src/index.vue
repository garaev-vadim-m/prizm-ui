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
} from './components';
import { type BaseNotificationProps } from './components/PrizmNotification/PrizmNotification';

const datePicker = ref('');
const drawer = ref(false);

const tabs = ref('');

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
      <PrizmForm>
        <PrizmFormItem label="PrizmForm with PrizmFormItem">
          <PrizmInput placeholder="PrizmInput" />
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
