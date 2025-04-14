<script setup lang="ts">
import { ElInput, type InputEmits } from 'element-plus';
import 'element-plus/es/components/input/style/css';
import { useTemplateRef } from 'vue';

type Slots = {
  prefix?: unknown;
  suffix?: unknown;
  prepend?: unknown;
  append?: unknown;
};

type ElTableProps = InstanceType<typeof ElInput>['$props'];

type PickedProps = Pick<
  ElTableProps,
  | 'disabled'
  | 'maxlength'
  | 'minlength'
  | 'type'
  | 'autosize'
  | 'autocomplete'
  | 'placeholder'
  | 'suffixIcon'
  | 'prefixIcon'
  | 'autofocus'
  | 'formatter'
  | 'parser'
  | 'modelValue'
  | 'size'
  | 'id'
>;

type Props = {
  disabled?: PickedProps['disabled'];
  maxlength?: PickedProps['maxlength'];
  minlength?: PickedProps['minlength'];
  type?: PickedProps['type'];
  autosize?: PickedProps['autosize'];
  autocomplete?: PickedProps['autocomplete'];
  placeholder?: PickedProps['placeholder'];
  suffixIcon?: PickedProps['suffixIcon'];
  prefixIcon?: PickedProps['prefixIcon'];
  autofocus?: PickedProps['autofocus'];
  formatter?: PickedProps['formatter'];
  parser?: PickedProps['parser'];
  size?: PickedProps['size'];
};

const modelValue = defineModel<string | number>();

const props = withDefaults(defineProps<Props>(), { size: 'large' });

const slots = defineSlots<Slots>();
defineEmits<InputEmits>();

const baseInputRef = useTemplateRef('baseInputRef');

defineExpose({
  baseInputRef,
});
</script>
<template>
  <ElInput v-bind="props" ref="baseInputRef" v-model="modelValue" :class="[classes.root]">
    <template #prefix v-if="slots.prefix">
      <slot name="prefix" />
    </template>

    <template #suffix v-if="slots.suffix">
      <slot name="suffix" />
    </template>

    <template #prepend v-if="slots.prepend">
      <slot name="prepend" />
    </template>

    <template #append v-if="slots.append">
      <slot name="append" />
    </template>
  </ElInput>
</template>
<style module="classes" lang="scss">
.root {
  --el-input-bg-color: #fff;
  --el-fill-color-blank: #fff;
  --el-input-border-color: var(--color-gray);
  --el-input-border-radius: var(--border-radius);

  border-radius: var(--border-radius);

  &:global(.el-input.is-disabled) {
    --el-disabled-bg-color: var(--color-light-gray);
    --el-disabled-border-color: var(--color-gray);
    opacity: 50%;
  }

  :global(.el-input__inner::-webkit-input-placeholder) {
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
  }
}
</style>
