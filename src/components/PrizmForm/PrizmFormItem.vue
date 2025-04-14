<script setup lang="ts">
import { ElFormItem, type FormEmits, type FormItemProps } from 'element-plus';
import { useTemplateRef } from 'vue';
import 'element-plus/es/components/form-item/style/css';

type Slots = {
  default?: unknown;
  label?: unknown;
  error?: unknown;
};

type Props = {
  label?: FormItemProps['label'];
  prop?: FormItemProps['prop'];
  error?: FormItemProps['error'];
  required?: FormItemProps['required'];
  rules?: FormItemProps['rules'];
  showMessage?: FormItemProps['showMessage'];
};

const props = defineProps<Props>();

const slots = defineSlots<Slots>();

const baseFormItemRef = useTemplateRef('baseFormItemRef');

defineEmits<FormEmits>();

defineExpose({
  baseFormItemRef,
});
</script>
<template>
  <ElFormItem v-bind="props" ref="baseFormItemRef" :class="[classes.root]">
    <template #default v-if="slots.default">
      <slot />
    </template>

    <template #label v-if="slots.label">
      <slot name="label" />
    </template>

    <template #error v-if="slots.error">
      <slot name="error" />
    </template>
  </ElFormItem>
</template>
<style module="classes" lang="scss">
.root {
  --el-form-label-font-size: 12px;
  font-size: var(--el-form-label-font-size);
  color: var(--color-dark-gray);
  line-height: 16px;
  font-weight: 600;
  white-space: nowrap;
  margin-bottom: 0;

  label {
    cursor: default;
  }
}
</style>
