<script setup lang="ts">
import { ElTabs } from 'element-plus';
import 'element-plus/es/components/tabs/style/css';
import { useTemplateRef, type PropType } from 'vue';

type ElTabsProps = InstanceType<typeof ElTabs>['$props'];
type PickedProps = Pick<
  ElTabsProps,
  | 'type'
  | 'onEdit'
  | 'onTabAdd'
  | 'onTabChange'
  | 'onTabClick'
  | 'onTabRemove'
  | 'addable'
  | 'beforeLeave'
  | 'editable'
  | 'closable'
>;

type TabsProps = {
  type?: PickedProps['type'];
  onEdit?: PickedProps['onEdit'];
  onTabAdd?: PickedProps['onTabAdd'];
  onTabChange?: PickedProps['onTabChange'];
  onTabClick?: PickedProps['onTabClick'];
  onTabRemove?: PickedProps['onTabRemove'];
  addable?: PickedProps['addable'];
  beforeLeave?: PickedProps['beforeLeave'];
  editable?: PickedProps['editable'];
};

type Slots = {
  default?: unknown;
};

const baseTabsRef = useTemplateRef('baseTabsRef');

const props = withDefaults(defineProps<TabsProps>(), {
  type: '',
});

const slots = defineSlots<Slots>();

const modelValue = defineModel({
  type: String as PropType<string | number>,
  required: true,
  default: '',
});

defineExpose({
  baseTabsRef,
});
</script>
<template>
  <ElTabs ref="baseTabsRef" v-bind="props" v-model="modelValue" :class="[classes.root]">
    <template #default v-if="slots.default">
      <slot />
    </template>
  </ElTabs>
</template>
<style module="classes" lang="scss">
.root {
  :global(.el-tabs__header) {
    margin: 0;
  }
}
</style>
