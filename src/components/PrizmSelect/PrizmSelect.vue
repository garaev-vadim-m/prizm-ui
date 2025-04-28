<script setup lang="ts">
import { ElSelect } from 'element-plus';
import 'element-plus/es/components/select/style/css';
import { useTemplateRef, type PropType } from 'vue';

type ElSelectProps = InstanceType<typeof ElSelect>['$props'];

type PickedProps = Pick<
  ElSelectProps,
  | 'size'
  | 'clearable'
  | 'clearIcon'
  | 'effect'
  | 'filterable'
  | 'placeholder'
  | 'defaultFirstOption'
  | 'onClear'
  | 'onChange'
  | 'onRemove-tag'
  | 'multiple'
  | 'fallbackPlacements'
  | 'disabled'
  | 'noDataText'
  | 'placement'
>;
type Slots = {
  default?: unknown;
  header?: unknown;
  footer?: unknown;
  prefix?: unknown;
  empty?: unknown;
  tag?: unknown;
  loading?: unknown;
  label?: unknown;
};
const baseSelectRef = useTemplateRef('baseSelectRef');
const slots = defineSlots<Slots>();

const modelValue = defineModel({
  type: String as PropType<string | number | boolean | string[] | number[]>,
  required: true,
  default: '',
});

type Props = {
  size?: PickedProps['size'];
  clearable?: PickedProps['clearable'];
  clearIcon?: PickedProps['clearIcon'];
  effect?: PickedProps['effect'];
  filterable?: PickedProps['filterable'];
  placeholder?: PickedProps['placeholder'];
  defaultFirstOption?: PickedProps['defaultFirstOption'];
  onClear?: PickedProps['onClear'];
  onChange?: PickedProps['onChange'];
  onRemoveTag?: PickedProps['onRemove-tag'];
  multiple?: PickedProps['multiple'];
  fallbackPlacements?: PickedProps['fallbackPlacements'];
  disabled?: PickedProps['disabled'];
  noDataText?: PickedProps['noDataText'];
  placement?: PickedProps['placement'];
};

const props = withDefaults(defineProps<Props>(), {
  size: 'large',
  noDataText: 'Нет данных',
  filterable: true,
  placement: 'bottom-start',
});

defineExpose({
  baseSelectRef,
});
</script>
<template>
  <ElSelect ref="baseSelectRef" v-model="modelValue" :class="[classes.root]" v-bind="props">
    <template #default v-if="slots.default">
      <slot />
    </template>

    <template #header v-if="slots.header">
      <slot name="header" />
    </template>

    <template #label v-if="slots.label">
      <slot name="label" />
    </template>

    <template #empty v-if="slots.empty">
      <slot name="empty" />
    </template>

    <template #footer v-if="slots.footer">
      <slot name="footer" />
    </template>

    <template #prefix v-if="slots.prefix">
      <slot name="prefix" />
    </template>

    <template #loading v-if="slots.loading">
      <slot name="loading" />
    </template>

    <template #tag v-if="slots.tag">
      <slot name="tag" />
    </template>
  </ElSelect>
</template>
<style module="classes" lang="scss">
.root {
  --el-fill-color-blank: #fff;
  --el-border-radius-base: var(--border-radius);
  --el-border-color: var(--color-gray);
  --el-select-border-color-hover: var(--color-gray);
  --el-select-input-focus-border-color: var(--color-gray);
  font-weight: 400;
  background-color: #fff;
}
</style>
