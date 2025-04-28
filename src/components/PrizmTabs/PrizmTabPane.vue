<script setup lang="ts">
import { ElTabPane } from 'element-plus';
import 'element-plus/es/components/tab-pane/style/css';
import { useTemplateRef } from 'vue';

type ElTabPaneProps = InstanceType<typeof ElTabPane>['$props'];
type PickedProps = Pick<ElTabPaneProps, 'label' | 'disabled' | 'name' | 'closable'>;

type Props = {
  label?: PickedProps['label'];
  disabled?: PickedProps['disabled'];
  name?: PickedProps['name'];
  closable?: PickedProps['closable'];
};

const props = defineProps<Props>();

type Slots = {
  default?: unknown;
  label?: unknown;
};

const slots = defineSlots<Slots>();

const baseTabPaneRef = useTemplateRef('baseTabPaneRef');

defineExpose({
  baseTabPaneRef,
});
</script>
<template>
  <ElTabPane ref="baseTabPaneRef" v-bind="props">
    <template #default v-if="slots.default">
      <slot />
    </template>

    <template #label v-if="slots.label">
      <slot name="label" />
    </template>
  </ElTabPane>
</template>
<style module="classes" lang="scss">
.root {
}
</style>
